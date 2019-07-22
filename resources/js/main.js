var object = {};
// const = ;
$(document).ready(function() {
  // Carousel
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });
});

$(window).on('load', function() {
  $('.loading').fadeOut();
  $('.main').fadeIn();
});
