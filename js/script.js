$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 20,
      loop: true,
      navText: [
        '⟨',
        '⟩'
      ],
      nav: true
      
    });
  });
  $(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 100) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });

