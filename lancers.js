$(function() {
    var $win = $(window),
        $nav = $('nav'),
        navPos = $nav.offset().top,
        fixedClass = 'is-fixed';
  
    $win.scroll(function() {
      var value = $(this).scrollTop();
      if ( value >= navPos ) {
        $nav.addClass(fixedClass);
      } else {
        $nav.removeClass(fixedClass);
      }
    });
  });
