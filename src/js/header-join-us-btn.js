"use strict";

const headerJoinBtnEl = document.querySelector(".header-join-btn");
const navDropdownEl = document.querySelector(".js-dropdown-content");

headerJoinBtnEl.addEventListener('click', toggleNav);
document.addEventListener('click', closeNav);

function toggleNav(event){
  event.stopPropagation();
  navDropdownEl.classList.toggle("appear");
};

function closeNav(){
  navDropdownEl.classList.remove("appear");
};