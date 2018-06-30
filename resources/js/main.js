var object = {};
// const = ;

// jQuery
$(document).ready(function() {

  // Carousel
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });

  // ScrollMagic
  var controller = new ScrollMagic.Controller();
  

  // Parallax
  var parallaxElements = $('.parallax'),
      parallaxQuantity = parallaxElements.length;
  $(window).on('scroll', function() {
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElements.eq(i);
        // Record how much has been scrolled (the number of pixels that are hidden from view above)
        var scrolled = $(window).scrollTop();
        currentElement.css({
          'transform': 'translate3d(0, '+scrolled * 1 + 'px, 0)'
        });
      }
    });
  });

}); // End of jQuery



// jQuery
$(document).ready(function() {
  // Here write event handers
});

// Define functions
object.Function1 = function() {
};

object.Function2 = function() {
};
