const menuLinks = Array.from(document.getElementsByClassName('menu__link'))

menuLinks.forEach(e => {
    let next = e.nextElementSibling;
    if(next) {
        let isActive;
        next.parentElement.onclick = function() {

            if (isActive) {
                next.classList.remove('menu_active');
                isActive = false;
            } else {
            next.classList.add('menu_active');
            isActive = true;
            } 

        }      
    }
})

menuLinks.forEach(e =>  {
    if (e.textContent === 'Услуги' || e.textContent === 'О компании') {
        e.onclick = function() {
            return false;
        }
    
    }
})