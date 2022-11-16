const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
})
// let options = {
//   strings: ['Front End Developer', 'UI Designer', 'Mern Stack Developer'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true
// };

// let typed = new Typed('.typing', options);