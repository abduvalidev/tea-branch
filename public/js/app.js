// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const menuContent = document.querySelector('.mobile-menu__content');
const toggleBtns = [document.querySelector('.menu-btn'), document.querySelector('.exit-btn')];

if (mobileMenu && menuContent && toggleBtns.every(btn => btn)) {
  toggleBtns.forEach(btn => btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.toggle('hidden')); 
    mobileMenu.classList.toggle('hidden'); 
    document.body.classList.toggle('overflow-hidden'); 
  }));

  document.addEventListener('click', (event) => {
    const isClickInside = menuContent.contains(event.target) || toggleBtns.some(btn => btn.contains(event.target));
    if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      toggleBtns.forEach(b => b.classList.toggle('hidden')); 
      document.body.classList.remove('overflow-hidden');
    }
  });

  menuContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const searchResult = document.querySelector('.search-result');
  const searchResultContent = document.querySelector('.search-result__content'); 
  const searchOpenBtn = document.querySelector('.search-btn'); 
  const searchExitBtn = document.querySelector('.search-btn_exit');

  searchOpenBtn.addEventListener('click', () => {
      searchResult.classList.remove('hidden'); 
      searchOpenBtn.classList.add('hidden'); 
      searchExitBtn.classList.remove('hidden'); 
      document.body.classList.add('overflow-hidden');
  });

  searchExitBtn.addEventListener('click', () => {
      searchResult.classList.add('hidden'); 
      searchExitBtn.classList.add('hidden'); 
      searchOpenBtn.classList.remove('hidden'); 
      document.body.classList.remove('overflow-hidden'); 
  });

  document.addEventListener('click', (event) => {
      const isClickInside = searchResultContent.contains(event.target) || searchOpenBtn.contains(event.target) || searchExitBtn.contains(event.target);

      if (!isClickInside && !searchResult.classList.contains('hidden')) {
          searchResult.classList.add('hidden'); 
          searchExitBtn.classList.add('hidden'); 
          searchOpenBtn.classList.remove('hidden'); 
          document.body.classList.remove('overflow-hidden'); 
      }
  });

  searchResultContent.addEventListener('click', (event) => {
      event.stopPropagation();
  });
});
