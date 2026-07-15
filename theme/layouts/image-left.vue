<template>
  <div class="filip-slide lyt-image-left">
    <div class="filip-split" :style="{ gridTemplateColumns: '1fr 1fr' }">
      <div class="ph" :class="placeholder" :style="{ borderRight: '2px solid var(--ink)' }">
        <img v-if="image" :src="image" class="img-fill" :alt="caption || ''" />
        <div v-else class="cap">
          <span class="pl">▸</span>
          <span class="t">{{ caption || 'IMAGE — drop your still here' }}</span>
          <span class="d">{{ dim }}</span>
        </div>
      </div>
      <div class="col">
        <p v-if="kicker" class="kick">{{ kicker }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: { type: String, default: '' },
  caption: { type: String, default: '' },
  dim: { type: String, default: '1600 × 1600 · warm, lo-fi' },
  placeholder: { type: String, default: 'sega' },
  kicker: { type: String, default: '' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
