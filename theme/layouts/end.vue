<template>
  <div class="filip-slide lyt-end dark">
    <div class="pad center" :style="{ gap: '28px' }">
      <FilipMark pos="inline" :brand="brand" />
      <slot />
      <p v-if="signoff" class="signoff">{{ signoff }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  brand: { type: String, default: 'FILIP HRIC' },
  /** mono sign-off / subscribe line (amber) */
  signoff: { type: String, default: 'youtube.com/filip · ▸ subscribe' },
})
</script>

<style scoped>
.signoff {
  font-family: var(--font-mono); font-size: 16px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--crt-amber); margin: 0;
}
</style>
