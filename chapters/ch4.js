window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[4] = {
  title: "4장 Hidden Markov Models",
  questions: [
    {
      id: "4-1",
      type: "multiple",
      prompt: `Q1. Which of the following best describes a sequence labeling task?
다음 중 sequence labeling task를 가장 잘 설명한 것은?`,
      choices: [
        "Assigning one label to an entire document. / 문서 전체에 하나의 라벨만 붙이는 작업이다.",
        "Assigning a label to each item in a sequence, often considering neighboring items. / 순서가 있는 데이터의 각 항목에 라벨을 붙이며, 주변 항목도 함께 고려하는 작업이다.",
        "Randomly generating a sentence without using hidden states. / hidden state 없이 문장을 무작위로 생성하는 작업이다.",
        "Counting how many times each word appears in a document. / 문서에서 각 단어가 몇 번 등장하는지 세는 작업이다.",
      ],
      correctIndex: 1,
      explanation:
        "Sequence labeling은 문장처럼 순서가 있는 데이터의 각 항목마다 라벨을 붙이는 작업입니다.",
    },
    {
      id: "4-2",
      type: "multiple",
      prompt: `Q2. Which of the following is NOT true about the standard classification assumption in NLP?
NLP에서 standard classification assumption에 대한 설명 중 옳지 않은 것은?`,
      choices: [
        "It often assumes that individual cases are independent. / 개별 사례들이 서로 독립이라고 가정하는 경우가 많다.",
        "Many NLP sequence tasks violate this assumption. / 많은 NLP sequence task는 이 가정에 잘 맞지 않는다.",
        "In sequence labeling, each decision is often connected to other decisions. / sequence labeling에서는 각 결정이 다른 결정들과 연결되어 있는 경우가 많다.",
        "It is always safe to classify each word independently in NLP tasks. / NLP 과제에서는 각 단어를 항상 독립적으로 분류해도 안전하다.",
      ],
      correctIndex: 3,
      explanation:
        "NLP sequence task에서는 단어와 태그가 서로 연결되어 있어 독립 분류 가정이 자주 깨집니다.",
    },
    {
      id: "4-3",
      type: "multiple",
      prompt: `Q3. Why are probabilistic sequence models useful for NLP?
확률적 순차 모델이 NLP에서 유용한 이유로 가장 적절한 것은?`,
      choices: [
        "They ignore dependencies between labels. / 라벨 사이의 의존성을 무시하기 때문이다.",
        "They integrate uncertainty over multiple interdependent decisions. / 서로 의존적인 여러 결정의 불확실성을 함께 고려할 수 있기 때문이다.",
        "They remove the need for probabilities. / 확률을 사용할 필요를 없애기 때문이다.",
        "They can only be used for document-level classification. / 문서 전체 분류에만 사용할 수 있기 때문이다.",
      ],
      correctIndex: 1,
      explanation:
        "확률적 순차 모델은 서로 연결된 여러 결정의 불확실성을 함께 고려할 수 있습니다.",
    },
    {
      id: "4-4",
      type: "multiple",
      prompt: `Q4. Which of the following best explains why an HMM is called "Hidden"?
HMM에서 "Hidden"이라는 말이 붙는 이유로 가장 적절한 것은?`,
      choices: [
        "Observations are hidden and states are visible. / 관측값은 숨겨져 있고 상태는 보이기 때문이다.",
        "Transition probabilities are never known. / 전이확률을 절대 알 수 없기 때문이다.",
        "States are not directly observable; we infer them from observations. / 상태는 직접 보이지 않고, 관측값을 통해 추론하기 때문이다.",
        "The model cannot generate observations. / 이 모델은 관측값을 생성할 수 없기 때문이다.",
      ],
      correctIndex: 2,
      explanation:
        "HMM에서 직접 보이는 것은 observation이고, hidden state는 observation을 통해 추론합니다.",
    },
    {
      id: "4-5",
      type: "multiple",
      prompt: `Q5. Which statement correctly describes the Markov property?
Markov property를 올바르게 설명한 것은?`,
      choices: [
        "The next state depends only on the current state. / 다음 상태는 현재 상태에만 의존한다.",
        "The next state depends on all previous states equally. / 다음 상태는 모든 이전 상태에 똑같이 의존한다.",
        "Observations are independent of hidden states. / 관측값은 hidden state와 독립이다.",
        "The current state depends only on the final state. / 현재 상태는 마지막 상태에만 의존한다.",
      ],
      correctIndex: 0,
      explanation:
        "HMM의 Markov property는 다음 상태가 현재 상태에만 의존한다고 가정합니다.",
    },
    {
      id: "4-6",
      type: "multiSelect",
      prompt: `Q6. Which of the following is NOT true about the formal definition of an HMM? Select all that apply.
HMM의 formal definition에 대한 설명 중 옳지 않은 것을 모두 고르시오.`,
      choices: [
        "Q is the vocabulary of possible observations. / Q는 가능한 관측값들의 vocabulary이다.",
        "A is the transition probability matrix. / A는 전이확률 행렬이다.",
        "V is the set of possible observation symbols. / V는 가능한 관측 기호들의 집합이다.",
        "q0 and qF usually emit observations just like normal hidden states. / q0와 qF도 일반 hidden state처럼 관측값을 방출한다.",
      ],
      correctIndexes: [0, 3],
      explanation:
        "Q는 hidden state 집합이고, V가 observation symbol 집합입니다. 또한 q0와 qF는 보통 일반 hidden state처럼 emission하지 않습니다.",
    },
    {
      id: "4-7",
      type: "multiple",
      prompt: `Q7. Which pair is correctly matched?
다음 연결 중 올바른 것은?`,
      choices: [
        "Transition probability — probability of generating a word from a state / 전이확률 — 어떤 상태에서 단어를 생성할 확률",
        "Emission probability — probability of moving from one hidden state to another / 방출확률 — 한 hidden state에서 다른 hidden state로 이동할 확률",
        "Observation likelihood — probability of the entire observation sequence / Observation likelihood — 전체 관측열이 나올 확률",
        "Backpointer — probability of all hidden paths summed together / Backpointer — 모든 hidden path 확률의 합",
      ],
      correctIndex: 2,
      explanation:
        "Observation likelihood는 전체 observation sequence가 모델 아래에서 나올 확률을 뜻합니다.",
    },
    {
      id: "4-8",
      type: "multiple",
      prompt: `Q8. Which of the following correctly matches the three fundamental HMM problems?
HMM의 세 가지 핵심 문제에 대한 설명 중 올바른 것은?`,
      choices: [
        "Observation Likelihood — finding the best hidden state sequence / Observation Likelihood — 가장 좋은 hidden state sequence 찾기",
        "Decoding — finding the best hidden state sequence for a given observation sequence / Decoding — 주어진 관측열에 대해 가장 좋은 hidden state sequence 찾기",
        "Learning — generating a single random sentence only / Learning — 하나의 무작위 문장만 생성하기",
        "Viterbi — estimating transition probabilities from training data / Viterbi — training data로부터 transition probability 추정하기",
      ],
      correctIndex: 1,
      explanation:
        "Decoding은 관측열이 주어졌을 때 가장 가능성 높은 hidden state sequence를 찾는 문제입니다.",
    },
    {
      id: "4-9",
      type: "multiple",
      prompt: `Q9. Which of the following best describes the difference between Forward and Viterbi?
Forward와 Viterbi의 차이를 가장 잘 설명한 것은?`,
      choices: [
        "Forward uses max; Viterbi uses summation. / Forward는 max를 쓰고, Viterbi는 summation을 쓴다.",
        "Forward computes the total probability of the observation sequence; Viterbi finds the best hidden state path. / Forward는 전체 관측열 확률을 계산하고, Viterbi는 최고의 hidden state path를 찾는다.",
        "Forward needs backpointers; Viterbi does not. / Forward는 backpointer가 필요하고, Viterbi는 필요하지 않다.",
        "Both algorithms always return the same final value. / 두 알고리즘은 항상 같은 최종값을 반환한다.",
      ],
      correctIndex: 1,
      explanation:
        "Forward는 모든 경로를 더하고, Viterbi는 최고 경로 하나를 찾습니다.",
    },
    {
      id: "4-10",
      type: "multiSelect",
      prompt: `Q10. Which of the following are true about HMM-based text generation? Select all that apply.
HMM을 이용한 text generation에 대한 설명 중 옳은 것을 모두 고르시오.`,
      choices: [
        "The model begins in a start state. / 모델은 start state에서 시작한다.",
        "A new state is selected using transition probabilities. / 전이확률을 사용하여 새 상태를 선택한다.",
        "An observation is generated using the emission probabilities of the selected state. / 선택된 상태의 방출확률을 사용하여 관측값을 생성한다.",
        "HMMs cannot be used to generate sequences. / HMM은 sequence generation에 사용할 수 없다.",
      ],
      correctIndexes: [0, 1, 2],
      explanation:
        "HMM generation은 start state에서 시작해 transition으로 상태를 옮기고, emission으로 observation을 생성합니다.",
    },
    {
      id: "4-11",
      type: "tf",
      prompt: `T/F 1. In a POS tagging HMM, the probability of observing a word depends on the current hidden tag/state.
POS tagging HMM에서 단어가 관측될 확률은 현재 hidden tag/state에 의존한다.`,
      answer: true,
      explanation:
        "Emission probability는 현재 hidden state에 조건부로 정의됩니다.",
    },
    {
      id: "4-12",
      type: "tf",
      prompt: `T/F 2. In a POS tagging HMM, the probability of observing a word depends only on the previously predicted tag.
POS tagging HMM에서 단어가 관측될 확률은 오직 이전에 예측된 태그에만 의존한다.`,
      answer: false,
      explanation:
        "관측값은 현재 hidden state/tag에 의존하고, 이전 태그는 transition에 영향을 줍니다.",
    },
    {
      id: "4-13",
      type: "tf",
      prompt: `T/F 3. In an HMM, the current hidden state depends only on the immediately previous hidden state.
HMM에서 현재 hidden state는 바로 이전 hidden state에만 의존한다.`,
      answer: true,
      explanation:
        "이것이 1차 Markov assumption의 핵심입니다.",
    },
    {
      id: "4-14",
      type: "tf",
      prompt: `T/F 4. In an HMM, the current hidden state depends on all previous hidden states.
HMM에서 현재 hidden state는 모든 이전 hidden state에 의존한다.`,
      answer: false,
      explanation:
        "HMM은 현재 상태가 모든 과거가 아니라 바로 이전 상태에만 의존한다고 가정합니다.",
    },
    {
      id: "4-15",
      type: "tf",
      prompt: `T/F 5. The Forward algorithm uses both transition and emission probabilities to recursively compute the total observation probability.
Forward algorithm은 transition probability와 emission probability를 모두 사용하여 전체 observation probability를 재귀적으로 계산한다.`,
      answer: true,
      explanation:
        "Forward recursion은 이전 alpha 값, transition, emission을 모두 사용합니다.",
    },
    {
      id: "4-16",
      type: "tf",
      prompt: `T/F 6. The Viterbi algorithm finds the most probable sequence of hidden states given a sequence of observations.
Viterbi algorithm은 관측열이 주어졌을 때 가장 확률이 높은 hidden state sequence를 찾는다.`,
      answer: true,
      explanation:
        "Viterbi는 decoding 문제를 푸는 대표 알고리즘입니다.",
    },
    {
      id: "4-17",
      type: "tf",
      prompt: `T/F 7. The Forward algorithm and the Viterbi algorithm both use summation over all previous states.
Forward algorithm과 Viterbi algorithm은 둘 다 모든 이전 상태에 대해 summation을 사용한다.`,
      answer: false,
      explanation:
        "Forward는 sum을 쓰고, Viterbi는 max를 씁니다.",
    },
    {
      id: "4-18",
      type: "tf",
      prompt: `T/F 8. A transition probability describes the probability of moving from one hidden state to another hidden state.
Transition probability는 한 hidden state에서 다른 hidden state로 이동할 확률을 뜻한다.`,
      answer: true,
      explanation:
        "Transition probability는 상태 간 이동 확률입니다.",
    },
    {
      id: "4-19",
      type: "tf",
      prompt: `T/F 9. An emission probability describes the probability of generating an observation from a hidden state.
Emission probability는 hidden state에서 observation을 생성할 확률을 뜻한다.`,
      answer: true,
      explanation:
        "Emission probability는 state에서 observation이 나올 조건부 확률입니다.",
    },
    {
      id: "4-20",
      type: "tf",
      prompt: `T/F 10. Observation likelihood P(O|λ) is the probability of the entire observation sequence under the HMM.
Observation likelihood P(O|λ)는 HMM에서 전체 관측열이 나올 확률이다.`,
      answer: true,
      explanation:
        "Observation likelihood는 전체 observation sequence 확률입니다.",
    },
    {
      id: "4-21",
      type: "tf",
      prompt: `T/F 11. Backpointers are used in the Forward algorithm to sum all possible paths.
Backpointer는 Forward algorithm에서 가능한 모든 path를 더하기 위해 사용된다.`,
      answer: false,
      explanation:
        "Backpointer는 Viterbi에서 최적 경로를 복원할 때 사용합니다.",
    },
    {
      id: "4-22",
      type: "tf",
      prompt: `T/F 12. In the ice cream example, the first-column Forward values and Viterbi values are the same because each first hidden state has only one incoming path from the start state.
아이스크림 예제에서 첫 번째 열의 Forward 값과 Viterbi 값은 같은데, 이는 각 첫 hidden state가 start state로부터 오는 경로 하나만 가지기 때문이다.`,
      answer: true,
      explanation:
        "첫 번째 시점에서는 각 state로 들어오는 경로가 start에서 오는 한 가지뿐입니다.",
    },
    {
      id: "4-23",
      type: "blank",
      prompt: `Blank 1. Sequence labeling assigns a ______ to each item in a sequence.
Sequence labeling은 sequence의 각 항목에 ______을 붙이는 작업이다.`,
      answers: ["label"],
      explanation:
        "Sequence labeling의 핵심은 각 항목마다 label을 붙이는 것입니다.",
    },
    {
      id: "4-24",
      type: "blank",
      prompt: `Blank 2. In HMMs, states are called hidden because they are not directly ______.
HMM에서 state가 hidden이라고 불리는 이유는 직접 ______되지 않기 때문이다.`,
      answers: ["observable", "observed"],
      explanation:
        "Hidden state는 직접 observable/observed되지 않습니다.",
    },
    {
      id: "4-25",
      type: "blank",
      prompt: `Blank 3. The Markov property says that the next state depends only on the ______ state.
Markov property는 다음 상태가 ______ 상태에만 의존한다고 말한다.`,
      answers: ["current", "present"],
      explanation:
        "다음 상태는 현재 상태에만 의존한다는 것이 Markov property입니다.",
    },
    {
      id: "4-26",
      type: "blank",
      prompt: `Blank 4. a_ij is a ______ probability from state i to state j.
a_ij는 state i에서 state j로 이동하는 ______ probability이다.`,
      answers: ["transition"],
      explanation:
        "a_ij는 transition probability입니다.",
    },
    {
      id: "4-27",
      type: "blank",
      prompt: `Blank 5. b_j(o_t) is an ______ probability of observing o_t in state j.
b_j(o_t)는 state j에서 observation o_t가 나올 ______ probability이다.`,
      answers: ["emission"],
      explanation:
        "b_j(o_t)는 emission probability입니다.",
    },
    {
      id: "4-28",
      type: "blank",
      prompt: `Blank 6. P(O|λ) is called observation ______.
P(O|λ)는 observation ______라고 부른다.`,
      answers: ["likelihood"],
      explanation:
        "P(O|λ)는 observation likelihood입니다.",
    },
    {
      id: "4-29",
      type: "blank",
      prompt: `Blank 7. The Forward algorithm computes P(O|λ) by ______ over all possible hidden state paths.
Forward algorithm은 가능한 모든 hidden state path에 대해 ______하여 P(O|λ)를 계산한다.`,
      answers: ["summing", "summation", "sum"],
      explanation:
        "Forward는 가능한 모든 hidden path의 확률을 더합니다.",
    },
    {
      id: "4-30",
      type: "blank",
      prompt: `Blank 8. The Viterbi algorithm uses ______ instead of summation.
Viterbi algorithm은 summation 대신 ______ 연산을 사용한다.`,
      answers: ["max", "maximum"],
      explanation:
        "Viterbi는 sum 대신 max를 사용합니다.",
    },
    {
      id: "4-31",
      type: "blank",
      prompt: `Blank 9. A ______ stores which previous state produced the best path probability.
______는 best path probability를 만든 이전 state를 저장한다.`,
      answers: ["backpointer"],
      explanation:
        "Backpointer는 최고 확률을 만든 이전 state를 기록합니다.",
    },
    {
      id: "4-32",
      type: "blank",
      prompt: `Blank 10. In Viterbi, ______ is the process of following backpointers from the final state to recover the best path.
Viterbi에서 ______는 final state부터 backpointer를 거꾸로 따라가 best path를 복원하는 과정이다.`,
      answers: ["backtrace"],
      explanation:
        "Backtrace는 마지막 state부터 backpointer를 따라 최적 경로를 복원하는 과정입니다.",
    },
    {
      id: "4-33",
      type: "essay",
      prompt: `Short Answer 1. Explain the difference between a hidden state and an observation in an HMM.
HMM에서 hidden state와 observation의 차이를 2~4문장으로 설명하시오.`,
      rubric: [
        ["hidden state", "숨겨진 상태", "직접 보이지 않는"],
        ["observation", "관측값", "실제로 보이는 값"],
        ["infer", "추론", "observation을 통해"],
      ],
      minimumMatches: 2,
      sampleAnswer: `A hidden state is an internal state that is not directly observable.
An observation is the visible output generated from a hidden state.
In an HMM, we observe the observations and infer the hidden states from them.`,
      explanation:
        "핵심은 hidden state는 직접 보이지 않고, observation만 실제로 관측된다는 점입니다.",
    },
    {
      id: "4-34",
      type: "essay",
      prompt: `Short Answer 2. Why does the standard classification assumption often fail in NLP sequence labeling problems?
왜 NLP의 sequence labeling 문제에서 standard classification assumption이 잘 맞지 않는지 설명하시오.`,
      rubric: [
        ["independent", "독립"],
        ["sequence", "순서", "문맥"],
        ["labels influence", "서로 영향을", "connected"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The standard classification assumption often treats cases as independent.
But in NLP sequence labeling, words and labels in a sequence influence one another through context.
So classifying each word independently is often not appropriate.`,
      explanation:
        "Sequence labeling에서는 현재 결정이 앞뒤 단어와 라벨에 영향을 받기 때문에 독립 가정이 잘 맞지 않습니다.",
    },
    {
      id: "4-35",
      type: "essay",
      prompt: `Short Answer 3. Explain the Markov property and why it makes Forward/Viterbi computation efficient.
Markov property가 무엇인지 설명하고, 이 성질이 Forward/Viterbi 계산을 효율적으로 만드는 이유를 설명하시오.`,
      rubric: [
        ["next state", "다음 상태", "current state", "현재 상태"],
        ["only", "에만 의존"],
        ["dynamic programming", "이전 시점 값만", "효율"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The Markov property says that the next state depends only on the current state.
Because of this, Forward and Viterbi only need information from the previous time step instead of the full history.
This makes dynamic programming possible and computation much more efficient.`,
      explanation:
        "현재 상태만 보면 되기 때문에 전체 과거를 모두 다시 계산하지 않아도 됩니다.",
    },
    {
      id: "4-36",
      type: "essay",
      prompt: `Short Answer 4. Explain the difference between the Forward algorithm and the Viterbi algorithm.
Forward algorithm과 Viterbi algorithm의 목적과 계산 방식 차이를 설명하시오.`,
      rubric: [
        ["forward", "observation probability", "전체 관측열 확률", "sum"],
        ["viterbi", "best path", "최적 hidden state sequence", "max"],
        ["backpointer", "backtrace"],
      ],
      minimumMatches: 3,
      sampleAnswer: `The Forward algorithm computes the total probability of the observation sequence by summing over all possible hidden paths.
The Viterbi algorithm finds the single best hidden state sequence by taking a max at each step.
Viterbi also uses backpointers to recover the best path.`,
      explanation:
        "Forward는 합, Viterbi는 최대값과 backpointer가 핵심입니다.",
    },
    {
      id: "4-37",
      type: "essay",
      prompt: `Short Answer 5. Why are backpointer and backtrace necessary in the Viterbi algorithm?
Viterbi algorithm에서 backpointer와 backtrace가 왜 필요한지 설명하시오.`,
      rubric: [
        ["backpointer", "which previous state", "이전 상태 저장"],
        ["backtrace", "recover", "복원", "최적 경로"],
      ],
      minimumMatches: 2,
      sampleAnswer: `A backpointer stores which previous state gave the best path probability for each cell.
Backtrace follows those backpointers backward from the final state to recover the optimal hidden state sequence.`,
      explanation:
        "최고 확률값만으로는 어떤 경로인지 알 수 없기 때문에 backpointer와 backtrace가 필요합니다.",
    },
    {
      id: "4-38",
      type: "essay",
      prompt: `Formula 1. Write the formula for observation likelihood P(O|λ) over all possible hidden state sequences.
모든 가능한 hidden state sequence를 고려하여 P(O|λ)를 구하는 식을 쓰시오.`,
      rubric: [
        ["p(o|λ)", "p o lambda"],
        ["sum", "∑", "모든 q", "all possible hidden state sequences"],
        ["p(o,q|λ)", "p(o|q,λ)p(q|λ)"],
      ],
      minimumMatches: 2,
      sampleAnswer: `P(O|λ) = sum_Q P(O,Q|λ)
or equivalently
P(O|λ) = sum_Q P(O|Q,λ) P(Q|λ)`,
      explanation:
        "Observation likelihood는 가능한 모든 hidden path의 joint probability를 합해 계산합니다.",
    },
    {
      id: "4-39",
      type: "essay",
      prompt: `Formula 2. Write the Forward recursion formula α_t(j), including initialization.
Forward probability α_t(j)의 재귀식과 초기화를 쓰시오.`,
      rubric: [
        ["alpha_1", "초기화", "a_0j", "b_j(o_1)"],
        ["alpha_t(j)", "sum", "α_{t-1}(i)", "a_ij", "b_j(o_t)"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Initialization:
alpha_1(j) = a_0j b_j(o_1)

Recursion:
alpha_t(j) = sum_i alpha_{t-1}(i) a_ij b_j(o_t)`,
      explanation:
        "Forward recursion은 이전 alpha 값들을 모두 더해 현재 alpha를 구합니다.",
    },
    {
      id: "4-40",
      type: "essay",
      prompt: `Formula 3. Write the Viterbi recursion formula v_t(j), including initialization.
Viterbi probability v_t(j)의 재귀식과 초기화를 쓰시오.`,
      rubric: [
        ["v_1", "초기화", "a_0j", "b_j(o_1)"],
        ["v_t(j)", "max", "v_{t-1}(i)", "a_ij", "b_j(o_t)"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Initialization:
v_1(j) = a_0j b_j(o_1)

Recursion:
v_t(j) = max_i v_{t-1}(i) a_ij b_j(o_t)`,
      explanation:
        "Viterbi recursion은 sum 대신 max를 사용합니다.",
    },
    {
      id: "4-41",
      type: "essay",
      prompt: `Formula 4. Write the formula for best path probability at time T and the backpointer formula.
마지막 시점 T에서 best path probability를 구하는 식과 backpointer 식을 쓰시오.`,
      rubric: [
        ["bestpathprob", "max_j", "v_t", "v_T(j)"],
        ["bestpathpointer", "argmax"],
        ["bp_t(j)", "argmax_i", "v_{t-1}(i)", "a_ij", "b_j(o_t)"],
      ],
      minimumMatches: 2,
      sampleAnswer: `bestpathprob = max_j v_T(j)
bestpathpointer = argmax_j v_T(j)
bp_t(j) = argmax_i v_{t-1}(i) a_ij b_j(o_t)`,
      explanation:
        "Best path probability는 마지막 시점의 최대 Viterbi 값이고, backpointer는 그 최대값을 만든 이전 상태를 저장합니다.",
    },
    {
      id: "4-42",
      type: "blank",
      prompt: `Calculation 1. Forward initialization with o_1 = 3:
α_1(h) = ?`,
      answers: ["0.32", "0.320"],
      explanation:
        "α_1(h) = P(h|start) P(3|h) = 0.8 x 0.4 = 0.32 입니다.",
    },
    {
      id: "4-43",
      type: "blank",
      prompt: `Calculation 1. Forward initialization with o_1 = 3:
α_1(c) = ?`,
      answers: ["0.02", "0.020"],
      explanation:
        "α_1(c) = P(c|start) P(3|c) = 0.2 x 0.1 = 0.02 입니다.",
    },
    {
      id: "4-44",
      type: "blank",
      prompt: `Calculation 2. Forward recursion for t = 2, o_2 = 1:
α_2(h) = ?`,
      answers: ["0.0464"],
      explanation:
        "α_2(h) = 0.32 x 0.7 x 0.2 + 0.02 x 0.4 x 0.2 = 0.0464 입니다.",
    },
    {
      id: "4-45",
      type: "blank",
      prompt: `Calculation 2. Forward recursion for t = 2, o_2 = 1:
α_2(c) = ?`,
      answers: ["0.054", "0.0540"],
      explanation:
        "α_2(c) = 0.32 x 0.3 x 0.5 + 0.02 x 0.6 x 0.5 = 0.054 입니다.",
    },
    {
      id: "4-46",
      type: "blank",
      prompt: `Calculation 3. For t = 3, o_3 = 3:
α_3(h) = ?`,
      answers: ["0.021632"],
      explanation:
        "α_3(h) = 0.0464 x 0.7 x 0.4 + 0.054 x 0.4 x 0.4 = 0.021632 입니다.",
    },
    {
      id: "4-47",
      type: "blank",
      prompt: `Calculation 3. For t = 3, o_3 = 3:
α_3(c) = ?`,
      answers: ["0.004632"],
      explanation:
        "α_3(c) = 0.0464 x 0.3 x 0.1 + 0.054 x 0.6 x 0.1 = 0.004632 입니다.",
    },
    {
      id: "4-48",
      type: "blank",
      prompt: `Calculation 3. Final observation likelihood:
P(O|λ) = ?`,
      answers: ["0.026264"],
      explanation:
        "P(O|λ) = α_3(h) + α_3(c) = 0.021632 + 0.004632 = 0.026264 입니다.",
    },
    {
      id: "4-49",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
v_1(h) = ?`,
      answers: ["0.32", "0.320"],
      explanation:
        "v_1(h) = 0.8 x 0.4 = 0.32 입니다.",
    },
    {
      id: "4-50",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
v_1(c) = ?`,
      answers: ["0.02", "0.020"],
      explanation:
        "v_1(c) = 0.2 x 0.1 = 0.02 입니다.",
    },
    {
      id: "4-51",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
v_2(h) = ?`,
      answers: ["0.0448"],
      explanation:
        "v_2(h) = max(0.32 x 0.7 x 0.2, 0.02 x 0.4 x 0.2) = 0.0448 입니다.",
    },
    {
      id: "4-52",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
v_2(c) = ?`,
      answers: ["0.048", "0.0480"],
      explanation:
        "v_2(c) = max(0.32 x 0.3 x 0.5, 0.02 x 0.6 x 0.5) = 0.048 입니다.",
    },
    {
      id: "4-53",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
v_3(h) = ?`,
      answers: ["0.012544"],
      explanation:
        "v_3(h) = max(0.0448 x 0.7 x 0.4, 0.048 x 0.4 x 0.4) = 0.012544 입니다.",
    },
    {
      id: "4-54",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
v_3(c) = ?`,
      answers: ["0.00288", "0.002880"],
      explanation:
        "v_3(c) = max(0.0448 x 0.3 x 0.1, 0.048 x 0.6 x 0.1) = 0.00288 입니다.",
    },
    {
      id: "4-55",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
best path probability = ?`,
      answers: ["0.012544"],
      explanation:
        "best path probability = max(v_3(h), v_3(c)) = 0.012544 입니다.",
    },
    {
      id: "4-56",
      type: "blank",
      prompt: `Calculation 4. Viterbi:
optimal hidden state sequence = ?`,
      answers: [
        "hot hot hot",
        "hot, hot, hot",
        "hot/hot/hot",
      ],
      explanation:
        "Backtrace를 따라가면 Day3 = h, Day2 = h, Day1 = h 이므로 optimal path는 hot, hot, hot 입니다.",
    },
    {
      id: "4-57",
      type: "essay",
      prompt: `Calculation 4. Briefly describe the backpointer and backtrace process for O = (3,1,3).
관측열 O = (3,1,3)에 대해 backpointer와 backtrace 과정을 간단히 설명하시오.`,
      rubric: [
        ["bp_2(h)=h", "bp2 h h", "hot"],
        ["bp_2(c)=h", "bp2 c h"],
        ["bp_3(h)=h", "bp3 h h"],
        ["bp_3(c)=c", "bp3 c c"],
        ["day3=h", "day2=h", "day1=h", "hot hot hot"],
      ],
      minimumMatches: 2,
      sampleAnswer: `At time 2, bp_2(h)=h and bp_2(c)=h.
At time 3, bp_3(h)=h and bp_3(c)=c.
The best final state is h, so backtrace gives Day3=h, Day2=h, Day1=h, which is hot-hot-hot.`,
      explanation:
        "Backpointer는 각 칸의 최고 경로가 어디서 왔는지 기록하고, backtrace는 마지막 최고 상태에서 시작해 이를 거꾸로 따라갑니다.",
    },
    {
      id: "4-58",
      type: "essay",
      prompt: `Challenge 1. Why is the Forward value P(O|λ) usually greater than or equal to the Viterbi best path probability?
왜 Forward 값 P(O|λ)는 보통 Viterbi best path probability보다 크거나 같은가?`,
      rubric: [
        ["forward", "sum", "모든 경로를 더한다"],
        ["viterbi", "best path", "하나만 고른다", "max"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The Forward algorithm sums the probabilities of all possible hidden state paths.
The Viterbi algorithm keeps only the single best path.
So the sum over all paths is usually greater than or equal to the probability of the best single path.`,
      explanation:
        "전체 경로의 합은 그중 가장 큰 경로 하나의 확률보다 작을 수 없습니다.",
    },
    {
      id: "4-59",
      type: "essay",
      prompt: `Challenge 2. In the ice cream example, observation 1 is more likely under cold than hot. Why can the final Viterbi path still be hot, hot, hot?
아이스크림 예제에서 관측값 1은 cold에서 더 잘 나오는데, 왜 최종 Viterbi 경로가 hot, hot, hot이 될 수 있는가?`,
      rubric: [
        ["single observation", "한 시점만 보면", "1만 보면"],
        ["whole path", "전체 경로", "transition and emission together"],
        ["hot hot hot"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Even if observation 1 is more likely under cold locally, Viterbi chooses the best entire path, not the best state at a single time.
When transition and emission probabilities are multiplied across the full sequence, hot-hot-hot can still have the largest overall probability.`,
      explanation:
        "Viterbi는 각 시점의 local preference가 아니라 전체 경로 확률을 비교합니다.",
    },
    {
      id: "4-60",
      type: "essay",
      prompt: `Challenge 3. Why is a greedy strategy different from the Viterbi algorithm?
매 시점에서 가장 큰 상태만 고르는 greedy 방식이 왜 Viterbi와 다른지 설명하시오.`,
      rubric: [
        ["greedy", "매 시점 하나만", "local choice"],
        ["viterbi", "each state", "best partial path", "각 상태별"],
      ],
      minimumMatches: 2,
      sampleAnswer: `A greedy strategy chooses the locally best state at each time step and may discard paths that become better later.
Viterbi keeps the best partial path for each state at each time step, so it can recover the globally best path.`,
      explanation:
        "Greedy는 지역 최적 선택만 하고, Viterbi는 각 상태별 최고 부분 경로를 유지합니다.",
    },
    {
      id: "4-61",
      type: "essay",
      prompt: `Challenge 4. Explain the difference between α_t(j) and v_t(j).
α_t(j)와 v_t(j)의 의미 차이를 설명하시오.`,
      rubric: [
        ["alpha", "sum", "all paths", "모든 경로의 합"],
        ["viterbi", "best path", "최고 경로 하나", "max"],
      ],
      minimumMatches: 2,
      sampleAnswer: `α_t(j) is the sum of probabilities of all paths that end in state j at time t.
v_t(j) is the probability of the single best path that ends in state j at time t.`,
      explanation:
        "α는 합, v는 최대값입니다.",
    },
    {
      id: "4-62",
      type: "essay",
      prompt: `Challenge 5. Explain the difference between observation likelihood and decoding.
Observation likelihood와 decoding의 차이를 설명하시오.`,
      rubric: [
        ["observation likelihood", "전체 관측열 확률", "p(o|λ)"],
        ["decoding", "best hidden state sequence", "최적 상태열"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Observation likelihood asks for the probability of the entire observation sequence under the HMM.
Decoding asks for the most probable hidden state sequence that could have generated the observations.`,
      explanation:
        "Likelihood는 관측열 확률 문제이고, decoding은 최적 hidden path를 찾는 문제입니다.",
    },
  ],
};
