// Variables, Query Selectors, and Event Listeners
var startBtn = document.querySelector(".start-button");
var quizStart = document.querySelector(".start-quiz"); 
var highscoresEl = document.querySelector(".highscores");
var questionsEl = document.querySelector("#showQuestions");
var quizQuestions = document.querySelector("#questions");
var quizAnswers = document.querySelector("#answers");
var timerEl = document.querySelector("#time-left");
var finalScore = document.querySelector("#score");
var userInitials = document.querySelector("#name");
var submitBtn = document.querySelector(".submit-button");
var allHighscores = document.querySelector("#highscore-view");
var quizEnd = document.querySelector("#quiz-end");
var goBack = document.querySelector(".go-back");

var highscoreName = document.querySelector("#diff-initials");
var highscoreScore = document.querySelector("#diff-scores");

var scoreClear = document.querySelector(".clear-scores");

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var score = 0;
var questionCount = 0;
var timeGiven = 75;
var timerInterval;
var questionNumber = 0;
var endScore = 0;
var highscoresCurr = [];

startBtn.addEventListener("click", startGame);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

// Five Questions to be presented
var questions = [ {
    title: "Commonly used datatypes do NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},
{
    title: "The condition in an if/else statement is encloded within ______.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets",
},
{
    title: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
},
{
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal/bash", "for loops", "console log"],
    answer: "console log",
},
];

// If user clicks "Start Game"
function startGame() {
    quizStart.classList.add("hide");
    questionsEl.classList.remove("hide");
    startTimer();
    showQuestions();
};

// Timer starts counting down
function startTimer() {
    timer = setInterval(function() {
        timeGiven --
        timerEl.textContent = timeGiven + " seconds remaining";
        if (timeGiven <= 0) {
            endQuiz();
        }
    }, 1000);
};

// Questions and Answers being presented
function showQuestions() {
    var questionShow = questions[questionNumber];
    if (questionNumber === questions.length) {
        endQuiz();
    } else {
    quizQuestions.textContent = questionShow.title;
    answer1.textContent = questionShow.choices[0];
    answer2.textContent = questionShow.choices[1];
    answer3.textContent = questionShow.choices[2];
    answer4.textContent = questionShow.choices[3];
    }
};

// If answer choice is chosen incorrectly, time is deducted by 5 seconds
function checkAnswer(event) {
    var chosenAnswer = event.target;
    if (chosenAnswer.textContent === questions[questionCount].answer) {
        showQuestions();
        questionNumber++;;
    } else {
        timeGiven -= 5;
        showQuestions();
        questionNumber++;
    }
};

// When all questions are answered or time runs out
function endQuiz() {
    questionsEl.classList.add("hide");
    quizEnd.classList.remove("hide");
    finalScore.textContent = timeGiven;
    timerEl.style.display = "none";
    clearInterval(timer);
};

// When "Submit" button is clicked
submitBtn.addEventListener("click", scoreSave);
function scoreSave(event) {
    event.preventDefault();
    allHighscores.classList.remove("hide");
    quizEnd.classList.add("hide");
    var userInfo = {
        score: timeGiven,
        name: userInitials.value,
    };
    console.log(userInfo);
    highscoresCurr.push(userInfo);
    localStorage.setItem("User Info", JSON.stringify(highscoresCurr));
    generateHighscores();
};

// Showing all Highscores
function generateHighscores() {
    highscoreName.innerHTML = "";
    highscoreScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("User Info")) || [];
    for (var i = 0; i < highscores.length; i++) {
        var newScores = document.createElement("li");
        newScores.innerHTML = highscores[i].name + ": " + highscores[i].score;
        highscoreName.appendChild(newScores);
    };
}

// When "Go Back" button is clicked
goBack.addEventListener("click", back);
function back() {
    allHighscores.classList.add("hide");
    quizStart.classList.remove("hide");
    questionNumber = 0;
    timeGiven = 75;
    score = 0;
    timerEl.style.display = "flex";
};

// When "Clear Button" is clicked
scoreClear.addEventListener("click", clearScore);
function clearScore() {
    window.localStorage.clear();
    highscoreName.textContent = "";
    highscoreScore.textContent = "";
};

// When "View Highscores" button is clicked
highscoresEl.addEventListener("click", showScores);
function showScores() {
    allHighscores.classList.remove("hide");
    quizStart.classList.add("hide");
    timerEl.style.display = "none";
}