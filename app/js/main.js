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
      responsive: [
         {
           breakpoint: 680,
           settings: {
            arrows: false
           }
         },
       ]
   });
   $(".followers__slider-inner").slick({
      nextArrow: '<i class="lnr-chevron-right"></i>',
      prevArrow: '<i class="lnr-chevron-left"></i>',
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: {
      //    delay: 3000,
      // },
      responsive: [
         {
           breakpoint: 1050,
           settings: {
            slidesToShow: 2
           }
         },
         {
            breakpoint: 730,
            settings: {
               slidesToShow: 1
            }
          }
       ]
   });
   var mySwiper = new Swiper(".feedback__container-swiper", {
      containerModifierClass: "feedback__container-swiper",
      slideClass: "feedback__item",
      wrapperClass: "feedback__inner-items",
      loop: true,
      spaceBetween: 30,
      navigation: {
         nextEl: ".feedback__button-next",
         prevEl: ".feedback__button-prev",
      },
      breakpoint: {
         1230: {
           slidesPerView: 1,
           slidesToScroll: 1,
         }
       }
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
   $(".menu__item").on("click", function (e) {
      if ($(".menu__submenu-item").children().is(e.target)) {
      } else {
         $(this).children(".menu__submenu-list").toggleClass("active");
      }
   });
   $(".menu__item--bigmenu").on("click", function (e) {
      // if ($(".menu__submenu-item").children().is(e.target)) {
      // } else {
      //    $(this).children(".menu__submenu-list").toggleClass("active");
      // }
      if ($('.menu__submenu-item').is(e.target) && $('.menu__submenu-list.menu__submenu-list--bigmenu').is(e.target)) {
         console.log('Подсписок биг меню');
      }else {
         console.log('Биг меню');
      }
      
   });
   $(document).click(function (e) {
      if (!$(".hamburger-menu").children(e.target)) {
         $(".menu__box").slideUp();
      }
   });
   //Hamburger

   //RangeSlider
   $(".aside__pricing-rangeSlider").ionRangeSlider({
      type: "double",
      max: 330,
      from: 30,
      to: 300,
      prefix: "$",
   });
   //RangeSlider

   //Grid-List buttons
   $(".filters__button-grid").on("click", function () {
      $(".release__item").removeClass("list");
      $(".filters__button-grid").addClass("filter--active");
      $(".filters__button-list").removeClass("filter--active");
   });
   $(".filters__button-list").on("click", function () {
      $(".release__item").addClass("list");
      $(".filters__button-grid").removeClass("filter--active");
      $(".filters__button-list").addClass("filter--active");
   });
   //Grid-List buttons

   //Posts Tabs
   $(".posts__tab-link").click(function () {
      var tab_id = $(this).attr("data-tab");

      $(".posts__tab-link").removeClass("current");
      $(".posts__tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
   });
   //Posts Tabs

   //Radio Button
   $('input[name="radio"]').toggleClass('checked');
   //Radio Button
});
