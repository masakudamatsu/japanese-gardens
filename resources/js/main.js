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

  // Pin the carousel while the first paragraph is scrolled beneath it.
  // Step 1: First paragraph's height as % of the viewport height
  var viewportHeight = $(window).height();
  var paragraphHeight = $('#first-paragraph').outerHeight(); // including padding
  var heightPercentage = (paragraphHeight / viewportHeight)*100;
  var durationValue = heightPercentage.toString() + '%';
  // Step 2: Initiate ScrollMagic
  var controller = new ScrollMagic.Controller();
  // Step 3: Pin the carousel
  var pinCarousel = new ScrollMagic.Scene({
    triggerElement: '.parallax',
    triggerHook: 0,
    duration: durationValue // See above for how it's calculated
  })
  .setPin('.parallax', {pushFollowers: false})
  // .addIndicators()    // For debugging
  .addTo(controller);

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
