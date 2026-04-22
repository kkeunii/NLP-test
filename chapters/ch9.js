window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[9] = {
  title: "9장 Vector Semantics and Embedding",
  questions: [
    {
      id: "9-1",
      type: "multiple",
      prompt: `Q1. Which of the following best describes the goal of vector semantics?
다음 중 vector semantics의 목표를 가장 잘 설명한 것은?`,
      choices: [
        "To convert every sentence into a grammar rule. / 모든 문장을 문법 규칙으로 바꾸는 것",
        "To represent the meaning of words as numerical vectors. / 단어의 의미를 숫자 벡터로 표현하는 것",
        "To remove all rare words from a corpus. / corpus에서 드문 단어를 모두 제거하는 것",
        "To translate words from one language to another. / 단어를 한 언어에서 다른 언어로 번역하는 것",
      ],
      correctIndex: 1,
      explanation:
        "vector semantics의 핵심 목표는 단어 의미를 계산 가능한 벡터로 표현하는 것입니다.",
    },
    {
      id: "9-2",
      type: "multiple",
      prompt: `Q2. Which of the following best explains the Distributional Hypothesis?
Distributional Hypothesis를 가장 잘 설명한 것은?`,
      choices: [
        "Words that look similar in spelling usually have similar meanings. / 철자가 비슷하면 의미도 비슷하다.",
        "Words that appear in similar contexts tend to have similar meanings. / 비슷한 문맥에 등장하는 단어들은 비슷한 의미를 가진다.",
        "Words that appear more frequently are always more meaningful. / 더 자주 등장하는 단어는 항상 더 의미가 크다.",
        "Words with the same length usually belong to the same semantic group. / 길이가 같은 단어는 같은 의미 그룹에 속한다.",
      ],
      correctIndex: 1,
      explanation:
        "Distributional Hypothesis는 비슷한 문맥에 나타나는 단어들이 비슷한 의미를 가진다는 가설입니다.",
    },
    {
      id: "9-3",
      type: "multiple",
      prompt: `Q3. In the ongchoi example, why can we guess that ongchoi is similar to spinach or leafy greens?
ongchoi 예시에서 ongchoi가 spinach나 leafy greens와 비슷하다고 추측할 수 있는 이유는?`,
      choices: [
        "Because ongchoi has the same spelling as spinach. / ongchoi가 spinach와 철자가 같기 때문",
        "Because ongchoi appears in every document. / 모든 문서에 등장하기 때문",
        "Because ongchoi is the most frequent word in the corpus. / corpus에서 가장 자주 나오는 단어이기 때문",
        "Because ongchoi appears with context words like garlic, rice, leaves, and salty sauces. / garlic, rice, leaves, salty sauces 같은 주변 단어와 함께 등장하기 때문",
      ],
      correctIndex: 3,
      explanation:
        "모르는 단어라도 주변 문맥 단어를 보면 음식/잎채소 계열 의미를 추론할 수 있다는 예시입니다.",
    },
    {
      id: "9-4",
      type: "multiple",
      prompt: `Q4. Which of the following is NOT true about Bag of Words, BoW?
다음 중 Bag of Words에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "BoW can represent whether a word appears or not. / 단어의 등장 여부를 표현할 수 있다.",
        "BoW can represent how many times a word appears. / 단어의 등장 횟수를 표현할 수 있다.",
        "BoW fully preserves word order information. / 단어 순서 정보를 완전히 보존한다.",
        "In BoW, the vector size is often related to the vocabulary size. / BoW의 벡터 크기는 보통 vocabulary size와 관련 있다.",
      ],
      correctIndex: 2,
      explanation:
        "BoW의 대표적인 한계는 단어 순서 정보를 보존하지 못한다는 점입니다.",
    },
    {
      id: "9-5",
      type: "multiple",
      prompt: `Q5. In the vocabulary [apple, juice, ongchoi, spinach], which vector is the correct binary BoW representation of the sentence "apple spinach spinach"?
Vocabulary가 [apple, juice, ongchoi, spinach]일 때 문장 "apple spinach spinach"의 binary BoW 표현은?`,
      choices: [
        "[1, 0, 0, 1]",
        "[1, 0, 0, 2]",
        "[0, 1, 0, 1]",
        "[1, 1, 0, 2]",
      ],
      correctIndex: 0,
      explanation:
        "binary BoW는 등장 여부만 기록하므로 apple과 spinach는 1, 나머지는 0입니다.",
    },
    {
      id: "9-6",
      type: "multiple",
      prompt: `Q6. In the same vocabulary [apple, juice, ongchoi, spinach], which vector is the correct count-based BoW representation of "apple spinach spinach"?
같은 vocabulary에서 "apple spinach spinach"의 count-based BoW 표현은?`,
      choices: [
        "[1, 0, 0, 1]",
        "[1, 0, 0, 2]",
        "[0, 1, 0, 2]",
        "[2, 0, 0, 1]",
      ],
      correctIndex: 1,
      explanation:
        "count-based BoW는 spinach가 두 번 등장한 것을 2로 기록합니다.",
    },
    {
      id: "9-7",
      type: "multiple",
      prompt: `Q7. Which of the following correctly describes a term-document matrix?
term-document matrix를 올바르게 설명한 것은?`,
      choices: [
        "Rows are documents, columns are labels, and cells are probabilities. / 행은 문서, 열은 label, 칸은 확률",
        "Rows are words, columns are documents, and cells are word counts or weights. / 행은 단어, 열은 문서, 칸은 단어 count 또는 weight",
        "Rows are words, columns are POS tags, and cells are transition probabilities. / 행은 단어, 열은 품사 태그, 칸은 전이확률",
        "Rows are labels, columns are documents, and cells are class priors. / 행은 label, 열은 문서, 칸은 prior",
      ],
      correctIndex: 1,
      explanation:
        "term-document matrix는 단어 x 문서 구조이며 count나 TF-IDF 같은 weight를 넣을 수 있습니다.",
    },
    {
      id: "9-8",
      type: "multiple",
      prompt: `Q8. Which of the following is true about rows in a term-document matrix?
term-document matrix의 행에 대한 설명으로 옳은 것은?`,
      choices: [
        "Each row can be viewed as a word vector. / 각 행은 하나의 word vector로 볼 수 있다.",
        "Each row must always sum to 1. / 각 행의 합은 반드시 1이어야 한다.",
        "Each row represents a sentence probability. / 각 행은 문장 확률을 나타낸다.",
        "Each row represents a hidden state sequence. / 각 행은 hidden state sequence를 나타낸다.",
      ],
      correctIndex: 0,
      explanation:
        "같은 단어가 여러 문서에서 보이는 분포를 한 행 벡터로 볼 수 있습니다.",
    },
    {
      id: "9-9",
      type: "multiple",
      prompt: `Q9. Which of the following best describes a word-word matrix, also called term-term or term-context matrix?
word-word matrix를 가장 잘 설명한 것은?`,
      choices: [
        "A matrix where both rows and columns are words, and each cell records co-occurrence counts. / 행과 열이 모두 단어이고 각 칸이 공기출현 횟수를 기록한다.",
        "A matrix where rows are documents and columns are sentiment labels. / 행은 문서, 열은 감정 label이다.",
        "A matrix where each cell stores only grammatical tense information. / 각 칸이 문법 시제 정보만 저장한다.",
        "A matrix used only for machine translation and not for word meaning. / 단어 의미와 무관하고 번역에만 쓰인다.",
      ],
      correctIndex: 0,
      explanation:
        "word-word matrix는 target word와 context word의 동시 등장 패턴을 담습니다.",
    },
    {
      id: "9-10",
      type: "multiSelect",
      prompt: `Q10. Select all that apply. Which statements about TF, DF, and IDF are correct?
해당하는 것을 모두 고르시오. TF, DF, IDF에 대한 설명으로 옳은 것은?`,
      choices: [
        "TF is the frequency of a word in a specific document. / TF는 특정 문서 안에서의 단어 빈도이다.",
        "DF is the total number of times a word appears in the entire corpus. / DF는 corpus 전체 등장 횟수이다.",
        "DF is the number of documents in which a word appears. / DF는 단어가 등장한 문서의 수이다.",
        "IDF becomes higher when a word appears in fewer documents. / 더 적은 문서에 등장할수록 IDF는 커진다.",
      ],
      correctIndexes: [0, 2, 3],
      explanation:
        "DF는 등장한 문서 수이고, corpus 전체 등장 횟수는 collection frequency입니다.",
    },
    {
      id: "9-11",
      type: "multiple",
      prompt: `Q11. Which of the following is NOT true about TF-IDF?
다음 중 TF-IDF에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "TF-IDF stands for Term Frequency × Inverse Document Frequency. / TF-IDF는 Term Frequency × Inverse Document Frequency를 뜻한다.",
        "TF-IDF tends to give high scores to words that are frequent in a document but rare across documents. / 문서 안에서는 자주 나오지만 전체 문서에서는 드문 단어에 높은 점수를 준다.",
        "If a word appears in every document, its log IDF can become 0. / 모든 문서에 등장하면 log IDF가 0이 될 수 있다.",
        "TF-IDF always preserves word order. / TF-IDF는 항상 단어 순서를 보존한다.",
      ],
      correctIndex: 3,
      explanation:
        "TF-IDF도 기본적으로 BoW 계열 표현이라 word order를 보존하지 않습니다.",
    },
    {
      id: "9-12",
      type: "multiSelect",
      prompt: `Q12. Select all that apply. Which methods were mentioned as alternatives or improvements beyond simple BoW for representing word meaning?
해당하는 것을 모두 고르시오. 단순 BoW보다 나은 의미 표현 방법 또는 대안으로 언급된 것은?`,
      choices: [
        "TF-IDF",
        "Word2Vec",
        "FastText",
        "GloVe",
        "Laplace smoothing",
      ],
      correctIndexes: [0, 1, 2, 3],
      explanation:
        "9강 초반 범위에서는 TF-IDF와 Word2Vec/FastText/GloVe가 대안 또는 발전 방향으로 언급됩니다.",
    },
    {
      id: "9-13",
      type: "tf",
      prompt: `Q2-(1). Words with similar meanings tend to appear in similar contexts.
비슷한 의미의 단어들은 비슷한 문맥에 등장하는 경향이 있다.`,
      answer: true,
      explanation:
        "Distributional Hypothesis의 핵심 정의입니다.",
    },
    {
      id: "9-14",
      type: "tf",
      prompt: `Q2-(2). In NLP, context can include neighboring words around a target word.
NLP에서 context는 target word 주변 단어들을 포함할 수 있다.`,
      answer: true,
      explanation:
        "context window는 보통 target 주변 단어들로 정의합니다.",
    },
    {
      id: "9-15",
      type: "tf",
      prompt: `Q2-(3). BoW is a good method for preserving exact word order.
BoW는 정확한 단어 순서를 보존하기에 좋은 방법이다.`,
      answer: false,
      explanation:
        "BoW는 순서를 버리고 등장 여부 또는 count만 남깁니다.",
    },
    {
      id: "9-16",
      type: "tf",
      prompt: `Q2-(4). In binary BoW, repeated words can have values greater than 1.
binary BoW에서는 반복되는 단어의 값이 1보다 커질 수 있다.`,
      answer: false,
      explanation:
        "binary BoW는 등장하면 1, 아니면 0입니다.",
    },
    {
      id: "9-17",
      type: "tf",
      prompt: `Q2-(5). In count-based BoW, repeated words can have values greater than 1.
count-based BoW에서는 반복되는 단어의 값이 1보다 커질 수 있다.`,
      answer: true,
      explanation:
        "count-based BoW는 등장 횟수를 세므로 2, 3 같은 값이 가능합니다.",
    },
    {
      id: "9-18",
      type: "tf",
      prompt: `Q2-(6). Document Frequency, DF, is different from collection frequency.
Document Frequency, DF는 collection frequency와 다르다.`,
      answer: true,
      explanation:
        "DF는 문서 수, collection frequency는 전체 등장 횟수입니다.",
    },
    {
      id: "9-19",
      type: "tf",
      prompt: `Q2-(7). A word-word matrix has words as both rows and columns.
word-word matrix는 행과 열이 모두 단어이다.`,
      answer: true,
      explanation:
        "target word와 context word를 모두 단어 집합에서 가져옵니다.",
    },
    {
      id: "9-20",
      type: "tf",
      prompt: `Q2-(8). Raw co-occurrence counts can overemphasize very common words such as "the", "it", and "they".
raw co-occurrence count는 "the", "it", "they" 같은 흔한 단어를 과도하게 중요하게 볼 수 있다.`,
      answer: true,
      explanation:
        "흔한 기능어는 거의 모든 단어와 함께 나타나 raw count를 왜곡할 수 있습니다.",
    },
    {
      id: "9-21",
      type: "tf",
      prompt: `Q2-(9). A sparse vector is a vector where many or most cells have value 0.
sparse vector는 많은 칸 또는 대부분의 칸이 0인 벡터이다.`,
      answer: true,
      explanation:
        "vocabulary가 크고 문서가 짧으면 벡터 대부분이 0이 됩니다.",
    },
    {
      id: "9-22",
      type: "tf",
      prompt: `Q2-(10). TF-IDF is usually trained as a neural network model that learns embeddings by backpropagation.
TF-IDF는 보통 neural network로 학습되어 backpropagation으로 embedding을 학습하는 모델이다.`,
      answer: false,
      explanation:
        "TF-IDF는 count와 DF 기반의 가중치 방식이지 neural embedding model이 아닙니다.",
    },
    {
      id: "9-23",
      type: "essay",
      prompt: `Q3-(1). In the sentence
"fresh apple pie tastes sweet but apple juice tastes fresh"
with context window size = 2, write the context words for the first apple at index 2.`,
      rubric: [
        ["fresh"],
        ["pie"],
        ["tastes"],
      ],
      minimumMatches: 3,
      sampleAnswer: `The first apple at index 2 has context words:
fresh, pie, tastes`,
      explanation:
        "index 2의 apple은 앞쪽에 fresh 하나, 뒤쪽에 pie와 tastes가 context로 들어갑니다.",
    },
    {
      id: "9-24",
      type: "essay",
      prompt: `Q3-(2). With the same sentence and window size = 2, write the context words for the second apple at index 7.`,
      rubric: [
        ["sweet"],
        ["but"],
        ["juice"],
        ["tastes"],
      ],
      minimumMatches: 4,
      sampleAnswer: `The second apple at index 7 has context words:
sweet, but, juice, tastes`,
      explanation:
        "index 7의 apple은 앞의 sweet, but와 뒤의 juice, tastes를 context로 가집니다.",
    },
    {
      id: "9-25",
      type: "essay",
      prompt: `Q3-(3). Using both apple occurrences together, compute the co-occurrence counts for the context vocabulary:
[fresh, pie, tastes, sweet, but, juice]`,
      rubric: [
        ["fresh 1", "fresh: 1"],
        ["pie 1", "pie: 1"],
        ["tastes 2", "tastes: 2"],
        ["sweet 1", "sweet: 1"],
        ["but 1", "but: 1"],
        ["juice 1", "juice: 1"],
      ],
      minimumMatches: 4,
      sampleAnswer: `apple row:
fresh 1, pie 1, tastes 2, sweet 1, but 1, juice 1`,
      explanation:
        "첫 번째 apple과 두 번째 apple의 context를 모두 합쳐 각 context word의 빈도를 세면 됩니다.",
    },
    {
      id: "9-26",
      type: "essay",
      prompt: `Q3-(4). If the target word is pie at index 3 and the window size is 2, write the context words.`,
      rubric: [
        ["fresh"],
        ["apple"],
        ["tastes"],
        ["sweet"],
      ],
      minimumMatches: 4,
      sampleAnswer: `For pie at index 3, the context words are:
fresh, apple, tastes, sweet`,
      explanation:
        "pie 앞에는 fresh와 apple, 뒤에는 tastes와 sweet가 있습니다.",
    },
    {
      id: "9-27",
      type: "essay",
      prompt: `Q3-(5). Fill in the following word-word co-occurrence matrix with window size = 2.
Rows are target words, columns are context words.

Columns: [fresh, tastes, juice]
Rows: apple, pie`,
      rubric: [
        ["apple 1 2 1", "apple row 1 2 1"],
        ["pie 1 1 0", "pie row 1 1 0"],
      ],
      minimumMatches: 2,
      sampleAnswer: `| target word | fresh | tastes | juice |
| apple | 1 | 2 | 1 |
| pie   | 1 | 1 | 0 |`,
      explanation:
        "apple은 fresh 1, tastes 2, juice 1이고 pie는 fresh 1, tastes 1, juice 0입니다.",
    },
    {
      id: "9-28",
      type: "essay",
      prompt: `Q4-(1). Fill in the raw-count TF table for the corpus:
D1: tea sugar sweet
D2: tea coffee bitter
D3: coffee sugar bitter bitter
D4: tea sugar coffee

Vocabulary order:
[bitter, coffee, sugar, sweet, tea]`,
      rubric: [
        ["d1", "0 0 1 1 1"],
        ["d2", "1 1 0 0 1"],
        ["d3", "2 1 1 0 0"],
        ["d4", "0 1 1 0 1"],
      ],
      minimumMatches: 3,
      sampleAnswer: `| word   | D1 | D2 | D3 | D4 |
| bitter | 0  | 1  | 2  | 0  |
| coffee | 0  | 1  | 1  | 1  |
| sugar  | 1  | 0  | 1  | 1  |
| sweet  | 1  | 0  | 0  | 0  |
| tea    | 1  | 1  | 0  | 1  |`,
      explanation:
        "각 문서에서 단어가 몇 번 등장했는지 raw count로 그대로 세면 됩니다.",
    },
    {
      id: "9-29",
      type: "essay",
      prompt: `Q4-(2). Compute DF and collection frequency for each word in the same corpus.

Words:
bitter, coffee, sugar, sweet, tea`,
      rubric: [
        ["bitter df 2", "bitter collection 3", "bitter 2 3"],
        ["coffee df 3", "coffee collection 3", "coffee 3 3"],
        ["sugar df 3", "sugar collection 3", "sugar 3 3"],
        ["sweet df 1", "sweet collection 1", "sweet 1 1"],
        ["tea df 3", "tea collection 3", "tea 3 3"],
      ],
      minimumMatches: 3,
      sampleAnswer: `bitter: DF=2, collection frequency=3
coffee: DF=3, collection frequency=3
sugar: DF=3, collection frequency=3
sweet: DF=1, collection frequency=1
tea: DF=3, collection frequency=3`,
      explanation:
        "DF는 등장 문서 수이고, collection frequency는 corpus 전체 등장 횟수입니다.",
    },
    {
      id: "9-30",
      type: "essay",
      prompt: `Q4-(3). Compute IDF_log(t) = log10(N / DF(t)) for each word when N = 4.
Use:
log10(4/1)=0.60
log10(4/2)=0.30
log10(4/3)=0.12`,
      rubric: [
        ["bitter 0.30", "bitter: 0.30"],
        ["coffee 0.12", "coffee: 0.12"],
        ["sugar 0.12", "sugar: 0.12"],
        ["sweet 0.60", "sweet: 0.60"],
        ["tea 0.12", "tea: 0.12"],
      ],
      minimumMatches: 4,
      sampleAnswer: `bitter: 0.30
coffee: 0.12
sugar: 0.12
sweet: 0.60
tea: 0.12`,
      explanation:
        "DF가 작을수록 IDF가 크고, sweet처럼 한 문서에만 나오는 단어가 가장 높은 IDF를 가집니다.",
    },
    {
      id: "9-31",
      type: "essay",
      prompt: `Q4-(4). Compute the TF-IDF vectors for D1, D2, D3, and D4.
Use:
TF_log(t,d) = log10(count(t,d)+1)
IDF_log(t) = log10(N/DF(t))
TF-IDF = TF_log x IDF_log

Vocabulary order:
[bitter, coffee, sugar, sweet, tea]

Use:
log10(1)=0
log10(2)=0.30
log10(3)=0.48`,
      rubric: [
        ["d1", "0 0 0.036 0.180 0.036"],
        ["d2", "0.090 0.036 0 0 0.036"],
        ["d3", "0.144 0.036 0.036 0 0"],
        ["d4", "0 0.036 0.036 0 0.036"],
      ],
      minimumMatches: 3,
      sampleAnswer: `D1 = [0, 0, 0.036, 0.180, 0.036]
D2 = [0.090, 0.036, 0, 0, 0.036]
D3 = [0.144, 0.036, 0.036, 0, 0]
D4 = [0, 0.036, 0.036, 0, 0.036]`,
      explanation:
        "count 0이면 TF_log가 0, count 1이면 0.30, count 2이면 0.48이 되어 각 IDF와 곱해 TF-IDF를 만듭니다.",
    },
    {
      id: "9-32",
      type: "essay",
      prompt: `Q4-(5). If a word appears in every document, what is its IDF_log in log-space TF-IDF, and why?`,
      rubric: [
        ["0", "idf = 0", "log10(1)"],
        ["df = n", "appears in every document"],
        ["not discriminative", "문서를 구분하는 데 덜 도움"],
      ],
      minimumMatches: 2,
      sampleAnswer: `If a word appears in every document, then DF = N, so IDF_log = log10(N/N) = log10(1) = 0.
That means the word is not useful for distinguishing one document from another.`,
      explanation:
        "모든 문서에 나오는 단어는 문서 구분력이 낮기 때문에 IDF가 0이 됩니다.",
    },
    {
      id: "9-33",
      type: "essay",
      prompt: `Q5-(1). Explain the Distributional Hypothesis and how the ongchoi example illustrates it.`,
      rubric: [
        ["words with similar meanings", "비슷한 의미 단어"],
        ["similar contexts", "비슷한 문맥"],
        ["ongchoi", "garlic", "rice", "leaves", "spinach", "leafy greens"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The Distributional Hypothesis says that words with similar meanings tend to appear in similar contexts.
In the ongchoi example, even if we do not know the word ongchoi directly, we can guess it is similar to spinach or leafy greens because it appears with context words like garlic, rice, leaves, and salty sauces.`,
      explanation:
        "ongchoi 예시는 주변 단어만 보고도 미지의 단어 의미를 추론할 수 있다는 점을 보여 줍니다.",
    },
    {
      id: "9-34",
      type: "essay",
      prompt: `Q5-(2). Give two reasons why BoW is insufficient for representing word meaning as vectors.`,
      rubric: [
        ["word order", "단어 순서를 보존하지 못함"],
        ["word importance", "단어 중요도 반영이 약함", "common words"],
      ],
      minimumMatches: 2,
      sampleAnswer: `First, BoW does not preserve word order, so sentences with the same words in different orders can look the same.
Second, simple BoW does not properly distinguish important content words from very common words.`,
      explanation:
        "BoW의 대표적인 한계는 순서 정보 손실과 중요도 반영 부족입니다.",
    },
    {
      id: "9-35",
      type: "essay",
      prompt: `Q5-(3). Explain the difference between a term-document matrix and a word-word matrix.`,
      rubric: [
        ["term document", "단어 x 문서"],
        ["word word", "단어 x 단어"],
        ["counts or weights", "공기출현", "co occurrence"],
      ],
      minimumMatches: 2,
      sampleAnswer: `A term-document matrix has words as rows and documents as columns, and each cell stores a word count or weight such as TF-IDF.
A word-word matrix has words as both rows and columns, and each cell stores a co-occurrence count between a target word and a context word.`,
      explanation:
        "term-document는 단어의 문서별 분포를, word-word는 단어의 문맥 공기출현 패턴을 나타냅니다.",
    },
    {
      id: "9-36",
      type: "essay",
      prompt: `Q5-(4). Explain why TF-IDF can be better than raw frequency counts.`,
      rubric: [
        ["common words get downweighted", "흔한 단어 영향 감소"],
        ["rare but informative words get higher weights", "특징적인 단어 강조"],
        ["document specific", "문서 구분"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Raw frequency only counts how often a word appears, so very common words can dominate.
TF-IDF downweights words that appear in many documents and gives more weight to words that are frequent in one document but rare across the corpus.
This makes it better for representing document-specific content.`,
      explanation:
        "TF-IDF는 common word를 약하게, 문서 특징적인 단어를 강하게 반영합니다.",
    },
    {
      id: "9-37",
      type: "essay",
      prompt: `Q5-(5). What is a sparse vector? Why can TF-IDF vectors become sparse, what problem can that cause, and which machine learning algorithms can TF-IDF work well with?`,
      rubric: [
        ["many zeros", "대부분 0"],
        ["large vocabulary but only some words appear", "vocabulary는 크고 문서에는 일부 단어만 등장"],
        ["storage or computation inefficiency", "저장 공간", "계산 비효율"],
        ["logistic regression", "naive bayes"],
      ],
      minimumMatches: 3,
      sampleAnswer: `A sparse vector is a vector in which many or most entries are 0.
TF-IDF vectors become sparse because the vocabulary can be very large while each document contains only a small subset of all words.
This can lead to storage and computation inefficiency.
Even so, TF-IDF can work well with machine learning algorithms such as Logistic Regression and Naive Bayes.`,
      explanation:
        "sparse vector는 고차원 BoW/TF-IDF 표현의 대표적인 특징이며, 그래도 전통적인 분류기와 함께 여전히 많이 사용됩니다.",
    },
  ],
};
