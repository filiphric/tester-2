<template>
  <div class="filip-slide lyt-quote" :class="{ 'has-image': !!image }">
    <div v-if="image" class="filip-split quote-split">
      <div class="col quote-col">
        <div class="quote-glyph">&ldquo;</div>
        <slot />
        <div v-if="author" class="attribution">
          <span class="sq" />
          <span class="who">{{ author }}</span>
        </div>
      </div>
      <div class="quote-photo">
        <img :src="image" :alt="author || ''" />
      </div>
    </div>
    <div v-else class="pad mid" :style="{ gap: '36px' }">
      <div class="quote-glyph">&ldquo;</div>
      <slot />
      <div v-if="author" class="attribution">
        <span class="sq" />
        <span class="who">{{ author }}</span>
      </div>
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  author: { type: String, default: '' },
  image: { type: String, default: '' },
  footerLeft: { type: String, default: '' },
  footerRight: { type: String, default: '' },
  mark: { type: String, default: 'tr' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
