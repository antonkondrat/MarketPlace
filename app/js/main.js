$(function () {
   
   try {
      var mixer = mixitup(".release__inner-items");
   }
   catch(error) {
      console.log('Ошибка');
   };

   $(".featured__slider-inner").slick({
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
      autoplay: {
         delay: 3000,
      },
   });
   $(".followers__slider-inner").slick({
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
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

   $(".release__titlebox-filter").click(function () {
      $(".filter__dropdown").fadeToggle({});
   });

});
