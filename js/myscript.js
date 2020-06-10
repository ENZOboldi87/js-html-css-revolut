$(document).ready(function() {
  // al passaggio del mouse rimuove la classe hide,


// al click del mouse sul body o main il menu dropdown si nasconde, al click ricompare
  $('.dropdown, body').on('click', function() {
    $('.menu-dp').addClass('hide_dp');
   });


// questa funzione cambia l icona della sezione language (icona che va su e giu)
   $('.dropdown-lang').mouseleave(function() {
     $('.upIcon').addClass('hide_dpo');
     $('.downIcon').removeClass('hide_dpo');
   });

// quando il mouse entra sui menu dropdown, vengono giu uno alla volta.
   $('.dropdown, .dropdown-lang').on('mouseenter', function() {
     $('.dropdown .menu-dp').addClass('hide_dp');
     $(this).children('.dropdown .menu-dp').removeClass('hide_dp');
     $(this).children('.dropdown-lang .downIcon').addClass('hide_dpo');
     $(this).children('.upIcon').removeClass('hide_dpo');
   });
});
