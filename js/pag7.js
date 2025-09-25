// js/pag7.js
document.addEventListener('DOMContentLoaded', () => {
  // ===== Modal "Constelaciones says" =====
  function mountAppAlert() {
    if (!document.getElementById('appAlertStyles')) {
      const style = document.createElement('style');
      style.id = 'appAlertStyles';
      style.textContent = `
        .alert{border:none;padding:20px;border-radius:14px;background:#201715;color:#f6e3da;
               box-shadow:0 10px 30px rgba(0,0,0,.5);width:min(420px,90vw);font-family:system-ui,Segoe UI,Roboto,Arial}
        .alert::backdrop{background:rgba(0,0,0,.5)}
        .alert h3{margin:0 0 10px;font-weight:700;text-align:center}
        .alert p{margin:0 0 12px;text-align:center}
        .alert .actions{display:flex;justify-content:center}
        .alert button{border:0;padding:10px 18px;border-radius:12px;
                      background:#ffb7a3;color:#3a1d16;cursor:pointer;font-weight:700}
      `;
      document.head.appendChild(style);
    }
    if (!document.getElementById('appAlert')) {
      const dlg = document.createElement('dialog');
      dlg.id = 'appAlert';
      dlg.className = 'alert';
      dlg.innerHTML = `
        <h3>Constelaciones says</h3>
        <p id="appAlertMsg"></p>
        <div class="actions"><button id="appAlertBtn" type="button">OK</button></div>
      `;
      document.body.appendChild(dlg);

      const close = () => { try{dlg.close();}catch{} };
      dlg.querySelector('#appAlertBtn').addEventListener('click', close);
      dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
      dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
    }
  }
  mountAppAlert();

  function appAlert(message) {
    const dlg = document.getElementById('appAlert');
    document.getElementById('appAlertMsg').textContent = message;
    try { if (dlg.open) dlg.close(); } catch (_) {}
    dlg.showModal();
    dlg.querySelector('#appAlertBtn').focus();
  }
  // =======================================

  const revisarBtn = document.getElementById('revisar');
  const allInputs = Array.from(document.querySelectorAll('#crucigrama input'));

  // === DEDUPLICAR CELDAS (misma fila/columna) ===
  // Nos quedamos con la PRIMERA como "canónica" y sincronizamos las duplicadas.
  const keyOf = (inp) => `r${inp.dataset.row}c${inp.dataset.col}`;
  const canon = new Map();         // key -> input principal
  const dupsByKey = new Map();     // key -> [inputs duplicados]

  allInputs.forEach(inp => {
    const k = keyOf(inp);
    if (!canon.has(k)) {
      canon.set(k, inp);
    } else {
      // duplicado
      inp.dataset.duplicate = '1';
      if (!dupsByKey.has(k)) dupsByKey.set(k, []);
      dupsByKey.get(k).push(inp);
    }
  });

  // Sincroniza duplicados cuando se escribe en la canónica
  canon.forEach((mainInp, k) => {
    const dups = dupsByKey.get(k) || [];
    if (dups.length) {
      mainInp.addEventListener('input', () => {
        dups.forEach(d => d.value = mainInp.value);
      });
      // también copia el valor inicial (por si el duplicado tenía algo)
      dups.forEach(d => d.value = mainInp.value);
    }
  });

  // Lista final de inputs ÚNICOS a validar
  const inputs = Array.from(canon.values());

  // ===== SOLUCIÓN ESPERADA =====
  const SOL = {
    // 1) LA ESTRELLA (col 4)
    'r1c4':'L','r2c4':'A','r3c4':'-','r4c4':'E','r5c4':'S','r6c4':'T','r7c4':'R','r8c4':'E','r9c4':'L','r10c4':'L','r11c4':'A',
    // 2) CRISTINA (col 12)
    'r2c12':'C','r3c12':'R','r4c12':'I','r5c12':'S','r6c12':'T','r7c12':'I','r8c12':'N','r9c12':'A',
    // 3) JOSE-GREGORIO (fila 4)
    'r4c1':'J','r4c2':'O','r4c3':'S','r4c4':'E','r4c5':'-','r4c6':'G','r4c7':'R','r4c8':'E','r4c9':'G','r4c10':'O','r4c11':'R','r4c12':'I','r4c13':'O',
    // 4) AUGUSTO (fila 6)
    'r6c7':'A','r6c8':'U','r6c9':'G','r6c10':'U','r6c11':'S','r6c12':'T','r6c13':'O',
    // 5) PELUSA (fila 9)
    'r9c7':'P','r9c8':'E','r9c9':'L','r9c10':'U','r9c11':'S','r9c12':'A',
    // 6) LA-MACARENA (fila 11)
    'r11c3':'L','r11c4':'A','r11c5':'-','r11c6':'M','r11c7':'A','r11c8':'C','r11c9':'A','r11c10':'R','r11c11':'E','r11c12':'N','r11c13':'A',
  };

  // Bloquear y fijar celdas que son guiones '-'
  inputs.forEach(inp => {
    const k = keyOf(inp);
    const esperado = SOL[k];
    if (esperado === '-') {
      inp.value = '-';
      inp.readOnly = true;
      inp.style.backgroundColor = '';
    }
  });

  revisarBtn.addEventListener('click', () => {
    let todasCorrectas = true;

    inputs.forEach(input => {
      const k = keyOf(input);
      const esperado = SOL[k];

      // Ignora celdas que no están en la solución (por si existieran)
      if (esperado == null) return;

      if (esperado === '-') return; // ya fijadas

      const val = (input.value || '').trim().toUpperCase();

      if (val === esperado) {
        input.style.backgroundColor = '#b2fab4'; // correcto
      } else {
        input.style.backgroundColor = val ? '#f8b4b4' : '';
        todasCorrectas = false;
      }
    });

    if (todasCorrectas) {
      appAlert('¡Crucigrama completado correctamente!');
      // Si quieres navegar:
      // document.getElementById('appAlert').addEventListener('close', () => {
      //   window.location.href = 'siguiente.html';
      // }, { once: true });
    } else {
      appAlert('Algunas letras son incorrectas o faltantes. Intenta de nuevo.');
    }
  });
});
