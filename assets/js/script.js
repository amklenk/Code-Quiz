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
//the last question will direct the user to the high score page (as well as the nav button), bringing with it the high score
    //highscore is time left!
//The high score page will have an input for the user name to go with the saved score
    //this will be saved in local storage (JSONstringify)
    //this array will be called upon with each browser refresh (parse)
    //the scores will be sorted in an ordered list (Array.sort)

//global variables (maybe make these local except for button click)
var highscore = 0;
var timerDisplay = 60;
//is each question an array of info?

//functions

//function that handles the timer and subtracts more time if you get a question wrong
function countdown() {
    var timeInterval = setInterval(function () {
      if (timerDisplay > 0) {
        timerEl.textContent = "Time: " + timerDisplay;
        timerDisplay--;
      } else if (timerDisplay === 0){
        timerEl.textContent = '';
        clearInterval(timeInterval);
        //call function to go to start over
      };
    }, 1000);
    //function needs to stop upon last button click!
  };

  //button click variable here!

//function that starts the questions iterates over each question
//probably need more than one function here

//function that stores high score with local storage
//copied fix!
var nameInput = document.querySelector("#name");
var submitButton = document.querySelector("#sign-up");
var getInfo = document.querySelector("#getinfo");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var userHighscore = {
    userName: nameInput.value.trim(),
    // highsore: lastNameInput.value.trim(),
  };

  // set new submission to local storage 
  localStorage.setItem("userHighscore", JSON.stringify(userHighscore));
});

//function that calls local storage with scores
getInfo.addEventListener("click", function(event){
    event.preventDefault();
var userHighscoreData = JSON.parse(localStorage.getItem(userHighscore));
userHighscoreData.textContent = userHighscore.userName + " - " + userHighscore.timeleft;
//append to somewhere?
})

//event listeners

//call last function to start