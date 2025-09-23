// Lista de audios
const audios = [
  new Audio("assets/audio1.mp3"),
  new Audio("assets/audio2.mp3"),
  new Audio("assets/audio3.mp3")
];

// Índice de la respuesta correcta
const correcta = 1; // 👉 En este caso es el segundo audio

let seleccion = null; // Guardar el audio seleccionado

function seleccionar(indice) {
  const audio = audios[indice];

  // Si ese mismo audio ya está sonando → pausarlo
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0; // reinicia al inicio
    seleccion = null; // anula selección si lo detuvo
    return;
  }

  // Pausar todos antes de reproducir el nuevo
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  audio.play();

  // Guardar cuál botón seleccionó el usuario
  seleccion = indice;
}

function verificar() {
  const mensaje = document.getElementById("mensaje");

  // 🔴 Pausar todos los audios al verificar
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  if (seleccion === null) {
    mensaje.textContent = "⚠️ Selecciona un audio antes de verificar.";
    mensaje.style.color = "orange";
    return;
  }

  if (seleccion === correcta) {
    mensaje.textContent = "✅ ¡Correcto!";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "❌ Incorrecto, intenta otra vez.";
    mensaje.style.color = "red";
  }
}