$(function () {

   $('.featured__slider-inner').slick({
      // infinite: true,
      // speed: 1000,
      // fade: true,
      // cssEase: 'linear'
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>'
   });

   $(".rateyo").rateYo({
      rating: 4.5,
      starWidth: "15px",
      readOnly: true,
      spacing: "4px"
   });

});
