document.addEventListener('DOMContentLoaded', () => {
  const btnPlay = document.getElementById('btn-play');
  const audio = document.getElementById('audio');
  const btnEnviar = document.getElementById('btn-enviar');
  const respuesta = document.getElementById('respuesta');
  const mensaje = document.getElementById('mensaje');
  const textoMensaje = document.getElementById('texto-mensaje');
  const btnIntentar = document.getElementById('btn-intentar');
  const btnAvanzar = document.getElementById('btn-avanzar');

  btnPlay.addEventListener('click', () => {
    if(audio.paused) {
      audio.play();
      btnPlay.textContent = '⏸️';
    } else {
      audio.pause();
      btnPlay.textContent = '▶️';
    }
  });

  btnEnviar.addEventListener('click', () => {
    const valor = respuesta.value.trim().toLowerCase();
    if(valor === 'respuesta correcta') { // reemplaza por la respuesta que quieras
      textoMensaje.textContent = '¡Correcto!';
      mensaje.style.display = 'flex';
    } else {
      textoMensaje.textContent = 'Incorrecto. Intenta de nuevo.';
      mensaje.style.display = 'flex';
    }
  });

 
  btnIntentar.addEventListener('click', () => {
    respuesta.value = '';
    mensaje.style.display = 'none';
    respuesta.focus();
  });

  btnAvanzar.addEventListener('click', () => {
    // aquí iría la redirección o acción para avanzar
    alert('Avanzando a la siguiente actividad...');
  });
});