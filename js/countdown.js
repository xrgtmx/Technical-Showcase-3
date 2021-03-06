/*
  countdown.js
  -----------------------------------------
  Technical Showcase 3
  Website designed by Ryan "xRGTMx" Gudonis
  © 2017
*/

// Set the date of the deadline.
var countdownDate = new Date("Feb 20, 2018 23:59:59 GMT-05:00").getTime();

// Update the count down every 1 second.
setInterval(function() {
  "use strict";

  // Get date and time at the current moment
  var now = new Date().getTime();
  
  // Find the distance between now an the countdown date
  var distance = countdownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hr  = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);
 
  // I like leading zeros, it makes the timer even.
  function doubleDigit(n){
    return (n < 10 ? "0" : "") + n;
  }
  
  // Output the result in elements
  document.getElementById("days").innerHTML = doubleDigit(day);
  document.getElementById("hours").innerHTML = doubleDigit(hr);
  document.getElementById("minutes").innerHTML = doubleDigit(min);
  document.getElementById("seconds").innerHTML = doubleDigit(sec);
}, 1000);

/*
  The Final Countdown
  Written by Joey Tempest, Performed by Europe, Released in 1986
  
  (ten, nine, eight, seven, six, five, four, three, two, one)
  
  We're leaving together,
  But still it's farewell.
  And maybe we'll come back
  To earth, who can tell?
  I guess there is no one to blame
  We're leaving ground (leaving ground)
  Will things ever be the same again?
  
  It's the final countdown.
  The final countdown...
  
  Oh!
  
  We're heading for Venus (Venus)
  And still we stand tall
  'Cause maybe they've seen us (seen us)
  And welcome us all, yeah.
  With so many light years to go
  And things to be found (to be found)
  I'm sure that we'll all miss her so.
  
  It's the final countdown...
  The final count down [2x]
  
  The final count down
  Oh!
  
  It's the final count down
  The final count down [2x]
  
  It's the final count down
  We're leaving together
  The final count down
  We'll all miss her so.
  It's the final count down.
  
  Oh!
  It's the final count down.
*/