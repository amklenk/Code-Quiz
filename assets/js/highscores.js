//global variables
var scoresListEl = document.querySelector(".highscores-list");
var deleteButtonEl = document.querySelector(".clear-btn");
//Delete Button Event Listener
deleteButtonEl.addEventListener("click", function () {
    scoresListEl.innerHTML = "";
});

//function that saves high scores from last page
var loadScores = function () {
    //need to visit the other file? If click button brings you to last page, then how tomake sure print to the right place?
    var savedScores = JSON.parse(localStorage.getItem("userScoreArray"));
    for (var i = 0; i < savedScores.length; i++) {
        var loadedScore = document.createElement("li");
        loadedScore.textContent = savedScores[i].name + ": " + savedScores[i].score;
        loadedScore.classList.add("highscores-list-item");
        scoresListEl.appendChild(loadedScore);
        //sort?
    }
    loadScores();
};

