let searchBtn= document.querySelector('#search-btn');
let searchBar= document.querySelector('.search-bar-container');
let formBtn= document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-contaier');
let formClose= document.querySelector('#form-close');
let menu= document.querySelector('#menu-bar');
let navBar= document.querySelector('.navbar');
let videoBtn= document.querySelectorAll('.vid-btn');


window.onscroll= function(){
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

searchBtn.addEventListener('click', function(){
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

formBtn.addEventListener('click', function(){
    loginForm.classList.add('active');
    

});
formClose.addEventListener('click', function(){
    loginForm.classList.remove('active');
});

videoBtn .forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src =src;
    });
});

var swiper = new Swiper(".review-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      spaceBetween:20,
      loop:true,
    },
    
  });

  var swiper = new Swiper(".brand-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      spaceBetween:20,
      loop:true,
    },
    
  });




