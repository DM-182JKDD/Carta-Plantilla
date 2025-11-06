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

      const $card = $('#card');

      // Mostramos la carta centrada y frontal
      $card.css({
        visibility: 'visible',
        opacity: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0.8) rotateY(0deg)',
        'transform-origin': 'center center',
        perspective: '1000px'
      });

      // Animación suave con rebote
      $card.animate({ opacity: 1 }, {
        duration: 1200,
        step: function (now) {
          const scale = 0.8 + (now * 0.2);
          $(this).css('transform', `translate(-50%, -50%) scale(${scale}) rotateY(0deg)`);
        },
        complete: function () {
          $(this).css({
            transition: 'transform 0.3s ease-out',
            transform: 'translate(-50%, -50%) scale(1.03) rotateY(0deg)'
          });
          setTimeout(() => {
            $(this).css('transform', 'translate(-50%, -50%) scale(1) rotateY(0deg)');
          }, 300);
        }
      });
    });
  });
});
