const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar')
let display = true;
hamburger.addEventListener('click', function () {
  if (display == true) {
    nav.style.display = 'block';
    display = false;
  } else {
    nav.style.display = 'none';
    display = true;
  }
  // if (nav.style.display = 'block') {
  //   nav.style.display = 'none'
  // }
})
// let options = {
//   strings: ['Front End Developer', 'UI Designer', 'Mern Stack Developer'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true
// };

// let typed = new Typed('.typing', options);