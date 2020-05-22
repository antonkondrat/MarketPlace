$(function () {
   $(".featured__slider-inner").slick({
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
   });

   $(".followers__slider-inner").slick({
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
      slidesToShow: 3,
      slidesToScroll: 1,
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

   var mixer = mixitup('.release__inner-items');
});
