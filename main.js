var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides:true,
  breakpoints:{
    0:{slidesPerView:2,},
    568:{slidesPerView:3,},
    768:{slidesPerView:4}
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
