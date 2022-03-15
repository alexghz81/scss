const swiper = new Swiper('.swiper-container', {
  spaceBetween: 80,
  slidesPerView: "auto",
  centeredSlides: true,
  breakpoints: {
    769: {
      width: 320,
      spaceBetween: 80,
    },
    321: {
      width: 320,
      spaceBetween: 28,
    },
    0: {
      width: 280,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="dot swiper-pagination-bullet"></span>`;
        },
      }
    }
  },
});

const popup = document.querySelector('.popup');
const registerBtns = document.querySelectorAll('.button');
const inputs = document.querySelectorAll('.form__input');

function openRegisterPopup() {
  popup.classList.add('popup_opened');
}

function inputFocus(input) {
  const inputPlaceholder = input.target.placeholder;
  input.target.placeholder = '';
  console.log(inputPlaceholder);
  input.target.addEventListener('focusout', () => {
    input.target.placeholder = inputPlaceholder;
  });
}

registerBtns.forEach(item => item.addEventListener('click', openRegisterPopup));
inputs.forEach(item => item.addEventListener('focus', inputFocus));
