window.quizChapterData = window.quizChapterData || {};
window.quizChapterData[8] = {
  title: "8장 Logistic Regression",
  questions: [
    {
      id: "8-1",
      type: "multiple",
      prompt: `Q1. Which of the following is NOT one of the four main components of a supervised machine learning system for text classification?
다음 중 지도학습 기반 텍스트 분류 시스템의 네 가지 주요 구성요소가 아닌 것은?`,
      choices: [
        "Feature representation of the input / 입력을 feature vector로 표현",
        "Classification function such as sigmoid or softmax / sigmoid나 softmax 같은 분류 함수",
        "Objective or loss function such as cross-entropy loss / cross-entropy loss 같은 목적 함수",
        "Random deletion function that removes difficult training examples / 어려운 training example을 무작위로 삭제하는 함수",
      ],
      correctIndex: 3,
      explanation:
        "기본 구성요소는 feature representation, classification function, loss function, optimization function입니다.",
    },
    {
      id: "8-2",
      type: "multiple",
      prompt: `Q2. Which of the following best describes the role of a weight in binary logistic regression?
Binary logistic regression에서 weight의 역할을 가장 잘 설명한 것은?`,
      choices: [
        "It decides the order in which training examples are read. / training example을 읽는 순서를 결정한다.",
        "It indicates how important the corresponding feature is for classification. / 해당 feature가 분류에 얼마나 중요한지 나타낸다.",
        "It is always positive because features should always support the target class. / weight는 항상 양수이다.",
        "It replaces the bias term during training. / bias term을 대체한다.",
      ],
      correctIndex: 1,
      explanation:
        "weight는 해당 feature가 목표 class 점수를 얼마나 올리거나 내리는지를 나타냅니다.",
    },
    {
      id: "8-3",
      type: "multiple",
      prompt: `Q3. Which formula correctly represents the weighted sum in logistic regression?
Logistic regression에서 weighted sum을 올바르게 나타낸 공식은?`,
      choices: [
        "z = b + Σ_i w_i x_i",
        "z = σ(w · x + b)",
        "z = y - y_hat",
        "z = 1 / (1 + e^-y)",
      ],
      correctIndex: 0,
      explanation:
        "weighted sum z는 bias와 feature-weight 곱들의 합으로 계산합니다.",
    },
    {
      id: "8-4",
      type: "multiple",
      prompt: `Q4. Which of the following is NOT true about the sigmoid function?
Sigmoid 함수에 대한 설명 중 옳지 않은 것은?`,
      choices: [
        "It maps a real-valued number to a value between 0 and 1. / 실수값을 0과 1 사이 값으로 바꾼다.",
        "It is useful because its output can be interpreted as a probability. / 출력을 확률처럼 해석할 수 있다.",
        "It is differentiable, which is useful for learning. / 미분 가능하다.",
        "It outputs values from negative infinity to positive infinity. / 음의 무한대부터 양의 무한대까지 출력한다.",
      ],
      correctIndex: 3,
      explanation:
        "sigmoid 출력 범위는 0과 1 사이입니다.",
    },
    {
      id: "8-5",
      type: "multiple",
      prompt: `Q5. In binary logistic regression, suppose P(y=1|x)=0.73. What is P(y=0|x)?
Binary logistic regression에서 P(y=1|x)=0.73일 때 P(y=0|x)는?`,
      choices: ["0.73", "1.73", "0.27", "Cannot be determined"],
      correctIndex: 2,
      explanation:
        "binary classification에서는 P(y=0|x) = 1 - P(y=1|x) 입니다.",
    },
    {
      id: "8-6",
      type: "multiSelect",
      prompt: `Q6. Select all that apply. Which statements about cross-entropy loss are true?
모두 고르시오. Cross-entropy loss에 대한 설명 중 옳은 것은?`,
      choices: [
        "It is commonly used for classification tasks. / 분류 문제에서 자주 사용된다.",
        "It measures the distance between predicted and actual probability distributions. / 예측 분포와 실제 분포 사이의 차이를 측정한다.",
        "Training aims to maximize cross-entropy loss. / 학습의 목표는 cross-entropy loss를 최대화하는 것이다.",
        "If the model gives a very low probability to the correct class, the loss becomes large. / 정답 class에 낮은 확률을 주면 loss가 커진다.",
      ],
      correctIndexes: [0, 1, 3],
      explanation:
        "cross-entropy loss는 분류에서 널리 쓰이며, 정답 class 확률이 낮을수록 loss가 커집니다.",
    },
    {
      id: "8-7",
      type: "multiple",
      prompt: `Q7. Which statement best explains conditional maximum likelihood estimation in logistic regression?
Logistic regression에서 conditional maximum likelihood estimation을 가장 잘 설명한 것은?`,
      choices: [
        "Choose w and b so that the log probability of the true labels given the inputs is maximized. / 입력이 주어졌을 때 실제 정답의 log probability가 최대가 되도록 w와 b를 선택한다.",
        "Choose w and b so that the input feature values become smaller. / 입력 feature 값이 작아지도록 w와 b를 선택한다.",
        "Choose w and b so that all predicted labels are equally likely. / 모든 예측 label의 확률이 같아지도록 한다.",
        "Choose w and b to maximize the number of features. / feature 개수를 최대화한다.",
      ],
      correctIndex: 0,
      explanation:
        "conditional maximum likelihood는 P(y|x)를 크게 만드는 parameter를 찾는 관점입니다.",
    },
    {
      id: "8-8",
      type: "multiple",
      prompt: `Q8. Which of the following is NOT true about gradient descent?
Gradient descent에 대한 설명 중 옳지 않은 것은?`,
      choices: [
        "It tries to find parameters that minimize the loss. / loss를 최소화하는 parameter를 찾으려 한다.",
        "It moves in the opposite direction of the gradient. / gradient의 반대 방향으로 움직인다.",
        "For logistic regression, the loss function is convex according to the lecture. / logistic regression의 loss는 convex하다.",
        "It updates weights by moving in the same direction as the gradient to increase the loss. / gradient와 같은 방향으로 움직여 loss를 증가시킨다.",
      ],
      correctIndex: 3,
      explanation:
        "gradient descent는 loss를 줄이기 위해 gradient의 반대 방향으로 이동합니다.",
    },
    {
      id: "8-9",
      type: "multiple",
      prompt: `Q9. What does "stochastic" mean in stochastic gradient descent?
Stochastic gradient descent에서 stochastic이 의미하는 것은?`,
      choices: [
        "The model does not use a loss function. / loss function을 사용하지 않는다.",
        "The model updates parameters using one training instance at a time, often in random order. / training instance를 하나씩, 보통 랜덤 순서로 사용해 parameter를 업데이트한다.",
        "The model always chooses random labels as predictions. / 항상 라벨을 무작위로 예측한다.",
        "The sigmoid function is randomly changed during training. / sigmoid 함수가 무작위로 바뀐다.",
      ],
      correctIndex: 1,
      explanation:
        "SGD는 전체 배치가 아니라 example 하나씩 gradient를 계산하며 자주 랜덤 순서를 사용합니다.",
    },
    {
      id: "8-10",
      type: "multiple",
      prompt: `Q10. Which of the following correctly gives the gradient of logistic regression with respect to w_j?
Logistic regression에서 w_j에 대한 gradient를 올바르게 나타낸 것은?`,
      choices: [
        "∂L/∂w_j = (y_hat - y) x_j",
        "∂L/∂w_j = y - x_j",
        "∂L/∂w_j = σ(x_j)",
        "∂L/∂w_j = w_j + b",
      ],
      correctIndex: 0,
      explanation:
        "cross-entropy + sigmoid logistic regression에서 핵심 gradient 공식은 (y_hat - y)x_j 입니다.",
    },
    {
      id: "8-11",
      type: "multiple",
      prompt: `Q11. Which of the following model classifications is correct?
다음 모델 분류 중 올바른 것은?`,
      choices: [
        "Naive Bayes is discriminative, and Logistic Regression is generative. / Naive Bayes는 discriminative, Logistic Regression은 generative",
        "HMM is discriminative, and CRF is generative. / HMM은 discriminative, CRF는 generative",
        "Logistic Regression and CRF are discriminative models. / Logistic Regression과 CRF는 discriminative model이다.",
        "Naive Bayes and CRF are both generative models. / Naive Bayes와 CRF는 둘 다 generative model이다.",
      ],
      correctIndex: 2,
      explanation:
        "Logistic Regression과 CRF는 둘 다 P(y|x)를 직접 모델링하는 discriminative model입니다.",
    },
    {
      id: "8-12",
      type: "multiple",
      prompt: `Q12. Which of the following is NOT true about HMMs and CRFs?
HMM과 CRF에 대한 설명 중 옳지 않은 것은?`,
      choices: [
        "HMMs compute joint probabilities over observations and labels. / HMM은 observation과 label의 joint probability를 계산한다.",
        "CRFs compute conditional probabilities of label sequences given observation sequences. / CRF는 observation sequence가 주어졌을 때 label sequence의 conditional probability를 계산한다.",
        "CRFs can relax some independence assumptions compared to HMMs. / CRF는 HMM보다 일부 independence assumption을 완화할 수 있다.",
        "CRFs are generative models that compute P(x,y). / CRF는 P(x,y)를 계산하는 generative model이다.",
      ],
      correctIndex: 3,
      explanation:
        "CRF는 generative가 아니라 discriminative sequence model이며 P(label sequence | observation sequence)를 모델링합니다.",
    },
    {
      id: "8-13",
      type: "tf",
      prompt: `Q2-(1). The sigmoid function maps any real number to a value between 0 and 1, so it can be used to produce probabilities.
Sigmoid 함수는 어떤 실수든 0과 1 사이 값으로 바꾸므로 확률을 만들 때 사용할 수 있다.`,
      answer: true,
      explanation:
        "sigmoid 출력 범위는 0~1이라 binary probability로 해석할 수 있습니다.",
    },
    {
      id: "8-14",
      type: "tf",
      prompt: `Q2-(2). In binary logistic regression, P(y=0|x)=σ(w·x+b) and P(y=1|x)=1-σ(w·x+b).
Binary logistic regression에서 P(y=0|x)=σ(w·x+b), P(y=1|x)=1-σ(w·x+b)이다.`,
      answer: false,
      explanation:
        "일반적으로 P(y=1|x)=σ(w·x+b) 이고 P(y=0|x)=1-σ(w·x+b) 입니다.",
    },
    {
      id: "8-15",
      type: "tf",
      prompt: `Q2-(3). Gradient descent updates parameters in the opposite direction of the gradient because the gradient points toward increasing loss.
Gradient descent는 gradient가 loss가 증가하는 방향을 가리키기 때문에 그 반대 방향으로 parameter를 업데이트한다.`,
      answer: true,
      explanation:
        "gradient는 증가 방향, gradient descent update는 감소 방향입니다.",
    },
    {
      id: "8-16",
      type: "tf",
      prompt: `Q2-(4). If x_j=0, then the gradient (y_hat - y)x_j for w_j becomes 0.
x_j=0이면 w_j에 대한 gradient (y_hat - y)x_j는 0이 된다.`,
      answer: true,
      explanation:
        "feature value가 0이면 그 feature weight는 해당 example에서 업데이트에 영향을 주지 않습니다.",
    },
    {
      id: "8-17",
      type: "tf",
      prompt: `Q2-(5). A CRF is best described as a generative sequence model that computes P(sentence, tags).
CRF는 P(sentence, tags)를 계산하는 generative sequence model이다.`,
      answer: false,
      explanation:
        "CRF는 P(tags|sentence)를 계산하는 discriminative model입니다.",
    },
    {
      id: "8-18",
      type: "numeric",
      prompt: `Q3-(1). Compute z = w · x + b for the sarcasm example.
소수로 입력하시오.`,
      answer: 2.5,
      tolerance: 0.001,
      explanation:
        "z = -0.5 + 2.0(1) + (-1.0)(0) + 0.4(1) + 0.6(1) = 2.5 입니다.",
    },
    {
      id: "8-19",
      type: "numeric",
      prompt: `Q3-(2a). Compute P(y=1|x) when z=2.5 and σ(2.5)=0.92.
소수로 입력하시오.`,
      answer: 0.92,
      tolerance: 0.005,
      explanation:
        "P(y=1|x)=σ(z)=σ(2.5)=0.92 입니다.",
    },
    {
      id: "8-20",
      type: "numeric",
      prompt: `Q3-(2b). Compute P(y=0|x) for the same example.
소수로 입력하시오.`,
      answer: 0.08,
      tolerance: 0.005,
      explanation:
        "P(y=0|x) = 1 - 0.92 = 0.08 입니다.",
    },
    {
      id: "8-21",
      type: "blank",
      prompt: `Q3-(2c). If the decision boundary is 0.5, what is the predicted class?
정답은 y=1 또는 sarcastic 형태로 입력하시오.`,
      answers: ["y=1", "1", "sarcastic", "y = 1"],
      explanation:
        "0.92 > 0.5 이므로 predicted class는 y=1, 즉 sarcastic 입니다.",
    },
    {
      id: "8-22",
      type: "numeric",
      prompt: `Q3-(3). The true label is y=1. Compute the binary cross-entropy loss using natural log.
Given ln(0.92) = -0.083.
소수로 입력하시오.`,
      answer: 0.083,
      tolerance: 0.01,
      explanation:
        "정답이 y=1이면 loss = -ln(y_hat) = -ln(0.92) = 0.083 입니다.",
    },
    {
      id: "8-23",
      type: "essay",
      prompt: `Q3-(4). When y_hat = 0.92 and y = 1, compute the gradient vector for
[w_;-<, w_:), w_I'm, w_exam, b]

Use:
∂L/∂w_j = (y_hat - y)x_j
∂L/∂b = y_hat - y`,
      rubric: [
        ["-0.08"],
        ["0"],
        ["-0.08 0 -0.08 -0.08 -0.08", "[-0.08, 0, -0.08, -0.08, -0.08]"],
      ],
      minimumMatches: 2,
      sampleAnswer: `y_hat - y = 0.92 - 1 = -0.08

Gradients:
w_;-< = (-0.08)(1) = -0.08
w_:) = (-0.08)(0) = 0
w_I'm = (-0.08)(1) = -0.08
w_exam = (-0.08)(1) = -0.08
b = -0.08

Gradient vector:
[-0.08, 0, -0.08, -0.08, -0.08]`,
      explanation:
        "feature value가 0인 :) 항만 gradient가 0이고, 나머지는 모두 -0.08입니다.",
    },
    {
      id: "8-24",
      type: "essay",
      prompt: `Q3-(5). With learning rate η = 0.1, compute the new parameter vector after one SGD step.
Current parameter vector:
[2.0, -1.0, 0.4, 0.6, -0.5]

Use:
θ_new = θ_old - ηg`,
      rubric: [
        ["2.008"],
        ["-1.0"],
        ["0.408"],
        ["0.608"],
        ["-0.492"],
      ],
      minimumMatches: 4,
      sampleAnswer: `g = [-0.08, 0, -0.08, -0.08, -0.08]
0.1g = [-0.008, 0, -0.008, -0.008, -0.008]

θ_new = [2.0, -1.0, 0.4, 0.6, -0.5] - [-0.008, 0, -0.008, -0.008, -0.008]
      = [2.008, -1.0, 0.408, 0.608, -0.492]`,
      explanation:
        "gradient가 음수인 항들은 update 후 값이 조금 커집니다.",
    },
    {
      id: "8-25",
      type: "essay",
      prompt: `Q3-(6). In the example, the feature "Contains :)" has value 0. Explain why its weight is not updated.`,
      rubric: [
        ["x_j = 0", "feature value is 0"],
        ["gradient is 0", "(y_hat - y)x_j = 0"],
      ],
      minimumMatches: 2,
      sampleAnswer: `The feature value for "Contains :)" is 0, so its gradient is (y_hat - y)x_j = (-0.08)(0) = 0.
Because the gradient is 0, that weight does not change in this SGD step.`,
      explanation:
        "해당 example에 등장하지 않은 feature는 그 step의 gradient에 기여하지 않습니다.",
    },
    {
      id: "8-26",
      type: "essay",
      prompt: `Q4-(1). Fill in the blanks of the SGD algorithm.

θ ← 0

Repeat until convergence:
    For each training instance (x(i), y(i)) in random order:
        g ← ____________________________
        θ ← ____________________________

return θ`,
      rubric: [
        ["∇l", "gradient", "nabla"],
        ["θ - ηg", "theta - eta g", "theta ← theta - eta g"],
      ],
      minimumMatches: 2,
      sampleAnswer: `g ← ∇L(f(x(i); θ), y(i))
θ ← θ - ηg`,
      explanation:
        "SGD는 example 하나에 대한 gradient를 구한 뒤 θ ← θ - ηg 로 업데이트합니다.",
    },
    {
      id: "8-27",
      type: "essay",
      prompt: `Q4-(2). Write the four main components of a supervised text classification system and explain the role of each in one sentence.`,
      rubric: [
        ["feature representation", "feature vector"],
        ["classification function", "sigmoid", "softmax"],
        ["loss function", "cross entropy"],
        ["optimization function", "sgd", "gradient descent"],
      ],
      minimumMatches: 4,
      sampleAnswer: `1. Feature representation: convert the input text into a numeric feature vector.
2. Classification function: map the features to class scores or probabilities, for example with sigmoid or softmax.
3. Loss function: measure how wrong the prediction is, for example with cross-entropy loss.
4. Optimization function: update the parameters to reduce the loss, for example with gradient descent or SGD.`,
      explanation:
        "이 네 구성요소가 함께 있어야 입력 표현, 예측, 오차 측정, 학습 업데이트가 모두 완성됩니다.",
    },
    {
      id: "8-28",
      type: "essay",
      prompt: `Q4-(3). Explain why conditional maximum likelihood estimation in logistic regression is closely connected to cross-entropy loss.`,
      rubric: [
        ["maximize log probability of true labels", "maximize likelihood"],
        ["negative log likelihood", "negative log"],
        ["cross entropy loss", "minimize loss"],
      ],
      minimumMatches: 2,
      sampleAnswer: `Logistic regression tries to maximize the conditional likelihood of the true labels given the inputs.
If we take the negative log of that likelihood, we get the negative log-likelihood objective.
For classification, this objective is exactly the cross-entropy loss that we minimize during training.`,
      explanation:
        "정답 label 확률을 크게 만드는 것과 negative log likelihood, 즉 cross-entropy loss를 작게 만드는 것은 같은 목표를 다른 형태로 쓴 것입니다.",
    },
    {
      id: "8-29",
      type: "essay",
      prompt: `Q4-(4). In gradient descent, why is it important that the logistic regression loss function is convex?`,
      rubric: [
        ["single global minimum", "하나의 전역 최소점"],
        ["more stable optimization", "안정적 학습"],
        ["gradient descent can find the minimum", "minimum 찾기 쉬움"],
      ],
      minimumMatches: 2,
      sampleAnswer: `If the loss is convex, it has a single global minimum rather than many bad local minima.
That makes optimization more stable and means gradient descent can reliably move toward the minimum.`,
      explanation:
        "convex loss는 gradient descent 관점에서 학습을 더 예측 가능하고 안정적으로 만들어 줍니다.",
    },
    {
      id: "8-30",
      type: "essay",
      prompt: `Q5-(1). For the instances below, write the predicted label at boundary 0.5 and say whether each prediction is correct.

A: y=1, P(y=1|x)=0.90
B: y=1, P(y=1|x)=0.55
C: y=0, P(y=1|x)=0.70
D: y=0, P(y=1|x)=0.20
E: y=1, P(y=1|x)=0.40`,
      rubric: [
        ["a 1 correct", "a: 1 correct"],
        ["b 1 correct", "b: 1 correct"],
        ["c 1 wrong", "c: 1 wrong"],
        ["d 0 correct", "d: 0 correct"],
        ["e 0 wrong", "e: 0 wrong"],
      ],
      minimumMatches: 4,
      sampleAnswer: `A -> predicted 1, correct
B -> predicted 1, correct
C -> predicted 1, wrong
D -> predicted 0, correct
E -> predicted 0, wrong`,
      explanation:
        "boundary 0.5에서는 0.5보다 큰 확률만 y=1로 예측합니다.",
    },
    {
      id: "8-31",
      type: "blank",
      prompt: `Q5-(2). Among A, C, and E, which instance has the largest cross-entropy loss?
정답은 A, C, E 중 하나로 입력하시오.`,
      answers: ["C", "c"],
      explanation:
        "C는 실제 y=0인데 y=1에 0.70을 주었으므로 정답 class 확률은 0.30뿐이라 loss가 가장 큽니다.",
    },
    {
      id: "8-32",
      type: "essay",
      prompt: `Q5-(3). If the decision boundary changes to 0.7 and we predict y=1 only when P(y=1|x) > 0.7, what are the predicted labels for A, B, C, D, and E?`,
      rubric: [
        ["a 1", "a: 1"],
        ["b 0", "b: 0"],
        ["c 0", "c: 0"],
        ["d 0", "d: 0"],
        ["e 0", "e: 0"],
      ],
      minimumMatches: 4,
      sampleAnswer: `A -> 1
B -> 0
C -> 0
D -> 0
E -> 0`,
      explanation:
        "문제 조건이 P(y=1|x) > 0.7 이므로 C의 0.70도 y=1이 아니라 y=0으로 분류됩니다.",
    },
    {
      id: "8-33",
      type: "essay",
      prompt: `Q5-(4). Instance C has P(y=1|x)=0.70 but the true label is y=0. Explain why the loss is large.`,
      rubric: [
        ["true label is 0", "실제 정답은 y=0"],
        ["probability of correct class is 0.30", "1 - 0.70 = 0.30"],
        ["low probability on the correct class", "정답 class에 낮은 확률"],
      ],
      minimumMatches: 2,
      sampleAnswer: `For instance C, the true label is y=0, so the probability assigned to the correct class is 1 - 0.70 = 0.30.
That is a low probability for the true class, so the cross-entropy loss becomes large.`,
      explanation:
        "cross-entropy는 정답 class에 낮은 확률이 주어질수록 크게 벌점을 줍니다.",
    },
    {
      id: "8-34",
      type: "essay",
      prompt: `Q6-(1). Fill in the model comparison table for:
Naive Bayes, Logistic Regression, HMM, CRF

For each model, give:
1. Label type
2. Model type
3. Probability type`,
      rubric: [
        ["naive bayes", "individual label", "generative", "p(x|y)p(y)", "p(x,y)"],
        ["logistic regression", "individual label", "discriminative", "p(y|x)"],
        ["hmm", "sequence", "generative", "p(labels, observations)"],
        ["crf", "sequence", "discriminative", "p(label sequence|observation sequence)", "p(y|x)"],
      ],
      minimumMatches: 3,
      sampleAnswer: `Naive Bayes: individual label / generative / P(x|y)P(y) or P(x,y)
Logistic Regression: individual label / discriminative / P(y|x)
HMM: sequence of labels / generative / P(labels, observations)
CRF: sequence of labels / discriminative / P(label sequence | observation sequence)`,
      explanation:
        "Naive Bayes와 HMM은 generative, Logistic Regression과 CRF는 discriminative라는 축을 기억하면 정리하기 쉽습니다.",
    },
    {
      id: "8-35",
      type: "essay",
      prompt: `Q6-(2). Write the following formulas:
1. Logistic regression weighted sum z
2. Sigmoid function
3. Gradient descent update
4. Gradient of logistic regression with respect to w_j`,
      rubric: [
        ["z = w", "w·x", "sum_i w_i x_i + b"],
        ["1/(1+e", "sigmoid", "σ(z)"],
        ["θ", "- η", "gradient descent"],
        ["(y_hat - y)x_j", "∂l/∂w_j"],
      ],
      minimumMatches: 3,
      sampleAnswer: `z = w · x + b
σ(z) = 1 / (1 + e^(-z))
θ_(t+1) = θ_t - η∇L
∂L/∂w_j = (y_hat - y)x_j`,
      explanation:
        "8장의 계산 문제는 이 네 공식을 중심으로 거의 모두 풀 수 있습니다.",
    },
    {
      id: "8-36",
      type: "essay",
      prompt: `Q6-(3). In one sentence, explain what a positive-weight feature and a negative-weight feature mean in logistic regression.`,
      rubric: [
        ["positive weight", "목표 class 가능성을 높인다", "increase the score"],
        ["negative weight", "목표 class 가능성을 낮춘다", "decrease the score"],
      ],
      minimumMatches: 2,
      sampleAnswer: `A positive-weight feature raises the score for the target class when the feature is present, while a negative-weight feature lowers the score for the target class when it is present.`,
      explanation:
        "weight의 부호는 방향, 절댓값은 영향력의 크기를 나타낸다고 보면 됩니다.",
    },
  ],
};
