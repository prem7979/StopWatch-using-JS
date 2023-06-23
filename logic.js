let [seconds, minutes, hours] = [0, 0, 0]; // Variables to store the stopwatch time
let displayTime = document.getElementById("displayTime"); // Reference to the element displaying the time
let timer = null; // Variable to store the timer interval

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
    startButton.removeEventListener("click", watchStart);
}

function watchStop() {
    clearInterval(timer);
    startButton.addEventListener("click", watchStart);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", watchStart);

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", watchStop);

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", watchReset);
