$(window).scroll(function () {
  const scrollPosition = $(window).scrollTop();
  const topBarHeight = $('.top-bar').height();
  if (scrollPosition > topBarHeight) {
      $('.top-bar').addClass('scrolled');
  } else {
      $('.top-bar').removeClass('scrolled');
  }

  // $('.top-bar .mid .sections button').each(function() {
  //   const section = $(this).data('target');
  //   const sectionOffset = $(section).offset().top;
  //   const sectionHeight = $(section).height();
  //   if(sectionOffset <= scrollPosition + topBarHeight && sectionOffset + sectionHeight > scrollPosition + topBarHeight){
  //     $('.top-bar .mid .sections button').removeClass('active');
  //     $(this).addClass('active');
  //   }
  // });

});


$('.top-bar .mid .sections button, .side-bar .sections button').on('click', function () {
    const targetId = $(this).data('target');
    const targetOffset = $(targetId).offset().top - $('.top-bar').height();
    $('.top-bar .mid .sections button, .side-bar .sections button').removeClass('active');
    $(`.top-bar .mid .sections button[data-target="${targetId}"], .side-bar .sections button[data-target="${targetId}"]`).addClass('active');
    $('html, body').animate({ scrollTop: targetOffset }, 500);
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.setAttribute("theme", "dark");
  $('#toggle_theme').removeClass('light');
  $('#toggle_theme').addClass('dark');
}
$('#toggle_theme').on('click', function () {
  setTheme();
});
function setTheme() {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
    $('#toggle_theme').removeClass('dark');
    $('#toggle_theme').addClass('light');
  } else {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    $('#toggle_theme').removeClass('light');
    $('#toggle_theme').addClass('dark');
  }
}

$('#open_side-bar').on('click', function () {
  $(this).addClass('open');
  $('#close_side-bar').addClass('closed');
  $('.side-bar').addClass('open');
});

$('#close_side-bar').on('click', function () {
  $(this).removeClass('closed');
  $('#open_side-bar').removeClass('open');
  $('.side-bar').removeClass('open');
});

const developerTypes = ['Web','Mobile'];
const $typeElement = $('#developer-type');
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
function typeEffect() {
  const fullText = developerTypes[currentIndex];
  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }
  $typeElement.text(currentText);
  if (!isDeleting && currentText === fullText) {
    // Pause after typing the word
    isDeleting = true;
    setTimeout(typeEffect, 3000); // Wait before deleting
  } else if (isDeleting && currentText === "") {
    // Move to the next word
    isDeleting = false;
    currentIndex = (currentIndex + 1) % developerTypes.length;
    setTimeout(typeEffect, 1000); // Wait before typing the next word
  } else {
    // Continue typing or deleting
    const speed = isDeleting ? 200 : 250; // Typing speed
    setTimeout(typeEffect, speed);
  }
}
typeEffect();
