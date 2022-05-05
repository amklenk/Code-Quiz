//Pseudocode for project
//The site has the high score nav and the timer in the header, it has the title, description and start button upon visiting the site
//When the user clicks the button
    //the timer starts
    //the page changes to show the first quiz question
    //the high score nav is still on the page
//When the user answers a question
    //each answer choice will
        //display a prompt of correct or incorrect
        //add to the high score or not (correct)
        //take away from the timer or not (incorrect)
//The user will repeat this with each question
//the last question will direct the user to the high score page (as well as the nav button), bringing with it the high score
//The high score page will have an input for the user name to go with the saved score
    //this will be saved in local storage (JSONstringify)
    //this array will be called upon with each browser refresh (parse)
    //the scores will be sorted in an ordered list (Array.sort)

var highScore = [];