// array of questions in object list
var myQuestions = [
	{
		question: "Which NBA city has the team name Bulls?",
		answer: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "a",
	},
	{
		question: "Which NBA city has the team name Cavaliers?",
		answer: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "b",
	},	
	{
		question: "Which NBA city has the team name Pacers?",
		answer: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "d",
	},
	{
		question: "Which NBA city has the team name Bucks?",
		answer: {
			a: "Chicago",
			b: "Cleveland",
			c: "Milwaukee",
			d: "Indiana",
		},
		correctAnswer: "c",
	},
];

// function for the quiz game
function quizBuild() {
	
}




var time = 60;
var correctAnswers;
var incorrectAnswers;
var unanswered;
// function for a start button that will start the trivia and go to a new page
// HOW DO YOU GET IT TO LOAD ONTO A NEW PAGE!?!??!
$("#start-button").on("click", function() {
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
	// WHEN TIMER HITS ZERO HOW DO YOU DISPLAY ANSWERS CORRECT/INCORRECT?
    if (time != 0) {
    	time--;
    } else {
    	return true;
    }

	// Use the variable to show the timer in the "time-remaining" div.
    $("#time-remaining").html("<h2>Time remaining: " + time + " seconds </h2>");
}
