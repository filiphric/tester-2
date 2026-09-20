<template>
  <div class="filip-slide lyt-image">
    <div class="ph" :class="[placeholder, { raw }]" :style="{ position: 'absolute', inset: 0, zIndex: 1 }">
      <img v-if="image" :src="image" class="img-fill" :alt="caption || ''" />
      <div v-else class="cap">
        <span class="pl">▸</span>
        <span class="t">{{ caption || 'IMAGE — full-bleed background still' }}</span>
        <span class="d">{{ dim }}</span>
      </div>
    </div>
    <FilipMark :pos="mark" :brand="brand" v-if="mark !== 'none'" />
    <div class="overlay">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  /** path to a real image; falls back to a retro placeholder field */
  image: { type: String, default: '' },
  caption: { type: String, default: '' },
  dim: { type: String, default: '2400 × 1350' },
  /** placeholder color: '' | 'rust' | 'sega' | 'screen' | 'amber' */
  placeholder: { type: String, default: 'rust' },
  kicker: { type: String, default: '' },
  mark: { type: String, default: 'tl' },
  brand: { type: String, default: 'FILIP HRIC' },
  raw: { type: Boolean, default: false },
})
</script>
