const referenceText = document.getElementById("referenceText");
const inputVal = document.getElementById("inputVal");

inputVal.addEventListener('input', () => {
    const letters_array = referenceText.querySelectorAll('span');
    const arrayVal = inputVal.value.split('');
    let tempVar = true;
    letters_array.forEach((characterSpan, index) => {
        const character = arrayVal[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            tempVar = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            tempVar = false;
        }
        startTimer();
    });

    if (tempVar) { stopTimer(); }
});

const timer = document.getElementById('timer');
var sec = 0;
var msec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
        timer.classList.add("time-stopped");
    }
}

function timerCycle() {
    if (stoptime == false) {
        msec = parseInt(msec);
        sec = parseInt(sec);
