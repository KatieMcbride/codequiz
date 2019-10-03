
// Set variables
    var timeLeft = 60;
    var timeClock = document.querySelector("#timer");

// Function startQuiz 
    document.querySelector("#startBtn").addEventListener('click',startQuiz);

function startQuiz() {
// Timer starts
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeClock.textContent = timeLeft + " seconds left for quiz.";
        startQuestions();
          
        if(timeLeft === 0) {
        clearInterval(timerInterval);
        }

    }, 1000);

}

// Quiz questions pop up
    function startQuestions() {
      
    var questionsEl = document.createElement("questionsEl");
      
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
      
};

    // Answering right or wrong

    // Take off 15 seconds of time

    //If timer runs out OR questions finished time stops

    //Call to action quizStop

    // Prompt to put in initials

    // Calculate score

    // Put score into leaderboard 'localstorage'



// Call to action 'Start Quiz' by click of button
