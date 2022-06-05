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
  autoplay: {
    delay: 4000,
  },
});

let swiperHeader = new Swiper(".mySwiperHeader", {
  slidesPerView: 1,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination-header",
    clickable: true,
  },
  // autoplay: {
  //   delay: 4000,
  // },
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


// BURGER
const menuButton = document.querySelector('.button-header.burger:not(.burger-active)');
const menuButtonClose = document.querySelector('.button-header.burger.burger-active');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
const burgerMenuLinks = Array.from(burgerMenu.querySelectorAll('a'));

burgerMenuLinks.map(item => {
  item.addEventListener("click", () => {
    burgerMenu.style.display = 'none';
    burgerMenuOverlay.style.display = 'none';
  });
}); 
menuButton.addEventListener("click", () => {
  burgerMenu.style.display = 'block';
  burgerMenuOverlay.style.display = 'block';
});
menuButtonClose.addEventListener("click", () => {
  burgerMenu.style.display = 'none';
  burgerMenuOverlay.style.display = 'none';
});
burgerMenuOverlay.addEventListener("click", () => {
  burgerMenu.style.display = 'none';
  burgerMenuOverlay.style.display = 'none';
});


// validation form 

const loadUser = document.getElementById('js-load-user');
const url = 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';
const headers = { 'Content-Type': 'application/json' };
console.log('!!!');
loadUser.addEventListener('click', () => {
  console.log('!!!');
  const username = document.getElementById('username').value,
    email = document.getElementById('email').value
  const body = {
    role: 2,
    username: username,
    email: email
  };
  console.log(body);
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        const formSuccess = document.getElementById('js-form-success');
        formSuccess.innerText = data.message.ua + '!!!';
        formSuccess.classList.remove("hidden");
        setTimeout(() => {
          formSuccess.classList.add("hidden");
          console.log("Delayed for 5 second.");
        }, "5000");
      } else {
        if (data.message.ua == 'Під цим емейлом уже зареєстровано користувача') {
          console.log(data.message.ua);
          const formError = document.querySelector('.form-error-email');
          formError.innerText = data.message.ua + '!!!';
          formError.classList.remove("hidden");
          setTimeout(() => {
            formError.classList.add("hidden");
            console.log("Delayed for 5 second.");
          }, "5000");
        } else {
          console.log(data.message.ua);
          const formErrorUser = document.querySelector('.form-error-user');
          formErrorUser.innerText = data.message.ua + '!!!';
          formErrorUser.classList.remove("hidden");
          setTimeout(() => {
            formErrorUser.classList.add("hidden");
            console.log("Delayed for 5 second.");
          }, "5000");
        }
      }
    })
});

// header 
let header = document.querySelector('.sticky__header');

window.addEventListener('scroll', () => {
    let yPosition = window.scrollY;
    console.log(yPosition);
    if (yPosition > 150) {
        header.classList.add('sticked');
    }
    if (yPosition < 100){
        header.classList.remove('sticked');
    }
});
