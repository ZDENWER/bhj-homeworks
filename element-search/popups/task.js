const modal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('a.show-success');
const closer = document.querySelectorAll('div.modal__close_times');

modal.classList.add('modal_active');

showSuccess.onclick = function() {
    modal.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

closer.forEach(e => e.onclick = function() {
    modal.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active')
})

