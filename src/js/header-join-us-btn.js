"use strict";
(() => {
const refs = {
    headerJoinBtnEl: document.querySelector(".header-join-btn"),
    navJoinBtnEl: document.querySelector("#join-btn-nav"),
  };

  refs.headerJoinBtnEl.addEventListener("click", toggleNav);
  document.addEventListener("click", closeNav);

  function toggleNav(event) {
    event.stopPropagation();
    refs.navJoinBtnEl.classList.toggle("appear");
  }

  function closeNav() {
    refs.navJoinBtnEl.classList.remove("appear");
  }
})();

