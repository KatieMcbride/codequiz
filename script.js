
// Set variables
    var timeLeft = 60;
    var timeClock = document.querySelector("#timer");
    var correct = 0;
    var incorrect = 0;

// Function startQuiz 
    document.querySelector("#startBtn").addEventListener('click',startQuiz);

function startQuiz() {
// Timer starts
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeClock.textContent = timeLeft + " seconds left for quiz.";
        // startQuestions()
        
          
        if(timeLeft === 0) {
        clearInterval(timerInterval);
        }

    }, 1000);

}

var questionArr = [
   
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    answerOne: "quotes",
    answerTwo: "curly brackets",
    answerThree: "parentheses"
    }  
    ];
    
    function buttonFunction(){
        for(var i = 0; i < questionArr.length; i += 1){
    
        function getQuestion(){
            var questionInner = document.getElementById("question");
            return questionInner.innerHTML = questionArr[i].question;
        }
        getQuestion();
    
        function getAnswerOne(){
            var answerOneInner = document.getElementById("answerOne");
            return answerOneInner.innerHTML = questionArr[i].answerOne;
        }
        getAnswerOne();
    
    
        function getAnswerTwo(){
            var answerTwoInner = document.getElementById("answerTwo");
            return answerTwoInner.innerHTML = questionArr[i].answerTwo;
        }
        getAnswerTwo();
    
        function getAnswerThree(){
            var answerThreeInner = document.getElementById("answerThree");
            return answerThreeInner.innerHTML = questionArr[i].answerThree;
        }
        getAnswerThree();
      }

    }


// // Quiz questions pop up
// function startQuestions() {
//     var quizArea = document.querySelector("#quiz");  
//     var questionsEl = document.createElement("questionsEl");

//     // HOW DO I GET QUESTION TO POP UP???  
//     questionsEl.setAttribute("href", "./questions.js");
//     quizArea.appendChild(questionsEl);

//     for (var i=0; i < questions.length; i++ ){
//         prompt(questions);
           
//         };
      

// };
      

    // Answering right or wrong



    // Take off 15 seconds of time

    //If timer runs out OR questions finished time stops

    //Call to action quizStop

    // Prompt to put in initials

    // Calculate score

    // Put score into leaderboard 'localstorage'



// Call to action 'Start Quiz' by click of button
