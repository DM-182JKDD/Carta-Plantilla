$(document).ready(function () {
  // Ocultamos las cortinas al cargar
  $('.left-curtain, .right-curtain').css('width', '0%');

  $('.valentines-day').click(function () {
    // Animación del sobre cayendo
    $('.envelope').css({
      animation: 'fall 3s linear 1',
      '-webkit-animation': 'fall 3s linear 1'
    });

    $('.envelope').fadeOut(800, function () {
      // Ocultamos los elementos del sobre
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      // Mostramos la carta centrada con animación suave
      const $card = $('#card');
      $card.css({
        visibility: 'visible',
        opacity: 0,
        transform: 'scale(0.8) translate(-50%, -50%)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        'transform-origin': 'center center'
      });

      // Animación suave usando jQuery animate + CSS transitions
      $card.animate({ opacity: 1 }, {
        duration: 1200,
        step: function (now) {
          // Aplicamos una escala más natural tipo “zoom suave”
          const scale = 0.8 + (now * 0.2);
          $(this).css('transform', `scale(${scale}) translate(-50%, -50%)`);
        },
        complete: function () {
          // Al final, aplicamos un ligero rebote muy sutil
          $(this).css({
            transition: 'transform 0.3s ease-out',
            transform: 'scale(1.03) translate(-50%, -50%)'
          });
          setTimeout(() => {
            $(this).css('transform', 'scale(1) translate(-50%, -50%)');
          }, 300);
        }
      });
    });
  });
});
