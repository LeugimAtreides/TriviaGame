
// first we set up our encompassing function that doesn't run code until the page is ready
$(document).ready(function() {
    
    // lets set up the global variables:
    
    let quizArea = $("#game-instructions");
    

    // this will be our counter
    var questionSelfDestruct = 20;

    // this will be the question array
    var quiz = [{
        question: "What branch of the United States government is most associated with spying?",
        answers: ["FBI", "CIA", "DHS", "NSA" ],
        correct: "CIA", 
        imageCorrect: $("<img>").attr("src", "../assets/images/correct-gifs/correct-answer-1.gif"),
        imageIncorrect: $("<img>").attr("src", "../assets/images/incorrect-gifs/incorrect-answer-1.gif")},
    
    {
        question: "A spy's legend is: ",
        answers: ["The location where they transmit secret information", "A background story and documents that support a false identity", "A secret identity", "The spy's true dossier" ],
        correct: "Miss Moneypenny", 
        imageCorrect: $("<img>").attr("src", "../assets/images/correct-gifs/correct-answer-2.gif"),
        imageIncorrect: $("<img>").attr("src", "../assets/images/incorrect-gifs/incorrect-answer-2.gif"),
    },
    {
        question: "Who created the James Bond character",
        answers: ["Sean Connery", "Terence Young", "Ian Fleming", "Harry Saltzman" ],
        correct: "Ian Fleming", 
        imageCorrect: $("<img>").attr("src", "../assets/images/correct-gifs/correct-answer-3.gif"),
        imageIncorrect: $("<img>").attr("src", "../assets/images/incorrect-gifs/incorrect-answer-3.gif"),
    },
    {
        question: "Who were the two actors that played the lead roles, Jason Bourne and Aaron Cross, in the Bourne film series?",
        answers: ["Matt Damon & Ben Afflec", "Matt Damon & Jeremy Renner", "Matt Damon & Chris Cooper", "Matt Damon & Scott Glenn"],
        correct: "Matt Damon & Jeremy Renner", 
        imageCorrect: $("<img>").attr("src", "../assets/images/correct-gifs/correct-answer-4.gif"),
        imageIncorrect: $("<img>").attr("src", "../assets/images/incorrect-gifs/incorrect-answer-4.gif"),

    },
    {
        question: "Espionage comes from the french word meaning:",
        answers: ["To be cloaked in darkness", "Secret", "Silence", "To spy" ],
        correct: "To spy", 
        imageCorrect: $("<img>").attr("src", "../assets/images/correct-gifs/correct-answer-5.gif"),
        imageIncorrect: $("<img>").attr("src", "../assets/images/incorrect-gifs/incorrect-answer-5.gif"),
    }
    ]




    // Time to create the game Object, no pun intended

    var game = {
        // the game reaches into the questions array
        questions: quiz.question,
        currentQuestion: 0,
        counter: questionSelfDestruct,
        correctAnswers: 0,
        incorrectAnswers: 0,
        unAnswered: 0,

       

        // now the decrement function has to be declared so that the browser understands where to use the interval
        countdownClock() {

            // decrease questionSelfDestruct by one
            questionSelfDestruct--;

            // create a p element that will be preppended to the quiz area
            var timerDisplay = $("<h1>").text(questionSelfDestruct);
            timerDisplay.addClass("danger-countdown");
            if (questionSelfDestruct == 0) {
                game.timeUp();
            }
        },

        // creating a loadQuestion function 
        loadQuestion() {
            // set the timer that will run the decrement function
            timer = setInterval(game.countdownClock, 1000);

            // clear the quiz area when this.loadQuestion is run
            quizAreaRedux = $("#quiz-area").val().trim();

            // insert contents dynamically
            quizAreaRedux = $("#quiz-area").html("<h2>" + this.questions + "</h2>");

            // loop through the questions array for the question
            for (let i = 0; i < quiz.length; i++) {

                // dynamically insert a button into the quiz area div
               let answerButton = $("<button>");

            //    adding a class of btn and btn-danger to the button
               answerButton.addClass("btn", "btn-danger");

            //    inserting the answers into the button
               answerButton.attr("question-indexed", quiz[i]);

               $("#quiz-area").append(answerButton);
            }
        },

        nextQuestion() {

            // set the counter
            game.countdownClock();

            // using jQuery to change the text of the game counter
            $("#quiz-area").prepend(timerDisplay);

            // increment current question by one
            this.currentQuestion++;

            // this will load the question 
            this.loadQuestion();

        },

        timeUp() {
            clearInterval(timer);
            $("#quiz-area").prepend(timerDisplay);
            $("#quiz-area").html("<h1> BOOM </h1>");
            $("#quiz-area").append(quiz.correct);
            unAnswered++;

            for (let j = 0; j < quiz.length; j++) {
                imgURL = quiz[j].imageIncorrect;
                incorrectImage = $("<img>").attr("src", imgURL);
            }
            

        },

        results() {
            clearInterval(timer);
            $("#quiz-area").prepend(timerDisplay);
            $("#quiz-area").html("<p>" + resultsObject + "</p>");
            results = {
                correctAnswers,
                incorrectAnswers,
                unAnsweredText: $("#quiz-area").text(this.unAnswered),
            };
            startOver = $("<button");
            startOverStylized = startOver.addClass("btn", "btn-danger");
        },

        clicked() {
            clearInterval(timer);
            if (quiz.answers == quiz.correctAnswers) {
                goodJobAnsweringCorrectly();
            } else if (quiz.answers == quiz.incorrectAnswers) {
                booYouAnsweredIncorrectly();
            };
        },

        goodJobAnsweringCorrectly() {
            this.correctAnswers++;
            clearInterval(timer);
            $("#quiz-area").html("<h2> Great Job Agent </h2>");
            
            for (let h = 0; h < quiz.length; h++) {
                correctURL = quiz[h].imageCorrect;
                correctImage = $("<img>").attr("src", correctURL);

            };

            // if statement that causes the question to show result if no more questions are available
        },

        booYouAnsweredIncorrectly() {
            this.incorrectAnswers++;
            clearInterval(timer);
            $("#quiz-area").html("<h2> STAND BY FOR TERMINATION </h2>");

            for (let j = 0; j < quiz.length; j++) {
                imgURL = quiz[j].imageIncorrect;
                incorrectImage = $("<img>").attr("src", imgURL);
            };

            if (this.currentQuestion == 5) {
                this.results();
            } else {
                this.loadQuestion();
            }


        },

        reset () {
            quizAreaRedux.html("<p> TOP SECRET: CLEARANCE LEVEL DELTA ONLY <br> WELCOME AGENT #009 <br> YOU'VE SURVIVED THE TRIALS OF OUR ENTRANCE 'EXAMINATIONS' <br> COMMENDABLE, BUT NOW YOUR TRUE AND FINAL TEST AWAITS <br> YOU WILL NEED TO ANSWER EACH QUESTION CORRECTLY <br> EVERY QUESTION IS DESIGNED TO SELF-DESTRUCT IN 20 SECONDS <br> FAILURE WILL RESULT IN IMMEDIATE 'TERMINATION' FROM THE PROGRAM <br> BEST OF LUCK, AGENT. <br> </p>");
            quiAreaReduz.append("#start-over");

        }

        }

    
    $(document).on("click", "#start-game", function () {
        $("#quiz-area").prepend(game.countdownClock());
        game.loadQuestion();
    }),

    $(document).on("click", "#start-over", function() {
        game.reset();
    })


}

)

