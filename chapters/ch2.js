window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[2] = {
  title: "2장 Text Preprocessing, Regex, Automata",
  questions: [
    {
      id: "2-1",
      type: "multiple",
      prompt: `Q1-(1) Which of the following best explains the purpose of regular expressions in text preprocessing?
정규표현식의 목적에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `Regular expressions are mainly used to translate one natural language into another.
정규표현식은 주로 하나의 자연어를 다른 자연어로 번역하기 위해 사용된다.`,
        `Regular expressions specify text patterns so that specific strings can be identified or manipulated efficiently.
정규표현식은 텍스트 패턴을 지정하여 특정 문자열을 효율적으로 찾거나 조작할 수 있게 한다.`,
        `Regular expressions are neural network models that learn word meanings from context.
정규표현식은 문맥에서 단어 의미를 학습하는 신경망 모델이다.`,
        `Regular expressions are used only after deep learning models finish training.
정규표현식은 딥러닝 모델 학습이 끝난 뒤에만 사용된다.`,
      ],
      correctIndex: 1,
      explanation:
        "정규표현식은 번역이나 신경망이 아니라, 텍스트 패턴을 명시해서 원하는 문자열을 찾거나 바꾸는 도구입니다.",
    },
    {
      id: "2-2",
      type: "multiple",
      prompt: `Q1-(2) Which of the following best describes [a-z]?
다음 중 [a-z]의 의미로 가장 적절한 것은?`,
      choices: [
        `It matches exactly the two characters a and z.
정확히 문자 a와 z 두 개만 매칭한다.`,
        `It matches any lowercase letter from a to z.
a부터 z까지의 모든 소문자 중 하나를 매칭한다.`,
        `It matches any uppercase letter from A to Z.
A부터 Z까지의 모든 대문자 중 하나를 매칭한다.`,
        `It matches any string that starts with a and ends with z.
a로 시작하고 z로 끝나는 모든 문자열을 매칭한다.`,
      ],
      correctIndex: 1,
      explanation:
        "[a-z]는 범위 안의 소문자 하나를 뜻합니다. a와 z 두 글자를 동시에 찾는 것이 아닙니다.",
    },
    {
      id: "2-3",
      type: "multiple",
      prompt: `Q1-(3) Which of the following best describes [^hH]appy?
다음 중 [^hH]appy에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `It matches happy and Happy only.
happy와 Happy만 매칭한다.`,
        `It matches any string that begins with h or H and ends with appy.
h 또는 H로 시작하고 appy로 끝나는 문자열을 매칭한다.`,
        `It matches a character except h or H, followed by appy.
h 또는 H가 아닌 문자 하나 뒤에 appy가 오는 패턴을 매칭한다.`,
        `It matches strings that do not contain the word happy anywhere.
문자열 안에 happy가 전혀 없는 경우를 매칭한다.`,
      ],
      correctIndex: 2,
      explanation:
        "대괄호 안 맨 앞의 ^는 부정입니다. 따라서 h나 H가 아닌 문자 하나 뒤에 appy가 오는 패턴을 찾습니다.",
    },
    {
      id: "2-4",
      type: "multiple",
      prompt: `Q1-(4) Which of the following is NOT true about happy*?
다음 중 happy*에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        `The * applies to the immediately preceding expression.
*는 바로 앞의 표현에 적용된다.`,
        `It can match happ if the final y appears zero times.
마지막 y가 0번 등장하면 happ도 매칭될 수 있다.`,
        `It requires the entire word happy to repeat zero or more times.
단어 happy 전체가 0번 이상 반복되어야 한다.`,
        `It can match strings such as happy, happyy, and happyyy.
happy, happyy, happyyy 같은 문자열을 매칭할 수 있다.`,
      ],
      correctIndex: 2,
      explanation:
        "happy*에서 *는 단어 전체가 아니라 바로 앞의 y에만 적용됩니다. 그래서 happ, happy, happyy 등이 가능합니다.",
    },
    {
      id: "2-5",
      type: "multiple",
      prompt: `Q1-(5) Which of the following best describes anchors in regular expressions?
다음 중 anchor에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `^ always means negation, regardless of its position.
^는 위치와 상관없이 항상 부정을 의미한다.`,
        `$ matches the beginning of a string.
$는 문자열의 시작을 매칭한다.`,
        `^Happy matches Happy only when it appears at the beginning of a string.
^Happy는 Happy가 문자열의 시작에 있을 때만 매칭한다.`,
        `happy\\.$ matches any string that contains happy anywhere.
happy\\.$는 문자열 어디에든 happy가 포함되면 매칭한다.`,
      ],
      correctIndex: 2,
      explanation:
        "대괄호 밖의 ^는 문자열 시작을 의미합니다. 대괄호 안 맨 앞에서만 부정의 뜻이 됩니다.",
    },
    {
      id: "2-6",
      type: "multiple",
      prompt: `Q1-(6) Which of the following correctly explains the difference between . and \\.?
다음 중 .과 \\.의 차이에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `. matches only a period, while \\. matches any character.
.은 마침표만 매칭하고, \\.는 아무 문자나 매칭한다.`,
        `. matches any single character, while \\. matches a literal period.
.은 아무 문자 하나를 매칭하고, \\.는 실제 마침표를 매칭한다.`,
        `Both . and \\. match only digits.
.과 \\.는 모두 숫자만 매칭한다.`,
        `There is no difference between . and \\. in regular expressions.
정규표현식에서 .과 \\.는 차이가 없다.`,
      ],
      correctIndex: 1,
      explanation:
        ".은 와일드카드 한 글자이고, \\.는 이스케이프된 실제 마침표 문자입니다.",
    },
    {
      id: "2-7",
      type: "multiple",
      prompt: `Q1-(7) Which of the following best describes a false positive?
다음 중 False Positive에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `The system fails to match something that should have been matched.
시스템이 원래 매칭해야 할 것을 놓친 경우이다.`,
        `The system correctly rejects something that should not be matched.
시스템이 매칭하면 안 되는 것을 올바르게 거절한 경우이다.`,
        `The system matches something that should not have been matched.
시스템이 원래 매칭하면 안 되는 것을 매칭한 경우이다.`,
        `The system correctly matches something that should be matched.
시스템이 원래 매칭해야 할 것을 올바르게 매칭한 경우이다.`,
      ],
      correctIndex: 2,
      explanation:
        "False Positive는 잡으면 안 되는 대상을 잘못 잡은 경우입니다.",
    },
    {
      id: "2-8",
      type: "multiple",
      prompt: `Q1-(8) Which of the following is NOT true about precision and recall?
다음 중 precision과 recall에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        `Increasing precision is related to reducing false positives.
precision을 높이는 것은 false positive를 줄이는 것과 관련이 있다.`,
        `Increasing recall is related to reducing false negatives.
recall을 높이는 것은 false negative를 줄이는 것과 관련이 있다.`,
        `A very strict regex may increase precision but decrease recall.
아주 엄격한 regex는 precision을 높일 수 있지만 recall을 낮출 수 있다.`,
        `Precision and recall always increase together whenever the regex becomes stricter.
regex가 엄격해질수록 precision과 recall은 항상 함께 증가한다.`,
      ],
      correctIndex: 3,
      explanation:
        "보통 regex를 엄격하게 만들면 false positive는 줄 수 있지만 false negative가 늘어 recall이 떨어질 수 있습니다.",
    },
    {
      id: "2-9",
      type: "multiple",
      prompt: `Q1-(9) Which of the following best describes a Finite State Automaton, FSA?
다음 중 FSA에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `An FSA is a model that generates only semantic word embeddings.
FSA는 의미 기반 단어 임베딩만 생성하는 모델이다.`,
        `An FSA is a computational model with states and transitions that can recognize regular languages.
FSA는 상태와 전이를 가지며 정규언어를 인식할 수 있는 계산 모델이다.`,
        `An FSA is a probabilistic model that must assign probabilities to all transitions.
FSA는 모든 전이에 반드시 확률을 부여해야 하는 확률 모델이다.`,
        `An FSA is used only for image classification tasks.
FSA는 이미지 분류 작업에만 사용된다.`,
      ],
      correctIndex: 1,
      explanation:
        "FSA는 상태와 전이로 이루어진 계산 모델로, 정규언어를 인식할 수 있습니다.",
    },
    {
      id: "2-10",
      type: "multiple",
      prompt: `Q1-(10) Which of the following is NOT part of the formal definition of an FSA?
다음 중 FSA의 formal definition에 포함되지 않는 것은?`,
      choices: [
        `Q, the set of states
상태 집합 Q`,
        `Σ, the finite alphabet
유한 알파벳 Σ`,
        `q0, the start state
시작 상태 q0`,
        `σ(q,i), the output function
출력 함수 σ(q,i)`,
      ],
      correctIndex: 3,
      explanation:
        "σ(q,i)는 FST의 출력 함수입니다. FSA의 핵심 요소는 Q, Σ, q0, F, δ입니다.",
    },
    {
      id: "2-11",
      type: "multiple",
      prompt: `Q1-(11) Which of the following best describes a Non-deterministic FSA, NFA?
다음 중 NFA에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `At every state and input, there is always exactly one possible next state.
모든 상태와 입력에 대해 가능한 다음 상태가 항상 정확히 하나이다.`,
        `If one possible path fails, the whole input must be rejected immediately.
가능한 경로 하나가 실패하면 전체 입력은 즉시 reject된다.`,
        `At one or more points, multiple next steps may be possible.
하나 이상의 지점에서 여러 가능한 다음 단계가 존재할 수 있다.`,
        `NFAs cannot represent regular languages.
NFA는 정규언어를 표현할 수 없다.`,
      ],
      correctIndex: 2,
      explanation:
        "NFA에서는 같은 상태와 입력에서 여러 다음 상태가 가능할 수 있고, 가능한 경로 중 하나만 성공해도 accept됩니다.",
    },
    {
      id: "2-12",
      type: "multiple",
      prompt: `Q1-(12) Which of the following best explains the difference between FSTs and FSAs?
다음 중 FST와 FSA의 차이에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `FSAs produce input-output mappings, while FSTs only accept or reject strings.
FSA는 입력-출력 매핑을 만들고, FST는 문자열을 accept/reject만 한다.`,
        `FSTs label arcs with input-output pairs, while FSAs generally only determine acceptance.
FST는 arc에 입력-출력 쌍을 붙이며, FSA는 일반적으로 accept 여부를 판단한다.`,
        `FSTs cannot be used for morphological parsing.
FST는 형태소 분석에 사용할 수 없다.`,
        `FSTs do not have states or transitions.
FST는 상태나 전이를 가지지 않는다.`,
      ],
      correctIndex: 1,
      explanation:
        "FSA는 accept/reject 중심이고, FST는 arc에 input:output 쌍을 두어 변환까지 수행합니다.",
    },
    {
      id: "2-13",
      type: "tf",
      prompt: `Q2-(1) [abc] means that the regex can match one of a, b, or c.
[abc]는 a, b, c 중 하나를 매칭할 수 있다는 뜻이다.`,
      answer: true,
      explanation:
        "문자 집합 안의 세 문자 중 하나를 매칭한다는 뜻입니다.",
    },
    {
      id: "2-14",
      type: "tf",
      prompt: `Q2-(2) In [^A-Z], the caret ^ means the beginning of a string.
[^A-Z]에서 ^는 문자열의 시작을 의미한다.`,
      answer: false,
      explanation:
        "대괄호 안 맨 앞의 ^는 시작이 아니라 부정입니다.",
    },
    {
      id: "2-15",
      type: "tf",
      prompt: `Q2-(3) happy? can match both happ and happy under full-string matching.
happy?는 전체 문자열 매칭 기준에서 happ와 happy를 모두 매칭할 수 있다.`,
      answer: true,
      explanation:
        "?는 바로 앞의 y가 0번 또는 1번 나올 수 있음을 뜻합니다.",
    },
    {
      id: "2-16",
      type: "tf",
      prompt: `Q2-(4) {m,n} means the preceding expression must occur between m and n times.
{m,n}은 바로 앞 표현이 m번 이상 n번 이하 등장해야 한다는 뜻이다.`,
      answer: true,
      explanation:
        "{m,n}은 반복 횟수 범위를 지정합니다.",
    },
    {
      id: "2-17",
      type: "tf",
      prompt: `Q2-(5) An FSA accepts an input if processing stops in an accept/final state after the whole input has been consumed.
FSA는 전체 입력을 모두 읽은 뒤 accept/final state에 있으면 입력을 accept한다.`,
      answer: true,
      explanation:
        "중간에 accept state를 잠깐 거쳐도 전체 입력이 끝난 시점의 상태가 중요합니다.",
    },
    {
      id: "2-18",
      type: "tf",
      prompt: `Q2-(6) In an NFA, all possible paths must reach an accept state for the input to be accepted.
NFA에서는 입력이 accept되려면 모든 가능한 경로가 accept state에 도달해야 한다.`,
      answer: false,
      explanation:
        "NFA는 가능한 경로 중 하나라도 accept state에 도달하면 accept입니다.",
    },
    {
      id: "2-19",
      type: "tf",
      prompt: `Q2-(7) Every non-deterministic FSA can be converted into a deterministic FSA.
모든 비결정적 FSA는 결정적 FSA로 변환될 수 있다.`,
      answer: true,
      explanation:
        "모든 NFA는 이에 상응하는 DFA로 변환 가능합니다.",
    },
    {
      id: "2-20",
      type: "tf",
      prompt: `Q2-(8) In an FST arc label a:b, a is the output and b is the input.
FST의 arc label a:b에서 a는 출력이고 b는 입력이다.`,
      answer: false,
      explanation:
        "a:b에서 a는 입력, b는 출력입니다.",
    },
    {
      id: "2-21",
      type: "tf",
      prompt: `Q2-(9) Every non-deterministic FST can always be converted into a deterministic FST.
모든 비결정적 FST는 항상 결정적 FST로 변환될 수 있다.`,
      answer: false,
      explanation:
        "FST는 accept/reject만이 아니라 출력 보존까지 고려해야 해서 항상 determinize되지 않습니다.",
    },
    {
      id: "2-22",
      type: "tf",
      prompt: `Q2-(10) Morphological parsing can analyze cats as cat +N +PL.
형태소 분석은 cats를 cat +N +PL로 분석할 수 있다.`,
      answer: true,
      explanation:
        "형태소 분석은 표면형을 어근과 품사, 문법 특징으로 분해합니다.",
    },
    {
      id: "2-23",
      type: "multiSelect",
      prompt: `Q3-(1a) Select all strings matched by [hH]appy under full-string matching.
전체 문자열 매칭 기준에서 [hH]appy가 매칭하는 문자열을 모두 고르시오.`,
      choices: ["happy", "Happy", "sappy", "happyy"],
      correctIndexes: [0, 1],
      explanation:
        "[hH]는 h 또는 H 한 글자를 뜻하므로 happy와 Happy만 매칭됩니다.",
    },
    {
      id: "2-24",
      type: "multiSelect",
      prompt: `Q3-(1b) Select all strings matched by happy+ under full-string matching.
전체 문자열 매칭 기준에서 happy+가 매칭하는 문자열을 모두 고르시오.`,
      choices: ["happ", "happy", "happyy", "happyhappy"],
      correctIndexes: [1, 2],
      explanation:
        "happy+는 happ 뒤에 y가 1개 이상 오는 패턴이라 happy, happyy, happyyy 등이 가능합니다.",
    },
    {
      id: "2-25",
      type: "multiSelect",
      prompt: `Q3-(1c) Select all strings matched by .appy under full-string matching.
전체 문자열 매칭 기준에서 .appy가 매칭하는 문자열을 모두 고르시오.`,
      choices: ["happy", "sappy", "appy", "snappy"],
      correctIndexes: [0, 1],
      explanation:
        ".appy는 정확히 5글자이며 첫 글자는 아무 문자 하나여야 하므로 happy와 sappy만 맞습니다.",
    },
    {
      id: "2-26",
      type: "multiSelect",
      prompt: `Q3-(1d) Select all strings matched by [^.][tT]he[^.] under full-string matching.
전체 문자열 매칭 기준에서 [^.][tT]he[^.]가 매칭하는 문자열을 모두 고르시오.

보이는 기호 ␠는 공백 한 칸을 뜻합니다.`,
      choices: ["␠the␠", ".the␠", "rthe␠", "␠the."],
      correctIndexes: [0, 2],
      explanation:
        "앞뒤 한 글자가 모두 마침표가 아니어야 합니다. 따라서 ␠the␠와 rthe␠만 매칭됩니다.",
    },
    {
      id: "2-27",
      type: "essay",
      prompt: `Q3-(2a) Explain the meaning of [0-9] in one sentence.
[0-9]의 의미를 한 문장으로 설명하시오.`,
      rubric: [
        ["0", "9", "0부터 9", "0 to 9"],
        ["digit", "number", "숫자"],
        ["one", "single", "하나"],
      ],
      minimumMatches: 2,
      sampleAnswer: "0부터 9까지의 숫자 중 하나를 매칭한다.",
      explanation:
        "[0-9]의 핵심은 숫자 범위와 한 글자 매칭입니다.",
    },
    {
      id: "2-28",
      type: "essay",
      prompt: `Q3-(2b) Explain the meaning of ^[tT]he in one sentence.
^[tT]he의 의미를 한 문장으로 설명하시오.`,
      rubric: [
        ["beginning", "start", "시작"],
        ["the", "The"],
      ],
      minimumMatches: 2,
      sampleAnswer: "문자열이 the 또는 The로 시작할 때 매칭한다.",
      explanation:
        "^는 문자열 시작 anchor이고, [tT]는 소문자/대문자 t 둘 다 허용합니다.",
    },
    {
      id: "2-29",
      type: "essay",
      prompt: `Q3-(2c) Explain the meaning of happy\\.$ in one sentence.
happy\\.$의 의미를 한 문장으로 설명하시오.`,
      rubric: [
        ["happy"],
        ["period", "dot", "마침표"],
        ["end", "끝", "끝날 때"],
      ],
      minimumMatches: 2,
      sampleAnswer: "문자열이 happy.로 끝날 때 매칭한다.",
      explanation:
        "\\.는 실제 마침표를 뜻하고, $는 문자열 끝 anchor입니다.",
    },
    {
      id: "2-30",
      type: "essay",
      prompt: `Q3-(2d) Explain the meaning of ha(ppy)? in one sentence.
ha(ppy)?의 의미를 한 문장으로 설명하시오.`,
      rubric: [
        ["ha"],
        ["happy"],
        ["optional", "0 or 1", "있어도 되고 없어도", "선택적"],
      ],
      minimumMatches: 2,
      sampleAnswer: "ha 또는 happy를 매칭한다.",
      explanation:
        "(ppy)?는 ppy가 있어도 되고 없어도 되는 선택적 부분입니다.",
    },
    {
      id: "2-31",
      type: "multiple",
      prompt: `Q3-(3a) We want to find the independent word the or The. Regex [tT]he matches the substring the inside other.
문서에서 독립된 단어 the 또는 The만 찾고 싶은데, regex [tT]he가 other 안의 the를 잡았다.
이 경우의 error type은 무엇인가?`,
      choices: ["False Positive", "False Negative", "No Error"],
      correctIndex: 0,
      explanation:
        "잡으면 안 되는 other 내부의 the를 잡았으므로 False Positive입니다.",
    },
    {
      id: "2-32",
      type: "multiple",
      prompt: `Q3-(3b) We want to find the independent word the or The. Regex the does not match The in "The cat sleeps."
문서에서 독립된 단어 the 또는 The만 찾고 싶은데, regex the가 "The cat sleeps."의 The를 못 잡았다.
이 경우의 error type은 무엇인가?`,
      choices: ["False Positive", "False Negative", "No Error"],
      correctIndex: 1,
      explanation:
        "원래 잡아야 하는 The를 놓쳤으므로 False Negative입니다.",
    },
    {
      id: "2-33",
      type: "multiple",
      prompt: `Q3-(3c) We want to find the independent word the or The. Regex [tT]he correctly matches the in "the cat".
문서에서 독립된 단어 the 또는 The만 찾고 싶은데, regex [tT]he가 "the cat"의 the를 올바르게 잡았다.
이 경우의 error type은 무엇인가?`,
      choices: ["False Positive", "False Negative", "No Error"],
      correctIndex: 2,
      explanation:
        "정답을 정확히 잡았으므로 No Error입니다.",
    },
    {
      id: "2-34",
      type: "blank",
      prompt: `Q3-(4a) Compute precision when:
- actual target occurrences = 20
- system marked = 18
- correct matches = 15

precision 값을 쓰시오. 분수, 소수, 퍼센트 중 하나로 써도 됩니다.`,
      answers: ["15/18", "0.833", "0.8333", "0.83", "83.3", "83.3%", "83%"],
      explanation:
        "Precision = TP / system predicted = 15 / 18 = 약 0.833 = 83.3%입니다.",
    },
    {
      id: "2-35",
      type: "blank",
      prompt: `Q3-(4b) Using the same numbers, compute recall.
같은 조건에서 recall 값을 쓰시오. 분수, 소수, 퍼센트 중 하나로 써도 됩니다.`,
      answers: ["15/20", "0.75", "75", "75%"],
      explanation:
        "Recall = TP / actual positives = 15 / 20 = 0.75 = 75%입니다.",
    },
    {
      id: "2-36",
      type: "blank",
      prompt: `Q3-(4c) Using the same numbers, how many false positives are there?
같은 조건에서 false positive 개수는 몇 개인가?`,
      answers: ["3", "3개", "three"],
      explanation:
        "False Positive = system marked - correct matches = 18 - 15 = 3입니다.",
    },
    {
      id: "2-37",
      type: "essay",
      prompt: `Q4-(1) Complete the transition table for the FSA recognizing baa+!.
baa+!를 인식하는 FSA의 transition table을 채우시오.

조건:
- States: q0, q1, q2, q3, q4
- Start state: q0
- Accept state: q4
- δ(q0,b)=q1
- δ(q1,a)=q2
- δ(q2,a)=q3
- δ(q3,a)=q3
- δ(q3,!)=q4
- 정의되지 않은 transition은 -
- accept state의 <end>는 <accept>`,
      rubric: [
        ["q0", "b", "q1"],
        ["q1", "a", "q2"],
        ["q2", "a", "q3"],
        ["q3", "a", "q3", "!", "q4"],
        ["q4", "accept", "<accept>"],
      ],
      minimumMatches: 4,
      sampleAnswer: `q0: b=q1, a=-, !=-, <end>=-
q1: b=-, a=q2, !=-, <end>=-
q2: b=-, a=q3, !=-, <end>=-
q3: b=-, a=q3, !=q4, <end>=-
q4: b=-, a=-, !=-, <end>=<accept>`,
      explanation:
        "q3에서 a-loop와 !로 q4 이동이 핵심이고, q4만 accept state이므로 <end>는 q4에서만 <accept>입니다.",
    },
    {
      id: "2-38",
      type: "multiple",
      prompt: `Q4-(2a) Does the FSA for baa+! accept baa!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 0,
      explanation:
        "q0 -> q1 -> q2 -> q3 -> q4 순서로 이동하므로 accept입니다.",
    },
    {
      id: "2-39",
      type: "multiple",
      prompt: `Q4-(2b) Does the FSA for baa+! accept baaa!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 0,
      explanation:
        "q3에서 a-loop를 한 번 더 돈 뒤 !로 q4에 도달하므로 accept입니다.",
    },
    {
      id: "2-40",
      type: "multiple",
      prompt: `Q4-(2c) Does the FSA for baa+! accept baaaa!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 0,
      explanation:
        "q3에서 a는 여러 번 반복 가능하므로 accept입니다.",
    },
    {
      id: "2-41",
      type: "multiple",
      prompt: `Q4-(2d) Does the FSA for baa+! accept baabaa!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 1,
      explanation:
        "q3에서 다음 입력 b를 처리할 transition이 없어서 reject입니다.",
    },
    {
      id: "2-42",
      type: "multiple",
      prompt: `Q4-(2e) Does the FSA for baa+! accept ba!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 1,
      explanation:
        "q2에서 !를 읽는 transition이 없으므로 reject입니다.",
    },
    {
      id: "2-43",
      type: "multiple",
      prompt: `Q4-(2f) Does the FSA for baa+! accept baa?`,
      choices: ["Accept", "Reject"],
      correctIndex: 1,
      explanation:
        "입력을 다 읽은 시점이 q3인데, q3는 accept state가 아니므로 reject입니다.",
    },
    {
      id: "2-44",
      type: "multiple",
      prompt: `Q4-(2g) Does the FSA for baa+! accept bba!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 1,
      explanation:
        "q1에서 입력 b를 처리할 transition이 없으므로 reject입니다.",
    },
    {
      id: "2-45",
      type: "multiple",
      prompt: `Q4-(2h) Does the FSA for baa+! accept aa!?`,
      choices: ["Accept", "Reject"],
      correctIndex: 1,
      explanation:
        "q0에서 첫 입력 a를 읽는 transition이 없으므로 reject입니다.",
    },
    {
      id: "2-46",
      type: "essay",
      prompt: `Q4-(3) Fill the blanks in the transition-table algorithm for an FSA.
상태 전이표 기반 FSA 검사 알고리즘의 빈칸을 채우시오.

빈칸 4개:
1. current_state ← ?
2. if current_state is ? :
3. else if no transition: return ?
4. current_state ← ?`,
      rubric: [
        ["initial state", "start state", "q0"],
        ["accept state", "final state"],
        ["reject"],
        ["transition table", "transition_table[current_state, sequence[index]]"],
      ],
      minimumMatches: 3,
      sampleAnswer: `1. current_state ← initial state of FSA (or q0)
2. if current_state is an accept state
3. return reject
4. current_state ← transition_table[current_state, sequence[index]]`,
      explanation:
        "핵심은 시작 상태에서 출발하고, 입력이 끝났을 때 accept state인지 확인하며, 전이가 없으면 reject하고, 있으면 그 전이 결과 상태로 이동하는 것입니다.",
    },
    {
      id: "2-47",
      type: "multiple",
      prompt: `Q4-(4a) Machine A
- q0 --a--> q1
- q1 --b--> q2
- q2 --!--> q3

Machine A is:`,
      choices: ["Deterministic FSA", "Non-deterministic FSA"],
      correctIndex: 0,
      explanation:
        "각 상태와 입력에 대해 가능한 다음 상태가 하나뿐이므로 deterministic FSA입니다.",
    },
    {
      id: "2-48",
      type: "multiple",
      prompt: `Q4-(4b) Machine B
- q0 --a--> {q0, q1}
- q1 --b--> q2
- q2 --!--> q3

Machine B is:`,
      choices: ["Deterministic FSA", "Non-deterministic FSA"],
      correctIndex: 1,
      explanation:
        "q0에서 입력 a에 대해 다음 상태가 q0, q1 두 개이므로 non-deterministic FSA입니다.",
    },
    {
      id: "2-49",
      type: "blank",
      prompt: `Q5-(1a) For the FST
- q0 -- a:x --> q0
- q0 -- b:y --> q1
- q1 -- a:z --> q1
- q1 -- b:ε --> q1

What is the output for input string b?`,
      answers: ["y"],
      explanation:
        "q0에서 b를 읽고 y를 출력하며 q1로 가고, q1은 final state이므로 output은 y입니다.",
    },
    {
      id: "2-50",
      type: "blank",
      prompt: `Q5-(1b) Using the same FST, what is the output for input string ab?`,
      answers: ["xy"],
      explanation:
        "a에서 x, b에서 y를 출력하므로 xy입니다.",
    },
    {
      id: "2-51",
      type: "blank",
      prompt: `Q5-(1c) Using the same FST, what is the output for input string aba?`,
      answers: ["xyz"],
      explanation:
        "a -> x, b -> y, q1에서 a -> z 이므로 xyz입니다.",
    },
    {
      id: "2-52",
      type: "blank",
      prompt: `Q5-(1d) Using the same FST, what is the output for input string abb?`,
      answers: ["xy"],
      explanation:
        "마지막 b는 ε를 출력하므로 눈에 보이는 결과는 xy만 남습니다.",
    },
    {
      id: "2-53",
      type: "blank",
      prompt: `Q5-(1e) Using the same FST, what is the output for input string aababb?`,
      answers: ["xxyz"],
      explanation:
        "a,x / a,x / b,y / a,z / b,ε / b,ε 이므로 최종 출력은 xxyz입니다.",
    },
    {
      id: "2-54",
      type: "essay",
      prompt: `Q5-(2) Define the following three symbols in an FST:
(a) Δ
(b) δ(q,i)
(c) σ(q,i)

각 기호의 의미를 간단히 쓰시오.`,
      rubric: [
        ["delta", "Δ", "output alphabet", "출력 알파벳"],
        ["δ", "transition function", "next state", "다음 상태"],
        ["σ", "output function", "what output", "출력"],
      ],
      minimumMatches: 3,
      sampleAnswer: `(a) Δ: finite output alphabet, 출력 알파벳
(b) δ(q,i): 현재 상태 q에서 입력 i를 읽었을 때 다음 상태를 반환하는 transition function
(c) σ(q,i): 현재 상태 q에서 입력 i를 읽었을 때 어떤 출력을 낼지 정하는 output function`,
      explanation:
        "Δ는 출력 기호 집합, δ는 어디로 갈지, σ는 무엇을 출력할지를 정합니다.",
    },
    {
      id: "2-55",
      type: "essay",
      prompt: `Q5-(3) Answer all three:
(a) If T1 maps Hello -> 안녕하세요 and T2 maps 안녕하세요 -> 안녕, what is T1 composed with T2?
(b) If T maps cat -> 고양이, what is the inversion of T?
(c) Why is composition useful for step-by-step transformation?`,
      rubric: [
        ["hello", "안녕"],
        ["고양이", "cat"],
        ["combine", "one direct transformation", "step by step", "직접 변환"],
      ],
      minimumMatches: 3,
      sampleAnswer: `(a) Hello -> 안녕
(b) 고양이 -> cat
(c) Composition은 여러 단계의 변환을 하나의 직접적인 변환으로 합칠 수 있어서 step-by-step transformation에 유용하다.`,
      explanation:
        "Composition은 중간 결과를 이어 붙여 최종 매핑을 만들고, inversion은 입력과 출력을 뒤집습니다.",
    },
    {
      id: "2-56",
      type: "essay",
      prompt: `Q5-(4) Explain this sentence:
"Every non-deterministic FSA can be converted into a deterministic FSA, but not every non-deterministic FST can be converted into a deterministic FST."`,
      rubric: [
        ["fsa", "dfa", "nfa", "결정적 fsa로 변환"],
        ["fst", "output", "출력"],
        ["not always", "항상은 아니다", "cannot always"],
      ],
      minimumMatches: 2,
      sampleAnswer: `FSA에서는 nondeterministic한 구조가 있어도 항상 deterministic FSA로 변환할 수 있다.
하지만 FST는 accept/reject뿐 아니라 출력 매핑까지 보존해야 하므로, 모든 nondeterministic FST가 deterministic FST로 바뀌는 것은 아니다.`,
      explanation:
        "FSA는 길만 정리하면 되지만, FST는 길과 출력 결과를 함께 보존해야 해서 더 어렵습니다.",
    },
    {
      id: "2-57",
      type: "essay",
      prompt: `Q6-(1) Briefly define the following three concepts:
(a) Morpheme
(b) Stem
(c) Affix

세 용어를 간단히 정의하시오.`,
      rubric: [
        ["morpheme", "smallest meaningful unit", "의미를 가진 가장 작은 단위"],
        ["stem", "core meaning", "어간", "중심 부분"],
        ["affix", "붙는 부분", "접사", "-s", "-ed", "-ing"],
      ],
      minimumMatches: 3,
      sampleAnswer: `(a) Morpheme: 의미를 가진 가장 작은 단위
(b) Stem: 단어의 핵심 의미를 담고 있는 중심 부분
(c) Affix: 어간에 붙어서 추가적인 문법 정보나 의미를 더하는 부분`,
      explanation:
        "형태소는 최소 의미 단위, 어간은 핵심 부분, 접사는 붙어서 문법 정보나 의미를 더하는 부분입니다.",
    },
    {
      id: "2-58",
      type: "blank",
      prompt: `Q6-(2a) Morphologically parse cats in the form root/stem + POS + grammatical feature.
예: cat +N +PL`,
      answers: ["cat +N +PL"],
      explanation:
        "cats는 어근 cat, 명사 +N, 복수 +PL로 분석합니다.",
    },
    {
      id: "2-59",
      type: "blank",
      prompt: `Q6-(2b) Morphologically parse cat in the form root/stem + POS + grammatical feature.`,
      answers: ["cat +N +SG"],
      explanation:
        "cat은 명사 단수 형태이므로 cat +N +SG입니다.",
    },
    {
      id: "2-60",
      type: "blank",
      prompt: `Q6-(2c) Morphologically parse foxes in the form root/stem + POS + grammatical feature.`,
      answers: ["fox +N +PL"],
      explanation:
        "foxes는 fox의 복수형이므로 fox +N +PL입니다.",
    },
    {
      id: "2-61",
      type: "blank",
      prompt: `Q6-(2d) Morphologically parse geese in the form root/stem + POS + grammatical feature.`,
      answers: ["goose +N +PL"],
      explanation:
        "geese는 불규칙 복수형이지만 분석 결과는 goose +N +PL입니다.",
    },
    {
      id: "2-62",
      type: "blank",
      prompt: `Q6-(2e) Morphologically parse merging in the form root/stem + POS + grammatical feature.`,
      answers: ["merge +V +PresPart"],
      explanation:
        "merging은 merge의 현재분사이므로 merge +V +PresPart입니다.",
    },
    {
      id: "2-63",
      type: "blank",
      prompt: `Q6-(2f) Morphologically parse caught in the form root/stem + POS + grammatical feature.`,
      answers: ["catch +V +Pas"],
      explanation:
        "caught는 catch의 과거/수동 관련 형태로 catch +V +Pas로 분석합니다.",
    },
    {
      id: "2-64",
      type: "essay",
      prompt: `Q6-(3) Write two reasons why morphological parsing is required.
Morphological parsing이 필요한 이유를 두 가지 쓰시오.`,
      rubric: [
        ["unknown word", "new word", "처음 보는 단어", "신조어"],
        ["grammatical feature", "복수", "시제", "문법 정보"],
        ["root", "stem", "어근"],
        ["korean", "형태가 복잡한 언어", "complex morphology"],
      ],
      minimumMatches: 2,
      sampleAnswer: `1. 처음 보는 단어도 구조적으로 분석할 수 있다.
2. 단어 안의 root, 품사, 복수/단수/시제 같은 grammatical features를 파악할 수 있다.`,
      explanation:
        "핵심은 미지어 처리와 문법 정보 추출입니다. 특히 형태가 복잡한 언어에서 중요합니다.",
    },
    {
      id: "2-65",
      type: "essay",
      prompt: `Q6-(4) Explain why FSTs are useful for morphological parsing.
FST가 morphological parsing에 유용한 이유를 설명하시오.`,
      rubric: [
        ["input output mapping", "변환", "surface word"],
        ["root", "pos", "grammatical feature", "형태소 분석 결과"],
        ["foxes", "cat +n +pl", "surface to analysis"],
      ],
      minimumMatches: 2,
      sampleAnswer: `FST는 입력을 출력으로 변환하는 기계이므로, surface word를 root + POS tag + grammatical features 형태의 morphological parse로 바꾸는 데 유용하다.
예를 들어 foxes를 fox +N +PL 같은 분석 결과로 변환할 수 있다.`,
      explanation:
        "FST는 표면형을 분석 결과 표현으로 바꾸는 변환기에 잘 맞기 때문에 형태소 분석에 유용합니다.",
    },
  ],
};
