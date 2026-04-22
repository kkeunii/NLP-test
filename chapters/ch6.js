window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[6] = {
  title: "6장 N-Gram Smoothing",
  questions: [
    {
      id: "6-1",
      type: "multiple",
      prompt: `Q1. Which of the following best describes the purpose of smoothing in an n-gram language model?
다음 중 N-gram 언어모델에서 smoothing의 목적을 가장 잘 설명한 것은?`,
      choices: [
        "To increase the probabilities of frequent n-grams and keep unseen n-grams at zero. / 자주 나온 n-gram의 확률을 더 키우고, 보지 못한 n-gram의 확률은 0으로 유지한다.",
        "To take some probability mass from frequent events and give some probability to unseen events. / 자주 나온 사건의 확률 질량 일부를 가져와 보지 못한 사건에게도 확률을 준다.",
        "To remove all rare words from the vocabulary. / 드문 단어를 vocabulary에서 모두 제거한다.",
        "To make every n-gram have exactly the same probability. / 모든 n-gram이 정확히 같은 확률을 갖게 만든다.",
      ],
      correctIndex: 1,
      explanation:
        "Smoothing은 빈도가 높은 사건에서 확률 질량을 조금 가져와 unseen event에도 확률을 주는 방식입니다.",
    },
    {
      id: "6-2",
      type: "multiple",
      prompt: `Q2. Which of the following is NOT true about the zero-probability problem?
zero probability 문제에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "If one bigram in a sentence has probability 0, the entire sentence probability becomes 0. / 문장 안의 bigram 하나라도 확률이 0이면 전체 문장 확률도 0이 된다.",
        "A bigram can receive probability 0 if it never appears in the training corpus. / 훈련 corpus에 등장하지 않은 bigram은 확률 0을 받을 수 있다.",
        "The zero-probability problem is more likely when the training corpus is small. / 훈련 corpus가 작을수록 zero probability 문제가 생기기 쉽다.",
        "If an n-gram has probability 0 in the training corpus, it means that the expression is impossible in real language. / corpus에서 0이면 실제 언어에서도 불가능하다는 뜻이다.",
      ],
      correctIndex: 3,
      explanation:
        "Training corpus에 없다고 해서 실제 언어에서 불가능한 표현이라는 뜻은 아닙니다.",
    },
    {
      id: "6-3",
      type: "multiple",
      prompt: `Q3. In Laplace smoothing for bigram probability P(w_i|w_{i-1}), what is the correct denominator?
bigram 확률에 Laplace smoothing을 적용할 때 올바른 분모는?`,
      choices: [
        "Count(w_{i-1}) + 1",
        "Count(w_i) + V",
        "Count(w_{i-1}) + V",
        "N + 1",
      ],
      correctIndex: 2,
      explanation:
        "Bigram Laplace smoothing의 분모는 Count(context)+V 입니다.",
    },
    {
      id: "6-4",
      type: "multiple",
      prompt: `Q4. Which of the following is NOT true about Add-K smoothing?
Add-K smoothing에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "Add-K smoothing adds k to each count. / Add-K smoothing은 각 count에 k를 더한다.",
        "Laplace smoothing is a special case of Add-K smoothing when k=1. / Laplace smoothing은 k=1인 Add-K의 특수한 경우이다.",
        "The value of k can be optimized on a validation set. / k 값은 validation set에서 최적화할 수 있다.",
        "Add-K smoothing is always the best-performing smoothing method for language modeling. / Add-K smoothing은 항상 가장 좋은 성능을 낸다.",
      ],
      correctIndex: 3,
      explanation:
        "Add-K는 기본적인 기법이지만 항상 최고 성능을 보장하지는 않습니다.",
    },
    {
      id: "6-5",
      type: "multiple",
      prompt: `Q5. What does vocabulary size V mean in Laplace smoothing?
Laplace smoothing에서 vocabulary size V는 무엇을 의미하는가?`,
      choices: [
        "The total number of tokens in the corpus. / corpus 안의 전체 token 수",
        "The number of unique word types in the vocabulary. / vocabulary 안의 서로 다른 단어 종류의 개수",
        "The number of sentences in the corpus. / corpus 안의 문장 수",
        "The number of unseen bigrams only. / unseen bigram의 개수만",
      ],
      correctIndex: 1,
      explanation:
        "V는 전체 token 수가 아니라 vocabulary 안의 unique type 수입니다.",
    },
    {
      id: "6-6",
      type: "multiple",
      prompt: `Q6. Which of the following is NOT true about unigram and bigram Laplace smoothing?
unigram과 bigram Laplace smoothing에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "For unigram smoothing, the denominator is N + V. / unigram smoothing에서는 분모가 N+V이다.",
        "For bigram smoothing, the denominator is Count(context)+V. / bigram smoothing에서는 분모가 Count(context)+V이다.",
        "In bigram smoothing, the denominator should be Count(context)+1. / bigram smoothing에서는 분모가 Count(context)+1이어야 한다.",
        "In bigram smoothing, V is added because every possible next word receives +1. / 가능한 다음 단어 각각에 +1을 주므로 V가 더해진다.",
      ],
      correctIndex: 2,
      explanation:
        "Bigram Laplace smoothing의 분모는 Count(context)+1이 아니라 Count(context)+V 입니다.",
    },
    {
      id: "6-7",
      type: "multiple",
      prompt: `Q7. Which statement correctly describes the difference between interpolation and backoff?
Interpolation과 Backoff의 차이를 올바르게 설명한 것은?`,
      choices: [
        "Interpolation uses only unigram probabilities, while backoff uses only trigram probabilities.",
        "Interpolation mixes probabilities from multiple n-gram sizes, while backoff moves to a lower-order n-gram only when the higher-order n-gram has zero count.",
        "Backoff always averages trigram, bigram, and unigram probabilities.",
        "Interpolation cannot use weights.",
      ],
      correctIndex: 1,
      explanation:
        "Interpolation은 여러 차수의 확률을 섞고, backoff는 높은 차수 count가 0일 때만 낮은 차수로 내려갑니다.",
    },
    {
      id: "6-8",
      type: "multiple",
      prompt: `Q8. What is the key idea of conditional interpolation?
Conditional interpolation의 핵심 아이디어는 무엇인가?`,
      choices: [
        "It always uses the same fixed weights regardless of context.",
        "It ignores lower-order n-grams completely.",
        "It changes interpolation weights depending on the context.",
        "It sets all unseen n-grams to zero.",
      ],
      correctIndex: 2,
      explanation:
        "Conditional interpolation은 문맥에 따라 interpolation weight를 다르게 설정합니다.",
    },
    {
      id: "6-9",
      type: "multiple",
      prompt: `Q9. What is the role of α in Katz Backoff?
Katz Backoff에서 α의 역할은 무엇인가?`,
      choices: [
        "It counts the number of words in the vocabulary.",
        "It redistributes discounted probability mass to lower-order n-grams.",
        "It removes all unseen n-grams from the model.",
        "It replaces all probabilities with uniform probabilities.",
      ],
      correctIndex: 1,
      explanation:
        "α는 discount로 남은 확률 질량을 lower-order n-gram으로 재분배하는 역할을 합니다.",
    },
    {
      id: "6-10",
      type: "multiple",
      prompt: `Q10. What is the main intuition behind Kneser-Ney smoothing?
Kneser-Ney smoothing의 핵심 직관은 무엇인가?`,
      choices: [
        "A word is important only if it appears frequently in the whole corpus.",
        "Unseen n-grams should always receive probability 0.",
        "A good lower-order probability should consider how many different contexts a word appears in.",
        "Kneser-Ney does not use discounting.",
      ],
      correctIndex: 2,
      explanation:
        "Kneser-Ney는 단어가 얼마나 자주 나왔는지보다 얼마나 다양한 문맥에서 continuation으로 등장했는지를 봅니다.",
    },
    {
      id: "6-11",
      type: "multiple",
      prompt: `Q11. In the "york" vs "mocha" example, why can "mocha" be a better continuation than "york" after "tall nonfat decaf peppermint"?
"york"와 "mocha" 예시에서 왜 mocha가 더 좋은 continuation일 수 있는가?`,
      choices: [
        "Because york never appears in any corpus.",
        "Because york may be frequent overall but mostly appears after new, while mocha can appear in more relevant contexts.",
        "Because Kneser-Ney always prefers rare words.",
        "Because mocha has zero probability.",
      ],
      correctIndex: 1,
      explanation:
        "York는 전체 빈도는 높아도 특정 문맥에 치우칠 수 있고, mocha는 다양한 관련 문맥에서 이어질 수 있습니다.",
    },
    {
      id: "6-12",
      type: "multiple",
      prompt: `Q12. Which of the following is NOT true about Stupid Backoff?
Stupid Backoff에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "It tries to make the language model a true normalized probability distribution.",
        "It does not discount higher-order probabilities.",
        "If a higher-order n-gram has zero count, it backs off to a lower-order n-gram with a fixed weight.",
        "It is usually written as a score S, not a probability P.",
      ],
      correctIndex: 0,
      explanation:
        "Stupid Backoff는 true normalized probability distribution을 만들지 않습니다.",
    },
    {
      id: "6-13",
      type: "tf",
      prompt: `T/F 1. Laplace smoothing adds one to every n-gram count before normalization.
Laplace smoothing은 정규화 전에 모든 n-gram count에 1을 더한다.`,
      answer: true,
      explanation:
        "Laplace는 add-one smoothing입니다.",
    },
    {
      id: "6-14",
      type: "tf",
      prompt: `T/F 2. In Laplace-smoothed bigram probability, the denominator is Count(context)+1.
Laplace smoothing이 적용된 bigram 확률에서 분모는 Count(context)+1이다.`,
      answer: false,
      explanation:
        "분모는 Count(context)+V 입니다.",
    },
    {
      id: "6-15",
      type: "tf",
      prompt: `T/F 3. Add-K smoothing becomes Laplace smoothing when k = 1.
Add-K smoothing에서 k=1이면 Laplace smoothing이 된다.`,
      answer: true,
      explanation:
        "Laplace는 Add-K의 특수한 경우입니다.",
    },
    {
      id: "6-16",
      type: "tf",
      prompt: `T/F 4. Interpolation uses only the highest-order n-gram if its count is non-zero.
Interpolation은 highest-order n-gram의 count가 0이 아니면 그것만 사용한다.`,
      answer: false,
      explanation:
        "그 설명은 backoff에 가깝고, interpolation은 여러 차수의 확률을 섞습니다.",
    },
    {
      id: "6-17",
      type: "tf",
      prompt: `T/F 5. Backoff moves to a lower-order n-gram when the higher-order n-gram has zero count.
Backoff는 higher-order n-gram의 count가 0일 때 lower-order n-gram으로 내려간다.`,
      answer: true,
      explanation:
        "Backoff의 기본 아이디어입니다.",
    },
    {
      id: "6-18",
      type: "tf",
      prompt: `T/F 6. Katz Backoff uses discounted probability P* when the n-gram has non-zero count.
Katz Backoff는 n-gram count가 0이 아닐 때 discounted probability P*를 사용한다.`,
      answer: true,
      explanation:
        "Non-zero count n-gram에는 discount된 P*를 사용합니다.",
    },
    {
      id: "6-19",
      type: "tf",
      prompt: `T/F 7. In Katz Backoff, α helps redistribute probability mass to lower-order n-grams.
Katz Backoff에서 α는 확률 질량을 lower-order n-gram에 재분배하는 데 사용된다.`,
      answer: true,
      explanation:
        "α는 남은 확률 질량을 하위 차수로 넘겨주는 역할입니다.",
    },
    {
      id: "6-20",
      type: "tf",
      prompt: `T/F 8. Kneser-Ney smoothing uses simple unigram frequency as the lower-order probability.
Kneser-Ney smoothing은 lower-order probability로 단순 unigram frequency를 사용한다.`,
      answer: false,
      explanation:
        "Kneser-Ney는 continuation probability를 중요하게 봅니다.",
    },
    {
      id: "6-21",
      type: "tf",
      prompt: `T/F 9. In Kneser-Ney, lower-order counts can be based on the number of unique contexts.
Kneser-Ney에서 lower-order count는 unique context의 수를 기반으로 할 수 있다.`,
      answer: true,
      explanation:
        "Continuation probability는 distinct context 수를 사용합니다.",
    },
    {
      id: "6-22",
      type: "tf",
      prompt: `T/F 10. Stupid Backoff is a true probability distribution because all scores are normalized to sum to 1.
Stupid Backoff는 모든 score의 합이 1이 되도록 정규화되므로 진짜 확률분포이다.`,
      answer: false,
      explanation:
        "Stupid Backoff는 정규화되지 않은 score 방식입니다.",
    },
    {
      id: "6-23",
      type: "essay",
      prompt: `Set A-1. Using the corpus below, write:
1. unigram frequency table
2. bigram frequency table containing only observed bigrams
3. vocabulary size V

Corpus:
<s> I like NLP </s>
<s> I like AI </s>
<s> You like NLP </s>

Unseen word Robots is also included in the vocabulary.`,
      rubric: [
        ["<s> = 3", "s 3"],
        ["i = 2"],
        ["like = 3"],
        ["nlp = 2"],
        ["</s> = 3", "s 3"],
        ["ai = 1"],
        ["you = 1"],
        ["robots = 0"],
        ["<s> i = 2", "s i 2"],
        ["i like = 2"],
        ["like nlp = 2"],
        ["nlp </s> = 2", "nlp s 2"],
        ["like ai = 1"],
        ["ai </s> = 1", "ai s 1"],
        ["<s> you = 1", "s you 1"],
        ["you like = 1"],
        ["v = 8", "v=8"],
      ],
      minimumMatches: 8,
      sampleAnswer: `Unigrams:
<s>=3, I=2, like=3, NLP=2, </s>=3, AI=1, You=1, Robots=0

Bigrams:
<s> I=2
I like=2
like NLP=2
NLP </s>=2
like AI=1
AI </s>=1
<s> You=1
You like=1

Vocabulary size V = 8`,
      explanation:
        "Robots는 corpus에 없지만 문제에서 unseen word로 포함하라고 했으므로 vocabulary에 포함되어 V=8이 됩니다.",
    },
    {
      id: "6-24",
      type: "essay",
      prompt: `Set A-2. Using the same corpus, compute the following with MLE and explain which cases produce zero probability and why:
P(NLP | like)
P(AI | You)
P(like | Robots)`,
      rubric: [
        ["p(nlp|like)", "2/3"],
        ["p(ai|you)", "0"],
        ["p(like|robots)", "0"],
        ["zero", "you ai not observed", "bigram not observed"],
        ["robots count is 0", "context itself unseen", "denominator 0"],
      ],
      minimumMatches: 4,
      sampleAnswer: `P(NLP | like) = Count(like,NLP) / Count(like) = 2/3
P(AI | You) = Count(You,AI) / Count(You) = 0/1 = 0
P(like | Robots) = Count(Robots,like) / Count(Robots) = 0/0, and by the problem's exception handling we write 0

Zero probabilities occur for P(AI | You) because the bigram You AI was never seen, and for P(like | Robots) because the context Robots never appears in the corpus.`,
      explanation:
        "Zero probability는 bigram이 없을 때도 생기고, context 자체가 training corpus에 없을 때도 생깁니다.",
    },
    {
      id: "6-25",
      type: "essay",
      prompt: `Set A-3. Apply Laplace smoothing to Set A and summarize:
1. smoothed unigram counts
2. selected smoothed bigram counts for observed bigrams and zero-count cases
3. P_Laplace(NLP | like), P_Laplace(AI | You), P_Laplace(like | Robots)
4. sentence probability equation for "You like AI"
5. perplexity equation for that sentence`,
      rubric: [
        ["n+v = 23", "23"],
        ["<s> = 4", "i = 3", "like = 4", "robots = 1"],
        ["you ai 0 1", "robots like 0 1"],
        ["3/11", "1/9", "1/8"],
        ["p(you|<s>)", "p(like|you)", "p(ai|like)", "p(</s>|ai)"],
        ["perplexity", "1/4", "four predicted tokens"],
      ],
      minimumMatches: 5,
      sampleAnswer: `Smoothed unigram counts:
<s>=4, I=3, like=4, NLP=3, </s>=4, AI=2, You=2, Robots=1, so N+V=23

Observed and selected smoothed bigram counts:
<s> I=3, I like=3, like NLP=3, NLP </s>=3, like AI=2, AI </s>=2, <s> You=2, You like=2, You AI=1, Robots like=1

Smoothed probabilities:
P_Laplace(NLP | like) = (2+1)/(3+8) = 3/11
P_Laplace(AI | You) = (0+1)/(1+8) = 1/9
P_Laplace(like | Robots) = (0+1)/(0+8) = 1/8

Sentence probability:
P(You | <s>) x P(like | You) x P(AI | like) x P(</s> | AI)

Perplexity:
PP = P(sentence)^(-1/4)`,
      explanation:
        "Laplace smoothing에서는 모든 count에 +1을 하고, bigram 분모는 Count(context)+V를 사용합니다.",
    },
    {
      id: "6-26",
      type: "essay",
      prompt: `Set B-1. Using the corpus below, write:
1. unigram frequency table
2. bigram frequency table containing only observed bigrams
3. vocabulary size V

Corpus:
<s> she eats sushi </s>
<s> she eats ramen </s>
<s> he eats ramen </s>
<s> he cooks sushi </s>

Unseen word pizza is also included in the vocabulary.`,
      rubric: [
        ["<s> = 4", "s 4"],
        ["she = 2"],
        ["eats = 3"],
        ["sushi = 2"],
        ["</s> = 4", "s 4"],
        ["ramen = 2"],
        ["he = 2"],
        ["cooks = 1"],
        ["pizza = 0"],
        ["<s> she = 2", "s she 2"],
        ["she eats = 2"],
        ["eats sushi = 1"],
        ["sushi </s> = 2", "sushi s 2"],
        ["eats ramen = 2"],
        ["ramen </s> = 2", "ramen s 2"],
        ["<s> he = 2", "s he 2"],
        ["he eats = 1"],
        ["he cooks = 1"],
        ["cooks sushi = 1"],
        ["v = 9", "v=9"],
      ],
      minimumMatches: 8,
      sampleAnswer: `Unigrams:
<s>=4, she=2, eats=3, sushi=2, </s>=4, ramen=2, he=2, cooks=1, pizza=0

Bigrams:
<s> she=2
she eats=2
eats sushi=1
sushi </s>=2
eats ramen=2
ramen </s>=2
<s> he=2
he eats=1
he cooks=1
cooks sushi=1

Vocabulary size V = 9`,
      explanation:
        "Pizza는 unseen word로 vocabulary에 포함되므로 V 계산에 들어갑니다.",
    },
    {
      id: "6-27",
      type: "essay",
      prompt: `Set B-2. Using the same corpus, compute the following with MLE and explain which cases produce zero probability and why:
P(ramen | eats)
P(sushi | he)
P(eats | pizza)`,
      rubric: [
        ["p(ramen|eats)", "2/3"],
        ["p(sushi|he)", "0"],
        ["p(eats|pizza)", "0"],
        ["he sushi not observed", "bigram zero"],
        ["pizza unseen", "count pizza 0", "denominator 0"],
      ],
      minimumMatches: 4,
      sampleAnswer: `P(ramen | eats) = Count(eats,ramen) / Count(eats) = 2/3
P(sushi | he) = Count(he,sushi) / Count(he) = 0/2 = 0
P(eats | pizza) = Count(pizza,eats) / Count(pizza) = 0/0, and by exception handling we write 0

Zero probability occurs because he sushi never appears, and because pizza never appears as a context in the corpus.`,
      explanation:
        "Bigram이 없을 수도 있고, context count 자체가 0일 수도 있습니다.",
    },
    {
      id: "6-28",
      type: "essay",
      prompt: `Set B-3. Apply Laplace smoothing to Set B and summarize:
1. smoothed unigram counts
2. selected smoothed bigram counts for observed bigrams and zero-count cases
3. P_Laplace(ramen | eats), P_Laplace(sushi | he), P_Laplace(eats | pizza)
4. sentence probability equation for "he eats sushi"
5. perplexity equation for that sentence`,
      rubric: [
        ["n+v = 29", "29"],
        ["<s> = 5", "she = 3", "pizza = 1"],
        ["he sushi 0 1", "pizza eats 0 1"],
        ["1/4", "1/11", "1/9"],
        ["p(he|<s>)", "p(eats|he)", "p(sushi|eats)", "p(</s>|sushi)"],
        ["perplexity", "1/4"],
      ],
      minimumMatches: 5,
      sampleAnswer: `Smoothed unigram counts:
<s>=5, she=3, eats=4, sushi=3, </s>=5, ramen=3, he=3, cooks=2, pizza=1, so N+V=29

Selected smoothed bigram counts:
<s> she=3, she eats=3, eats sushi=2, sushi </s>=3, eats ramen=3, ramen </s>=3, <s> he=3, he eats=2, he cooks=2, cooks sushi=2, he sushi=1, pizza eats=1

Smoothed probabilities:
P_Laplace(ramen | eats) = (2+1)/(3+9) = 1/4
P_Laplace(sushi | he) = (0+1)/(2+9) = 1/11
P_Laplace(eats | pizza) = (0+1)/(0+9) = 1/9

Sentence probability:
P(he | <s>) x P(eats | he) x P(sushi | eats) x P(</s> | sushi)

Perplexity:
PP = P(sentence)^(-1/4)`,
      explanation:
        "Bigram Laplace smoothing은 분자에 +1, 분모에 +V를 적용합니다.",
    },
    {
      id: "6-29",
      type: "blank",
      prompt: `I-1. Compute the interpolation probability:
P'(Seoul | I love) = 0.5 x 0.6 + 0.3 x 0.4 + 0.2 x 0.1`,
      answers: ["0.44", "0.440"],
      explanation:
        "0.30 + 0.12 + 0.02 = 0.44 입니다.",
    },
    {
      id: "6-30",
      type: "essay",
      prompt: `I-2. Are the following interpolation weights valid? If not, explain why. Then compute the raw weighted score.
λ3=0.6, λ2=0.3, λ1=0.2
P(w|ab)=0.5, P(w|b)=0.4, P(w)=0.1`,
      rubric: [
        ["1.1", "sum = 1.1", "합이 1.1"],
        ["not valid", "invalid", "유효하지 않다"],
        ["0.44"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The weights are not valid as interpolation probabilities because they sum to 1.1, not 1.
The raw weighted score is 0.6 x 0.5 + 0.3 x 0.4 + 0.2 x 0.1 = 0.44.`,
      explanation:
        "Interpolation weight는 합이 1이어야 합니다. 이 경우 raw score는 계산 가능하지만 valid probability는 아닙니다.",
    },
    {
      id: "6-31",
      type: "essay",
      prompt: `I-3. Why might conditional interpolation assign different weights to P(Seoul|I love) and P(Seoul|I bus), even if both values are 0.7?
왜 conditional interpolation은 두 확률값이 같아도 서로 다른 weight를 줄 수 있는가?`,
      rubric: [
        ["context", "문맥"],
        ["weights depend on context", "문맥에 따라 weight", "different weights"],
        ["i love", "i bus", "자연스러운 문맥", "이상한 문맥"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Conditional interpolation can choose weights based on the context.
Even if both probabilities are 0.7, "I love" is a more reliable context than "I bus", so the model may trust the higher-order probability differently in the two cases.`,
      explanation:
        "Conditional interpolation의 핵심은 고정 weight가 아니라 context-conditioned weight입니다.",
    },
    {
      id: "6-32",
      type: "essay",
      prompt: `K-1. Katz Backoff Calculation
Given:
P(pizza | I eat) = 0.5
P(burger | I eat) = 0.25
discount factor = 0.8
P(tacos) = 0.5
P(tacos | eat) = 0.3

Compute:
1. P*(pizza | I eat)
2. P*(burger | I eat)
3. α(I eat)
4. P(tacos | I eat)`,
      rubric: [
        ["0.4", "p* pizza"],
        ["0.2", "p* burger"],
        ["0.8", "alpha"],
        ["0.24", "p tacos"],
      ],
      minimumMatches: 3,
      sampleAnswer: `P*(pizza | I eat) = 0.8 x 0.5 = 0.4
P*(burger | I eat) = 0.8 x 0.25 = 0.2
Remaining mass = 1 - (0.4 + 0.2) = 0.4
alpha(I eat) = 0.4 / 0.5 = 0.8
P(tacos | I eat) = alpha(I eat) x P(tacos | eat) = 0.8 x 0.3 = 0.24`,
      explanation:
        "Katz Backoff에서는 non-zero higher-order probability를 discount한 뒤 남은 mass를 α로 lower-order n-gram에 재분배합니다.",
    },
    {
      id: "6-33",
      type: "blank",
      prompt: `K-2. If P(salad | I eat)=0.2 and the discount factor is 0.8, compute P*(salad | I eat).`,
      answers: ["0.16", "0.160"],
      explanation:
        "Discounted probability is 0.8 x 0.2 = 0.16 입니다.",
    },
    {
      id: "6-34",
      type: "essay",
      prompt: `K-3. Why is α needed in Katz Backoff?
Katz Backoff에서 α가 왜 필요한지 설명하시오.`,
      rubric: [
        ["discounted probability mass", "남은 확률 질량"],
        ["redistribute", "재분배"],
        ["lower-order", "낮은 차수"],
      ],
      minimumMatches: 2,
      sampleAnswer: `α is needed to redistribute the probability mass left over after discounting the observed higher-order n-grams.
It controls how much probability should be assigned through the lower-order model.`,
      explanation:
        "α는 higher-order n-gram을 discount한 뒤 남는 확률 질량을 lower-order model로 넘길 때 필요합니다.",
    },
    {
      id: "6-35",
      type: "blank",
      prompt: `KN-1. Using the following distinct bigram types, compute P_continuation(york):
new york, old york, iced mocha, hot mocha, peppermint mocha, vanilla mocha, big city, small city`,
      answers: ["0.25", "1/4"],
      explanation:
        "York appears after 2 distinct contexts out of 8 distinct bigram types, so 2/8 = 0.25 입니다.",
    },
    {
      id: "6-36",
      type: "blank",
      prompt: `KN-1. Using the same bigram types, compute P_continuation(mocha).`,
      answers: ["0.5", "1/2"],
      explanation:
        "Mocha appears after 4 distinct contexts out of 8 distinct bigram types, so 4/8 = 0.5 입니다.",
    },
    {
      id: "6-37",
      type: "essay",
      prompt: `KN-2. York has a higher overall count than mocha. Why can Kneser-Ney still prefer mocha as a better continuation?
왜 Kneser-Ney는 york보다 mocha를 더 좋은 continuation으로 볼 수 있는가?`,
      rubric: [
        ["overall count", "전체 count"],
        ["different contexts", "다양한 문맥", "unique contexts"],
        ["new york", "specific context", "mocha appears in more contexts"],
      ],
      minimumMatches: 2,
      sampleAnswer: `York may have a larger total count, but much of it can come from a very limited context such as "new york".
Mocha appears in more distinct contexts, so Kneser-Ney can assign it a higher continuation probability.`,
      explanation:
        "Kneser-Ney는 frequency보다 context diversity를 더 중요하게 봅니다.",
    },
    {
      id: "6-38",
      type: "blank",
      prompt: `KN-3. Given:
Count(eat,pizza)=2, Count(eat,ramen)=3, Count(eat,sushi)=5, d=0.1

Compute λ(eat) = (d / sum_v c(eat,v)) x |{w : c(eat,w) > 0}|`,
      answers: ["0.03", "0.030"],
      explanation:
        "Total count after eat is 10, number of distinct continuations is 3, so λ(eat)=0.1/10 x 3 = 0.03 입니다.",
    },
    {
      id: "6-39",
      type: "essay",
      prompt: `KN-4. Given:
Count(I eat sushi)=0
Count(I eat pizza)=2
Count(I eat hamburgers)=3
d=0.1
P_KN(sushi | eat)=0.502

Compute:
1. λ(I eat)
2. P_KN(sushi | I eat)`,
      rubric: [
        ["0.04", "lambda"],
        ["0.02008", "p_kn"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The total count after "I eat" is 2+3=5, and there are 2 distinct continuations, so:
lambda(I eat) = (0.1 / 5) x 2 = 0.04

Because Count(I eat sushi)=0, the first discounted term is 0.
So P_KN(sushi | I eat) = lambda(I eat) x P_KN(sushi | eat) = 0.04 x 0.502 = 0.02008`,
      explanation:
        "Count가 0이면 discounted first term은 0이 되고, backoff term만 남습니다.",
    },
    {
      id: "6-40",
      type: "essay",
      prompt: `KN-5. Explain the meaning of each part in:
P_KN(w_i | context)
= max(c(context,w_i)-d,0) / sum_v c(context,v)
+ lambda(context) P_KN(w_i | shorter context)

다음 세 부분을 설명하시오:
1. max(c(context,w_i)-d,0)
2. lambda(context)
3. P_KN(w_i | shorter context)`,
      rubric: [
        ["discount", "count minus d", "깎는다"],
        ["remaining probability mass", "남은 확률 질량", "lambda"],
        ["shorter context", "낮은 차수", "continuation probability"],
      ],
      minimumMatches: 3,
      sampleAnswer: `1. max(c(context,w_i)-d,0) is the discounted count term for the current context.
2. lambda(context) determines how much leftover probability mass is passed to the lower-order model.
3. P_KN(w_i | shorter context) is the lower-order Kneser-Ney probability, often based on continuation behavior in a shorter context.`,
      explanation:
        "Kneser-Ney는 현재 context의 discounted term과 lower-order continuation term을 함께 사용합니다.",
    },
    {
      id: "6-41",
      type: "essay",
      prompt: `SB-1. Why is Stupid Backoff not a true probability distribution?
Stupid Backoff가 왜 진짜 확률분포가 아닌지 설명하시오.`,
      rubric: [
        ["not normalized", "정규화되지 않음"],
        ["scores", "score", "probability가 아님"],
        ["sum to 1", "합이 1"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Stupid Backoff is not a true probability distribution because its values are not normalized to sum to 1.
It uses scores rather than proper probabilities.`,
      explanation:
        "Stupid Backoff는 normalized probability 대신 practical score로 동작합니다.",
    },
    {
      id: "6-42",
      type: "blank",
      prompt: `SB-2. If Count(I eat pizza)=2 and Count(I eat)=5, compute S(pizza | I eat) in Stupid Backoff.`,
      answers: ["0.4", "2/5"],
      explanation:
        "Higher-order count가 0이 아니므로 그대로 2/5 = 0.4 를 사용합니다.",
    },
    {
      id: "6-43",
      type: "blank",
      prompt: `SB-3. If Count(I eat sushi)=0, λ=0.4, Count(eat sushi)=5, Count(eat)=10, compute S(sushi | I eat).`,
      answers: ["0.2", "0.20"],
      explanation:
        "S(sushi | eat)=5/10=0.5 이고, higher-order count가 0이므로 0.4 x 0.5 = 0.2 입니다.",
    },
    {
      id: "6-44",
      type: "essay",
      prompt: `SB-4. Why is Stupid Backoff usually written as S rather than P?
왜 Stupid Backoff는 보통 P가 아니라 S로 쓰는가?`,
      rubric: [
        ["score", "점수"],
        ["not true probability", "진짜 확률분포가 아님"],
        ["not normalized", "정규화되지 않음"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Stupid Backoff is often written as S because it returns a score, not a true normalized probability.
Its values do not necessarily sum to 1.`,
      explanation:
        "정규화된 probability가 아니기 때문에 score S라는 표기를 많이 씁니다.",
    },
    {
      id: "6-45",
      type: "essay",
      prompt: `E-1. Explain why smoothing is needed, connecting it to the zero-probability problem.
Smoothing이 왜 필요한지 zero probability 문제와 연결해서 설명하시오.`,
      rubric: [
        ["zero probability", "확률 0"],
        ["sentence probability becomes 0", "문장 확률 전체가 0"],
        ["corpus에 없다고 불가능은 아님", "not impossible"],
        ["assign small probability", "작은 확률을 준다"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Without smoothing, an unseen n-gram gets probability 0.
Because sentence probability is the product of n-gram probabilities, a single zero makes the whole sentence probability 0.
But unseen in the training corpus does not mean impossible in real language, so smoothing assigns small probabilities to unseen events.`,
      explanation:
        "Smoothing은 unseen event의 probability를 0으로 두지 않기 위해 필요합니다.",
    },
    {
      id: "6-46",
      type: "essay",
      prompt: `E-2. Compare Laplace smoothing and Add-K smoothing.
Laplace smoothing과 Add-K smoothing을 비교하시오.`,
      rubric: [
        ["laplace", "+1"],
        ["add-k", "+k"],
        ["k=1", "special case"],
        ["denominator", "+V", "+kV"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Laplace smoothing adds 1 to every count.
Add-K smoothing generalizes this by adding k instead of 1.
Laplace is the special case of Add-K when k=1.
In the denominator, unigram uses N+V for Laplace and N+kV for Add-K; bigram similarly uses Count(context)+V or Count(context)+kV.`,
      explanation:
        "Laplace는 Add-K의 k=1 특수형이고, Add-K는 더 유연하게 k를 조정할 수 있습니다.",
    },
    {
      id: "6-47",
      type: "essay",
      prompt: `E-3. Explain the difference between interpolation and backoff.
Interpolation과 Backoff의 차이를 설명하시오.`,
      rubric: [
        ["interpolation", "mix", "섞는다"],
        ["backoff", "lower-order", "낮은 차수로 내려간다"],
        ["always mix", "없으면 내려감"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Interpolation combines probabilities from multiple n-gram orders using weights.
Backoff first tries the higher-order n-gram and only moves to a lower-order model when the higher-order count is zero or unavailable.`,
      explanation:
        "Interpolation은 항상 섞고, backoff는 필요할 때만 낮은 차수로 내려갑니다.",
    },
    {
      id: "6-48",
      type: "essay",
      prompt: `E-4. Why does Kneser-Ney care about continuation probability rather than simple unigram frequency?
왜 Kneser-Ney는 단순 unigram frequency보다 continuation probability를 중요하게 보는가?`,
      rubric: [
        ["different contexts", "다양한 문맥"],
        ["new york", "york", "mocha"],
        ["frequency alone is not enough", "전체 빈도만으로 부족"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Simple unigram frequency only tells us how often a word appears overall.
Kneser-Ney instead asks how many different contexts the word can follow, because that is more informative for continuation.
So a word like mocha can be preferred over york even if york is more frequent overall.`,
      explanation:
        "Kneser-Ney는 전체 빈도보다 문맥 다양성이 continuation 예측에 더 중요하다고 봅니다.",
    },
  ],
};
