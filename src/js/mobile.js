(() => {
  // First Menu
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');
  const selectMenuStack = document.querySelector('.js-select-menu-stack');
  const selectMenuCorporate = document.querySelector('.js-select-menu-corporate');
  const selectMenuFundamentals = document.querySelector('.js-select-menu-fundamentals');
  const selectMenuExcel = document.querySelector('.js-select-menu-excel');
  const selectMenuData = document.querySelector('.js-select-menu-data');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  
        // Close the second menu if it's open
        if (openMenuBtn2.getAttribute('aria-expanded') === 'true') {
          toggleMenu2();
        }
      };

  openMenuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);
  selectMenuStack.addEventListener('click', toggleMenu);
  selectMenuCorporate.addEventListener('click', toggleMenu);
  selectMenuFundamentals.addEventListener('click', toggleMenu);
  selectMenuExcel.addEventListener('click', toggleMenu);
  selectMenuData.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

// Second Menu
  const mobileMenu2 = document.querySelector('.js-menu-container-2');
  const openMenuBtn2 = document.querySelector('.js-open-menu-2');
  // const closeMenuBtn2 = document.querySelector('.js-close-menu-2');
  const selectMenuSkills = document.querySelector('.js-select-menu-skills');
  const selectMenuVideos = document.querySelector('.js-select-menu-videos');
  const selectMenuEbooks = document.querySelector('.js-select-menu-ebooks');
  const selectMenuBlog = document.querySelector('.js-select-menu-blog');
  const selectMenuNewsletter = document.querySelector('.js-select-menu-newsletter');

  const toggleMenu2 = () => {
    const isMenuOpen2 =
      openMenuBtn2.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn2.setAttribute('aria-expanded', !isMenuOpen2);
    mobileMenu2.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen2
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
 

       // Close the first menu if it's open
       if (openMenuBtn.getAttribute('aria-expanded') === 'true') {
        toggleMenu();
      }
    };

  openMenuBtn2.addEventListener('click', toggleMenu2);
  // closeMenuBtn2.addEventListener('click', toggleMenu2);
  selectMenuSkills.addEventListener('click', toggleMenu2);
  selectMenuVideos.addEventListener('click', toggleMenu2);
  selectMenuEbooks.addEventListener('click', toggleMenu2);
  selectMenuBlog.addEventListener('click', toggleMenu2);
  selectMenuNewsletter.addEventListener('click', toggleMenu2);

  // Close the second mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu2.classList.remove('is-open');
    openMenuBtn2.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    
  });
})();