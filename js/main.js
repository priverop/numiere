$(document).ready(function(){
    // with jQuery
  var $container = $('.grid');

  // initialize Masonry after all images have loaded
  $container.imagesLoaded( function() {
      $container.masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 300
    });
  });


});
