// Mobil menyu
const mobileMenu = document.querySelector('.mobile-menu');
const menuContent = document.querySelector('.mobile-menu__content');
const toggleBtns = [document.querySelector('.menu-btn'), document.querySelector('.exit-btn')];

// Login Modal
const loginModal = document.querySelector('.login-modal');
const loginContainer = document.querySelector('.login-container');
const loginBtns = document.querySelectorAll('.login-btn');
const loginExitBtn = document.querySelector('.login-exitBtn');
const login = document.querySelector('.login');
const forgotPasswordBtn = document.querySelector('.forgot-passwordBtn');
const forgotPassword = document.querySelector('.forgot-password');
const registerBtns = document.querySelectorAll('.register-btn');
const register = document.querySelector('.register');

// Search Modal
const searchInputs = document.querySelectorAll('.search-input');
const searchResult = document.querySelector('.search-result');
const searchResultModal = document.querySelector('.search-result__content');
const optionsResults = document.querySelector('.options-result');
const searchInputModal = document.querySelector('.search-inputModal');
const searchExitBtns = document.querySelectorAll('.search-btn_exit');
const searchInputMobile = document.querySelector('.search-inputMobile')

// Product Modal
const productModal = document.querySelector('.product-modal');
const productModalContent = document.querySelector('.product-modal__content');
const productModalBtns = document.querySelectorAll('.product-modalBtn');
const productExitBtn = document.querySelector('.product-exitBtn');

// Password visibility
const inputs = document.querySelectorAll('.promo-input');
const toggleButtons = document.querySelectorAll('.toggle-visibility');



// Mobile Menu Hide
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
    } else if (!mobileMenu.contains(event.target) && !toggleBtns.every(btn => btn.classList.contains('hidden'))) {
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      document.body.classList.add('overflow-hidden');
    }
  });

  menuContent.addEventListener('click', (event) => event.stopPropagation());
}


// Search Modal
searchInputs.forEach(input => {
  input.addEventListener('click', (event) => {
    event.stopPropagation();
    searchResult.classList.remove('hidden');
    searchInputModal.classList.add('z-50');
    document.body.classList.add('overflow-hidden');
  });

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      optionsResults.classList.remove('hidden');
    } else {
      optionsResults.classList.add('hidden');
    }
  });
});

let exitBtnClicked = false;

searchExitBtns.forEach(searchExitBtn => {
  searchExitBtn.addEventListener('click', () => {
    const anyInputHasValue = Array.from(searchInputs).some(input => input.value.trim() !== '');
    const optionsVisible = !optionsResults.classList.contains('hidden');

    if (optionsVisible && anyInputHasValue) {
      if (!exitBtnClicked) {
        searchInputs.forEach(input => input.value = '');
        optionsResults.classList.add('hidden');
        exitBtnClicked = true;
      } else {
        searchResult.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        exitBtnClicked = false;
      }
    } else {
      searchResult.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      exitBtnClicked = false;
    }
  });
});

document.addEventListener('click', function (event) {
  let isClickInside = false;

  if (optionsResults.contains(event.target)) {
    isClickInside = true;
  }

  if (!isClickInside) {
    optionsResults.classList.add('hidden');
    searchInputs.forEach(input => {
      input.value = '';
    });
  }
});

document.addEventListener('click', (event) => {
  if (!searchResultModal.contains(event.target) && !searchResult.classList.contains('hidden')) {
    searchResult.classList.add('hidden');
    searchInputModal.classList.remove('z-50');
    document.body.classList.remove('overflow-hidden');
  }
});

// Product modal

if (productModal && productModalContent && productModalBtns.length > 0 && productExitBtn) {
  productModalBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      productModal.classList.remove('hidden');
      mobileMenu.classList.add('hidden');
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


// Login Modal

if (loginModal && loginContainer && loginBtns.length > 0 && loginExitBtn) {
  loginBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      loginModal.classList.remove('hidden');
      mobileMenu.classList.add('hidden');
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      document.body.classList.add('overflow-hidden');
    });
  });

  loginExitBtn.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    login.classList.remove('hidden');
  });

  document.addEventListener('click', (event) => {
    if (!loginContainer.contains(event.target) && loginModal.classList.contains('hidden') === false) {
      loginModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      login.classList.remove('hidden');
    }
  });
}


// Login Step
forgotPasswordBtn.addEventListener('click', () => {
  login.classList.add('hidden');
  forgotPassword.classList.remove('hidden');
});

registerBtns.forEach(btn => btn.addEventListener('click', () => {
  login.classList.add('hidden');
  register.classList.remove('hidden');
  forgotPassword.classList.add('hidden');
}));

document.addEventListener('click', (event) => {
  const isClickInside =
    forgotPassword.contains(event.target) ||
    register.contains(event.target) ||
    forgotPasswordBtn.contains(event.target) ||
    Array.from(registerBtns).some(btn => btn.contains(event.target));

  if (!isClickInside) {
    forgotPassword.classList.add('hidden');
    register.classList.add('hidden');
  }
});




// Password visibility
document.addEventListener('DOMContentLoaded', () => {
  const passwordInputs = document.querySelectorAll('.password-input');
  const toggleButtons = document.querySelectorAll('.toggle-password');

  passwordInputs.forEach((passwordInput, index) => {
    let originalText = '';
    let isPasswordHidden = true;

    passwordInput.addEventListener('input', (e) => {
      const currentValue = e.target.value;

      if (passwordInput.selectionStart === 0 && passwordInput.selectionEnd === currentValue.length) {
        originalText = '';
      } else {
        if (currentValue.length > originalText.length) {
          const addedCharacter = currentValue.slice(-1);
          originalText += addedCharacter;
        } else {
          originalText = originalText.slice(0, -1);
        }
      }

      if (isPasswordHidden) {
        e.target.value = '*'.repeat(originalText.length);
      }
    });

    toggleButtons[index].addEventListener('click', () => {
      const eyeIcon = toggleButtons[index].querySelector('.eye-icon');

      if (isPasswordHidden) {
        passwordInput.value = originalText; 
        eyeIcon.querySelector('.eye-open').classList.add('hidden');
        eyeIcon.querySelector('.eye-closed').classList.remove('hidden');
      } else {
        passwordInput.value = '*'.repeat(originalText.length);
        eyeIcon.querySelector('.eye-open').classList.remove('hidden');
        eyeIcon.querySelector('.eye-closed').classList.add('hidden');
      }
      isPasswordHidden = !isPasswordHidden;
    });
  });
});
