
// Set variables
var timeLeft = 5;
var timeClock = document.querySelector("#timer");
var score = 0;
var questionIndex = 0;
var lastQuestionIndex = questionArr.length - 1;
var questions = document.getElementById("question");
var i = 0;
var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var quizBox = document.getElementById("quizBox");
var leaderScore = document.getElementById("leaderScore");
var leaders = [];
var leaderList = document.getElementById("leader-list");

init();

function init(){
    leaderScore.style.display = "none";
}

// Call to action 'Start Quiz' by click of button
document.querySelector("#startBtn").addEventListener('click',startQuiz);

function startQuiz() {
    // Timer starts    
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeClock.textContent = timeLeft + " seconds left for quiz.";
        renderQuestions();
       
        if(timeLeft === 0) {
        clearInterval(timerInterval);
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
    // if (questionIndex > lastQuestionIndex){
    //     leaderBoard();
    //  }  else {
        renderQuestions();
        i++;
     
   
   
    // wrap around a click event of choice. User clicks
});

// document.getElementById("choiceB").addEventListener("click", function(){
//     renderQuestions();
//     i++;
//     // wrap around a click event of choice. User clicks
// });
// document.getElementById("choiceC").addEventListener("click", function(){
//     renderQuestions();
//     i++;
//     // wrap around a click event of choice. User clicks
// });


function checkAnswer(answer){
    if (answer === questionArr[i].correct) {
        console.log(++score);
    } if (answer !== questionArr[i].correct){
        // decrease 15 seconds of time
        timeLeft -=15;
    } 
}

function leaderBoard(){
    quizBox.style.display = "none";
    leaderScore.style.display = "block";

    for (var i = 0; i < leaders.length; i++) {
        var leaderName = leaders[i];
    
        var li = document.createElement("li");
        li.textContent = leaderName;
        leaderScore.appendChild(li);
    }

}

function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      todoList.appendChild(li);
    }
  }

// function leaderBoard() {
    
    
    
// }


  



// Highscore Link
      


    // Calculate score

    //If timer runs out OR questions finished time stops

    //Call to action quizStop or Submit button to showResults

    // Prompt to put in initials when submit button
    // todoForm.addEventListener("submit", function(event) {
    //     event.preventDefault();
      
    //     var todoText = todoInput.value.trim();
      
    //     // Return from function early if submitted todoText is blank
    //     if (todoText === "") {
    //       return;
    //     }
      
    //     // Add new todoText to todos array, clear the input
    //     todos.push(todoText);
    //     todoInput.value = "";
      
    //     // Store updated todos in localStorage, re-render the list
    //     storeTodos();
    //     renderTodos();
    //   });

    



    // // Put score into leaderboard 'localstorage'
    //     function storeLeaders(event) {
    //         event.preventDefault();
    //         var user = {

    //         }
    //     // Stringify and set "todos" key in localStorage to todos array
    //     localStorage.setItem("leaders", JSON.stringify(leaders));
    //   };

// };