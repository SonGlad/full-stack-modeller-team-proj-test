(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();$(".header-nav-content .header-nav-link").click(function(){$(".header-nav-content .header-nav-link").removeClass("active"),$(this).addClass("active")});jQuery.noConflict();$(".list-card-team").slick({infinite:!0,slidesToShow:6.3,speed:500,autoplay:!0,autoplaySpeed:1e3,responsive:[{breakpoint:768,settings:{slidesToShow:1.6,speed:500,autoplay:!0,autoplaySpeed:1e3}},{breakpoint:1264,settings:{slidesToShow:6.3,speed:500,autoplay:!0,autoplaySpeed:1e3}}]});const b=document.querySelector(".header-join-btn"),y=document.querySelector(".js-dropdown-content");b.addEventListener("click",h);document.addEventListener("click",k);function h(n){n.stopPropagation(),y.classList.toggle("appear")}function k(){y.classList.remove("appear")}const o={navBtnEl1:document.querySelector("#dropbtn1"),navBtnEl2:document.querySelector("#dropbtn2"),dropCont1:document.querySelector("#dropdown-content1"),dropCont2:document.querySelector("#dropdown-content2")};o.navBtnEl1.addEventListener("click",E);o.navBtnEl2.addEventListener("click",w);document.addEventListener("click",M);function E(n){n.stopPropagation(),o.dropCont1.classList.toggle("show"),o.dropCont2.classList.contains("show")&&o.dropCont2.classList.remove("show")}function w(n){n.stopPropagation(),o.dropCont2.classList.toggle("show"),o.dropCont1.classList.contains("show")&&o.dropCont1.classList.remove("show")}function M(){o.dropCont1.classList.remove("show"),o.dropCont2.classList.remove("show")}(()=>{const n=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),u=document.querySelector(".js-select-menu-stack"),a=document.querySelector(".js-select-menu-corporate"),e=document.querySelector(".js-select-menu-fundamentals"),t=document.querySelector(".js-select-menu-excel"),d=document.querySelector(".js-select-menu-data"),r=()=>{const c=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!c),n.classList.toggle("is-open");const p=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[p](document.body),i.getAttribute("aria-expanded")==="true"&&l()};s.addEventListener("click",r),u.addEventListener("click",r),a.addEventListener("click",r),e.addEventListener("click",r),t.addEventListener("click",r),d.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&(n.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});const m=document.querySelector(".js-menu-container-2"),i=document.querySelector(".js-open-menu-2"),v=document.querySelector(".js-select-menu-skills"),f=document.querySelector(".js-select-menu-videos"),L=document.querySelector(".js-select-menu-ebooks"),g=document.querySelector(".js-select-menu-blog"),S=document.querySelector(".js-select-menu-newsletter"),l=()=>{const c=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!c),m.classList.toggle("is-open");const p=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[p](document.body),s.getAttribute("aria-expanded")==="true"&&r()};i.addEventListener("click",l),v.addEventListener("click",l),f.addEventListener("click",l),L.addEventListener("click",l),g.addEventListener("click",l),S.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&(m.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
