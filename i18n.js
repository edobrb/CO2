/* ============================================================
   Earth's Vital Signs — UI strings in 6 languages.
   {tokens} in footer.sources are replaced with LINKS entries;
   {date}/{pct}/{year}/… are filled in by app.js at render time.
   ============================================================ */
window.I18N = (function () {
  "use strict";

  /* citation links are shared verbatim across languages */
  const LINKS = {
    gw: '<a href="https://global-warming.org" rel="noopener">global-warming.org</a>',
    ipcc7: '<a href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/" rel="noopener">IPCC AR6 WGI Chapter 7</a>',
    pnas14: '<a href="https://www.pnas.org/doi/10.1073/pnas.1318201111" rel="noopener">Pistone, Eisenman &amp; Ramanathan, PNAS 2014</a>',
    grl19: '<a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019GL082914" rel="noopener">Pistone et al., GRL 2019</a>',
    nree21: '<a href="https://www.nature.com/articles/s43017-021-00230-3" rel="noopener">Nature Reviews Earth &amp; Environment 2021</a>',
    cee26: '<a href="https://www.nature.com/articles/s43247-026-03189-5" rel="noopener">Communications Earth &amp; Environment 2026</a>',
    gcb24: '<a href="https://essd.copernicus.org/articles/17/965/2025/" rel="noopener">Global Carbon Budget 2024</a>',
    cee25: '<a href="https://www.nature.com/articles/s43247-025-02606-5" rel="noopener">Communications Earth &amp; Environment 2025</a>',
    pnas25: '<a href="https://www.pnas.org/doi/10.1073/pnas.2418813122" rel="noopener">PNAS 2025</a>',
    nat24: '<a href="https://www.nature.com/articles/s41586-024-07878-z" rel="noopener">Byrne et al., Nature 2024</a>'
  };

  const LANGS = {

  /* ==================== ENGLISH ==================== */
  en: {
    name: "English", locale: "en-US",
    title: "Earth's Vital Signs — live CO₂ & climate dashboard",
    hero: {
      liveWait: "interpolated from the latest NOAA reading",
      liveLabel: "live · latest NOAA reading {date}, interpolated since",
      label: "Carbon dioxide in Earth's atmosphere, right now",
      context: 'That is <strong id="co2-vs-pre">···</strong> more CO₂ than the pre-industrial atmosphere held (280 ppm before 1850) — and <strong id="co2-vs-lastyear">···</strong> higher than on this same day last year.',
      seasonDown: "Dipping this month? That is the planet's summer inhale: northern forests are pulling carbon out of the air. The dip happens every year — the line underneath it only climbs.",
      seasonUp: "Climbing fast right now: northern ecosystems are releasing their winter carbon on top of the fossil-fuel trend.",
      scroll: "▾ read the vital signs"
    },
    tiles: {
      temp: "Global temperature",
      tempDelta: "vs the late 1800s · warmest era in 125,000 years",
      tempDeltaLive: "vs the late 1800s · {year} mean (NASA)",
      co2: "CO₂ concentration",
      co2Delta: "+2.7 ppm per year, and accelerating",
      ch4: "Methane",
      ch4Delta: "+{pct}% vs pre-industrial",
      ice: "Arctic sea ice (Sept.)",
      iceDelta: "−12.2% per decade",
      sea: "Sea level",
      seaDelta: "since 1993 · now rising 4.5 mm per year"
    },
    ui: { tableView: "View data as table", langAria: "Language" },
    keeling: {
      h2: "The Keeling Curve — 67 years of one relentless line",
      sub: "Atmospheric CO₂ measured at Mauna Loa since 1958. The small yearly sawtooth is the Northern Hemisphere breathing: forests take carbon in each summer and release it each winter. The climb underneath never stops. The dashed tail shows where today's trend is heading.",
      refPre: "pre-industrial · 280 ppm",
      refSafe: "“safe” boundary · 350 ppm",
      today: "today · {value}",
      ttAnnual: "annual mean",
      ttTrend: "if the trend continues",
      aria: "Line chart of atmospheric CO2 from 1958 to today, rising from 316 to about {now} ppm, with a dashed projection reaching 500 ppm by 2050",
      tblYear: "Year", tblCo2: "CO₂ (ppm)"
    },
    stripes: {
      h2: "145 years, one stripe each",
      sub: "Each stripe is one year, colored by how warm it was — blue for cooler, red for hotter (after Ed Hawkins' <em>warming stripes</em>). Find the year you were born. Then find today.",
      cooler: "cooler", hotter: "hotter", vs: "vs late 1800s",
      aria: "Warming stripes: annual global temperature 1880 to 2024, shifting from blue to deep red"
    },
    traj: {
      h2: "Where the century goes from here",
      sub: "Warming observed so far (NASA), followed by three possible futures from climate models. The gap between those lines is not about the weather — it decides harvests, coastlines, and which cities remain livable. Temperatures are shown relative to the late 1800s.",
      observed: "Observed (NASA)",
      refParis: "Paris limit · +1.5 °C", ref2: "+2 °C",
      ttObserved: "observed",
      aria: "Line chart of global temperature anomaly from 1880 observed data through three model scenarios to 2100, ranging from 1.8 to 4.4 degrees Celsius",
      tblHead: ["Year", "Observed °C", "Paris path", "Current policies", "High emissions"]
    },
    scenarios: {
      high: "High emissions (SSP5-8.5)",
      current: "Current policies (~2.7 °C)",
      paris: "Paris path (SSP1-2.6)"
    },
    loopsIntro: {
      h2: "The loops that do the driving",
      sub: 'We emit the carbon — but the carbon itself does only part of the warming. It gives the climate a push, and the climate then amplifies that push on its own. Think of a microphone held too close to its speaker: the ear-splitting squeal is not the singer\'s voice — it is the <em>loop</em>. The climate system is full of loops like that. Some push the warming further (<span class="ink-amp">amplifying</span>), some pull it back (<span class="ink-stab">stabilizing</span>), and the margin between the two sides is the whole story.'
    },
    ledger: {
      h2: "The planet's feedback ledger",
      sub: "How strongly each feedback pushes the climate, for every degree of warming it reacts to (IPCC AR6). Bars pointing right add heat; bars pointing left shed it. The whiskers show the assessed uncertainty range — note that clouds could still turn out to cool.",
      note: "<strong>Read the bottom bar carefully.</strong> The stabilizing side wins — but only by about a third of its own strength. If the amplifiers had added up to more than <strong>3.2</strong>, warming would have fed on itself without limit, and Earth would look like Venus. Instead the ledger closes at <strong>−1.16</strong>, and that thin margin is exactly what sets climate sensitivity near <strong>3 °C</strong> per doubling of CO₂. We are not living on a stable planet. We are living on a <em>barely</em> stable one.",
      axis: "W/m² per °C of warming",
      legendAmp: "Amplifying — adds heat",
      legendStab: "Stabilizing — sheds heat",
      legendWhisker: "Whisker = assessed range",
      legendPush: "The push — our forcing ÷ warming so far",
      tblHead: ["Feedback", "W/m²/°C", "Range", "Effect"],
      amp: "amplifying", stab: "stabilizing", net: "net balance", push: "the push",
      aria: "Diverging bar chart of IPCC AR6 climate feedback parameters in watts per square metre per degree Celsius. Water vapour plus lapse rate +1.30, clouds +0.42, surface albedo +0.35 amplify warming; the Planck response −3.22 stabilizes it; the net feedback is −1.16. Our forcing so far, divided by the warming so far, pushes in +2.0 — larger than the net pushback, so heat still accumulates."
    },
    feedbacks: {
      wv: { name: "Water vapour + lapse rate", short: "Water vapour",
        note: "The single largest amplifier. Warmer air holds about 7% more moisture per °C, and water vapour is itself a greenhouse gas." },
      clouds: { name: "Clouds", short: "Clouds",
        note: "Amplifying on balance — and the largest single source of uncertainty in the whole ledger: the assessed range still crosses zero." },
      albedo: { name: "Surface albedo (ice & snow)", short: "Ice albedo",
        note: "Melting ice and snow uncover dark land and ocean, which absorb the sunlight the ice used to reflect back to space." },
      planck: { name: "Planck response", short: "Planck response",
        note: "The great stabilizer: a warmer body radiates more heat away. This single term is why Earth settles at a new temperature instead of overheating without limit." },
      push: { name: "The push — our forcing so far", short: "Our push",
        note: "Not a feedback — the push itself: the heat-trapping forcing of everything we have emitted (~2.9 W/m²), divided by the warming so far (~1.45 °C). While this bar reaches farther right than the net feedback reaches left, the planet keeps accumulating heat; warming stops only once they match." },
      net: { name: "Net feedback", short: "NET",
        note: "Stabilization wins — but only by about a third of its own strength. That narrow margin is what sets climate sensitivity near 3 °C per CO₂ doubling." }
    },
    loopsSec: {
      h2: "Six loops already turning",
      lede: "Warming enters each chain and comes out larger — then the loop feeds it straight back in. Hover over a card to light its circuit; open “why it matters” for the full story.",
      more: "why it matters"
    },
    loopAria: { cycle: "Feedback cycle: {steps}, returning to the start.", then: ", then " },
    warn: {
      kicker: "Why the countdown below is generous",
      body: "Carbon budgets usually count only <em>our</em> emissions, as if the planet itself added nothing. Add the carbon that thawing permafrost and northern wildfires will release, and the room left under 1.5 °C shrinks by <strong>25% ± 12%</strong> — under 2 °C, by <strong>17% ± 7%</strong>. The feedback loops are not waiting for us to spend the budget. They are already spending it with us."
    },
    balSec: {
      h2: "And the loops holding the line",
      lede: "To be fair, the ledger has another column. Three loops push back against the warming — and one of them is the only reason Earth is livable at all."
    },
    loops: {
      albedo: {
        title: "The vanishing mirror",
        steps: ["Warming", "Sea ice melts", "Dark ocean\nabsorbs sun", "More warming"],
        statUnit: "W/m²",
        statLabel: "extra heating from an ice-free Arctic — as much forcing as a trillion tonnes of CO₂",
        body: "Arctic ice reflects 50–70% of incoming sunlight straight back to space. The open water beneath it reflects about 6% and absorbs the rest. The ice already lost between 1979 and 2011 added <strong>+0.21 W/m²</strong> of global heating — a quarter as much as all our CO₂ over the same period. The planet is dismantling its own mirror."
      },
      vapour: {
        title: "The thickening blanket",
        steps: ["Warming", "More evaporation", "Vapour traps\nmore heat", "More warming"],
        statUnit: "per °C",
        statLabel: "more water vapour the air can hold for every degree of warming",
        body: "This one is fixed by physics: warmer air holds about 7% more moisture per degree (the Clausius–Clapeyron relation). Water vapour is the atmosphere's strongest greenhouse gas, so the extra moisture traps more heat — which drives more evaporation. This loop roughly <strong>doubles</strong> the warming CO₂ would cause on its own, and it is already built into every climate model."
      },
      permafrost: {
        title: "The freezer door",
        steps: ["Warming", "Permafrost thaws", "Microbes release\nCO₂ + methane", "More warming"],
        statUnit: "the air's carbon",
        statLabel: "1,100–1,700 Gt of carbon lies frozen in northern permafrost — about twice as much as the whole atmosphere holds",
        body: "Frozen ground has kept dead plants on pause for tens of thousands of years. When it thaws, microbes finish the meal they began in the last ice age, releasing CO₂ and methane — and over its first 20 years methane traps about <strong>80× more heat than CO₂</strong>. Counting permafrost and wildfire carbon shrinks the remaining 1.5 °C budget by <strong>25% ± 12%</strong>."
      },
      fire: {
        title: "The burning fuse",
        steps: ["Warming", "Forests dry out", "Fires release\nCO₂ + soot", "More warming"],
        statUnit: "Gt CO₂",
        statLabel: "released by Canada's record 2023 fire season — about four times the country's fossil-fuel emissions",
        body: "Heat manufactures fuel: warmer air pulls moisture out of plants and soil, so forests burn hotter, deeper and farther north. Canada's 2023 fires released about <strong>2.4 Gt of CO₂</strong>, and boreal fires increasingly burn <strong>peat</strong> — carbon that took millennia to store. Their soot drifts onto distant ice and darkens it, feeding the vanishing-mirror loop above."
      },
      sinks: {
        title: "The tiring sponge",
        steps: ["Warming", "Sinks weaken", "More CO₂ stays\nin the air", "More warming"],
        statUnit: "weaker",
        statLabel: "how much climate impacts have weakened the land and ocean carbon sinks over the past decade",
        body: "Every year, land and ocean quietly absorb about <strong>half</strong> of everything we emit — the largest climate subsidy in existence. That subsidy is being withdrawn: heat and drought cut plant uptake, and warmer, more stratified seawater holds less gas. In 2024 the land sink nearly collapsed, and atmospheric CO₂ jumped by <strong>3.73 ppm</strong> — the fastest rise ever measured."
      },
      forest: {
        title: "The forest that exhales",
        steps: ["Warming", "Drought & fire", "Forest becomes\na carbon source", "More warming"],
        statUnit: "GtC/yr",
        statLabel: "carbon the Amazon dieback region could emit instead of absorbing",
        body: "The Amazon makes much of its own rain. Heat and land clearing break that circuit: drought and fire spread, and the forest flips from a carbon <em>sink</em> into a carbon <em>source</em>. Models place the start of dieback within this century, with decline accelerating sharply beyond about <strong>2.3 °C</strong>. A rainforest is not a fixed asset — it is a loop that can run backwards."
      }
    },
    balancers: {
      planck: {
        title: "The Planck response",
        body: "Every warm object glows. Heat the planet and it radiates more energy back to space — about <strong>3.2 W/m² for each °C</strong>, more than all the amplifiers combined. This is why warming settles at a new, hotter equilibrium instead of spiralling into a Venus. It is also the only balancing loop fast enough to matter this century."
      },
      weathering: {
        title: "Rock weathering",
        body: "Rain pulls CO₂ out of the air and, over ages, binds it into rock. Earth really does have a clean-up crew for excess carbon — but it works on a timescale of <strong>hundreds of thousands of years</strong>. It will tidy up the Anthropocene long after everyone reading this is a fossil."
      },
      fert: {
        title: "CO₂ fertilization",
        body: "Extra CO₂ does make plants grow faster, and that greening has absorbed a real share of our emissions. But the effect <strong>saturates</strong>, it needs water and nutrients that warming takes away, and it is increasingly cancelled out by drought, heat and fire. A helpful loop being overwhelmed by the ones above."
      }
    },
    clock: {
      h2: "The carbon countdown",
      sub: "To keep warming below 1.5 °C with even a 50/50 chance, humanity has a fixed budget of CO₂ left to emit — ever. At today's pace of <strong>~1,340 tonnes per second</strong>, this is how long it lasts:",
      y: "years", d: "days", h: "hrs", m: "min", s: "sec",
      b15: "1.5 °C budget", b20: "2.0 °C budget",
      emitted: "· {pct}% already emitted",
      runsOut: "· runs out ~{year} at today's pace",
      foot: "Budgets: IPCC AR6 / Global Carbon Budget 2024, 50% likelihood, counted from January 2025. The clock assumes emissions stay at today's rate — every cut buys time.",
      aria15: "Share of the 1.5 degree carbon budget already emitted",
      aria20: "Share of the 2 degree carbon budget already emitted"
    },
    sims: {
      h2: "Meanwhile, since you opened this page…",
      tons: "tonnes of CO₂ emitted worldwide",
      eiffel: "Eiffel Towers of CO₂, by weight — one every ~7.6 seconds",
      whales: "blue whales of CO₂ — about 10 whales every second",
      bombs: "Hiroshima bombs' worth of extra heat trapped by the oceans and air"
    },
    facts: {
      pliocene: { h3: "🦕 Deep-time déjà vu",
        body: "The last time CO₂ was this high was the <strong>Pliocene, 3–5 million years ago</strong>. No humans existed, the seas stood <strong>10–20 metres higher</strong>, and camels lived in the Arctic. We rebuilt that atmosphere within a single lifetime." },
      breath: { h3: "🫁 Every breath you take",
        body: "About <strong>1 molecule in every 2,300</strong> of the air in your lungs right now is CO₂ — roughly 50% more than anyone alive in 1850 inhaled. Your grandparents literally breathed different air." },
      speed: { h3: "🚄 Speed matters",
        body: "Coming out of the last ice age, CO₂ rose by about 80 ppm over <strong>6,000 years</strong>. We have just done 80 ppm in <strong>45 years</strong> — roughly <strong>130× faster</strong>. Nature has brakes; we cut them." },
      blanket: { h3: "🧊 A blanket, not a bomb",
        body: "CO₂ works like a blanket around the planet, and every year we knit it a little thicker. The extra heat it now traps equals about <strong>10 Hiroshima explosions per second</strong> — and roughly 90% of it is absorbed by the ocean." }
    },
    footer: {
      sources: "<strong>Sources &amp; honesty box.</strong> CO₂: NOAA Global Monitoring Lab (Mauna Loa). Temperature: NASA GISTEMP. Live feeds via the open {gw} API, with embedded fallback data when offline. Emission rate &amp; carbon budgets: Global Carbon Budget 2024, IPCC AR6. Projections: IPCC AR6 / Climate Action Tracker central estimates. Feedback parameters: {ipcc7} (Table 7.10). Ice-albedo forcing: {pnas14} and {grl19}. Permafrost carbon and the budget reduction: {nree21} and {cee26}. Carbon-sink weakening: {gcb24}. Amazon dieback: {cee25} and {pnas25}. Canada's 2023 fire emissions: {nat24}. Between readings, values are <em>interpolated</em> from the latest measured trend and seasonal cycle — the ticking digits are an estimate; the direction is a measurement. This is an independent educational visualization, not an official product of these agencies.",
      fine: "Built with plain HTML/SVG/canvas · globe: Natural Earth coastlines",
      stampWait: "embedded dataset through 2024 · waiting for live feed",
      stampLive: "live NOAA reading {date}"
    }
  },

  /* ==================== ITALIANO ==================== */
  it: {
    name: "Italiano", locale: "it-IT",
    title: "I segni vitali della Terra — dashboard CO₂ e clima in tempo reale",
    hero: {
      liveWait: "interpolato dall'ultima lettura NOAA",
      liveLabel: "live · ultima lettura NOAA {date}, interpolato da allora",
      label: "L'anidride carbonica nell'atmosfera terrestre, in questo istante",
      context: 'Cioè <strong id="co2-vs-pre">···</strong> in più rispetto all\'atmosfera preindustriale (280 ppm prima del 1850) — e <strong id="co2-vs-lastyear">···</strong> in più rispetto a questo stesso giorno dell\'anno scorso.',
      seasonDown: "Sta scendendo questo mese? È il respiro estivo del pianeta: le foreste dell'emisfero nord stanno assorbendo carbonio dall'aria. Il calo si ripete ogni anno — la linea sottostante non fa che salire.",
      seasonUp: "Sta salendo rapidamente: gli ecosistemi del nord rilasciano il carbonio invernale, che si somma al trend dei combustibili fossili.",
      scroll: "▾ leggi i segni vitali"
    },
    tiles: {
      temp: "Temperatura globale",
      tempDelta: "vs fine '800 · era più calda degli ultimi 125.000 anni",
      tempDeltaLive: "vs fine '800 · media {year} (NASA)",
      co2: "Concentrazione di CO₂",
      co2Delta: "+2,7 ppm all'anno, in accelerazione",
      ch4: "Metano",
      ch4Delta: "+{pct}% vs era preindustriale",
      ice: "Ghiaccio artico (sett.)",
      iceDelta: "−12,2% per decennio",
      sea: "Livello del mare",
      seaDelta: "dal 1993 · ora sale di 4,5 mm all'anno"
    },
    ui: { tableView: "Vedi i dati in tabella", langAria: "Lingua" },
    keeling: {
      h2: "La curva di Keeling — 67 anni di una linea inarrestabile",
      sub: "CO₂ atmosferica misurata a Mauna Loa dal 1958. Il piccolo dente di sega annuale è il respiro dell'emisfero nord: le foreste assorbono carbonio ogni estate e lo rilasciano ogni inverno. La salita sottostante non si ferma mai. La coda tratteggiata mostra dove punta il trend attuale.",
      refPre: "preindustriale · 280 ppm",
      refSafe: "soglia «sicura» · 350 ppm",
      today: "oggi · {value}",
      ttAnnual: "media annua",
      ttTrend: "se il trend continua",
      aria: "Grafico a linee della CO2 atmosferica dal 1958 a oggi, in salita da 316 a circa {now} ppm, con una proiezione tratteggiata che raggiunge 500 ppm entro il 2050",
      tblYear: "Anno", tblCo2: "CO₂ (ppm)"
    },
    stripes: {
      h2: "145 anni, una striscia ciascuno",
      sub: "Ogni striscia è un anno, colorata in base a quanto è stato caldo — blu più freddo, rosso più caldo (dalle <em>warming stripes</em> di Ed Hawkins). Trova l'anno in cui sei nato. Poi trova oggi.",
      cooler: "più freddo", hotter: "più caldo", vs: "vs fine '800",
      aria: "Strisce del riscaldamento: temperatura globale annua dal 1880 al 2024, dal blu al rosso intenso"
    },
    traj: {
      h2: "Dove va il secolo da qui in poi",
      sub: "Il riscaldamento osservato finora (NASA), seguito da tre possibili futuri secondo i modelli climatici. La distanza tra quelle linee non è una questione di meteo: decide i raccolti, le coste e quali città resteranno vivibili. Le temperature sono espresse rispetto alla fine dell'800.",
      observed: "Osservato (NASA)",
      refParis: "Limite di Parigi · +1,5 °C", ref2: "+2 °C",
      ttObserved: "osservato",
      aria: "Grafico a linee dell'anomalia di temperatura globale dal 1880, con tre scenari modellistici fino al 2100, da 1,8 a 4,4 gradi Celsius",
      tblHead: ["Anno", "Osservato °C", "Percorso di Parigi", "Politiche attuali", "Emissioni elevate"]
    },
    scenarios: {
      high: "Emissioni elevate (SSP5-8.5)",
      current: "Politiche attuali (~2,7 °C)",
      paris: "Percorso di Parigi (SSP1-2.6)"
    },
    loopsIntro: {
      h2: "I circoli che guidano il riscaldamento",
      sub: 'Siamo noi a emettere il carbonio — ma il carbonio da solo produce soltanto una parte del riscaldamento. Dà una spinta al clima, e il clima amplifica quella spinta da sé. Pensa a un microfono troppo vicino alla sua cassa: il fischio assordante non è la voce del cantante — è il <em>loop</em>. Il sistema climatico ne è pieno. Alcuni spingono il riscaldamento oltre (<span class="ink-amp">amplificanti</span>), altri lo frenano (<span class="ink-stab">stabilizzanti</span>), e il margine tra i due è tutta la storia.'
    },
    ledger: {
      h2: "Il bilancio delle retroazioni del pianeta",
      sub: "Quanto forte spinge ogni retroazione sul clima, per ogni grado di riscaldamento a cui reagisce (IPCC AR6). Le barre verso destra aggiungono calore; quelle verso sinistra lo disperdono. I baffi mostrano l'intervallo di incertezza stimato — nota che le nubi potrebbero ancora rivelarsi raffreddanti.",
      note: "<strong>Leggi con attenzione la barra in basso.</strong> Il lato stabilizzante vince — ma solo per circa un terzo della propria forza. Se gli amplificatori avessero superato quota <strong>3,2</strong>, il riscaldamento si sarebbe alimentato da solo senza limite e la Terra somiglierebbe a Venere. Invece il bilancio si chiude a <strong>−1,16</strong>, ed è proprio quel margine sottile a fissare la sensibilità climatica vicino a <strong>3 °C</strong> per ogni raddoppio della CO₂. Non viviamo su un pianeta stabile. Viviamo su un pianeta stabile <em>per un soffio</em>.",
      axis: "W/m² per °C di riscaldamento",
      legendAmp: "Amplificante — aggiunge calore",
      legendStab: "Stabilizzante — disperde calore",
      legendWhisker: "Baffo = intervallo stimato",
      legendPush: "La spinta — forzante ÷ riscaldamento finora",
      tblHead: ["Retroazione", "W/m²/°C", "Intervallo", "Effetto"],
      amp: "amplificante", stab: "stabilizzante", net: "bilancio netto", push: "la spinta",
      aria: "Grafico a barre divergenti dei parametri di retroazione climatica IPCC AR6 in watt per metro quadrato per grado Celsius. Vapore acqueo più gradiente termico +1,30, nubi +0,42, albedo superficiale +0,35 amplificano il riscaldamento; la risposta di Planck −3,22 lo stabilizza; la retroazione netta è −1,16. Il nostro forzante finora, diviso per il riscaldamento finora, spinge dentro +2,0 — più del contrasto netto, quindi il calore continua ad accumularsi."
    },
    feedbacks: {
      wv: { name: "Vapore acqueo + gradiente termico", short: "Vapore acqueo",
        note: "Il singolo amplificatore più grande. L'aria più calda trattiene circa il 7% di umidità in più per °C, e il vapore acqueo è a sua volta un gas serra." },
      clouds: { name: "Nubi", short: "Nubi",
        note: "Amplificanti nel complesso — e la più grande fonte di incertezza dell'intero bilancio: l'intervallo stimato attraversa ancora lo zero." },
      albedo: { name: "Albedo superficiale (ghiaccio e neve)", short: "Albedo",
        note: "Lo scioglimento di ghiaccio e neve scopre terre e oceani scuri, che assorbono la luce solare che il ghiaccio rifletteva verso lo spazio." },
      planck: { name: "Risposta di Planck", short: "Risposta di Planck",
        note: "Il grande stabilizzatore: un corpo più caldo irradia più calore. Questo singolo termine è il motivo per cui la Terra si assesta su una nuova temperatura invece di surriscaldarsi senza limite." },
      push: { name: "La spinta — il nostro forzante finora", short: "La spinta",
        note: "Non è una retroazione — è la spinta stessa: il forzante di tutto ciò che abbiamo emesso (~2,9 W/m²), diviso per il riscaldamento finora (~1,45 °C). Finché questa barra arriva più a destra di quanto la retroazione netta arrivi a sinistra, il pianeta continua ad accumulare calore; il riscaldamento si ferma solo quando si eguagliano." },
      net: { name: "Retroazione netta", short: "NETTO",
        note: "La stabilizzazione vince — ma solo per circa un terzo della propria forza. È quel margine stretto a fissare la sensibilità climatica vicino a 3 °C per raddoppio della CO₂." }
    },
    loopsSec: {
      h2: "Sei circoli già in moto",
      lede: "Il riscaldamento entra in ogni catena e ne esce più grande — e il circuito lo rimanda al punto di partenza. Passa il mouse su una scheda per illuminarne il circuito; apri «perché conta» per la storia completa.",
      more: "perché conta"
    },
    loopAria: { cycle: "Ciclo di retroazione: {steps}, per poi tornare all'inizio.", then: ", poi " },
    warn: {
      kicker: "Perché il conto alla rovescia qui sotto è generoso",
      body: "I budget di carbonio di solito contano soltanto le <em>nostre</em> emissioni, come se il pianeta non aggiungesse nulla. Aggiungi il carbonio che il permafrost in scioglimento e gli incendi boreali rilasceranno, e lo spazio rimasto sotto 1,5 °C si riduce del <strong>25% ± 12%</strong> — sotto i 2 °C, del <strong>17% ± 7%</strong>. I circoli di retroazione non aspettano che spendiamo noi il budget. Lo stanno già spendendo insieme a noi."
    },
    balSec: {
      h2: "E i circoli che tengono la linea",
      lede: "Per onestà, il bilancio ha anche un'altra colonna. Tre circoli frenano il riscaldamento — e uno di essi è l'unico motivo per cui la Terra è abitabile."
    },
    loops: {
      albedo: {
        title: "Lo specchio che svanisce",
        steps: ["Riscaldamento", "Il ghiaccio marino\nsi scioglie", "L'oceano scuro\nassorbe il sole", "Più riscaldamento"],
        statUnit: "W/m²",
        statLabel: "riscaldamento extra di un Artico senza ghiaccio — un forzante pari a mille miliardi di tonnellate di CO₂",
        body: "Il ghiaccio artico riflette il 50–70% della luce solare direttamente verso lo spazio. L'acqua aperta sottostante ne riflette circa il 6% e assorbe il resto. Il ghiaccio perso tra il 1979 e il 2011 ha già aggiunto <strong>+0,21 W/m²</strong> di riscaldamento globale — un quarto di quanto ha fatto tutta la nostra CO₂ nello stesso periodo. Il pianeta sta smontando il proprio specchio."
      },
      vapour: {
        title: "La coperta che si ispessisce",
        steps: ["Riscaldamento", "Più evaporazione", "Il vapore trattiene\npiù calore", "Più riscaldamento"],
        statUnit: "per °C",
        statLabel: "vapore acqueo in più che l'aria può contenere per ogni grado di riscaldamento",
        body: "Qui decide la fisica: l'aria più calda trattiene circa il 7% di umidità in più per grado (relazione di Clausius–Clapeyron). Il vapore acqueo è il gas serra più potente dell'atmosfera, quindi l'umidità extra trattiene più calore — che fa evaporare più acqua. Questo circolo all'incirca <strong>raddoppia</strong> il riscaldamento che la CO₂ causerebbe da sola, ed è già incluso in ogni modello climatico."
      },
      permafrost: {
        title: "La porta del congelatore",
        steps: ["Riscaldamento", "Il permafrost\nsi scioglie", "I microbi rilasciano\nCO₂ + metano", "Più riscaldamento"],
        statUnit: "il carbonio dell'aria",
        statLabel: "1.100–1.700 Gt di carbonio giacciono congelate nel permafrost — circa il doppio di quanto contiene l'intera atmosfera",
        body: "Il suolo gelato tiene in pausa piante morte da decine di migliaia di anni. Quando si scioglie, i microbi finiscono il pasto iniziato nell'ultima era glaciale, rilasciando CO₂ e metano — e nei primi 20 anni il metano trattiene circa <strong>80 volte più calore della CO₂</strong>. Contando il carbonio di permafrost e incendi, il budget residuo per 1,5 °C si riduce del <strong>25% ± 12%</strong>."
      },
      fire: {
        title: "La miccia accesa",
        steps: ["Riscaldamento", "Le foreste\nsi seccano", "Gli incendi liberano\nCO₂ + fuliggine", "Più riscaldamento"],
        statUnit: "Gt di CO₂",
        statLabel: "rilasciate dalla stagione record di incendi del Canada nel 2023 — circa quattro volte le emissioni fossili del Paese",
        body: "Il caldo fabbrica combustibile: l'aria più calda sottrae umidità a piante e suolo, così le foreste bruciano più intense, più in profondità e più a nord. Gli incendi canadesi del 2023 hanno rilasciato circa <strong>2,4 Gt di CO₂</strong>, e i roghi boreali bruciano sempre più spesso la <strong>torba</strong> — carbonio accumulato in millenni. La loro fuliggine si deposita sui ghiacci lontani e li scurisce, alimentando lo specchio che svanisce qui sopra."
      },
      sinks: {
        title: "La spugna che si stanca",
        steps: ["Riscaldamento", "I pozzi si\nindeboliscono", "Più CO₂ resta\nnell'aria", "Più riscaldamento"],
        statUnit: "più deboli",
        statLabel: "di quanto gli impatti climatici hanno indebolito i pozzi di carbonio di terre e oceani nell'ultimo decennio",
        body: "Ogni anno terre e oceani assorbono in silenzio circa la <strong>metà</strong> di tutto ciò che emettiamo — il più grande sussidio climatico esistente. E ci viene ritirato: caldo e siccità riducono l'assorbimento delle piante, e l'acqua marina più calda e stratificata trattiene meno gas. Nel 2024 il pozzo terrestre è quasi collassato e la CO₂ atmosferica è balzata di <strong>3,73 ppm</strong> — l'aumento più rapido mai misurato."
      },
      forest: {
        title: "La foresta che espira",
        steps: ["Riscaldamento", "Siccità e incendi", "La foresta diventa\nfonte di carbonio", "Più riscaldamento"],
        statUnit: "GtC/anno",
        statLabel: "carbonio che la regione del dieback amazzonico potrebbe emettere invece di assorbire",
        body: "L'Amazzonia produce gran parte della propria pioggia. Caldo e deforestazione spezzano quel circuito: siccità e incendi si diffondono, e la foresta passa da <em>pozzo</em> a <em>fonte</em> di carbonio. I modelli collocano l'inizio del dieback entro questo secolo, con un declino che accelera bruscamente oltre circa <strong>2,3 °C</strong>. Una foresta pluviale non è un bene fisso — è un circolo che può girare al contrario."
      }
    },
    balancers: {
      planck: {
        title: "La risposta di Planck",
        body: "Ogni oggetto caldo emette radiazione. Scalda il pianeta e irradierà più energia verso lo spazio — circa <strong>3,2 W/m² per ogni °C</strong>, più di tutti gli amplificatori messi insieme. È per questo che il riscaldamento si assesta su un nuovo equilibrio più caldo invece di degenerare in una Venere. Ed è anche l'unico circolo stabilizzante abbastanza rapido da contare in questo secolo."
      },
      weathering: {
        title: "L'erosione delle rocce",
        body: "La pioggia estrae CO₂ dall'aria e, nel corso delle ere, la lega alla roccia. La Terra ha davvero una squadra di pulizia per il carbonio in eccesso — ma lavora su scale di <strong>centinaia di migliaia di anni</strong>. Ripulirà l'Antropocene molto dopo che chiunque legga questa pagina sarà diventato un fossile."
      },
      fert: {
        title: "Fertilizzazione da CO₂",
        body: "Più CO₂ fa davvero crescere le piante più in fretta, e quel rinverdimento ha assorbito una parte reale delle nostre emissioni. Ma l'effetto <strong>si satura</strong>, richiede acqua e nutrienti che il riscaldamento sottrae, ed è sempre più annullato da siccità, caldo e incendi. Un circolo utile, sopraffatto da quelli qui sopra."
      }
    },
    clock: {
      h2: "Il conto alla rovescia del carbonio",
      sub: "Per restare sotto 1,5 °C anche solo con una probabilità del 50%, all'umanità resta un budget fisso di CO₂ da emettere — per sempre. Al ritmo attuale di <strong>~1.340 tonnellate al secondo</strong>, ecco quanto durerà:",
      y: "anni", d: "giorni", h: "ore", m: "min", s: "sec",
      b15: "Budget 1,5 °C", b20: "Budget 2,0 °C",
      emitted: "· {pct}% già emesso",
      runsOut: "· si esaurisce verso il {year} al ritmo attuale",
      foot: "Budget: IPCC AR6 / Global Carbon Budget 2024, probabilità 50%, conteggiati da gennaio 2025. L'orologio assume emissioni costanti al ritmo attuale — ogni taglio compra tempo.",
      aria15: "Quota del budget di carbonio per 1,5 gradi già emessa",
      aria20: "Quota del budget di carbonio per 2 gradi già emessa"
    },
    sims: {
      h2: "Intanto, da quando hai aperto questa pagina…",
      tons: "tonnellate di CO₂ emesse nel mondo",
      eiffel: "Torri Eiffel di CO₂, in peso — una ogni ~7,6 secondi",
      whales: "balenottere azzurre di CO₂ — circa 10 al secondo",
      bombs: "bombe di Hiroshima di calore extra intrappolato da oceani e atmosfera"
    },
    facts: {
      pliocene: { h3: "🦕 Déjà-vu dal tempo profondo",
        body: "L'ultima volta che la CO₂ è stata così alta era il <strong>Pliocene, 3–5 milioni di anni fa</strong>. Non esistevano esseri umani, i mari erano <strong>10–20 metri più alti</strong> e i cammelli vivevano nell'Artico. Abbiamo ricostruito quell'atmosfera nell'arco di una sola vita." },
      breath: { h3: "🫁 Ogni tuo respiro",
        body: "Circa <strong>1 molecola su 2.300</strong> dell'aria nei tuoi polmoni in questo momento è CO₂ — circa il 50% in più di quanta ne respirasse chiunque nel 1850. I tuoi nonni respiravano letteralmente un'aria diversa." },
      speed: { h3: "🚄 La velocità conta",
        body: "Uscendo dall'ultima era glaciale, la CO₂ è salita di circa 80 ppm in <strong>6.000 anni</strong>. Noi abbiamo appena fatto 80 ppm in <strong>45 anni</strong> — circa <strong>130 volte più in fretta</strong>. La natura ha i freni; noi li abbiamo tagliati." },
      blanket: { h3: "🧊 Una coperta, non una bomba",
        body: "La CO₂ agisce come una coperta intorno al pianeta, e ogni anno la rendiamo un po' più spessa. Il calore extra che ora trattiene equivale a circa <strong>10 esplosioni di Hiroshima al secondo</strong> — e circa il 90% viene assorbito dall'oceano." }
    },
    footer: {
      sources: "<strong>Fonti e patto di onestà.</strong> CO₂: NOAA Global Monitoring Lab (Mauna Loa). Temperatura: NASA GISTEMP. Dati live tramite l'API aperta {gw}, con dati incorporati di riserva quando offline. Tasso di emissione e budget di carbonio: Global Carbon Budget 2024, IPCC AR6. Proiezioni: stime centrali IPCC AR6 / Climate Action Tracker. Parametri di retroazione: {ipcc7} (tabella 7.10). Forzante ghiaccio-albedo: {pnas14} e {grl19}. Carbonio del permafrost e riduzione del budget: {nree21} e {cee26}. Indebolimento dei pozzi di carbonio: {gcb24}. Dieback amazzonico: {cee25} e {pnas25}. Emissioni degli incendi canadesi del 2023: {nat24}. Tra una lettura e l'altra i valori sono <em>interpolati</em> dall'ultimo trend misurato e dal ciclo stagionale — le cifre che scorrono sono una stima; la direzione è una misurazione. Questa è una visualizzazione educativa indipendente, non un prodotto ufficiale di queste agenzie.",
      fine: "Realizzato in semplice HTML/SVG/canvas · globo: coste Natural Earth",
      stampWait: "dati incorporati fino al 2024 · in attesa del feed live",
      stampLive: "lettura NOAA live {date}"
    }
  },

  /* ==================== FRANÇAIS ==================== */
  fr: {
    name: "Français", locale: "fr-FR",
    title: "Les signes vitaux de la Terre — tableau de bord CO₂ et climat en direct",
    hero: {
      liveWait: "interpolé à partir du dernier relevé NOAA",
      liveLabel: "en direct · dernier relevé NOAA {date}, interpolé depuis",
      label: "Le dioxyde de carbone dans l'atmosphère terrestre, en ce moment même",
      context: 'Soit <strong id="co2-vs-pre">···</strong> de CO₂ de plus que l\'atmosphère préindustrielle (280 ppm avant 1850) — et <strong id="co2-vs-lastyear">···</strong> de plus que ce même jour l\'an dernier.',
      seasonDown: "Une baisse ce mois-ci ? C'est l'inspiration estivale de la planète : les forêts de l'hémisphère nord retirent du carbone de l'air. Cette baisse revient chaque année — la ligne en dessous, elle, ne fait que monter.",
      seasonUp: "En forte hausse en ce moment : les écosystèmes du nord relâchent leur carbone hivernal, qui s'ajoute à la tendance des énergies fossiles.",
      scroll: "▾ lire les signes vitaux"
    },
    tiles: {
      temp: "Température mondiale",
      tempDelta: "vs fin des années 1800 · époque la plus chaude depuis 125 000 ans",
      tempDeltaLive: "vs fin des années 1800 · moyenne {year} (NASA)",
      co2: "Concentration de CO₂",
      co2Delta: "+2,7 ppm par an, en accélération",
      ch4: "Méthane",
      ch4Delta: "+{pct}% vs ère préindustrielle",
      ice: "Banquise arctique (sept.)",
      iceDelta: "−12,2 % par décennie",
      sea: "Niveau de la mer",
      seaDelta: "depuis 1993 · monte désormais de 4,5 mm par an"
    },
    ui: { tableView: "Voir les données en tableau", langAria: "Langue" },
    keeling: {
      h2: "La courbe de Keeling — 67 ans d'une ligne implacable",
      sub: "CO₂ atmosphérique mesuré à Mauna Loa depuis 1958. La petite dent de scie annuelle est la respiration de l'hémisphère nord : les forêts absorbent du carbone chaque été et le relâchent chaque hiver. La montée en dessous ne s'arrête jamais. La queue en pointillé montre où mène la tendance actuelle.",
      refPre: "préindustriel · 280 ppm",
      refSafe: "seuil « sûr » · 350 ppm",
      today: "aujourd'hui · {value}",
      ttAnnual: "moyenne annuelle",
      ttTrend: "si la tendance se poursuit",
      aria: "Graphique linéaire du CO2 atmosphérique de 1958 à aujourd'hui, passant de 316 à environ {now} ppm, avec une projection en pointillé atteignant 500 ppm en 2050",
      tblYear: "Année", tblCo2: "CO₂ (ppm)"
    },
    stripes: {
      h2: "145 ans, une bande chacun",
      sub: "Chaque bande est une année, colorée selon sa chaleur — bleu plus froid, rouge plus chaud (d'après les <em>warming stripes</em> d'Ed Hawkins). Trouvez votre année de naissance. Puis trouvez aujourd'hui.",
      cooler: "plus froid", hotter: "plus chaud", vs: "vs fin des années 1800",
      aria: "Bandes de réchauffement : température mondiale annuelle de 1880 à 2024, passant du bleu au rouge profond"
    },
    traj: {
      h2: "Où va le siècle à partir d'ici",
      sub: "Le réchauffement observé jusqu'ici (NASA), suivi de trois futurs possibles selon les modèles climatiques. L'écart entre ces lignes n'est pas une affaire de météo : il décide des récoltes, des littoraux et des villes qui resteront vivables. Les températures sont exprimées par rapport à la fin des années 1800.",
      observed: "Observé (NASA)",
      refParis: "Limite de Paris · +1,5 °C", ref2: "+2 °C",
      ttObserved: "observé",
      aria: "Graphique linéaire de l'anomalie de température mondiale depuis 1880, avec trois scénarios de modèles jusqu'en 2100, de 1,8 à 4,4 degrés Celsius",
      tblHead: ["Année", "Observé °C", "Trajectoire de Paris", "Politiques actuelles", "Émissions élevées"]
    },
    scenarios: {
      high: "Émissions élevées (SSP5-8.5)",
      current: "Politiques actuelles (~2,7 °C)",
      paris: "Trajectoire de Paris (SSP1-2.6)"
    },
    loopsIntro: {
      h2: "Les boucles qui mènent la danse",
      sub: 'C\'est nous qui émettons le carbone — mais le carbone seul ne produit qu\'une partie du réchauffement. Il donne une impulsion au climat, et le climat amplifie cette impulsion de lui-même. Pensez à un micro trop proche de son enceinte : le sifflement strident n\'est pas la voix du chanteur — c\'est la <em>boucle</em>. Le système climatique en est rempli. Certaines poussent le réchauffement plus loin (<span class="ink-amp">amplificatrices</span>), d\'autres le freinent (<span class="ink-stab">stabilisatrices</span>), et la marge entre les deux camps est toute l\'histoire.'
    },
    ledger: {
      h2: "Le grand livre des rétroactions de la planète",
      sub: "La force avec laquelle chaque rétroaction pousse le climat, pour chaque degré de réchauffement auquel elle réagit (GIEC AR6). Les barres vers la droite ajoutent de la chaleur ; celles vers la gauche l'évacuent. Les moustaches montrent l'incertitude évaluée — notez que les nuages pourraient encore s'avérer refroidissants.",
      note: "<strong>Lisez attentivement la barre du bas.</strong> Le camp stabilisateur l'emporte — mais seulement d'environ un tiers de sa propre force. Si les amplificateurs avaient dépassé <strong>3,2</strong>, le réchauffement se serait nourri de lui-même sans limite et la Terre ressemblerait à Vénus. Au lieu de cela, le bilan se clôt à <strong>−1,16</strong>, et c'est précisément cette marge étroite qui fixe la sensibilité climatique près de <strong>3 °C</strong> par doublement du CO₂. Nous ne vivons pas sur une planète stable. Nous vivons sur une planète stable <em>de justesse</em>.",
      axis: "W/m² par °C de réchauffement",
      legendAmp: "Amplificatrice — ajoute de la chaleur",
      legendStab: "Stabilisatrice — évacue la chaleur",
      legendWhisker: "Moustache = intervalle évalué",
      legendPush: "La poussée — forçage ÷ réchauffement à ce jour",
      tblHead: ["Rétroaction", "W/m²/°C", "Intervalle", "Effet"],
      amp: "amplificatrice", stab: "stabilisatrice", net: "bilan net", push: "la poussée",
      aria: "Graphique à barres divergentes des paramètres de rétroaction climatique du GIEC AR6 en watts par mètre carré par degré Celsius. Vapeur d'eau plus gradient thermique +1,30, nuages +0,42, albédo de surface +0,35 amplifient le réchauffement ; la réponse de Planck −3,22 le stabilise ; la rétroaction nette est de −1,16. Notre forçage à ce jour, divisé par le réchauffement observé, pousse +2,0 — plus que la riposte nette, donc la chaleur continue de s'accumuler."
    },
    feedbacks: {
      wv: { name: "Vapeur d'eau + gradient thermique", short: "Vapeur d'eau",
        note: "Le plus grand amplificateur. Un air plus chaud retient environ 7 % d'humidité en plus par °C, et la vapeur d'eau est elle-même un gaz à effet de serre." },
      clouds: { name: "Nuages", short: "Nuages",
        note: "Amplificateurs dans l'ensemble — et la plus grande source d'incertitude de tout le bilan : l'intervalle évalué traverse encore le zéro." },
      albedo: { name: "Albédo de surface (glace et neige)", short: "Albédo",
        note: "La fonte de la glace et de la neige découvre des terres et des océans sombres, qui absorbent la lumière que la glace renvoyait vers l'espace." },
      planck: { name: "Réponse de Planck", short: "Réponse de Planck",
        note: "Le grand stabilisateur : un corps plus chaud rayonne davantage de chaleur. Ce seul terme explique pourquoi la Terre se stabilise à une nouvelle température au lieu de surchauffer sans limite." },
      push: { name: "La poussée — notre forçage à ce jour", short: "La poussée",
        note: "Pas une rétroaction — la poussée elle-même : le forçage de tout ce que nous avons émis (~2,9 W/m²), divisé par le réchauffement observé (~1,45 °C). Tant que cette barre va plus loin à droite que la rétroaction nette ne va à gauche, la planète continue d'accumuler de la chaleur ; le réchauffement ne s'arrête que lorsqu'elles s'égalisent." },
      net: { name: "Rétroaction nette", short: "NET",
        note: "La stabilisation l'emporte — mais seulement d'environ un tiers de sa propre force. C'est cette marge étroite qui fixe la sensibilité climatique près de 3 °C par doublement du CO₂." }
    },
    loopsSec: {
      h2: "Six boucles déjà en marche",
      lede: "Le réchauffement entre dans chaque chaîne et en ressort plus fort — puis la boucle le renvoie au point de départ. Survolez une carte pour illuminer son circuit ; ouvrez « pourquoi c'est important » pour l'histoire complète.",
      more: "pourquoi c'est important"
    },
    loopAria: { cycle: "Boucle de rétroaction : {steps}, puis retour au départ.", then: ", puis " },
    warn: {
      kicker: "Pourquoi le compte à rebours ci-dessous est généreux",
      body: "Les budgets carbone ne comptent d'habitude que <em>nos</em> émissions, comme si la planète n'ajoutait rien. Ajoutez le carbone que libéreront le pergélisol en dégel et les feux boréaux, et la marge restante sous 1,5 °C se réduit de <strong>25 % ± 12 %</strong> — sous 2 °C, de <strong>17 % ± 7 %</strong>. Les boucles de rétroaction n'attendent pas que nous dépensions le budget. Elles le dépensent déjà avec nous."
    },
    balSec: {
      h2: "Et les boucles qui tiennent la ligne",
      lede: "Par honnêteté, le bilan a une autre colonne. Trois boucles freinent le réchauffement — et l'une d'elles est la seule raison pour laquelle la Terre est habitable."
    },
    loops: {
      albedo: {
        title: "Le miroir qui disparaît",
        steps: ["Réchauffement", "La banquise fond", "L'océan sombre\nabsorbe le soleil", "Plus de\nréchauffement"],
        statUnit: "W/m²",
        statLabel: "chauffage supplémentaire d'un Arctique sans glace — un forçage équivalent à mille milliards de tonnes de CO₂",
        body: "La glace arctique renvoie 50 à 70 % de la lumière solaire directement vers l'espace. L'eau libre en dessous n'en réfléchit qu'environ 6 % et absorbe le reste. La glace déjà perdue entre 1979 et 2011 a ajouté <strong>+0,21 W/m²</strong> de réchauffement mondial — un quart de ce qu'a fait tout notre CO₂ sur la même période. La planète démonte son propre miroir."
      },
      vapour: {
        title: "La couverture qui s'épaissit",
        steps: ["Réchauffement", "Plus d'évaporation", "La vapeur retient\nplus de chaleur", "Plus de\nréchauffement"],
        statUnit: "par °C",
        statLabel: "de vapeur d'eau en plus que l'air peut contenir pour chaque degré de réchauffement",
        body: "Ici, c'est la physique qui décide : un air plus chaud retient environ 7 % d'humidité en plus par degré (relation de Clausius–Clapeyron). La vapeur d'eau est le gaz à effet de serre le plus puissant de l'atmosphère : l'humidité supplémentaire retient plus de chaleur — qui fait évaporer plus d'eau. Cette boucle <strong>double</strong> à peu près le réchauffement que le CO₂ causerait seul, et elle est déjà intégrée à tous les modèles climatiques."
      },
      permafrost: {
        title: "La porte du congélateur",
        steps: ["Réchauffement", "Le pergélisol\ndégèle", "Les microbes libèrent\nCO₂ + méthane", "Plus de\nréchauffement"],
        statUnit: "le carbone de l'air",
        statLabel: "1 100 à 1 700 Gt de carbone gisent gelées dans le pergélisol — environ deux fois ce que contient toute l'atmosphère",
        body: "Le sol gelé garde des plantes mortes en pause depuis des dizaines de milliers d'années. Quand il dégèle, les microbes terminent le repas commencé à la dernière ère glaciaire, libérant CO₂ et méthane — et sur ses 20 premières années, le méthane retient environ <strong>80 fois plus de chaleur que le CO₂</strong>. En comptant le carbone du pergélisol et des feux, le budget restant pour 1,5 °C se réduit de <strong>25 % ± 12 %</strong>."
      },
      fire: {
        title: "La mèche allumée",
        steps: ["Réchauffement", "Les forêts\ns'assèchent", "Les feux libèrent\nCO₂ + suie", "Plus de\nréchauffement"],
        statUnit: "Gt de CO₂",
        statLabel: "libérées par la saison record des feux canadiens de 2023 — environ quatre fois les émissions fossiles du pays",
        body: "La chaleur fabrique du combustible : un air plus chaud aspire l'humidité des plantes et des sols, et les forêts brûlent plus fort, plus profond et plus au nord. Les feux canadiens de 2023 ont libéré environ <strong>2,4 Gt de CO₂</strong>, et les feux boréaux brûlent de plus en plus la <strong>tourbe</strong> — un carbone accumulé pendant des millénaires. Leur suie se dépose sur des glaces lointaines et les assombrit, alimentant le miroir qui disparaît ci-dessus."
      },
      sinks: {
        title: "L'éponge qui se fatigue",
        steps: ["Réchauffement", "Les puits\ns'affaiblissent", "Plus de CO₂ reste\ndans l'air", "Plus de\nréchauffement"],
        statUnit: "plus faibles",
        statLabel: "l'affaiblissement des puits de carbone terrestres et océaniques par les impacts climatiques sur la dernière décennie",
        body: "Chaque année, terres et océans absorbent discrètement environ la <strong>moitié</strong> de tout ce que nous émettons — la plus grande subvention climatique qui existe. Elle est en train d'être retirée : chaleur et sécheresse réduisent l'absorption des plantes, et une eau de mer plus chaude et stratifiée retient moins de gaz. En 2024, le puits terrestre a failli s'effondrer et le CO₂ atmosphérique a bondi de <strong>3,73 ppm</strong> — la hausse la plus rapide jamais mesurée."
      },
      forest: {
        title: "La forêt qui expire",
        steps: ["Réchauffement", "Sécheresse\net feux", "La forêt devient\nsource de carbone", "Plus de\nréchauffement"],
        statUnit: "GtC/an",
        statLabel: "carbone que la région du dépérissement amazonien pourrait émettre au lieu d'absorber",
        body: "L'Amazonie fabrique une grande partie de sa propre pluie. La chaleur et la déforestation brisent ce circuit : sécheresse et feux s'étendent, et la forêt bascule de <em>puits</em> à <em>source</em> de carbone. Les modèles situent le début du dépérissement dans ce siècle, avec un déclin qui s'accélère nettement au-delà d'environ <strong>2,3 °C</strong>. Une forêt tropicale n'est pas un actif figé — c'est une boucle qui peut tourner à l'envers."
      }
    },
    balancers: {
      planck: {
        title: "La réponse de Planck",
        body: "Tout objet chaud rayonne. Chauffez la planète et elle renvoie plus d'énergie vers l'espace — environ <strong>3,2 W/m² par °C</strong>, plus que tous les amplificateurs réunis. C'est pourquoi le réchauffement se stabilise à un nouvel équilibre plus chaud au lieu de dériver vers une Vénus. C'est aussi la seule boucle stabilisatrice assez rapide pour compter dans ce siècle."
      },
      weathering: {
        title: "L'altération des roches",
        body: "La pluie retire le CO₂ de l'air et, au fil des âges, le fixe dans la roche. La Terre a bel et bien une équipe de nettoyage pour le carbone en excès — mais elle travaille sur des échelles de <strong>centaines de milliers d'années</strong>. Elle nettoiera l'Anthropocène bien après que tous les lecteurs de cette page seront devenus des fossiles."
      },
      fert: {
        title: "Fertilisation par le CO₂",
        body: "Plus de CO₂ fait effectivement pousser les plantes plus vite, et ce verdissement a absorbé une part réelle de nos émissions. Mais l'effet <strong>sature</strong>, il exige de l'eau et des nutriments que le réchauffement retire, et il est de plus en plus annulé par la sécheresse, la chaleur et les feux. Une boucle utile, submergée par celles ci-dessus."
      }
    },
    clock: {
      h2: "Le compte à rebours du carbone",
      sub: "Pour rester sous 1,5 °C avec ne serait-ce qu'une chance sur deux, l'humanité dispose d'un budget fixe de CO₂ encore émissible — pour toujours. Au rythme actuel d'environ <strong>1 340 tonnes par seconde</strong>, voici combien de temps il durera :",
      y: "ans", d: "jours", h: "h", m: "min", s: "s",
      b15: "Budget 1,5 °C", b20: "Budget 2,0 °C",
      emitted: "· {pct} % déjà émis",
      runsOut: "· épuisé vers {year} au rythme actuel",
      foot: "Budgets : GIEC AR6 / Global Carbon Budget 2024, probabilité de 50 %, comptés depuis janvier 2025. L'horloge suppose des émissions constantes au rythme actuel — chaque réduction achète du temps.",
      aria15: "Part du budget carbone pour 1,5 degré déjà émise",
      aria20: "Part du budget carbone pour 2 degrés déjà émise"
    },
    sims: {
      h2: "Pendant ce temps, depuis que vous avez ouvert cette page…",
      tons: "tonnes de CO₂ émises dans le monde",
      eiffel: "tours Eiffel de CO₂, en poids — une toutes les ~7,6 secondes",
      whales: "baleines bleues de CO₂ — environ 10 par seconde",
      bombs: "bombes d'Hiroshima de chaleur supplémentaire piégée par les océans et l'air"
    },
    facts: {
      pliocene: { h3: "🦕 Déjà-vu des temps profonds",
        body: "La dernière fois que le CO₂ a été aussi élevé, c'était au <strong>Pliocène, il y a 3 à 5 millions d'années</strong>. Aucun humain n'existait, les mers étaient <strong>10 à 20 mètres plus hautes</strong> et des chameaux vivaient dans l'Arctique. Nous avons reconstruit cette atmosphère en une seule vie." },
      breath: { h3: "🫁 Chacune de vos respirations",
        body: "Environ <strong>1 molécule sur 2 300</strong> de l'air dans vos poumons en ce moment est du CO₂ — à peu près 50 % de plus que ce que respirait quiconque en 1850. Vos grands-parents respiraient littéralement un autre air." },
      speed: { h3: "🚄 La vitesse compte",
        body: "En sortant de la dernière ère glaciaire, le CO₂ a monté d'environ 80 ppm en <strong>6 000 ans</strong>. Nous venons de faire 80 ppm en <strong>45 ans</strong> — environ <strong>130 fois plus vite</strong>. La nature a des freins ; nous les avons coupés." },
      blanket: { h3: "🧊 Une couverture, pas une bombe",
        body: "Le CO₂ agit comme une couverture autour de la planète, et chaque année nous la tricotons un peu plus épaisse. La chaleur supplémentaire qu'elle piège désormais équivaut à environ <strong>10 explosions d'Hiroshima par seconde</strong> — dont près de 90 % absorbés par l'océan." }
    },
    footer: {
      sources: "<strong>Sources et pacte d'honnêteté.</strong> CO₂ : NOAA Global Monitoring Lab (Mauna Loa). Température : NASA GISTEMP. Flux en direct via l'API ouverte {gw}, avec données intégrées de secours hors ligne. Taux d'émission et budgets carbone : Global Carbon Budget 2024, GIEC AR6. Projections : estimations centrales GIEC AR6 / Climate Action Tracker. Paramètres de rétroaction : {ipcc7} (tableau 7.10). Forçage glace-albédo : {pnas14} et {grl19}. Carbone du pergélisol et réduction du budget : {nree21} et {cee26}. Affaiblissement des puits de carbone : {gcb24}. Dépérissement amazonien : {cee25} et {pnas25}. Émissions des feux canadiens de 2023 : {nat24}. Entre deux relevés, les valeurs sont <em>interpolées</em> à partir de la dernière tendance mesurée et du cycle saisonnier — les chiffres qui défilent sont une estimation ; la direction est une mesure. Ceci est une visualisation pédagogique indépendante, pas un produit officiel de ces agences.",
      fine: "Construit en simple HTML/SVG/canvas · globe : littoraux Natural Earth",
      stampWait: "jeu de données intégré jusqu'à 2024 · en attente du flux en direct",
      stampLive: "relevé NOAA en direct {date}"
    }
  },

  /* ==================== DEUTSCH ==================== */
  de: {
    name: "Deutsch", locale: "de-DE",
    title: "Die Vitalwerte der Erde — Live-Dashboard zu CO₂ und Klima",
    hero: {
      liveWait: "interpoliert aus der letzten NOAA-Messung",
      liveLabel: "live · letzte NOAA-Messung {date}, seitdem interpoliert",
      label: "Kohlendioxid in der Erdatmosphäre, genau jetzt",
      context: 'Das sind <strong id="co2-vs-pre">···</strong> mehr CO₂ als in der vorindustriellen Atmosphäre (280 ppm vor 1850) — und <strong id="co2-vs-lastyear">···</strong> mehr als am selben Tag des Vorjahres.',
      seasonDown: "Sinkt der Wert diesen Monat? Das ist das sommerliche Einatmen des Planeten: Die Wälder der Nordhalbkugel ziehen Kohlenstoff aus der Luft. Dieser Rückgang kommt jedes Jahr — die Linie darunter steigt nur.",
      seasonUp: "Steigt gerade schnell: Die Ökosysteme des Nordens geben ihren Winterkohlenstoff ab, zusätzlich zum fossilen Trend.",
      scroll: "▾ die Vitalwerte lesen"
    },
    tiles: {
      temp: "Globale Temperatur",
      tempDelta: "ggü. dem späten 19. Jh. · wärmste Ära seit 125.000 Jahren",
      tempDeltaLive: "ggü. dem späten 19. Jh. · Mittel {year} (NASA)",
      co2: "CO₂-Konzentration",
      co2Delta: "+2,7 ppm pro Jahr, mit steigender Tendenz",
      ch4: "Methan",
      ch4Delta: "+{pct} % ggü. vorindustriell",
      ice: "Arktisches Meereis (Sept.)",
      iceDelta: "−12,2 % pro Jahrzehnt",
      sea: "Meeresspiegel",
      seaDelta: "seit 1993 · steigt derzeit 4,5 mm pro Jahr"
    },
    ui: { tableView: "Daten als Tabelle anzeigen", langAria: "Sprache" },
    keeling: {
      h2: "Die Keeling-Kurve — 67 Jahre einer unerbittlichen Linie",
      sub: "Atmosphärisches CO₂, gemessen am Mauna Loa seit 1958. Der kleine jährliche Sägezahn ist das Atmen der Nordhalbkugel: Wälder nehmen jeden Sommer Kohlenstoff auf und geben ihn im Winter wieder ab. Der Anstieg darunter hört nie auf. Der gestrichelte Ausläufer zeigt, wohin der heutige Trend führt.",
      refPre: "vorindustriell · 280 ppm",
      refSafe: "„sichere“ Grenze · 350 ppm",
      today: "heute · {value}",
      ttAnnual: "Jahresmittel",
      ttTrend: "wenn der Trend anhält",
      aria: "Liniendiagramm des atmosphärischen CO2 von 1958 bis heute, ansteigend von 316 auf etwa {now} ppm, mit einer gestrichelten Projektion bis 500 ppm im Jahr 2050",
      tblYear: "Jahr", tblCo2: "CO₂ (ppm)"
    },
    stripes: {
      h2: "145 Jahre, ein Streifen pro Jahr",
      sub: "Jeder Streifen ist ein Jahr, gefärbt nach seiner Wärme — blau kühler, rot wärmer (nach Ed Hawkins' <em>warming stripes</em>). Suchen Sie Ihr Geburtsjahr. Und dann das Heute.",
      cooler: "kühler", hotter: "wärmer", vs: "ggü. dem späten 19. Jh.",
      aria: "Wärmestreifen: jährliche globale Temperatur von 1880 bis 2024, von Blau zu tiefem Rot wechselnd"
    },
    traj: {
      h2: "Wohin das Jahrhundert von hier aus geht",
      sub: "Die bisher beobachtete Erwärmung (NASA), gefolgt von drei möglichen Zukünften aus Klimamodellen. Der Abstand zwischen diesen Linien ist keine Wetterfrage — er entscheidet über Ernten, Küstenlinien und darüber, welche Städte bewohnbar bleiben. Temperaturen relativ zum späten 19. Jahrhundert.",
      observed: "Beobachtet (NASA)",
      refParis: "Paris-Grenze · +1,5 °C", ref2: "+2 °C",
      ttObserved: "beobachtet",
      aria: "Liniendiagramm der globalen Temperaturanomalie ab 1880 mit drei Modellszenarien bis 2100, von 1,8 bis 4,4 Grad Celsius",
      tblHead: ["Jahr", "Beobachtet °C", "Paris-Pfad", "Aktuelle Politik", "Hohe Emissionen"]
    },
    scenarios: {
      high: "Hohe Emissionen (SSP5-8.5)",
      current: "Aktuelle Politik (~2,7 °C)",
      paris: "Paris-Pfad (SSP1-2.6)"
    },
    loopsIntro: {
      h2: "Die Schleifen, die das Steuer führen",
      sub: 'Wir stoßen den Kohlenstoff aus — aber der Kohlenstoff selbst bewirkt nur einen Teil der Erwärmung. Er gibt dem Klima einen Schubs, und das Klima verstärkt diesen Schubs von allein. Denken Sie an ein Mikrofon zu nah am Lautsprecher: Das ohrenbetäubende Pfeifen ist nicht die Stimme des Sängers — es ist die <em>Rückkopplung</em>. Das Klimasystem ist voll davon. Manche treiben die Erwärmung weiter (<span class="ink-amp">verstärkend</span>), manche bremsen sie (<span class="ink-stab">stabilisierend</span>) — und der Abstand zwischen beiden Seiten ist die ganze Geschichte.'
    },
    ledger: {
      h2: "Das Rückkopplungs-Hauptbuch des Planeten",
      sub: "Wie stark jede Rückkopplung das Klima antreibt, pro Grad Erwärmung, auf das sie reagiert (IPCC AR6). Balken nach rechts fügen Wärme hinzu; Balken nach links geben sie ab. Die Whisker zeigen die geschätzte Unsicherheit — Wolken könnten sich noch als kühlend erweisen.",
      note: "<strong>Lesen Sie den untersten Balken genau.</strong> Die stabilisierende Seite gewinnt — aber nur mit etwa einem Drittel ihrer eigenen Stärke. Hätten die Verstärker zusammen mehr als <strong>3,2</strong> erreicht, hätte sich die Erwärmung grenzenlos selbst genährt, und die Erde sähe aus wie die Venus. Stattdessen schließt das Buch bei <strong>−1,16</strong>, und genau diese dünne Marge legt die Klimasensitivität auf rund <strong>3 °C</strong> pro CO₂-Verdopplung fest. Wir leben nicht auf einem stabilen Planeten. Wir leben auf einem <em>gerade noch</em> stabilen.",
      axis: "W/m² pro °C Erwärmung",
      legendAmp: "Verstärkend — fügt Wärme hinzu",
      legendStab: "Stabilisierend — gibt Wärme ab",
      legendWhisker: "Whisker = geschätzter Bereich",
      legendPush: "Der Antrieb — Forcing ÷ bisherige Erwärmung",
      tblHead: ["Rückkopplung", "W/m²/°C", "Bereich", "Wirkung"],
      amp: "verstärkend", stab: "stabilisierend", net: "Nettobilanz", push: "der Antrieb",
      aria: "Divergierendes Balkendiagramm der IPCC-AR6-Klimarückkopplungsparameter in Watt pro Quadratmeter pro Grad Celsius. Wasserdampf plus Temperaturgradient +1,30, Wolken +0,42, Oberflächenalbedo +0,35 verstärken die Erwärmung; die Planck-Rückkopplung −3,22 stabilisiert sie; die Nettorückkopplung beträgt −1,16. Unser bisheriges Forcing, geteilt durch die bisherige Erwärmung, drückt +2,0 hinein — mehr als die Nettogegenkraft, also sammelt sich weiter Wärme an."
    },
    feedbacks: {
      wv: { name: "Wasserdampf + Temperaturgradient", short: "Wasserdampf",
        note: "Der größte einzelne Verstärker. Wärmere Luft hält rund 7 % mehr Feuchtigkeit pro °C, und Wasserdampf ist selbst ein Treibhausgas." },
      clouds: { name: "Wolken", short: "Wolken",
        note: "In der Summe verstärkend — und die größte einzelne Unsicherheitsquelle im ganzen Hauptbuch: Der geschätzte Bereich kreuzt noch die Null." },
      albedo: { name: "Oberflächenalbedo (Eis & Schnee)", short: "Eis-Albedo",
        note: "Schmelzendes Eis und Schnee legen dunkles Land und dunklen Ozean frei, die das Sonnenlicht schlucken, das das Eis zuvor ins All zurückwarf." },
      planck: { name: "Planck-Rückkopplung", short: "Planck",
        note: "Der große Stabilisator: Ein wärmerer Körper strahlt mehr Wärme ab. Dieser eine Term ist der Grund, warum sich die Erde auf eine neue Temperatur einpendelt, statt grenzenlos zu überhitzen." },
      push: { name: "Der Antrieb — unser Forcing bisher", short: "Unser Antrieb",
        note: "Keine Rückkopplung — der Antrieb selbst: das Forcing all unserer Emissionen (~2,9 W/m²), geteilt durch die bisherige Erwärmung (~1,45 °C). Solange dieser Balken weiter nach rechts reicht als die Nettorückkopplung nach links, sammelt der Planet weiter Wärme an; die Erwärmung stoppt erst, wenn beide gleichauf liegen." },
      net: { name: "Nettorückkopplung", short: "NETTO",
        note: "Die Stabilisierung gewinnt — aber nur mit etwa einem Drittel ihrer eigenen Stärke. Diese schmale Marge legt die Klimasensitivität auf rund 3 °C pro CO₂-Verdopplung fest." }
    },
    loopsSec: {
      h2: "Sechs Schleifen, die sich schon drehen",
      lede: "Die Erwärmung tritt in jede Kette ein und kommt größer wieder heraus — die Schleife führt sie direkt zurück an den Anfang. Fahren Sie mit der Maus über eine Karte, um ihren Kreislauf aufleuchten zu lassen; öffnen Sie „warum es zählt“ für die ganze Geschichte.",
      more: "warum es zählt"
    },
    loopAria: { cycle: "Rückkopplungskreis: {steps}, dann zurück zum Anfang.", then: ", dann " },
    warn: {
      kicker: "Warum der Countdown unten großzügig ist",
      body: "Kohlenstoffbudgets zählen üblicherweise nur <em>unsere</em> Emissionen, als würde der Planet selbst nichts beitragen. Rechnet man den Kohlenstoff hinzu, den tauender Permafrost und nördliche Waldbrände freisetzen werden, schrumpft der verbleibende Spielraum unter 1,5 °C um <strong>25 % ± 12 %</strong> — unter 2 °C um <strong>17 % ± 7 %</strong>. Die Rückkopplungsschleifen warten nicht, bis wir das Budget ausgegeben haben. Sie geben es bereits mit uns aus."
    },
    balSec: {
      h2: "Und die Schleifen, die die Stellung halten",
      lede: "Der Ehrlichkeit halber: Das Hauptbuch hat noch eine zweite Spalte. Drei Schleifen stemmen sich gegen die Erwärmung — und eine davon ist der einzige Grund, warum die Erde überhaupt bewohnbar ist."
    },
    loops: {
      albedo: {
        title: "Der verschwindende Spiegel",
        steps: ["Erwärmung", "Meereis schmilzt", "Dunkler Ozean\nschluckt Sonne", "Mehr Erwärmung"],
        statUnit: "W/m²",
        statLabel: "zusätzliche Heizleistung einer eisfreien Arktis — so viel Antrieb wie eine Billion Tonnen CO₂",
        body: "Arktisches Eis wirft 50–70 % des Sonnenlichts direkt zurück ins All. Das offene Wasser darunter reflektiert nur etwa 6 % und schluckt den Rest. Das zwischen 1979 und 2011 verlorene Eis hat bereits <strong>+0,21 W/m²</strong> globale Erwärmung hinzugefügt — ein Viertel dessen, was unser gesamtes CO₂ im selben Zeitraum bewirkte. Der Planet baut seinen eigenen Spiegel ab."
      },
      vapour: {
        title: "Die dicker werdende Decke",
        steps: ["Erwärmung", "Mehr Verdunstung", "Dampf hält\nmehr Wärme", "Mehr Erwärmung"],
        statUnit: "pro °C",
        statLabel: "mehr Wasserdampf kann die Luft pro Grad Erwärmung aufnehmen",
        body: "Hier entscheidet die Physik: Wärmere Luft hält pro Grad etwa 7 % mehr Feuchtigkeit (Clausius-Clapeyron-Beziehung). Wasserdampf ist das stärkste Treibhausgas der Atmosphäre, also hält die zusätzliche Feuchtigkeit mehr Wärme zurück — was wiederum mehr Wasser verdunsten lässt. Diese Schleife <strong>verdoppelt</strong> grob die Erwärmung, die CO₂ allein verursachen würde, und steckt bereits in jedem Klimamodell."
      },
      permafrost: {
        title: "Die Gefriertruhentür",
        steps: ["Erwärmung", "Permafrost taut", "Mikroben setzen\nCO₂ + Methan frei", "Mehr Erwärmung"],
        statUnit: "des Luft-Kohlenstoffs",
        statLabel: "1.100–1.700 Gt Kohlenstoff liegen gefroren im nördlichen Permafrost — etwa doppelt so viel, wie die gesamte Atmosphäre enthält",
        body: "Gefrorener Boden hält abgestorbene Pflanzen seit Zehntausenden von Jahren in der Warteschleife. Taut er, beenden Mikroben die Mahlzeit, die sie in der letzten Eiszeit begannen, und setzen CO₂ und Methan frei — und Methan hält in seinen ersten 20 Jahren etwa <strong>80-mal mehr Wärme zurück als CO₂</strong>. Rechnet man Permafrost- und Waldbrand-Kohlenstoff mit, schrumpft das verbleibende 1,5-°C-Budget um <strong>25 % ± 12 %</strong>."
      },
      fire: {
        title: "Die brennende Lunte",
        steps: ["Erwärmung", "Wälder trocknen aus", "Feuer setzen\nCO₂ + Ruß frei", "Mehr Erwärmung"],
        statUnit: "Gt CO₂",
        statLabel: "freigesetzt in Kanadas Rekord-Feuersaison 2023 — rund viermal so viel wie die fossilen Emissionen des Landes",
        body: "Hitze erzeugt Brennstoff: Wärmere Luft entzieht Pflanzen und Böden Feuchtigkeit, also brennen Wälder heißer, tiefer und weiter nördlich. Kanadas Feuer von 2023 setzten rund <strong>2,4 Gt CO₂</strong> frei, und boreale Brände fressen sich zunehmend in den <strong>Torf</strong> — Kohlenstoff aus Jahrtausenden. Ihr Ruß legt sich auf fernes Eis und verdunkelt es — Nachschub für den verschwindenden Spiegel weiter oben."
      },
      sinks: {
        title: "Der ermüdende Schwamm",
        steps: ["Erwärmung", "Senken werden\nschwächer", "Mehr CO₂ bleibt\nin der Luft", "Mehr Erwärmung"],
        statUnit: "schwächer",
        statLabel: "so stark haben Klimafolgen die Kohlenstoffsenken von Land und Ozean im letzten Jahrzehnt geschwächt",
        body: "Jahr für Jahr nehmen Land und Ozean still etwa die <strong>Hälfte</strong> von allem auf, was wir ausstoßen — die größte Klimasubvention, die es gibt. Sie wird gerade gestrichen: Hitze und Dürre drosseln die Aufnahme der Pflanzen, und wärmeres, geschichtetes Meerwasser hält weniger Gas. 2024 brach die Landsenke beinahe ein, und das atmosphärische CO₂ sprang um <strong>3,73 ppm</strong> — der schnellste je gemessene Anstieg."
      },
      forest: {
        title: "Der Wald, der ausatmet",
        steps: ["Erwärmung", "Dürre & Feuer", "Wald wird zur\nKohlenstoffquelle", "Mehr Erwärmung"],
        statUnit: "GtC/Jahr",
        statLabel: "Kohlenstoff, den die Amazonas-Dieback-Region ausstoßen könnte, statt ihn aufzunehmen",
        body: "Der Amazonas erzeugt einen Großteil seines eigenen Regens. Hitze und Rodung durchtrennen diesen Kreislauf: Dürre und Feuer breiten sich aus, und der Wald kippt von der Kohlenstoff-<em>Senke</em> zur Kohlenstoff-<em>Quelle</em>. Modelle verorten den Beginn des Absterbens in diesem Jahrhundert, mit deutlich beschleunigtem Rückgang jenseits von etwa <strong>2,3 °C</strong>. Ein Regenwald ist kein fester Besitz — er ist eine Schleife, die rückwärts laufen kann."
      }
    },
    balancers: {
      planck: {
        title: "Die Planck-Rückkopplung",
        body: "Jeder warme Körper strahlt. Heizt man den Planeten auf, gibt er mehr Energie ans All ab — rund <strong>3,2 W/m² pro °C</strong>, mehr als alle Verstärker zusammen. Deshalb pendelt sich die Erwärmung auf einem neuen, heißeren Gleichgewicht ein, statt in eine Venus zu kippen. Es ist auch die einzige stabilisierende Schleife, die schnell genug wirkt, um in diesem Jahrhundert zu zählen."
      },
      weathering: {
        title: "Gesteinsverwitterung",
        body: "Regen zieht CO₂ aus der Luft und bindet es über Zeitalter hinweg im Gestein. Die Erde hat tatsächlich ein Aufräumkommando für überschüssigen Kohlenstoff — aber es arbeitet in Zeiträumen von <strong>Hunderttausenden von Jahren</strong>. Es wird das Anthropozän aufräumen, lange nachdem alle, die dies lesen, selbst Fossilien geworden sind."
      },
      fert: {
        title: "CO₂-Düngung",
        body: "Mehr CO₂ lässt Pflanzen tatsächlich schneller wachsen, und dieses Ergrünen hat einen echten Teil unserer Emissionen aufgenommen. Aber der Effekt <strong>sättigt sich</strong>, er braucht Wasser und Nährstoffe, die die Erwärmung entzieht, und wird zunehmend von Dürre, Hitze und Feuer zunichtegemacht. Eine hilfreiche Schleife, die von den obigen überrollt wird."
      }
    },
    clock: {
      h2: "Der Kohlenstoff-Countdown",
      sub: "Um die Erwärmung auch nur mit einer 50:50-Chance unter 1,5 °C zu halten, bleibt der Menschheit ein festes CO₂-Budget — für immer. Beim heutigen Tempo von rund <strong>1.340 Tonnen pro Sekunde</strong> reicht es noch so lange:",
      y: "Jahre", d: "Tage", h: "Std.", m: "Min.", s: "Sek.",
      b15: "1,5-°C-Budget", b20: "2,0-°C-Budget",
      emitted: "· {pct} % bereits ausgestoßen",
      runsOut: "· beim heutigen Tempo ca. {year} erschöpft",
      foot: "Budgets: IPCC AR6 / Global Carbon Budget 2024, 50 % Wahrscheinlichkeit, gezählt ab Januar 2025. Die Uhr nimmt an, dass die Emissionen auf heutigem Niveau bleiben — jede Senkung kauft Zeit.",
      aria15: "Bereits ausgestoßener Anteil des 1,5-Grad-Kohlenstoffbudgets",
      aria20: "Bereits ausgestoßener Anteil des 2-Grad-Kohlenstoffbudgets"
    },
    sims: {
      h2: "Unterdessen, seit Sie diese Seite geöffnet haben…",
      tons: "Tonnen CO₂ weltweit ausgestoßen",
      eiffel: "Eiffeltürme an CO₂, nach Gewicht — einer alle ~7,6 Sekunden",
      whales: "Blauwale an CO₂ — etwa 10 pro Sekunde",
      bombs: "Hiroshima-Bomben an zusätzlicher Wärme, gespeichert in Ozeanen und Luft"
    },
    facts: {
      pliocene: { h3: "🦕 Déjà-vu aus der Tiefenzeit",
        body: "Zuletzt war das CO₂ so hoch im <strong>Pliozän, vor 3–5 Millionen Jahren</strong>. Es gab keine Menschen, die Meere standen <strong>10–20 Meter höher</strong>, und in der Arktis lebten Kamele. Wir haben diese Atmosphäre innerhalb eines einzigen Menschenlebens wiederhergestellt." },
      breath: { h3: "🫁 Jeder Ihrer Atemzüge",
        body: "Etwa <strong>1 von 2.300 Molekülen</strong> der Luft in Ihren Lungen ist gerade CO₂ — rund 50 % mehr, als irgendjemand 1850 einatmete. Ihre Großeltern atmeten buchstäblich eine andere Luft." },
      speed: { h3: "🚄 Tempo zählt",
        body: "Am Ende der letzten Eiszeit stieg das CO₂ um rund 80 ppm in <strong>6.000 Jahren</strong>. Wir haben gerade 80 ppm in <strong>45 Jahren</strong> geschafft — etwa <strong>130-mal schneller</strong>. Die Natur hat Bremsen; wir haben sie durchtrennt." },
      blanket: { h3: "🧊 Eine Decke, keine Bombe",
        body: "CO₂ wirkt wie eine Decke um den Planeten, und jedes Jahr stricken wir sie etwas dicker. Die zusätzliche Wärme, die sie inzwischen zurückhält, entspricht etwa <strong>10 Hiroshima-Explosionen pro Sekunde</strong> — rund 90 % davon schluckt der Ozean." }
    },
    footer: {
      sources: "<strong>Quellen &amp; Ehrlichkeitskasten.</strong> CO₂: NOAA Global Monitoring Lab (Mauna Loa). Temperatur: NASA GISTEMP. Live-Daten über die offene {gw}-API, mit eingebetteten Ersatzdaten für den Offline-Fall. Emissionsrate &amp; Kohlenstoffbudgets: Global Carbon Budget 2024, IPCC AR6. Projektionen: zentrale Schätzungen IPCC AR6 / Climate Action Tracker. Rückkopplungsparameter: {ipcc7} (Tabelle 7.10). Eis-Albedo-Antrieb: {pnas14} und {grl19}. Permafrost-Kohlenstoff und Budgetreduktion: {nree21} und {cee26}. Schwächung der Kohlenstoffsenken: {gcb24}. Amazonas-Dieback: {cee25} und {pnas25}. Emissionen der kanadischen Feuer 2023: {nat24}. Zwischen den Messungen werden die Werte aus dem letzten gemessenen Trend und dem Jahreszyklus <em>interpoliert</em> — die tickenden Ziffern sind eine Schätzung; die Richtung ist eine Messung. Dies ist eine unabhängige Bildungsvisualisierung, kein offizielles Produkt dieser Institutionen.",
      fine: "Gebaut mit reinem HTML/SVG/Canvas · Globus: Natural-Earth-Küstenlinien",
      stampWait: "eingebetteter Datensatz bis 2024 · warte auf Live-Feed",
      stampLive: "Live-NOAA-Messung {date}"
    }
  },

  /* ==================== ESPAÑOL ==================== */
  es: {
    name: "Español", locale: "es-ES",
    title: "Los signos vitales de la Tierra — panel de CO₂ y clima en directo",
    hero: {
      liveWait: "interpolado a partir de la última lectura de la NOAA",
      liveLabel: "en directo · última lectura NOAA {date}, interpolado desde entonces",
      label: "El dióxido de carbono en la atmósfera terrestre, ahora mismo",
      context: 'Eso es <strong id="co2-vs-pre">···</strong> más CO₂ que el de la atmósfera preindustrial (280 ppm antes de 1850) — y <strong id="co2-vs-lastyear">···</strong> más que este mismo día del año pasado.',
      seasonDown: "¿Baja este mes? Es la inhalación veraniega del planeta: los bosques del hemisferio norte están retirando carbono del aire. La bajada se repite cada año — la línea de debajo no hace más que subir.",
      seasonUp: "Sube rápido ahora mismo: los ecosistemas del norte liberan su carbono invernal, sumado a la tendencia de los combustibles fósiles.",
      scroll: "▾ leer los signos vitales"
    },
    tiles: {
      temp: "Temperatura global",
      tempDelta: "vs finales del s. XIX · la era más cálida en 125.000 años",
      tempDeltaLive: "vs finales del s. XIX · media de {year} (NASA)",
      co2: "Concentración de CO₂",
      co2Delta: "+2,7 ppm al año, y acelerando",
      ch4: "Metano",
      ch4Delta: "+{pct}% vs era preindustrial",
      ice: "Hielo ártico (sept.)",
      iceDelta: "−12,2% por década",
      sea: "Nivel del mar",
      seaDelta: "desde 1993 · ahora sube 4,5 mm al año"
    },
    ui: { tableView: "Ver los datos en tabla", langAria: "Idioma" },
    keeling: {
      h2: "La curva de Keeling — 67 años de una línea implacable",
      sub: "CO₂ atmosférico medido en Mauna Loa desde 1958. El pequeño diente de sierra anual es la respiración del hemisferio norte: los bosques absorben carbono cada verano y lo liberan cada invierno. La subida de debajo nunca se detiene. La cola discontinua muestra hacia dónde apunta la tendencia actual.",
      refPre: "preindustrial · 280 ppm",
      refSafe: "límite «seguro» · 350 ppm",
      today: "hoy · {value}",
      ttAnnual: "media anual",
      ttTrend: "si la tendencia continúa",
      aria: "Gráfico de líneas del CO2 atmosférico desde 1958 hasta hoy, subiendo de 316 a unas {now} ppm, con una proyección discontinua que alcanza 500 ppm en 2050",
      tblYear: "Año", tblCo2: "CO₂ (ppm)"
    },
    stripes: {
      h2: "145 años, una franja cada uno",
      sub: "Cada franja es un año, coloreada según su calidez — azul más frío, rojo más cálido (según las <em>warming stripes</em> de Ed Hawkins). Busca el año en que naciste. Luego busca el de hoy.",
      cooler: "más frío", hotter: "más cálido", vs: "vs finales del s. XIX",
      aria: "Franjas de calentamiento: temperatura global anual de 1880 a 2024, pasando del azul al rojo intenso"
    },
    traj: {
      h2: "Hacia dónde va el siglo desde aquí",
      sub: "El calentamiento observado hasta ahora (NASA), seguido de tres futuros posibles según los modelos climáticos. La distancia entre esas líneas no es cuestión de meteorología: decide las cosechas, las costas y qué ciudades seguirán siendo habitables. Las temperaturas se expresan respecto a finales del siglo XIX.",
      observed: "Observado (NASA)",
      refParis: "Límite de París · +1,5 °C", ref2: "+2 °C",
      ttObserved: "observado",
      aria: "Gráfico de líneas de la anomalía de temperatura global desde 1880, con tres escenarios de modelos hasta 2100, de 1,8 a 4,4 grados Celsius",
      tblHead: ["Año", "Observado °C", "Senda de París", "Políticas actuales", "Emisiones altas"]
    },
    scenarios: {
      high: "Emisiones altas (SSP5-8.5)",
      current: "Políticas actuales (~2,7 °C)",
      paris: "Senda de París (SSP1-2.6)"
    },
    loopsIntro: {
      h2: "Los bucles que llevan el volante",
      sub: 'Nosotros emitimos el carbono — pero el carbono por sí solo produce únicamente parte del calentamiento. Le da un empujón al clima, y el clima amplifica ese empujón por su cuenta. Piensa en un micrófono demasiado cerca de su altavoz: el chirrido ensordecedor no es la voz del cantante — es el <em>bucle</em>. El sistema climático está lleno de ellos. Algunos empujan el calentamiento más lejos (<span class="ink-amp">amplificadores</span>), otros lo frenan (<span class="ink-stab">estabilizadores</span>), y el margen entre ambos bandos es toda la historia.'
    },
    ledger: {
      h2: "El libro de cuentas de las retroalimentaciones del planeta",
      sub: "Con qué fuerza empuja cada retroalimentación al clima, por cada grado de calentamiento al que reacciona (IPCC AR6). Las barras hacia la derecha añaden calor; las de la izquierda lo disipan. Los bigotes muestran el rango de incertidumbre evaluado — ojo: las nubes aún podrían resultar enfriadoras.",
      note: "<strong>Lee con atención la barra de abajo.</strong> El bando estabilizador gana — pero solo por cerca de un tercio de su propia fuerza. Si los amplificadores hubieran sumado más de <strong>3,2</strong>, el calentamiento se habría alimentado a sí mismo sin límite y la Tierra se parecería a Venus. En cambio, el balance se cierra en <strong>−1,16</strong>, y ese margen tan fino es justo lo que fija la sensibilidad climática cerca de <strong>3 °C</strong> por cada duplicación del CO₂. No vivimos en un planeta estable. Vivimos en uno estable <em>por los pelos</em>.",
      axis: "W/m² por °C de calentamiento",
      legendAmp: "Amplificadora — añade calor",
      legendStab: "Estabilizadora — disipa calor",
      legendWhisker: "Bigote = rango evaluado",
      legendPush: "El empuje — forzamiento ÷ calentamiento hasta hoy",
      tblHead: ["Retroalimentación", "W/m²/°C", "Rango", "Efecto"],
      amp: "amplificadora", stab: "estabilizadora", net: "balance neto", push: "el empuje",
      aria: "Gráfico de barras divergentes de los parámetros de retroalimentación climática del IPCC AR6 en vatios por metro cuadrado por grado Celsius. Vapor de agua más gradiente térmico +1,30, nubes +0,42, albedo superficial +0,35 amplifican el calentamiento; la respuesta de Planck −3,22 lo estabiliza; la retroalimentación neta es −1,16. Nuestro forzamiento hasta hoy, dividido por el calentamiento observado, empuja +2,0 — más que la respuesta neta, así que el calor sigue acumulándose."
    },
    feedbacks: {
      wv: { name: "Vapor de agua + gradiente térmico", short: "Vapor de agua",
        note: "El mayor amplificador individual. El aire más cálido retiene cerca de un 7% más de humedad por °C, y el vapor de agua es en sí mismo un gas de efecto invernadero." },
      clouds: { name: "Nubes", short: "Nubes",
        note: "Amplificadoras en conjunto — y la mayor fuente individual de incertidumbre de todo el balance: el rango evaluado aún cruza el cero." },
      albedo: { name: "Albedo superficial (hielo y nieve)", short: "Albedo",
        note: "El deshielo del hielo y la nieve destapa tierras y océanos oscuros, que absorben la luz solar que el hielo devolvía al espacio." },
      planck: { name: "Respuesta de Planck", short: "Respuesta de Planck",
        note: "El gran estabilizador: un cuerpo más caliente irradia más calor. Este único término es la razón de que la Tierra se asiente en una nueva temperatura en vez de sobrecalentarse sin límite." },
      push: { name: "El empuje — nuestro forzamiento hasta hoy", short: "El empuje",
        note: "No es una retroalimentación — es el empuje mismo: el forzamiento de todo lo que hemos emitido (~2,9 W/m²), dividido por el calentamiento observado (~1,45 °C). Mientras esta barra llegue más a la derecha de lo que la retroalimentación neta llega a la izquierda, el planeta sigue acumulando calor; el calentamiento solo se detiene cuando se igualan." },
      net: { name: "Retroalimentación neta", short: "NETO",
        note: "La estabilización gana — pero solo por cerca de un tercio de su propia fuerza. Ese margen estrecho es lo que fija la sensibilidad climática cerca de 3 °C por duplicación del CO₂." }
    },
    loopsSec: {
      h2: "Seis bucles que ya están girando",
      lede: "El calentamiento entra en cada cadena y sale más grande — y el bucle lo devuelve al punto de partida. Pasa el ratón sobre una tarjeta para iluminar su circuito; abre «por qué importa» para la historia completa.",
      more: "por qué importa"
    },
    loopAria: { cycle: "Ciclo de retroalimentación: {steps}, y vuelta al inicio.", then: ", luego " },
    warn: {
      kicker: "Por qué la cuenta atrás de abajo es generosa",
      body: "Los presupuestos de carbono suelen contar solo <em>nuestras</em> emisiones, como si el planeta no añadiera nada. Suma el carbono que liberarán el permafrost en deshielo y los incendios boreales, y el margen restante bajo 1,5 °C se reduce un <strong>25% ± 12%</strong> — bajo 2 °C, un <strong>17% ± 7%</strong>. Los bucles de retroalimentación no esperan a que gastemos el presupuesto. Ya lo están gastando con nosotros."
    },
    balSec: {
      h2: "Y los bucles que aguantan la línea",
      lede: "Para ser justos, el balance tiene otra columna. Tres bucles frenan el calentamiento — y uno de ellos es la única razón de que la Tierra sea habitable."
    },
    loops: {
      albedo: {
        title: "El espejo que se desvanece",
        steps: ["Calentamiento", "El hielo marino\nse derrite", "El océano oscuro\nabsorbe el sol", "Más calentamiento"],
        statUnit: "W/m²",
        statLabel: "calentamiento extra de un Ártico sin hielo — un forzamiento como el de un billón de toneladas de CO₂",
        body: "El hielo ártico refleja el 50–70% de la luz solar directamente al espacio. El agua abierta de debajo refleja cerca del 6% y absorbe el resto. El hielo ya perdido entre 1979 y 2011 añadió <strong>+0,21 W/m²</strong> de calentamiento global — la cuarta parte de lo que hizo todo nuestro CO₂ en el mismo periodo. El planeta está desmontando su propio espejo."
      },
      vapour: {
        title: "La manta que se hace más gruesa",
        steps: ["Calentamiento", "Más evaporación", "El vapor atrapa\nmás calor", "Más calentamiento"],
        statUnit: "por °C",
        statLabel: "más vapor de agua puede contener el aire por cada grado de calentamiento",
        body: "Aquí manda la física: el aire más cálido retiene cerca de un 7% más de humedad por grado (relación de Clausius–Clapeyron). El vapor de agua es el gas de efecto invernadero más potente de la atmósfera, así que la humedad extra atrapa más calor — que evapora más agua. Este bucle prácticamente <strong>duplica</strong> el calentamiento que el CO₂ causaría por sí solo, y ya está incluido en todos los modelos climáticos."
      },
      permafrost: {
        title: "La puerta del congelador",
        steps: ["Calentamiento", "El permafrost\nse descongela", "Los microbios liberan\nCO₂ + metano", "Más calentamiento"],
        statUnit: "el carbono del aire",
        statLabel: "1.100–1.700 Gt de carbono yacen congeladas en el permafrost — cerca del doble de lo que contiene toda la atmósfera",
        body: "El suelo helado lleva decenas de miles de años manteniendo en pausa plantas muertas. Al descongelarse, los microbios terminan la comida que empezaron en la última glaciación, liberando CO₂ y metano — y en sus primeros 20 años el metano atrapa unas <strong>80 veces más calor que el CO₂</strong>. Contando el carbono del permafrost y de los incendios, el presupuesto restante para 1,5 °C se reduce un <strong>25% ± 12%</strong>."
      },
      fire: {
        title: "La mecha encendida",
        steps: ["Calentamiento", "Los bosques\nse secan", "Los incendios liberan\nCO₂ + hollín", "Más calentamiento"],
        statUnit: "Gt de CO₂",
        statLabel: "liberadas en la temporada récord de incendios de Canadá en 2023 — unas cuatro veces las emisiones fósiles del país",
        body: "El calor fabrica combustible: el aire más cálido extrae la humedad de plantas y suelos, y los bosques arden con más fuerza, a más profundidad y más al norte. Los incendios canadienses de 2023 liberaron cerca de <strong>2,4 Gt de CO₂</strong>, y los fuegos boreales queman cada vez más <strong>turba</strong> — carbono acumulado durante milenios. Su hollín se posa sobre hielos lejanos y los oscurece, alimentando el espejo que se desvanece de más arriba."
      },
      sinks: {
        title: "La esponja que se cansa",
        steps: ["Calentamiento", "Los sumideros\nse debilitan", "Más CO₂ queda\nen el aire", "Más calentamiento"],
        statUnit: "más débiles",
        statLabel: "cuánto han debilitado los impactos climáticos a los sumideros de carbono terrestres y oceánicos en la última década",
        body: "Cada año, la tierra y el océano absorben en silencio cerca de la <strong>mitad</strong> de todo lo que emitimos — la mayor subvención climática que existe. Y nos la están retirando: el calor y la sequía recortan la absorción de las plantas, y el agua marina más cálida y estratificada retiene menos gas. En 2024 el sumidero terrestre estuvo a punto de colapsar y el CO₂ atmosférico saltó <strong>3,73 ppm</strong> — la subida más rápida jamás medida."
      },
      forest: {
        title: "El bosque que exhala",
        steps: ["Calentamiento", "Sequía e incendios", "El bosque se vuelve\nfuente de carbono", "Más calentamiento"],
        statUnit: "GtC/año",
        statLabel: "carbono que la región del colapso amazónico podría emitir en lugar de absorber",
        body: "La Amazonia fabrica buena parte de su propia lluvia. El calor y la deforestación rompen ese circuito: la sequía y el fuego se extienden, y el bosque pasa de <em>sumidero</em> a <em>fuente</em> de carbono. Los modelos sitúan el inicio del colapso dentro de este siglo, con un declive que se acelera bruscamente más allá de unos <strong>2,3 °C</strong>. Una selva no es un activo fijo — es un bucle que puede girar al revés."
      }
    },
    balancers: {
      planck: {
        title: "La respuesta de Planck",
        body: "Todo objeto caliente irradia. Calienta el planeta y devolverá más energía al espacio — unos <strong>3,2 W/m² por cada °C</strong>, más que todos los amplificadores juntos. Por eso el calentamiento se asienta en un nuevo equilibrio más cálido en vez de derivar hacia una Venus. Es además el único bucle estabilizador lo bastante rápido para contar en este siglo."
      },
      weathering: {
        title: "La meteorización de las rocas",
        body: "La lluvia extrae CO₂ del aire y, a lo largo de las eras, lo fija en la roca. La Tierra sí tiene un equipo de limpieza para el carbono sobrante — pero trabaja en escalas de <strong>cientos de miles de años</strong>. Limpiará el Antropoceno mucho después de que todos los que leen esto sean fósiles."
      },
      fert: {
        title: "Fertilización por CO₂",
        body: "Más CO₂ sí hace crecer las plantas más deprisa, y ese reverdecimiento ha absorbido una parte real de nuestras emisiones. Pero el efecto <strong>se satura</strong>, necesita agua y nutrientes que el calentamiento arrebata, y cada vez lo anulan más la sequía, el calor y el fuego. Un bucle útil, desbordado por los de arriba."
      }
    },
    clock: {
      h2: "La cuenta atrás del carbono",
      sub: "Para mantener el calentamiento por debajo de 1,5 °C aunque sea con un 50% de probabilidad, a la humanidad le queda un presupuesto fijo de CO₂ por emitir — para siempre. Al ritmo actual de <strong>~1.340 toneladas por segundo</strong>, esto es lo que durará:",
      y: "años", d: "días", h: "h", m: "min", s: "seg",
      b15: "Presupuesto 1,5 °C", b20: "Presupuesto 2,0 °C",
      emitted: "· {pct}% ya emitido",
      runsOut: "· se agota hacia {year} al ritmo actual",
      foot: "Presupuestos: IPCC AR6 / Global Carbon Budget 2024, probabilidad del 50%, contados desde enero de 2025. El reloj asume que las emisiones siguen al ritmo actual — cada recorte compra tiempo.",
      aria15: "Parte del presupuesto de carbono de 1,5 grados ya emitida",
      aria20: "Parte del presupuesto de carbono de 2 grados ya emitida"
    },
    sims: {
      h2: "Mientras tanto, desde que abriste esta página…",
      tons: "toneladas de CO₂ emitidas en el mundo",
      eiffel: "torres Eiffel de CO₂, en peso — una cada ~7,6 segundos",
      whales: "ballenas azules de CO₂ — unas 10 por segundo",
      bombs: "bombas de Hiroshima de calor extra atrapado por los océanos y el aire"
    },
    facts: {
      pliocene: { h3: "🦕 Déjà vu del tiempo profundo",
        body: "La última vez que el CO₂ estuvo tan alto fue en el <strong>Plioceno, hace 3–5 millones de años</strong>. No existían los humanos, los mares estaban <strong>10–20 metros más altos</strong> y había camellos viviendo en el Ártico. Hemos reconstruido esa atmósfera en una sola vida." },
      breath: { h3: "🫁 Cada respiración tuya",
        body: "Alrededor de <strong>1 de cada 2.300 moléculas</strong> del aire que tienes ahora en los pulmones es CO₂ — cerca de un 50% más de lo que inhalaba cualquiera en 1850. Tus abuelos respiraban, literalmente, otro aire." },
      speed: { h3: "🚄 La velocidad importa",
        body: "Al salir de la última glaciación, el CO₂ subió unas 80 ppm en <strong>6.000 años</strong>. Nosotros acabamos de hacer 80 ppm en <strong>45 años</strong> — unas <strong>130 veces más rápido</strong>. La naturaleza tiene frenos; nosotros los cortamos." },
      blanket: { h3: "🧊 Una manta, no una bomba",
        body: "El CO₂ funciona como una manta alrededor del planeta, y cada año la tejemos un poco más gruesa. El calor extra que ahora atrapa equivale a unas <strong>10 explosiones de Hiroshima por segundo</strong> — y cerca del 90% lo absorbe el océano." }
    },
    footer: {
      sources: "<strong>Fuentes y caja de honestidad.</strong> CO₂: NOAA Global Monitoring Lab (Mauna Loa). Temperatura: NASA GISTEMP. Datos en directo mediante la API abierta {gw}, con datos incorporados de respaldo sin conexión. Tasa de emisiones y presupuestos de carbono: Global Carbon Budget 2024, IPCC AR6. Proyecciones: estimaciones centrales del IPCC AR6 / Climate Action Tracker. Parámetros de retroalimentación: {ipcc7} (tabla 7.10). Forzamiento hielo-albedo: {pnas14} y {grl19}. Carbono del permafrost y reducción del presupuesto: {nree21} y {cee26}. Debilitamiento de los sumideros: {gcb24}. Colapso amazónico: {cee25} y {pnas25}. Emisiones de los incendios canadienses de 2023: {nat24}. Entre lecturas, los valores se <em>interpolan</em> a partir de la última tendencia medida y del ciclo estacional — los dígitos que avanzan son una estimación; la dirección es una medición. Esta es una visualización educativa independiente, no un producto oficial de estas agencias.",
      fine: "Hecho con HTML/SVG/canvas sin más · globo: costas de Natural Earth",
      stampWait: "datos incorporados hasta 2024 · esperando el feed en directo",
      stampLive: "lectura NOAA en directo {date}"
    }
  },

  /* ==================== PORTUGUÊS ==================== */
  pt: {
    name: "Português", locale: "pt-BR",
    title: "Os sinais vitais da Terra — painel de CO₂ e clima em tempo real",
    hero: {
      liveWait: "interpolado a partir da última leitura da NOAA",
      liveLabel: "ao vivo · última leitura NOAA {date}, interpolado desde então",
      label: "O dióxido de carbono na atmosfera da Terra, neste exato momento",
      context: 'Isso é <strong id="co2-vs-pre">···</strong> mais CO₂ do que a atmosfera pré-industrial continha (280 ppm antes de 1850) — e <strong id="co2-vs-lastyear">···</strong> a mais do que neste mesmo dia no ano passado.',
      seasonDown: "Caindo neste mês? É a inspiração de verão do planeta: as florestas do hemisfério norte estão retirando carbono do ar. A queda se repete todo ano — a linha por baixo só sobe.",
      seasonUp: "Subindo rápido agora: os ecossistemas do norte liberam seu carbono de inverno, somado à tendência dos combustíveis fósseis.",
      scroll: "▾ ler os sinais vitais"
    },
    tiles: {
      temp: "Temperatura global",
      tempDelta: "vs fim do séc. XIX · era mais quente em 125.000 anos",
      tempDeltaLive: "vs fim do séc. XIX · média de {year} (NASA)",
      co2: "Concentração de CO₂",
      co2Delta: "+2,7 ppm por ano, e acelerando",
      ch4: "Metano",
      ch4Delta: "+{pct}% vs era pré-industrial",
      ice: "Gelo marinho ártico (set.)",
      iceDelta: "−12,2% por década",
      sea: "Nível do mar",
      seaDelta: "desde 1993 · agora sobe 4,5 mm por ano"
    },
    ui: { tableView: "Ver os dados em tabela", langAria: "Idioma" },
    keeling: {
      h2: "A curva de Keeling — 67 anos de uma linha implacável",
      sub: "CO₂ atmosférico medido em Mauna Loa desde 1958. O pequeno serrilhado anual é a respiração do hemisfério norte: as florestas absorvem carbono a cada verão e o liberam a cada inverno. A subida por baixo nunca para. A cauda tracejada mostra para onde a tendência de hoje aponta.",
      refPre: "pré-industrial · 280 ppm",
      refSafe: "limite “seguro” · 350 ppm",
      today: "hoje · {value}",
      ttAnnual: "média anual",
      ttTrend: "se a tendência continuar",
      aria: "Gráfico de linhas do CO2 atmosférico de 1958 até hoje, subindo de 316 para cerca de {now} ppm, com uma projeção tracejada que atinge 500 ppm em 2050",
      tblYear: "Ano", tblCo2: "CO₂ (ppm)"
    },
    stripes: {
      h2: "145 anos, uma faixa para cada um",
      sub: "Cada faixa é um ano, colorida conforme o calor — azul mais frio, vermelho mais quente (segundo as <em>warming stripes</em> de Ed Hawkins). Encontre o ano em que você nasceu. Depois encontre o de hoje.",
      cooler: "mais frio", hotter: "mais quente", vs: "vs fim do séc. XIX",
      aria: "Faixas de aquecimento: temperatura global anual de 1880 a 2024, passando do azul ao vermelho profundo"
    },
    traj: {
      h2: "Para onde o século vai daqui em diante",
      sub: "O aquecimento observado até agora (NASA), seguido de três futuros possíveis segundo os modelos climáticos. A distância entre essas linhas não é questão de tempo bom ou ruim: ela decide colheitas, litorais e quais cidades continuarão habitáveis. As temperaturas são relativas ao fim do século XIX.",
      observed: "Observado (NASA)",
      refParis: "Limite de Paris · +1,5 °C", ref2: "+2 °C",
      ttObserved: "observado",
      aria: "Gráfico de linhas da anomalia de temperatura global desde 1880, com três cenários de modelos até 2100, de 1,8 a 4,4 graus Celsius",
      tblHead: ["Ano", "Observado °C", "Trilha de Paris", "Políticas atuais", "Emissões altas"]
    },
    scenarios: {
      high: "Emissões altas (SSP5-8.5)",
      current: "Políticas atuais (~2,7 °C)",
      paris: "Trilha de Paris (SSP1-2.6)"
    },
    loopsIntro: {
      h2: "Os ciclos que dirigem o aquecimento",
      sub: 'Somos nós que emitimos o carbono — mas o carbono sozinho produz só uma parte do aquecimento. Ele dá um empurrão no clima, e o clima amplifica esse empurrão por conta própria. Pense num microfone perto demais da caixa de som: a microfonia ensurdecedora não é a voz do cantor — é o <em>loop</em>. O sistema climático está cheio deles. Alguns empurram o aquecimento adiante (<span class="ink-amp">amplificadores</span>), outros o seguram (<span class="ink-stab">estabilizadores</span>), e a margem entre os dois lados é toda a história.'
    },
    ledger: {
      h2: "O livro-caixa das retroalimentações do planeta",
      sub: "Com que força cada retroalimentação empurra o clima, por grau de aquecimento a que reage (IPCC AR6). Barras para a direita adicionam calor; barras para a esquerda o dissipam. Os bigodes mostram a faixa de incerteza avaliada — note que as nuvens ainda podem se revelar refrescantes.",
      note: "<strong>Leia com atenção a barra de baixo.</strong> O lado estabilizador vence — mas só por cerca de um terço da própria força. Se os amplificadores tivessem somado mais que <strong>3,2</strong>, o aquecimento teria se alimentado sem limite e a Terra pareceria Vênus. Em vez disso, o balanço fecha em <strong>−1,16</strong>, e é exatamente essa margem fina que fixa a sensibilidade climática perto de <strong>3 °C</strong> por duplicação do CO₂. Não vivemos num planeta estável. Vivemos num planeta estável <em>por pouco</em>.",
      axis: "W/m² por °C de aquecimento",
      legendAmp: "Amplificadora — adiciona calor",
      legendStab: "Estabilizadora — dissipa calor",
      legendWhisker: "Bigode = faixa avaliada",
      legendPush: "O empurrão — forçamento ÷ aquecimento até agora",
      tblHead: ["Retroalimentação", "W/m²/°C", "Faixa", "Efeito"],
      amp: "amplificadora", stab: "estabilizadora", net: "saldo líquido", push: "o empurrão",
      aria: "Gráfico de barras divergentes dos parâmetros de retroalimentação climática do IPCC AR6 em watts por metro quadrado por grau Celsius. Vapor d'água mais gradiente térmico +1,30, nuvens +0,42, albedo de superfície +0,35 amplificam o aquecimento; a resposta de Planck −3,22 o estabiliza; a retroalimentação líquida é −1,16. Nosso forçamento até agora, dividido pelo aquecimento até agora, empurra +2,0 — mais que a resposta líquida, então o calor segue se acumulando."
    },
    feedbacks: {
      wv: { name: "Vapor d'água + gradiente térmico", short: "Vapor d'água",
        note: "O maior amplificador isolado. O ar mais quente retém cerca de 7% mais umidade por °C, e o vapor d'água é, ele próprio, um gás de efeito estufa." },
      clouds: { name: "Nuvens", short: "Nuvens",
        note: "Amplificadoras no conjunto — e a maior fonte isolada de incerteza de todo o balanço: a faixa avaliada ainda cruza o zero." },
      albedo: { name: "Albedo de superfície (gelo e neve)", short: "Albedo",
        note: "O derretimento do gelo e da neve expõe terras e oceanos escuros, que absorvem a luz solar que o gelo devolvia ao espaço." },
      planck: { name: "Resposta de Planck", short: "Resposta de Planck",
        note: "O grande estabilizador: um corpo mais quente irradia mais calor. Esse único termo é o motivo de a Terra se acomodar numa nova temperatura em vez de superaquecer sem limite." },
      push: { name: "O empurrão — nosso forçamento até agora", short: "O empurrão",
        note: "Não é uma retroalimentação — é o próprio empurrão: o forçamento de tudo o que já emitimos (~2,9 W/m²), dividido pelo aquecimento até agora (~1,45 °C). Enquanto esta barra alcançar mais à direita do que a retroalimentação líquida alcança à esquerda, o planeta segue acumulando calor; o aquecimento só para quando as duas se igualam." },
      net: { name: "Retroalimentação líquida", short: "LÍQUIDO",
        note: "A estabilização vence — mas só por cerca de um terço da própria força. É essa margem estreita que fixa a sensibilidade climática perto de 3 °C por duplicação do CO₂." }
    },
    loopsSec: {
      h2: "Seis ciclos que já estão girando",
      lede: "O aquecimento entra em cada cadeia e sai maior — e o ciclo o devolve ao ponto de partida. Passe o mouse sobre um cartão para iluminar seu circuito; abra “por que importa” para a história completa.",
      more: "por que importa"
    },
    loopAria: { cycle: "Ciclo de retroalimentação: {steps}, e volta ao início.", then: ", depois " },
    warn: {
      kicker: "Por que a contagem regressiva abaixo é generosa",
      body: "Os orçamentos de carbono costumam contar só as <em>nossas</em> emissões, como se o planeta não acrescentasse nada. Some o carbono que o permafrost em degelo e os incêndios boreais vão liberar, e o espaço restante abaixo de 1,5 °C encolhe <strong>25% ± 12%</strong> — abaixo de 2 °C, <strong>17% ± 7%</strong>. Os ciclos de retroalimentação não estão esperando a gente gastar o orçamento. Eles já o estão gastando junto conosco."
    },
    balSec: {
      h2: "E os ciclos que seguram a linha",
      lede: "Para ser justo, o balanço tem outra coluna. Três ciclos resistem ao aquecimento — e um deles é o único motivo de a Terra ser habitável."
    },
    loops: {
      albedo: {
        title: "O espelho que desaparece",
        steps: ["Aquecimento", "O gelo marinho\nderrete", "O oceano escuro\nabsorve o sol", "Mais aquecimento"],
        statUnit: "W/m²",
        statLabel: "aquecimento extra de um Ártico sem gelo — uma força equivalente a um trilhão de toneladas de CO₂",
        body: "O gelo ártico reflete 50–70% da luz solar direto de volta ao espaço. A água aberta por baixo reflete cerca de 6% e absorve o resto. O gelo já perdido entre 1979 e 2011 acrescentou <strong>+0,21 W/m²</strong> de aquecimento global — um quarto do que todo o nosso CO₂ fez no mesmo período. O planeta está desmontando o próprio espelho."
      },
      vapour: {
        title: "O cobertor que engrossa",
        steps: ["Aquecimento", "Mais evaporação", "O vapor prende\nmais calor", "Mais aquecimento"],
        statUnit: "por °C",
        statLabel: "a mais de vapor d'água que o ar consegue reter por grau de aquecimento",
        body: "Aqui é a física que manda: o ar mais quente retém cerca de 7% mais umidade por grau (relação de Clausius–Clapeyron). O vapor d'água é o gás de efeito estufa mais forte da atmosfera, então a umidade extra prende mais calor — que evapora mais água. Esse ciclo praticamente <strong>dobra</strong> o aquecimento que o CO₂ causaria sozinho, e já está embutido em todos os modelos climáticos."
      },
      permafrost: {
        title: "A porta do congelador",
        steps: ["Aquecimento", "O permafrost\ndescongela", "Micróbios liberam\nCO₂ + metano", "Mais aquecimento"],
        statUnit: "o carbono do ar",
        statLabel: "1.100–1.700 Gt de carbono jazem congeladas no permafrost — cerca do dobro do que toda a atmosfera contém",
        body: "O solo congelado mantém plantas mortas em pausa há dezenas de milhares de anos. Quando descongela, os micróbios terminam a refeição que começaram na última era glacial, liberando CO₂ e metano — e nos primeiros 20 anos o metano prende cerca de <strong>80 vezes mais calor que o CO₂</strong>. Contando o carbono do permafrost e dos incêndios, o orçamento restante para 1,5 °C encolhe <strong>25% ± 12%</strong>."
      },
      fire: {
        title: "O pavio aceso",
        steps: ["Aquecimento", "As florestas\nsecam", "Os incêndios liberam\nCO₂ + fuligem", "Mais aquecimento"],
        statUnit: "Gt de CO₂",
        statLabel: "liberadas na temporada recorde de incêndios do Canadá em 2023 — cerca de quatro vezes as emissões fósseis do país",
        body: "O calor fabrica combustível: o ar mais quente extrai a umidade de plantas e solos, e as florestas queimam com mais força, mais fundo e mais ao norte. Os incêndios canadenses de 2023 liberaram cerca de <strong>2,4 Gt de CO₂</strong>, e os fogos boreais queimam cada vez mais <strong>turfa</strong> — carbono acumulado ao longo de milênios. Sua fuligem pousa sobre gelos distantes e os escurece, alimentando o espelho que desaparece logo acima."
      },
      sinks: {
        title: "A esponja que se cansa",
        steps: ["Aquecimento", "Os sumidouros\nenfraquecem", "Mais CO₂ fica\nno ar", "Mais aquecimento"],
        statUnit: "mais fracos",
        statLabel: "quanto os impactos climáticos enfraqueceram os sumidouros de carbono da terra e do oceano na última década",
        body: "Todo ano, a terra e o oceano absorvem em silêncio cerca de <strong>metade</strong> de tudo o que emitimos — o maior subsídio climático que existe. E ele está sendo retirado: calor e seca reduzem a absorção das plantas, e a água do mar mais quente e estratificada retém menos gás. Em 2024 o sumidouro terrestre quase entrou em colapso e o CO₂ atmosférico saltou <strong>3,73 ppm</strong> — a alta mais rápida já medida."
      },
      forest: {
        title: "A floresta que exala",
        steps: ["Aquecimento", "Seca e fogo", "A floresta vira\nfonte de carbono", "Mais aquecimento"],
        statUnit: "GtC/ano",
        statLabel: "carbono que a região do colapso amazônico poderia emitir em vez de absorver",
        body: "A Amazônia fabrica boa parte da própria chuva. Calor e desmatamento rompem esse circuito: a seca e o fogo se espalham, e a floresta vira de <em>sumidouro</em> a <em>fonte</em> de carbono. Os modelos situam o início do colapso ainda neste século, com declínio acelerando fortemente além de cerca de <strong>2,3 °C</strong>. Uma floresta tropical não é um ativo fixo — é um ciclo que pode girar ao contrário."
      }
    },
    balancers: {
      planck: {
        title: "A resposta de Planck",
        body: "Todo objeto quente irradia. Aqueça o planeta e ele devolve mais energia ao espaço — cerca de <strong>3,2 W/m² por °C</strong>, mais que todos os amplificadores juntos. É por isso que o aquecimento se acomoda num novo equilíbrio mais quente em vez de descambar para uma Vênus. É também o único ciclo estabilizador rápido o bastante para importar neste século."
      },
      weathering: {
        title: "O intemperismo das rochas",
        body: "A chuva retira CO₂ do ar e, ao longo das eras, o fixa na rocha. A Terra tem mesmo uma equipe de limpeza para o carbono em excesso — mas ela trabalha em escalas de <strong>centenas de milhares de anos</strong>. Vai limpar o Antropoceno muito depois de todo mundo que lê isto ter virado fóssil."
      },
      fert: {
        title: "Fertilização por CO₂",
        body: "Mais CO₂ faz sim as plantas crescerem mais rápido, e esse verdejamento absorveu uma parte real das nossas emissões. Mas o efeito <strong>satura</strong>, exige água e nutrientes que o aquecimento retira, e é cada vez mais anulado por seca, calor e fogo. Um ciclo útil, atropelado pelos de cima."
      }
    },
    clock: {
      h2: "A contagem regressiva do carbono",
      sub: "Para manter o aquecimento abaixo de 1,5 °C mesmo com só 50% de chance, resta à humanidade um orçamento fixo de CO₂ a emitir — para sempre. No ritmo atual de <strong>~1.340 toneladas por segundo</strong>, é quanto ele vai durar:",
      y: "anos", d: "dias", h: "h", m: "min", s: "seg",
      b15: "Orçamento 1,5 °C", b20: "Orçamento 2,0 °C",
      emitted: "· {pct}% já emitido",
      runsOut: "· esgota por volta de {year} no ritmo atual",
      foot: "Orçamentos: IPCC AR6 / Global Carbon Budget 2024, probabilidade de 50%, contados a partir de janeiro de 2025. O relógio assume emissões constantes no ritmo atual — cada corte compra tempo.",
      aria15: "Parcela do orçamento de carbono de 1,5 grau já emitida",
      aria20: "Parcela do orçamento de carbono de 2 graus já emitida"
    },
    sims: {
      h2: "Enquanto isso, desde que você abriu esta página…",
      tons: "toneladas de CO₂ emitidas no mundo",
      eiffel: "torres Eiffel de CO₂, em peso — uma a cada ~7,6 segundos",
      whales: "baleias-azuis de CO₂ — cerca de 10 por segundo",
      bombs: "bombas de Hiroshima de calor extra preso pelos oceanos e pelo ar"
    },
    facts: {
      pliocene: { h3: "🦕 Déjà-vu do tempo profundo",
        body: "A última vez que o CO₂ esteve tão alto foi no <strong>Plioceno, há 3–5 milhões de anos</strong>. Não existiam humanos, os mares estavam <strong>10–20 metros mais altos</strong> e camelos viviam no Ártico. Reconstruímos aquela atmosfera no espaço de uma única vida." },
      breath: { h3: "🫁 Cada respiração sua",
        body: "Cerca de <strong>1 molécula em cada 2.300</strong> do ar nos seus pulmões agora é CO₂ — cerca de 50% a mais do que qualquer pessoa inalava em 1850. Seus avós respiravam, literalmente, outro ar." },
      speed: { h3: "🚄 A velocidade importa",
        body: "Ao sair da última era glacial, o CO₂ subiu cerca de 80 ppm em <strong>6.000 anos</strong>. Nós acabamos de fazer 80 ppm em <strong>45 anos</strong> — cerca de <strong>130 vezes mais rápido</strong>. A natureza tem freios; nós os cortamos." },
      blanket: { h3: "🧊 Um cobertor, não uma bomba",
        body: "O CO₂ age como um cobertor em volta do planeta, e a cada ano nós o tecemos um pouco mais grosso. O calor extra que ele prende agora equivale a cerca de <strong>10 explosões de Hiroshima por segundo</strong> — e uns 90% disso o oceano absorve." }
    },
    footer: {
      sources: "<strong>Fontes e caixa de honestidade.</strong> CO₂: NOAA Global Monitoring Lab (Mauna Loa). Temperatura: NASA GISTEMP. Dados ao vivo pela API aberta {gw}, com dados embutidos de reserva quando offline. Taxa de emissões e orçamentos de carbono: Global Carbon Budget 2024, IPCC AR6. Projeções: estimativas centrais do IPCC AR6 / Climate Action Tracker. Parâmetros de retroalimentação: {ipcc7} (tabela 7.10). Forçamento gelo-albedo: {pnas14} e {grl19}. Carbono do permafrost e redução do orçamento: {nree21} e {cee26}. Enfraquecimento dos sumidouros: {gcb24}. Colapso amazônico: {cee25} e {pnas25}. Emissões dos incêndios canadenses de 2023: {nat24}. Entre leituras, os valores são <em>interpolados</em> a partir da última tendência medida e do ciclo sazonal — os dígitos que correm são uma estimativa; a direção é uma medição. Esta é uma visualização educativa independente, não um produto oficial dessas agências.",
      fine: "Feito com HTML/SVG/canvas puro · globo: costas do Natural Earth",
      stampWait: "dados embutidos até 2024 · aguardando o feed ao vivo",
      stampLive: "leitura NOAA ao vivo {date}"
    }
  }

  };

  return { LANGS, LINKS };
})();
