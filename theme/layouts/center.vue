<template>
  <div class="filip-slide lyt-center">
    <FilipMark :pos="mark" :brand="brand" v-if="mark !== 'none'" />
    <div class="pad center" :style="{ gap: '26px' }">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <slot />
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '' },
  footerLeft: { type: String, default: '' },
  footerRight: { type: String, default: '' },
  mark: { type: String, default: 'none' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
