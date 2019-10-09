
// Set variables
var timeLeft = 5;
var timeClock = document.querySelector("#timer");
var score = 0;
var questionIndex = 0;
var lastQuestionIndex = questionArr - 1;
var questions = document.getElementById("question");
var i = 0;
var choiceAEl = document.getElementById("#choiceA");
var questionArr = [
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA : "quotes",
    choiceB : "curly brackets",
    choiceC : "parentheses",
    answer : "A"
    },  
    {
    question: "What does CSS stand for?",
    choiceA : "California Style Sheet",
    choiceB : "Cryptic Standing Sheet",
    choiceC : "Cascading Style Sheet",
    answer : "C"
    }, 
    {
    question: "What event occurs when a user clicks on an HTML element?",
    choiceA : "onclick",
    choiceB : "ondown",
    choiceC : "onmouse",
    answer : "A"
    },
    {
    question: "How do you write 'Hello' in an alert?",
    choiceA : "alertBox('Hello')",
    choiceB : "alert('Hello')",
    choiceC : "msg('Hello')",
    answer : "B"
    }, 
    {
    question: "Javascript is the same as Java?",
    choiceA : "true",
    choiceB : "false",
    choiceC : "I don't know",
    answer : "B"
    }
];

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

document.getElementById("choiceA").addEventListener("click", function(){
    renderQuestions();
    i++;
    // wrap around a click event of choice. User clicks
});
document.getElementById("choiceB").addEventListener("click", function(){
    renderQuestions();
    i++;
    // wrap around a click event of choice. User clicks
});
document.getElementById("choiceC").addEventListener("click", function(){
    renderQuestions();
    i++;
    // wrap around a click event of choice. User clicks
});


// function checkAnswer(){
//     if (question.correct === answer) {
//         score++;
//         prompt("Answer is correct!");
//         console.log(score);
//     } else {
//         timeLeft--;
//         prompt("Answer is incorrect");
//     }     
// };




// Highscore Link
      

    // Answering right or wrong



    // Add 15 seconds of time

    //If timer runs out OR questions finished time stops

    //Call to action quizStop

    // Prompt to put in initials

    // Calculate score

    // Put score into leaderboard 'localstorage'


