<template>
  <div class="github-qa-trend" :class="{ comparison }">
    <template v-if="!comparison">
      <img
        class="github-chart"
        :src="`${baseUrl}images/github-activity-august-2026.png`"
        width="1920"
        height="790"
        alt="GitHub’s published monthly activity charts, 2023 to August 2026. Merged pull requests reach 130 million, commits 2.9 billion, and new repositories 24 million. All three accelerate sharply in 2025–2026. These are activity counts, not lines of code."
      />
    </template>

    <svg v-else viewBox="0 64 1088 426" role="img" aria-labelledby="qa-workload-title qa-workload-description">
      <title id="qa-workload-title">More testing work does not guarantee bigger teams</title>
      <desc id="qa-workload-description">In the global State of Testing 2026 survey, 63.6 percent of Internet and Tech respondents reported increased workload, while 28.5 percent reported increased team size. Labels round to 64 and 29 percent. These are shares of respondents, not growth rates or worldwide job counts.</desc>

      <g v-for="tick in [0, 25, 50, 75, 100]" :key="tick">
        <line :x1="x(tick)" :x2="x(tick)" y1="94" y2="439" class="grid" />
        <text :x="x(tick)" y="473" :text-anchor="tick === 0 ? 'start' : tick === 100 ? 'end' : 'middle'" class="axis-label">{{ tick }}%</text>
      </g>

      <g v-for="row in survey" :key="row.label" :class="row.className">
        <text x="0" :y="row.top - 23" class="bar-label">{{ row.label }}</text>
        <rect x="0" :y="row.top" :width="x(row.value)" height="78" class="survey-bar" />
        <text :x="x(row.value) + 24" :y="row.top + 63" class="stat-value">{{ Math.round(row.value) }}%</text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{ comparison?: boolean }>()

const baseUrl = import.meta.env.BASE_URL
const survey = [
  { label: 'More testing work', value: 63.6, top: 156, className: 'workload' },
  { label: 'Bigger testing teams', value: 28.5, top: 337, className: 'team-size' },
] as const
const x = (value: number) => value / 100 * 1088
</script>

<style scoped>
.github-qa-trend {
  position: absolute;
  top: 196px;
  left: 96px;
  right: 96px;
  color: var(--ink);
}
.github-chart { display: block; width: 100%; height: auto; }
svg { display: block; width: 100%; overflow: visible; }
svg text { font-family: var(--font-body); fill: currentColor; }
.axis-label { font-size: 19px; fill: var(--ink-2); }
.grid { stroke: var(--rule); stroke-width: 1.5; }
.bar-label { font-size: 32px; font-weight: 700; }
.stat-value { font-size: 72px; font-weight: 900; letter-spacing: -3px; }
.workload .survey-bar { fill: var(--highlighter); }
.team-size .survey-bar { fill: var(--signal-deep); }
.team-size .stat-value { fill: var(--signal-deep); }
</style>
