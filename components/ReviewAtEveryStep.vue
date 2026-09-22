<script setup lang="ts">
const steps = [
  { number: '01', title: 'Ticket', subtitle: "What's asked", question: 'Is the ask clear and complete?', click: 4 },
  { number: '02', title: 'Plan', subtitle: "How it'll be built", question: 'Does the plan fit the ticket?', click: 3 },
  { number: '03', title: 'Uncommitted changes', subtitle: 'Work in progress', question: 'Is the change right so far?', click: 2 },
  { number: '04', title: 'Pull request', subtitle: 'Ready for merge', question: 'Is it ready to merge?', click: 1 },
] as const
</script>

<template>
  <div class="review-at-every-step" aria-label="Review at every step">
    <div class="review-grid">
      <div class="band verification-band" aria-hidden="true" />
      <div class="band generation-band" aria-hidden="true" />

      <div class="row-label verification-label">
        <span>Verification</span>
        <small>checks</small>
      </div>
      <div class="row-label generation-label">
        <span>Generation</span>
        <small>produces</small>
      </div>

      <section
        v-for="(step, index) in steps"
        :key="step.number"
        v-click="step.click"
        class="step"
        :style="{ gridColumn: index + 2 }"
        :aria-label="step.title"
      >
        <div class="review-card">
          <span class="review-number">REVIEW {{ step.number }}</span>
          <span class="review-question">{{ step.question }}</span>
        </div>
        <div class="review-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 72"><path d="M12 0V55" /><path d="M2 54L12 70L22 54Z" /></svg>
        </div>
        <div class="generation-card">
          <span class="step-number">{{ step.number }}</span>
          <h2>{{ step.title }}</h2>
          <span class="step-subtitle">{{ step.subtitle }}</span>
          <svg v-if="index < steps.length - 1" class="next-arrow" viewBox="0 0 28 24" aria-hidden="true">
            <path d="M0 12H14" /><path d="M13 4L26 12L13 20Z" />
          </svg>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.review-at-every-step {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 48px 40px 72px;
}

.review-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 152px repeat(4, minmax(0, 1fr));
  grid-template-rows: 154px 88px 170px;
  column-gap: 28px;
  padding: 24px;
  position: relative;
  isolation: isolate;
}

.band {
  position: absolute;
  left: 0;
  right: 0;
  height: 202px;
  border: 2px solid var(--ink);
  z-index: -1;
}

.verification-band { top: 0; background: var(--highlighter); }
.generation-band { bottom: 0; height: 218px; background: var(--decor-teal); }

.row-label {
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.verification-label { grid-row: 1; }
.generation-label { grid-row: 3; }
.row-label > span { font: 16px var(--font-pixel); text-transform: uppercase; }
.row-label small { font: 14px var(--font-mono); }

.step {
  min-width: 0;
  grid-row: 1 / 4;
  display: grid;
  grid-template-rows: subgrid;
  transition: opacity 280ms ease, transform 280ms ease;
}

.step.slidev-vclick-hidden {
  opacity: 0;
  visibility: hidden;
  transform: translateY(16px);
}

.review-card, .generation-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  padding: 14px;
}

.review-card { background: var(--screen); gap: 8px; font-family: var(--font-terminal); }
.review-number { font-size: 20px; color: var(--crt-amber); }
.review-question { font-size: 27px; line-height: 1.1; color: var(--crt-green); }
.review-arrow { padding: 8px 0; color: var(--signal); }
.review-arrow svg { display: block; height: 100%; width: 24px; margin: 0 auto; }
svg { fill: currentColor; stroke: currentColor; stroke-width: 3; }

.generation-card {
  position: relative;
  justify-content: center;
  gap: 10px;
  background: var(--card);
}

.step-number { font: 14px var(--font-pixel); color: var(--signal); }

.generation-card h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 27px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.02em;
  overflow-wrap: normal;
}

.step-subtitle { font: 13px var(--font-mono); color: var(--ink-2); }
.next-arrow { position: absolute; left: calc(100% + 4px); top: calc(50% - 12px); width: 24px; height: 24px; color: var(--ink); }

@media (prefers-reduced-motion: reduce) {
  .step { transition: none; transform: none; }
}
</style>
