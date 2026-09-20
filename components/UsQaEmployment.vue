<template>
  <div class="us-qa-employment">
    <svg viewBox="0 0 1088 490" role="img" aria-labelledby="us-qa-title us-qa-description">
      <title id="us-qa-title">US software QA employment estimates decreased 6.5 percent</title>
      <desc id="us-qa-description">BLS estimates 199,800 software quality assurance analysts and testers in May 2024 and 186,740 in May 2025, across US industries. Bars start at zero. These estimates pool three years of survey data; the difference is not a count of layoffs and does not establish an AI effect.</desc>

      <g v-for="tick in [0, 50000, 100000, 150000, 200000]" :key="tick">
        <line x1="72" x2="706" :y1="y(tick)" :y2="y(tick)" :class="tick === 0 ? 'baseline' : 'grid'" />
        <text x="55" :y="y(tick) + 6" text-anchor="end" class="axis-label">{{ tick === 0 ? '0' : `${tick / 1000}K` }}</text>
      </g>

      <g v-for="point in employment" :key="point.label" :class="point.className">
        <rect :x="point.center - 91" :y="y(point.jobs)" width="182" :height="bottom - y(point.jobs)" class="bar" />
        <text :x="point.center" :y="y(point.jobs) - 19" text-anchor="middle" class="bar-value">{{ point.jobs.toLocaleString('en-US') }}</text>
        <text :x="point.center" y="466" text-anchor="middle" class="date-label">{{ point.label }}</text>
      </g>

      <text x="792" y="168" class="decline">−{{ decline }}%</text>
      <text x="797" y="208" class="stat-label">Between BLS estimates</text>
      <text x="797" y="282" class="occupation">Software QA analysts</text>
      <text x="797" y="313" class="occupation">and testers</text>
      <text x="797" y="366" class="stat-detail">Across US industries</text>
      <text x="797" y="397" class="stat-detail">May 2024 → May 2025</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
const employment = [
  { label: 'May 2024', jobs: 199800, center: 249, className: 'previous' },
  { label: 'May 2025', jobs: 186740, center: 558, className: 'latest' },
] as const
const bottom = 423
const y = (jobs: number) => bottom - jobs / 225000 * 370
const decline = ((1 - employment[1].jobs / employment[0].jobs) * 100).toFixed(1)
</script>

<style scoped>
.us-qa-employment { position: absolute; top: 196px; left: 96px; right: 96px; color: var(--ink); }
svg { display: block; width: 100%; overflow: visible; }
svg text { font-family: var(--font-body); fill: currentColor; }
.grid { stroke: var(--rule); stroke-width: 1.5; }
.baseline { stroke: var(--ink-3); stroke-width: 1.5; }
.axis-label { font-size: 19px; fill: var(--ink-2); }
.bar-value { font-size: 34px; font-weight: 800; }
.date-label { font-size: 25px; font-weight: 700; }
.previous .bar { fill: var(--highlighter); }
.latest .bar { fill: var(--signal-deep); }
.latest .bar-value, .decline { fill: var(--signal-deep); }
.decline { font-size: 86px; font-weight: 900; letter-spacing: -4px; }
.stat-label { font-size: 22px; font-weight: 700; }
.occupation { font-size: 25px; font-weight: 700; }
.stat-detail { font-size: 21px; fill: var(--ink-2); }
</style>
