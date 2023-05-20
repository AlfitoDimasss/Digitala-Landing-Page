const hamburgerButton = document.getElementById('hamburgerButton');
const navLink = document.getElementsByClassName('nav-bar__link')[0];
hamburgerButton.addEventListener('click', function () {
  navLink.classList.toggle('open');
})