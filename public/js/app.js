// Mobil menyu
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuContent = document.querySelector('.mobile-menu__content');
const toggleBtns = [document.querySelector('.menu-btn'), document.querySelector('.exit-btn')];

// Login Modal
const loginModal = document.querySelector('.login-modal');
const loginContainer = document.querySelector('.login-container');
const loginBtns = document.querySelectorAll('.login-btn');
const loginBtnsMobile = document.querySelectorAll('.login-btnMobile');
const loginExitBtn = document.querySelector('.login-exitBtn');
const login = document.querySelector('.login');
const forgotPasswordBtn = document.querySelector('.forgot-passwordBtn');
const forgotPassword = document.querySelector('.forgot-password');
const registerBtns = document.querySelectorAll('.register-btn');
const register = document.querySelector('.register');

// Search Modal
const searchInputs = document.querySelectorAll('.search-input');
const intputGroup = document.querySelector('.input-group');
const links = intputGroup.querySelectorAll('a');
const searchResult = document.querySelector('.search-result');
const searchResultModal = document.querySelector('.search-result__content');
const optionsResults = document.querySelector('.options-result');
const searchExitBtns = document.querySelectorAll('.search-btn_exit');
const searchInputMobile = document.querySelector('.search-inputMobile');
const modalContent = document.querySelector('.modal-content')
const searchResultInput = document.querySelector('.search-result__input');
const menuIcon = document.querySelector('.menu-icon');
const exitIcon = document.querySelector('.exit-icon');

// Product Modal
const productModal = document.querySelector('.product-modal');
const productModalContent = document.querySelector('.product-modal__content');
const productModalBtns = document.querySelectorAll('.product-modalBtn');
const productModalBtnsMobile = document.querySelectorAll('.product-modalBtnMobile');
const productExitBtn = document.querySelector('.product-exitBtn');

// Password visibility
const inputs = document.querySelectorAll('.promo-input');
const toggleButtons = document.querySelectorAll('.toggle-visibility');


// Mobile Menu
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

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      mobileMenu.classList.add('hidden'); 
      document.body.classList.remove('overflow-hidden');
    });
  });
}


// Search Modal
searchInputs.forEach(input => {
  input.addEventListener('click', (event) => {
    modalContent.classList.remove('hidden');
    intputGroup.classList.remove('relative', 'hidden');
    searchResultInput.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    exitIcon.classList.remove('hidden');
    searchResultModal.classList.add('py-5', 'md:py-3');
    intputGroup.classList.add('absolute', 'z-50', 'left-1/2', '-translate-x-1/2', 'top-1.5');
    event.stopPropagation();
    searchResult.classList.remove('hidden');
    // searchInputModal.classList.add('z-50');
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
        modalContent.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        exitBtnClicked = false;
      }
    } else {
      searchResultInput.classList.add('hidden');
      searchResult.classList.add('hidden');
      searchResultModal.classList.remove('py-5', 'md:py-3');
      modalContent.classList.add('hidden');
      intputGroup.classList.remove('absolute', 'z-50', 'left-1/2', '-translate-x-1/2', 'top-1.5');
      intputGroup.classList.add('relative', 'hidden');
      menuIcon.classList.remove('hidden');
      exitIcon.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      exitBtnClicked = false;
    }
  });
});

// Link
links.forEach(link => {
  link.addEventListener('click', () => {
    searchInputs.forEach(input => {
      input.value = ''; 
    });

    if (!searchResult.classList.contains('hidden')) {
      searchResult.classList.add('hidden');
      searchResultModal.classList.remove('py-5', 'md:py-3');
      modalContent.classList.add('hidden');
      intputGroup.classList.remove('absolute', 'z-50', 'left-1/2', '-translate-x-1/2', 'top-1.5');
      intputGroup.classList.add('relative', 'hidden');
      searchResultInput.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      exitIcon.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
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
    searchResultModal.classList.remove('py-5', 'md:py-3');
    modalContent.classList.add('hidden');
    intputGroup.classList.remove('absolute', 'z-50', 'left-1/2', '-translate-x-1/2', 'top-1.5');
    intputGroup.classList.add('relative', 'hidden');
    searchResultInput.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    exitIcon.classList.add('hidden');
    // searchInputModal.classList.remove('z-50');
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
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      document.body.classList.add('overflow-hidden');
    });
  });
  productModalBtnsMobile.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      productModal.classList.remove('hidden');
      mobileMenu.classList.add('hidden');
      // Toggle Change
      const isMenuHidden = mobileMenu.classList.contains('hidden');
      if (isMenuHidden) {
        toggleBtns[0].classList.remove('hidden');
        toggleBtns[1].classList.add('hidden');
      }
      document.body.classList.add('overflow-hidden');
    });
  })

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
      login.classList.remove('hidden');
      toggleBtns.forEach(b => b.classList.toggle('hidden'));
      document.body.classList.add('overflow-hidden');
    });
  });
  loginBtnsMobile.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      // Toggle Change
      const isMenuHidden = mobileMenu.classList.contains('hidden');
      if (isMenuHidden) {
        toggleBtns[0].classList.remove('hidden');
        toggleBtns[1].classList.add('hidden');
      }
      register.classList.add('hidden');
      login.classList.remove('hidden');
      loginModal.classList.remove('hidden');
      mobileMenu.classList.add('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  loginExitBtn.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    login.classList.remove('hidden');
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
