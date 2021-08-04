const panels = document.querySelectorAll('.panel');
const loveMe = document.querySelector('.loveMe');
const timesLeft = document.querySelector('#timesLeft');
const timesMiddle = document.querySelector('#timesMiddle');
const timesRight = document.querySelector('#timesRight');


let clickTime = 0;
let timesClicked = 0;

panels.forEach(panel => {
  panel.addEventListener('dblclick', (event) => {
    removeActiveClasses();
    panel.classList.add('active');
  })
  
  
})


function removeActiveClasses() {
  panels.forEach(panel => {
      panel.classList.remove('active');
  })
}


const createHeart = (event, panel) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  console.log('x, y ' +  x, y)

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  console.log('leftOffset, topOffset ' + leftOffset, topOffset)

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  console.log('xInside, yInside ' + xInside, yInside)


  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  // loveMe.appendChild(heart);    

  timesLeft.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 5000);
 
}