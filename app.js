/* ============================================================
   Earth's Vital Signs — dashboard logic
   Plain JS + hand-rolled SVG. No dependencies.
   ============================================================ */
(function () {
  "use strict";
  const C = window.CLIMATE;
  const $ = (id) => document.getElementById(id);
  const SVG_NS = "http://www.w3.org/2000/svg";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fmtInt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const fmt1 = new Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const fmt2 = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  /* ----------------------------------------------------------
     State — starts on embedded data, upgraded by live feeds
     ---------------------------------------------------------- */
  const state = {
    co2Anchor: null,            // { time: ms, value: ppm } latest real reading
    co2YoY: null,               // measured ppm gain vs same day last year
    tempAnnual: C.TEMP_ANNUAL.slice(),
    live: false
  };

  /* ----------------------------------------------------------
     CO2 model: annual-mean trend + mean seasonal cycle.
     Between real readings we interpolate along this model;
     when a live NOAA reading arrives it re-anchors the curve.
     ---------------------------------------------------------- */
  function yearFrac(ms) {
    const d = new Date(ms);
    const y = d.getUTCFullYear();
    const start = Date.UTC(y, 0, 1);
    const end = Date.UTC(y + 1, 0, 1);
    return y + (ms - start) / (end - start);
  }

  function seasonalOffset(frac) {
    // interpolate the monthly climatology (values at month midpoints)
    const f = ((frac % 1) + 1) % 1;
    const pos = f * 12 - 0.5;
    const i0 = (Math.floor(pos) + 12) % 12;
    const i1 = (i0 + 1) % 12;
    const t = pos - Math.floor(pos);
    return C.CO2_SEASONAL[i0] * (1 - t) + C.CO2_SEASONAL[i1] * t;
  }

  function co2Model(ms) {
    const fy = yearFrac(ms);
    return C.CO2_MEAN_2025 + C.CO2_GROWTH * (fy - 2025.5) + seasonalOffset(fy);
  }

  function co2Now(ms) {
    if (state.co2Anchor) {
      return state.co2Anchor.value + (co2Model(ms) - co2Model(state.co2Anchor.time));
    }
    return co2Model(ms);
  }

  /* ----------------------------------------------------------
     HERO ticker
     ---------------------------------------------------------- */
  const heroInt = $("co2-int"), heroDec = $("co2-dec");

  function renderHero() {
    const now = Date.now();
    const v = co2Now(now);
    const head = Math.floor(v * 100) / 100;
    heroInt.textContent = head.toFixed(2);
    heroDec.textContent = String(Math.floor(v * 1e7) % 1e5).padStart(5, "0");

    $("co2-vs-pre").textContent =
      "+" + fmt1.format(((v / C.CO2_PREINDUSTRIAL) - 1) * 100) + "%";
    const yoy = state.co2YoY != null
      ? state.co2YoY
      : co2Model(now) - co2Model(now - C.SECONDS_PER_YEAR * 1000);
    $("co2-vs-lastyear").textContent = "+" + fmt2.format(yoy) + " ppm";
    $("kpi-co2").textContent = fmt1.format(v);
  }

  function heroSeasonNote() {
    const now = Date.now(), week = 7 * 864e5;
    const slope = co2Model(now + week) - co2Model(now);
    $("hero-season-note").textContent = slope < 0
      ? "Dipping this month? That's the planet's summer inhale — northern forests drawing carbon down. The sawtooth dips every year; the line underneath it only climbs."
      : "Climbing fast right now — the winter exhale of northern ecosystems stacked on top of the fossil-fuel trend.";
  }

  function startHero() {
    heroSeasonNote();
    if (reduceMotion) {
      renderHero();
      setInterval(renderHero, 1000);
    } else {
      (function loop() { renderHero(); requestAnimationFrame(loop); })();
    }
  }

  /* ----------------------------------------------------------
     Similitude counters — since page open
     ---------------------------------------------------------- */
  const t0 = Date.now();
  function tickSims() {
    const s = (Date.now() - t0) / 1000;
    const tons = s * C.EMISSIONS_T_PER_SECOND;
    $("sim-tons").textContent = fmtInt.format(tons);
    $("sim-eiffel").textContent = fmt2.format(tons / C.EIFFEL_T);
    $("sim-whales").textContent = fmtInt.format(tons / C.BLUE_WHALE_T);
    $("sim-bombs").textContent = fmtInt.format(s * C.BOMBS_PER_SECOND);
  }

  /* ----------------------------------------------------------
     Carbon clock + budget meters
     ---------------------------------------------------------- */
  function tickClock() {
    const now = Date.now();
    const perMs = C.EMISSIONS_T_PER_SECOND / 1000;
    const exhaust15 = C.BUDGET_START + C.BUDGET_15_T / perMs;
    let rem = Math.max(0, exhaust15 - now);

    const yrMs = C.SECONDS_PER_YEAR * 1000;
    const y = Math.floor(rem / yrMs); rem -= y * yrMs;
    const d = Math.floor(rem / 864e5); rem -= d * 864e5;
    const h = Math.floor(rem / 36e5); rem -= h * 36e5;
    const m = Math.floor(rem / 6e4); rem -= m * 6e4;
    const sec = Math.floor(rem / 1e3);
    $("c15-y").textContent = y;
    $("c15-d").textContent = d;
    $("c15-h").textContent = String(h).padStart(2, "0");
    $("c15-m").textContent = String(m).padStart(2, "0");
    $("c15-s").textContent = String(sec).padStart(2, "0");

    const spent = (now - C.BUDGET_START) * perMs;
    const used15 = Math.min(1, (C.BUDGET_15_TOTAL - C.BUDGET_15_T + spent) / C.BUDGET_15_TOTAL);
    const used20 = Math.min(1, (C.BUDGET_20_TOTAL - C.BUDGET_20_T + spent) / C.BUDGET_20_TOTAL);
    $("meter-15").style.width = (used15 * 100).toFixed(3) + "%";
    $("meter-20").style.width = (used20 * 100).toFixed(3) + "%";
    $("meter-15-pct").textContent = "· " + (used15 * 100).toFixed(2) + "% already emitted";
    $("meter-20-pct").textContent = "· " + (used20 * 100).toFixed(2) + "% already emitted";
    const y20 = new Date(C.BUDGET_START + C.BUDGET_20_T / perMs).getUTCFullYear();
    $("clock-20-note").textContent = "· runs out ~" + y20 + " at today's pace";
  }

  /* ----------------------------------------------------------
     Shared tooltip
     ---------------------------------------------------------- */
  const tip = $("tooltip");
  function showTip(clientX, clientY, title, rows) {
    tip.textContent = "";
    const t = document.createElement("div");
    t.className = "tt-title";
    t.textContent = title;
    tip.appendChild(t);
    rows.forEach((r) => {
      const row = document.createElement("div");
      row.className = "tt-row";
      if (r.color) {
        const k = document.createElement("span");
        k.className = "tt-key";
        k.style.borderTopColor = r.color;
        row.appendChild(k);
      }
      const v = document.createElement("span");
      v.className = "tt-val";
      v.textContent = r.value;
      row.appendChild(v);
      if (r.label) {
        const l = document.createElement("span");
        l.textContent = r.label;
        row.appendChild(l);
      }
      tip.appendChild(row);
    });
    tip.classList.add("show");
    tip.setAttribute("aria-hidden", "false");
    const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = clientX + pad, yy = clientY - h - pad;
    if (x + w > window.innerWidth - 8) x = clientX - w - pad;
    if (yy < 8) yy = clientY + pad;
    tip.style.left = x + "px";
    tip.style.top = yy + "px";
  }
  function hideTip() {
    tip.classList.remove("show");
    tip.setAttribute("aria-hidden", "true");
  }

  /* ----------------------------------------------------------
     SVG helpers
     ---------------------------------------------------------- */
  function el(name, attrs, parent) {
    const n = document.createElementNS(SVG_NS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function niceTicks(min, max, count) {
    const span = max - min;
    const step0 = span / Math.max(1, count);
    const mag = Math.pow(10, Math.floor(Math.log10(step0)));
    let step = mag;
    for (const m of [1, 2, 2.5, 5, 10]) { if (step0 <= m * mag) { step = m * mag; break; } }
    const ticks = [];
    for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) {
      const r = Math.round(v * 1000) / 1000;
      ticks.push(r === 0 ? 0 : r);   // never label "-0"
    }
    return ticks;
  }
  // Catmull-Rom sampling for smooth scenario curves
  function crSample(pts, x) {
    if (x <= pts[0][0]) return pts[0][1];
    if (x >= pts[pts.length - 1][0]) return pts[pts.length - 1][1];
    let i = 0;
    while (i < pts.length - 2 && x > pts[i + 1][0]) i++;
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1],
          p3 = pts[Math.min(pts.length - 1, i + 2)];
    const t = (x - p1[0]) / (p2[0] - p1[0]);
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t +
      (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
      (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
  }
  function cssColor(v) {
    // resolve var(--x) tokens for SVG attributes
    if (v.startsWith("var(")) {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(v.slice(4, -1)).trim();
    }
    return v;
  }

  /* ----------------------------------------------------------
     Generic line chart with crosshair tooltip
     config: { mount, series: [{name,color,points,dash,area,dot,label}],
               xDomain, yDomain, yFmt, refLines: [{y,label}], xFmt }
     ---------------------------------------------------------- */
  function lineChart(cfg) {
    const mount = cfg.mount;
    mount.textContent = "";
    const W = Math.max(320, mount.clientWidth);
    const narrow = W < 560;
    const H = Math.max(240, Math.min(380, Math.round(W * 0.40)));
    const M = { t: 16, r: narrow ? 56 : 96, b: 28, l: narrow ? 40 : 48 };
    const iw = W - M.l - M.r, ih = H - M.t - M.b;
    const [x0, x1] = cfg.xDomain, [y0, y1] = cfg.yDomain;
    const X = (x) => M.l + ((x - x0) / (x1 - x0)) * iw;
    const Y = (y) => M.t + (1 - (y - y0) / (y1 - y0)) * ih;

    const svg = el("svg", { width: W, height: H, viewBox: `0 0 ${W} ${H}`, role: "img" }, null);
    if (cfg.ariaLabel) svg.setAttribute("aria-label", cfg.ariaLabel);

    // gridlines + y ticks (solid hairlines, recessive)
    niceTicks(y0, y1, 5).forEach((v) => {
      el("line", { x1: M.l, x2: M.l + iw, y1: Y(v), y2: Y(v), stroke: "#2c2c2a", "stroke-width": 1 }, svg);
      el("text", {
        x: M.l - 8, y: Y(v) + 4, "text-anchor": "end", fill: "#898781",
        "font-size": 11, style: "font-variant-numeric: tabular-nums"
      }, svg).textContent = cfg.yFmt ? cfg.yFmt(v) : v;
    });
    // x ticks
    niceTicks(x0, x1, narrow ? 4 : 7).forEach((v) => {
      el("text", {
        x: X(v), y: H - 8, "text-anchor": "middle", fill: "#898781",
        "font-size": 11, style: "font-variant-numeric: tabular-nums"
      }, svg).textContent = cfg.xFmt ? cfg.xFmt(v) : v;
    });
    // baseline
    el("line", { x1: M.l, x2: M.l + iw, y1: Y(y0), y2: Y(y0), stroke: "#383835", "stroke-width": 1 }, svg);

    // reference lines
    (cfg.refLines || []).forEach((r) => {
      el("line", {
        x1: M.l, x2: M.l + iw, y1: Y(r.y), y2: Y(r.y),
        stroke: "#5a5952", "stroke-width": 1
      }, svg);
      el("text", {
        x: M.l + 4, y: Y(r.y) - 5, fill: "#898781", "font-size": 11
      }, svg).textContent = r.label;
    });

    // series
    cfg.series.forEach((s) => {
      const color = cssColor(s.color);
      const pts = s.points.filter((p) => p[0] >= x0 && p[0] <= x1);
      if (!pts.length) return;
      const dAttr = pts.map((p, i) => (i ? "L" : "M") + X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1)).join(" ");
      if (s.area) {
        el("path", {
          d: dAttr + ` L ${X(pts[pts.length - 1][0]).toFixed(1)} ${Y(y0)} L ${X(pts[0][0]).toFixed(1)} ${Y(y0)} Z`,
          fill: color, opacity: 0.10, stroke: "none"
        }, svg);
      }
      const path = el("path", {
        d: dAttr, fill: "none", stroke: color, "stroke-width": 2,
        "stroke-linejoin": "round", "stroke-linecap": "round"
      }, svg);
      if (s.dash) path.setAttribute("stroke-dasharray", "5 5");
      if (s.dot) {
        const last = pts[pts.length - 1];
        el("circle", { cx: X(last[0]), cy: Y(last[1]), r: 6, fill: color, stroke: "#1a1a19", "stroke-width": 2 }, svg);
      }
      if (s.label && !narrow) {
        const last = pts[pts.length - 1];
        el("text", {
          x: X(last[0]) + 10, y: Y(last[1]) + 4, fill: "#c3c2b7", "font-size": 12, "font-weight": 600
        }, svg).textContent = s.label;
      }
    });

    // extra decorations
    if (cfg.decorate) cfg.decorate(svg, X, Y);

    // ---- crosshair + tooltip ----
    const cross = el("line", {
      x1: 0, x2: 0, y1: M.t, y2: M.t + ih, stroke: "#5a5952",
      "stroke-width": 1, opacity: 0
    }, svg);
    const overlay = el("rect", {
      x: M.l, y: M.t, width: iw, height: ih, fill: "transparent", tabindex: 0
    }, svg);
    overlay.style.cursor = "crosshair";
    overlay.style.outline = "none";

    const xs = cfg.tooltipXs;
    let focusIdx = Math.max(0, xs.length - 1);

    function readout(xVal, clientX, clientY) {
      cross.setAttribute("x1", X(xVal));
      cross.setAttribute("x2", X(xVal));
      cross.setAttribute("opacity", 0.8);
      const rows = cfg.tooltipRows(xVal).map((r) => ({ ...r, color: r.color && cssColor(r.color) }));
      if (rows.length) showTip(clientX, clientY, cfg.xFmt ? cfg.xFmt(xVal) : String(xVal), rows);
    }
    function nearestX(px) {
      const xv = x0 + ((px - M.l) / iw) * (x1 - x0);
      let best = 0, bd = Infinity;
      xs.forEach((v, i) => { const d = Math.abs(v - xv); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    overlay.addEventListener("pointermove", (e) => {
      const rect = svg.getBoundingClientRect();
      focusIdx = nearestX(e.clientX - rect.left);
      readout(xs[focusIdx], e.clientX, e.clientY);
    });
    overlay.addEventListener("pointerleave", () => { cross.setAttribute("opacity", 0); hideTip(); });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") focusIdx = Math.min(xs.length - 1, focusIdx + 1);
      else if (e.key === "ArrowLeft") focusIdx = Math.max(0, focusIdx - 1);
      else return;
      e.preventDefault();
      const rect = svg.getBoundingClientRect();
      readout(xs[focusIdx], rect.left + X(xs[focusIdx]), rect.top + M.t + 30);
    });
    overlay.addEventListener("blur", () => { cross.setAttribute("opacity", 0); hideTip(); });

    mount.appendChild(svg);
  }

  /* ----------------------------------------------------------
     Chart 1 — the Keeling curve
     ---------------------------------------------------------- */
  function renderKeeling() {
    const now = Date.now();
    const nowFrac = yearFrac(now);
    const nowVal = co2Now(now);
    const proj = C.CO2_PROJECTION;
    const annualByYear = new Map(C.CO2_ANNUAL);

    lineChart({
      mount: $("chart-keeling"),
      ariaLabel: "Line chart of atmospheric CO2 from 1958 to today, rising from 316 to about " +
        Math.round(nowVal) + " ppm, with a dashed projection reaching 500 ppm by 2050",
      xDomain: [1958, 2050],
      yDomain: [270, 510],
      yFmt: (v) => fmtInt.format(v),
      xFmt: (v) => String(Math.round(v)),
      refLines: [
        { y: C.CO2_PREINDUSTRIAL, label: "pre-industrial · 280 ppm" },
        { y: C.CO2_SAFE, label: "“safe” boundary · 350 ppm" }
      ],
      series: [
        { name: "projected", color: "var(--s-blue)", points: proj, dash: true },
        { name: "CO₂ (annual mean)", color: "var(--s-blue)", points: C.CO2_ANNUAL, area: true }
      ],
      decorate: (svg, X, Y) => {
        const cx = X(nowFrac), cy = Y(nowVal);
        const halo = el("circle", { cx, cy, r: 6, fill: "none", stroke: cssColor("var(--s-red)"), "stroke-width": 2 }, svg);
        if (!reduceMotion) {
          const a1 = el("animate", { attributeName: "r", values: "5;12;5", dur: "2.4s", repeatCount: "indefinite" }, halo);
          el("animate", { attributeName: "opacity", values: "0.9;0;0.9", dur: "2.4s", repeatCount: "indefinite" }, halo);
          void a1;
        }
        el("circle", { cx, cy, r: 4.5, fill: cssColor("var(--s-red)"), stroke: "#1a1a19", "stroke-width": 2 }, svg);
        el("text", { x: cx + 12, y: cy + 4, fill: "#f4f3ec", "font-size": 12, "font-weight": 600 }, svg)
          .textContent = "today · " + fmt1.format(nowVal);
      },
      tooltipXs: C.CO2_ANNUAL.map((p) => p[0]).concat([2030, 2040, 2050]),
      tooltipRows: (year) => {
        if (annualByYear.has(year)) {
          return [{ color: "var(--s-blue)", value: fmt2.format(annualByYear.get(year)) + " ppm", label: "annual mean" }];
        }
        return [{ color: "var(--s-blue)", value: "~" + fmtInt.format(crSample(proj, year)) + " ppm", label: "if the trend continues" }];
      }
    });

    buildTable($("table-keeling"), ["Year", "CO₂ (ppm)"],
      C.CO2_ANNUAL.map((p) => [p[0], fmt2.format(p[1])]));
  }

  /* ----------------------------------------------------------
     Chart 2 — warming stripes
     ---------------------------------------------------------- */
  function stripeColor(v, mid, span) {
    // diverging blue ↔ neutral ↔ red around the 1971–2000 mean
    const t = Math.max(-1, Math.min(1, (v - mid) / span));
    const lerp = (a, b, u) => Math.round(a + (b - a) * u);
    const mix = (c1, c2, u) =>
      `rgb(${lerp(c1[0], c2[0], u)},${lerp(c1[1], c2[1], u)},${lerp(c1[2], c2[2], u)})`;
    const blue = [28, 92, 171], neutral = [56, 56, 53], red = [208, 59, 59], deep = [124, 16, 16];
    if (t < 0) return mix(neutral, blue, Math.pow(-t, 0.8));
    if (t < 0.75) return mix(neutral, red, Math.pow(t / 0.75, 0.9));
    return mix(red, deep, (t - 0.75) / 0.25);
  }

  function renderStripes() {
    const host = $("stripes");
    host.textContent = "";
    const data = state.tempAnnual;
    const ref = data.filter((p) => p[0] >= 1971 && p[0] <= 2000);
    const mid = ref.reduce((a, p) => a + p[1], 0) / ref.length;
    const span = Math.max(...data.map((p) => Math.abs(p[1] - mid))) * 0.92;

    data.forEach(([year, v]) => {
      const d = document.createElement("div");
      d.className = "stripe";
      d.style.background = stripeColor(v, mid, span);
      d.tabIndex = 0;
      d.setAttribute("role", "img");
      const anomaly = v + C.TEMP_BASELINE_OFFSET;
      d.setAttribute("aria-label", `${year}: ${(anomaly >= 0 ? "+" : "")}${fmt2.format(anomaly)} °C vs late 1800s`);
      const show = (x, y) => showTip(x, y, String(year), [{
        color: stripeColor(v, mid, span),
        value: (anomaly >= 0 ? "+" : "") + fmt2.format(anomaly) + " °C",
        label: "vs late 1800s"
      }]);
      d.addEventListener("pointermove", (e) => show(e.clientX, e.clientY));
      d.addEventListener("pointerleave", hideTip);
      d.addEventListener("focus", () => { const r = d.getBoundingClientRect(); show(r.left + r.width / 2, r.top + 40); });
      d.addEventListener("blur", hideTip);
      host.appendChild(d);
    });
  }

  /* ----------------------------------------------------------
     Chart 3 — observed warming + scenarios to 2100
     ---------------------------------------------------------- */
  function renderTrajectories() {
    const observed = state.tempAnnual.map((p) => [p[0], p[1] + C.TEMP_BASELINE_OFFSET]);
    const lastObs = observed[observed.length - 1];

    const scenarioSeries = C.SCENARIOS.map((s) => {
      const pts = [[lastObs[0], lastObs[1]]];
      for (let y = 2026; y <= 2100; y += 2) pts.push([y, crSample(s.points, y)]);
      return { ...s, sampled: pts };
    });

    // legend (also carries identity for CVD readers via direct end labels)
    const legend = $("legend-traj");
    legend.textContent = "";
    [{ name: "Observed (NASA)", color: "#c3c2b7" }]
      .concat(C.SCENARIOS.map((s) => ({ name: s.name, color: cssColor(s.color) })))
      .forEach((it) => {
        const item = document.createElement("span");
        item.className = "legend-item";
        const key = document.createElement("span");
        key.className = "legend-key";
        key.style.borderTopColor = it.color;
        item.appendChild(key);
        item.appendChild(document.createTextNode(it.name));
        legend.appendChild(item);
      });

    const xs = [];
    for (let y = 1880; y <= 2100; y += (y < 2024 ? 1 : 2)) xs.push(y);
    const obsByYear = new Map(observed.map((p) => [p[0], p[1]]));

    lineChart({
      mount: $("chart-traj"),
      ariaLabel: "Line chart of global temperature anomaly from 1880 observed data through three model scenarios to 2100, ranging from 1.8 to 4.4 degrees Celsius",
      xDomain: [1880, 2100],
      yDomain: [-0.6, 4.6],
      yFmt: (v) => (v > 0 ? "+" : "") + fmt1.format(v) + "°",
      xFmt: (v) => String(Math.round(v)),
      refLines: [
        { y: 1.5, label: "Paris limit · +1.5 °C" },
        { y: 2.0, label: "+2 °C" }
      ],
      series: [
        ...scenarioSeries.map((s) => ({
          name: s.name, color: s.color, points: s.sampled, dot: true,
          label: (s.id === "high" ? "+4.4°" : s.id === "current" ? "+2.7°" : "+1.8°")
        })),
        { name: "Observed (NASA)", color: "#c3c2b7", points: observed, dot: true }
      ],
      tooltipXs: xs,
      tooltipRows: (year) => {
        const rows = [];
        if (obsByYear.has(year)) {
          rows.push({ color: "#c3c2b7", value: "+" + fmt2.format(obsByYear.get(year)) + " °C", label: "observed" });
        }
        if (year >= 2025) {
          scenarioSeries.forEach((s) => rows.push({
            color: s.color, value: "+" + fmt2.format(crSample(s.points, year)) + " °C", label: s.name
          }));
        }
        return rows;
      }
    });

    // decadal table
    const rows = [];
    for (let y = 1880; y <= 2100; y += 10) {
      rows.push([
        y,
        obsByYear.has(y) ? "+" + fmt2.format(obsByYear.get(y)) : "—",
        y >= 2030 ? "+" + fmt2.format(crSample(C.SCENARIOS[2].points, y)) : "—",
        y >= 2030 ? "+" + fmt2.format(crSample(C.SCENARIOS[1].points, y)) : "—",
        y >= 2030 ? "+" + fmt2.format(crSample(C.SCENARIOS[0].points, y)) : "—"
      ]);
    }
    buildTable($("table-traj"),
      ["Year", "Observed °C", "Paris path", "Current policies", "High emissions"], rows);
  }

  /* ----------------------------------------------------------
     Tables & sparklines
     ---------------------------------------------------------- */
  function buildTable(mount, headers, rows) {
    mount.textContent = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const trh = document.createElement("tr");
    headers.forEach((h) => {
      const th = document.createElement("th");
      th.textContent = h;
      trh.appendChild(th);
    });
    thead.appendChild(trh);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    rows.forEach((r) => {
      const tr = document.createElement("tr");
      r.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = String(cell);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    mount.appendChild(table);
  }

  function sparkline(mount, values, accent) {
    mount.textContent = "";
    const W = mount.clientWidth || 160, H = 30;
    mount.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const min = Math.min(...values), max = Math.max(...values);
    const X = (i) => 4 + (i / (values.length - 1)) * (W - 12);
    const Y = (v) => 3 + (1 - (v - min) / (max - min || 1)) * (H - 8);
    el("path", {
      d: values.map((v, i) => (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(v).toFixed(1)).join(" "),
      fill: "none", stroke: "#6b6a64", "stroke-width": 2, "stroke-linecap": "round"
    }, mount);
    el("circle", {
      cx: X(values.length - 1), cy: Y(values[values.length - 1]), r: 3.5,
      fill: cssColor(accent), stroke: "#1a1a19", "stroke-width": 2
    }, mount);
  }

  function renderSparks() {
    sparkline($("spark-co2"), C.CO2_ANNUAL.slice(-12).map((p) => p[1]), "var(--s-blue)");
    sparkline($("spark-temp"), state.tempAnnual.slice(-12).map((p) => p[1]), "var(--s-red)");
  }

  /* ----------------------------------------------------------
     Live data — global-warming.org (NOAA / NASA mirrors)
     ---------------------------------------------------------- */
  function fetchJSON(url) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 9000);
    return fetch(url, { signal: ctrl.signal })
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .finally(() => clearTimeout(timer));
  }

  function loadLive() {
    fetchJSON("https://global-warming.org/api/co2-api").then((j) => {
      const arr = j && j.co2;
      if (!Array.isArray(arr) || !arr.length) return;
      const last = arr[arr.length - 1];
      const t = Date.UTC(+last.year, +last.month - 1, +last.day);
      const v = parseFloat(last.cycle);
      if (!isFinite(v) || v < 300 || v > 600) return;
      state.co2Anchor = { time: t, value: v };
      // measured year-over-year gain
      const target = t - 365 * 864e5;
      let best = null, bd = Infinity;
      for (const e of arr) {
        const et = Date.UTC(+e.year, +e.month - 1, +e.day);
        const d = Math.abs(et - target);
        if (d < bd) { bd = d; best = e; }
      }
      if (best && bd < 8 * 864e5) state.co2YoY = v - parseFloat(best.cycle);
      state.live = true;
      $("live-dot").classList.add("is-live");
      $("live-label").textContent = "live · latest NOAA reading " +
        new Date(t).toISOString().slice(0, 10) + ", interpolated since";
      $("data-stamp").textContent = "live NOAA reading " + new Date(t).toISOString().slice(0, 10);
      renderKeeling();
    }).catch(() => {});

    fetchJSON("https://global-warming.org/api/temperature-api").then((j) => {
      const arr = j && j.result;
      if (!Array.isArray(arr) || arr.length < 100) return;
      const byYear = new Map();
      arr.forEach((e) => {
        const y = Math.floor(parseFloat(e.time));
        const v = parseFloat(e.station != null ? e.station : e.land);
        if (!isFinite(y) || !isFinite(v)) return;
        if (!byYear.has(y)) byYear.set(y, []);
        byYear.get(y).push(v);
      });
      const annual = [];
      [...byYear.keys()].sort((a, b) => a - b).forEach((y) => {
        const vals = byYear.get(y);
        if (vals.length >= 10) annual.push([y, vals.reduce((a, b) => a + b, 0) / vals.length]);
      });
      if (annual.length < 100) return;
      state.tempAnnual = annual;
      const latest = annual[annual.length - 1];
      $("kpi-temp").textContent = "+" + fmt2.format(latest[1] + C.TEMP_BASELINE_OFFSET);
      $("kpi-temp-delta").textContent = "vs late-1800s · " + latest[0] + " mean (NASA)";
      renderStripes();
      renderTrajectories();
      renderSparks();
    }).catch(() => {});

    fetchJSON("https://global-warming.org/api/methane-api").then((j) => {
      const arr = j && j.methane;
      if (!Array.isArray(arr) || !arr.length) return;
      const v = parseFloat(arr[arr.length - 1].average);
      if (!isFinite(v) || v < 1000 || v > 4000) return;
      $("kpi-ch4").textContent = fmtInt.format(v);
      $("kpi-ch4-delta").textContent =
        "+" + Math.round(((v / C.METHANE_PREIND_PPB) - 1) * 100) + "% vs pre-industrial";
    }).catch(() => {});
  }

  /* ----------------------------------------------------------
     Ambience — the page warms as you scroll toward 2100
     ---------------------------------------------------------- */
  function initHeat() {
    let raf = null;
    const update = () => {
      raf = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      const hue = Math.round(215 - p * 207);   // 215 (cool) → 8 (hot)
      document.documentElement.style.setProperty("--heat-hue", hue);
    };
    window.addEventListener("scroll", () => {
      if (!reduceMotion && raf == null) raf = requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  function initReveal() {
    const targets = document.querySelectorAll(".card, .tile, .sim, .fact, .stripes");
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
  }

  /* ----------------------------------------------------------
     Boot
     ---------------------------------------------------------- */
  function renderAll() {
    renderKeeling();
    renderStripes();
    renderTrajectories();
    renderSparks();
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderAll, 160);
  });

  $("data-stamp").textContent = "embedded dataset through 2024 · waiting for live feed";
  startHero();
  tickSims();
  setInterval(tickSims, 100);
  tickClock();
  setInterval(tickClock, 250);
  renderAll();
  initHeat();
  initReveal();
  loadLive();
})();
