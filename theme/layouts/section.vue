<template>
  <div class="filip-slide lyt-section dark">
    <FilipMark :pos="mark" :brand="brand" v-if="mark !== 'none'" />
    <div class="pad mid" :style="{ gap: '22px' }">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <slot />
      <hr class="rule" :style="{ marginTop: '14px' }" />
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '01 / SECTION' },
  footerLeft: { type: String, default: '▸ FILIP' },
  footerRight: { type: String, default: '' },
  mark: { type: String, default: 'tl' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
