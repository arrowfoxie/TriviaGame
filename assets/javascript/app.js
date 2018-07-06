
// set timer 
var number = 30;
var intervalId;

// stops timer when done button is clicked
$("#done").on("click", stop);

// function that grabs all checked inputs
// determines if they are correct / incorrect
// displays number of correct / incorrect at end
function answers() {
    var correctAnswer = $("input:checked").filter(function()
    {
         return ($(this).data("answer") === "correct") 
        }).length;
        console.log(correctAnswer);
        $("#right").text(correctAnswer);

        var incorrect = $(".question").length - correctAnswer;
        $("#wrong").text(incorrect);
}

// function to run the timer
// decrements every 1 second
function run() {
    intervalId = setInterval(decrement, 1000);
}

// function that displays timer
// decreases timer number by 1 when run() function is called
// displays timer on page
// timer stops and alerts when timer reaches 0
function decrement() {
    number--;
    $("#showTime").html("<h2>" + number + "</h2>");
        if (number === 0) {
        stop();
        alert("Time Up!");
    }
}

// function to clear the timer
// hides the main section with questions
// shows the results
function stop() {
    clearInterval(intervalId);
    hideMain();
    showResults();
}

// shows timer
$("#showTime").html("<h2>" + number + "</h2>");

// runs timer
run();

// function to hide the main section when time is up or done button clicked
function hideMain() {
    $(".hide").hide()
}

// function to show the results section
function showResults() {
    answers();
    $("#results").show()
}

