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

  return {
    CO2_ANNUAL, TEMP_ANNUAL, TEMP_BASELINE_OFFSET, CO2_SEASONAL,
    CO2_MEAN_2025, CO2_GROWTH, SCENARIOS, CO2_PROJECTION,
    EMISSIONS_T_PER_YEAR, EMISSIONS_T_PER_SECOND, SECONDS_PER_YEAR,
    BUDGET_START, BUDGET_15_T, BUDGET_20_T, BUDGET_15_TOTAL, BUDGET_20_TOTAL,
    BOMBS_PER_SECOND, EIFFEL_T, BLUE_WHALE_T,
    METHANE_PPB, METHANE_PREIND_PPB, ARCTIC_SEPT_EXTENT, ARCTIC_TREND,
    SEA_LEVEL_MM_SINCE_1993, SEA_LEVEL_MM_PER_YEAR,
    CO2_PREINDUSTRIAL, CO2_SAFE
  };
})();
