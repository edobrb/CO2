# 🌍 Earth's Vital Signs

A live, single-page **CO₂ & climate warming dashboard** — real data, interpolated in
real time, no build step, no dependencies. Dark, cinematic, and designed to make the
numbers *felt*: the page itself slowly warms from cool blue to hot red as you scroll
toward 2100.

## What's on it

- **Live CO₂ counter** — atmospheric CO₂ right now, anchored to the latest NOAA
  Mauna Loa reading and interpolated between readings using the measured growth
  trend + the seasonal "breathing" cycle (the ticking decimals are an estimate;
  the direction is measurement).
- **Vital-signs tiles** — temperature anomaly, CO₂, methane, Arctic sea ice, sea level.
- **The Keeling Curve** — 67 years of measurements, the pre-industrial and "safe"
  boundaries, a pulsing *you-are-here* dot, and a dashed *if-the-trend-continues* tail to 2050.
- **Warming stripes** — 145 years, one stripe each (after Ed Hawkins), hover any year.
- **Trajectories to 2100** — observed NASA warming braided into three futures
  (Paris path, current policies, high emissions).
- **Feedback loops** — the section that explains *why* the curves bend. A diverging
  "feedback ledger" of the IPCC AR6 assessed parameters (amplifying vs stabilizing,
  with uncertainty whiskers), then five amplifying loops drawn as animated cycle
  rings you can trace with a finger — vanishing sea-ice mirror, thickening water-vapour
  blanket, the permafrost freezer door, the tiring carbon sponge, and the forest that
  exhales — plus the three balancing loops holding the line.
- **The carbon countdown** — a live clock on the remaining 1.5 °C carbon budget,
  with depletion meters for 1.5 °C and 2 °C.
- **Similitudes** — Eiffel Towers of CO₂ since you opened the page, blue whales per
  second, Hiroshima bombs of trapped heat, and deep-time context (hello, Pliocene).

Every chart has a crosshair tooltip, keyboard navigation (focus + arrow keys), and a
"view data as table" twin. Honors `prefers-reduced-motion`.

## Data sources

| Signal | Source | Live feed |
|---|---|---|
| CO₂ (Mauna Loa) | NOAA Global Monitoring Laboratory | ✅ via [global-warming.org](https://global-warming.org) API |
| Temperature | NASA GISTEMP | ✅ via global-warming.org API |
| Methane | NOAA GML | ✅ via global-warming.org API |
| Emission rate & carbon budgets | Global Carbon Budget 2024 · IPCC AR6 | constants |
| Projections | IPCC AR6 / Climate Action Tracker central estimates | constants |
| Feedback parameters | [IPCC AR6 WGI Ch. 7](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/), Table 7.10 | constants |
| Ice-albedo forcing | [Pistone, Eisenman & Ramanathan, PNAS 2014](https://www.pnas.org/doi/10.1073/pnas.1318201111) · [Pistone et al., GRL 2019](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019GL082914) | constants |
| Permafrost carbon | [Nature Rev. Earth Env. 2021](https://www.nature.com/articles/s43017-021-00230-3) · [Comms. Earth & Env. 2026](https://www.nature.com/articles/s43247-026-03189-5) | constants |
| Sink weakening | [Global Carbon Budget 2024](https://essd.copernicus.org/articles/17/965/2025/) | constants |
| Amazon dieback | [Comms. Earth & Env. 2025](https://www.nature.com/articles/s43247-025-02606-5) · [PNAS 2025](https://www.pnas.org/doi/10.1073/pnas.2418813122) | constants |

If the live API is unreachable, the dashboard falls back to the embedded annual
datasets (through 2024) — it works fully offline.

> This is an independent educational visualization, not an official product of
> NOAA, NASA, or the IPCC. Interpolated values between readings are estimates.

## Deploy on GitHub Pages

The repo ships with `.github/workflows/deploy-pages.yml`. One-time setup:

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to the default branch (or run the workflow manually from the **Actions** tab).
3. The site appears at `https://<user>.github.io/<repo>/`.

## Run locally

It's static — any file server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
