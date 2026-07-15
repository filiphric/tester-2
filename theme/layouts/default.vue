<template>
  <div class="filip-slide lyt-default">
    <div class="pad">
      <p v-if="kicker" class="kick" :style="{ marginBottom: '16px' }">{{ kicker }}</p>
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
  mark: { type: String, default: 'tr' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
