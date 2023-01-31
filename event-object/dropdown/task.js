const dropdownVal = document.getElementsByClassName('dropdown__value');
const dropdownList = document.getElementsByClassName('dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

function listOpen() {
    dropdownList[0].classList.add('dropdown__list_active');
};

function listClose() {
    dropdownList[0].classList.remove('dropdown__list_active');
}

dropdownVal[0].onclick = function() {
    
    if (!dropdownList[0].classList.contains('dropdown__list_active')) {
        listOpen();
    } else {
        listClose();
    }
};

dropdownItems.forEach(e => {
    e.onclick = function() {
        let parentDropdown = e.closest('.dropdown');// Все хуйня, не работает
        parentDropdown.children[1].textContent = e.children[0].textContent;//
        listClose();
    }
})

dropdownLinks.forEach (e => {
    e.onclick = function() {
        return false;
    }
})