let checkboxes = [...document.querySelectorAll('.interests > .interest')]
const eat = document.getElementById('eat')

checkboxes.forEach(el => {
    el.addEventListener('change', () => {
        const parentList = el.closest('ul');
        const parentCheckbox = parentList.parentElement.querySelector('input');
        const doters = [...parentList.querySelectorAll('.interest__check')]
        let counter = 0;
        for (let i = 0; i < doters.length; i++) {
            if (doters[i].checked) {
                counter++;
            }

            if (counter === doters.length) {
                parentCheckbox.checked = true;
                parentCheckbox.indeterminate = false
            } else if (counter === 0) {
                parentCheckbox.checked = false;
                parentCheckbox.indeterminate = false;
            } else {
                parentCheckbox.indeterminate = true;
            }
        }
    })
});

const interestsActive = [...document.querySelectorAll('.interests_active')]

interestsActive.forEach(el => {
    let checkboxSenior = el.parentElement.querySelector('input');
    checkboxSenior.addEventListener('change', () => {
        const childs = el.querySelectorAll('input');
        if (checkboxSenior.checked) {
            childs.forEach(e => e.checked = true)     
        } else {
            childs.forEach(e => e.checked = false)   
        }
    })
})

/*
let a = document.querySelectorAll('.interests_active')
undefined
a[0].parentElement.querySelector('input')
<input type=​"checkbox" class=​"interest__check" id=​"eat">​
a[0].querySelectorAll('input')
NodeList(2) [input.interest__check, input.interest__check]
*/