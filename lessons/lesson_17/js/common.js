const menuButton = document.querySelector('.burger');
const header = document.querySelector('header');
const menuToggle = function(){
  header.classList.toggle('menu-opened');
}

menuButton.addEventListener("click", menuToggle);