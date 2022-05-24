// SWAPER
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// activ circle тnavigation
const menuCircle = document.getElementsByClassName('navigation__link');
console.log(menuCircle);
const circle = document.getElementsByClassName('navigation__circle');
const menuToggle = function (elementIndex) {
  for (let item of circle) {
    item.classList.remove('navigation__circle-activ');
  }
  console.log(circle[elementIndex]);
  circle[elementIndex].classList.add('navigation__circle-activ');
};

Array.from(menuCircle).forEach(function (element, index) {
  element.addEventListener("click", function () {
    menuToggle(index);
  });
});
