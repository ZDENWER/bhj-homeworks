const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const prevBtn = document.getElementsByClassName('slider__arrow_prev');
const nextBtn = document.getElementsByClassName('slider__arrow_next');
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

function showSlide(number) {
    sliderItems[activeSlide].classList.remove('slider__item_active');
    sliderDots[activeSlide].classList.remove('slider__dot_active');
    let targetSlide;
    if (number < 0) {
        targetSlide = (sliderItems.length - 1);
    } else if (number > (sliderItems.length - 1)) {
        targetSlide = 0;
    } else {
        targetSlide = number;
    }

    sliderItems[targetSlide].classList.add('slider__item_active');
    sliderDots[targetSlide].classList.add('slider__dot_active');
    activeSlide = targetSlide;
}

let activeSlide = findActiveSlide();
sliderDots[activeSlide].classList.add('slider__dot_active');

sliderDots.forEach(e => 
    e.onclick = function() {
        showSlide(sliderDots.indexOf(e))
    })

nextBtn[0].onclick = function() {
    showSlide(findActiveSlide() + 1);
};

prevBtn[0].onclick = function() {
    showSlide(findActiveSlide() - 1);
}

function findActiveSlide() {
    return sliderItems.findIndex(e => e.classList.contains('slider__item_active'))
}

/*function prevSlide(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.classList.contains('slider__item_active')) {
                element.classList.remove('slider__item_active');
                sliderDots[activeSlide].classList.remove('slider__dot_active');
                activeSlide = arr.indexOf(element);
            if (activeSlide === 0) {
                activeSlide = (arr.length - 1);
            } else {
                activeSlide--
            }

            arr[activeSlide].classList.add('slider__item_active');
            sliderDots[activeSlide].classList.add('slider__dot_active');
            return;
        }
    }
}

function nextSlide(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.classList.contains('slider__item_active')) {
                element.classList.remove('slider__item_active');
                sliderDots[activeSlide].classList.remove('slider__dot_active');
                activeSlide = arr.indexOf(element);
            if (activeSlide === (arr.length - 1)){
                activeSlide = 0;
            } else {
                activeSlide++
            }

            arr[activeSlide].classList.add('slider__item_active');
            sliderDots[activeSlide].classList.add('slider__dot_active');
            return;
        }
    }
} 

sliderDots.forEach(e => {
    e.onclick = function() {
        sliderItems[activeSlide].classList.remove('slider__item_active');
        sliderDots[activeSlide].classList.remove('slider__dot_active');
        activeSlide = sliderDots.indexOf(e);
        sliderItems[activeSlide].classList.add('slider__item_active');
        sliderDots[activeSlide].classList.add('slider__dot_active');
    }
});
*/