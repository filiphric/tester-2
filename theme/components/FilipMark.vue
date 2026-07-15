<!-- The FILIP wordmark: signal-red ▸ glyph box + Silkscreen wordmark. -->
<template>
  <div class="mark" :class="pos">
    <span class="ic">▸</span><span class="nm">{{ brand }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  /** position: 'tl' | 'tr' | 'inline' */
  pos: { type: String, default: 'tr' },
  /** the wordmark text */
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
