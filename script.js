
// Set variables
var timeLeft = 60;
var timerInterval = 0;
var timeClock = document.querySelector("#timer");
var score = 0;
// var questionIndex = 0;
var lastQuestionIndex = questionArr.length - 1;
var questions = document.getElementById("question");
var i = 0;
var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var quizBox = document.getElementById("quizBox");
var leaderScore = document.getElementById("leaderScore");
var leaders = [];
var leaderList = document.getElementById("leader-list");
var submitButton = document.getElementById("submit-button");
var scoreInput = document.getElementById("score-text");

init();

function init(){
    leaderScore.style.display = "none";
    //  Get stored leaders from localStorage
    //     Parsing the JSON string to an object
    var lastUser = JSON.parse(localStorage.getItem("leaderHighScore"));
    console.log(lastUser);
    // If todos were retrieved from localStorage, update the todos array to it
    if (lastUser !== null) {
      leaders = lastUser;
    }
    console.log(lastUser);
   }
 // }

// Call to action 'Start Quiz' by click of button
document.querySelector("#startBtn").addEventListener('click',startQuiz);

function startQuiz() {
    // Timer starts    
    timerInterval = setInterval(function() {
        timeLeft--;
        timeClock.textContent = timeLeft + " seconds left for quiz.";
        renderQuestions();
       
        if(timeLeft === 0) {

        leaderBoard();
        }

    }, 1000);

}
    
function renderQuestions(){
    questions.innerHTML = questionArr[i].question;
    choiceA.innerHTML = questionArr[i].choiceA;
    choiceB.innerHTML = questionArr[i].choiceB;
    choiceC.innerHTML = questionArr[i].choiceC;
};

document.getElementById("nextButton").addEventListener("click", function(){
    console.log(i);
     //If timer runs out OR questions finished time stops
    if (i > lastQuestionIndex){
        clearInterval(timerInterval);
        leaderBoard();
     }  else {
        renderQuestions();
        i++;
}
});


    function checkAnswer(answer){
        if (answer === questionArr[i].correct) {
            timeLeft +=10;
        } if (answer !== questionArr[i].correct){
            // decrease 15 seconds of time
            timeLeft -=15;
        } 
        // yourscore.textContent = timeLeft;
    }

    function leaderBoard(){
        quizBox.style.display = "none";
        leaderScore.style.display = "block";

        for (var i = 0; i < leaders.length; i++) {
            var leaderName = leaders[i];
    
            var li = document.createElement("li");
            li.textContent = leaderName;
            leaderList.appendChild(li);
        }
    }

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        storeScore();
           
        // var scoreText = scoreInput.value.trim();
  
        // // Return from function early if submitted scoreText is blank
        // if (scoreText === "") {
        // return;
        // }
  
        // // Add new scoreText to leader array, clear the input
        // leaders.push(scoreText);
        // scoreInput.value = "";

        
        storeLeaders();
        // Re-render the list

        leaderBoard();
    });

    function storeScore(event) {
        leaders[leaders.length] = {
            names: scoreInput.value,
            savedScores: timeLeft
        }
    }        

   
    function showScore(){
        var lastUser = JSON.parse(localStorage.getItem("leaderHighScore"));
        // for (var i = 0; i < lastUser.length; i++) {
        //     console.log("last user" + lastUser[i].savedScores);
        //     var name = user[i].names;
        //     var score = user[i].savedScores;
        //     var div = document.createElement("div");
        //     div.textContent = name + " " + score;
        //     div.setAttribute("data-index", i);
        //     leader-list.appendChild(div);
        //   }
         }
    }
        

    function storeLeaders() {
        // Stringify and set "scores" key in localStorage to leader array
        localStorage.setItem("leaderHighScore", JSON.stringify(leaders));

      }

    //   leader[leader.length] = {
    //     names: scoreInput.value,
    //     savedScores: score

    //     localStorage.setItem("leaderHighScore"), JSON.stringify(timerInterval));
    // }

    
    



  



// Highscore Link
      

    //Call to action quizStop or Submit button to showResults




    // // Put score into leaderboard 'localstorage'
    //     function storeLeaders(event) {
    //         event.preventDefault();
    //         var user = {

    //         }
    //     // Stringify and set "todos" key in localStorage to todos array
    //     localStorage.setItem("leaders", JSON.stringify(leaders));
    //   };