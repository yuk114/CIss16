function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
  this.each(function() {
    var image = $(this);

    // Viewport Dimensions
    var vpHeight = $(window).height();
    var vpWidth = $(window).width();

    // Image Position
    var xPos = getRandomInt(0, vpWidth - image.width());
    var yPos = getRandomInt(0, vpHeight - image.height());
    var zIndex = getRandomInt(0,13);

    // Animation Duration
    if(animate) var dur = 500;
    else var dur = 0;

    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
  });
};

//Setup
$('img').randomOrder(false);
$('img').draggable({stack: "img"});

// Change after 10 Seconds
window.setInterval(function(){
  $('img').randomOrder(true);
}, 10000);
