window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[5] = {
  title: "5장 N-Gram Language Models",
  questions: [
    {
      id: "5-1",
      type: "multiple",
      prompt: `Q1. Which of the following best defines an N-gram?
다음 중 N-gram을 가장 잘 설명한 것은?`,
      choices: [
        "A set of randomly selected words from a document. / 문서에서 무작위로 선택된 단어들의 집합이다.",
        "A sequence of N consecutive words. / 연속된 N개의 단어 sequence이다.",
        "A probability distribution over document labels. / 문서 label에 대한 확률 분포이다.",
        "A hidden state sequence used in POS tagging. / 품사 태깅에서 사용되는 hidden state sequence이다.",
      ],
      correctIndex: 1,
      explanation:
        "N-gram은 연속된 N개의 단어 묶음을 뜻합니다.",
    },
    {
      id: "5-2",
      type: "multiple",
      prompt: `Q2. Which of the following is NOT true about the Markov assumption in N-gram language models?
다음 중 N-gram language model의 Markov assumption에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "A bigram model predicts the current word using only the previous word. / Bigram model은 현재 단어를 예측할 때 바로 이전 단어만 사용한다.",
        "A trigram model predicts the current word using the previous two words. / Trigram model은 현재 단어를 예측할 때 이전 두 단어를 사용한다.",
        "A bigram model always considers the entire previous history of the sentence. / Bigram model은 항상 문장의 전체 이전 history를 고려한다.",
        "N-gram models approximate the full history using only the most recent words. / N-gram model은 전체 history 대신 최근 몇 개의 단어만 사용하여 근사한다.",
      ],
      correctIndex: 2,
      explanation:
        "Bigram은 전체 history가 아니라 바로 앞 단어 하나만 봅니다.",
    },
    {
      id: "5-3",
      type: "multiple",
      prompt: `Q3. Which formula correctly represents the Maximum Likelihood Estimate for a bigram probability?
Bigram probability에 대한 MLE 공식으로 올바른 것은?`,
      choices: [
        "P(w_n | w_n-1) = C(w_n) / C(w_n-1)",
        "P(w_n | w_n-1) = C(w_n-1 w_n) / C(w_n-1)",
        "P(w_n | w_n-1) = C(w_n-1) / C(w_n-1 w_n)",
        "P(w_n | w_n-1) = C(w_n-1 w_n) / C(w_n)",
      ],
      correctIndex: 1,
      explanation:
        "Bigram MLE는 bigram count를 이전 단어의 unigram count로 나눕니다.",
    },
    {
      id: "5-4",
      type: "multiple",
      prompt: `Q4. Which of the following is NOT true about perplexity?
다음 중 perplexity에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "Perplexity is an intrinsic evaluation metric for language models. / Perplexity는 language model의 intrinsic evaluation metric이다.",
        "Lower perplexity generally means the model assigns higher probability to the test set. / Perplexity가 낮다는 것은 일반적으로 모델이 test set에 더 높은 확률을 부여한다는 뜻이다.",
        "A lower perplexity always guarantees better downstream task performance. / Perplexity가 낮으면 항상 downstream task 성능이 더 좋아진다는 것을 보장한다.",
        "Minimizing perplexity is equivalent to maximizing the test set probability according to the language model. / Perplexity를 최소화하는 것은 test set probability를 최대화하는 것과 같다.",
      ],
      correctIndex: 2,
      explanation:
        "Perplexity가 낮다고 해서 실제 downstream task 성능 향상이 항상 보장되지는 않습니다.",
    },
    {
      id: "5-5",
      type: "multiple",
      prompt: `Q5. Which of the following best describes extrinsic evaluation of a language model?
다음 중 language model의 extrinsic evaluation을 가장 잘 설명한 것은?`,
      choices: [
        "Calculating perplexity on a test corpus. / Test corpus에서 perplexity를 계산하는 것이다.",
        "Counting unigram and bigram frequencies in a training corpus. / Training corpus에서 unigram과 bigram frequency를 세는 것이다.",
        "Embedding the language model into an actual task and measuring task performance. / language model을 실제 task에 넣고 task performance를 측정하는 것이다.",
        "Checking whether every word in the test set appears in the training set. / Test set의 모든 단어가 training set에 등장하는지 확인하는 것이다.",
      ],
      correctIndex: 2,
      explanation:
        "Extrinsic evaluation은 실제 application 안에 language model을 넣어 성능을 보는 방식입니다.",
    },
    {
      id: "5-6",
      type: "multiple",
      prompt: `Q6. In a bigram language model, which formula correctly represents the sentence probability of "I like NLP" including sentence start and end tokens?
Bigram language model에서 문장 시작과 끝 token을 포함하여 "I like NLP"의 sentence probability를 올바르게 나타낸 식은?`,
      choices: [
        "P(I) x P(like) x P(NLP)",
        "P(like | I) x P(NLP | like)",
        "P(I | <s>) x P(like | I) x P(NLP | like) x P(</s> | NLP)",
        "P(NLP | I like) x P(</s> | I like NLP)",
      ],
      correctIndex: 2,
      explanation:
        "Bigram sentence probability는 start/end token을 포함해 인접 bigram 확률들을 곱해 계산합니다.",
    },
    {
      id: "5-7",
      type: "tf",
      prompt: `T/F 1. A bigram language model considers the entire previous history when predicting the next word.
Bigram language model은 다음 단어를 예측할 때 전체 이전 history를 고려한다.`,
      answer: false,
      explanation:
        "Bigram은 바로 앞 단어 하나만 봅니다.",
    },
    {
      id: "5-8",
      type: "tf",
      prompt: `T/F 2. In bigram MLE, the denominator is the count of the previous word.
Bigram MLE에서 분모는 이전 단어의 count이다.`,
      answer: true,
      explanation:
        "P(w_i | w_{i-1}) = C(w_{i-1}, w_i) / C(w_{i-1}) 입니다.",
    },
    {
      id: "5-9",
      type: "tf",
      prompt: `T/F 3. The tokens <s> and </s> can be used to model sentence beginnings and endings.
<s>와 </s> token은 문장의 시작과 끝을 modeling하기 위해 사용할 수 있다.`,
      answer: true,
      explanation:
        "문장 시작과 끝 token은 sentence probability 계산에서 매우 중요합니다.",
    },
    {
      id: "5-10",
      type: "tf",
      prompt: `T/F 4. If a language model assigns a higher probability to a test sentence, its perplexity on that sentence becomes higher.
Language model이 test sentence에 더 높은 확률을 부여하면, 그 문장에 대한 perplexity도 더 높아진다.`,
      answer: false,
      explanation:
        "문장 확률이 높아지면 perplexity는 낮아집니다.",
    },
    {
      id: "5-11",
      type: "tf",
      prompt: `T/F 5. Intrinsic evaluation measures the quality of a language model independently of any specific application.
Intrinsic evaluation은 특정 application과 독립적으로 language model 자체의 품질을 측정한다.`,
      answer: true,
      explanation:
        "Perplexity 같은 intrinsic metric은 모델 자체를 평가합니다.",
    },
    {
      id: "5-12",
      type: "essay",
      prompt: `Q1. Bigram Frequency Table
다음 corpus로부터 등장한 bigram만 포함하는 frequency table을 작성하시오.

Corpus:
<s> I like NLP </s>
<s> I like language </s>
<s> You like NLP </s>
<s> NLP is fun </s>`,
      rubric: [
        ["<s> i = 2", "s i 2"],
        ["i like = 2"],
        ["like nlp = 2"],
        ["nlp </s> = 2", "nlp s = 2"],
        ["like language = 1"],
        ["language </s> = 1", "language s = 1"],
        ["<s> you = 1", "s you 1"],
        ["you like = 1"],
        ["<s> nlp = 1", "s nlp 1"],
        ["nlp is = 1"],
        ["is fun = 1"],
        ["fun </s> = 1", "fun s 1"],
      ],
      minimumMatches: 6,
      sampleAnswer: `<s> I = 2
I like = 2
like NLP = 2
NLP </s> = 2
like language = 1
language </s> = 1
<s> You = 1
You like = 1
<s> NLP = 1
NLP is = 1
is fun = 1
fun </s> = 1`,
      explanation:
        "각 문장을 왼쪽에서 오른쪽으로 보며 인접 단어 두 개씩 묶은 뒤 빈도를 세면 됩니다.",
    },
    {
      id: "5-13",
      type: "essay",
      prompt: `Q2. Unigram Frequency Table
다음 corpus에서 <s>와 </s>를 포함한 unigram frequency table을 작성하시오.
Vocabulary에 있지만 corpus에 등장하지 않는 study는 0으로 쓰시오.

Corpus:
<s> I like NLP </s>
<s> I like language </s>
<s> You like NLP </s>
<s> NLP is fun </s>`,
      rubric: [
        ["<s> = 4", "s 4"],
        ["i = 2"],
        ["you = 1"],
        ["like = 3"],
        ["nlp = 3"],
        ["language = 1"],
        ["is = 1"],
        ["fun = 1"],
        ["study = 0"],
        ["</s> = 4", "s 4"],
      ],
      minimumMatches: 6,
      sampleAnswer: `<s> = 4
I = 2
You = 1
like = 3
NLP = 3
language = 1
is = 1
fun = 1
study = 0
</s> = 4`,
      explanation:
        "Study는 vocabulary에는 있지만 corpus에는 없으므로 0입니다.",
    },
    {
      id: "5-14",
      type: "blank",
      prompt: `Q3-(a) Calculate P(like | I) using MLE.
MLE 방식으로 P(like | I)를 계산하시오.`,
      answers: ["1", "1.0"],
      explanation:
        "P(like | I) = C(I like) / C(I) = 2 / 2 = 1 입니다.",
    },
    {
      id: "5-15",
      type: "blank",
      prompt: `Q3-(b) Calculate P(language | You) using MLE.
MLE 방식으로 P(language | You)를 계산하시오.`,
      answers: ["0", "0.0"],
      explanation:
        "C(You language)=0, C(You)=1 이므로 0/1 = 0 입니다.",
    },
    {
      id: "5-16",
      type: "blank",
      prompt: `Q3-(c) Calculate P(NLP | study) using MLE. If the denominator is 0, use the problem's exception handling.
MLE 방식으로 P(NLP | study)를 계산하시오. 분모가 0이면 예외 처리 규칙을 따르시오.`,
      answers: ["0", "0.0"],
      explanation:
        "C(study)=0 이므로 문제 조건에 따라 결과를 0으로 둡니다.",
    },
    {
      id: "5-17",
      type: "blank",
      prompt: `Q3-(d) Calculate P(study | <s>) using MLE.
MLE 방식으로 P(study | <s>)를 계산하시오.`,
      answers: ["0", "0.0"],
      explanation:
        "C(<s> study)=0, C(<s>)=4 이므로 0/4 = 0 입니다.",
    },
    {
      id: "5-18",
      type: "essay",
      prompt: `Q4. Laplace Smoothing: Updated Bigram Counts
다음 selected bigram들의 original count와 smoothed count를 쓰시오.

Smoothed bigram count = C(previous word, current word) + 1

Selected bigrams:
<s> I
I like
like NLP
NLP </s>
You language
study NLP
<s> study`,
      rubric: [
        ["<s> i 2 3", "s i 2 3"],
        ["i like 2 3"],
        ["like nlp 2 3"],
        ["nlp </s> 2 3", "nlp s 2 3"],
        ["you language 0 1"],
        ["study nlp 0 1"],
        ["<s> study 0 1", "s study 0 1"],
      ],
      minimumMatches: 4,
      sampleAnswer: `<s> I: original 2, smoothed 3
I like: original 2, smoothed 3
like NLP: original 2, smoothed 3
NLP </s>: original 2, smoothed 3
You language: original 0, smoothed 1
study NLP: original 0, smoothed 1
<s> study: original 0, smoothed 1`,
      explanation:
        "Laplace smoothing에서는 원래 count가 0이든 아니든 모든 bigram count에 1을 더합니다.",
    },
    {
      id: "5-19",
      type: "essay",
      prompt: `Q5. Laplace Smoothing: Updated Context Counts
V = 9일 때, 다음 context의 original context count와 smoothed denominator C(context)+V를 쓰시오.

Contexts:
<s>, I, You, like, NLP, study`,
      rubric: [
        ["<s> 4 13", "s 4 13"],
        ["i 2 11"],
        ["you 1 10"],
        ["like 3 12"],
        ["nlp 3 12"],
        ["study 0 9"],
      ],
      minimumMatches: 4,
      sampleAnswer: `<s>: 4 -> 13
I: 2 -> 11
You: 1 -> 10
like: 3 -> 12
NLP: 3 -> 12
study: 0 -> 9`,
      explanation:
        "Smoothed denominator는 C(context)+V 이므로 각 context count에 9를 더하면 됩니다.",
    },
    {
      id: "5-20",
      type: "blank",
      prompt: `Q6-(a) After Laplace smoothing, calculate P(like | I).
Laplace smoothing 후 P(like | I)를 계산하시오.`,
      answers: ["3/11", "0.2727", "0.27273", "0.272727"],
      explanation:
        "P(like | I) = (2+1)/(2+9) = 3/11 입니다.",
    },
    {
      id: "5-21",
      type: "blank",
      prompt: `Q6-(b) After Laplace smoothing, calculate P(language | You).
Laplace smoothing 후 P(language | You)를 계산하시오.`,
      answers: ["1/10", "0.1", "0.10"],
      explanation:
        "P(language | You) = (0+1)/(1+9) = 1/10 입니다.",
    },
    {
      id: "5-22",
      type: "blank",
      prompt: `Q6-(c) After Laplace smoothing, calculate P(NLP | study).
Laplace smoothing 후 P(NLP | study)를 계산하시오.`,
      answers: ["1/9", "0.1111", "0.11111", "0.111111"],
      explanation:
        "P(NLP | study) = (0+1)/(0+9) = 1/9 입니다.",
    },
    {
      id: "5-23",
      type: "blank",
      prompt: `Q6-(d) After Laplace smoothing, calculate P(study | <s>).
Laplace smoothing 후 P(study | <s>)를 계산하시오.`,
      answers: ["1/13", "0.0769", "0.07692", "0.076923"],
      explanation:
        "P(study | <s>) = (0+1)/(4+9) = 1/13 입니다.",
    },
    {
      id: "5-24",
      type: "essay",
      prompt: `Q7. Using the smoothed bigram language model, write the equation for the sentence probability of:
<s> I like NLP </s>

식만 쓰시오. 실제 계산은 필요 없다.`,
      rubric: [
        ["p(i|<s>)", "p i s"],
        ["p(like|i)", "p like i"],
        ["p(nlp|like)", "p nlp like"],
        ["p(</s>|nlp)", "p s nlp"],
      ],
      minimumMatches: 3,
      sampleAnswer: `P(<s> I like NLP </s>) =
P(I | <s>) x P(like | I) x P(NLP | like) x P(</s> | NLP)`,
      explanation:
        "Bigram sentence probability는 인접 단어 조건부 확률들의 곱입니다.",
    },
    {
      id: "5-25",
      type: "essay",
      prompt: `Q8. Using the sentence probability from Q7, write the perplexity formula.
Q7의 sentence probability를 이용해 perplexity 식을 쓰시오.

n = 4 predicted tokens: I, like, NLP, </s>`,
      rubric: [
        ["pp", "perplexity"],
        ["1 / p", "inverse", "sentence probability"],
        ["1/4", "n = 4", "fourth root"],
      ],
      minimumMatches: 2,
      sampleAnswer: `PP(<s> I like NLP </s>) =
(1 / P(<s> I like NLP </s>))^(1/4)`,
      explanation:
        "예측되는 token 수가 4개이므로 perplexity는 sentence probability의 역수에 1/4 제곱을 취합니다.",
    },
    {
      id: "5-26",
      type: "blank",
      prompt: `Part 4 Q1. Suppose a unigram model assigns:
P(NLP)=0.25, P(is)=0.50, P(fun)=0.25

Compute PP(NLP is fun) with n = 3.
최종 perplexity 값을 쓰시오.`,
      answers: ["3.17", "3.1748", "3.17480", "3.174802"],
      explanation:
        "Sentence probability is 0.25 x 0.50 x 0.25 = 0.03125 = 1/32, so PP = (1/0.03125)^(1/3) = 32^(1/3) ≈ 3.17 입니다.",
    },
    {
      id: "5-27",
      type: "multiple",
      prompt: `Part 4 Q2. Three language models were evaluated on the same test set.
Perplexity 기준으로 어떤 model이 가장 좋은가?

Model A: 245
Model B: 91
Model C: 137`,
      choices: ["Model A", "Model B", "Model C"],
      correctIndex: 1,
      explanation:
        "Perplexity는 낮을수록 좋으므로 91인 Model B가 가장 좋습니다.",
    },
    {
      id: "5-28",
      type: "essay",
      prompt: `Part 4 Q3. Does a lower perplexity always guarantee better downstream task performance?
Intrinsic evaluation과 extrinsic evaluation 개념을 사용해서 설명하시오.`,
      rubric: [
        ["no", "아니다", "not always"],
        ["intrinsic", "perplexity", "모델 자체 평가"],
        ["extrinsic", "actual task", "실제 task"],
        ["does not guarantee", "보장하지 않는다"],
      ],
      minimumMatches: 3,
      sampleAnswer: `No. Lower perplexity does not always guarantee better downstream task performance.
Perplexity is an intrinsic evaluation metric because it evaluates the language model itself.
Actual task performance must be checked by extrinsic evaluation on a real task such as machine translation or speech recognition.`,
      explanation:
        "Perplexity는 intrinsic metric이고, 실제 응용 성능은 extrinsic evaluation으로 따로 확인해야 합니다.",
    },
  ],
};
