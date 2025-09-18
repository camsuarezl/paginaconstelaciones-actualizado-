document.addEventListener('DOMContentLoaded', function() {
  const revisarBtn = document.getElementById('revisar');
  const inputs = document.querySelectorAll('#crucigrama input');

  revisarBtn.addEventListener('click', () => {
    let todasCorrectas = true;

    inputs.forEach(input => {
      const row = input.dataset.row;
      const col = input.dataset.col;
      let correcta = input.value; // por defecto dejamos el valor actual

      // Palabra 1: LAESTRELLA
      if(col=='4'){
        if(row=='7') correcta='R';
        if(row=='9') correcta='L';
        if(row=='11') correcta='A';
      }

      // Palabra 2: CRISTINA
      if(col=='12'){
        if(row=='6') correcta='T';
        if(row=='9') correcta='A';
      }

      // Palabra 3: JOSE GREGORIO
      if(row=='4'){
        if(col=='2') correcta='O';
        if(col=='4') correcta='E';
        if(col=='9') correcta='G';
        if(col=='12') correcta='I';
      }

      // Palabra 4: AUGUSTO
      if(row=='6'){
        if(col=='7') correcta='A';
        if(col=='10') correcta='U';
      }

      // Palabra 5: PELUSA
      if(row=='9'){
        if(col=='10') correcta='U';
        if(col=='12') correcta='A';
      }

      // Palabra 6: LA MACARENA
      if(row=='11'){
        if(col=='4') correcta='A';
        if(col=='6') correcta='M';
        if(col=='9') correcta='A';
        if(col=='10') correcta='E';
      }

      // Comparar la letra ingresada
      if(input.value.toUpperCase() === correcta){
        input.style.backgroundColor = '#b2fab4'; // verde si es correcta
      } else {
        if(input.value !== '' && input.value !== '-') {
          input.style.backgroundColor = '#f8b4b4'; // rojo si es incorrecta
          input.value = '';
          todasCorrectas = false;
        }
      }
    });

    if(todasCorrectas){
      alert("¡Crucigrama completado correctamente!");
      // window.location.href="siguiente.html"; // poner URL de destino
    } else {
      alert("Algunas letras son incorrectas. Intenta de nuevo.");
    }
  });
});