$(function(){
    $('.slider').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
        
      });
});

$('.menu_btn').on('click', function(){
  $('.top-nav-list').toggleClass('top-nav-list--active');
  });  
