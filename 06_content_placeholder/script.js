const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated_bg');
const animated_bg_tests = document.querySelectorAll('.animated_bg_test');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="/images/amden.jpg" alt="Amden">';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, id.';
  profile_img.innerHTML = ' <img src="/images/profile_picture.png" alt="profile picture">';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Jun 11 2021';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

  animated_bg.text.forEach(bg => bg.classList.remove('animated-bg-text'));
}
