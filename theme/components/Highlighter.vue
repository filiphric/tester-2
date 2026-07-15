<!--
  Highlighter — the signature editorial marker emphasis. Wraps inline
  text and sweeps a translucent marker across it, Vox-style.

  Sweeps automatically when you arrive at the slide:
      <Highlighter>made us</Highlighter>

  Or sync the sweep to a click step (advance with space/→):
      <Highlighter :at="1">made us</Highlighter>

  Props:
    at        sweep once the slide's click count reaches this number
    stepped   use 12fps steps() easing for a chunky marker stroke
    scribble  diagonal scribble fill instead of a flat marker
-->
<template>
  <span class="hl" :style="markStyle"><slot /></span>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: { type: String, default: 'var(--highlighter-soft)' },
  height: { type: String, default: '0.66em' },
  baseline: { type: String, default: '0.6em' },
  delay: { type: Number, default: 300 },
  duration: { type: Number, default: 480 },
  scribble: { type: Boolean, default: false },
  stepped: { type: Boolean, default: false },
  at: { type: [Number, String], default: null },
})

const swept = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

// Optional click sync. Safe if the component is ever used outside a slide.
let clicks: { value: number } | null = null
try {
  clicks = useSlideContext().$clicks as unknown as { value: number }
}
catch { clicks = null }

onMounted(() => {
  // No `at` → sweep on arrival, after a short delay.
  if (props.at == null)
    timer = setTimeout(() => { swept.value = true }, props.delay)
})
onBeforeUnmount(() => { if (timer) clearTimeout(timer) })

// `at` set → sweep once the slide's clicks reach the threshold.
if (props.at != null && clicks) {
  watch(
    () => clicks!.value,
    (c) => { if (c >= Number(props.at)) swept.value = true },
    { immediate: true },
  )
}
else if (props.at != null) {
  // No click context available — fall back to a mount sweep.
  onMounted(() => { timer = setTimeout(() => { swept.value = true }, props.delay) })
}

const easing = computed(() => (props.stepped ? 'steps(6, jump-none)' : 'var(--ease-marker)'))

const markStyle = computed(() => ({
  backgroundImage: props.scribble
    ? `repeating-linear-gradient(115deg, ${props.color} 0 6px, transparent 6px 9px)`
    : `linear-gradient(${props.color}, ${props.color})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: `0 ${props.baseline}`,
  backgroundSize: swept.value ? `100% ${props.height}` : `0% ${props.height}`,
  transition: `background-size ${props.duration}ms ${easing.value}`,
  padding: '0 0.06em',
  WebkitBoxDecorationBreak: 'clone',
  boxDecorationBreak: 'clone',
}))
</script>
