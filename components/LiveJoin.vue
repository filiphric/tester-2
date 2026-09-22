<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useNav } from '@slidev/client'
import { useReactionSession } from '../composables/useReactionSession'
import { useReactionVisibility } from '../composables/useReactionVisibility'

const { isPrintMode } = useNav()
const { host, room, validRoom, joinUrl, publicJoinUrl } = useReactionSession()
const { enabled } = useReactionVisibility(host, room)
const visible = computed(() => enabled.value && host && validRoom.value && publicJoinUrl.value && !isPrintMode.value)
const qrCode = ref('')
const shortUrl = computed(() => {
  const url = new URL(joinUrl.value)
  return `${url.host}${url.pathname}`
})

watch([visible, joinUrl], async ([show, url], _, onCleanup) => {
  qrCode.value = ''
  if (!show)
    return
  let cancelled = false
  onCleanup(() => { cancelled = true })
  try {
    const { default: QRCode } = await import('qrcode')
    const result = await QRCode.toDataURL(url, { width: 240, margin: 2, color: { dark: '#16140f', light: '#fbf9f1' } })
    if (!cancelled)
      qrCode.value = result
  }
  catch { /* The audience link stays usable if QR generation fails. */ }
}, { immediate: true })
</script>

<template>
  <a v-if="visible" class="live-join" :href="joinUrl" target="_blank" rel="noopener noreferrer" @click.stop>
    <span class="join-title">REACT LIVE ↗</span>
    <img v-if="qrCode" :src="qrCode" width="150" height="150" alt="Scan to send reactions during this talk">
    <span class="join-url">{{ shortUrl }}</span>
  </a>
</template>

<style scoped>
.live-join { position: fixed; right: 48px; top: 40px; display: flex; flex-direction: column; align-items: center; gap: 8px; width: 184px; padding: 12px; border: 2px solid var(--ink); background: var(--card); box-shadow: 4px 4px 0 var(--ink); text-decoration: none; color: var(--ink) !important; }
.join-title { font: 700 13px var(--font-mono, monospace); letter-spacing: .08em; }
.join-url { font: 10px/1.4 var(--font-mono, monospace); text-align: center; overflow-wrap: anywhere; max-width: 100%; }
.live-join:focus-visible { outline: 3px solid var(--signal); outline-offset: 4px; }
@media print { .live-join { display: none; } }
</style>
