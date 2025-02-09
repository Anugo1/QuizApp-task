const questions = [
  {
      question: "What is the name of the owner of Twitter?",
      answers: [
          { text: "Elon Musk", correct: true },
          { text: "Burna Boy", correct: false },
          { text: "Mark Zuckerberg", correct: false },
          { text: "Donald Trump", correct: false }
      ]
  },
  {
      question: "Who is the coordinator of Learnable 2024?",
      answers: [
          { text: "Ifenna", correct: false },
          { text: "Tappi", correct: true },
          { text: "Ezra", correct: false },
          { text: "Saucecode", correct: false }
      ]
  },
  {
      question: "Ethereum is known with which ticker?",
      answers: [
           {text: "ETH", correct: true},
           {text: "SOL", correct: false},
           {text: "ETC", correct: false},
           {text: "BTC", correct: false}
      ]  
  },
  {
      question: "Which country's president launched a memecoin?",
      answers: [
          {text: "Nigeria", correct : false},
          {text: "France", correct: false},
          {text: "United States", correct: true},
          {text: "Japan", correct : false}
      ]
  },
  {
     question: "What is the football name of the Nigerian National Men's Team?",
     answers: [
        {text: "Super Chickens", correct: false},
        {text: "Super Falcons", correct: false},
        {text: "9ja Eagles", correct: false},
        {text: "Super Eagles", correct: true}
     ]
  }
];

// DOM Manipulation
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const progress = document.getElementById("progress");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    progress.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(correct) {
    if (correct) {
        score++;
        scoreElement.innerText = score; // Score Tracker
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerText = `Quiz Completed✨✅! You scored ${score} out of ${questions.length}`;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block"; 
}

// Restart Quiz Function
restartButton.addEventListener("click", () => {
    loadQuestion();
});

// Initialize Quiz
loadQuestion();
