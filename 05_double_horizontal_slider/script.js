const sliderContainer = document.querySelector('.container');
const slideBottom = document.querySelector('.bottom-slide');
const slideTop = document.querySelector('.top-slide');
const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');
const slidesLength = slideBottom.querySelectorAll('.context-box').length;

let activeSlideIndex = 0;

slideTop.style.right = `-${(slidesLength - 1) * 100}vw`;

rightButton.addEventListener('click', () => changeSlide('right'));

leftButton.addEventListener('click', () => changeSlide('left'));

const changeSlide = (direction) => {
  const sliderWidth = sliderContainer.clientWidth;
  if (direction === 'right') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength -1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'left') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
   }
   slideTop.style.transform = `translateX(-${activeSlideIndex * sliderWidth}px)`;
   slideBottom.style.transform = `translateX(-${(slidesLength - 1 - activeSlideIndex) * sliderWidth}px)`;
}
