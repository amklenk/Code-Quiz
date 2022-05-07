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
var timerEl = document.getElementById('timer');
var mainEl = document.getElementsByClassName('body');
var startButtonEl = document.getElementsByClassName('quiz-button');

//functions
//function for the timer
function countdown() {
    //variable for the start time
    var timeLeft = 100;
    var timeInterval = setInterval(function () {
        if(timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
          }
        }, 1000)
    };

//function that starts the quiz and the timer by clicking the start button
// function startQuiz(){

// }
//function that handles the quiz questions
//function that shows the final page
//function that stores the high scores
//function that prints the scores on the highscores page in an ordered list by score

//Event Listeners
startButtonEl.addEventListener('click', function() {
    countdown();
  });