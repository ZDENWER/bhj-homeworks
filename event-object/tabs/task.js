const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsCont = document.querySelectorAll('.tab__content');

function showTab(number) {
    tabs.forEach(element => {
        element.classList.remove('tab_active')
    });

    tabsCont.forEach(element => {
        element.classList.remove('tab__content_active')
    });

    tabs[number].classList.add('tab_active');
    tabsCont[number].classList.add('tab__content_active');
}

tabs.forEach(e => {
    e.onclick = function() {
        showTab(tabs.indexOf(e))
    }
});
