<template>
  <div class="filip-slide lyt-chart no-scan">
    <div class="pad">
      <p v-if="kicker" class="kick" :style="{ marginBottom: '14px' }">{{ kicker }}</p>
      <slot />
      <div class="chartwrap" :style="{ display: 'block' }">
        <BarChart :data="data" :unit="unit" :height="height" :delay="delay" :max="max" />
      </div>
      <div v-if="take" class="take">{{ take }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '▸ Fig. 1' },
  /** [{ label, value, color? }] */
  data: { type: Array as () => { label: string; value: number; color?: string }[], default: () => [] },
  unit: { type: String, default: '' },
  height: { type: Number, default: 340 },
  delay: { type: Number, default: 400 },
  max: { type: Number, default: null },
  /** one-line editorial takeaway under the chart */
  take: { type: String, default: '' },
})
</script>
