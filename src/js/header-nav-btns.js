"use strict";

const refs = {
    navBtnEl1: document.querySelector("#dropbtn1"),
    navBtnEl2: document.querySelector("#dropbtn2"),
    dropCont1: document.querySelector("#dropdown-content1"),
    dropCont2: document.querySelector("#dropdown-content2"),
};

refs.navBtnEl1.addEventListener('click', toggleNav1);
refs.navBtnEl2.addEventListener('click', toggleNav2);
document.addEventListener('click', closeAll);


function toggleNav1(event){
    event.stopPropagation();
    refs.dropCont1.classList.toggle('show');
    if(refs.dropCont2.classList.contains('show')){
        refs.dropCont2.classList.remove('show');
    };
};

function toggleNav2(event){
    event.stopPropagation();
    refs.dropCont2.classList.toggle('show');
    if(refs.dropCont1.classList.contains('show')){
        refs.dropCont1.classList.remove('show');
    };
};

function closeAll(){
    refs.dropCont1.classList.remove('show');
    refs.dropCont2.classList.remove('show');
};