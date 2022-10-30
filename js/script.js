// ------------ Main Carousel Script with Sweeper JS

var swiper = new Swiper(".mainSwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const header = document.querySelector('.header-container-full');
const logoName = document.querySelector('.logo-name');
const hamburger = document.querySelector('.hamburger');
const hamburgerBox = document.querySelector('.hamburger-box');
const navboxHidden = document.querySelector('.nav-box-hidden');
  
// --------------- Header Colors change on Scroll

window.addEventListener("scroll", (evt) => {
    if (window.scrollY > 60) {
        header.style.backgroundColor = "#DCC79C";
        header.style.position = "fixed";
        header.style.zIndex = "9";
        logoName.style.color = "#2B1104";
        hamburger.style.color = "#2B1104";
    } else {
        header.style.backgroundColor = "#2B1104";
        header.style.position = "";
        logoName.style.color = "#DCC79C";
        hamburger.style.color = "#DCC79C";
    }
});

// --------------- Display Menu-Hidden on Hamburger Click

hamburgerBox.addEventListener("click", (evt) => {
    navboxHidden.classList.toggle("active");
    navboxHidden.style.position = "fixed";
    navboxHidden.style.top = "8em";
});

window.addEventListener("scroll", (evt) => {
    if(navboxHidden.classList.contains('active')) {
        navboxHidden.classList.remove("active");
    }
});

// ----------------------- Section Sweeper Gallery

var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 2,
       slideShadows: true,
    },
    pagination: {
       el: ".swiper-pagination",
     },
 });

 // -------------------- 

var swiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 50,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

});