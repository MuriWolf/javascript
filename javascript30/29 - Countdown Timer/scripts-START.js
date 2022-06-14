let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const timerEndDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]")

// esssa funcao pega o valor de segundos do botao clicado e chama a funcao timer ja que não da para fazer isso direto no addEventListener
function startTimer() {
    seconds = this.dataset.time;
    timer(seconds);
}

function timer(seconds) {
    clearInterval(countdown)
    // pega o horario (em segundos) exato de quando a funcao foi chamado
    const now = Date.now();
    // Soma os segundos informados com os segundos de quando a funcao foi chamada
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds)
    displayEndTime(then)

    // cria um loop que execulta da cada 1 seg
    countdown = setInterval(() => {
        // subtrai os segundos informados pelo exato segundo atual
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        // check if we should stop it!
        if (secondsLeft<0) {
            clearInterval(countdown);
            return;
        };

        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) { 
    const hour = Math.floor((seconds / 60) / 60)
    let minutes = Math.floor(seconds / 60) % 60;
    const remaiderSeconds = seconds % 60;
    // essa operacao ternaria verifica se os segundos são menor que 10, se for, ele adiona um 0 antes do numero
    const display = `${displayCorrectTime(hour)}:${displayCorrectTime(minutes)}:${displayCorrectTime(remaiderSeconds)}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes = end.getMinutes()

    // No padrão (24h)
    timerEndDisplay.textContent = `Be back at ${hour}:${minutes < 10 ? "0" + minutes : minutes}`

    // No padrão (12h)
    // timerEndDisplay.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes}`
}

function displayCorrectTime(time) {
    let correctTime = time < 10 ? `0${time}` : time;
    return correctTime;
}

buttons.forEach(btn => btn.addEventListener("click", startTimer))
document.customForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const minutes = this.minutes.value
    timer(minutes * 60)

})
