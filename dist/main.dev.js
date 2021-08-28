"use strict";

var searchBtn = document.querySelector('#search-btn');
var searchBar = document.querySelector('.search-bar-container');
var formBtn = document.querySelector('#login-btn');
var loginForm = document.querySelector('.login-form-contaier');
var formClose = document.querySelector('#form-close');
var menu = document.querySelector('#menu-bar');
var navBar = document.querySelector('.navbar');
var videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = function () {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
  navBar.classList.remove('active');
  loginForm.classList.remove('active');
};

menu.addEventListener('click', function () {
  menu.classList.toggle('fa-times');
  navBar.classList.toggle('active');
});
searchBtn.addEventListener('click', function () {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', function () {
  loginForm.classList.add('active');
});
formClose.addEventListener('click', function () {
  loginForm.classList.remove('active');
});
videoBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    var src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});
var swiper = new Swiper(".review-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    spaceBetween: 20,
    loop: true
  }
});
var swiper = new Swiper(".brand-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    spaceBetween: 20,
    loop: true
  }
});
//# sourceMappingURL=main.dev.js.map
