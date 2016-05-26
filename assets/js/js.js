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

		// Runs a function to randomize the code
		randomize()

		// Lines 46 to 71: Writing out the function to randomize code. Example of this is http://jsfiddle.net/bv3MN/1/

		function randomize() {

			// Removes child divs (those with the classes of either correctAnswer or incorrectAnswer that are within the answerPane div)
			$(".answerPane").each(function(){
            	var divs = $(this).find('div');
            	console.log(divs);
            	for(var i = 0; i < divs.length; i++) {
            		$(divs[i]).remove();
            	};

            	// code to randomize order of the child divs
            	var i = divs.length;
            	if (i == 0) return false;
            	while ( --i ) {
            		var j = Math.floor(Math.random() * (i + 1));
            		var tempi = divs[i];
            		var tempj = divs[j];
            		divs[i] = tempj;
            		divs[j] = tempi;
            	}

            	// now that child divs have been randomized, re-append them to this 
            	for (var i = 0; i < divs.length; i++)
            		$(divs[i]).appendTo(this);
            });
    	};
    };
})

// Questions
var triviaQuestions = [
	{
		question: "Question 1",
		img: "#",
		correctAnswer: "Correct Answer</li>",
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