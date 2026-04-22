# 문제 파일 형식

각 장 파일(`ch1.js` ~ `ch9.js`)의 `questions` 배열에 아래 형식으로 문제를 추가하면 됩니다.

```js
{
  id: "1-1",
  type: "multiple",
  prompt: "자연어처리의 약자로 맞는 것은?",
  choices: ["NPL", "NLP", "LPN", "PNL"],
  correctIndex: 1,
  explanation: "NLP는 Natural Language Processing의 약자입니다."
}
```

```js
{
  id: "1-2",
  type: "blank",
  prompt: "NLP는 _____ Language Processing의 약자이다.",
  answers: ["Natural"],
  explanation: "Natural Language Processing입니다."
}
```

```js
{
  id: "1-3",
  type: "tf",
  prompt: "형태소 분석은 자연어처리의 한 분야이다.",
  answer: true,
  explanation: "형태소 분석은 자연어처리의 핵심 전처리 작업 중 하나입니다."
}
```

```js
{
  id: "1-4",
  type: "numeric",
  prompt: "정확도가 0.8이고 전체 문제 수가 50개라면 맞힌 문제 수는?",
  answer: 40,
  tolerance: 0,
  explanation: "50 x 0.8 = 40입니다."
}
```

```js
{
  id: "1-5",
  type: "multiSelect",
  prompt: "다음 중 모두 고르시오.",
  choices: ["보기 1", "보기 2", "보기 3", "보기 4"],
  correctIndexes: [0, 2, 3],
  explanation: "1, 3, 4번이 모두 정답입니다."
}
```

```js
{
  id: "1-6",
  type: "essay",
  prompt: "Dialogue Policy와 Dialogue State Tracker의 차이를 설명하시오.",
  rubric: [
    ["dialogue state tracker", "dst", "상태 추적"],
    ["dialogue policy", "정책", "다음 행동 결정"],
    ["state", "slot", "상태 유지"],
    ["next action", "response", "다음 시스템 행동"]
  ],
  minimumMatches: 3,
  sampleAnswer:
    "DST는 지금까지 채워진 slot과 현재 대화 상태를 유지하고, Dialogue Policy는 그 상태를 바탕으로 다음 시스템 행동을 결정한다.",
  explanation:
    "서술형은 키워드 기준 참고 채점이며, 제출 후 모범답안과 비교할 수 있습니다."
}
```

메모:

- `multiple`: `choices`와 `correctIndex`를 사용합니다. `correctIndex`는 0부터 시작합니다.
- `multiSelect`: `choices`와 `correctIndexes`를 사용합니다. 사용자가 정답 보기를 모두 골라야 맞게 처리됩니다.
- `blank`: `answers` 배열에 허용할 정답들을 넣습니다.
- `tf`: `answer`에 `true` 또는 `false`를 넣습니다.
- `numeric`: `answer`에 숫자, 필요하면 `tolerance`에 허용 오차를 넣습니다.
- `essay`: `rubric`에 키워드 그룹, `minimumMatches`에 최소 일치 그룹 수, `sampleAnswer`에 모범답안을 넣습니다.
- 모든 문제는 `explanation`을 넣어두면 채점 직후 해설이 같이 표시됩니다.
