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
  $('.loading').fadeOut('fast');
  $('.main').fadeIn('slow');
  // For Opera, the loading message is slow to fade out. So we make it fast while the content fades in slowly.
});
