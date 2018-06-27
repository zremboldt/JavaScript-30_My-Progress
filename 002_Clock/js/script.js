
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const welcomeMsg = document.querySelector('.welcome');
const timeMsg = document.querySelector('.time');
const dateMsg = document.querySelector('.date');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Handles the transition from 360 back to 0 degrees.
  if (seconds == 0) {
    secondHand.style.transitionDuration = '0s';
    minuteHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  } else {
    secondHand.style.transitionDuration = '0.05s';
    minuteHand.style.transitionDuration = '0.05s';
    hourHand.style.transitionDuration = '0.05s';
  }

  // Welcome Message
  const dayOfTheWeek = now.getDay();
  let weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  welcomeMsg.innerHTML = `Happy ${weekdayArray[dayOfTheWeek]}!`;

  // Time
  timeMsg.innerHTML = `Time: ${now.toLocaleTimeString()}`;

  // Date
  const month = now.getMonth();
  let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayOfTheMonth = now.getDate();
  const year = now.getFullYear();
  dateMsg.innerHTML = `Date: ${monthArray[month]} ${dayOfTheMonth}, ${year}`;
}

setInterval(setDate, 1000);




// Handles the placement of tic marks around the face
(function () {
  let ticAngle = 0;
  const tic = document.querySelectorAll('.tic');
  tic.forEach(tic => tic.style.transform = `rotate(${ticAngle += 30}deg)`);
})();
