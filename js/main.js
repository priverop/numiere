$(document).ready(function(){
    // with jQuery
  var $container = $('.grid');

  // initialize Masonry after all images have loaded
  $container.imagesLoaded( function() {
      var $grid = $container.masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      isFitWidth: true,
      stagger: 30,
      visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      hiddenStyle: { transform: 'translateY(100px)', opacity: 0 }
    });
  });


});
