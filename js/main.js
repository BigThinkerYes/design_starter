const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.4;

//  setting first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
  // reset opacity to 1
  imgs.forEach(img => (img.style.opacity = 1));

  // current image clicked
  current.src = e.target.src;

  // fade-in
  //current.classList.add('fade-in');
  //setTimeout(() => current.classList.remove('fade-in'), 50);

  // change opacity
  e.target.style.opacity = opacity;
}