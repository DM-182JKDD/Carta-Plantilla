$(document).ready(function() {
  // Ocultamos las cortinas al iniciar (si existen)
  $('.left-curtain, .right-curtain').css('width', '0%');

  // Función para mostrar la carta con animación
  function mostrarCarta() {
    // Evitamos múltiples clics / toques
    if ($('#card').css('visibility') === 'visible') return;

    // Animación del sobre
    $('.envelope').css({
      'animation': 'fall 2.5s linear 1',
      '-webkit-animation': 'fall 2.5s linear 1'
    });

    // Efecto de desvanecimiento (fade)
    $('.envelope').fadeOut(800, function() {
      // Oculta los elementos del sobre
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').fadeOut(400);

      // Muestra la carta
  $('#card')
  .css({
    'visibility': 'visible',
    'opacity': 0,
    'transform': 'translate(-50%, -50%) scale(0.8)' // 👈 añade el translate aquí
  })
  .animate(
    { opacity: 1 },
    {
      duration: 800,
      step: function(now) {
        const scale = 0.8 + now * 0.2;
        $(this).css('transform', 'translate(-50%, -50%) scale(' + scale + ')');
      }
    }
  );
    });
  }

  // Permitir interacción tanto con clic como con toque táctil
  $('.valentines-day').on('click touchstart', function(e) {
    e.preventDefault(); // evita doble disparo
    mostrarCarta();
  });

  // Si el usuario gira el dispositivo o cambia tamaño, centramos todo
  $(window).on('resize orientationchange', function() {
    const vh = $(window).height();
    const vw = $(window).width();

    // Ajusta el tamaño de la carta y la posición del sobre
    if (vw < 600) {
      $('#card').css('transform', 'scale(0.9)');
      $('.valentines-day').css('transform', 'scale(0.7)');
    } else if (vw < 992) {
      $('#card').css('transform', 'scale(1)');
      $('.valentines-day').css('transform', 'scale(0.8)');
    } else {
      $('#card').css('transform', 'scale(1)');
      $('.valentines-day').css('transform', 'scale(1)');
    }
  });
});
