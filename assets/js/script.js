//global variables
//add in local storage info
var userScores = JSON.parse(localStorage.getItem("highScore"))||[];
var timeLeft = 100;
var timerEl = document.querySelector("#timer");
var mainEl = document.querySelector(".question-wrapper");
var listEl = document.querySelector(".answer-list");
var messageWrapEl = document.querySelector(".message-list");
var imageWrapEl = document.querySelector(".image-wrapper")
var startButtonEl = document.querySelector(".quiz-button");
var submitWrapEl = document.querySelector(".submit-wrapper")
var questionEl;
var imageEl;
var questionsObj = [
    {
        question1: "1. The DOM stands for _______________.",
        answers: [
            "a. Document Object Model",
            "b. Dominant Object Model",
            "c. Document Onclick Mode",
            "d. Directed Object Mode",
        ],
        correct: "a. Document Object Model",
    },

    {
        question2: "2. The document in the DOM is the _______________.",
        answers: [
            "a. The window",
            "b. What gets loaded inside of the window ",
            "c. The body elements of the HTML",
            "d. A file from a word processor",
        ],
        correct: "b. What gets loaded inside of the window ",
    },

    {
        question3: "3. Which method do you use to add elements as the last element of a parent element?",
        answers: [
            "a. .addElement()",
            "b. .appendElement()",
            "c. .appendChild()",
            "d. .addChild()",
        ],
        correct: "c. .appendChild()",
    },

    {
        question4: "4. What is a data-attribute?",
        answers: [
            "a. An attribute selected by the user",
            "b. An attribute for styling numbers",
            "c. An attribute that is used to hold array data",
            "d. A custom attribute for targeting specific elements",
        ],
        correct: "d. A custom attribute for targeting specific elements",
    },

    {
        question5: "5. Which of the lines of code below sets the data-attribute correctly for the following selected element?",
        answers: [
            "a. listEl.setAttribute('data-name', 'list-item1')",
            "b. document.setAttribute('data-name', 'list-item1')",
            "c. listEl.setDataAttr('name', 'list-item1')",
            "d. document.setDataAttr('name', 'list-item1')",
        ],
        correct: "a. listEl.setAttribute('data-name', 'list-item1')"
    },

];
var scoresListEl = document.querySelector(".highscores-list");
var deleteButtonEl = document.querySelector(".clear-btn");

//functions
//function for the timer
function countdown() {
    //variable for the start time
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Timer:" + "--";
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

//functions that handle the quiz questions and remove what is on the page
function questionOne() {
    questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[0].question1;
    questionEl.setAttribute("class", "question");

    mainEl.append(questionEl);
    questionsObj[0].answers.forEach(function (answer) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        buttonEl.setAttribute("class", "answer");
        buttonEl.setAttribute("value", answer);
        buttonEl.onclick = function () {
            if (this.value !== questionsObj[0].correct) {
                var falseMessage = document.createElement("h3");
                falseMessage.textContent = "Sorry, that's not right!";
                falseMessage.setAttribute("class", "incorrect-message");
                messageWrapEl.appendChild(falseMessage);
                timeLeft = timeLeft - 20;
            } else {
                var trueMessage = document.createElement("h3");
                trueMessage.textContent = "That's right!";
                trueMessage.setAttribute("class", "correct-message");
                messageWrapEl.appendChild(trueMessage);
            }
            questionTwo();
        }
        listEl.appendChild(buttonEl);
    })
};

function questionTwo() {
    mainEl.innerHTML = "";
    listEl.innerHTML = "";
    messageWrapEl.innerHTML = "";

    questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[1].question2;
    questionEl.setAttribute("class", "question");
    mainEl.append(questionEl);

    questionsObj[1].answers.forEach(function (answer) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        buttonEl.setAttribute("class", "answer");
        buttonEl.setAttribute("value", answer);
        buttonEl.onclick = function () {
            if (this.value !== questionsObj[1].correct) {
                var falseMessage = document.createElement("h3");
                falseMessage.textContent = "Sorry, that's not right!";
                falseMessage.setAttribute("class", "incorrect-message");
                messageWrapEl.appendChild(falseMessage);
                timeLeft = timeLeft - 20;
            } else {
                var trueMessage = document.createElement("h3");
                trueMessage.textContent = "That's right!";
                trueMessage.setAttribute("class", "correct-message");
                messageWrapEl.appendChild(trueMessage);
            }
            questionEl.remove();
            listEl.innerHTML = "";
            questionThree();
        }
        listEl.appendChild(buttonEl);
    })
};

function questionThree() {
    messageWrapEl.innerHTML = "";

    questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[2].question3;
    questionEl.setAttribute("class", "question");
    mainEl.append(questionEl);

    questionsObj[2].answers.forEach(function (answer) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        buttonEl.setAttribute("class", "answer");
        buttonEl.setAttribute("value", answer);
        buttonEl.onclick = function () {
            if (this.value !== questionsObj[2].correct) {
                var falseMessage = document.createElement("h3");
                falseMessage.textContent = "Sorry, that's not right!";
                falseMessage.setAttribute("class", "incorrect-message");
                messageWrapEl.appendChild(falseMessage);
                timeLeft = timeLeft - 20;
            } else {
                var trueMessage = document.createElement("h3");
                trueMessage.textContent = "That's right!";
                trueMessage.setAttribute("class", "correct-message");
                messageWrapEl.appendChild(trueMessage);
            }
            questionEl.remove();
            listEl.innerHTML = "";
            questionFour();
        }
        listEl.appendChild(buttonEl);

    })
};

