<script setup lang="ts">
defineProps<{ hybrid?: boolean }>()

const listings = [
  { year: '2025', status: 'Estimate', count: 32000, top: 44, forecast: false },
  { year: 'End-2026', status: 'Forecast', count: 24000, top: 224, forecast: true },
] as const
const barWidth = (count: number) => count / 32000 * 600
</script>

<template>
  <div class="manual-qa-demand" :class="{ hybrid }">
    <template v-if="!hybrid">
      <p class="eyebrow">GLOBAL MANUAL TESTER LISTINGS</p>
      <svg class="listings-chart" viewBox="0 0 1088 370" role="img" aria-labelledby="manual-listings-title manual-listings-description">
        <title id="manual-listings-title">Global manual tester listings: 2025 estimate and end-2026 forecast</title>
        <desc id="manual-listings-description">AccleroTech estimates approximately 32,000 listings in 2025 and forecasts approximately 24,000 by the end of 2026. Bar lengths start at zero; the forecast bar is three quarters of the estimate bar and has a dashed outline. The forecast is not an observed count.</desc>
        <g v-for="point in listings" :key="point.year" :class="{ forecast: point.forecast }">
          <text x="0" :y="point.top + 43" class="year-label">{{ point.year }}</text>
          <text x="0" :y="point.top + 77" class="status-label">{{ point.status }}</text>
          <rect x="250" :y="point.top" :width="barWidth(point.count)" height="96" class="listing-bar" />
          <text :x="250 + barWidth(point.count) + 24" :y="point.top + 65" class="listing-count">~{{ point.count.toLocaleString('en-US') }}</text>
        </g>
      </svg>
    </template>

    <template v-else>
      <div class="columns">
        <section aria-label="Reported share of QA listings hiring manual testers">
          <p class="eyebrow">QA LISTINGS · 2026 REPORT</p>
          <h2>~38%</h2>
          <p class="detail">Still hiring manual testers</p>
          <p class="domains">Banking · Insurance · Healthcare<br />E-commerce · Government</p>
          <p class="attribution"><a href="https://softwaretestpilot.com/qa-job-market-report" target="_blank" rel="noopener noreferrer">SoftwareTestPilot · 2026 ↗</a></p>
        </section>
        <section aria-label="Skills increasingly expected alongside manual testing">
          <p class="eyebrow">ALONGSIDE MANUAL SKILLS</p>
          <ul class="skills">
            <li>API testing</li>
            <li>SQL</li>
            <li>Automation literacy<span>Playwright or Selenium</span></li>
          </ul>
        </section>
      </div>
    </template>
  </div>
</template>

<style scoped>
.manual-qa-demand { position: absolute; top: 210px; left: 96px; right: 96px; color: var(--ink); }
.manual-qa-demand.hybrid { top: 210px; bottom: 64px; display: flex; align-items: center; }
.manual-qa-demand p { margin: 0; max-width: none; }
.columns { display: grid; width: 100%; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 56px; }
.columns section + section { border-left: 2px solid var(--rule); padding-left: 44px; display: flex; flex-direction: column; }
.manual-qa-demand .eyebrow { font: 700 16px/1.5 var(--font-mono); letter-spacing: .04em; color: var(--ink-2); }
.manual-qa-demand h2 { margin: 18px 0; font-size: 148px; line-height: .95; letter-spacing: -.045em; color: var(--signal-deep); }
.manual-qa-demand .detail { font-size: 31px; line-height: 1.3; color: var(--ink); }
.manual-qa-demand .attribution { margin-top: 24px; font-size: 16px; line-height: 1.4; color: var(--ink-2); }
.manual-qa-demand a { color: inherit; text-decoration: underline; text-underline-offset: 4px; }
.manual-qa-demand a:focus-visible { outline: 3px solid var(--signal); outline-offset: 5px; }
.listings-chart { display: block; width: 100%; margin-top: 12px; overflow: visible; }
.listings-chart text { font-family: var(--font-body); fill: var(--ink); }
.year-label { font-size: 32px; font-weight: 700; }
.listings-chart .status-label { font-size: 21px; fill: var(--ink-2); }
.listing-bar { fill: var(--signal-deep); }
.forecast .listing-bar { fill: var(--signal-deep); fill-opacity: .08; stroke: var(--signal-deep); stroke-width: 3; stroke-dasharray: 10 7; }
.listing-count { font-size: 48px; font-weight: 800; letter-spacing: -.03em; }
.manual-qa-demand .domains { margin-top: 22px; font-size: 22px; line-height: 1.5; color: var(--ink-2); }
.manual-qa-demand .skills { flex: 1; margin: 26px 0 0; padding: 12px 0 22px; display: flex; flex-direction: column; justify-content: space-between; gap: 26px; list-style: none; }
.manual-qa-demand .skills li { padding-left: 34px; font-size: 38px; line-height: 1.2; font-weight: 700; color: var(--ink); }
.manual-qa-demand .skills li::before { content: '+'; top: 0; font-size: 34px; color: var(--signal-deep); }
.skills span { display: block; margin-top: 12px; font-size: 24px; font-weight: 400; color: var(--ink-2); }
</style>
