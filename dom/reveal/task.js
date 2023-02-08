const revealDiv = [...document.querySelectorAll('.reveal')]

function isVisible(e) {
    const a = e.getBoundingClientRect();

    if (a.bottom >= 0 && a.top <= window.innerHeight) {
        return true;
    }
    return false;
}

function showReveal() {
    revealDiv.forEach(element => {
        isVisible(element) ? element.classList.add('reveal_active') : element.classList.remove('reveal_active')
    });
}

window.addEventListener('scroll', () => showReveal())