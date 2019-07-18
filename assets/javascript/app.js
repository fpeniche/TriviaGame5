// Trivial Trivia Game... here we go again!

//variables required
var questions = [
    question1 = {
        possibleAnswers: ["Tom Brady", "Joe Montana", "Other"],
        rightAnswer: "Tom Brady",
    },
    question2 = {
        possibleAnswers: ["Freddie Mercury", "Brian May", "Other"],
        rightAnswer: "Freddie Mercury",
    },
    question3 = {
        possibleAnswers: ["1950", "1969", "1980"],
        rightAnswer: "1969",
    },
    question4 = {
        possibleAnswers: ["Monica Seles", "Gabriela Sabatini", "Chris Evert"],
        rightAnswer: "Monica Seles",
    },
    question5 = {
        possibleAnswers: ["Internet Explorer", "Google Chrome", "Firefox"],
        rightAnswer: "Google Chrome",
    }
];
//more variables used
var twoMinutes = 0;
var time = 120;
var clockRunning = false;

// code will run as soon as page loads
    window.onload = function(){
    $("#start").on("click", start);
    $("#done").on("click", done);
  };
/*function timeUp(){
    $("#timer").html(twoMinutes);
}*/

function count(){

    // decrement time by 1, 
    time--;
    console.log(time);
    var converted = timeConverter(time);
    console.log(converted);
    // Use the variable we just created to show the converted time in the "timer" div
    $("#timer").text(converted);
  }
  //Get values of selected radio-buttons
  $('.qb:checked').val();
  $('.singer:checked').val();
  $('.year:checked').val();
  $('.player:checked').val();
  $('.browser:checked').val();

function start(){
 //   event.preventDefault();
    if (!clockRunning) {
   var twoMinutes = setInterval(count, 1000);
   console.log(twoMinutes);
   clockRunning = true;
    }
}

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
  
  // crear una funcion que colecte las respuestas correctas, y que corra al momento de dar click en el "done" o que el reloj se termine
  function rightAnswer(){

  }