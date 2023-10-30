$(document).ready(function () {
    const $slides = $('.carousel-slide');
    const $indicators = $('.indicator');
    let currentSlide = 0;
  
    function showSlide(index) {
        $slides.eq(currentSlide).hide();
        $indicators.eq(currentSlide).removeClass('active');
        currentSlide = index;
        $slides.eq(currentSlide).show();
        $indicators.eq(currentSlide).addClass('active');
    }
  
    $('.prev-button').click(function () {
        const prevSlide = (currentSlide - 1 + $slides.length) % $slides.length;
        showSlide(prevSlide);
    });
  
    $('.next-button').click(function () {
        const nextSlide = (currentSlide + 1) % $slides.length;
        showSlide(nextSlide);
    });
  
    $indicators.click(function () {
        showSlide($indicators.index(this));
    });
  
    showSlide(currentSlide);
  });