function questionFour() {
    messageWrapEl.innerHTML = "";

    questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[3].question4;
    questionEl.setAttribute("class", "question");
    mainEl.append(questionEl);

    questionsObj[3].answers.forEach(function (answer) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        buttonEl.setAttribute("class", "answer");
        buttonEl.setAttribute("value", answer);
        buttonEl.onclick = function () {
            if (this.value !== questionsObj[3].correct) {
                var falseMessage = document.createElement("h3");
                falseMessage.textContent = "Sorry, that's not right!";
                falseMessage.setAttribute("class", "incorrect-message");
                messageWrapEl.appendChild(falseMessage);
                timeLeft = timeLeft - 20;
            } else {
                var trueMessage = document.createElement("h3");
                trueMessage.textContent = "That's right!";
                trueMessage.setAttribute("class", "correct-message");
                messageWrapEl.appendChild(trueMessage);
            }
            listEl.innerHTML = "";
            questionEl.remove();
            messageWrapEl.innerHTML = "";
            questionFive();
        }
        listEl.appendChild(buttonEl);
    })

};

function questionFive() {
    messageWrapEl.innerHTML = "";
    imageWrapEl.innerHTML = "";

    questionEl = document.createElement("h2");
    questionEl.textContent = questionsObj[4].question5;
    questionEl.setAttribute("class", "question");

    imageEl = document.createElement("img");
    imageEl.src = "./assets/images/question5img.png";
    imageEl.alt = "var listEl = document.createElement('li');";
    imageEl.style.width = "600px";

    mainEl.append(questionEl);
    imageWrapEl.append(imageEl);

    questionsObj[4].answers.forEach(function (answer) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        buttonEl.setAttribute("class", "answer");
        buttonEl.setAttribute("value", answer);
        buttonEl.onclick = function () {
            if (this.value !== questionsObj[4].correct) {
                var falseMessage = document.createElement("h3");
                falseMessage.textContent = "Sorry, that's not right!";
                falseMessage.setAttribute("class", "incorrect-message");
                listEl.appendChild(falseMessage);
                timeLeft = timeLeft - 20;
            } else {
                var trueMessage = document.createElement("h3");
                trueMessage.textContent = "That's right!";
                trueMessage.setAttribute("class", "correct-message");
                listEl.appendChild(trueMessage);
            }
            submitScore(timeLeft);
        }
        listEl.appendChild(buttonEl);
    })
};

//function that shows the final page
function submitScore(highScore) {
    questionEl.remove();
    imageEl.remove();
    listEl.innerHTML = "";
    messageWrapEl.innerHTML = "";
    timerEl.remove();

    var headingEl = document.createElement("h2");
    headingEl.textContent = "All done!";
    headingEl.setAttribute("class", "question");

    var pEl = document.createElement("p");
    pEl.textContent = "Your high score is " + highScore + ".";
    pEl.setAttribute("class", "high-score-text");

    var labelEl = document.createElement("label");
    labelEl.setAttribute("for", "name");
    labelEl.textContent = "Enter initials:"
    labelEl.classList.add("label");

    var submitEl = document.createElement("input");
    submitEl.setAttribute("type", "text");
    submitEl.setAttribute("name", "name");
    submitEl.setAttribute("placeholder", "Initials");
    submitEl.classList.add("form-input");

    var submitButtonEl = document.createElement("button");
    submitButtonEl.classList.add("submit-button");
    submitButtonEl.href ="./highscores.html";
    submitButtonEl.textContent = "Submit";
    // submitButtonEl.textContent("Submit");

    mainEl.append(headingEl);
    mainEl.append(pEl);
    submitWrapEl.append(labelEl);
    submitWrapEl.append(submitEl);
    submitWrapEl.append(submitButtonEl);
    //submit button that takes you to highscore page with data
    if (submitButtonEl.value !== null){
        submitButtonEl.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(userScores);
        var userName = submitEl.value;
        var userScore = {
            score: highScore,
            name: userName
        };
        // set new submission to local storage
        userScores.push(userScore);
        localStorage.setItem("userScores", JSON.stringify(userScores));
        window.open("./highscores.html", "_self");
    });
    }
};

//function that saves high scores from last page
var loadScores = function () {
    //need to visit the other file? If click button brings you to last page, then how tomake sure print to the right place?
    var savedScores = JSON.parse(localStorage.getItem("userScores"));
    for (var i = 0; i < savedScores.length; i++) {
        var loadedScore = document.createElement("li");
        loadedScore.textContent = savedScores[i].name + ": " + savedScores[i].score;
      loadedScore.classList.add("highscores-list-item");
        scoresListEl.appendChild(loadedScore);
        //sort?
    }
};

//Start of Game Event Listener
startButtonEl.addEventListener("click", function () {
    countdown();
    startQuiz();
});
//Delete Button Event Listener
