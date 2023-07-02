let timerElement = document.getElementById('timer');

let timerInterval;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
  timerInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  stopStopwatch();

  minutes = 0;
  seconds = 0;

  updateTimerDisplay();
}

function updateStopwatch() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  let minutesDisplay = padZero(minutes);
  let secondsDisplay = padZero(seconds);

  timerElement.textContent = minutesDisplay + ':' + secondsDisplay;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}
