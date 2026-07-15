<!--
  BarChart — editorial animated bar reveal. Bars rise from a hard ink
  baseline in a quick stagger; values fade in after. Ported from the
  FILIP design-system React component.
  Pass data as [{ label, value, color? }].
-->
<template>
  <div :style="style">
    <div class="bc-plot" :style="{ height: height + 'px' }">
      <div v-for="(d, i) in data" :key="i" class="bc-col">
        <span
          class="bc-val"
          :style="{ opacity: play ? 1 : 0, transitionDelay: (300 + i * 90) + 'ms' }"
        >{{ d.value }}{{ unit }}</span>
        <div
          class="bc-bar"
          :style="{
            height: barHeight(d) + 'px',
            background: d.color || 'var(--signal)',
            transitionDelay: (i * 90) + 'ms',
          }"
        />
      </div>
    </div>
    <div class="bc-labels">
      <span v-for="(d, i) in data" :key="i" class="bc-label">{{ d.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

interface Datum { label: string; value: number; color?: string }

const props = defineProps({
  data: { type: Array as () => Datum[], default: () => [] },
  height: { type: Number, default: 220 },
  max: { type: Number, default: null },
  unit: { type: String, default: '' },
  delay: { type: Number, default: 200 },
  style: { type: Object, default: () => ({}) },
})

const play = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => { timer = setTimeout(() => { play.value = true }, props.delay) })
onBeforeUnmount(() => { if (timer) clearTimeout(timer) })

const peak = computed(() =>
  props.max != null ? props.max : Math.max(1, ...props.data.map(d => d.value)),
)

function barHeight(d: Datum) {
  return play.value ? Math.max(2, (d.value / peak.value) * (props.height - 28)) : 0
}
</script>

<style scoped>
.bc-plot { display: flex; align-items: flex-end; gap: 14px; border-bottom: var(--bw-thick) solid var(--ink); padding: 0 4px; }
.bc-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; }
.bc-val { font-family: var(--font-mono); font-size: var(--t-caption); font-weight: 700; color: var(--ink); margin-bottom: 6px; transition: opacity var(--dur) var(--ease-out); }
.bc-bar { width: 100%; border: var(--bw) solid var(--ink); border-bottom: none; transition: height var(--dur-chart) var(--ease-out); }
.bc-labels { display: flex; gap: 14px; padding: 8px 4px 0; }
.bc-label { flex: 1; text-align: center; font-family: var(--font-mono); font-size: var(--t-micro); letter-spacing: var(--ls-label); text-transform: uppercase; color: var(--ink-2); }
</style>
