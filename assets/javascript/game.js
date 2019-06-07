
// first we set up our encompassing function that doesn't run code until the page is ready
$(document).ready(function() {
    
    // lets set up the global variables:
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let quizArea = $("#game-instructions");

    // this will be our counter
    var questionSelfDestruct = 20;

    // this will be the question array
    var quiz = [{
        question: "What branch of the United States government is most associated with spying?",
        answers: ["FBI", "CIA", "DHS", "NSA" ],
        correct: "CIA", 
        image: $("#game-instructions").attr()

        

    }]


    

    // Here we will set up the game object

    // Set up timeout in javascript
    let questionTimeout = setTimeout(function() {
        // we will create an alert to test the function
        alert("TEST TEST TEST");
        }, 3000);

    

})

