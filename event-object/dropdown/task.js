const dropdownVal = document.querySelectorAll('.dropdown__value');
const dropdownLists = document.getElementsByClassName('dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

function listOpen(i) {
    dropdownLists[i].classList.add('dropdown__list_active');
};

function listClose(i) {
    dropdownLists[i].classList.remove('dropdown__list_active');
};

for (let i = 0; i < dropdownVal.length; i++) {
    dropdownVal[i].onclick = function() {
        if (!dropdownLists[i].classList.contains('dropdown__list_active')) {
            listOpen(i);
        } else {
            listClose(i);
        }
    }
}

dropdownItems.forEach(e => {
    e.onclick = function() {
        let parentDropdown = e.closest('.dropdown');
        parentDropdown.children[0].textContent = e.children[0].textContent;
        for (let i = 0; i < dropdownLists.length; i++) {
            listClose(i);
        }
    }
})

dropdownLinks.forEach (e => {
    e.onclick = function() {
        return false;
    }
})