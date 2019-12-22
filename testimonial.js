// Get the slider images
const slides = document.querySelectorAll('.slider');
console.log(slides);
// Get the left and right arrow
const leftArrow = document.querySelector('#button--left');
const rightArrow = document.querySelector('#button--right');
// Set the current slide
let current = 0;

startSlide();

// Clear all images
function reset() {
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    // Show the first image
    slides[0].style.display = 'block';
}

// Show previous slide
function slideLeft() {
    reset();
    slides[current - 1].style.display = 'block';
    current--;
}

// Show next slide 
function slideRight() {
    reset();
    slides[current + 1].style.display = 'block';
    current++;
}

// Click left arrow
leftArrow.addEventListener('click', () => {
    if(current === 0){
        current = slides.length;
    }
    slideLeft();
});

// Click right arrow
rightArrow.addEventListener('click', () => {
    if(current === slides.length - 1){
        current = -1;
        console.log(current);
    }
    slideRight();
})
