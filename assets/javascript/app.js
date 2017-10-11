// array of questions in object list
var myQuestions = [
	{
		question: "Which NBA city has the team name Bulls?",
		answers: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "a",
	},
	{
		question: "Which NBA city has the team name Cavaliers?",
		answers: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "b",
	},	
	{
		question: "Which NBA city has the team name Pacers?",
		answers: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "d",
	},
	{
		question: "Which NBA city has the team name Bucks?",
		answers: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "c",
	},
	{
		question: "Which NBA city has the team name Thunder?",
		answers: {
			a: "Oklahoma City",
			b: "New York",
			c: "San Antonio",
			d: "Boston",
		},
		correctAnswer: "a",
	},
	{
		question: "Which NBA city has the team name Celtics?",
		answers: {
			a: "Oklahoma City",
			b: "New York",
			c: "San Antonio",
			d: "Boston",
		},
		correctAnswer: "d",
	},
	{
		question: "Which NBA city has the team name Knicks?",
		answers: {
			a: "Oklahoma City",
			b: "New York",
			c: "San Antonio",
			d: "Boston",
		},
		correctAnswer: "b",
	},
	{
		question: "Which NBA city has the team name Spurs?",
		answers: {
			a: "Oklahoma City",
			b: "New York",
			c: "San Antonio",
			d: "Boston",
		},
		correctAnswer: "c",
	},
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");


/*
function to show the questions --> this will go in the quiz game function so that 
when we run the quiz game function, this function will run 
*/
function showQuestions(questions, quizContainer) {
	// empty array that will output the questions and answers
	var output = [];
	

	// for each question...
	for (var i = 0; i < questions.length; i++) {

		// reset the list of answers
		// CREATE A DIV TAG WITH CLASS QUESTION and append the div ...
		// MOVE THE EMPTY ANSWERS ARRAY UP ABOVE
		// PUSH CORRECT ANSWERS INTO ARRAY
		var answers = [];

		// for each answer choice to the question..
		for(var letter in questions[i].answers) {

			// add a radio button
			answers.push(
				'<label>' + '<input type="radio" name="question' + i + '"value="'
				+ letter + '">' + " " + questions[i].answers[letter] + " "
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}


	// finally combine our output list into one string of html and put it on page
	quizContainer.innerHTML = output.join('');
}

/*
function that will get the results of the game
*/
function getResults(questions, quizContainer, resultsContainer) {

	// get the answer containers from radio button which is from the quiz container
	// .querySelectorAll will get the answers selected from the quizContainer
	var answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answer and counter for number correct
	var userAnswer = "";
	var numberCorrect = 0;
	var numberIncorrect = 0;
	unanswered = 0;

	// for each question...
	for (var i = 0; i < questions.length; i++) {

		// if there is no checked answer, then add to counter of unanswered
		// if there is a correct checked answer, add to counter of numCorrect
		// else add to number incorrect
		if(!$('input:radio[name=question'+ i + ']').is(":checked")) {

			unanswered++;

		} else if($('input:radio[name=question'+ i + ']:checked').val() === questions[i].correctAnswer) {
			numberCorrect++;
		} 
		else {
			numberIncorrect++;
		}
	}

	// empty the quiz div
	$("#quiz").empty();

	// stop timer counter 
	clearInterval(intervalId);
	// shows in the resultsContainer variable which will...
	// show the number correct in the results div block
	resultsContainer.innerHTML = "All Done!" + "<br>" + "Correct Answers: " + numberCorrect + "<br>"
	+ "IncorrectAnswers: " + numberIncorrect + "<br>"
	+ "Unanswered: " + unanswered;
}

// function for when user clicks the submit button
submitButton.onclick = function () {
	getResults(myQuestions, quizContainer, resultsContainer);

	// takes out the display of the whole quiz when button is pressed
	document.getElementById("quiz").style.display = "none";

	// takes out submit button when button is pressed.
	document.getElementById("submit").style.display = "none";

	// set time to zero to stop timer
	time = 0;

	// takes out timer when button is pressed.
	document.getElementById("time-remaining").style.display = "none";
}



var time = 30;
var correctAnswers;
var incorrectAnswers;
var unanswered;
// function for a start button that will start the trivia and go to a new page
$("#start-button").on("click", function() {

	// takes out the display of the start button when button is pressed
	document.getElementById("start-button").style.display = "none";

	// runs show question function to show questions when page starts
	showQuestions(myQuestions, quizContainer);
	countdown();
});

//  Variable that will hold our setInterval that runs the countdown
var intervalId;

// var clockRunning = false;
function countdown() {
  
	// calls function count and will continue calling it until time = 0
	// function count will go down 1000 ms or 1 second
	intervalId = setInterval(count, 1000);

	// displays time countdown right away
	$("#time-remaining").html("<h2>Time remaining: " + time + " seconds </h2>")
}

// function for time to go down
function count() {
	// if timer is not 0 then subtract timer by 1, when timer is 0 then stop.
    if (time != 0) {
    	time--;
    } else {
    	// when time runs out run the function getResults to show the results
    	getResults(myQuestions, quizContainer, resultsContainer);

    	/*when time runs out, clear out quiz, submit button, 
    	and time remaining on the page.*/
		document.getElementById("quiz").style.display = "none";
		document.getElementById("submit").style.display = "none";
		document.getElementById("time-remaining").style.display = "none";
    	return true;
    }

	// Use the variable to show the timer in the "time-remaining" div.
    $("#time-remaining").html("<h2>Time remaining: " + time + " seconds </h2>");
}
