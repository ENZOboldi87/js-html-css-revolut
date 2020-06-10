$(document).ready(function() {
  $('.dropdown').mouseenter(function() {
    $(this).children('.dropdown .menu-dp').toggleClass('fornow');
  });

  // $('.dropdown').mouseleave(function() {
  //   $(this).children('.dropdown .menu-dp').toggleClass('fornow');
  // });

  $('.dropdown').click(function() {
    $(this).children('.menu-dp').toggleClass('fornow');
  });

});
