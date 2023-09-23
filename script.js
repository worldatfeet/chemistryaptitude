let currentQuestion = 0;
let score = 0;
let quizCompleted = false;

const questions = [
  {
    level: "Chemistry",
    question: "What is the chemical symbol for gold?",
    answers: ["A. Go", "B. Ag", "C. Au"],
    correctAnswer: 2,
  },
  {
    level: "Chemistry",
    question: "Which gas makes up the largest part of Earth's atmosphere?",
    answers: ["A. Oxygen", "B. Carbon dioxide", "C. Nitrogen"],
    correctAnswer: 2,
  },
  {
    level: "Chemistry",
    question: "What is the chemical formula for water?",
    answers: ["A. H2O2", "B. CO2", "C. H2O"],
    correctAnswer: 2,
  },
  {
    level: "Chemistry",
    question: "What is the pH value of a neutral solution?",
    answers: ["A. 0", "B. 7", "C. 14"],
    correctAnswer: 1,
  },
  {
    level: "Chemistry",
    question: "Which element is the primary constituent of natural gas?",
    answers: ["A. Oxygen", "B. Hydrogen", "C. Carbon"],
    correctAnswer: 2,
  },
  {
    level: "Chemistry",
    question: "What is the process by which a solid changes directly into a gas called?",
    answers: ["A. Condensation", "B. Sublimation", "C. Evaporation"],
    correctAnswer: 1,
  },
  {
    level: "Chemistry",
    question: "Which gas is responsible for the 'greenhouse effect' on Earth?",
    answers: ["A. Oxygen", "B. Carbon dioxide", "C. Nitrogen"],
    correctAnswer: 1,
  },
  {
    level: "Chemistry",
    question: "What is the chemical name for table salt?",
    answers: ["A. Sodium chloride", "B. Calcium carbonate", "C. Potassium nitrate"],
    correctAnswer: 0,
  },
  {
    level: "Chemistry",
    question: "What is the chemical symbol for iron?",
    answers: ["A. Ir", "B. Fe", "C. In"],
    correctAnswer: 1,
  },
  {
    level: "Chemistry",
    question: "What is the process of a liquid turning into a solid called?",
    answers: ["A. Sublimation", "B. Condensation", "C. Freezing"],
    correctAnswer: 2,
  },
];
function displayQuestion() {
  const questionElement = document.getElementById('question');
  const answersList = document.getElementById('answers');
  const nextButton = document.getElementById('next-button');

  if (quizCompleted) {
    questionElement.textContent = "Quiz Completed!";
    answersList.innerHTML = `Your score is: ${score}`;
    nextButton.textContent = 'Next'; 
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', () => {
      window.location.href = 'https://www.flipkart.com/';
    });
  } else if (currentQuestion < questions.length) {
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    answersList.innerHTML = '';

    questions[currentQuestion].answers.forEach((answer, index) => {
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', () => checkAnswer(index));
      listItem.appendChild(button);
      answersList.appendChild(listItem);
    });

    nextButton.style.display = 'none';
  } else {
    // Handle quiz completion
  }
}

function checkAnswer(userAnswer) {
  if (userAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    quizCompleted = true;
  }

  displayQuestion();
}

function nextQuestion() {
  currentQuestion = 0;
  quizCompleted = false;
  score = 0;
  displayQuestion();
}

displayQuestion();