var mainMenuBtn = document.querySelector('.header__main-menu-btn');
var mainMenu = document.querySelectorAll('.header__menu');
var menuImg = document.querySelector('.header__btn-img');

mainMenuBtn.addEventListener('click', openClose);

function openClose(click) {
  mainMenu[0].classList.toggle('open-close-js');
  mainMenu[1].classList.toggle('open-close-js');

  if (mainMenu[0].classList.contains('open-close-js')) {
    menuImg.src = 'img/icon-menu-open.svg';
  } else {
    menuImg.src = 'img/icon-menu-close.svg';
  }
}
