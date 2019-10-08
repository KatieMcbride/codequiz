
// Set variables
    var timeLeft = 60;
    var timeClock = document.querySelector("#timer");
    var score = 0;
    var questionIndex = 0;
    var lastQuestionIndex = questionArr - 1;

// Function startQuiz 
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

var questionArr = [
   
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA : "quotes",
    choiceB : "curly brackets",
    choiceC : "parentheses",
    answer : "A"
    },  
    {
    question: "Question 2",
    choiceA : "quotes",
    choiceB : "curly brackets",
    choiceC : "parentheses",
    answer : "A"
    } 
];
    
    function renderQuestions(){
        var q = questionArr[0];

        for (q<0; q> questionArr.length; q++);
        question.innerHTML = q.question;
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;

    };

    function checkAnswer(){
        if (question.correct === answer) {
            score++;
            prompt("Answer is correct!");
        } else {
            timeLeft--;
            prompt("Answer is incorrect");
        }
            if (questionIndex < lastQuestionIndex){
                questionIndex++;
                renderQuestions();
            } else {
                clearInterval(timerInterval);
                scoreSheet();
            }         
    };



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
