$(document).ready(function(){
    $('.main-slider').slick({
    //   setting-name: setting-value
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.product-slider').slick({
    //   setting-name: setting-value
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.mob-menu').click(function(){  $('.header-nav').addClass('nav-visible');});
    $('.header-nav').click(function(){  $('.header-nav').removeClass('nav-visible');});
  });