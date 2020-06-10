$(document).ready(function() {
  // al passaggio del mouse rimuove la classe hide,
  $('.dropdown').mouseenter(function() {
    $('.dropdown .menu-dp').addClass('hide_dp');
    $(this).children('.dropdown .menu-dp').removeClass('hide_dp');



  });

// al click del mouse la funzione rimuove(o aggiunge) la classe hide
  $('.dropdown').click(function() {
    $(this).children('.menu-dp').toggleClass('hide_dp');
   });

})

// TODO: aggiungere after nuovo ad alcuni elementi dell li 
// TODO: far cambiare il verso dell icona after IT
