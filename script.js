const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const pomodoroTimer = document.querySelector("#pomodoro-time");
let time = 1500;

let timerId = 0;

function runTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    pomodoroTimer.innerHTML = `${minutes}:${seconds}`;
    time--

    if (minutes == 0 && seconds == 0) {
        clearInterval(timerId);
        startButton.textContent = "start";
        time = 1500;
        pomodoroTimer.textContent = "25:00"
    }
}

function clickStartStop() {

    if (startButton.textContent == "start") {
        startButton.textContent = "stop";
        timerId = setInterval(runTimer, 10);

    } else if (startButton.textContent == "stop") {
        startButton.textContent = "start";
        clearInterval(timerId);
    }
}

startButton.addEventListener('click', clickStartStop);