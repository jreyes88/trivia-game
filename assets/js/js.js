// All Game Functions
$(document).ready(function() {

	// Loads Start Button
	initiateGame();
	beginGame();
	loadAnswers();

	// First Screen With Button
	function initiateGame() {
		$(".questionPane").html("<button id='buttonStart'>Start</button>");
	};

	// Loads Question
	function beginGame() {
		$("#buttonStart").click(function(event) {
			var firstQuestion = triviaQuestions[0].question;
			$(".questionPane").html(firstQuestion);
		});
	};

	// Loads Answers
	function loadAnswers() {
		
		// Loads Correct Answer
		$("#buttonStart").click(function(event) {
			var correctChoice = triviaQuestions[0].correctAnswer;
			$(".answerPane").append("<div class='correctButton'><p>" + correctChoice + "</p></div>");
		});

		// Loads Incorrect Answers
		$("#buttonStart").click(function(event) {
			var incorrectChoice1 = triviaQuestions[0].incorrectAnswer1;
			$(".answerPane").append("<div class='incorrectButton'><p>" + incorrectChoice1 + "</p></div>");

			var incorrectChoice2 = triviaQuestions[0].incorrectAnswer2;
			$(".answerPane").append("<div class='incorrectButton'><p>" + incorrectChoice2 + "</p></div>");

			var incorrectChoice3 = triviaQuestions[0].incorrectAnswer3;
			$(".answerPane").append("<div class='incorrectButton'><p>" + incorrectChoice3 + "</p></div>");
		});
	};

})

// Questions
var triviaQuestions = [
	{
		question: "Question 1",
		img: "#",
		correctAnswer: "Correct Answer",
		incorrectAnswer1: "Incorrect Answer 1",
		incorrectAnswer2: "Incorrect Answer 2",
		incorrectAnswer3: "Incorrect Answer 3",
	},
	{
		question: "Question 2",
		img: "#",
		correctAnswer: "Correct Answer",
		incorrectAnswer1: "Incorrect Answer 1",
		incorrectAnswer2: "Incorrect Answer 2",
		incorrectAnswer3: "Incorrect Answer 3",
	},
	{
		question: "Question 3",
		img: "#",
		correctAnswer: "Correct Answer",
		incorrectAnswer1: "Incorrect Answer 1",
		incorrectAnswer2: "Incorrect Answer 2",
		incorrectAnswer3: "Incorrect Answer 3",
	}
]