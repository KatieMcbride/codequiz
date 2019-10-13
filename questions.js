// Store quiz questions here. Example below

var questionArr = [
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA : "quotes",
    choiceB : "curly brackets",
    choiceC : "parentheses",
    correct : "A"
    },  
    {
    question: "What does CSS stand for?",
    choiceA : "California Style Sheet",
    choiceB : "Cryptic Standing Sheet",
    choiceC : "Cascading Style Sheet",
    correct : "C"
    }, 
    {
    question: "What event occurs when a user clicks on an HTML element?",
    choiceA : "onclick",
    choiceB : "ondown",
    choiceC : "onmouse",
    correct : "A"
    },
    {
    question: "How do you write 'Hello' in an alert?",
    choiceA : "alertBox('Hello')",
    choiceB : "alert('Hello')",
    choiceC : "msg('Hello')",
    correct : "B"
    }, 
    {
    question: "Javascript is the same as Java?",
    choiceA : "true",
    choiceB : "false",
    choiceC : "I don't know",
    correct : "B"
    }
];


  // for(var i = 0; i < questionArr.length; i =+ 1){
    
  //   function getQuestion(){
  //       var questionInner = document.getElementById("question");
  //       return questionInner.innerHTML = questionArr[i].question;
  //   }
  //   getQuestion();

  //   function getAnswerOne(){
  //       var answerOneInner = document.getElementById("answerOne");
  //       return answerOneInner.innerHTML = questionArr[i].answerOne;
  //   }
  //   getAnswerOne();


  //   function getAnswerTwo(){
  //       var answerTwoInner = document.getElementById("answerTwo");
  //       return answerTwoInner.innerHTML = questionArr[i].answerTwo;
  //   }
  //   getAnswerTwo();

  //   function getAnswerThree(){
  //       var answerThreeInner = document.getElementById("answerThree");
  //       return answerThreeInner.innerHTML = questionArr[i].answerThree;
  //   }
  //   getAnswerThree();
  // }

//   document.getElementById("choiceB").addEventListener("click", function(){
//     renderQuestions();
//     i++;
//     // wrap around a click event of choice. User clicks
// });
// document.getElementById("choiceC").addEventListener("click", function(){
//     renderQuestions();
//     i++;
//     // wrap around a click event of choice. User clicks
// });


 // for (var i = 0; i < leaders.length; i++) {
    //     var leader = leaders[i];
    
    //     var li = document.createElement("li");
    //     li.textContent = leader;
    //     li.setAttribute("data-index", i);
    
    //     leaderList.appendChild(li);


     // for (var i = 0; i < leaders.length; i++) {
        //     var leaderName = leaders[i];
    
        //     var li = document.createElement("li");
        //     li.textContent = leaderName;
        //     leaderList.appendChild(li);
        // }