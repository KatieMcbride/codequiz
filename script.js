
// Set variables
var timeLeft = 5;
var timeClock = document.querySelector("#timer");
var score = 1;
var questionIndex = 0;
var lastQuestionIndex = questionArr.length - 1;
var questions = document.getElementById("question");
var i = 0;
var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var quizBox = document.getElementById("quizBox");
var leaders = [];



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
    
    }
    // if (questionIndex < lastQuestionIndex){
    // currentQuestion++;
    // renderQuestions();
    // }  else {
    //     console.log(score);

}


  
    
    




// Highscore Link
      

    // Answering right or wrong



    // Add 15 seconds of time

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

    

    //leaderboard

    function leaderBoard() {
        quizBox.textContent = "";
        
        for (var i = 0; i < leaders.length; i++) {
            var leaderName = leaders[i];
        
            var li = document.createElement("li");
            li.textContent = leaderName;
            quizBox.appendChild(li);
        }
    }

    // Put score into leaderboard 'localstorage'
    function storeLeaders() {
        // Stringify and set "todos" key in localStorage to todos array
        localStorage.setItem("leaders", JSON.stringify(leaders));
      }


