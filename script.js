// time units 
let [seconds, minutes, hours] = [0, 0, 0];
let timer = document.getElementById("timer");
let time = null;

// button types
let pause = document.getElementById("pause");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

pause.addEventListener("click", () => {
    clearInterval(time);
})

start.addEventListener("click",() => {
    if (time !== null) {
        clearInterval(time);
    }
    time = setInterval(stopWatch, 1000);
})

reset.addEventListener("click", () => {
    clearInterval(time);
    [seconds, minutes, hours] = [0, 0, 0];
    timer.innerHTML = "00:00:00";
})

function stopWatch() {
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
    
    timer.innerHTML = h + ":" + m + ":" + s;
}
