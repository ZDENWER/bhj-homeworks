let timer = document.getElementById('timer');
let intervalId = setInterval(tick, 1000)
function tick() {
    --timer.textContent;
    if (timer.textContent === '0') {
        alert('Вы победили в конкурсе');
        clearInterval(intervalId)
    }
}
