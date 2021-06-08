const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if(idx > img.length - 1) {
    idx = 0;
  } else if(idx < 0){
    idx = img.length -1;
  }
  imgs.style.transform = `translateX(${-idx * 800}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
})

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
})


// add ripple effect to the buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  })
})
