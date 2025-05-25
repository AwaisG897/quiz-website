let startbtn = document.querySelector(".start-btn");
let popunInfo = document.querySelector(".popun-info");
let exitbtn = document.querySelector(".exit-btn");
let main = document.querySelector("main");
let continuebtn = document.querySelector(".contnue-btn");
let quizsection = document.querySelector(".quiz-section");
let quizbox = document.querySelector(".quiz-box");
let resultBox = document.querySelector(".result-box");
let tryAgainBtn = document.querySelector(".tryAgain-btn");
let goHomeBtn = document.querySelector(".goHome-btn");

// Quiz guide content for different categories
const quizGuides = {
  fundamentals: [
    "Read each question carefully before selecting your answer.",
    "Focus on fundamental programming concepts like algorithms, data structures, and OOP principles.",
    "Pay attention to time complexity questions and terminology.",
    "This quiz covers core programming concepts applicable to most languages.",
    "Take your time - these questions test your understanding of programming fundamentals.",
  ],
  python: [
    "This quiz focuses on Python-specific syntax and features.",
    "Pay attention to questions about Python data types, libraries, and functions.",
    "Some questions may test your knowledge of Python's unique features like list comprehensions.",
    "Look out for questions about Python's standard libraries and tools.",
    "Read code examples carefully if they appear in questions.",
  ],
  html: [
    "This quiz tests your knowledge of HTML tags and attributes.",
    "Focus on semantic HTML5 elements and proper document structure.",
    "Pay attention to the correct syntax for HTML elements.",
    "Questions may cover attributes, form elements, and metadata tags.",
    "Remember the differences between block and inline elements.",
  ],
  css: [
    "This quiz covers CSS selectors, properties, and layout techniques.",
    "Pay attention to specificity rules and the box model.",
    "Some questions may test your knowledge of CSS units and values.",
    "Remember the syntax for flexbox and grid layouts.",
    "Focus on the difference between various positioning methods.",
  ],
  cpp: [
    "This quiz focuses on C++ syntax, features, and standard library.",
    "Pay attention to memory management and pointers.",
    "Questions cover object-oriented programming in C++.",
    "Some questions may test your knowledge of STL containers and algorithms.",
    "Read code snippets carefully to spot syntax details.",
  ],
  frontend: [
    "This quiz covers various aspects of frontend development.",
    "Questions include JavaScript, DOM manipulation, and browser APIs.",
    "Pay attention to frontend frameworks and tools mentioned in the questions.",
    "Some questions may test your knowledge of responsive design principles.",
    "Focus on the interaction between HTML, CSS, and JavaScript.",
  ],
};

// Default general guide
const defaultGuide = [
  "Read each question carefully before selecting your answer.",
  "Once you select an answer, it cannot be changed.",
  "Each correct answer is worth 1 point.",
  "There are 10 questions in total for this quiz.",
  'Click "Next" to proceed to the next question after answering.',
];

// Function to update quiz guide content
function updateQuizGuide(category) {
  const guideContent = document.getElementById("guide-content");
  const guideTitle = document.getElementById("guide-title");

  if (!guideContent || !guideTitle) return;

  // Set category-specific title
  const titles = {
    fundamentals: "Programming Fundamentals Guide",
    python: "Python Quiz Guide",
    html: "HTML Quiz Guide",
    css: "CSS Quiz Guide",
    cpp: "C++ Quiz Guide",
    frontend: "Frontend Development Guide",
  };

  guideTitle.textContent = titles[category] || "Quiz Guide";

  // Clear existing content
  guideContent.innerHTML = "";

  // Get the appropriate guide content
  const guide = quizGuides[category] || defaultGuide;

  // Add new guide items
  guide.forEach((item, index) => {
    const infoSpan = document.createElement("span");
    infoSpan.className = "info";
    infoSpan.textContent = `${index + 1}. ${item}`;
    guideContent.appendChild(infoSpan);
  });
}

// Get category from URL if available
function getQuizCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("category");
}

// Set the quiz category based on URL parameter
document.addEventListener("DOMContentLoaded", function () {
  const category = getQuizCategory();
  if (category) {
    // Update quiz guide content
    updateQuizGuide(category);

    // Load questions for the selected category if available
    if (typeof loadQuizByCategory === "function") {
      loadQuizByCategory(category);

      // Update the quiz title
      const quizTitle = document.querySelector(".quiz-box h1");
      if (quizTitle) {
        const titles = {
          fundamentals: "Programming Fundamentals Quiz",
          python: "Python Quiz",
          html: "HTML Quiz",
          css: "CSS Quiz",
          cpp: "C++ Quiz",
          frontend: "Frontend Development Quiz",
        };
        quizTitle.textContent = titles[category] || "Programming Quiz";
      }

      // Auto-start the quiz
      popunInfo.classList.add("active");
      main.classList.add("active");
    }
  }
});

startbtn.onclick = () => {
  // Get category from the button's data attribute
  const category = startbtn.getAttribute("data-category") || "fundamentals";

  // Update quiz guide with the selected category
  updateQuizGuide(category);

  // Load the appropriate questions
  if (typeof loadQuizByCategory === "function") {
    loadQuizByCategory(category);

    // Update the quiz title
    const quizTitle = document.querySelector(".quiz-box h1");
    if (quizTitle) {
      const titles = {
        fundamentals: "Programming Fundamentals Quiz",
        python: "Python Quiz",
        html: "HTML Quiz",
        css: "CSS Quiz",
        cpp: "C++ Quiz",
        frontend: "Frontend Development Quiz",
      };
      quizTitle.textContent = titles[category] || "Programming Quiz";
    }
  }

  // Show quiz guide popup
  popunInfo.classList.add("active");
  main.classList.add("active");
};

exitbtn.onclick = () => {
  popunInfo.classList.remove("active");
  main.classList.remove("active");
};

continuebtn.onclick = () => {
  quizsection.classList.add("active");
  popunInfo.classList.remove("active");
  main.classList.remove("active");
  quizbox.classList.add("active");

  // Add a small delay to ensure proper rendering of quiz elements
  setTimeout(() => {
    showQuestions(0);
    questionCounter(1);
    headerScore();
  }, 100);
};

tryAgainBtn.onclick = () => {
  quizbox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
  headerScore();
};

goHomeBtn.onclick = () => {
  quizsection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
  headerScore();
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
const nextBtn = document.querySelector(".nextbtn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove("active");
  } else {
    showResultBox();
  }
};

const optionList = document.querySelector(".option-list");

// getting question and options from array
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;
  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOption = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    // if answer incorrect, auto selected correct Answer
    for (let i = 0; i < allOption; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // if user has selected, disable all options
  for (let i = 0; i < allOption; i++) {
    optionList.children[i].classList.add("disable");
  }

  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  quizbox.classList.remove("active");
  resultBox.classList.add("active");
  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");

  let progresStartValue = -1;
  let progresEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progresStartValue++;
    progressValue.textContent = `${progresStartValue}%`;

    circularProgress.style.background = `conic-gradient(#c40094 ${
      progresStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progresStartValue == progresEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
