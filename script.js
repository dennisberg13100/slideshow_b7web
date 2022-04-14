let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > totalSlides-1) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = currentSlide * 100;
    document.querySelector('.slider--width').style.marginLeft= `-${newMargin}vw`;
}

setInterval(goNext, 5000)