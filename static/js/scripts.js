$(document).ready(function () {
  $(document).on('scroll', function () {
    if ($(document).scrollTop() > 520) {
      $('header nav').addClass('fixed')
    } else {
      $('header nav').removeClass('fixed')
    }
  });


  $("body").prognroll({
    height: 4, //Progress bar height in pixels
    color: "#E31B6D", //Progress bar background color
  });

  $.each($('#navbar').find('li'), function () {
    $(this).toggleClass('active',
      window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
  });
});


function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// If element is scrolled into view, fade it in
$(window).scroll(function () {
  $('.scroll-animations .animated').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('fadeInLeft');
    }
  });


});


$('#topheader .navbar-nav a').on('click', function () {
  $('#topheader .navbar-nav').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});


var backToTop = $("#back-top");
var scrollAmount = 150;
$(window).scroll(function () {
  if ($(this).scrollTop() > scrollAmount) {
    backToTop.fadeIn();
  } else {
    backToTop.fadeOut();
  }
});
backToTop.click(function (e) {
  $("html, body").animate({ scrollTop: 0 }, 200);
});



