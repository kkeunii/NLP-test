(function () {
  const chapterStore = window.quizChapterData || {};
  const chapterOrder = Array.from({ length: 9 }, (_, index) => index + 1);
  const STORAGE_KEY = "nlp-quiz-progress-v1";
  const state = {
    selectedChapters: new Set(),
    loadedChapters: [],
    activeQuestions: [],
    results: {},
  };

  const typeLabels = {
    multiple: "4지선다",
    multiSelect: "복수선택",
    blank: "빈칸",
    tf: "OX",
    numeric: "계산형",
    essay: "서술형",
  };

  const chapterGrid = document.getElementById("chapter-grid");
  const selectionSummary = document.getElementById("selection-summary");
  const startButton = document.getElementById("start-button");
  const selectAllButton = document.getElementById("select-all-button");
  const clearAllButton = document.getElementById("clear-all-button");
  const resetProgressButton = document.getElementById("reset-progress-button");
  const quizList = document.getElementById("quiz-list");
  const emptyState = document.getElementById("quiz-empty-state");
  const totalCount = document.getElementById("total-count");
  const attemptedCount = document.getElementById("attempted-count");
  const correctCount = document.getElementById("correct-count");
  const accuracyCount = document.getElementById("accuracy-count");
  const statusNote = document.getElementById("status-note");
  const wrongReviewCount = document.getElementById("wrong-review-count");
  const wrongReviewList = document.getElementById("wrong-review-list");
  const wrongReviewEmptyState = document.getElementById("wrong-review-empty-state");

  restorePersistedState();
  renderChapterSelectors();
  syncChapterInputs();
  updateSelectionSummary();
  if (state.loadedChapters.length > 0) {
    loadQuestionsForChapters(state.loadedChapters, { restored: true });
  } else {
    updateStats();
  }

  selectAllButton.addEventListener("click", function () {
    chapterOrder.forEach(function (chapterNumber) {
      state.selectedChapters.add(chapterNumber);
    });
    syncChapterInputs();
    updateSelectionSummary();
    persistState();
  });

  clearAllButton.addEventListener("click", function () {
    state.selectedChapters.clear();
    syncChapterInputs();
    updateSelectionSummary();
    persistState();
  });

  startButton.addEventListener("click", function () {
    loadSelectedQuestions();
  });

  resetProgressButton.addEventListener("click", function () {
    state.results = {};
    persistState();
    updateStats();
    rerenderCurrentQuiz();
  });

  function renderChapterSelectors() {
    const fragment = document.createDocumentFragment();

    chapterOrder.forEach(function (chapterNumber) {
      const chapterData = getChapterData(chapterNumber);
      const questionCount = chapterData.questions.length;

      const wrapper = document.createElement("div");
      wrapper.className = "chapter-card";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = "chapter-" + chapterNumber;
      input.value = String(chapterNumber);
      input.checked = state.selectedChapters.has(chapterNumber);
      input.addEventListener("change", function (event) {
        if (event.target.checked) {
          state.selectedChapters.add(chapterNumber);
        } else {
          state.selectedChapters.delete(chapterNumber);
        }
        updateSelectionSummary();
        persistState();
      });

      const label = document.createElement("label");
      label.className = "chapter-label";
      label.setAttribute("for", input.id);

      const title = document.createElement("strong");
      title.textContent = chapterData.title || chapterNumber + "장";

      const countChip = document.createElement("span");
      countChip.className = "question-count";
      countChip.textContent = questionCount + "문제";

      const desc = document.createElement("small");
      desc.textContent =
        questionCount > 0
          ? "선택하면 이 장의 문제를 함께 불러옵니다."
          : "아직 문제가 없습니다. 나중에 이 파일에 추가하면 됩니다.";

      label.appendChild(title);
      label.appendChild(countChip);
      label.appendChild(desc);

      wrapper.appendChild(input);
      wrapper.appendChild(label);
      fragment.appendChild(wrapper);
    });

    chapterGrid.innerHTML = "";
    chapterGrid.appendChild(fragment);
  }

  function syncChapterInputs() {
    chapterOrder.forEach(function (chapterNumber) {
      const input = document.getElementById("chapter-" + chapterNumber);
      if (input) {
        input.checked = state.selectedChapters.has(chapterNumber);
      }
    });
  }

  function updateSelectionSummary() {
    const selected = chapterOrder.filter(function (chapterNumber) {
      return state.selectedChapters.has(chapterNumber);
    });

    if (selected.length === 0) {
      selectionSummary.textContent = "선택한 장이 없습니다.";
      return;
    }

    const questionTotal = selected.reduce(function (sum, chapterNumber) {
      return sum + getChapterData(chapterNumber).questions.length;
    }, 0);

    selectionSummary.textContent =
      selected.map(function (value) {
        return value + "장";
      }).join(", ") +
      " 선택됨 · 총 " +
      questionTotal +
      "문제";
  }

  function getChapterData(chapterNumber) {
    const stored = chapterStore[chapterNumber];
    return {
      title: stored && stored.title ? stored.title : chapterNumber + "장",
      questions: stored && Array.isArray(stored.questions) ? stored.questions : [],
    };
  }

  function loadSelectedQuestions() {
    const selected = chapterOrder.filter(function (chapterNumber) {
      return state.selectedChapters.has(chapterNumber);
    });

    if (selected.length === 0) {
      state.activeQuestions = [];
      state.loadedChapters = [];
      persistState();
      renderQuiz();
      statusNote.textContent = "장을 하나 이상 선택해야 문제를 불러올 수 있습니다.";
      return;
    }

    loadQuestionsForChapters(selected);
  }

  function loadQuestionsForChapters(chapterNumbers, options) {
    const normalizedChapters = normalizeChapterNumbers(chapterNumbers);
    const mergedQuestions = [];

    normalizedChapters.forEach(function (chapterNumber) {
      const chapterData = getChapterData(chapterNumber);
      chapterData.questions.forEach(function (question, questionIndex) {
        mergedQuestions.push({
          ...question,
          chapterNumber: chapterNumber,
          uid:
            question.id ||
            "chapter-" + chapterNumber + "-question-" + (questionIndex + 1),
        });
      });
    });

    state.loadedChapters = normalizedChapters;
    state.activeQuestions = mergedQuestions;
    persistState();
    renderQuiz();

    if (mergedQuestions.length === 0) {
      statusNote.textContent =
        "선택한 장에는 아직 문제가 없습니다. 장별 파일에 문제를 추가하면 바로 나타납니다.";
    } else {
      const restored = options && options.restored === true;
      statusNote.textContent =
        normalizedChapters.length +
        "개 장에서 " +
        mergedQuestions.length +
        "문제를 불러왔습니다. " +
        (restored ? "이전 풀이 상태도 함께 복원했습니다. " : "") +
        "객관식은 즉시 채점되고, 서술형은 키워드 기준 참고 채점과 모범답안을 표시합니다.";
    }
  }

  function renderQuiz() {
    quizList.innerHTML = "";

    if (state.activeQuestions.length === 0) {
      emptyState.style.display = "block";
      updateStats();
      renderWrongAnswerSection();
      return;
    }

    emptyState.style.display = "none";
    const fragment = document.createDocumentFragment();

    state.activeQuestions.forEach(function (question, index) {
      const card = buildQuestionCard(question, index);
      fragment.appendChild(card);
    });

    quizList.appendChild(fragment);
    updateStats();
    renderWrongAnswerSection();
  }

  function rerenderCurrentQuiz() {
    renderQuiz();
  }

  function buildQuestionCard(question, index) {
    const card = document.createElement("article");
    card.className = "quiz-card";
    card.id = "question-card-" + question.uid;

    const existingResult = state.results[question.uid];
    if (existingResult) {
      if (existingResult.isCorrect === true) {
        card.classList.add("correct");
      } else if (existingResult.isCorrect === false) {
        card.classList.add("wrong");
      } else {
        card.classList.add("pending");
      }
    }

    const topline = document.createElement("div");
    topline.className = "question-topline";

    const questionIndex = document.createElement("div");
    questionIndex.className = "question-index";

    const chapterBadge = document.createElement("span");
    chapterBadge.className = "question-badge";
    chapterBadge.textContent = question.chapterNumber + "장";

    const numberLabel = document.createElement("span");
    numberLabel.textContent = "문제 " + (index + 1);

    questionIndex.appendChild(chapterBadge);
    questionIndex.appendChild(numberLabel);

    const typeBadge = document.createElement("span");
    typeBadge.className = "type-badge";
    typeBadge.textContent = typeLabels[question.type] || "문제";

    topline.appendChild(questionIndex);
    topline.appendChild(typeBadge);

    const prompt = document.createElement("p");
    prompt.className = "question-prompt";
    prompt.textContent = question.prompt || "";

    const answerArea = document.createElement("div");

    if (question.type === "multiple") {
      answerArea.appendChild(buildMultipleChoice(question));
    } else if (question.type === "multiSelect") {
      answerArea.appendChild(buildMultiSelect(question));
    } else if (question.type === "tf") {
      answerArea.appendChild(buildTrueFalse(question));
    } else if (question.type === "blank" || question.type === "numeric") {
      answerArea.appendChild(buildTextAnswer(question));
    } else if (question.type === "essay") {
      answerArea.appendChild(buildEssayAnswer(question));
    } else {
      const unsupported = document.createElement("p");
      unsupported.className = "help-text";
      unsupported.textContent =
        "지원하지 않는 문제 유형입니다. type 값을 다시 확인해주세요.";
      answerArea.appendChild(unsupported);
    }

    const resultBox = buildResultBox(question);

    card.appendChild(topline);
    card.appendChild(prompt);
    card.appendChild(answerArea);
    card.appendChild(resultBox);
    return card;
  }

  function buildMultipleChoice(question) {
    const wrapper = document.createElement("div");
    wrapper.className = "choice-list";

    const choices = Array.isArray(question.choices) ? question.choices : [];
    const groupName = question.uid + "-choice";

    choices.forEach(function (choiceText, choiceIndex) {
      const optionLabel = document.createElement("label");
      optionLabel.className = "choice-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = groupName;
      input.value = String(choiceIndex);

      const priorResult = state.results[question.uid];
      if (priorResult && priorResult.submittedValue === String(choiceIndex)) {
        input.checked = true;
      }

      input.addEventListener("change", function () {
        evaluateQuestion(question, String(choiceIndex));
      });

      const text = document.createElement("span");
      text.textContent = (choiceIndex + 1).toString() + ". " + choiceText;

      optionLabel.appendChild(input);
      optionLabel.appendChild(text);
      wrapper.appendChild(optionLabel);
    });

    return wrapper;
  }

  function buildMultiSelect(question) {
    const wrapper = document.createElement("div");
    const list = document.createElement("div");
    list.className = "choice-list";

    const choices = Array.isArray(question.choices) ? question.choices : [];
    const priorResult = state.results[question.uid];
    const priorSelections =
      priorResult && Array.isArray(priorResult.submittedValue)
        ? new Set(priorResult.submittedValue)
        : new Set();

    choices.forEach(function (choiceText, choiceIndex) {
      const optionLabel = document.createElement("label");
      optionLabel.className = "choice-option";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = question.uid + "-multi";
      input.value = String(choiceIndex);
      input.checked = priorSelections.has(String(choiceIndex));

      const text = document.createElement("span");
      text.textContent = (choiceIndex + 1).toString() + ". " + choiceText;

      optionLabel.appendChild(input);
      optionLabel.appendChild(text);
      list.appendChild(optionLabel);
    });

    const actionRow = document.createElement("div");
    actionRow.className = "answer-block";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "check-button";
    button.textContent = "정답 확인";
    button.addEventListener("click", function () {
      const selected = Array.from(list.querySelectorAll("input:checked")).map(function (
        input
      ) {
        return input.value;
      });
      evaluateQuestion(question, selected);
    });

    actionRow.appendChild(button);
    wrapper.appendChild(list);
    wrapper.appendChild(actionRow);

    const helpText = document.createElement("p");
    helpText.className = "help-text";
    helpText.textContent =
      "정답이라고 생각하는 보기를 모두 체크한 뒤 확인을 누르세요.";
    wrapper.appendChild(helpText);

    return wrapper;
  }

  function buildTrueFalse(question) {
    const tfQuestion = {
      ...question,
      type: "multiple",
      choices: question.labels || ["T", "F"],
      correctIndex: question.answer === false ? 1 : 0,
    };

    return buildMultipleChoice(tfQuestion);
  }

  function buildTextAnswer(question) {
    const wrapper = document.createElement("div");

    const answerBlock = document.createElement("div");
    answerBlock.className = "answer-block";

    const input = document.createElement("input");
    input.type = question.type === "numeric" ? "number" : "text";
    input.className = "answer-input";
    input.placeholder =
      question.placeholder ||
      (question.type === "numeric" ? "숫자로 답을 입력하세요" : "답을 입력하세요");
    input.step = "any";

    const priorResult = state.results[question.uid];
    if (priorResult && typeof priorResult.submittedValue === "string") {
      input.value = priorResult.submittedValue;
    }

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        evaluateQuestion(question, input.value);
      }
    });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "check-button";
    button.textContent = "정답 확인";
    button.addEventListener("click", function () {
      evaluateQuestion(question, input.value);
    });

    answerBlock.appendChild(input);
    answerBlock.appendChild(button);
    wrapper.appendChild(answerBlock);

    const helpText = document.createElement("p");
    helpText.className = "help-text";
    helpText.textContent =
      question.type === "numeric"
        ? "숫자를 입력한 뒤 확인을 누르거나 Enter를 누르세요."
        : "답을 입력한 뒤 확인을 누르거나 Enter를 누르세요.";
    wrapper.appendChild(helpText);

    return wrapper;
  }

  function buildEssayAnswer(question) {
    const wrapper = document.createElement("div");

    const answerBlock = document.createElement("div");
    answerBlock.className = "answer-block";

    const textarea = document.createElement("textarea");
    textarea.className = "answer-input essay-input";
    textarea.placeholder =
      question.placeholder || "핵심 개념을 포함해서 자유롭게 서술해보세요";

    const priorResult = state.results[question.uid];
    if (priorResult && typeof priorResult.submittedValue === "string") {
      textarea.value = priorResult.submittedValue;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "check-button";
    button.textContent = "답안 비교";
    button.addEventListener("click", function () {
      evaluateQuestion(question, textarea.value);
    });

    answerBlock.appendChild(textarea);
    answerBlock.appendChild(button);
    wrapper.appendChild(answerBlock);

    const helpText = document.createElement("p");
    helpText.className = "help-text";
    helpText.textContent =
      "서술형은 키워드 기반 참고 채점입니다. 제출 후 모범답안과 해설을 함께 확인하세요.";
    wrapper.appendChild(helpText);

    return wrapper;
  }

  function buildResultBox(question) {
    const resultBox = document.createElement("div");
    resultBox.className = "result-box";
    resultBox.id = "result-" + question.uid;

    const result = state.results[question.uid];
    if (!result) {
      return resultBox;
    }

    const title = document.createElement("p");
    title.className = "result-title";
    title.textContent = getResultTitle(question, result);

    const answer = document.createElement("p");
    answer.className = "result-answer";
    answer.textContent =
      (question.type === "essay" ? "모범답안: " : "정답: ") + getAnswerText(question);

    let meta = null;
    if (
      result.gradingMode === "keyword" &&
      typeof result.matchedGroups === "number" &&
      typeof result.totalGroups === "number"
    ) {
      meta = document.createElement("p");
      meta.className = "result-meta";
      meta.textContent =
        "키워드 기준 참고 채점 · " +
        result.matchedGroups +
        "/" +
        result.totalGroups +
        " 핵심 포인트 일치";
    }

    const explanation = document.createElement("p");
    explanation.className = "result-explanation";
    explanation.textContent =
      "해설: " + (question.explanation || "아직 해설이 입력되지 않았습니다.");

    resultBox.classList.add("visible");
    if (result.isCorrect === true) {
      resultBox.classList.add("correct");
    } else if (result.isCorrect === false) {
      resultBox.classList.add("wrong");
    } else {
      resultBox.classList.add("pending");
    }
    resultBox.appendChild(title);
    resultBox.appendChild(answer);
    if (meta) {
      resultBox.appendChild(meta);
    }
    resultBox.appendChild(explanation);
    return resultBox;
  }

  function renderWrongAnswerSection() {
    if (!wrongReviewList || !wrongReviewEmptyState || !wrongReviewCount) {
      return;
    }

    wrongReviewList.innerHTML = "";

    const wrongQuestions = state.activeQuestions.filter(function (question) {
      return state.results[question.uid] && state.results[question.uid].isCorrect === false;
    });

    wrongReviewCount.textContent = wrongQuestions.length + "문제";

    if (wrongQuestions.length === 0) {
      wrongReviewEmptyState.style.display = "block";
      return;
    }

    wrongReviewEmptyState.style.display = "none";
    const fragment = document.createDocumentFragment();

    wrongQuestions.forEach(function (question, index) {
      fragment.appendChild(buildWrongAnswerCard(question, index));
    });

    wrongReviewList.appendChild(fragment);
  }

  function buildWrongAnswerCard(question, index) {
    const result = state.results[question.uid];
    const card = document.createElement("article");
    card.className = "review-card";

    const header = document.createElement("div");
    header.className = "review-header";

    const title = document.createElement("div");
    title.className = "review-title";

    const badge = document.createElement("span");
    badge.className = "question-badge";
    badge.textContent = question.chapterNumber + "장";

    const label = document.createElement("span");
    label.textContent = "오답 " + (index + 1);

    title.appendChild(badge);
    title.appendChild(label);
    header.appendChild(title);

    const typeBadge = document.createElement("span");
    typeBadge.className = "type-badge";
    typeBadge.textContent = typeLabels[question.type] || "문제";
    header.appendChild(typeBadge);

    const body = document.createElement("div");
    body.className = "review-body";

    const prompt = document.createElement("p");
    prompt.className = "review-prompt";
    prompt.textContent = question.prompt || "";

    const submitted = document.createElement("p");
    submitted.className = "review-copy";
    submitted.innerHTML =
      "<strong>내 답안:</strong> " + escapeHtml(getSubmittedText(question, result));

    const answer = document.createElement("p");
    answer.className = "review-copy";
    answer.innerHTML =
      "<strong>정답:</strong> " + escapeHtml(getAnswerText(question));

    const explanation = document.createElement("p");
    explanation.className = "review-copy";
    explanation.innerHTML =
      "<strong>해설:</strong> " +
      escapeHtml(question.explanation || "아직 해설이 입력되지 않았습니다.");

    const actions = document.createElement("div");
    actions.className = "review-actions";

    const jumpButton = document.createElement("button");
    jumpButton.type = "button";
    jumpButton.className = "link-button";
    jumpButton.textContent = "원문제로 이동";
    jumpButton.addEventListener("click", function () {
      const target = document.getElementById("question-card-" + question.uid);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });

    actions.appendChild(jumpButton);
    body.appendChild(prompt);
    body.appendChild(submitted);
    body.appendChild(answer);
    body.appendChild(explanation);
    body.appendChild(actions);

    card.appendChild(header);
    card.appendChild(body);
    return card;
  }

  function evaluateQuestion(question, rawValue) {
    const submittedValue = normalizeSubmittedValue(rawValue);

    if (isEmptySubmission(submittedValue)) {
      state.results[question.uid] = {
        isCorrect: false,
        submittedValue: submittedValue,
      };
      persistState();
      renderQuiz();
      return;
    }

    state.results[question.uid] = gradeQuestion(question, submittedValue);
    persistState();

    renderQuiz();
    const resultElement = document.getElementById("result-" + question.uid);
    if (resultElement) {
      resultElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  function normalizeSubmittedValue(rawValue) {
    if (Array.isArray(rawValue)) {
      return rawValue.map(String).sort();
    }

    if (typeof rawValue === "string") {
      return rawValue.trim();
    }

    return String(rawValue).trim();
  }

  function isEmptySubmission(submittedValue) {
    if (Array.isArray(submittedValue)) {
      return submittedValue.length === 0;
    }

    return !submittedValue;
  }

  function gradeQuestion(question, submittedValue) {
    if (question.type === "multiSelect") {
      const correctIndexes = Array.isArray(question.correctIndexes)
        ? question.correctIndexes.map(String).sort()
        : [];

      return {
        isCorrect: arraysEqual(submittedValue, correctIndexes),
        submittedValue: submittedValue,
      };
    }

    if (question.type === "essay") {
      const rubric = Array.isArray(question.rubric) ? question.rubric : [];

      if (rubric.length === 0) {
        return {
          isCorrect: null,
          submittedValue: submittedValue,
          gradingMode: "manual",
        };
      }

      const matchedGroups = countMatchedRubricGroups(submittedValue, rubric);
      const minimumMatches =
        typeof question.minimumMatches === "number"
          ? question.minimumMatches
          : rubric.length;

      return {
        isCorrect: matchedGroups >= minimumMatches,
        submittedValue: submittedValue,
        gradingMode: "keyword",
        matchedGroups: matchedGroups,
        totalGroups: rubric.length,
      };
    }

    return {
      isCorrect: checkAnswer(question, submittedValue),
      submittedValue: submittedValue,
    };
  }

  function checkAnswer(question, submittedValue) {
    if (question.type === "multiple") {
      return String(question.correctIndex) === submittedValue;
    }

    if (question.type === "tf") {
      const correctIndex = question.answer === false ? "1" : "0";
      return correctIndex === submittedValue;
    }

    if (question.type === "blank") {
      const answers = Array.isArray(question.answers) ? question.answers : [];
      const caseSensitive = question.caseSensitive === true;
      return answers.some(function (answer) {
        if (caseSensitive) {
          return String(answer).trim() === submittedValue;
        }
        return normalizeText(answer) === normalizeText(submittedValue);
      });
    }

    if (question.type === "numeric") {
      const expected = Number(question.answer);
      const received = Number(submittedValue);
      const tolerance =
        typeof question.tolerance === "number" ? question.tolerance : 0;

      if (Number.isNaN(expected) || Number.isNaN(received)) {
        return false;
      }

      return Math.abs(expected - received) <= tolerance;
    }

    return false;
  }

  function countMatchedRubricGroups(submittedValue, rubric) {
    const normalizedSubmission = normalizeText(submittedValue);

    return rubric.filter(function (group) {
      const terms = Array.isArray(group) ? group : [group];
      return terms.some(function (term) {
        return normalizedSubmission.includes(normalizeText(term));
      });
    }).length;
  }

  function arraysEqual(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second) || first.length !== second.length) {
      return false;
    }

    return first.every(function (value, index) {
      return value === second[index];
    });
  }

  function getSubmittedText(question, result) {
    if (!result) {
      return "제출 기록 없음";
    }

    if (question.type === "multiple") {
      const choices = Array.isArray(question.choices) ? question.choices : [];
      const selectedIndex = Number(result.submittedValue);
      const choice = choices[selectedIndex];
      return choice ? selectedIndex + 1 + "번 - " + choice : String(result.submittedValue);
    }

    if (question.type === "multiSelect") {
      const choices = Array.isArray(question.choices) ? question.choices : [];
      const submittedValues = Array.isArray(result.submittedValue) ? result.submittedValue : [];
      const labels = submittedValues
        .map(function (value) {
          const selectedIndex = Number(value);
          const choice = choices[selectedIndex];
          return choice ? selectedIndex + 1 + "번 - " + choice : null;
        })
        .filter(Boolean);

      return labels.join(" / ") || "선택한 보기 없음";
    }

    if (question.type === "tf") {
      const labels = question.labels || ["T", "F"];
      const selectedIndex = Number(result.submittedValue);
      return labels[selectedIndex] || String(result.submittedValue);
    }

    if (Array.isArray(result.submittedValue)) {
      return result.submittedValue.join(", ");
    }

    return String(result.submittedValue || "입력 없음");
  }

  function normalizeChapterNumbers(chapterNumbers) {
    const source = Array.isArray(chapterNumbers) ? chapterNumbers : [];
    const unique = new Set();

    source.forEach(function (chapterNumber) {
      const normalized = Number(chapterNumber);
      if (chapterOrder.includes(normalized)) {
        unique.add(normalized);
      }
    });

    return chapterOrder.filter(function (chapterNumber) {
      return unique.has(chapterNumber);
    });
  }

  function persistState() {
    if (!window.localStorage) {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          selectedChapters: normalizeChapterNumbers(Array.from(state.selectedChapters)),
          loadedChapters: normalizeChapterNumbers(state.loadedChapters),
          results: state.results,
        })
      );
    } catch (error) {
      // Ignore storage failures and keep the app usable.
    }
  }

  function restorePersistedState() {
    if (!window.localStorage) {
      return;
    }

    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);
      if (!storedValue) {
        return;
      }

      const parsed = JSON.parse(storedValue);
      const selectedChapters = normalizeChapterNumbers(parsed.selectedChapters);
      const loadedChapters = normalizeChapterNumbers(parsed.loadedChapters);

      state.selectedChapters = new Set(selectedChapters);
      state.loadedChapters = loadedChapters;
      state.results =
        parsed && parsed.results && typeof parsed.results === "object" ? parsed.results : {};

      if (state.selectedChapters.size === 0 && state.loadedChapters.length > 0) {
        state.loadedChapters.forEach(function (chapterNumber) {
          state.selectedChapters.add(chapterNumber);
        });
      }
    } catch (error) {
      state.selectedChapters = new Set();
      state.loadedChapters = [];
      state.results = {};
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(value) {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ");
  }

  function getResultTitle(question, result) {
    if (question.type === "essay" && result.gradingMode === "keyword") {
      return result.isCorrect
        ? "핵심 포인트가 충분히 들어갔습니다."
        : "핵심 포인트를 조금 더 보완해보세요.";
    }

    if (result.isCorrect === null) {
      return "자동 채점 대신 모범답안을 확인하세요.";
    }

    return result.isCorrect ? "정답입니다." : "오답입니다.";
  }

  function getAnswerText(question) {
    if (question.type === "multiple") {
      const choices = Array.isArray(question.choices) ? question.choices : [];
      const choice = choices[question.correctIndex];
      return choice
        ? question.correctIndex + 1 + "번 - " + choice
        : "정답 정보 없음";
    }

    if (question.type === "multiSelect") {
      const choices = Array.isArray(question.choices) ? question.choices : [];
      const correctIndexes = Array.isArray(question.correctIndexes)
        ? question.correctIndexes
        : [];

      return (
        correctIndexes
          .map(function (index) {
            const choice = choices[index];
            return choice ? index + 1 + "번 - " + choice : null;
          })
          .filter(Boolean)
          .join(" / ") || "정답 정보 없음"
      );
    }

    if (question.type === "tf") {
      return question.answer === false ? "F" : "T";
    }

    if (question.type === "blank") {
      const answers = Array.isArray(question.answers) ? question.answers : [];
      return answers.join(" / ") || "정답 정보 없음";
    }

    if (question.type === "numeric") {
      return String(question.answer);
    }

    if (question.type === "essay") {
      return question.sampleAnswer || "모범답안 정보 없음";
    }

    return "정답 정보 없음";
  }

  function updateStats() {
    const total = state.activeQuestions.length;
    const attempted = state.activeQuestions.filter(function (question) {
      return Boolean(state.results[question.uid]);
    }).length;
    const correct = state.activeQuestions.filter(function (question) {
      return state.results[question.uid] && state.results[question.uid].isCorrect;
    }).length;
    const accuracy = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);

    totalCount.textContent = String(total);
    attemptedCount.textContent = String(attempted);
    correctCount.textContent = String(correct);
    accuracyCount.textContent = accuracy + "%";
  }
})();
