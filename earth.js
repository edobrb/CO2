/* ============================================================
   Earth's Vital Signs — the hero globe
   A rotating Earth drawn on canvas from ~6,000 land dots
   (Natural Earth coastlines, baked into earth-dots.js).
   Plain canvas, no dependencies. Purely decorative: the canvas
   is aria-hidden and pauses when the hero leaves the viewport.
   ============================================================ */
(function () {
  "use strict";
  const canvas = document.getElementById("earth");
  if (!canvas || !window.EARTH_DOTS || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- decode base64 Int16 (lon*90, lat*90) pairs → unit vectors ---- */
  const bin = atob(window.EARTH_DOTS);
  const N = bin.length / 4;
  const X = new Float32Array(N), Y = new Float32Array(N), Z = new Float32Array(N);
  const D2R = Math.PI / 180;
  for (let i = 0; i < N; i++) {
    const lo = ((bin.charCodeAt(i * 4) | (bin.charCodeAt(i * 4 + 1) << 8)) << 16) >> 16;
    const la = ((bin.charCodeAt(i * 4 + 2) | (bin.charCodeAt(i * 4 + 3) << 8)) << 16) >> 16;
    const lon = (lo / 90) * D2R, lat = (la / 90) * D2R;
    X[i] = Math.cos(lat) * Math.sin(lon);   // east
    Y[i] = Math.sin(lat);                   // north
    Z[i] = Math.cos(lat) * Math.cos(lon);   // toward the viewer
  }

  const TILT = -23.4 * D2R;                 // axial tilt, in the screen plane
  const cosT = Math.cos(TILT), sinT = Math.sin(TILT);
  const SPIN = (2 * Math.PI) / 110;         // one revolution ≈ 110 s

  let W = 0, H = 0, R = 0, cx = 0, cy = 0, dpr = 1;
  let back = null;                          // cached disk + shading + atmosphere

  function buildBackdrop() {
    back = document.createElement("canvas");
    back.width = W; back.height = H;
    const b = back.getContext("2d");

    // atmosphere halo, past the limb
    const halo = b.createRadialGradient(cx, cy, R * 0.94, cx, cy, R * 1.22);
    halo.addColorStop(0, "rgba(64, 128, 210, 0.20)");
    halo.addColorStop(0.45, "rgba(56, 110, 190, 0.07)");
    halo.addColorStop(1, "rgba(56, 110, 190, 0)");
    b.fillStyle = halo;
    b.fillRect(0, 0, W, H);

    // the night-side disk
    const disk = b.createRadialGradient(cx - R * 0.35, cy - R * 0.35, R * 0.1, cx, cy, R);
    disk.addColorStop(0, "#101d2e");
    disk.addColorStop(0.65, "#0b1522");
    disk.addColorStop(1, "#081019");
    b.fillStyle = disk;
    b.beginPath();
    b.arc(cx, cy, R, 0, 2 * Math.PI);
    b.fill();

    // rim backscatter — a thin blue breath of air along the limb
    const rim = b.createRadialGradient(cx, cy, R * 0.86, cx, cy, R);
    rim.addColorStop(0, "rgba(90, 150, 220, 0)");
    rim.addColorStop(0.85, "rgba(90, 150, 220, 0.05)");
    rim.addColorStop(1, "rgba(120, 175, 235, 0.28)");
    b.fillStyle = rim;
    b.beginPath();
    b.arc(cx, cy, R, 0, 2 * Math.PI);
    b.fill();
  }

  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    W = Math.max(1, Math.round(rect.width * dpr));
    H = Math.max(1, Math.round(rect.height * dpr));
    canvas.width = W; canvas.height = H;
    R = Math.min(W, H) * 0.40;
    cx = W / 2; cy = H / 2;
    buildBackdrop();
    if (reduceMotion) frame(0);
  }

  /* dots are batched into alpha buckets so we swap fillStyle ~7 times,
     not 6,000 — front dots brighten and grow as they face the viewer */
  const BUCKETS = 7;
  const bx = [], by = [], bs = [];
  for (let k = 0; k < BUCKETS; k++) { bx.push([]); by.push([]); bs.push([]); }

  function frame(t) {
    const th = reduceMotion ? -0.6 : t * 0.001 * SPIN;
    const c = Math.cos(th), s = Math.sin(th);
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(back, 0, 0);

    for (let k = 0; k < BUCKETS; k++) { bx[k].length = 0; by[k].length = 0; bs[k].length = 0; }
    const base = Math.max(1, R * 0.0042);
    for (let i = 0; i < N; i++) {
      const x = X[i] * c + Z[i] * s;        // spin about the polar axis
      const z = Z[i] * c - X[i] * s;
      if (z <= 0.02) continue;              // back hemisphere
      const y = Y[i];
      const sx = x * cosT - y * sinT;       // axial tilt, in the screen plane
      const sy = x * sinT + y * cosT;
      const k = Math.min(BUCKETS - 1, (z * BUCKETS) | 0);
      bx[k].push(cx + sx * R);
      by[k].push(cy - sy * R);
      bs[k].push(base * (0.75 + 0.65 * z));
    }
    for (let k = 0; k < BUCKETS; k++) {
      const a = 0.16 + 0.60 * ((k + 0.5) / BUCKETS);
      ctx.fillStyle = "rgba(126, 168, 220, " + a.toFixed(3) + ")";
      const n = bx[k].length, px = bx[k], py = by[k], ps = bs[k];
      for (let i = 0; i < n; i++) {
        const r2 = ps[i];
        ctx.fillRect(px[i] - r2 / 2, py[i] - r2 / 2, r2, r2);
      }
    }
  }

  /* ---- run only while visible ---- */
  let raf = null, running = false;
  function loop(t) { frame(t); raf = running ? requestAnimationFrame(loop) : null; }
  function start() { if (!running && !reduceMotion) { running = true; raf = requestAnimationFrame(loop); } }
  function stop() { running = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => {
      es.forEach((e) => (e.isIntersecting ? start() : stop()));
    }, { threshold: 0.02 }).observe(canvas);
  } else {
    start();
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (canvas.getBoundingClientRect().bottom > 0) start();
  });

  let rt = null;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 120); });
  resize();
  if (reduceMotion) frame(0); else start();
})();
