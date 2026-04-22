window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[3] = {
  title: "3장 Tokenization & Edit Distance",
  questions: [
    {
      id: "3-1",
      type: "multiple",
      prompt: `Q1-(1) What is the main role of tokenization in an NLP pipeline?
NLP pipeline에서 tokenization의 주요 역할로 가장 적절한 것은?`,
      choices: [
        `To directly classify text sentiment as positive or negative.
문장의 감정을 긍정/부정으로 바로 분류하는 것.`,
        `To split running text into useful units such as words or sentences.
연속된 텍스트를 단어 또는 문장 같은 유용한 단위로 나누는 것.`,
        `To always translate all text into English.
모든 텍스트를 항상 영어로 번역하는 것.`,
        `To remove every rare word from a corpus.
말뭉치에서 희귀 단어를 모두 제거하는 것.`,
      ],
      correctIndex: 1,
      explanation:
        "Tokenization은 긴 텍스트를 단어나 문장 같은 처리 가능한 단위로 나누는 기본 전처리 단계입니다.",
    },
    {
      id: "3-2",
      type: "multiple",
      prompt: `Q1-(2) Which of the following is least related to tokenization issues?
다음 중 tokenization 문제와 가장 거리가 먼 것은?`,
      choices: [
        `Contractions such as I'm, isn't, what're
I’m, isn’t, what’re 같은 contractions`,
        `Multi-word expressions such as San Francisco
San Francisco 같은 multi-word expression`,
        `Languages where tokens are not clearly separated by whitespace
중국어처럼 공백으로 단어가 구분되지 않는 언어`,
        `The number of hidden layers in a neural network
모델의 hidden layer 개수`,
      ],
      correctIndex: 3,
      explanation:
        "Hidden layer 개수는 모델 구조 문제이고, tokenization 자체의 대표 문제는 아닙니다.",
    },
    {
      id: "3-3",
      type: "multiple",
      prompt: `Q1-(3) Which statement correctly describes cat and cats?
cat과 cats에 대한 설명으로 옳은 것은?`,
      choices: [
        `They must be different lemmas and different wordforms.
반드시 다른 lemma이고 다른 wordform이다.`,
        `They can be the same lemma but different wordforms.
같은 lemma일 수 있지만 wordform은 다르다.`,
        `They are the same wordform but different lemmas.
같은 wordform이지만 lemma는 다르다.`,
        `They are neither tokens nor types.
token도 type도 아니다.`,
      ],
      correctIndex: 1,
      explanation:
        "cat과 cats는 같은 lemma로 묶일 수 있지만 표면형은 다르므로 wordform은 다릅니다.",
    },
    {
      id: "3-4",
      type: "multiple",
      prompt: `Q1-(4) Which statement best explains type and token?
type과 token의 차이를 가장 잘 설명한 것은?`,
      choices: [
        `A type is each occurrence in running text, and a token is a unique vocabulary item.
type은 실제 등장 하나하나이고, token은 고유 어휘 항목이다.`,
        `A token is each occurrence in running text, and a type is a unique vocabulary item.
token은 실제 등장 하나하나이고, type은 고유 어휘 항목이다.`,
        `Type and token always have the same number.
type과 token의 수는 항상 같다.`,
        `Type only refers to punctuation marks.
type은 구두점만 의미한다.`,
      ],
      correctIndex: 1,
      explanation:
        "Token은 실제 등장 횟수이고, type은 중복을 제거한 고유 항목입니다.",
    },
    {
      id: "3-5",
      type: "multiple",
      prompt: `Q1-(5) Which correctly defines N, V, and |V|?
N, V, |V|의 의미로 옳은 것은?`,
      choices: [
        `N = number of tokens, V = vocabulary set of types, |V| = vocabulary size
N = token 수, V = type들의 집합, |V| = vocabulary 크기`,
        `N = number of types, V = number of tokens, |V| = number of sentences
N = type 수, V = token 수, |V| = 문장 수`,
        `N = normalized words, V = verbs, |V| = valid documents
N = 정규화된 단어, V = 동사, |V| = 유효 문서 수`,
        `N = number of named entities, V = verbs, |V| = vector size
N = 개체명 수, V = 동사, |V| = 벡터 크기`,
      ],
      correctIndex: 0,
      explanation:
        "N은 token 수, V는 vocabulary set, |V|는 vocabulary size입니다.",
    },
    {
      id: "3-6",
      type: "multiSelect",
      prompt: `Q1-(6) Select all that can change token or type counts.
token 수를 바꿀 수 있는 것을 고르시오.`,
      choices: [
        `Treating punctuation as separate tokens 구두점을 별도 token으로 세는 것`,
        `Lowercasing all words 모든 단어를 소문자로 바꾸는 것`,
        `Lemmatizing cats to cat cats를 cat으로 lemmatization하는 것`,
        `Changing the font size of the text 텍스트의 글자 크기를 바꾸는 것`,
      ],
      correctIndexes: 1,
      explanation:
        "구두점 분리, lowercasing, lemmatization은 token/type 수를 바꿀 수 있지만 폰트 크기는 그렇지 않습니다.",
    },
    {
      id: "3-7",
      type: "multiple",
      prompt: `Q1-(7) What is the key idea of Maximum Matching Word Segmentation?
Maximum Matching Word Segmentation의 핵심 아이디어는?`,
      choices: [
        `Choose the shortest possible dictionary word at each step.
각 단계에서 가능한 가장 짧은 사전 단어를 고른다.`,
        `Choose the longest dictionary word matching the current pointer position.
현재 pointer 위치에서 시작하는 가장 긴 사전 단어를 고른다.`,
        `Randomly split the string into several pieces.
문자열을 무작위로 나눈다.`,
        `Split every string into characters.
모든 문자열을 문자 단위로 나눈다.`,
      ],
      correctIndex: 1,
      explanation:
        "Maximum matching은 현재 포인터 위치에서 시작하는 가장 긴 dictionary word를 선택합니다.",
    },
    {
      id: "3-8",
      type: "multiple",
      prompt: `Q1-(8) Given the string thetabledownthere and dictionary {the, table, down, there, theta, bled, own}, what will maximum matching choose?
문자열 thetabledownthere와 dictionary {the, table, down, there, theta, bled, own}가 주어졌을 때 maximum matching 결과는?`,
      choices: [
        "the / table / down / there",
        "theta / bled / own / there",
        "the / tab / led / own / there",
        "Segmentation is impossible. / 분절이 불가능하다.",
      ],
      correctIndex: 1,
      explanation:
        "처음 위치에서 the보다 theta가 더 길므로 theta를 고르고, 이후 bled / own / there로 진행합니다.",
    },
    {
      id: "3-9",
      type: "multiple",
      prompt: `Q1-(9) Which of the following is NOT an edit operation discussed in class?
다음 중 수업에서 다룬 edit operation이 아닌 것은?`,
      choices: [
        "Insertion / 삽입",
        "Deletion / 삭제",
        "Substitution / 치환",
        "Rotation / 회전",
      ],
      correctIndex: 3,
      explanation:
        "이 강의 범위의 edit operation은 insertion, deletion, substitution 세 가지입니다.",
    },
    {
      id: "3-10",
      type: "multiple",
      prompt: `Q1-(10) In dynamic programming for minimum edit distance, what does D(i,j) mean?
Minimum edit distance의 dynamic programming에서 D(i,j)는 무엇을 의미하는가?`,
      choices: [
        "The number of documents in the corpus / 말뭉치 안의 문서 수",
        `The edit distance between the first i characters of X and the first j characters of Y
X의 앞 i글자와 Y의 앞 j글자 사이의 edit distance`,
        "The probability of word j after word i / 단어 i 뒤에 단어 j가 나올 확률",
        "The number of tokens in sentence i / 문장 i의 token 수",
      ],
      correctIndex: 1,
      explanation:
        "D(i,j)는 X의 prefix와 Y의 prefix 사이의 최소 edit cost를 나타냅니다.",
    },
    {
      id: "3-11",
      type: "multiple",
      prompt: `Q1-(11) Which statement is NOT true about edit distance?
Edit distance에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        "If two strings are identical, their edit distance is 0. / 두 문자열이 완전히 같으면 edit distance는 0이다.",
        "Edit distance measures lexical or surface-level similarity. / Edit distance는 문자열의 표면적, 철자적 유사성을 측정한다.",
        "Edit distance can be high even if two sentences have similar meanings. / 두 문장의 의미가 비슷해도 edit distance는 클 수 있다.",
        "Edit distance always measures semantic similarity accurately. / Edit distance는 항상 의미적 유사성을 정확히 측정한다.",
      ],
      correctIndex: 3,
      explanation:
        "Edit distance는 surface-level difference를 보는 지표라 semantic similarity를 정확히 측정하지 못합니다.",
    },
    {
      id: "3-12",
      type: "multiSelect",
      prompt: `Q1-(12) Select all tasks where edit distance can be useful.
Edit distance가 활용될 수 있는 task를 모두 고르시오.`,
      choices: [
        "Named Entity Extraction / 개체명 추출",
        "Entity Coreference / 개체 공지시 연결",
        "Machine Translation Evaluation / 기계번역 평가",
        "Cooling a GPU during training / 학습 중 GPU 냉각",
      ],
      correctIndexes: [0, 1, 2],
      explanation:
        "Edit distance는 문자열 유사성 기반 작업에 활용될 수 있지만 GPU 냉각과는 관계없습니다.",
    },
    {
      id: "3-13",
      type: "tf",
      prompt: `Q2-(1) A whitespace tokenizer is sufficient for all languages.
공백 기준 tokenizer는 모든 언어에 충분하다.`,
      answer: false,
      explanation:
        "중국어처럼 공백만으로 token boundaries가 명확하지 않은 언어가 있습니다.",
    },
    {
      id: "3-14",
      type: "tf",
      prompt: `Q2-(2) Normalization can help match different word formats such as favourite and favorite.
Normalization은 favourite와 favorite처럼 표기가 다른 단어를 맞추는 데 도움을 줄 수 있다.`,
      answer: true,
      explanation:
        "Normalization은 표기 차이를 줄여 같은 항목으로 맞추는 데 도움이 됩니다.",
    },
    {
      id: "3-15",
      type: "tf",
      prompt: `Q2-(3) D(i,0) = i because transforming the first i characters of X into an empty string requires i deletions.
D(i,0) = i인 이유는 X의 앞 i글자를 빈 문자열로 바꾸려면 i번 삭제해야 하기 때문이다.`,
      answer: true,
      explanation:
        "빈 문자열과의 거리의 초기값은 삭제 횟수 또는 삽입 횟수로 채웁니다.",
    },
    {
      id: "3-16",
      type: "tf",
      prompt: `Q2-(4) In this lecture's edit distance setting, substitution or mismatch cost is 1.
이 강의의 edit distance 설정에서 substitution 또는 mismatch cost는 1이다.`,
      answer: false,
      explanation:
        "이 강의에서는 substitution 또는 mismatch cost를 2로 둡니다.",
    },
    {
      id: "3-17",
      type: "tf",
      prompt: `Q2-(5) Backtrace is used to recover the actual alignment, not just the final edit distance value.
Backtrace는 최종 edit distance 값뿐 아니라 실제 alignment를 복원하기 위해 사용된다.`,
      answer: true,
      explanation:
        "DP table은 최소 비용을 주고, backtrace는 실제 정렬 경로를 복원합니다.",
    },
    {
      id: "3-18",
      type: "essay",
      prompt: `Q3-(1) Under Rule A, analyze the sentence:
San Francisco cats aren't cats, but the cat is in San Francisco.

Rule A:
- Ignore punctuation marks , and .
- Lowercase all words.
- Do not split contractions.
- Do not lemmatize.
- Treat San Francisco as two tokens: san, francisco.

다음을 모두 쓰시오.
1. Token sequence
2. N, the number of tokens
3. Vocabulary set V
4. Vocabulary size |V|`,
      rubric: [
        ["12", "n = 12", "n=12"],
        ["9", "|v| = 9", "|v|=9"],
        ["san", "francisco", "cats", "aren't", "but", "the", "cat", "is", "in"],
        ["san francisco cats aren't cats but the cat is in san francisco"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Token sequence:
[san, francisco, cats, aren't, cats, but, the, cat, is, in, san, francisco]
N = 12
V = {san, francisco, cats, aren't, but, the, cat, is, in}
|V| = 9`,
      explanation:
        "Rule A에서는 소문자화, 구두점 제거, contraction 미분리, San Francisco 분리 여부가 핵심입니다.",
    },
    {
      id: "3-19",
      type: "essay",
      prompt: `Q3-(2) Under Rule B, analyze the same sentence:
San Francisco cats aren't cats, but the cat is in San Francisco.

Rule B:
- Treat punctuation marks , and . as separate tokens.
- Keep capitalization.
- Split aren't into are and n't.
- Treat San Francisco as one multi-word expression token: San_Francisco.
- Do not lemmatize.

다음을 모두 쓰시오.
1. Token sequence
2. N, the number of tokens
3. Vocabulary set V
4. Vocabulary size |V|`,
      rubric: [
        ["13", "n = 13", "n=13"],
        ["11", "|v| = 11", "|v|=11"],
        ["san_francisco", "cats", "are", "n't", "but", "the", "cat", "is", "in"],
        ["capitalization", "keep capitalization", "대소문자 유지"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Token sequence:
[San_Francisco, cats, are, n't, cats, ,, but, the, cat, is, in, San_Francisco, .]
N = 13
V = {San_Francisco, cats, are, n't, ,, but, the, cat, is, in, .}
|V| = 11`,
      explanation:
        "Rule B에서는 punctuation을 token으로 세고, capitalization을 유지하며, aren't를 are + n't로 나누는 것이 중요합니다.",
    },
    {
      id: "3-20",
      type: "essay",
      prompt: `Q3-(3) Using Rule A, now apply lemmatization with:
- cats -> cat
- aren't -> be
- is -> be
- san, francisco, but, the, in stay the same

다음을 답하시오.
1. Wordform-based |V| before lemmatization
2. Lemma-based |V| after lemmatization
3. Why are the two numbers different?`,
      rubric: [
        ["9", "wordform"],
        ["7", "lemma"],
        ["cats", "cat"],
        ["aren't", "be", "is"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Wordform-based |V| before lemmatization = 9
Lemma-based |V| after lemmatization = 7
The numbers are different because cats and cat collapse into the same lemma cat, and aren't and is collapse into the same lemma be.`,
      explanation:
        "Lemmatization은 서로 다른 wordform을 같은 lemma로 묶기 때문에 vocabulary size를 줄일 수 있습니다.",
    },
    {
      id: "3-21",
      type: "essay",
      prompt: `Q4-(1) Apply Maximum Matching Word Segmentation to:
String: ilovepeanutbutter
Dictionary: {i, love, pea, peanut, nut, butter, peanutbutter, but, ter}

segmentation 결과와 pointer 이동을 단계별로 쓰시오.`,
      rubric: [
        ["pointer 1", "i", "move to 2"],
        ["pointer 2", "love", "move to 6"],
        ["pointer 6", "peanutbutter", "move to 18"],
        ["i / love / peanutbutter"],
      ],
      minimumMatches: 3,
      sampleAnswer: `pointer 1: choose i, move to 2
pointer 2: choose love, move to 6
pointer 6: choose peanutbutter, move to 18
Final segmentation: i / love / peanutbutter`,
      explanation:
        "현재 위치에서 가능한 가장 긴 dictionary word를 고르기 때문에 peanut 대신 peanutbutter를 선택합니다.",
    },
    {
      id: "3-22",
      type: "blank",
      prompt: `Q4-(2) Apply maximum matching to:
String: thetabledownthere
Dictionary: {the, table, down, there, theta, bled, own}

최종 segmentation을 쓰시오.`,
      answers: [
        "theta / bled / own / there",
        "theta/bled/own/there",
      ],
      explanation:
        "처음 위치에서 the보다 theta가 더 길므로 theta를 선택하고, 이후 bled / own / there로 나뉩니다.",
    },
    {
      id: "3-23",
      type: "essay",
      prompt: `Q4-(3) Explain why maximum matching can produce an unnatural segmentation.
Maximum matching이 부자연스러운 segmentation을 만들 수 있는 이유를 설명하시오.

답안에는 다음 핵심이 들어가야 한다:
Longest dictionary match does not always mean semantically correct segmentation.`,
      rubric: [
        ["longest", "가장 긴", "dictionary match"],
        ["not always", "항상은 아니다", "does not always mean"],
        ["semantic", "meaning", "의미", "semantically correct"],
        ["theta", "bled", "own", "the table down there"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Maximum matching chooses the longest dictionary match at the current position, but the longest match is not always semantically correct.
So it can return an unnatural segmentation such as theta / bled / own / there instead of the more natural the / table / down / there.`,
      explanation:
        "Maximum matching은 의미를 이해하지 않고 길이만 보고 고르기 때문에 부자연스러운 분절이 나올 수 있습니다.",
    },
    {
      id: "3-24",
      type: "essay",
      prompt: `Q5-(1) Fill in the formal definition of minimum edit distance with:
Insertion = 1
Deletion = 1
Substitution / mismatch = 2
Match = 0

빈칸 6개:
1. D(i,0) = ?
2. D(0,j) = ?
3. In the recurrence, the insertion and deletion additions are ?
4. If X(i) = Y(j), cost = ?
5. If X(i) != Y(j), cost = ?
6. Final edit distance = ?`,
      rubric: [
        ["d(i,0) = i", "d i 0 i"],
        ["d(0,j) = j", "d 0 j j"],
        ["1", "deletion 1", "insertion 1"],
        ["0", "match"],
        ["2", "substitution", "mismatch"],
        ["d(n,m)"],
      ],
      minimumMatches: 4,
      sampleAnswer: `1. D(i,0) = i
2. D(0,j) = j
3. D(i,j) = min { D(i-1,j) + 1, D(i,j-1) + 1, D(i-1,j-1) + cost }
4. If X(i) = Y(j), cost = 0
5. If X(i) != Y(j), cost = 2
6. Final edit distance = D(n,m)`,
      explanation:
        "초기화는 빈 문자열과의 거리, recurrence는 insertion/deletion 1과 match 0, substitution 2를 사용합니다.",
    },
    {
      id: "3-25",
      type: "essay",
      prompt: `Q5-(2) Compute the DP table for:
X = GUM
Y = GAM

표를 채우고 D(3,3)을 쓰시오.`,
      rubric: [
        ["0 1 2 3"],
        ["1 0 1 2"],
        ["2 1 2 3"],
        ["3 2 3 2"],
        ["d(3,3) = 2", "2"],
      ],
      minimumMatches: 3,
      sampleAnswer: `| D(i,j) | # | G | A | M |
| # | 0 | 1 | 2 | 3 |
| G | 1 | 0 | 1 | 2 |
| U | 2 | 1 | 2 | 3 |
| M | 3 | 2 | 3 | 2 |

D(3,3) = 2`,
      explanation:
        "G와 G, M과 M은 match cost 0이고, U와 A의 substitution cost 2가 핵심입니다.",
    },
    {
      id: "3-26",
      type: "blank",
      prompt: `Q5-(3a) For X = INTENTION and Y = EXECUTION, compute D(1,1).
I vs E`,
      answers: ["2"],
      explanation:
        "I와 E는 다르므로 substitution cost 2가 적용되어 D(1,1)=2입니다.",
    },
    {
      id: "3-27",
      type: "blank",
      prompt: `Q5-(3b) For X = INTENTION and Y = EXECUTION, compute D(1,7).
I vs EXECUTI`,
      answers: ["6"],
      explanation:
        "정답표 기준으로 D(1,7)=6입니다.",
    },
    {
      id: "3-28",
      type: "blank",
      prompt: `Q5-(3c) For X = INTENTION and Y = EXECUTION, compute D(4,3).
INTE vs EXE`,
      answers: ["5"],
      explanation:
        "정답표 기준 selected cell 값은 D(4,3)=5입니다.",
    },
    {
      id: "3-29",
      type: "blank",
      prompt: `Q5-(3d) For X = INTENTION and Y = EXECUTION, compute D(6,6).
INTENT vs EXECUT`,
      answers: ["8"],
      explanation:
        "정답표 기준 selected cell 값은 D(6,6)=8입니다.",
    },
    {
      id: "3-30",
      type: "blank",
      prompt: `Q5-(3e) For X = INTENTION and Y = EXECUTION, compute D(7,7).
INTENTI vs EXECUTI`,
      answers: ["8"],
      explanation:
        "정답표 기준 selected cell 값은 D(7,7)=8입니다.",
    },
    {
      id: "3-31",
      type: "blank",
      prompt: `Q5-(3f) For X = INTENTION and Y = EXECUTION, compute D(9,9).
INTENTION vs EXECUTION`,
      answers: ["8"],
      explanation:
        "최종 minimum edit distance는 D(9,9)=8입니다.",
    },
    {
      id: "3-32",
      type: "essay",
      prompt: `Q6-(1) Backtrace to alignment
X = ABC
Y = AC

Backtrace path:
D(3,2) --DIAG--> D(2,1)
D(2,1) --DOWN--> D(1,1)
D(1,1) --DIAG--> D(0,0)

alignment와 total cost를 쓰시오.`,
      rubric: [
        ["a b c", "abc"],
        ["a * c", "a * c", "a _ c"],
        ["1", "total cost 1", "cost = 1"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Alignment:
A B C
A * C

Total cost = 1`,
      explanation:
        "DIAG는 A-A match, DOWN은 B deletion, 마지막 DIAG는 C-C match를 뜻하므로 총 비용은 1입니다.",
    },
    {
      id: "3-33",
      type: "essay",
      prompt: `Q6-(2) In a standard DP table where rows are X and columns are Y, explain:
1. LEFT
2. DOWN
3. DIAG`,
      rubric: [
        ["left", "insertion", "d(i,j-1)"],
        ["down", "deletion", "d(i-1,j)"],
        ["diag", "match", "substitution", "d(i-1,j-1)"],
      ],
      minimumMatches: 3,
      sampleAnswer: `LEFT: came from D(i,j-1), meaning insertion
DOWN: came from D(i-1,j), meaning deletion
DIAG: came from D(i-1,j-1), meaning match or substitution`,
      explanation:
        "LEFT는 열 쪽 이동이라 insertion, DOWN은 행 쪽 이동이라 deletion, DIAG는 두 문자를 대응시키는 match/substitution입니다.",
    },
    {
      id: "3-34",
      type: "essay",
      prompt: `Q6-(3) Why can edit distance be unsuitable for measuring semantic similarity?
Edit distance가 semantic similarity 측정에 부적절할 수 있는 이유를 설명하시오.`,
      rubric: [
        ["surface", "lexical", "철자", "표면"],
        ["semantic", "meaning", "의미"],
        ["can be similar in meaning", "비슷한 의미", "different wording", "표현이 다르면"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Edit distance measures surface-level string differences, not meaning.
So two sentences can have similar semantics but still have a large edit distance if they use different wording.`,
      explanation:
        "Edit distance는 문자의 삽입/삭제/치환만 보기 때문에 의미가 비슷해도 값이 클 수 있습니다.",
    },
    {
      id: "3-35",
      type: "essay",
      prompt: `Q6-(4) Name two NLP tasks where edit distance can be used.
Edit distance가 사용될 수 있는 NLP task 두 가지를 쓰시오.`,
      rubric: [
        ["named entity extraction", "개체명 추출"],
        ["entity coreference", "공지시", "동일 지시어 연결"],
        ["machine translation evaluation", "기계번역 평가"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Possible answers:
- Named Entity Extraction
- Entity Coreference
- Machine Translation Evaluation`,
      explanation:
        "이 범위에서는 Named Entity Extraction, Entity Coreference, Machine Translation Evaluation이 대표적인 활용 예입니다.",
    },
  ],
};
