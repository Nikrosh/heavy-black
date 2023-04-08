$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots:true,
    dotsEach:true,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items:1,
        nav:false
      },
      // breakpoint from 768 up
      748 : {
        items:3,
        nav:true
      }
  }
});