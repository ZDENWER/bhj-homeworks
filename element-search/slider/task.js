const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const prevBtn = document.getElementsByClassName('slider__arrow_prev');
const nextBtn = document.getElementsByClassName('slider__arrow_next');
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

let activeSlide = 0;
sliderDots[activeSlide].classList.add('slider__dot_active');

nextBtn[0].onclick = function() {
    nextSlide(sliderItems);
};

prevBtn[0].onclick = function() {
    prevSlide(sliderItems);
}

function prevSlide(arr) {
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


/*
function findActiveSlide() {
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slider__item_active')) {
            activeSlide = i;
        }        
    }
}
*/




