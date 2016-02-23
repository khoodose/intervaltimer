var seconds=0;
var timerID;

var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");

function operation() {
  timerID = window.setInterval(updateTime, 1000);
  console.log(timerID)
}

function updateTime() {
  seconds++;
  timer.innerHTML = "Time Elapsed: " + seconds;
}

start.addEventListener("click", operation);

function stopIt() {
  clearInterval(timerID);
}

pause.addEventListener("click", stopIt);

function resetTimer() {
  stopIt();
  // clearInterval(timerID);
  seconds=0;
  timer.innerHTML = "Stop Watch";
}

reset.addEventListener("click", resetTimer);