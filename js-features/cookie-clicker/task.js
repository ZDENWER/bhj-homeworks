const image = document.getElementById('cookie');
let clicker__counter = document.getElementById('clicker__counter');

image.onclick = function() {
    let isSmall;

    if (this.isSmall) {
        image.width = 200,
        this.isSmall = false;
    } else {
        image.width = 150,
        this.isSmall = true;
    }

clicker__counter.textContent++;
}