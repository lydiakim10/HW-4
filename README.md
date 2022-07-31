# HW-4

## Description
In this homework assignment, I was able to use all the information I learned about HTML, CSS, and Javascript in order to produce a coding quiz for users to take. When a user logs onto my quiz, the user will be able to start the quiz, which will present them with 5 different questions. For every question the user gets wrong, 5 seconds will be deducted from their remaining time. Once all of the questions are answered, the user will be able to input their name or initials and save it onto the local storage. This will also make it appear in the "Highscores" page for the user to look back on. If the user decides to go back and retake the quiz, their new score will appear under their previous score. If the user wishes to clear all scores, the scores will disappear from the site and the local storage.

## Codes in HTML

### Header
- A "View Highscores" label will appear on the left side of the page
- The time remaining will show up in the header once the user clicks "Start Quiz"

### Start Quiz Section
- The title of the assignment will appear in the center
- Below the title, a brief description of the content will show up and also provide the rules of the quiz
- A start button is directly below all the content so the users know where to begin

### Show Questions Section
- A place for all of the questions and answer choices is coded

### Quiz End Section
- "Your final score is:" is coded that will show the user's score
- A form is given for the user to input their initials
- The submit button is shown for the user to input their performance

### Highscore View Section
- A "Highscores" label is written in the center to show the user what they are viewing
- Two "div"s are put so that the user's score and initials can appear
- A "Clear Scores" button is put for the user
- A "Go Back" button is also put for the user to interact with

## Codes in CSS
- A universal margin and background color is set
- A margin and font-family is set for the body of the HTML code
- The header is spaced out and has a margin, padding, and font-size included
- The "Start Button" has its own color, padding, font-size, border, and margin
- The "Start Button" also has a pointer cursor
- The main of HTML is flex-wrapped and centered
- The classes with "hide" is not displayed
- The id with "showQuestions" has its own font-size
- The answer buttons has its own font-family, font-size, padding, margin, and background color
- The list items has its own font-size when it appears

## Codes in Javascript

### Variables, Query Selectors, and Event Listeners
- "document.querySelector" is used for every class and id in HTML
- New variables are coded and given their appropriate values
- Event listeners are added to the start button and answer choices so that when a user clicks on them, a function will happen

### Functions
- Each question, choices, and answers are written to go in a desired function
- When user clicks the "Start Game" button, the questions appear and the timer starts
- The timer will decrease by every second and will show up next to "seconds remaining"
- If the timer is less than or equal to 0, the quiz will end
- When the questions are shown, each question will go with its own answer choices
- If all the questions are completed, the quiz will end
- If the user clicks the incorrect answer, the time will deduct by 5 seconds and the next question will appear
- When the quiz ends, the score will show up as the time remaining
- When the user inputs their initials and hits "Submit", their initials along with their score will be visible in a bullet point list and the local storage
- If the user wishes to go back, the page will return to the beginning and the timer and question number will reset
- if the user wishes to clear scores, all of the scores will be removed from the webpage and the local storage as well. 

## Website Screenshot
![Alttext](/full-website.png)

## Link to Site
[Link](https://lydiakim10.github.io/HW-4/)