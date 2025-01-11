$(window).scroll(function() {
    const scrollPosition = $(window).scrollTop();
    const topBarHeight = $('.top-bar').height(); 
    if (scrollPosition > topBarHeight) {
        $('.top-bar').addClass('scrolled');
      } else {
        $('.top-bar').removeClass('scrolled');
      }
  
      $('.content div').each(function () {
        const targetOffset = $(this).offset().top;
        const targetHeight = $(this).outerHeight();
        if (scrollPosition >= targetOffset - topBarHeight && scrollPosition < targetOffset + targetHeight - topBarHeight) {
          
        }
      });
});


$('.top-bar .mid .sections button').on('click', function () {
    const targetId = $(this).data('target');
    const targetOffset = $(targetId).offset().top - $('.top-bar').height();
    $('html, body').animate({scrollTop: targetOffset}, 500);
});

