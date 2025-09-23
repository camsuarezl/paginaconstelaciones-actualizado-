// js/script.js
(() => {
  const KEY = 'estrella:state:'; // clave base en localStorage
  const $$  = (s, c=document) => Array.from(c.querySelectorAll(s));
  const seen = id => localStorage.getItem(KEY + id) === '1';
  const mark = id => localStorage.setItem(KEY + id, '1');

  // REGLAS: 7 sin contraparte; 8 <-> 10; resto impar->(n,n+1), par->(n-1,n)
  function pairFor(n) {
    if (n === 7)  return [7, 7];
    if (n === 8)  return [8, 10];
    if (n === 10) return [10, 8];
    return n % 2 === 1 ? [n, n + 1] : [n - 1, n];
  }

  // Asegura starId y, si NO tienes data-href-*, deriva first/second desde href "pagNN.html"
  function normalize(a, i) {
    // starId
    let id = a.dataset.starId || a.id;
    if (!id) {
      const mId = (a.getAttribute('href') || '').match(/pag0*([0-9]+)\.html/i);
      id = mId ? `star-${String(mId[1]).padStart(2, '0')}` : `star-auto-${i+1}`;
      a.dataset.starId = id;
    }

    // Solo derivar si NO vienen puestos los data-*
    if (!a.dataset.hrefFirst || !a.dataset.hrefSecond) {
      const href = a.getAttribute('href') || '';
      const m = href.match(/pag0*([0-9]+)\.html/i);
      if (m) {
        const n = parseInt(m[1], 10);
        const [firstNum, secondNum] = pairFor(n);
        if (!a.dataset.hrefFirst)  a.dataset.hrefFirst  = `pag${firstNum}.html`;
        if (!a.dataset.hrefSecond) a.dataset.hrefSecond = `pag${secondNum}.html`;
      } else {
        // href no numérico (ej. "estrella2.html"): si no especificas data-*, usa el mismo
        if (!a.dataset.hrefFirst)  a.dataset.hrefFirst  = href;
        if (!a.dataset.hrefSecond) a.dataset.hrefSecond = href;
      }
    }
  }

  function apply(a) {
    const id = a.dataset.starId; if (!id) return;
    const first  = a.dataset.hrefFirst  || a.getAttribute('href') || '';
    const second = a.dataset.hrefSecond || first;
    a.setAttribute('href', seen(id) ? second : first);
    a.classList.toggle('visto', seen(id));
  }

  function init() {
    const anchors = $$('a.estrella-link');
    anchors.forEach(normalize);
    anchors.forEach(apply);
  }

  // Al cargar y al volver con botón Atrás (bfcache)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('pageshow', init);

  // Primer clic marca como vista y deja navegar normal
  document.addEventListener('click', (ev) => {
    const a = ev.target.closest('a.estrella-link');
    if (!a) return;
    const id = a.dataset.starId;
    if (id && !seen(id)) mark(id); // 0 -> 1

    // Si tienes Pop-ups, no revientes si aún no existe:
    if (window.Pop && typeof window.Pop.show === 'function') {
      try { window.Pop.show("Volver también es otra forma de ir."); } catch {}
    }
  });

  // Helpers de depuración
  window._stars = {
    reset(id) {
      if (id) localStorage.removeItem(KEY + id);
      else Object.keys(localStorage).forEach(k => k.startsWith(KEY) && localStorage.removeItem(k));
      init();
    },
    state(id) { return seen(id); }
  };
})();

/* ======================== POPUPS ALEATORIOS ======================== */
(() => {
  const POP_MESSAGES = [
    "A veces la memoria es un abrazo que vuelve.",
    "¿Y si esta estrella fuera un recuerdo?",
    "Hay constelaciones que solo aparecen cuando cierras los ojos.",
    "Vuelve y mira la otra versión...",
    "Lo contrario también cuenta una verdad.",
    "Un recuerdo responde cuando lo nombras.",
    "La primera vez es diferente a la segunda.",
  ];

  const MIN_GAP = 7000, MAX_GAP = 12000, TTL = 3200;

  let layer = document.getElementById('pop-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'pop-layer';
    document.body.appendChild(layer);
  }

  const rand = (min, max) => Math.random() * (max - min) + min;

  function showPopup(text) {
    const el = document.createElement('div');
    el.className = 'popup-bubble';
    el.textContent = text;
    el.style.visibility = 'hidden';
    layer.appendChild(el);

    const pad = 24;
    const W = layer.clientWidth || window.innerWidth;
    const H = layer.clientHeight || window.innerHeight;
    const bw = el.offsetWidth;
    const bh = el.offsetHeight;

    const left = Math.max(pad, Math.min(W - bw - pad, rand(pad, W - bw - pad)));
    const top  = Math.max(pad, Math.min(H - bh - pad, rand(pad, H - bh - pad)));

    el.style.left = left + 'px';
    el.style.top  = top  + 'px';
    el.style.setProperty('--ttl', `${TTL}ms`);
    el.style.visibility = 'visible';
    setTimeout(() => { el.remove(); }, TTL + 280);
  }

  let timer;
  function scheduleNext() {
    timer = setTimeout(() => {
      const msg = POP_MESSAGES[Math.floor(Math.random() * POP_MESSAGES.length)];
      showPopup(msg);
      scheduleNext();
    }, rand(MIN_GAP, MAX_GAP));
  }

  const start = () => { if (timer) clearTimeout(timer); scheduleNext(); };
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', start); else start();
  addEventListener('pageshow', start);

  // API pública
  window.Pop = { show: showPopup };
})();

/* ======================== MODAL GRUPO 5 ======================== */
(() => {
  const group = document.querySelector('.constelacion.grupo5');
  const modal = document.getElementById('big-modal'); // opcional; si no existe, no hace nada
  if (!group || !modal) return;

  const $ = s => modal.querySelector(s);
  function open() {
    $('#bm-title').textContent = group.dataset.modalTitle || 'Proyecto';
    $('#bm-sub').textContent   = group.dataset.modalSubtitle || '';
    $('#bm-body').textContent  = group.dataset.modalBody || '';
    modal.classList.add('open');
    const close = () => modal.classList.remove('open');
    $('#bm-close').onclick = close;
    modal.querySelector('.bm-x').onclick = close;
    modal.addEventListener('click', (e)=>{ if(e.target===modal) close(); }, { once:true });
    window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); }, { once:true });
  }

  document.addEventListener('click', (e)=>{
    const starSvg = e.target.closest('svg.estrella');
    if (!starSvg || !group.contains(starSvg)) return;
    e.preventDefault?.();
    open();
  });
})();
