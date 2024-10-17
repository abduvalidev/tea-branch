// Mobil menyu
const mobileMenu = document.querySelector('.mobile-menu');
const menuContent = document.querySelector('.mobile-menu__content');
const toggleBtns = [document.querySelector('.menu-btn'), document.querySelector('.exit-btn')];

// Mobil menyuni ochish va yopish
if (mobileMenu && menuContent && toggleBtns.every(btn => btn)) {
  toggleBtns.forEach(btn =>
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden', !mobileMenu.classList.contains('hidden'));
    })
  );

  document.addEventListener('click', (event) => {
    if (!menuContent.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      document.body.classList.remove('overflow-hidden');
    }
  });

  menuContent.addEventListener('click', (event) => event.stopPropagation());
}

// Qidiruv funksiyasi
const searchInputs = document.querySelectorAll('.search-input'); // Barcha search inputlarni olish
const searchResult = document.querySelector('.search-result');
const searchResultModal = document.querySelector('.search-result__content');
const optionsResults = document.querySelectorAll('.options-result');
const searchOpenBtns = document.querySelectorAll('.search-btn');
const searchExitBtn = document.querySelector('.search-btn_exit');
const srchExitBtn = document.querySelector('.Search-exitBtn');

// Qidiruv natijalarini ochish
searchOpenBtns.forEach(btn =>
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    searchResult.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  })
);

// Qidiruv natijalarini yopish
searchExitBtn.addEventListener('click', () => {
  optionsResults.forEach(options => options.classList.add('hidden'));
});
srchExitBtn.addEventListener('click', () => {
  searchResult.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

searchInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      optionsResults[index].classList.remove('hidden');
    } else {
      optionsResults[index].classList.add('hidden');
    }
  });
});


document.addEventListener('click', function (event) {
  let isClickInside = false;
  optionsResults.forEach(function (optionResult) {
    if (optionResult.contains(event.target)) {
      isClickInside = true;
    }
  });

  if (!isClickInside) {
    optionsResults.forEach(function (optionResult) {
      optionResult.classList.add('hidden');
    });
  }
});


document.addEventListener('click', (event) => {
  if (!searchResultModal.contains(event.target) && searchResult.classList.contains('hidden') === false) {
    searchResult.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
});
// Product modal
const productModal = document.querySelector('.product-modal');
const productModalContent = document.querySelector('.product-modal__content');
const productModalBtns = document.querySelectorAll('.product-modalBtn');
const productExitBtn = document.querySelector('.product-exitBtn');

if (productModal && productModalContent && productModalBtns.length > 0 && productExitBtn) {
  productModalBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      productModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  productExitBtn.addEventListener('click', () => {
    productModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });

  document.addEventListener('click', (event) => {
    if (!productModalContent.contains(event.target) && productModal.classList.contains('hidden') === false) {
      productModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });
}
