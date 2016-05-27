// Begin with an object for the questions. You'll call on these by .question or .choices or the like. .correctAnswer number equals the correct choice within the .choices array, and corresponds to the proper choice within the radio buttons on line (86). The .correctChoice string is what will display in the event that the wrong answer is chosen, or the timer runs out.

var questions = [{
    question: "Question 1?",
    choices: ["Incorrect Answer", "Correct Answer", "Incorrect Answer", "Incorrect Answer"],
    correctAnswer: 1,
    correctChoice: "Correct Answer"
}, {
    question: "Question 2?",
    choices: ["Incorrect Answer", "Incorrect Answer", "Correct Answer", "Incorrect Answer"],
    correctAnswer: 2,
    correctChoice: "Correct Answer"
}, {
    question: "Question 3?",
    choices: ["Incorrect Answer", "Correct Answer", "Incorrect Answer", "Incorrect Answer"],
    correctAnswer: 1
}, {
    question: "Question 4?",
    choices: ["Correct Answer", "Incorrect Answer", "Incorrect Answer", "Incorrect Answer"],
    correctAnswer: 0,
    correctChoice: "Correct Answer"
}, {
    question: "Question 5?",
    choices: ["Correct Answer", "Incorrect Answer", "Incorrect Answer", "Incorrect Answer"],
    correctAnswer: 0,
    correctChoice: "Correct Answer"
}];

// Empty gloval variables that the various functions need to manipulate to advance the game, determine the final score, and determine whether the game is over.
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

// All Game Functions
$(document).ready(function () {

    // Hides the quizMessage div
    // $(".quizMessage").hide();

    // Displays start button
    $(".startButton").html("Start!");

    // When the start button is clicked, the text changes to say "Submit Answer", and the class changes from "startButton" to "nextButton"
    $(".startButton").on("click", function() {
        $(".startButton").addClass("nextButton").removeClass("startButton");
        $(".nextButton").html("Check Answer");
        game();
    });
});

// This function displays the current question and the choices
function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Declares a local empty variable named "choice"
    var choice;

    // for-loop that appends the various choices arrays in the question object into the variable named choice. each appendage is a list item with a radio button
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    };
    runTimer();
};

// This function contains all of the game logic
function game() {
    
    displayCurrentQuestion();

    // hides the Quiz Message
    $(this).find(".quizMessage").hide();

    // runs game logic when you click on the "Check Answer" button
    $(".nextButton").on("click", function () {

    	$(document).find(".quizContainer > .quizMessage").hide();
    	runTimer();

    	value = $("input[type='radio']:checked").val();
    	console.log(value);

        // if the "Check Answer" button is clicked but no radio button is selected, then the Quiz Message appears instructing the player to select an answer
        if (value == undefined) {
            $(document).find(".quizMessage").text("Please select an answer");
            $(document).find(".quizMessage").show(); // why can't i make this disappear?
            $(".choiceList").find("li").remove();
            displayCurrentQuestion();

        // the following sections cover what to do when a radio button IS selected and the "Check Answer" button is clicked
        } else {

        	// this section covers the condition in which the correct radio button is clicked
            if (value == questions[currentQuestion].correctAnswer) {

            	advanceQuestion();

            } else if (value !== questions[currentQuestion].correctAnswer) {

                advanceQuestion();
            };
        };
    });
};

function advanceQuestion() {
	correctAnswers++;
	currentQuestion++;
	$(".choiceList").find("li").remove();
	displayCurrentQuestion();
	number = 11;
	console.log(number);
};

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
};

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
};

function hideScore() {
    $(document).find(".result").hide();
};

// timer stuff

var number = 11;

function runTimer(){
	counter = setInterval(decrement, 1000);
	$(".timer").removeClass("doNotDisplay");
}
    
function decrement(){
	number --;
	$(".timer").html('<h2>' + number + '</h2>');
	if (number === 0){
    stopTimer();
    // alert('Time Up!')
	};
};

function stopTimer() {
	clearInterval(counter);
}