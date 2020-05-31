$(function () {
   //Mixitup
   try {
      var mixer = mixitup(".release__inner-items");
   } catch (error) {}
   //Mixitup
   //Slider//
   $(".featured__slider-inner").slick({
      nextArrow: '<i class="lnr-chevron-right"></i>',
      prevArrow: '<i class="lnr-chevron-left"></i>',
      autoplay: {
         delay: 3000,
      },
   });
   $(".followers__slider-inner").slick({
      nextArrow: '<i class="lnr-chevron-right"></i>',
      prevArrow: '<i class="lnr-chevron-left"></i>',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: {
         delay: 3000,
      },
   });
   var mySwiper = new Swiper(".feedback__container-swiper", {
      containerModifierClass: "feedback__container-swiper",
      slideClass: "feedback__item",
      wrapperClass: "feedback__inner-items",
      loop: true,
      slidesPerView: 2,
      slidesToScroll: 2,
      spaceBetween: 30,
      navigation: {
         nextEl: ".feedback__button-next",
         prevEl: ".feedback__button-prev",
      },
   });
   //Slider//
   //RateYo//
   $(".rateyo-release").rateYo({
      rating: 4.5,
      starWidth: "12px",
      readOnly: true,
      spacing: "4px",
   });
   $(".rateyo-featured").rateYo({
      rating: 4.5,
      starWidth: "15px",
      readOnly: true,
      spacing: "4px",
   });
   //RateYo//
   //Filter//
   $(".release__titlebox-filter").click(function () {
      $(".filter__dropdown").fadeToggle({});
   });
   //Filter//
   //Dropdown//
   var menuBtn1 = $(".box__icon-1"),
      menu1 = $(".header__menu-alarm");
   menuBtn1.on("click", function () {
      if ($(this).hasClass("visible")) {
         $(this).removeClass("visible");
         menu1.slideUp();
      } else {
         $(this).addClass("visible");
         menu1.slideDown();
      }
   });
   $(document).click(function (e) {
      if (
         !menuBtn1.is(e.target) &&
         !menu1.is(e.target) &&
         menu1.has(e.target).length === 0 &&
         menuBtn1.has(e.target).length === 0
      ) {
         menu1.slideUp();
         menuBtn1.removeClass("visible");
      }
   });

   var menuBtn2 = $(".box__icon-2"),
      menu2 = $(".header__menu-message");
   menuBtn2.on("click", function () {
      if ($(this).hasClass("visible")) {
         $(this).removeClass("visible");
         menu2.slideUp();
      } else {
         $(this).addClass("visible");
         menu2.slideDown();
      }
   });
   $(document).click(function (e) {
      if (
         !menuBtn2.is(e.target) &&
         !menu2.is(e.target) &&
         menu2.has(e.target).length === 0 &&
         menuBtn2.has(e.target).length === 0
      ) {
         menu2.slideUp();
         menuBtn2.removeClass("visible");
      }
   });

   var menuBtn3 = $(".box__icon-3"),
      menu3 = $(".header__menu-cart");
   menuBtn3.on("click", function () {
      if ($(this).hasClass("visible")) {
         $(this).removeClass("visible");
         menu3.slideUp();
      } else {
         $(this).addClass("visible");
         menu3.slideDown();
      }
   });
   $(document).click(function (e) {
      if (
         !menuBtn3.is(e.target) &&
         !menu3.is(e.target) &&
         menu3.has(e.target).length === 0 &&
         menuBtn3.has(e.target).length === 0
      ) {
         menu3.slideUp();
         menuBtn3.removeClass("visible");
      }
   });
   //Dropdown//
   
   //Hamburger
   $(".menu__item").on("click", function () {
      $(this).children(".menu__submenu-list").toggleClass("active");
   });
   
   $(".menu__item.menu__item--bigmenu").on("click", function () {
      $(".menu__box").toggleClass("large");
   });
   $(document).click(function (e) {
      if (
         !$(".menu__item.menu__item--bigmenu").is(e.target) &&
         !$(".menu__item.menu__item--bigmenu").has(e.target).length === 0
      ) {
         $(".menu__box").removeClass("large");
         $(".menu__submenu-list--bigmenu").removeClass("active");
      }
   });
   //Hamburger
});
