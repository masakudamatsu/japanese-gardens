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

const positionTitle = () => {
  const screenWidth = $(window).width();
  if (screenWidth > 705) {
    const titleHeight = $('.title__background').innerHeight();
    const topImageHeight = $('.title__image').innerHeight();
    const offsetValueTop = topImageHeight - titleHeight;
    const topMarginLeft = $('.top').css('marginLeft');
    $('.title__background').offset({
      top: offsetValueTop,
      left: topMarginLeft
    });
  } else {
    return;
  }
};

$(document).ready(function() {
  // When first loaded
  positionTitle();
  // When window resized
  $(window).resize(() => {
    window.setTimeout(() => {
      positionTitle();
    }, 200);
  });
});
