<template>
  <div class="filip-slide lyt-iframe">
    <div :style="{ position: 'absolute', inset: 0, zIndex: 1, padding: '56px 64px', boxSizing: 'border-box', display: 'flex' }">
      <div class="embed" :style="{ flex: 1, boxShadow: 'var(--shadow-3)' }">
        <div class="bar">
          <span class="b" /><span class="b" /><span class="b" />
          <span class="u">{{ label }}</span>
        </div>
        <iframe v-if="url" :src="url" />
        <div v-else class="body">
          <span class="pl">▸</span>
          <span class="t">EMBED — full-frame web page / app</span>
          <span class="d">{{ placeholderUrl }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  /** live URL to embed; omit to show a placeholder */
  url: { type: String, default: '' },
  label: { type: String, default: '▸ embedded · iframe · fullscreen' },
  placeholderUrl: { type: String, default: 'https://your-url.example' },
})
</script>
