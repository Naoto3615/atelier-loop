document.querySelector('#year').textContent = String(new Date().getFullYear());

const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}
