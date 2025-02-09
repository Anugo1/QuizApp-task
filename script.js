const questions = [
  {
      question: "What is the name of the owner of twitter",
      answers: [
          { text: "Elon musk", correct: true },
          { text: "Burna Boy", correct: false },
          { text: "Mark Zukerberg", correct: false },
          { text: "Donald trump", correct: false }
      ]
  },
  {
      question: "Who is the coordinator of learnable 2024",
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
     question: "What is the football name of the Nigerian National mens team?",
     answers: [
        {text: "Super chickens", correct: false},
        {text: "Super falcons", correct: false},
        {text: "9ja eagles", correct: false},
        {text: "Super eagles", correct: true}
     ]
  }
];

// DOM Manipulation
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progress = document.getElementById("progress");

let currentQuestionIndex = 0; // initial value index is assigned as zero
let score = 0; // score starts at zero and is addded +1 as you get the correct answers

function loadQuestion() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  showQuestion();
}

// function to show the question 
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

// This function checks for the answer to know if its correct and adds +1 to the score variable and heads over to the next question till the questions are exhausted and it returns the results
function selectAnswer(correct) {
  if (correct) {
      score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showResults();
  }
}

// This is a function to show the result of the quiz
function showResults() {
  questionElement.innerText = `Quiz Completed✨✅! You scored ${score} out of ${questions.length}`;
  answerButtons.innerHTML = "";
  nextButton.style.display = "none";
}

loadQuestion();
