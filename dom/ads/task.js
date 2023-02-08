
const rotators = [...document.querySelectorAll('.rotator')]
let arr = [];

function changeCase() {
    for (childArr of rotators) {
        arr = [...childArr.children];
        let activeCaseIndex = arr.findIndex((element) => element.classList.contains('rotator__case_active'));
        let nextCaseIndex;
        if (activeCaseIndex < arr.length - 1){
            nextCaseIndex = (activeCaseIndex + 1);
        } else {
            nextCaseIndex = 0;
        }
        arr[activeCaseIndex].classList.remove('rotator__case_active');
        arr[nextCaseIndex].classList.add('rotator__case_active');
        arr[nextCaseIndex].style.color = arr[nextCaseIndex].dataset.color;
    }        
}

setInterval(changeCase, 1000)





/*
activeCaseIndex === arr.length -1 ? nextCaseIndex = 0 : nextCaseIndex = activeCaseIndex++;
const rotatorArr = [...document.querySelectorAll('.rotator__case')]
let activeCase = 0;

function showCase () {
    let _activeCase = activeCase;
    rotatorArr[_activeCase].classList.remove('rotator__case_active');
    _activeCase === rotatorArr.length - 1 ? _activeCase = 0 : _activeCase++;
    rotatorArr[_activeCase].classList.add('rotator__case_active');
    activeCase = _activeCase;
} 
    
setInterval(showCase, 1000)
*/