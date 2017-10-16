$(function() {
  
  $('.testimotional_response').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '20px',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.testimotional_comments'
  });

  $('.testimotional_comments').slick({
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  });
});
