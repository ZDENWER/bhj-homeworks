const fontButtons = [...document.querySelectorAll('.font-size')]

fontButtons.forEach(element => {
    element.onclick = function() {
        return false
    }
});



/*fontButtons[1].addEventListener('click', function(event) {
	var target = event.target;
	alert(target.tagName); //выведет 'p' - абзац
});*/

let a = document.querySelector('.book__control');
a.addEventListener('click', function(event) {
    let b = event.target;
    b.classList.toggle('font-size_active')
    console.log(b.classList)
})