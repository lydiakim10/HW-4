var startBtn = document.querySelector(".start-button");
var quizStart = document.querySelector(".start-quiz"); 
var highscoresEl = document.querySelector(".highscores");
var questionsEl = document.querySelector("#showQuestions");
var quizQuestions = document.querySelector("#questions");
var quizAnswers = document.querySelector("#answers");
var timerEl = document.querySelector("#time-left");
var finalScore = document.querySelector("#score");
var userInitials = document.querySelector("#initials");
var submitBtn = document.querySelector(".submit-button");
var allHighscores = document.querySelector(".highscorePage");

var answer1 = document.querySelector("#answer1");
var answer2 = doucment.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var score = 0;
var questionCount = 0;
var timeGiven = 75;
var timerInterval;

startBtn.addEventListener("click", startGame);

const questions = [ {
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

function startGame() {
    quizStart.classList.add("hide");
    questionsEl.classList.remove("hide")
    startTimer();
    showQuestions();
};

function startTimer() {
    timer = setInterval(function() {
        timeGiven --
        timerEl.textContent = timeGiven + " seconds remaining";
        if (timeGiven === 0 || questionCount === questions.length) {
            endQuiz();
        }
    }, 1000);
};

function endQuiz() {
    finalScore.textContent = timeGiven;
    clearInterval(timerInterval);
}

function showQuestions() {
    quizQuestions.textContent = questions.title;
    answer1.textContent = questions.choices[0];
    answer2.textContent = questions.choices[1];
    answer3.textContent = questions.choices[2];
    answer4.textContent = questions.choices[3];
}