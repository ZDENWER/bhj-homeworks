
const playerPoint = document.getElementById('dead');
const enemyPoint = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let element = document.getElementById(`hole${i}`);
    element.onclick = function() {
        if (element.className.includes('hole_has-mole')) {
            playerPoint.textContent++;
        } else {
            enemyPoint.textContent++;
        }

        if (playerPoint.textContent === '10') {
            alert('Победа'),
            resetGame();
        }
    
        if (enemyPoint.textContent === '5') {
            alert('Вы проиграли'),
            resetGame();
        }
    }
}

function resetGame() {
    playerPoint.textContent = 0;
    enemyPoint.textContent = 0;
}

/*document.addEventListener('click',e => {
    if (e.target.className.includes('hole_has-mole'))
})*/



