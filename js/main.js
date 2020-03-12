function myFunction(x) {
  x.classList.toggle("change");
}

$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$('#content-2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  dots: true,
});