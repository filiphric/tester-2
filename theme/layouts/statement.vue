<template>
  <div class="filip-slide lyt-statement ink">
    <div class="pad center">
      <slot />
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  footerLeft: { type: String, default: '▸ FILIP' },
  footerRight: { type: String, default: 'Statement' },
})
</script>
