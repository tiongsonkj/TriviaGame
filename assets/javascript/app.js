var time = 60;
// function for a start button that will start the trivia and go to a new page



// function or jQuery for timeremaining. set timer to start countdown at 90 seconds?

// use set Timeout when game ends. 
// setTimeout(countdown, 1000 * 5);

//  Variable that will hold our setInterval that runs the countdown
var intervalId;

var clockRunning = false;
function countdown() {
  
   // Use setInterval to start the count here and set the clock to running.
    // if (!clockRunning) {
    //     intervalId = setInterval(time.count, 1000);
    //     clockRunning = true;
    // }
	$("#time-remaining").html("<h2>Time remaining: " + time + " seconds </h2>")
	intervalId = setInterval(count, 1000);

}
countdown();

// function for time to go down
function count() {
	time--

	var converted = timeConverter(time);

	    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#time-remaining").html("<h2>Time remaining: " + converted + " seconds </h2>");
}
count();
// function for timeConverter
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
// question with response choices. put them in each div block