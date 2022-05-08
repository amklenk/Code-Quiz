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

    {
        question3: "3. Which method do you use to add elements as the last element of a parent element?",
        answers: [
            "a. .addElement()",
            "b. .appendElement()",
            "c. .appendChild()",
            "d. .addChild()",
        ],
    },

    {
        question4: "4. What is a data-attribute?",
        answers: [
            "a. An attribute selected by the user",
            "b. An attribute for styling numbers",
            "c. An attribute that is used to hold array data",
            "d. A custom attribute for targeting specific elements",
        ],
    },

    {
        question5: "5. Which of the lines of code below sets the data-attribute correctly for the following selected element?",
        answers: [
            "a. liEl.setAttribute('data-name', 'list-item1')",
            "b. document.setAttribute('data-name', 'list-item1')",
            "c. liEL.setDataAttr('name', 'list-item1')",
            "d. document.setDataAttr('name', 'list-item1')",
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
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            trueMessage.remove();
            questionTwo();
        }
    });

    incorrectbEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
           falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionTwo();
        }
    });

    incorrectcEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionTwo();
        }
    });
    incorrectdEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionTwo();
        }
    });
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

    correctEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "That's right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            trueMessage.remove();
            questionThree();
        }
    });

    incorrectaEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionThree();
        }
    });

    incorrectcEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionThree();
        }
    });
    incorrectdEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionThree();
        }
    });

};

function questionThree() {
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[2].question3;
    questionEl.setAttribute("class", "question");

    var incorrectaEl = document.createElement("button");
    incorrectaEl.textContent = questionsObj[2].answers[0];
    incorrectaEl.setAttribute("class", "answer");

    var incorrectbEl = document.createElement("button");
    incorrectbEl.textContent = questionsObj[2].answers[1];
    incorrectbEl.setAttribute("class", "answer");

    var correctEl = document.createElement("button");
    correctEl.textContent = questionsObj[2].answers[2];
    correctEl.setAttribute("class", "answer");

    var incorrectdEl = document.createElement("button");
    incorrectdEl.textContent = questionsObj[2].answers[3];
    incorrectdEl.setAttribute("class", "answer");

    mainEl.append(questionEl);
    listEl.append(incorrectaEl);
    listEl.append(incorrectbEl);
    listEl.append(correctEl);
    listEl.append(incorrectdEl);

    correctEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "That's right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectdEl.remove();
            trueMessage.remove();
            questionFour();
        }
    });

    incorrectaEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionFour();
        }
    });

    incorrectbEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionFour();
        }
    });
    incorrectdEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionFour();
        }
    });

};

function questionFour() {
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[3].question4;
    questionEl.setAttribute("class", "question");

    var incorrectaEl = document.createElement("button");
    incorrectaEl.textContent = questionsObj[3].answers[0];
    incorrectaEl.setAttribute("class", "answer");

    var incorrectbEl = document.createElement("button");
    incorrectbEl.textContent = questionsObj[3].answers[1];
    incorrectbEl.setAttribute("class", "answer");

    var incorrectcEl = document.createElement("button");
    incorrectcEl.textContent = questionsObj[3].answers[2];
    incorrectcEl.setAttribute("class", "answer");

    var correctEl = document.createElement("button");
    correctEl.textContent = questionsObj[3].answers[3];
    correctEl.setAttribute("class", "answer");

    mainEl.append(questionEl);
    listEl.append(incorrectaEl);
    listEl.append(incorrectbEl);
    listEl.append(incorrectcEl);
    listEl.append(correctEl);

    correctEl.addEventListener("click", function () {
        if (true) {
            var trueMessage = document.createElement("h3");
            trueMessage.textContent = "That's right!";
            trueMessage.setAttribute("class", "correct-message");
            listEl.appendChild(trueMessage);
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            trueMessage.remove();
            questionFive();
        }
    });

    incorrectaEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            falseMessage.remove();
            questionFive();
        }
    });

    incorrectbEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            falseMessage.remove();
            questionFive();
        }
    });
    incorrectcEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectaEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            falseMessage.remove();
            questionFive();
        }
    });

};

function questionFive(){
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[4].question5;
    questionEl.setAttribute("class", "question");

    var imageEl = document.createElement("img");
    imageEl.setAttribute = ("src", "");
    imageEl.setAttribute = ("class", "code-image");
    
    var correctEl = document.createElement("button");
    correctEl.textContent = questionsObj[4].answers[0];
    correctEl.setAttribute("class", "answer");

    var incorrectbEl = document.createElement("button");
    incorrectbEl.textContent = questionsObj[4].answers[1];
    incorrectbEl.setAttribute("class", "answer");

    var incorrectcEl = document.createElement("button");
    incorrectcEl.textContent = questionsObj[4].answers[2];
    incorrectcEl.setAttribute("class", "answer");

    var incorrectdEl = document.createElement("button");
    incorrectdEl.textContent = questionsObj[4].answers[3];
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
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            trueMessage.remove();
            questionFive();
        }
    });

    incorrectbEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionFive();
        }
    });

    incorrectcEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionFive();
        }
    });
    incorrectdEl.addEventListener("click", function () {
        if (true) {
            var falseMessage = document.createElement("h3");
            falseMessage.textContent = "Sorry, that's not right!";
            falseMessage.setAttribute("class", "incorrect-message");
            listEl.appendChild(falseMessage);
            timeLeft = timeLeft - 20;
            questionEl.remove();
            correctEl.remove();
            incorrectbEl.remove();
            incorrectcEl.remove();
            incorrectdEl.remove();
            falseMessage.remove();
            questionFive();
        }
    });
    submitScore();
};

//function that shows the final page
function submitScore(){

};
//function that stores the high scores
//function that prints the scores on the highscores page in an ordered list by score

//Start of Game Event Listener
startButtonEl.addEventListener("click", function () {
    countdown();
    startQuiz();
});
