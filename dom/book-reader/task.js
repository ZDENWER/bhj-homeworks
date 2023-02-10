const fontButtons = [...document.querySelectorAll('.font-size')]
const book = document.getElementById('book')

fontButtons.forEach(element => {
    element.onclick = function() {
        return false
    }
});

const bookControl = document.querySelector('.book__control');
bookControl.addEventListener('click', function(event) {
    let target = event.target;
    fontButtons.forEach(element => {
        element.classList.remove('font-size_active')
    });
    
    if (target.tagName === 'A') {
        target.classList.add('font-size_active')
    }
    

    if (target.getAttribute('data-size') === 'small') {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big')
    } else if (target.getAttribute('data-size') === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small')
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big')
    }
})
