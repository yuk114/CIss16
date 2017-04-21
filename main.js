var canvasHandle = document.getElementById("canvas-handle");

canvasHandle.addEventListener('click', function() {
  // rotate handle
  $(this).toggleClass('expand');

  // reveal off-canvas menu
  $("#mobile .body").toggleClass('reveal');
});
