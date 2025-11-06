$(document).ready(function () {
  // Ocultamos cortinas al cargar
  $('.left-curtain, .right-curtain').css('width', '0%');

  $('.valentines-day').click(function () {
    // Animación del sobre cayendo
    $('.envelope').css({
      animation: 'fall 2s ease-out 1',
      '-webkit-animation': 'fall 2s ease-out 1'
    });

    $('.envelope').fadeOut(800, function () {
      // Ocultar el resto de los elementos del sobre
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      const $card = $('#card');

      // Mostramos solo el lado con texto (lado "two")
      $('.side.one').hide();
      $('.side.two').show();

      // Posicionamos la carta centrada en pantalla
      $card.css({
        visibility: 'visible',
        opacity: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0.8)',
        'transform-origin': 'center center'
      });

      // Animación suave con rebote
      $card.animate({ opacity: 1 }, {
        duration: 1000,
        step: function (now) {
          const scale = 0.8 + (now * 0.2);
          $(this).css('transform', `translate(-50%, -50%) scale(${scale})`);
        },
        complete: function () {
          $(this).css({
            transition: 'transform 0.3s ease-out',
            transform: 'translate(-50%, -50%) scale(1.03)'
          });
          setTimeout(() => {
            $(this).css('transform', 'translate(-50%, -50%) scale(1)');
          }, 300);
        }
      });
    });
  });
});
