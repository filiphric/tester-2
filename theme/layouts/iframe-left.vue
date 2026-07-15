<template>
  <div class="filip-slide lyt-iframe-left">
    <div :style="{ position: 'absolute', inset: 0, zIndex: 1, display: 'grid', gridTemplateColumns: '1.15fr .85fr' }">
      <div :style="{ padding: '64px 0 64px 96px', display: 'flex' }">
        <div class="embed" :style="{ flex: 1, boxShadow: 'var(--shadow-2)' }">
          <div class="bar">
            <span class="b" /><span class="b" /><span class="b" />
            <span class="u">{{ label }}</span>
          </div>
          <iframe v-if="url" :src="url" />
          <div v-else class="body">
            <span class="pl">▸</span>
            <span class="t">EMBED — live demo / video / map</span>
            <span class="d">{{ placeholderUrl }}</span>
          </div>
        </div>
      </div>
      <div class="col" :style="{ padding: '96px 76px 96px 56px' }">
        <p v-if="kicker" class="kick">{{ kicker }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  url: { type: String, default: '' },
  label: { type: String, default: '▸ embedded · iframe' },
  placeholderUrl: { type: String, default: 'https://your-url.example' },
  kicker: { type: String, default: '▸ Live' },
})
</script>
