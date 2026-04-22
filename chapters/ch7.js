window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[7] = {
  title: "7장 Naive Bayes and Classification",
  questions: [
    {
      id: "7-1",
      type: "multiple",
      prompt: `Q1. Which of the following best describes a Naive Bayes classifier?
다음 중 Naive Bayes classifier를 가장 잘 설명한 것은?`,
      choices: [
        "A clustering algorithm that groups documents without labels. / 라벨 없이 문서를 묶는 군집화 알고리즘",
        "A probabilistic classifier that predicts the most likely label for a new document. / 새 문서에 대해 가장 가능성 높은 라벨을 예측하는 확률 기반 분류기",
        "A neural network that always requires word embeddings. / 항상 word embedding이 필요한 신경망 모델",
        "A rule-based model that does not use probabilities. / 확률을 사용하지 않는 규칙 기반 모델",
      ],
      correctIndex: 1,
      explanation:
        "Naive Bayes는 각 클래스의 확률을 계산해 가장 가능성이 높은 라벨을 선택하는 확률 기반 분류기입니다.",
    },
    {
      id: "7-2",
      type: "multiple",
      prompt: `Q2. Which of the following is NOT true about Gaussian, Multinomial, and Binomial Naive Bayes?
Gaussian, Multinomial, Binomial Naive Bayes에 대한 설명 중 옳지 않은 것은?`,
      choices: [
        "Gaussian Naive Bayes assumes continuous input features are normally distributed. / Gaussian NB는 연속형 feature가 정규분포를 따른다고 가정한다.",
        "Multinomial Naive Bayes is often used with word count features in document classification. / Multinomial NB는 문서 분류의 단어 count feature와 자주 함께 쓰인다.",
        "Binomial Naive Bayes can be related to whether a feature is present or absent. / Binomial NB는 feature의 존재/부재와 관련될 수 있다.",
        "Gaussian Naive Bayes is the standard choice when the input is bag-of-words word counts. / Gaussian NB가 bag-of-words count의 표준 선택이다.",
      ],
      correctIndex: 3,
      explanation:
        "Bag-of-words count feature에는 보통 Multinomial Naive Bayes가 더 자연스럽습니다.",
    },
    {
      id: "7-3",
      type: "multiple",
      prompt: `Q3. Why is Naive Bayes called "naive"?
Naive Bayes가 naive라고 불리는 이유는?`,
      choices: [
        "It assumes all documents have the same length. / 모든 문서 길이가 같다고 가정하기 때문",
        "It assumes all classes have equal prior probabilities. / 모든 클래스 prior가 같다고 가정하기 때문",
        "It assumes features are independent of one another given the class. / 클래스가 주어졌을 때 feature들이 서로 독립이라고 가정하기 때문",
        "It assumes unknown words are always positive. / unknown word는 항상 positive라고 가정하기 때문",
      ],
      correctIndex: 2,
      explanation:
        "Naive Bayes의 핵심 가정은 class가 주어졌을 때 feature independence를 가정한다는 점입니다.",
    },
    {
      id: "7-4",
      type: "multiple",
      prompt: `Q4. In Naive Bayes classification, why can we drop P(d) from Bayes' rule when choosing the class?
Naive Bayes 분류에서 클래스를 고를 때 Bayes rule의 P(d)를 제거할 수 있는 이유는?`,
      choices: [
        "P(d) is always equal to 1. / P(d)가 항상 1이기 때문",
        "P(d) is the same for every class when comparing classes for the same document. / 같은 문서에 대해 클래스 비교 시 P(d)는 모든 클래스에서 같기 때문",
        "P(d) is unknown and therefore must be ignored. / 알 수 없기 때문에 무조건 무시해야 하기 때문",
        "P(d) is only used in Logistic Regression. / Logistic Regression에서만 사용되기 때문",
      ],
      correctIndex: 1,
      explanation:
        "같은 문서 d에 대해 클래스 c만 바뀌며 비교할 때 P(d)는 상수이므로 argmax에서 생략할 수 있습니다.",
    },
    {
      id: "7-5",
      type: "multiple",
      prompt: `Q5. Which of the following is NOT true about Bag of Words?
Bag of Words에 대한 설명 중 옳지 않은 것은?`,
      choices: [
        "It represents a document using word frequencies. / 단어 빈도로 문서를 표현한다.",
        "It ignores word order. / 단어 순서를 무시한다.",
        "It can be used as input features for Naive Bayes. / Naive Bayes의 입력 feature로 사용할 수 있다.",
        "It preserves syntactic structure and word order exactly. / 문법 구조와 단어 순서를 정확히 보존한다.",
      ],
      correctIndex: 3,
      explanation:
        "Bag of Words는 단어 순서와 구문 구조를 보존하지 않습니다.",
    },
    {
      id: "7-6",
      type: "multiple",
      prompt: `Q6. Which statement best explains the zero probability problem in Naive Bayes?
Naive Bayes에서 zero probability 문제가 무엇인지 가장 잘 설명한 것은?`,
      choices: [
        "If a word appears too often, its probability becomes zero. / 단어가 너무 자주 나오면 확률이 0이 된다.",
        "If one word likelihood is zero, the entire product for that class becomes zero. / 단어 likelihood 하나가 0이면 해당 클래스의 전체 곱이 0이 된다.",
        "Prior probability is always zero for rare classes. / 드문 클래스의 prior는 항상 0이다.",
        "Zero probability only happens in Gaussian Naive Bayes. / zero probability는 Gaussian NB에서만 생긴다.",
      ],
      correctIndex: 1,
      explanation:
        "Naive Bayes는 likelihood들을 곱하므로 하나라도 0이면 전체 score가 0이 됩니다.",
    },
    {
      id: "7-7",
      type: "multiple",
      prompt: `Q7. Which of the following correctly describes Laplace smoothing?
Laplace smoothing에 대한 설명으로 옳은 것은?`,
      choices: [
        "It removes all rare words from the vocabulary. / 드문 단어를 vocabulary에서 제거한다.",
        "It adds 1 to each word count to avoid zero probabilities. / zero probability를 피하기 위해 각 단어 count에 1을 더한다.",
        "It changes every prior probability to 0.5. / 모든 prior probability를 0.5로 바꾼다.",
        "It preserves word order in Bag of Words. / Bag of Words에서 단어 순서를 보존한다.",
      ],
      correctIndex: 1,
      explanation:
        "Laplace smoothing은 각 count에 1을 더해 unseen word likelihood도 0이 되지 않게 합니다.",
    },
    {
      id: "7-8",
      type: "multiple",
      prompt: `Q8. What is the simple Naive Bayes solution for unknown words in test data?
테스트 데이터에 unknown word가 등장했을 때 Naive Bayes의 간단한 처리 방법은?`,
      choices: [
        "Assign probability 1 to the unknown word. / unknown word의 확률을 1로 둔다.",
        "Treat the unknown word as the most frequent word. / unknown word를 가장 자주 나온 단어로 처리한다.",
        "Ignore the word if it did not exist in the training vocabulary. / training vocabulary에 없던 단어라면 무시한다.",
        "Add the unknown word to every class with count 100. / 모든 클래스에 unknown word count를 100으로 추가한다.",
      ],
      correctIndex: 2,
      explanation:
        "간단한 절차에서는 training vocabulary에 없는 unknown word를 scoring에서 무시할 수 있습니다.",
    },
    {
      id: "7-9",
      type: "multiple",
      prompt: `Q9. Why do we often compute Naive Bayes scores in log space?
Naive Bayes 점수를 log space에서 계산하는 주된 이유는?`,
      choices: [
        "To make word order visible. / 단어 순서를 보이게 하기 위해",
        "To avoid underflow and convert products into sums. / underflow를 피하고 곱셈을 덧셈으로 바꾸기 위해",
        "To remove the need for training data. / training data가 필요 없게 하기 위해",
        "To make every class equally likely. / 모든 클래스를 동일하게 만들기 위해",
      ],
      correctIndex: 1,
      explanation:
        "작은 확률을 계속 곱하면 underflow가 생길 수 있으므로 log를 취해 합으로 계산합니다.",
    },
    {
      id: "7-10",
      type: "multiple",
      prompt: `Q10. Why can Naive Bayes be viewed as a linear classifier?
Naive Bayes를 linear classifier로 볼 수 있는 이유는?`,
      choices: [
        "Because it always uses a straight-line graph as input. / 항상 직선 그래프를 입력으로 쓰기 때문",
        "Because in log space, the score becomes a sum of feature-related terms. / log space에서 점수가 feature 관련 항들의 합으로 표현되기 때문",
        "Because it does not use probabilities. / 확률을 사용하지 않기 때문",
        "Because it requires neural networks. / 신경망이 필요하기 때문",
      ],
      correctIndex: 1,
      explanation:
        "log P(c) + sum log P(w_i|c) 형태가 되어 feature별 선형 합처럼 볼 수 있습니다.",
    },
    {
      id: "7-11",
      type: "multiple",
      prompt: `Q11. Suppose a system predicted 20 instances as positive. Among them, 15 were actually positive. There were 30 actual positive instances in total. What are precision and recall?
어떤 시스템이 20개를 positive라고 예측했고, 그중 15개가 실제 positive였다. 실제 positive는 총 30개였다. Precision과 Recall은?`,
      choices: [
        "Precision = 15/20, Recall = 15/30",
        "Precision = 15/30, Recall = 15/20",
        "Precision = 20/30, Recall = 15/20",
        "Precision = 30/20, Recall = 20/15",
      ],
      correctIndex: 0,
      explanation:
        "Precision은 TP/(TP+FP)=15/20, Recall은 TP/(TP+FN)=15/30 입니다.",
    },
    {
      id: "7-12",
      type: "multiple",
      prompt: `Q12. Which statement best describes macroaveraging and microaveraging?
Macroaveraging과 microaveraging을 가장 잘 설명한 것은?`,
      choices: [
        "Macroaveraging averages performance over classes; microaveraging aggregates all decisions first. / Macro는 클래스별 평균, micro는 전체 결정을 먼저 합친다.",
        "Macroaveraging only works for binary classification. / Macro는 binary classification에서만 작동한다.",
        "Microaveraging gives every class exactly the same weight regardless of class size. / Micro는 클래스 크기와 무관하게 각 클래스에 같은 가중치를 준다.",
        "Macroaveraging and microaveraging always produce different values. / Macro와 micro는 항상 다른 값을 낸다.",
      ],
      correctIndex: 0,
      explanation:
        "Macro는 클래스 단위 평균, micro는 전체 TP/FP/FN을 먼저 합친 뒤 계산하는 방식입니다.",
    },
    {
      id: "7-13",
      type: "tf",
      prompt: `Q2-(1). Naive Bayes assumes that features are independent of one another given the class.
Naive Bayes는 클래스가 주어졌을 때 feature들이 서로 독립이라고 가정한다.`,
      answer: true,
      explanation:
        "Naive Bayes의 핵심 가정은 conditional independence입니다.",
    },
    {
      id: "7-14",
      type: "tf",
      prompt: `Q2-(2). Bag of Words preserves the exact order of words in a sentence.
Bag of Words는 문장의 단어 순서를 정확히 보존한다.`,
      answer: false,
      explanation:
        "Bag of Words는 단어 빈도만 보고 순서를 보존하지 않습니다.",
    },
    {
      id: "7-15",
      type: "tf",
      prompt: `Q2-(3). When using argmax over classes, P(d) can be dropped because it is the same for all classes.
클래스에 대해 argmax를 사용할 때 P(d)는 모든 클래스에 대해 같기 때문에 제거할 수 있다.`,
      answer: true,
      explanation:
        "같은 문서를 두고 클래스를 비교할 때 P(d)는 공통 상수입니다.",
    },
    {
      id: "7-16",
      type: "tf",
      prompt: `Q2-(4). Laplace smoothing solves zero probability problems by deleting all zero-count words from the vocabulary.
Laplace smoothing은 zero-count 단어를 vocabulary에서 삭제해 zero probability 문제를 해결한다.`,
      answer: false,
      explanation:
        "삭제가 아니라 각 count에 1을 더하는 방식입니다.",
    },
    {
      id: "7-17",
      type: "tf",
      prompt: `Q2-(5). A simple Naive Bayes test procedure may ignore words that never appeared in the training data.
간단한 Naive Bayes 테스트 절차에서는 training data에 없던 단어를 무시할 수 있다.`,
      answer: true,
      explanation:
        "unknown word는 간단한 구현에서 무시하는 전략을 사용할 수 있습니다.",
    },
    {
      id: "7-18",
      type: "tf",
      prompt: `Q2-(6). Taking logs changes the ranking of positive probabilities because log reverses the order of values.
log를 취하면 값의 순서가 뒤집히기 때문에 positive probability의 순위가 바뀐다.`,
      answer: false,
      explanation:
        "log는 양수 범위에서 단조 증가 함수이므로 값의 순서를 보존합니다.",
    },
    {
      id: "7-19",
      type: "tf",
      prompt: `Q2-(7). Recall is calculated as TP / (TP + FN).
Recall은 TP / (TP + FN)으로 계산한다.`,
      answer: true,
      explanation:
        "Recall은 실제 positive 중 찾아낸 비율입니다.",
    },
    {
      id: "7-20",
      type: "tf",
      prompt: `Q2-(8). Macroaveraging gives equal importance to each class when averaging performance.
Macroaveraging은 성능을 평균낼 때 각 클래스를 동일하게 중요하게 본다.`,
      answer: true,
      explanation:
        "Macro 평균은 클래스별 metric을 먼저 구해 단순 평균합니다.",
    },
    {
      id: "7-21",
      type: "blank",
      prompt: `Q3-(1a). Calculate the prior probability P(+).
Training corpus에서 P(+)를 구하시오.

정답은 0.5 또는 1/2 형태로 입력해도 됩니다.`,
      answers: ["0.5", "0.50", "1/2"],
      explanation:
        "전체 문서 6개 중 positive 문서는 3개이므로 P(+) = 3/6 = 0.5 입니다.",
    },
    {
      id: "7-22",
      type: "blank",
      prompt: `Q3-(1b). Calculate the prior probability P(-).
Training corpus에서 P(-)를 구하시오.

정답은 0.5 또는 1/2 형태로 입력해도 됩니다.`,
      answers: ["0.5", "0.50", "1/2"],
      explanation:
        "전체 문서 6개 중 negative 문서는 3개이므로 P(-) = 3/6 = 0.5 입니다.",
    },
    {
      id: "7-23",
      type: "essay",
      prompt: `Q3-(2). Fill in the word counts for each class and the total number of tokens in each class.

Words:
- good
- fun
- bad
- boring
- movie
- Total tokens

training corpus:
D1 good good movie fun (+)
D2 good story fun (+)
D3 bright movie fun bad (+)
D4 bad bad movie boring (-)
D5 bad story boring (-)
D6 dull movie boring good (-)`,
      rubric: [
        ["good 3", "good:+ 3", "good positive 3"],
        ["good 1", "good:- 1", "good negative 1"],
        ["fun 3", "fun:+ 3"],
        ["fun 0", "fun:- 0"],
        ["bad 1", "bad:+ 1"],
        ["bad 3", "bad:- 3"],
        ["boring 0", "boring:+ 0"],
        ["boring 3", "boring:- 3"],
        ["movie 2", "movie:+ 2"],
        ["movie 2", "movie:- 2"],
        ["11"],
      ],
      minimumMatches: 6,
      sampleAnswer: `count(word,+):
good 3, fun 3, bad 1, boring 0, movie 2

count(word,-):
good 1, fun 0, bad 3, boring 3, movie 2

Total tokens:
+ class = 11
- class = 11`,
      explanation:
        "각 클래스 문서들을 super-document처럼 합쳐 token count를 세면 됩니다. 두 클래스 모두 total token 수는 11입니다.",
    },
    {
      id: "7-24",
      type: "essay",
      prompt: `Q3-(3). Without smoothing, compute the following word likelihoods:
P(good|+), P(good|-), P(fun|+), P(fun|-), P(movie|+), P(movie|-)

Use MLE word likelihood.`,
      rubric: [
        ["3/11", "good|+ = 3/11", "p(good|+) = 3/11"],
        ["1/11", "good|- = 1/11", "p(good|-) = 1/11"],
        ["3/11", "fun|+ = 3/11", "p(fun|+) = 3/11"],
        ["0", "fun|- = 0", "p(fun|-) = 0"],
        ["2/11", "movie|+ = 2/11", "p(movie|+) = 2/11"],
        ["2/11", "movie|- = 2/11", "p(movie|-) = 2/11"],
      ],
      minimumMatches: 4,
      sampleAnswer: `P(good|+) = 3/11
P(good|-) = 1/11
P(fun|+) = 3/11
P(fun|-) = 0
P(movie|+) = 2/11
P(movie|-) = 2/11`,
      explanation:
        "MLE likelihood는 count(w,c) / total_tokens_in_class 로 계산합니다.",
    },
    {
      id: "7-25",
      type: "essay",
      prompt: `Q3-(4). For d_A = "good good movie", compute:
1. P(d_A|+)
2. P(d_A|-)
3. P(+)P(d_A|+)
4. P(-)P(d_A|-)

Assume no smoothing.`,
      rubric: [
        ["18/1331", "p(d_a|+) = 18/1331"],
        ["2/1331", "p(d_a|-) = 2/1331"],
        ["9/1331", "p(+)p(d_a|+) = 9/1331"],
        ["1/1331", "p(-)p(d_a|-) = 1/1331"],
      ],
      minimumMatches: 3,
      sampleAnswer: `P(d_A|+) = (3/11)(3/11)(2/11) = 18/1331
P(d_A|-) = (1/11)(1/11)(2/11) = 2/1331
P(+)P(d_A|+) = 0.5 x 18/1331 = 9/1331
P(-)P(d_A|-) = 0.5 x 2/1331 = 1/1331`,
      explanation:
        "Naive Bayes에서는 문서 likelihood를 단어 likelihood의 곱으로 계산하고, 마지막에 prior를 곱해 비교합니다.",
    },
    {
      id: "7-26",
      type: "essay",
      prompt: `Q3-(5). Write the equation used to choose the predicted class for d_A, give the predicted class, and explain briefly why P(d_A) can be omitted.`,
      rubric: [
        ["argmax", "c' = argmax", "choose the class with maximum"],
        ["p(d_a|c)p(c)", "p(d|c)p(c)"],
        ["+", "positive"],
        ["same for every class", "common denominator", "상수"],
      ],
      minimumMatches: 3,
      sampleAnswer: `c' = argmax_c P(c|d_A) = argmax_c P(d_A|c)P(c)
The predicted class is +.
P(d_A) can be omitted because it is the same constant for every class when we compare classes for the same document.`,
      explanation:
        "Bayes rule의 분모 P(d)는 모든 클래스에서 동일하므로 ranking을 바꾸지 않습니다.",
    },
    {
      id: "7-27",
      type: "essay",
      prompt: `Q3-(6). Consider d_B = "fun good movie". Without smoothing, which class gets a zero likelihood? Explain exactly which word causes the zero probability.`,
      rubric: [
        ["negative", "-", "minus class"],
        ["fun"],
        ["p(fun|-) = 0", "fun never appears in negative"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The negative class gets zero likelihood because P(fun|-) = 0.
The word fun never appeared in the negative training documents, so the product for the negative class becomes 0.`,
      explanation:
        "likelihood 하나가 0이면 전체 곱이 0이 되는 것이 zero probability problem입니다.",
    },
    {
      id: "7-28",
      type: "essay",
      prompt: `Q3-(7). Apply Laplace smoothing to d_B = "fun good movie".

Use:
P(w|c) = (count(w,c)+1) / (sum count(w,c) + |V|)

Compute:
1. P(+)P(d_B|+)
2. P(-)P(d_B|-)
3. Predicted class`,
      rubric: [
        ["24/6859", "p(+)p(d_b|+) = 24/6859"],
        ["3/6859", "p(-)p(d_b|-) = 3/6859"],
        ["+", "positive"],
      ],
      minimumMatches: 2,
      sampleAnswer: `|V| = 8 and each class has 11 tokens, so the denominator is 19.
For +: (4/19)(4/19)(3/19), then multiply by 0.5, so P(+)P(d_B|+) = 24/6859.
For -: (1/19)(2/19)(3/19), then multiply by 0.5, so P(-)P(d_B|-) = 3/6859.
The predicted class is +.`,
      explanation:
        "Laplace smoothing을 적용하면 원래 0이던 P(fun|-)도 1/19가 되어 negative score가 0이 아니게 됩니다.",
    },
    {
      id: "7-29",
      type: "essay",
      prompt: `Q3-(8). Write the log-space scoring equation for d_B = "fun good movie".
Also, if the test document were d_C = "fun amazing movie", which word would be ignored, and why?`,
      rubric: [
        ["log p(c)", "score(c) = log p(c)"],
        ["log p(fun|c)", "log p(good|c)", "log p(movie|c)"],
        ["amazing"],
        ["not in the training vocabulary", "unknown word", "훈련 vocabulary에 없음"],
      ],
      minimumMatches: 3,
      sampleAnswer: `score(c) = log P(c) + log P(fun|c) + log P(good|c) + log P(movie|c)
In d_C, the word amazing would be ignored because it does not appear in the training vocabulary.`,
      explanation:
        "log space에서는 곱이 합으로 바뀌고, simple NB procedure에서는 unknown word를 무시할 수 있습니다.",
    },
    {
      id: "7-30",
      type: "essay",
      prompt: `Q4-(1). Explain what it means to view Naive Bayes as a class-specific unigram language model.
Naive Bayes를 class-specific unigram language model로 본다는 것이 무슨 뜻인지 설명하시오.`,
      rubric: [
        ["each class has its own unigram", "class specific unigram", "클래스마다 unigram 모델"],
        ["p(word|sports)", "p(word|politics)", "단어 likelihood"],
        ["sentence likelihood", "문장이 해당 클래스에서 나올 확률"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Each class can be viewed as having its own unigram language model.
For example, Sports has probabilities like P(team|Sports) and Politics has probabilities like P(vote|Politics).
Then we can score how likely a sentence is under each class-specific unigram model.`,
      explanation:
        "Naive Bayes는 각 클래스별로 P(word|class) 분포를 학습하므로 클래스별 unigram LM처럼 해석할 수 있습니다.",
    },
    {
      id: "7-31",
      type: "essay",
      prompt: `Q4-(2). For S = "team win today", write the formula for:
1. P(S|Sports)
2. P(S|Politics)`,
      rubric: [
        ["p(team|sports)", "p(win|sports)", "p(today|sports)"],
        ["p(team|politics)", "p(win|politics)", "p(today|politics)"],
      ],
      minimumMatches: 2,
      sampleAnswer: `P(S|Sports) = P(team|Sports) P(win|Sports) P(today|Sports)
P(S|Politics) = P(team|Politics) P(win|Politics) P(today|Politics)`,
      explanation:
        "unigram language model로 보면 문장 likelihood는 각 단어 likelihood의 곱입니다.",
    },
    {
      id: "7-32",
      type: "numeric",
      prompt: `Q4-(3a). Calculate P(S|Sports) for S = "team win today".
소수로 입력하시오.`,
      answer: 0.005,
      tolerance: 0.0001,
      explanation:
        "0.25 x 0.20 x 0.10 = 0.005 입니다.",
    },
    {
      id: "7-33",
      type: "numeric",
      prompt: `Q4-(3b). Calculate P(S|Politics) for S = "team win today".
소수로 입력하시오.`,
      answer: 0.00025,
      tolerance: 0.00001,
      explanation:
        "0.05 x 0.05 x 0.10 = 0.00025 입니다.",
    },
    {
      id: "7-34",
      type: "blank",
      prompt: `Q4-(3c). Which class gives the higher sentence likelihood for S = "team win today"?
Sports 또는 Politics로 입력하시오.`,
      answers: ["sports", "Sports"],
      explanation:
        "0.005 > 0.00025 이므로 Sports 클래스가 더 높은 sentence likelihood를 가집니다.",
    },
    {
      id: "7-35",
      type: "essay",
      prompt: `Q4-(4). Why can sentence likelihood become extremely small? Why do we use log space?
문장 likelihood가 왜 매우 작아질 수 있는가? 왜 log space를 사용하는가?`,
      rubric: [
        ["multiply many small probabilities", "작은 확률을 계속 곱함"],
        ["underflow"],
        ["products into sums", "곱셈을 덧셈으로", "log space"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Sentence likelihood multiplies many probabilities between 0 and 1, so the value can become extremely small.
This can cause underflow.
We use log space because it turns products into sums and makes the computation numerically stable.`,
      explanation:
        "긴 문장은 확률을 많이 곱하므로 값이 극단적으로 작아질 수 있어 log space를 사용합니다.",
    },
    {
      id: "7-36",
      type: "essay",
      prompt: `Q5-(1). Fill in the multi-class confusion matrix for the labels positive, negative, neutral.
Rows are predicted labels, columns are actual labels.

정답 표를 써 보시오.`,
      rubric: [
        ["positive row", "predicted positive", "9 2 2"],
        ["negative row", "predicted negative", "1 1 0"],
        ["neutral row", "predicted neutral", "0 0 0"],
      ],
      minimumMatches: 2,
      sampleAnswer: `| Predicted \\ Actual | positive | negative | neutral |
| positive | 9 | 2 | 2 |
| negative | 1 | 1 | 0 |
| neutral | 0 | 0 | 0 |`,
      explanation:
        "positive로 예측된 13개는 actual positive 9, negative 2, neutral 2로 나뉘고, negative로 예측된 2개는 actual positive 1, negative 1입니다.",
    },
    {
      id: "7-37",
      type: "essay",
      prompt: `Q5-(2). For each label (positive, negative, neutral), compute TP, FP, FN, Precision, Recall, and F1.`,
      rubric: [
        ["positive tp 9", "positive fp 4", "positive fn 1", "9/13", "9/10", "18/23"],
        ["negative tp 1", "negative fp 1", "negative fn 2", "1/2", "1/3", "2/5"],
        ["neutral tp 0", "neutral fp 0", "neutral fn 2", "0", "0", "f1 = 0"],
      ],
      minimumMatches: 2,
      sampleAnswer: `positive: TP=9, FP=4, FN=1, Precision=9/13≈0.692, Recall=9/10=0.9, F1=18/23≈0.783
negative: TP=1, FP=1, FN=2, Precision=1/2=0.5, Recall=1/3≈0.333, F1=2/5=0.4
neutral: TP=0, FP=0, FN=2, Precision=0, Recall=0, F1=0`,
      explanation:
        "각 label을 one-vs-rest positive class처럼 두고 TP, FP, FN을 계산하면 됩니다.",
    },
    {
      id: "7-38",
      type: "numeric",
      prompt: `Q5-(3). Compute the macro-averaged F1.
소수로 입력하시오.`,
      answer: 0.394,
      tolerance: 0.01,
      explanation:
        "Macro F1 = (0.783 + 0.400 + 0.000) / 3 ≈ 0.394 입니다.",
    },
    {
      id: "7-39",
      type: "numeric",
      prompt: `Q5-(4a). Compute the micro-averaged precision.
소수로 입력하시오.`,
      answer: 0.667,
      tolerance: 0.01,
      explanation:
        "전체 TP=10, FP=5 이므로 micro precision = 10 / 15 ≈ 0.667 입니다.",
    },
    {
      id: "7-40",
      type: "numeric",
      prompt: `Q5-(4b). Compute the micro-averaged recall.
소수로 입력하시오.`,
      answer: 0.667,
      tolerance: 0.01,
      explanation:
        "전체 TP=10, FN=5 이므로 micro recall = 10 / 15 ≈ 0.667 입니다.",
    },
    {
      id: "7-41",
      type: "numeric",
      prompt: `Q5-(5a). Compute the accuracy for this classifier.
소수로 입력하시오.`,
      answer: 0.667,
      tolerance: 0.01,
      explanation:
        "정답 개수는 10개, 전체는 15개이므로 accuracy = 10/15 ≈ 0.667 입니다.",
    },
    {
      id: "7-42",
      type: "essay",
      prompt: `Q5-(5b). Explain why accuracy alone can be misleading in this example.
이 예시에서 accuracy만 보면 왜 위험할 수 있는지 설명하시오.`,
      rubric: [
        ["neutral", "neutral class"],
        ["never predicted", "단 한 번도 예측하지 않음"],
        ["accuracy can hide poor performance on minority classes", "특정 클래스 성능을 가릴 수 있다"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Accuracy is about 0.667, which looks moderate, but the system never predicts the neutral class at all.
So the model completely fails on one class even though the overall accuracy looks acceptable.
This shows why accuracy alone can hide poor performance on minority or difficult classes.`,
      explanation:
        "전체 정확도만 보면 괜찮아 보여도 neutral을 완전히 놓친 모델일 수 있다는 점이 핵심입니다.",
    },
    {
      id: "7-43",
      type: "essay",
      prompt: `Q6-(1). Explain the difference between multi-label classification and multinomial classification.
Multi-label classification과 multinomial classification의 차이를 설명하시오.`,
      rubric: [
        ["multiple labels", "여러 라벨 동시에"],
        ["exactly one label", "하나만 선택"],
        ["example", "예시"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Multi-label classification allows one instance to have more than one label at the same time.
Multinomial classification chooses exactly one label from multiple classes.
For example, a news article can be Politics and Economy in multi-label classification, but in multinomial classification it must pick just one class.`,
      explanation:
        "multi-label은 복수 라벨 허용, multinomial은 여러 클래스 중 정확히 하나를 고르는 분류입니다.",
    },
    {
      id: "7-44",
      type: "essay",
      prompt: `Q6-(2). What is a positive class in precision/recall evaluation?
Precision/recall 평가에서 positive class란 무엇인가?`,
      rubric: [
        ["target class", "관심 클래스", "찾고 싶은 클래스"],
        ["not necessarily positive sentiment", "긍정 감정일 필요 없음"],
      ],
      minimumMatches: 1,
      sampleAnswer: `A positive class is the class we currently treat as the target class when computing precision and recall.
It does not have to mean positive sentiment; it just means the class of interest such as spam, disease, or sarcasm.`,
      explanation:
        "positive class는 지금 precision/recall을 계산할 때 기준으로 삼는 관심 클래스입니다.",
    },
    {
      id: "7-45",
      type: "essay",
      prompt: `Q6-(3). Explain the difference between a balanced dataset and an unbalanced dataset.
Balanced dataset과 unbalanced dataset의 차이를 설명하시오.`,
      rubric: [
        ["similar number of examples", "클래스 수가 비슷"],
        ["one class dominates", "한 클래스가 훨씬 많음"],
        ["accuracy can be misleading", "accuracy가 misleading"],
      ],
      minimumMatches: 2,
      sampleAnswer: `A balanced dataset has roughly similar numbers of examples for each class.
An unbalanced dataset has one or more classes that are much larger than others.
In unbalanced data, a model can get high accuracy by mostly predicting the majority class, so accuracy can be misleading.`,
      explanation:
        "balanced는 클래스 분포가 비슷하고, unbalanced는 특정 클래스가 압도적으로 많은 데이터셋입니다.",
    },
    {
      id: "7-46",
      type: "essay",
      prompt: `Q6-(4). Why can Naive Bayes be considered a generative classifier?
Naive Bayes를 generative classifier로 볼 수 있는 이유를 설명하시오.`,
      rubric: [
        ["models p(c) and p(d|c)", "p(class)와 p(document|class)"],
        ["generates documents from classes", "클래스에서 문서 생성"],
        ["then uses bayes rule", "Bayes rule로 p(c|d)"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Naive Bayes models P(c) and P(d|c), which means it models how documents could be generated from each class.
Then it applies Bayes' rule to compute P(c|d) for classification.
Because it models the data generation process, it is considered a generative classifier.`,
      explanation:
        "generative model은 입력이 클래스에서 어떻게 생성되는지를 모델링한다는 점이 핵심입니다.",
    },
    {
      id: "7-47",
      type: "essay",
      prompt: `Q6-(5). Why can both Naive Bayes and Logistic Regression be considered linear classifiers?
Naive Bayes와 Logistic Regression을 둘 다 linear classifier로 볼 수 있는 이유를 설명하시오.`,
      rubric: [
        ["log space", "log p(c) + sum", "로그 공간"],
        ["sum of feature terms", "feature 관련 항들의 합"],
        ["linear combination", "선형 결합"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Logistic Regression is linear because it computes a weighted sum of features.
Naive Bayes can also be viewed as linear in log space, where the score becomes log P(c) + sum_i log P(w_i|c).
So both models can be interpreted as using a linear combination of feature-related terms for the decision.`,
      explanation:
        "Naive Bayes는 log space에서, Logistic Regression은 원래부터 weighted sum 형태라 둘 다 linear classifier로 볼 수 있습니다.",
    },
  ],
};
