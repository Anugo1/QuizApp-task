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
  },

   {
     question: " which CEX had their CEO arrested last year?",
     answers: [{text: "Binance", correct: true},
              {text:"Bybit", correct: false},
              {text:"MEXC", correct: false},
              {text:"Bitget", correct: false}
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
  scoreElement.style.animation = "none"; // Reset animation
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  showQuestion();
}


function showQuestion() {
  resetState();


questionElement.classList.remove("fade-slide-enter");
void questionElement.offsetWidth; // Trigger reflow for animation restart
questionElement.classList.add("fade-slide-enter");

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  progress.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.dataset.correct = answer.correct; // Store the correct status
      button.addEventListener("click", () => selectAnswer(answer.correct, button));
      answerButtons.appendChild(button);
  });
}


function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(correct, button) {
  if (correct) {
      button.classList.add("correct");
      score++;
      scoreElement.innerText = score;

      // Trigger score animation
      scoreElement.style.animation = "none"; // Reset
      void scoreElement.offsetWidth; // Force reflow
      scoreElement.style.animation = "scoreUpdate 0.5s ease-in-out";
  } else {
      button.classList.add("wrong");
  }

  // Disable all buttons and highlight the correct one
  Array.from(answerButtons.children).forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correct === "true") { 
          btn.classList.add("correct"); 
      }
  });

  nextButton.style.display = "block";
}

function updateScore(newScore) {
  let scoreElement = document.getElementById("score");
  scoreElement.textContent = newScore;
  scoreElement.classList.add("updated");
  setTimeout(() => scoreElement.classList.remove("updated"), 1200);
}




function showResults() {
    questionElement.innerText = `Quiz Completed✨✅! You scored ${score} out of ${questions.length}`;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block"; 
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(showQuestion, 300); 
  } else {
      setTimeout(showResults, 300);
  }
  nextButton.style.display = "none"; 
});

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 15; i++) {
      let dot = document.createElement("div");
      dot.classList.add("floating-dot");
      dot.style.top = Math.random() * 100 + "vh";
      dot.style.left = Math.random() * 100 + "vw";
      dot.style.animationDuration = Math.random() * 3 + 3 + "s";
      document.body.appendChild(dot);
  }
});


// Restart Quiz Function
restartButton.addEventListener("click", () => {
    loadQuestion();
});

// Initialize Quiz
loadQuestion();
