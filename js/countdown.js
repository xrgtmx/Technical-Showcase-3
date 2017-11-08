/*
  countdown.js
  -----------------------------------------
  Technical Showcase 3
  Website designed by Ryan "xRGTMx" Gudonis
  © 2017
*/

// Set the date we're counting down to
var countdownDate = new Date("Dec 24, 2017 23:59:59 GMT-05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countdownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hr  = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);
 
  // I like leading zeroes.
  function doubleDigit(n){
    return (n < 10 ? "0" : "") + n;
  }
  
  // Output the result in elements
  document.getElementById("days").innerHTML = doubleDigit(day);
  document.getElementById("hours").innerHTML = doubleDigit(hr);
  document.getElementById("minutes").innerHTML = doubleDigit(min);
  document.getElementById("seconds").innerHTML = doubleDigit(sec);
}, 1000);