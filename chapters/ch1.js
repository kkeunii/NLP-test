window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[1] = {
  title: "1장 Dialogue Systems",
  questions: [
    {
      id: "1-1",
      type: "multiple",
      prompt: `Which of the following best explains why rule-based chatbots were a natural approach in the 1950s?
다음 중 1950년대에 rule-based chatbot이 자연스러운 접근법이었던 이유로 가장 적절한 것은?`,
      choices: [
        `Because large-scale human-human dialogue corpora were already available.
대규모 인간-인간 대화 코퍼스가 이미 충분히 존재했기 때문이다.`,
        `Because neural encoder-decoder architectures were easier to implement than handwritten rules.
신경망 기반 encoder-decoder 구조가 손으로 만든 규칙보다 구현하기 쉬웠기 때문이다.`,
        `Because developers could encode predefined rules into computers even without personal computers or the internet.
개인용 컴퓨터나 인터넷이 없어도 사람이 미리 정의한 규칙을 컴퓨터에 인코딩할 수 있었기 때문이다.`,
        `Because chatbots at that time could automatically learn mappings from massive online knowledge repositories.
당시 챗봇은 대규모 온라인 지식 저장소에서 자동으로 매핑을 학습할 수 있었기 때문이다.`,
      ],
      correctIndex: 2,
      explanation:
        "초기 대화 시스템은 대규모 데이터와 학습 인프라가 없었기 때문에, 사람이 규칙을 직접 써 넣는 방식이 가장 현실적인 접근이었습니다.",
    },
    {
      id: "1-2",
      type: "multiple",
      prompt: `Which of the following is NOT an accurate description of ELIZA's relationship to Rogerian Therapy?
다음 중 ELIZA와 Rogerian Therapy의 관계에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        `ELIZA often repeats or reformulates the user's problem.
ELIZA는 사용자의 문제를 반복하거나 재구성하는 방식으로 응답한다.`,
        `ELIZA asks general questions to encourage the user to provide more information.
ELIZA는 사용자가 더 많은 정보를 말하도록 일반적인 질문을 던진다.`,
        `ELIZA provides new expert knowledge to solve the user's psychological problems.
ELIZA는 사용자의 심리적 문제를 해결하기 위해 새로운 전문 지식을 제공한다.`,
        `ELIZA can appear conversational even without deeply understanding the user's meaning.
ELIZA는 사용자의 의미를 깊이 이해하지 않아도 대화하는 것처럼 보일 수 있다.`,
      ],
      correctIndex: 2,
      explanation:
        "ELIZA는 실제 전문가처럼 새로운 지식을 제공하는 시스템이 아니라, 재진술과 질문으로 이해하는 것처럼 보이게 만드는 시스템입니다.",
    },
    {
      id: "1-3",
      type: "multiple",
      prompt: `In ELIZA, what is the main role of keywords such as "you," "me," "my," or "always"?
ELIZA에서 "you", "me", "my", "always" 같은 keyword의 주된 역할은 무엇인가?`,
      choices: [
        `They are used to train a neural classifier for slot filling.
slot filling을 위한 신경망 분류기를 학습시키는 데 사용된다.`,
        `They trigger pattern matching rules and help decide which transformation rule to apply.
패턴 매칭 규칙을 작동시키고 어떤 변환 규칙을 적용할지 결정하는 데 사용된다.`,
        `They are used only when no predefined rules match the input sentence.
미리 정의된 규칙이 입력 문장과 매칭되지 않을 때만 사용된다.`,
        `They represent dialogue acts such as INFORM, REQUEST, or CONFIRM.
INFORM, REQUEST, CONFIRM 같은 dialogue act를 나타낸다.`,
      ],
      correctIndex: 1,
      explanation:
        "ELIZA의 keyword는 학습용 특징이 아니라 규칙 기반 패턴 매칭을 트리거하고 어떤 변환을 적용할지 고르는 기준입니다.",
    },
    {
      id: "1-4",
      type: "multiple",
      prompt: `Suppose an ELIZA input sentence matches both a general keyword and a more specific keyword. Which statement is most consistent with ELIZA's ranking mechanism?
ELIZA 입력 문장이 일반적인 keyword와 더 구체적인 keyword에 모두 매칭되는 경우, ELIZA의 ranking 방식과 가장 일치하는 설명은?`,
      choices: [
        `ELIZA randomly selects one of the matching rules to make the conversation more natural.
ELIZA는 대화를 자연스럽게 만들기 위해 매칭된 규칙 중 하나를 무작위로 선택한다.`,
        `ELIZA always selects the rule that appears first in the rule list, regardless of specificity.
ELIZA는 구체성과 상관없이 규칙 목록에서 먼저 등장한 규칙을 항상 선택한다.`,
        `ELIZA gives priority to more specific keywords over more general keywords.
ELIZA는 더 일반적인 keyword보다 더 구체적인 keyword를 우선시한다.`,
        `ELIZA ignores keyword ranking when the sentence contains first-person pronouns.
ELIZA는 문장에 1인칭 대명사가 포함되면 keyword ranking을 무시한다.`,
      ],
      correctIndex: 2,
      explanation:
        "강의 핵심은 keyword가 여러 개 잡혀도 더 구체적인 규칙이 우선된다는 점입니다.",
    },
    {
      id: "1-5",
      type: "multiple",
      prompt: `Which of the following best describes ELIZA's behavior when no keyword is matched?
입력 문장에서 keyword가 매칭되지 않을 때 ELIZA의 동작으로 가장 적절한 것은?`,
      choices: [
        `It always terminates the conversation because it cannot understand the input.
입력을 이해할 수 없으므로 항상 대화를 종료한다.`,
        `It may return a non-committal default response or use a stored memory response.
애매하지만 대화를 이어가는 기본 응답을 하거나 저장된 memory 응답을 사용할 수 있다.`,
        `It trains a new rule from the user's utterance and immediately applies it.
사용자 발화로부터 새 규칙을 학습하고 즉시 적용한다.`,
        `It asks the user to manually label the utterance with a dialogue act.
사용자에게 발화를 dialogue act로 직접 라벨링하라고 요청한다.`,
      ],
      correctIndex: 1,
      explanation:
        "keyword가 없으면 ELIZA는 'PLEASE GO ON' 같은 기본 응답을 쓰거나 memory stack에 저장해둔 응답을 꺼내며 대화를 이어갑니다.",
    },
    {
      id: "1-6",
      type: "multiple",
      prompt: `Which of the following most accurately describes ELIZA's memory stack mechanism?
다음 중 ELIZA의 memory stack 메커니즘을 가장 정확히 설명한 것은?`,
      choices: [
        `ELIZA stores all user utterances as training data and updates its neural parameters.
ELIZA는 모든 사용자 발화를 학습 데이터로 저장하고 신경망 파라미터를 업데이트한다.`,
        `When certain keywords such as "my" are matched, ELIZA can transform the input and store it for later use.
"my" 같은 특정 keyword가 매칭되면, ELIZA는 입력을 변환해 나중에 사용할 수 있도록 저장할 수 있다.`,
        `ELIZA stores only system responses, not user-derived transformations.
ELIZA는 사용자 입력에서 변환한 내용이 아니라 시스템 응답만 저장한다.`,
        `ELIZA's memory stack is equivalent to modern transformer attention.
ELIZA의 memory stack은 현대 transformer attention과 동일하다.`,
      ],
      correctIndex: 1,
      explanation:
        "memory stack은 현대적 장기 기억이 아니라, 특정 입력을 변형해 뒀다가 나중에 다시 쓰는 단순 저장 장치에 가깝습니다.",
    },
    {
      id: "1-7",
      type: "multiple",
      prompt: `Which of the following is the best ordering of ELIZA's simplified algorithm?
다음 중 ELIZA의 단순화된 알고리즘 순서로 가장 적절한 것은?`,
      choices: [
        `Generate response → Find keyword → Store memory → Match rule
응답 생성 → keyword 찾기 → memory 저장 → 규칙 매칭`,
        `Find highest-ranked keyword → Choose matching rule → Apply transformation → Possibly store memory
가장 높은 우선순위의 keyword 찾기 → 매칭 규칙 선택 → 변환 적용 → 필요 시 memory 저장`,
        `Classify domain → Determine intent → Fill slots → Track dialogue state
domain 분류 → intent 결정 → slot 채우기 → dialogue state 추적`,
        `Retrieve corpus response → Decode sequence → Apply reinforcement learning → Confirm explicitly
코퍼스 응답 검색 → sequence 디코딩 → 강화학습 적용 → 명시적 확인`,
      ],
      correctIndex: 1,
      explanation:
        "ELIZA는 현대 대화 시스템 파이프라인이 아니라 keyword 중심 규칙 선택과 변환, 그리고 필요 시 memory 저장 흐름으로 이해하면 됩니다.",
    },
    {
      id: "1-8",
      type: "multiple",
      prompt: `Which of the following correctly distinguishes corpus from corpora?
다음 중 corpus와 corpora를 올바르게 구분한 것은?`,
      choices: [
        `Corpus is a single chatbot response; corpora are the rules used to generate it.
corpus는 하나의 챗봇 응답이고, corpora는 그것을 생성하는 규칙이다.`,
        `Corpus is a collection of text data; corpora is the plural form of corpus.
corpus는 텍스트 데이터 모음이고, corpora는 corpus의 복수형이다.`,
        `Corpus refers only to spoken language; corpora refers only to written language.
corpus는 음성 언어만, corpora는 문자 언어만 의미한다.`,
        `Corpus is used only for rule-based systems; corpora is used only for neural systems.
corpus는 rule-based system에서만, corpora는 neural system에서만 사용된다.`,
      ],
      correctIndex: 1,
      explanation:
        "corpus는 텍스트나 대화 데이터 모음을 뜻하고, corpora는 그 복수형입니다.",
    },
    {
      id: "1-9",
      type: "multiple",
      prompt: `Which of the following is NOT a typical characteristic of corpus-based chatbots?
다음 중 corpus-based chatbot의 일반적인 특징으로 옳지 않은 것은?`,
      choices: [
        `They learn mappings from inputs to outputs based on human-human conversation corpora.
인간-인간 대화 코퍼스를 기반으로 입력과 출력의 매핑을 학습한다.`,
        `They require much less data than rule-based chatbots because rules are unnecessary.
규칙이 필요 없기 때문에 rule-based chatbot보다 훨씬 적은 데이터만 필요하다.`,
        `They reduce the need for manually creating extensive rules.
광범위한 규칙을 사람이 직접 만들 필요를 줄인다.`,
        `They can produce responses to new inputs they have not seen before.
이전에 보지 못한 새로운 입력에도 응답할 수 있다.`,
      ],
      correctIndex: 1,
      explanation:
        "규칙을 덜 쓰는 대신 보통 훨씬 더 많은 데이터가 필요할 수 있다는 점이 함정입니다.",
    },
    {
      id: "1-10",
      type: "multiSelect",
      prompt: `Which of the following types of data can be used to train or supplement corpus-based chatbots? Select all that apply.
다음 중 corpus-based chatbot을 학습하거나 보완하는 데 사용될 수 있는 데이터는? 모두 고르시오.`,
      choices: [
        `Large spoken conversational corpora
대규모 음성 대화 코퍼스`,
        `Movie dialogue
영화 대사`,
        `News or online knowledge repositories such as Wikipedia
뉴스 또는 Wikipedia 같은 온라인 지식 저장소`,
        `User utterances collected during interaction, after privacy-sensitive information is handled
개인정보 처리를 거친 후 상호작용 중 수집된 사용자 발화`,
      ],
      correctIndexes: [0, 1, 2, 3],
      explanation:
        "강의에서는 대화 코퍼스뿐 아니라 영화 대사, 지식 저장소, 개인정보 처리 후 수집한 사용자 발화 등 다양한 데이터 소스를 활용할 수 있다고 설명합니다.",
    },
    {
      id: "1-11",
      type: "multiple",
      prompt: `Which of the following best describes an Information Retrieval based chatbot?
다음 중 Information Retrieval based chatbot을 가장 잘 설명한 것은?`,
      choices: [
        `It generates every response from scratch using a decoder.
decoder를 이용해 모든 응답을 처음부터 새로 생성한다.`,
        `It selects an appropriate response from a conversational corpus.
대화 코퍼스에서 적절한 응답을 선택한다.`,
        `It fills predefined slots in a frame and then executes an action.
frame 안의 미리 정의된 slot을 채운 뒤 작업을 수행한다.`,
        `It uses only handwritten semantic grammars and never uses similarity search.
손으로 작성된 semantic grammar만 사용하고 similarity search는 절대 사용하지 않는다.`,
      ],
      correctIndex: 1,
      explanation:
        "IR-based chatbot의 핵심은 생성이 아니라 검색과 선택입니다.",
    },
    {
      id: "1-12",
      type: "multiple",
      prompt: `In Method 1 of IR-based chatbots, what is returned after finding the most similar turn to the current input?
IR-based chatbot의 Method 1에서 현재 입력과 가장 유사한 turn을 찾은 뒤 반환하는 것은?`,
      choices: [
        `The response associated with the most similar turn
가장 유사한 turn에 연결된 response`,
        `The current user query itself
현재 사용자 query 자체`,
        `A newly generated sentence from an encoder-decoder model
encoder-decoder 모델이 새로 생성한 문장`,
        `The dialogue state representation
dialogue state 표현`,
      ],
      correctIndex: 0,
      explanation:
        "Method 1은 가장 비슷한 과거 발화를 찾고, 그 발화에 이어졌던 응답을 그대로 가져오는 방식입니다.",
    },
    {
      id: "1-13",
      type: "multiple",
      prompt: `Which of the following is a technique or information source that can improve IR-based chatbot performance?
다음 중 IR-based chatbot의 성능을 향상시키는 데 사용할 수 있는 기술 또는 정보는?`,
      choices: [
        `Entire conversation history so far
지금까지의 전체 대화 이력`,
        `User-specific information
사용자별 정보`,
        `Sentiment
감정 정보`,
        `All of the above
위의 모든 것`,
      ],
      correctIndex: 3,
      explanation:
        "강의에서는 전체 문맥, 사용자 정보, 감정 정보 모두 검색 기반 성능 향상에 도움이 될 수 있다고 설명합니다.",
    },
    {
      id: "1-14",
      type: "multiple",
      prompt: `Which of the following is NOT true about encoder-decoder chatbots?
다음 중 encoder-decoder chatbot에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        `They can be viewed as machine-learned sequence transduction systems.
기계학습 기반 sequence transduction system으로 볼 수 있다.`,
        `They learn to map input sequences to output sequences from a corpus.
코퍼스로부터 입력 sequence를 출력 sequence로 매핑하는 법을 학습한다.`,
        `They always maintain perfect multi-turn coherence because the decoder stores all prior dialogue states.
decoder가 모든 이전 dialogue state를 저장하므로 항상 완벽한 multi-turn coherence를 유지한다.`,
        `They may use RNNs or Transformers in the encoder and decoder.
encoder와 decoder에 RNN 또는 Transformer를 사용할 수 있다.`,
      ],
      correctIndex: 2,
      explanation:
        "기본 encoder-decoder는 장기 문맥 일관성에서 약점이 있고, decoder가 완벽한 dialogue state를 보장하는 것도 아닙니다.",
    },
    {
      id: "1-15",
      type: "multiple",
      prompt: `Which of the following is a known problem of basic encoder-decoder chatbot models?
기본 encoder-decoder chatbot 모델의 알려진 문제점으로 적절한 것은?`,
      choices: [
        `They cannot produce any grammatical sentence because they do not use training data.
학습 데이터를 사용하지 않기 때문에 문법적인 문장을 전혀 생성할 수 없다.`,
        `They tend to produce repetitive and generic responses such as "I don't know."
"I don't know" 같은 반복적이고 일반적인 응답을 생성하는 경향이 있다.`,
        `They are identical to finite-state dialogue managers.
finite-state dialogue manager와 동일하다.`,
        `They can only retrieve responses from a corpus and cannot generate new text.
코퍼스에서 응답을 검색만 할 수 있고 새로운 텍스트를 생성할 수 없다.`,
      ],
      correctIndex: 1,
      explanation:
        "강의에서 강조한 대표적인 문제는 generic response problem, 즉 안전하지만 지루한 답을 반복하는 현상입니다.",
    },
    {
      id: "1-16",
      type: "multiple",
      prompt: `Which of the following best describes the relationship between slots and values in a frame-based dialogue system?
Frame-based dialogue system에서 slot과 value의 관계를 가장 잘 설명한 것은?`,
      choices: [
        `Slots are the actual user-provided information, while values are the names of information fields.
slot은 사용자가 제공한 실제 정보이고, value는 정보 항목의 이름이다.`,
        `Slots specify what the system needs to know, and values are the actual fillers assigned to those slots.
slot은 시스템이 알아야 하는 정보 항목이고, value는 그 slot에 들어가는 실제 값이다.`,
        `Slots are used only for speech recognition, and values are used only for text-to-speech.
slot은 음성 인식에만 사용되고, value는 음성 합성에만 사용된다.`,
        `Slots and values are both dialogue acts used by the dialogue policy.
slot과 value는 모두 dialogue policy가 사용하는 dialogue act이다.`,
      ],
      correctIndex: 1,
      explanation:
        "slot은 정보 항목의 이름이고, value는 그 자리를 실제로 채우는 값입니다. 예를 들어 Destination city=Tokyo처럼 이해하면 됩니다.",
    },
    {
      id: "1-17",
      type: "multiple",
      prompt: `Which of the following is NOT a core NLU task in frame-based dialogue systems?
다음 중 frame-based dialogue system에서 NLU의 핵심 작업이 아닌 것은?`,
      choices: [
        `Domain Classification`,
        `Intent Determination`,
        `Slot Filling`,
        `Text-to-Speech Synthesis`,
      ],
      correctIndex: 3,
      explanation:
        "TTS는 출력 표현 단계이고, NLU는 입력에서 domain, intent, slot/value를 뽑아내는 역할입니다.",
    },
    {
      id: "1-18",
      type: "multiple",
      prompt: `Which of the following best describes semantic grammars for slot filling?
Slot filling을 위한 semantic grammar에 대한 설명으로 가장 적절한 것은?`,
      choices: [
        `The left-hand side corresponds to semantic entities such as slot names, and the right-hand side specifies possible expressions or values.
왼쪽은 slot name 같은 의미 단위에 해당하고, 오른쪽은 가능한 표현이나 값을 나타낸다.`,
        `The left-hand side always represents a neural hidden state, and the right-hand side represents a probability distribution.
왼쪽은 항상 신경망 hidden state이고, 오른쪽은 확률 분포를 나타낸다.`,
        `Semantic grammars are used only in corpus-based chatbots and cannot be parsed with CFG-style algorithms.
semantic grammar는 corpus-based chatbot에서만 사용되며 CFG 방식으로 파싱할 수 없다.`,
        `Semantic grammars replace dialogue state tracking and dialogue policy entirely.
semantic grammar는 dialogue state tracking과 dialogue policy를 완전히 대체한다.`,
      ],
      correctIndex: 0,
      explanation:
        "semantic grammar는 의미 범주를 왼쪽에 두고, 그 범주를 표현할 수 있는 언어 패턴을 오른쪽에 둔 규칙입니다.",
    },
    {
      id: "1-19",
      type: "multiple",
      prompt: `Which of the following is the most appropriate order in a spoken dialogue state architecture?
Spoken dialogue state architecture의 흐름으로 가장 적절한 것은?`,
      choices: [
        `TTS → NLG → Dialogue Policy → DST → NLU → ASR`,
        `ASR → NLU → DST → Dialogue Policy → NLG → TTS`,
        `NLG → ASR → Slot Filling → TTS → Dialogue Policy → DST`,
        `DST → ASR → NLG → Corpus Retrieval → TTS → Intent Determination`,
      ],
      correctIndex: 1,
      explanation:
        "음성 입력은 먼저 ASR로 텍스트화되고, 그 뒤 NLU, DST, Policy, NLG, TTS 순으로 처리됩니다.",
    },
    {
      id: "1-20",
      type: "multiple",
      prompt: `Which of the following is NOT an appropriate description of confirmation and rejection strategies in dialogue systems?
Dialogue system의 confirmation과 rejection 전략에 대한 설명으로 옳지 않은 것은?`,
      choices: [
        `Explicit confirmation directly asks the user whether the system's understanding is correct.
explicit confirmation은 시스템 이해가 맞는지 사용자에게 직접 묻는다.`,
        `Implicit confirmation repeats what the system understood as part of the next question or response.
implicit confirmation은 다음 질문이나 응답 안에 시스템이 이해한 내용을 포함해 반복한다.`,
        `Rejection can be used when the system is likely to have misunderstood the utterance.
시스템이 발화를 잘못 이해했을 가능성이 높을 때 rejection을 사용할 수 있다.`,
        `Very low confidence should always lead to no confirmation because asking questions makes the dialogue longer.
confidence가 매우 낮으면 질문이 길어지므로 항상 confirmation 없이 진행해야 한다.`,
      ],
      correctIndex: 3,
      explanation:
        "confidence가 매우 낮을수록 오히려 rejection이나 확인 전략이 더 필요합니다. 그냥 진행하면 오류가 누적되기 쉽습니다.",
    },
    {
      id: "1-21",
      type: "tf",
      prompt: `ELIZA provides genuinely new information to the user in the same way a domain expert would.
ELIZA는 도메인 전문가처럼 사용자에게 실제로 새로운 정보를 제공한다.`,
      answer: false,
      explanation:
        "ELIZA는 재진술과 질문으로 대화하는 것처럼 보이게 만들 뿐, 전문가 지식을 새롭게 제공하지는 않습니다.",
    },
    {
      id: "1-22",
      type: "tf",
      prompt: `In ELIZA, a default response such as "PLEASE GO ON" may be used when no keyword is matched.
ELIZA에서는 keyword가 매칭되지 않을 때 "PLEASE GO ON" 같은 기본 응답을 사용할 수 있다.`,
      answer: true,
      explanation:
        "no keyword 상황에서 default response는 ELIZA의 대표적인 fallback 전략입니다.",
    },
    {
      id: "1-23",
      type: "tf",
      prompt: `Corpus-based chatbots generally avoid manually written rules, but they may require extremely large amounts of data.
Corpus-based chatbot은 일반적으로 사람이 작성한 규칙을 줄이지만, 매우 많은 양의 데이터가 필요할 수 있다.`,
      answer: true,
      explanation:
        "corpus-based 접근은 규칙 작성 부담을 줄이지만, 그 대신 큰 코퍼스가 필요해질 수 있습니다.",
    },
    {
      id: "1-24",
      type: "tf",
      prompt: `Most corpus-based chatbots discussed in the lecture deeply model long-term conversational goals and full dialogue context.
강의에서 설명한 대부분의 corpus-based chatbot은 장기적인 대화 목표와 전체 대화 문맥을 깊이 모델링한다.`,
      answer: false,
      explanation:
        "강의에서는 많은 corpus-based chatbot이 turn-level 대응에 치우쳐 있고, 장기 목표나 깊은 dialogue context를 잘 다루지 못한다고 설명합니다.",
    },
    {
      id: "1-25",
      type: "tf",
      prompt: `In a frame-based dialogue system, the system's goal is to fill slots in the frame with values intended by the user and then perform the relevant action.
Frame-based dialogue system의 목표는 사용자가 의도한 값으로 frame의 slot을 채우고 관련 action을 수행하는 것이다.`,
      answer: true,
      explanation:
        "frame-based dialogue의 목표는 필요한 slot/value를 모아 task를 완료하는 것입니다.",
    },
    {
      id: "1-26",
      type: "tf",
      prompt: `Dialogue acts are universal and always use the same tagset regardless of task or domain.
Dialogue act는 보편적이므로 task나 domain에 관계없이 항상 같은 tagset을 사용한다.`,
      answer: false,
      explanation:
        "dialogue act tagset은 task와 domain에 따라 달라질 수 있습니다. 항상 동일한 보편 태그셋을 쓰는 것은 아닙니다.",
    },
    {
      id: "1-27",
      type: "tf",
      prompt: `A finite-state dialogue manager is generally easy to implement for simple tasks, but it can frustrate users because it gives the system strong conversational initiative.
Finite-state dialogue manager는 단순한 task에서는 구현하기 쉽지만, 시스템이 대화 주도권을 강하게 가지므로 사용자를 답답하게 만들 수 있다.`,
      answer: true,
      explanation:
        "finite-state 방식은 단순 task에는 쉽지만, 사용자가 말하고 싶은 정보를 자유롭게 말하기 어려워 답답함을 줄 수 있습니다.",
    },
    {
      id: "1-28",
      type: "tf",
      prompt: `Compared with implicit confirmation, explicit confirmation is usually more natural and shorter, but harder for users to correct.
Implicit confirmation과 비교했을 때, explicit confirmation은 보통 더 자연스럽고 짧지만 사용자가 오류를 고치기는 더 어렵다.`,
      answer: false,
      explanation:
        "보통 implicit confirmation이 더 자연스럽고 효율적이며, explicit confirmation은 덜 자연스럽지만 사용자가 고치기는 더 쉽습니다.",
    },
    {
      id: "1-29",
      type: "essay",
      prompt: `Explain the difference between a rule-based chatbot and a corpus-based chatbot.
Rule-based chatbot과 corpus-based chatbot의 차이를 설명하시오.

답안에는 rules, corpus, learning, data intensity, flexibility 중 최소 두 가지 이상을 포함하세요.`,
      rubric: [
        ["rule-based", "rule based", "규칙 기반", "handwritten rule", "수작업 규칙"],
        ["corpus-based", "corpus based", "코퍼스 기반", "corpus", "코퍼스"],
        ["learn", "learning", "학습"],
        ["manual", "manually", "직접 작성", "수동"],
        ["flexible", "flexibility", "유연"],
        ["large data", "much data", "많은 데이터", "대규모 데이터"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Rule-based chatbot은 사람이 미리 만든 규칙과 패턴에 따라 응답한다.
Corpus-based chatbot은 대화 corpus에서 입력-출력 매핑을 학습한다.
전자는 규칙 설계가 많이 필요하지만 데이터 의존성은 상대적으로 낮을 수 있고, 후자는 수작업 규칙을 줄이는 대신 많은 데이터가 필요하며 새로운 표현에 더 유연할 수 있다.`,
      explanation:
        "핵심은 규칙 중심 vs 데이터 중심, 수작업 규칙 vs 학습, 그리고 데이터 요구량과 유연성의 차이를 구분하는 것입니다.",
    },
    {
      id: "1-30",
      type: "essay",
      prompt: `Define the following four concepts and explain how they differ: Domain, Intent, Slot, Value.
다음 네 개념을 정의하고 차이를 설명하시오: Domain, Intent, Slot, Value.

예시 발화:
"Book a flight from Seoul to Tokyo tomorrow morning."
"내일 아침 서울에서 도쿄로 가는 비행기를 예약해줘."`,
      rubric: [
        ["domain", "도메인", "travel", "flight booking", "여행"],
        ["intent", "의도", "book flight", "예약"],
        ["slot", "슬롯", "information field", "정보 항목"],
        ["value", "값", "seoul", "tokyo", "tomorrow morning", "실제 값"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Domain은 큰 분야로, 이 예시에서는 travel 또는 flight booking이다.
Intent는 사용자가 하려는 구체적 행동으로, 비행기 예약하기이다.
Slot은 시스템이 알아야 하는 정보 항목으로 출발지, 도착지, 날짜, 시간 같은 필드다.
Value는 그 slot을 채우는 실제 값으로 Seoul, Tokyo, tomorrow morning이 해당한다.`,
      explanation:
        "시험에서는 Domain과 Intent를 헷갈리거나 Slot과 Value를 뒤집는 실수가 자주 나옵니다.",
    },
    {
      id: "1-31",
      type: "essay",
      prompt: `Fill in the table comparing IR-based chatbots and Encoder-Decoder chatbots.
IR-based chatbot과 Encoder-Decoder chatbot을 비교하는 표를 채우시오.

비교 항목:
- Does it generate from scratch?
- Main mechanism
- Strength
- Weakness
- Example failure`,
      rubric: [
        ["ir-based", "information retrieval", "검색", "retrieve", "선택"],
        ["encoder-decoder", "encoder decoder", "생성", "generate"],
        ["from scratch", "새로 생성"],
        ["generic response", "반복적", "일반적인 응답", "i don't know"],
        ["similar", "most similar", "유사한", "corpus response"],
      ],
      minimumMatches: 3,
      sampleAnswer: `IR-based chatbot:
- Does it generate from scratch? 아니오
- Main mechanism: 코퍼스에서 가장 적절한 응답을 검색/선택
- Strength: 이미 있는 응답을 쓰므로 비교적 안정적이고 문장이 자연스러울 수 있음
- Weakness: 코퍼스에 없는 상황에 약하고 엉뚱한 응답을 고를 수 있음
- Example failure: 비슷해 보이는 다른 문맥의 답을 잘못 반환

Encoder-Decoder chatbot:
- Does it generate from scratch? 예
- Main mechanism: 입력 sequence를 encoding하고 출력 sequence를 decoding하여 생성
- Strength: 새로운 문장을 만들 수 있어 더 유연함
- Weakness: generic response, 반복, 문맥 일관성 부족
- Example failure: "I don't know" 같은 안전하지만 지루한 답을 반복`,
      explanation:
        "핵심 대비 포인트는 검색형은 선택, 생성형은 decoding이라는 차이와 generic response problem입니다.",
    },
    {
      id: "1-32",
      type: "essay",
      prompt: `Explain the role of each component in text-based Dialogue State Architecture.
Text-based Dialogue State Architecture에서 각 구성요소의 역할을 설명하시오.

반드시 포함할 요소:
- NLU
- Dialogue State Tracker
- Dialogue Policy
- NLG`,
      rubric: [
        ["nlu", "natural language understanding", "의도", "slot", "입력 분석"],
        ["dialogue state tracker", "dst", "상태 추적", "state", "slot 유지"],
        ["dialogue policy", "정책", "next action", "다음 행동 결정"],
        ["nlg", "natural language generation", "문장 생성", "표현"],
      ],
      minimumMatches: 3,
      sampleAnswer: `NLU는 사용자 입력에서 domain, intent, slot/value를 추출한다.
Dialogue State Tracker는 지금까지 채워진 slot과 현재 대화 상태를 유지하고 업데이트한다.
Dialogue Policy는 현재 state를 바탕으로 다음 시스템 행동이나 dialogue act를 결정한다.
NLG는 그 내부 행동을 사용자가 읽을 수 있는 자연어 문장으로 바꾼다.`,
      explanation:
        "시험에서는 DST와 Policy를 뒤집는 실수가 가장 흔합니다. DST는 유지, Policy는 결정입니다.",
    },
    {
      id: "1-33",
      type: "essay",
      prompt: `What is a semantic grammar, and how can it be used for slot filling?
Semantic grammar란 무엇이며, slot filling에 어떻게 사용될 수 있는가?

"at 7 am" 또는 "at 3 pm" 같은 시간 표현 예시를 사용하시오.`,
      rubric: [
        ["semantic grammar", "의미 문법", "slot name", "semantic entity"],
        ["time", "시간", "at 7 am", "at 3 pm"],
        ["slot filling", "slot", "value", "추출", "채운다"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Semantic grammar는 왼쪽에 의미 범주를 두고 오른쪽에 그 범주를 표현하는 언어 패턴을 두는 문법이다.
예를 들어 TIME -> at HOUR AMPM 같은 규칙으로 "at 7 am", "at 3 pm"을 TIME 표현으로 파싱할 수 있다.
이렇게 인식한 결과를 이용해 시간 관련 slot에 해당 value를 채울 수 있다.`,
      explanation:
        "중요한 포인트는 semantic grammar가 의미 범주와 가능한 표현을 연결해서 slot filling에 쓰인다는 점입니다.",
    },
    {
      id: "1-34",
      type: "essay",
      prompt: `Explain how ELIZA's memory stack can make the system appear more context-aware than it really is.
ELIZA의 memory stack이 어떻게 실제보다 더 문맥을 이해하는 것처럼 보이게 만드는지 설명하시오.

답안에는 다음 두 가지를 포함하세요.
- keyword "my"가 등장했을 때 무슨 일이 일어나는가
- 나중에 keyword가 매칭되지 않았을 때 무슨 일이 일어나는가`,
      rubric: [
        ["my", "\"my\"", "my keyword"],
        ["store", "stored", "memory", "저장", "stack"],
        ["transform", "변환", "your"],
        ["no keyword", "keyword가 없", "later", "나중"],
        ["default response", "please go on", "pop memory", "꺼내서 사용"],
      ],
      minimumMatches: 3,
      sampleAnswer: `ELIZA는 "my" 같은 특정 keyword가 등장하면 입력을 변환한 뒤 그 결과를 memory stack에 저장할 수 있다.
예를 들면 "my ..."에서 나온 변형 응답을 나중을 위해 보관한다.
그 뒤 다른 발화에서 keyword가 잡히지 않으면 단순 default response를 하거나, 저장해둔 memory를 꺼내 응답할 수 있다.
그래서 실제로 깊은 문맥 이해가 없어도 이전 맥락을 기억하는 것처럼 보이게 된다.`,
      explanation:
        "핵심은 진짜 의미 이해가 아니라 저장해둔 변환 결과를 적절한 타이밍에 재사용한다는 점입니다.",
    },
    {
      id: "1-35",
      type: "essay",
      prompt: `Compare explicit confirmation and implicit confirmation in terms of naturalness, efficiency, and ease of correction.
Explicit confirmation과 implicit confirmation을 자연스러움, 효율성, 오류 수정 용이성 관점에서 비교하시오.`,
      rubric: [
        ["explicit confirmation", "명시적 확인", "directly asks", "직접 묻"],
        ["implicit confirmation", "암시적 확인", "next question", "다음 질문에 포함"],
        ["natural", "자연스럽", "efficient", "효율"],
        ["easy to correct", "고치기 쉽", "오류 수정", "수정 용이"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Explicit confirmation은 시스템 이해가 맞는지 직접 묻는 방식이라 덜 자연스럽고 대화가 길어질 수 있지만, 사용자가 오류를 고치기는 쉽다.
Implicit confirmation은 다음 질문 안에 이해한 내용을 자연스럽게 포함하는 방식이라 더 자연스럽고 효율적이지만, 잘못 이해했을 때 사용자가 수정하기는 상대적으로 어렵다.`,
      explanation:
        "시험 포인트는 implicit이 더 자연스럽고 효율적이며, explicit이 수정은 더 쉽다는 대비입니다.",
    },
    {
      id: "1-36",
      type: "essay",
      prompt: `ELIZA Rule Application
ELIZA 규칙 적용 문제

단순화된 규칙:
- I am (.*) -> HOW LONG HAVE YOU BEEN \\1?
- (.*) my (.*) -> YOUR \\2
- (.*) always (.*) -> CAN YOU THINK OF A SPECIFIC EXAMPLE?
- No keyword -> PLEASE GO ON 또는 memory 사용

입력 순서:
1. "My professor always ignores my questions."
2. "I am frustrated."
3. "Maybe this class is the problem."

다음에 답하시오.
(a) 1번 발화에서 어떤 keyword들이 감지될 수 있는가?
(b) 더 구체적이거나 우선순위가 높은 규칙을 우선한다면 어떤 응답이 선호되는가?
(c) 1번 발화로부터 어떤 종류의 memory response가 저장될 수 있는가?
(d) 3번 발화에서 keyword가 매칭되지 않으면 ELIZA는 어떤 두 전략을 사용할 수 있는가?`,
      rubric: [
        ["my", "always"],
        ["specific", "ranked", "always rule", "can you think of a specific example"],
        ["memory", "your questions", "stored response", "저장"],
        ["please go on", "default response", "pop memory", "memory response"],
      ],
      minimumMatches: 3,
      sampleAnswer: `(a) utterance 1에서는 "my"와 "always"가 감지될 수 있다.
(b) 더 구체적이거나 더 높은 rank의 규칙을 우선한다면 "always" 규칙이 선택되어 "CAN YOU THINK OF A SPECIFIC EXAMPLE?" 같은 응답이 선호될 수 있다.
(c) "my" 규칙에서 나온 변형 결과, 예를 들어 "YOUR questions" 같은 memory response가 저장될 수 있다.
(d) utterance 3에서 keyword가 없으면 ELIZA는 "PLEASE GO ON" 같은 default response를 하거나, 저장해둔 memory response를 꺼내 사용할 수 있다.`,
      explanation:
        "이 문제는 keyword detection, ranking, memory stack, fallback 전략을 한 번에 묶어 확인하는 유형입니다.",
    },
    {
      id: "1-37",
      type: "essay",
      prompt: `Slot Filling and Dialogue Policy
Slot Filling과 Dialogue Policy 문제

사용자 발화:
"I want to reserve a hotel in Busan for two nights starting this Friday."
"이번 주 금요일부터 2박 동안 부산 호텔을 예약하고 싶어요."

호텔 예약 frame의 slot:
- Destination city
- Check-in date
- Number of nights
- Number of guests
- Room type

다음에 답하시오.
(a) 가능한 domain은 무엇인가?
(b) 가능한 intent는 무엇인가?
(c) 어떤 slot이 채워졌고 각각의 value는 무엇인가?
(d) 아직 채워지지 않은 slot은 무엇인가?
(e) Dialogue Policy는 다음에 무엇을 해야 하는가?`,
      rubric: [
        ["hotel booking", "travel", "호텔 예약", "도메인"],
        ["reserve hotel", "book hotel", "예약", "intent"],
        ["busan", "destination city", "부산"],
        ["this friday", "check-in date", "금요일"],
        ["two nights", "number of nights", "2박"],
        ["number of guests", "room type", "unfilled", "남은 slot"],
        ["ask", "request", "물어본다", "다음 행동"],
      ],
      minimumMatches: 4,
      sampleAnswer: `(a) domain은 hotel booking 또는 더 넓게는 travel이다.
(b) intent는 호텔 예약하기이다.
(c) 채워진 slot/value는 Destination city=Busan, Check-in date=this Friday, Number of nights=2이다.
(d) Number of guests와 Room type은 아직 비어 있다.
(e) Dialogue Policy는 다음에 남은 필수 slot, 예를 들어 투숙 인원이나 객실 유형을 물어봐야 한다.`,
      explanation:
        "이 문제는 NLU가 추출하는 정보와 Dialogue Policy가 다음에 무엇을 해야 하는지를 구분하는 연습입니다.",
    },
    {
      id: "1-38",
      type: "essay",
      prompt: `Dialogue State Tracker vs Dialogue Policy
Dialogue State Tracker와 Dialogue Policy 구분 문제

대화:
System: "What kind of restaurant are you looking for?"
User: "I want an expensive Mexican restaurant near Ansan."
System: "So, an expensive Mexican restaurant near Ansan?"
User: "Actually, not Mexican. I want Turkish food."

다음에 답하시오.
(a) 첫 번째 사용자 발화 이후 DST가 유지해야 하는 slot value는?
(b) 시스템의 "So, ..." 발화는 어떤 dialogue act인가?
(c) 사용자가 "not Mexican, Turkish"라고 한 뒤 DST는 state를 어떻게 업데이트해야 하는가?
(d) Dialogue Policy는 다음에 무엇을 해야 하는가?`,
      rubric: [
        ["expensive", "mexican", "near ansan", "slot value"],
        ["confirmation", "explicit confirmation", "confirm", "dialogue act"],
        ["turkish", "replace mexican", "업데이트", "state"],
        ["next", "ask", "continue", "search", "정책"],
      ],
      minimumMatches: 3,
      sampleAnswer: `(a) 첫 사용자 발화 이후 DST는 price=expensive, cuisine=Mexican, location=near Ansan 같은 값을 유지해야 한다.
(b) 시스템의 "So, an expensive Mexican restaurant near Ansan?"는 확인을 요구하는 confirmation act이며, 보통 explicit confirmation으로 볼 수 있다.
(c) 사용자가 수정하면 DST는 cuisine 값을 Mexican에서 Turkish로 바꾸고, price와 location은 유지해야 한다.
(d) Dialogue Policy는 수정된 상태를 반영해 다음 정보를 더 묻거나, 조건이 충분하면 Turkish 음식점을 추천하는 방향으로 진행해야 한다.`,
      explanation:
        "DST는 상태를 업데이트하고, Policy는 그 상태를 바탕으로 다음 행동을 정한다는 점이 핵심입니다.",
    },
    {
      id: "1-39",
      type: "essay",
      prompt: `Finite-State Dialogue Manager Limitation
Finite-State Dialogue Manager 한계 문제

고정 순서:
1. Ask departure city
2. Ask destination city
3. Ask departure date
4. Ask one-way or round trip
5. Ask return date if round trip
6. Confirm and book

사용자 첫 발화:
"I need a round-trip ticket from Seoul to Tokyo, leaving March 10 and returning March 15."
"3월 10일 서울에서 도쿄로 가고, 3월 15일 돌아오는 왕복 항공권이 필요해요."

다음에 답하시오.
(a) 왜 단순 finite-state dialogue manager에게 이 입력이 어려울 수 있는가?
(b) 사용자가 고정 순서와 다르게 이미 제공한 정보는 무엇인가?
(c) DST 기반 시스템은 이를 어떻게 더 잘 처리할 수 있는가?
(d) finite-state system이 지원할 수 있는 universal command 하나는 무엇인가?`,
      rubric: [
        ["fixed order", "고정 순서", "out of order", "순서 밖"],
        ["seoul", "tokyo", "march 10", "march 15", "round trip", "왕복"],
        ["dst", "update state", "한 번에 추출", "남은 것만 묻"],
        ["help", "start over", "quit", "universal command"],
      ],
      minimumMatches: 3,
      sampleAnswer: `(a) 단순 finite-state manager는 정해진 순서대로 한 항목씩 묻는 구조라서, 사용자가 여러 slot을 한 번에 그리고 순서와 다르게 말하면 처리하기 어렵다.
(b) 사용자는 이미 departure city=Seoul, destination city=Tokyo, departure date=March 10, trip type=round-trip, return date=March 15를 모두 제공했다.
(c) DST 기반 시스템은 발화에서 제공된 slot/value를 순서와 무관하게 한 번에 추출해 state를 채우고, 남은 정보만 묻거나 곧바로 확인 단계로 갈 수 있다.
(d) 예를 들어 Help 또는 Start over 같은 universal command를 둘 수 있다.`,
      explanation:
        "이 문제는 finite-state의 경직성과 DST 기반 접근의 유연성을 비교하는 대표 문제입니다.",
    },
    {
      id: "1-40",
      type: "essay",
      prompt: `Confidence Threshold and Error Handling
Confidence threshold와 오류 처리 문제

사례:
- A: "I want to fly to Tokyo tomorrow." -> Destination=Tokyo, Date=tomorrow, Confidence=0.94
- B: "I need to be there for my party thing." -> Date=unknown, Destination=unknown, Confidence=0.22
- C: "Seoul, I guess." -> Origin=Seoul, Confidence=0.58
- D: "Book it for Friday morning." -> Date=Friday, Time=morning, Confidence=0.76

정책:
- Very low confidence -> Rejection
- Slightly above minimum threshold -> Explicit confirmation
- Comfortably above threshold -> Implicit confirmation
- Very high confidence -> No confirmation

다음에 답하시오.
(a) 어떤 case가 reject될 가능성이 가장 높은가?
(b) 어떤 case가 no confirmation에 가장 적절한가?
(c) explicit confirmation이 적절한 case 하나와 가능한 시스템 응답
(d) implicit confirmation이 적절한 case 하나와 가능한 시스템 응답
(e) 반복적인 rejection 이후 progressive prompting이 유용한 이유`,
      rubric: [
        ["case b", "0.22", "reject", "rejection"],
        ["case a", "0.94", "no confirmation"],
        ["case c", "0.58", "explicit confirmation", "did you say", "맞나요"],
        ["case d", "0.76", "implicit confirmation", "friday morning", "금요일 아침"],
        ["progressive prompting", "more specific guidance", "구체적인 안내", "format"],
      ],
      minimumMatches: 4,
      sampleAnswer: `(a) 가장 reject될 가능성이 높은 것은 B이다. confidence가 0.22로 매우 낮고 핵심 slot도 unknown이다.
(b) no confirmation에 가장 적절한 것은 A이다. 0.94로 매우 높기 때문이다.
(c) explicit confirmation은 C에 적절하다. 예: "Did you say your departure city is Seoul?" / "출발지가 서울이라는 뜻인가요?"
(d) implicit confirmation은 D에 적절하다. 예: "Okay, Friday morning. Where would you like to go?" / "좋아요, 금요일 아침이군요. 어디로 가시나요?"
(e) rejection이 반복되면 progressive prompting은 사용자가 어떤 형식으로 말해야 하는지 더 구체적으로 안내해 같은 실패를 줄이는 데 도움이 된다.`,
      explanation:
        "confidence threshold 문제는 낮음=reject, 중간=explicit, 꽤 높음=implicit, 매우 높음=no confirm 흐름을 정확히 연결하는지가 중요합니다.",
    },
  ],
};
