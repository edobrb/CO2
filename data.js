/* ============================================================
   Earth's Vital Signs — embedded datasets & physical constants
   All values are annual means from public scientific datasets.
   They act as an offline fallback; live API data (NOAA / NASA
   via global-warming.org) replaces or extends them when online.
   ============================================================ */

window.CLIMATE = (function () {
  "use strict";

  /* ---- Atmospheric CO2, Mauna Loa annual means, ppm (NOAA GML) ---- */
  const CO2_ANNUAL = [
    [1959, 315.98], [1960, 316.91], [1961, 317.64], [1962, 318.45],
    [1963, 318.99], [1964, 319.62], [1965, 320.04], [1966, 321.37],
    [1967, 322.18], [1968, 323.05], [1969, 324.62], [1970, 325.68],
    [1971, 326.32], [1972, 327.46], [1973, 329.68], [1974, 330.19],
    [1975, 331.13], [1976, 332.03], [1977, 333.84], [1978, 335.41],
    [1979, 336.84], [1980, 338.76], [1981, 340.12], [1982, 341.48],
    [1983, 343.15], [1984, 344.87], [1985, 346.35], [1986, 347.61],
    [1987, 349.31], [1988, 351.69], [1989, 353.20], [1990, 354.45],
    [1991, 355.70], [1992, 356.54], [1993, 357.21], [1994, 358.96],
    [1995, 360.97], [1996, 362.74], [1997, 363.88], [1998, 366.84],
    [1999, 368.54], [2000, 369.71], [2001, 371.32], [2002, 373.45],
    [2003, 375.98], [2004, 377.70], [2005, 379.98], [2006, 382.09],
    [2007, 384.02], [2008, 385.83], [2009, 387.64], [2010, 390.10],
    [2011, 391.85], [2012, 394.06], [2013, 396.74], [2014, 398.81],
    [2015, 401.01], [2016, 404.41], [2017, 406.76], [2018, 408.72],
    [2019, 411.65], [2020, 414.21], [2021, 416.41], [2022, 418.53],
    [2023, 421.08], [2024, 424.61]
  ];

  /* ---- Global temperature anomaly, °C vs 1951–1980 (NASA GISTEMP) ----
     Add TEMP_BASELINE_OFFSET to express vs the late-1800s (1880–1899). */
  const TEMP_ANNUAL = [
    [1880, -0.16], [1881, -0.08], [1882, -0.10], [1883, -0.17], [1884, -0.28],
    [1885, -0.33], [1886, -0.31], [1887, -0.36], [1888, -0.17], [1889, -0.10],
    [1890, -0.35], [1891, -0.22], [1892, -0.27], [1893, -0.31], [1894, -0.30],
    [1895, -0.22], [1896, -0.11], [1897, -0.11], [1898, -0.27], [1899, -0.17],
    [1900, -0.08], [1901, -0.15], [1902, -0.28], [1903, -0.37], [1904, -0.47],
    [1905, -0.26], [1906, -0.22], [1907, -0.39], [1908, -0.43], [1909, -0.48],
    [1910, -0.43], [1911, -0.44], [1912, -0.36], [1913, -0.34], [1914, -0.15],
    [1915, -0.14], [1916, -0.36], [1917, -0.46], [1918, -0.30], [1919, -0.27],
    [1920, -0.27], [1921, -0.19], [1922, -0.28], [1923, -0.26], [1924, -0.27],
    [1925, -0.22], [1926, -0.10], [1927, -0.22], [1928, -0.20], [1929, -0.36],
    [1930, -0.16], [1931, -0.09], [1932, -0.16], [1933, -0.29], [1934, -0.12],
    [1935, -0.20], [1936, -0.15], [1937, -0.03], [1938,  0.00], [1939, -0.02],
    [1940,  0.13], [1941,  0.19], [1942,  0.07], [1943,  0.09], [1944,  0.20],
    [1945,  0.09], [1946, -0.07], [1947, -0.03], [1948, -0.11], [1949, -0.11],
    [1950, -0.17], [1951, -0.07], [1952,  0.01], [1953,  0.08], [1954, -0.13],
    [1955, -0.14], [1956, -0.19], [1957,  0.05], [1958,  0.06], [1959,  0.03],
    [1960, -0.03], [1961,  0.06], [1962,  0.03], [1963,  0.05], [1964, -0.20],
    [1965, -0.11], [1966, -0.06], [1967, -0.02], [1968, -0.08], [1969,  0.05],
    [1970,  0.03], [1971, -0.08], [1972,  0.01], [1973,  0.16], [1974, -0.07],
    [1975, -0.01], [1976, -0.10], [1977,  0.18], [1978,  0.07], [1979,  0.16],
    [1980,  0.26], [1981,  0.32], [1982,  0.14], [1983,  0.31], [1984,  0.16],
    [1985,  0.12], [1986,  0.18], [1987,  0.32], [1988,  0.39], [1989,  0.27],
    [1990,  0.45], [1991,  0.41], [1992,  0.22], [1993,  0.23], [1994,  0.31],
    [1995,  0.45], [1996,  0.33], [1997,  0.46], [1998,  0.61], [1999,  0.38],
    [2000,  0.39], [2001,  0.53], [2002,  0.63], [2003,  0.62], [2004,  0.53],
    [2005,  0.68], [2006,  0.64], [2007,  0.66], [2008,  0.54], [2009,  0.66],
    [2010,  0.72], [2011,  0.61], [2012,  0.65], [2013,  0.68], [2014,  0.75],
    [2015,  0.90], [2016,  1.01], [2017,  0.92], [2018,  0.85], [2019,  0.98],
    [2020,  1.01], [2021,  0.85], [2022,  0.89], [2023,  1.17], [2024,  1.28]
  ];

  /* Offset from the GISTEMP 1951–1980 base to the 1880–1899 mean
     (NASA: 2024 was +1.28 vs 1951–80 and ≈ +1.47 vs the late 1800s). */
  const TEMP_BASELINE_OFFSET = 0.19;

  /* ---- Mauna Loa mean seasonal cycle, ppm offset from the annual mean,
     one value per month midpoint (the famous "breathing" sawtooth). ---- */
  const CO2_SEASONAL = [0.4, 1.0, 1.8, 2.9, 3.5, 2.8, 1.0, -1.2, -3.0, -3.2, -1.9, -0.5];

  /* ---- CO2 trend model fallback (anchors the live ticker offline) ----
     2025 annual mean estimate and current growth rate, ppm / yr (NOAA). */
  const CO2_MEAN_2025 = 426.9;
  const CO2_GROWTH = 2.75;

  /* ---- Warming-projection scenarios, °C vs late-1800s (IPCC AR6 /
     Climate Action Tracker central estimates, smoothed control points) ---- */
  const SCENARIOS = [
    {
      id: "high", name: "High emissions (SSP5-8.5)", color: "var(--s-orange)",
      points: [[2025, 1.45], [2030, 1.65], [2040, 1.95], [2050, 2.40], [2075, 3.30], [2100, 4.40]]
    },
    {
      id: "current", name: "Current policies (~2.7 °C)", color: "var(--s-blue)",
      points: [[2025, 1.45], [2030, 1.62], [2040, 1.85], [2050, 2.05], [2075, 2.40], [2100, 2.70]]
    },
    {
      id: "paris", name: "Paris path (SSP1-2.6)", color: "var(--s-aqua)",
      points: [[2025, 1.45], [2030, 1.56], [2040, 1.66], [2050, 1.72], [2075, 1.78], [2100, 1.78]]
    }
  ];

  /* ---- CO2 "if the trend continues" extension for the Keeling curve ---- */
  const CO2_PROJECTION = [[2024, 424.61], [2030, 441], [2040, 470], [2050, 500]];

  /* ---- Emissions & carbon budget (Global Carbon Budget 2024, IPCC AR6) ----
     Total human CO2 emissions incl. land use: ~42.2 Gt / yr.
     Remaining budgets (50% chance) counted from 2025-01-01. */
  const EMISSIONS_T_PER_YEAR = 42.2e9;
  const SECONDS_PER_YEAR = 31557600;                       // Julian year
  const EMISSIONS_T_PER_SECOND = EMISSIONS_T_PER_YEAR / SECONDS_PER_YEAR;  // ≈ 1337 t/s
  const BUDGET_START = Date.UTC(2025, 0, 1);
  const BUDGET_15_T = 235e9;    // remaining for 1.5 °C at 2025-01-01
  const BUDGET_20_T = 1110e9;   // remaining for 2.0 °C at 2025-01-01
  const BUDGET_15_TOTAL = 2900e9;  // ~all CO2 ever allowed for 1.5 °C (since 1850)
  const BUDGET_20_TOTAL = 3775e9;

  /* ---- Earth's energy imbalance → the "Hiroshima" similitude ----
     EEI ≈ 1.3 W/m² × 5.101e14 m² ≈ 6.6e14 W; one bomb ≈ 6.3e13 J. */
  const HEAT_WATTS = 1.3 * 5.101e14;
  const HIROSHIMA_J = 6.3e13;
  const BOMBS_PER_SECOND = HEAT_WATTS / HIROSHIMA_J;       // ≈ 10.5 / s

  /* ---- Similitude masses, tonnes ---- */
  const EIFFEL_T = 10100;
  const BLUE_WHALE_T = 140;

  /* ---- Other vital signs (embedded, latest published values) ---- */
  const METHANE_PPB = 1935;        // NOAA global mean, ~2025
  const METHANE_PREIND_PPB = 729;
  const ARCTIC_SEPT_EXTENT = 4.28; // million km², Sept 2024 (NSIDC)
  const ARCTIC_TREND = -12.2;      // % per decade vs 1981–2010 (Sept minimum)
  const SEA_LEVEL_MM_SINCE_1993 = 105; // satellite era rise (NASA)
  const SEA_LEVEL_MM_PER_YEAR = 4.5;   // current rate

  const CO2_PREINDUSTRIAL = 280;   // ppm, ~1850
  const CO2_SAFE = 350;            // ppm, the "safe boundary" (Hansen et al.)

  /* ============================================================
     FEEDBACK LEDGER — IPCC AR6 WGI Ch.7 assessed feedback
     parameters, W m⁻² per °C of warming. Positive = amplifying
     (pushes warming up), negative = stabilizing (pulls it back).
     ============================================================ */
  const FEEDBACKS = [
    {
      key: "wv", name: "Water vapour + lapse rate", short: "Water vapour", value: 1.30,
      lo: 1.20, hi: 1.40, kind: "amp",
      note: "The single largest amplifier. Warmer air holds ~7% more moisture per °C, and water vapour is itself a greenhouse gas."
    },
    {
      key: "clouds", name: "Clouds", short: "Clouds", value: 0.42,
      lo: -0.10, hi: 0.94, kind: "amp",
      note: "Amplifying on balance — and the largest single source of uncertainty in the whole ledger. The range crosses zero."
    },
    {
      key: "albedo", name: "Surface albedo (ice & snow)", short: "Ice albedo", value: 0.35,
      lo: 0.10, hi: 0.60, kind: "amp",
      note: "Melting ice and snow uncover dark land and ocean, which absorb the sunlight the ice used to bounce away."
    },
    {
      key: "planck", name: "Planck response", short: "Planck response", value: -3.22,
      lo: null, hi: null, kind: "stab",
      note: "The great stabilizer: a warmer body radiates more heat. This single term is why Earth settles at a new temperature instead of running away."
    },
    {
      /* not a feedback — the push the feedbacks react to: total anthropogenic
         forcing (~2.9 W/m²) ÷ observed warming (~1.45 °C), same per-°C axis */
      key: "push", name: "The push — our forcing so far", short: "Our push", value: 2.0,
      lo: null, hi: null, kind: "push",
      note: "The heat-trapping push of everything we have emitted, divided by the warming so far. While it out-reaches the net feedback, heat keeps piling up."
    },
    {
      key: "net", name: "Net feedback", short: "NET", value: -1.16,
      lo: -1.81, hi: -0.51, kind: "net",
      note: "Stabilization wins — but only by about a third of its own strength. That narrow margin is what sets climate sensitivity near 3 °C per CO₂ doubling."
    }
  ];

  /* ---- The amplifying loops, as mechanisms ---- */
  const LOOPS = [
    {
      id: "albedo", icon: "🧊", title: "The vanishing mirror",
      steps: ["Warming", "Sea ice melts", "Dark ocean\nabsorbs sun", "More warming"],
      stat: "+0.71", statUnit: "W/m²",
      statLabel: "extra heating from an ice-free Arctic — the forcing of a trillion tonnes of CO₂",
      body: "Arctic ice bounces 50–70% of sunlight straight back to space. The open water beneath it reflects about 6% — it drinks the rest. Ice lost between 1979 and 2011 already added <strong>+0.21 W/m²</strong> of global heating, a quarter as much as all our CO₂ did over the same span. The planet is dismantling its own mirror."
    },
    {
      id: "vapour", icon: "💧", title: "The thickening blanket",
      steps: ["Warming", "More evaporation", "Vapour traps\nmore heat", "More warming"],
      stat: "+7%", statUnit: "per °C",
      statLabel: "more water vapour the air can hold for every degree of warming",
      body: "Physics fixes this one: the Clausius–Clapeyron relation says warmer air holds about 7% more moisture per °C. Water vapour is the atmosphere's strongest greenhouse gas, so the extra moisture traps more heat, which evaporates more water. This loop roughly <strong>doubles</strong> the warming CO₂ would cause on its own — and it is already fully inside every climate model."
    },
    {
      id: "permafrost", icon: "🪨", title: "The freezer door",
      steps: ["Warming", "Permafrost thaws", "Microbes release\nCO₂ + methane", "More warming"],
      stat: "2×", statUnit: "the air's carbon",
      statLabel: "1,100–1,700 Gt C lies frozen in northern permafrost — about twice what the entire atmosphere holds",
      body: "Frozen ground has kept plant matter on pause for tens of thousands of years. Thaw it and microbes finish the meal they started in the last ice age, exhaling CO₂ and methane — and methane traps about <strong>80× more heat than CO₂</strong> over its first 20 years. Counting permafrost and wildfire carbon shrinks the remaining 1.5 °C budget by <strong>25% ± 12%</strong>."
    },
    {
      id: "fire", icon: "🔥", title: "The burning fuse",
      steps: ["Warming", "Forests dry out", "Fires release\nCO₂ + soot", "More warming"],
      stat: "2.4", statUnit: "Gt CO₂",
      statLabel: "released by Canada's record 2023 fire season — about four times the country's fossil-fuel emissions",
      body: "Heat manufactures fuel: warmer air pulls moisture out of plants and soil, so forests burn hotter, deeper and farther north. Canada's 2023 fires released about <strong>2.4 Gt of CO₂</strong>, and boreal fires increasingly burn <strong>peat</strong> — carbon that took millennia to store. Their soot drifts onto distant ice and darkens it, feeding the vanishing-mirror loop above."
    },
    {
      id: "sinks", icon: "🌊", title: "The tiring sponge",
      steps: ["Warming", "Sinks weaken", "More CO₂ stays\nin the air", "More warming"],
      stat: "~15%", statUnit: "weaker",
      statLabel: "land and ocean carbon sinks over the past decade, because of climate impacts",
      body: "Every year, land and ocean quietly absorb about <strong>half</strong> of everything we emit. It is the largest climate subsidy in existence, and it is being withdrawn: heat and drought cut plant uptake, and warm stratified seawater holds less gas. In 2024 the land sink nearly collapsed and atmospheric CO₂ jumped <strong>3.73 ppm</strong> — the fastest rise ever measured."
    },
    {
      id: "forest", icon: "🌳", title: "The forest that exhales",
      steps: ["Warming", "Drought & fire", "Forest becomes\na carbon source", "More warming"],
      stat: "0.5", statUnit: "GtC/yr",
      statLabel: "carbon the Amazon dieback region could emit instead of absorbing",
      body: "The Amazon makes much of its own rain. Heat and clearing break that circuit, so drought and fire spread, and the forest flips from carbon <em>sink</em> to carbon <em>source</em>. Models put the onset of dieback inside this century, with decline accelerating sharply beyond about <strong>2.3 °C</strong>. A rainforest is not a fixed asset; it is a loop that can run backwards."
    }
  ];

  /* ---- The balancing loops ---- */
  const BALANCERS = [
    {
      id: "planck", icon: "🌡️", title: "The Planck response",
      body: "Every warm object glows. Heat the planet and it radiates more energy to space — about <strong>3.2 W/m² for each °C</strong>, far more than all the amplifiers combined. This is the reason warming settles at a new, hotter equilibrium instead of spiralling into a Venus. It is also the only balancing loop that acts fast enough to matter this century."
    },
    {
      id: "weathering", icon: "🪨", title: "Rock weathering",
      body: "Rain pulls CO₂ from the air and, over ages, dissolves it into rock. Earth genuinely does have a repair crew for excess carbon — but they work on <strong>hundreds of thousands of years</strong>. They will clean up the Anthropocene long after everyone reading this is a fossil."
    },
    {
      id: "fert", icon: "🌱", title: "CO₂ fertilization",
      body: "Extra CO₂ does make plants grow faster, and that greening has absorbed a real share of our emissions. But the effect <strong>saturates</strong>, needs water and nutrients that warming takes away, and is increasingly cancelled by drought, heat and fire. A helpful loop being overwhelmed by the ones above."
    }
  ];


  return {
    CO2_ANNUAL, TEMP_ANNUAL, TEMP_BASELINE_OFFSET, CO2_SEASONAL,
    CO2_MEAN_2025, CO2_GROWTH, SCENARIOS, CO2_PROJECTION,
    EMISSIONS_T_PER_YEAR, EMISSIONS_T_PER_SECOND, SECONDS_PER_YEAR,
    BUDGET_START, BUDGET_15_T, BUDGET_20_T, BUDGET_15_TOTAL, BUDGET_20_TOTAL,
    BOMBS_PER_SECOND, EIFFEL_T, BLUE_WHALE_T,
    METHANE_PPB, METHANE_PREIND_PPB, ARCTIC_SEPT_EXTENT, ARCTIC_TREND,
    SEA_LEVEL_MM_SINCE_1993, SEA_LEVEL_MM_PER_YEAR,
    CO2_PREINDUSTRIAL, CO2_SAFE,
    FEEDBACKS, LOOPS, BALANCERS
  };
})();
