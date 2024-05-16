let minutes = 0;
let seconds = 0;
let tens = 00;
let interval;
let appendMinutes = document.querySelector("#minutes");
let appendSeconds = document.querySelector("#seconds");
let appendTens = document.querySelector("#mSeconds");

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

const startTimer = () => {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + seconds;
  }
  if (minutes <= 9) {
    appendMinutes.innerHTML = "0" + minutes;
  }
  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
  if (minutes > 59) {
    appendTens.innerHTML = "0" + tens;
    appendSeconds.innerHTML = "0" + seconds;
    appendMinutes.innerHTML = "0" + minutes;
  }
};

startBtn.onclick = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

stopBtn.onclick = () => {
  clearInterval(interval);
};
resetBtn.onclick = () => {
  clearInterval(interval);
  appendTens.innerHTML = "00";
  appendSeconds.innerHTML = "00";
  appendMinutes.innerHTML = "00";
};
