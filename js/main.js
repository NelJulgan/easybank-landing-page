import '../css/main.css';

const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

const navToggleFunc = function () {
  navToggleBtn.classList.toggle('active');
  navbarNav.classList.toggle('active');
};

navToggleBtn.addEventListener('click', navToggleFunc);
