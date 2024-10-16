// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const menuContent = document.querySelector('.mobile-menu__content');
const toggleBtns = [document.querySelector('.menu-btn'), document.querySelector('.exit-btn')];

if (mobileMenu && menuContent && toggleBtns.every(btn => btn)) {
  toggleBtns.forEach(btn =>
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    })
  );

  document.addEventListener('click', (event) => {
    const isClickInside = menuContent.contains(event.target) || toggleBtns.some(btn => btn.contains(event.target));
    if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      document.body.classList.remove('overflow-hidden');
    }
  });

  menuContent.addEventListener('click', (event) => event.stopPropagation());
}

// Search
const searchInputs = document.querySelector('.search-input');
const searchInputsModal = document.querySelector('.search-input__modal');
const optionsResults = document.querySelector('.options-result');
const optionsResultsModal = document.querySelector('.options-result__modal');
const searchResult = document.querySelector('.search-result');
const searchResultContent = document.querySelector('.search-result__content');
const searchOpenBtns = document.querySelectorAll('.search-btn');
const searchExitBtn = document.querySelector('.search-btn_exit');

// Open search result
searchOpenBtns.forEach(btn =>
  btn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents click from bubbling up
    searchResult.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  })
);

// Close search result
searchExitBtn.addEventListener('click', () => {
  optionsResultsModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

// Hide search result
document.addEventListener('click', (e) => {
  const isClickInside = searchResultContent.contains(e.target) || [...searchOpenBtns].some(btn => btn.contains(e.target));
  if (!isClickInside) {
    searchResult.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
});

// Options
function toggleOpts(input, options) {
  input.addEventListener('click', (event) => {
    options.classList.toggle('hidden');
    event.stopPropagation();
  });
}

function hideOpts(input, options) {
  document.addEventListener('click', (event) => {
    if (!input.contains(event.target) && !options.contains(event.target)) {
      options.classList.add('hidden');
    }
  });
}


// Product Modal
const productModal = document.querySelector('.product-modal');
const productModalContent = document.querySelector('.product-modal__content');
const productModalBtns = document.querySelectorAll('.product-modalBtn'); // Ikkita tugma
const productExitBtn = document.querySelector('.product-exitBtn');

if (productModal && productModalContent && productModalBtns.length > 0 && productExitBtn) {
  const openProductModal = () => {
    productModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  productModalBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      openProductModal();
    });
  });

  productExitBtn.addEventListener('click', () => {
    productModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });

  document.addEventListener('click', (event) => {
    const isClickInside = productModalContent.contains(event.target) || [...productModalBtns].some(btn => btn.contains(event.target));
    if (!isClickInside && !productModal.classList.contains('hidden')) {
      productModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });

  productModalContent.addEventListener('click', (event) => event.stopPropagation());
}



// Initialize toggling
toggleOpts(searchInputs, optionsResults);
toggleOpts(searchInputsModal, optionsResultsModal);
hideOpts(searchInputs, optionsResults);
hideOpts(searchInputsModal, optionsResultsModal);

document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const svgIcon = dropdownBtn.querySelector('.svg-icon');

  // Open dropdown content and rotate svg
  dropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle('hidden');
    svgIcon.classList.toggle('rotate-180');
  });

  document.addEventListener('click', (e) => {
    const isClickInside = dropdownContent.contains(e.target) || dropdownBtn.contains(e.target);
    if (!isClickInside) {
      dropdownContent.classList.add('hidden');
      svgIcon.classList.remove('rotate-180');
    }
  });

  dropdownContent.addEventListener('click', (event) => event.stopPropagation());
});



// Taps
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.tap-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      tabButtons.forEach(btn => {
        btn.classList.remove('tab-active');
        btn.classList.add('tab-noactive');
      });

      tabContents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
      });

      button.classList.add('tab-active');
      button.classList.remove('tab-noactive');
      tabContents[index].classList.remove('hidden');
      tabContents[index].classList.add('active');
    });
  });

  tabButtons[0].click();
});
