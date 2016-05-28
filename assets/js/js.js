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

// All Game Functions
$(document).ready(function () {

    // Displays start button
    $(".startButton").html("Start!");

    // When the start button is clicked, the text changes to say "Submit Answer", and the class changes from "startButton" to "nextButton"
    $(".startButton").on("click", function() {
        $(".startButton").addClass("nextButton").removeClass("startButton");
        $(".nextButton").html("Check Answer");
        displayCurrentQuestion();
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
    for (j = 0; j < numChoices; j++) {
        choice = questions[currentQuestion].choices[j];
        $('<div><input type="radio" value=' + j + ' name="dynradio" />' + choice + '</div>').appendTo(choiceList);
    };
    console.log(currentQuestion);
    runTimer();
};

$("body").on("click", ".nextButton", function () {

    console.log("NextButton Clicked");

    value = $("input[name=dynradio]:checked").val();

    if (value == undefined ) {

    } else {
        if (value == questions[currentQuestion].correctAnswer) {
            console.log("correct answer");
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            correctChoicePage();
        } else if (value !== questions[currentQuestion].correctAnswer) {
            console.log("incorrect answer");
            incorrectChoicePage();
        };
    };
    
});

function correctChoicePage() {
    $(".question").text("Correct!");
    $(".choiceList").find("div").remove();
    number = 11;
    stopTimer();
    runHiddenTimer();
    $(".nextButton").addClass("doNotDisplay");
    $(".timer").addClass("doNotDisplay");
};

function incorrectChoicePage() {
    $(".question").text("Incorrect! The correct answer is " + questions[currentQuestion].correctChoice);
    $(".choiceList").find("div").remove();
    number = 11;
    stopTimer();
    runHiddenTimer();
    $(".nextButton").addClass("doNotDisplay");
    $(".timer").addClass("doNotDisplay");
};

// // Moves onto the next question.
function advanceQuestion() {
	if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayCurrentQuestion();
        number = 11;
        stopTimer();
        hiddenNumber = 5;
        $(".nextButton").removeClass("doNotDisplay");
        $(".timer").removeClass("doNotDisplay");
    } else {
        $(".choiceList").find("div").remove();
        $(".question").text("Game Over!");
        displayScore();
        number = 9000000;
        stopTimer();
        $(".resetButton").removeClass("doNotDisplay");
    };
};

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
    $(".choiceList").find("div").remove();
    $(".nextButton").text("Try Again?").addClass("resetButton").removeClass("nextButton");
};

$("body").on("click", ".resetButton", function () {
    hideScore();
    currentQuestion = 0;
    correctAnswers = 0;
    value = "";
    number = 10
    $(".choiceList").find("div").remove();
    displayCurrentQuestion();
    $(".resetButton").text("Check Answer").addClass("nextButton").removeClass("resetButton");
    stopTimer()
});

function hideScore() {
    $(document).find(".result").hide();
};

// game timer stuff

var counter;
var number = 11;

function runTimer(){
	counter = setInterval(decrement, 1000);
	$(".timer").removeClass("doNotDisplay");
}
    
function decrement(){
	number --;
	$(".timer").html('<h2>' + number + '</h2>');
	if (number === 0){
        incorrectChoicePage();
        $(".choiceList").find("div").remove();
	};
};

function stopTimer() {
	clearInterval(counter);
}

// Hidden Timer
var hiddenNumber = 5;

function runHiddenTimer(){
	hiddenCounter = setInterval(hiddenDecrement, 1000);
}
    
function hiddenDecrement(){
	hiddenNumber --;
	$(".hiddenTimer").html('<h2>' + hiddenNumber + '</h2>');
	if (hiddenNumber === 0){
        stopHiddenTimer();
        advanceQuestion();
	};
};

function stopHiddenTimer() {
	clearInterval(hiddenCounter);
};