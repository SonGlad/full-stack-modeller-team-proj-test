(() => {
  // First Menu
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);

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
  const closeMenuBtn2 = document.querySelector('.js-close-menu-2');

  const toggleMenu2 = () => {
    const isMenuOpen2 =
      openMenuBtn2.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn2.setAttribute('aria-expanded', !isMenuOpen2);
    mobileMenu2.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen2
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn2.addEventListener('click', toggleMenu2);
  // closeMenuBtn2.addEventListener('click', toggleMenu2);

  // Close the second mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu2.classList.remove('is-open');
    openMenuBtn2.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1') && !event.target.matches('.dropdown-content1') && !event.target.matches('.dropbtn2') && !event.target.matches('.dropdown-content2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');

      }
    }
  } else if (event.target.matches('.dropbtn1')) {
    document.getElementById("dropdown-content2").classList.remove("show");
  } else if (event.target.matches('.dropbtn2')) {
    document.getElementById("dropdown-content1").classList.remove("show");
  }
}