(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();$(".header-nav-content .header-nav-link").click(function(){$(".header-nav-content .header-nav-link").removeClass("active"),$(this).addClass("active")});jQuery.noConflict();$(".list-card-team").slick({infinite:!0,slidesToShow:6.7,speed:500,autoplay:!0,autoplaySpeed:1e3,responsive:[{breakpoint:768,settings:{slidesToShow:1.6,speed:500,autoplay:!0,autoplaySpeed:1e3}},{breakpoint:1200,settings:{slidesToShow:6.7,speed:500,autoplay:!0,autoplaySpeed:1e3}}]});var s=[].slice.call(document.querySelectorAll(".input-js")),u=document.querySelector(".button-js");s.forEach(function(o){o.addEventListener("input",l,!1)});function l(){var o=s.filter(function(n){return n.value.trim()===""}).length;u.disabled=o!==0}l();