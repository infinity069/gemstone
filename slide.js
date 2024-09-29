var swiper = new Swiper(".bannerSlide", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 15,
    initialSlide: 1,
    centeredSlides: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
  });

  var swiper = new Swiper(".myBar", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "fade",
  });

  var swiper = new Swiper(".myRooms", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    spaceBetween: 30
  });

  var swiper = new Swiper(".kitchenSlide", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 15,
    initialSlide: 1,
    effect: "fade",
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });