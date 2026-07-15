<template>
  <div class="filip-slide lyt-cover">
    <FilipMark :pos="mark" :brand="brand" v-if="mark !== 'none'" />
    <div class="pad mid" :style="{ gap: '30px' }">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <slot />
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '▸ Explainer' },
  footerLeft: { type: String, default: '' },
  footerRight: { type: String, default: '' },
  mark: { type: String, default: 'tl' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
