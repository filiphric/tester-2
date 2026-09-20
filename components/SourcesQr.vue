<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useAudienceLinks } from '../composables/useAudienceLinks'

const { sourcesRoute, publicSourcesUrl } = useAudienceLinks()
const qrCode = ref('')

watch(publicSourcesUrl, async (url, _, onCleanup) => {
  qrCode.value = ''
  let cancelled = false
  onCleanup(() => { cancelled = true })
  try {
    const { default: QRCode } = await import('qrcode')
    const result = await QRCode.toDataURL(url, {
      width: 320,
      margin: 4,
      errorCorrectionLevel: 'M',
      color: { dark: '#16140f', light: '#fbf9f1' },
    })
    if (!cancelled)
      qrCode.value = result
  }
  catch { /* Keep the clickable source link available if QR generation fails. */ }
}, { immediate: true })
</script>

<template>
  <RouterLink
    class="sources-qr"
    :to="sourcesRoute"
    :data-qr-url="publicSourcesUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open the talk's sources"
    @click.stop
  >
    <span>SOURCES ↗</span>
    <img v-if="qrCode" :src="qrCode" width="144" height="144" alt="Scan to view the talk's sources">
  </RouterLink>
</template>

<style scoped>
.sources-qr { position: absolute; right: 96px; top: 24px; display: flex; flex-direction: column; align-items: center; gap: 2px; width: 164px; padding: 8px; border: 2px solid var(--ink); background: var(--card); text-decoration: none; color: var(--ink) !important; }
span { font: 700 13px/1.3 var(--font-mono, monospace); letter-spacing: .07em; }
img { display: block; width: 144px; height: 144px; }
.sources-qr:focus-visible { outline: 3px solid var(--signal); outline-offset: 5px; }
</style>
