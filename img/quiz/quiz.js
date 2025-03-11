const data = [
    {
        id: 1,
        question: "What is your name?",
        answers: [
            {answer: "Amal", isCorrect: false},
            {answer: "Saman", isCorrect: true},
            {answer: "Nihal", isCorrect: false},
            {answer: "Gune", isCorrect: false},
        ],
    },
    {
        id: 2,
        question: "What is your age?",
        answers: [
            {answer: "13", isCorrect: false},
            {answer: "21", isCorrect: false},
            {answer: "18", isCorrect: true},
            {answer: "75", isCorrect: false},
        ],
    },
    {
        id: 1,
        question: "Where do you live?",
        answers: [
            {answer: "Colombo", isCorrect: false},
            {answer: "Gampaha", isCorrect: false},
            {answer: "Kurunegala", isCorrect: false},
            {answer: "Pure", isCorrect: true},
        ],
    },
    {
        id: 2,
        question: "What is your job?",
        answers: [
            {answer: "Teacher", isCorrect: false},
            {answer: "Doctor", isCorrect: true},
            {answer: "Engineer", isCorrect: false},
            {answer: "Businessman", isCorrect: false},
        ],
    },
    {
        id: 1,
        question: "What is your hobby?",
        answers: [
            {answer: "Playing", isCorrect: true},
            {answer: "Reading", isCorrect: false},
            {answer: "Sleeping", isCorrect: false},
            {answer: "Riding", isCorrect: false},
        ],
    },
];
  
  const gameScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
  const answersContainer = document.querySelector(".answers");
  const submit = document.querySelector(".submit");
  const play = document.querySelector(".play");
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;
  
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${(correctCount - wrongCount) * 10}`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Select an answer!");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();