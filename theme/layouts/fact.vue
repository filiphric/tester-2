<template>
  <div class="filip-slide lyt-fact">
    <FilipMark :pos="mark" :brand="brand" v-if="mark !== 'none'" />
    <div class="pad center" :style="{ gap: '18px' }">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <div class="bignum">{{ value }}<span class="u">{{ unit }}</span></div>
      <slot />
      <p v-if="source" class="source">{{ source }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '▸ The number' },
  /** the oversized figure, e.g. "97" */
  value: { type: [String, Number], default: '0' },
  /** the accent suffix, e.g. "%" (rendered in signal red) */
  unit: { type: String, default: '' },
  /** mono source line under the caption */
  source: { type: String, default: '' },
  mark: { type: String, default: 'tr' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
