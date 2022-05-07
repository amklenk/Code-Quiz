//Pseudocode for project
//The site has the high score nav and the timer in the header, it has the title, description and start button upon visiting the site
//When the user clicks the button (event listener)
//the timer starts
//the page changes to show the first quiz question (appendChild)
//the high score nav is still on the page
//When the user answers a question (event listner with data attributes event.target)
//each answer choice will (with event.target)
//display a prompt of correct or incorrect (data attributes with event.target), disappears after click
//take away from the timer or not (incorrect)
//The user will repeat this with each question
//the last question will direct the user to input their username, bringing with it the high score
//highscore is time left!
//The high score page will have an input for the user name to go with the saved score
//this will be saved in local storage (JSONstringify)
//this array will be called upon with each browser refresh (parse)
//the scores will be sorted in an ordered list (Array.sort)

//global variables
var timeLeft = 100;
var timerEl = document.querySelector("#timer");
var mainEl = document.querySelector(".question-wrapper");
var listEl = document.querySelector(".answer-list");
var startButtonEl = document.querySelector(".quiz-button");
var questionsObj = [
    {
        question1: "1. The DOM stands for _______________.",
        answers: [
            "a. Document Object Model",
            "b. Dominant Object Model",
            "c. Document Onclick Mode",
            "d. Directed Object Mode",
        ],
    },

    {
        question2: "2. The document in the DOM is the _______________.",
        answers: [
            "a. The window",
            "b. What gets loaded inside of the window ",
            "c. The body elements of the HTML",
            "d. A file from a word processor",
        ],
    },

];

//functions
//function for the timer
function countdown() {
    //variable for the start time
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Timer:" + "";
            clearInterval(timeInterval);
            //add call to last page here to submit high score
        }
    }, 1000);
}

//function that starts the quiz and the timer by clicking the start button
function startQuiz() {
    var quizHeading = document.querySelector(".quiz-heading");
    quizHeading.remove();
    var quizDescription = document.querySelector(".quiz-description");
    quizDescription.remove();
    startButtonEl.remove();

    questionOne();
}

//functions that handle the quiz questions
function questionOne() {
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[0].question1;
    questionEl.setAttribute("class", "question");

    var correctEl = document.createElement("button");
    correctEl.textContent = questionsObj[0].answers[0];
    correctEl.setAttribute("class", "answer");

    var incorrectbEl = document.createElement("button");
    incorrectbEl.textContent = questionsObj[0].answers[1];
    incorrectbEl.setAttribute("class", "answer");

    var incorrectcEl = document.createElement("button");
    incorrectcEl.textContent = questionsObj[0].answers[2];
    incorrectcEl.setAttribute("class", "answer");

    var incorrectdEl = document.createElement("button");
    incorrectdEl.textContent = questionsObj[0].answers[3];
    incorrectdEl.setAttribute("class", "answer");

    mainEl.append(questionEl);
    listEl.append(correctEl);
    listEl.append(incorrectbEl);
    listEl.append(incorrectcEl);
    listEl.append(incorrectdEl);

    correctEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "That's right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
        }
    });

    incorrectbEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "Sorry, that's not right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
            var timeLeft = timeLeft - 20;
        }
    });

    incorrectcEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "Sorry, that's not right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
            var timeLeft = timeLeft - 20;
        }
    });
    incorrectdEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "Sorry, that's not right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
            var timeLeft = timeLeft - 20;
        }
    });
    questionEl.remove();
    correctEl.remove();
    incorrectbEl.remove();
    incorrectcEl.remove();
    incorrectdEl.remove();
    trueMessage.remove();
    questionTwo();
};

function questionTwo() {
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[1].question2;
    questionEl.setAttribute("class", "question");

    var incorrectaEl = document.createElement("button");
    incorrectaEl.textContent = questionsObj[1].answers[0];
    incorrectaEl.setAttribute("class", "answer");

    var correctEl = document.createElement("button");
    correctEl.textContent = questionsObj[1].answers[1];
    correctEl.setAttribute("class", "answer");

    var incorrectcEl = document.createElement("button");
    incorrectcEl.textContent = questionsObj[1].answers[2];
    incorrectcEl.setAttribute("class", "answer");

    var incorrectdEl = document.createElement("button");
    incorrectdEl.textContent = questionsObj[1].answers[3];
    incorrectdEl.setAttribute("class", "answer");

    mainEl.append(questionEl);
    listEl.append(incorrectaEl);
    listEl.append(correctEl);
    listEl.append(incorrectcEl);
    listEl.append(incorrectdEl);

};
//function that shows the final page
//function that stores the high scores
//function that prints the scores on the highscores page in an ordered list by score

//Event Listeners
startButtonEl.addEventListener("click", function () {
    countdown();
    startQuiz();
});
