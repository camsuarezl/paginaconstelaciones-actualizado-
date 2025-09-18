document.addEventListener('DOMContentLoaded', () => {
  const tablero = document.getElementById('tablero');
  const mensaje = document.getElementById('mensaje');

  const cartas = Array.from(document.querySelectorAll('.carta'));

  let primera = null;
  let segunda = null;
  let bloqueo = false;
  let encontradas = 0;
  const totalParejas = 3; // porque tienes pareja1, pareja2, pareja3

  // obtiene id desde el nombre del archivo (ej: pareja1-1.png → pareja1-1)
  function obtenerIdCarta(carta) {
    const img = carta.querySelector('img');
    if (!img) return '';
    const archivo = img.src.split('/').pop().split('.')[0];
    return archivo; // ejemplo: "pareja1-1"
  }

  // determina si dos cartas son pareja correcta (ej: pareja1-1 y pareja1-2)
  function esParejaCorrecta(a, b) {
    const idA = obtenerIdCarta(a);
    const idB = obtenerIdCarta(b);

    const baseA = idA.split('-')[0]; // "pareja1"
    const baseB = idB.split('-')[0];
    const sufA = idA.split('-')[1];  // "1"
    const sufB = idB.split('-')[1];

    return baseA === baseB && sufA !== sufB;
  }

  function reiniciarJuego() {
    setTimeout(() => {
      cartas.forEach(c => c.classList.remove('volteada'));
      primera = null;
      segunda = null;
      bloqueo = false;
      encontradas = 0;
      mensaje.textContent = '';
    }, 800);
  }

  function voltearCarta(carta) {
    if (bloqueo) return;
    if (carta.classList.contains('volteada')) return;

    carta.classList.add('volteada');

    if (!primera) {
      primera = carta;
      return;
    }

    segunda = carta;
    bloqueo = true;

    if (esParejaCorrecta(primera, segunda)) {
      encontradas++;
      primera = null;
      segunda = null;
      bloqueo = false;

      if (encontradas === totalParejas) {
        mensaje.textContent = '🎉 ¡Ganaste! 🎉';
      }
    } else {
      mensaje.textContent = '❌ Pareja incorrecta. Reiniciando...';
      reiniciarJuego();
    }
  }

  cartas.forEach(carta => {
    carta.addEventListener('click', () => voltearCarta(carta));
  });
});