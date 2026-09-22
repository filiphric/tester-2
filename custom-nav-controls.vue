<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useReactionSession } from './composables/useReactionSession'
import { useReactionVisibility } from './composables/useReactionVisibility'

const controls = ref<HTMLDivElement>()
const { host, room, validRoom, audienceUrl } = useReactionSession()
const { enabled, toggle } = useReactionVisibility(host, room)
const reactionsPassphrase = 'K2jk-1dns'

function revealSlideControls(event: KeyboardEvent) {
  // Use the physical key because Option can change the character on macOS.
  if (event.code !== 'KeyP' || !event.metaKey || !event.altKey || !event.ctrlKey || event.shiftKey)
    return

  event.preventDefault()
  if (event.repeat)
    return

  // Slidev reveals its toolbar through :focus-within.
  controls.value?.closest('nav')?.querySelector<HTMLButtonElement>('button:not([disabled]):not(.disabled)')?.focus({ preventScroll: true })
}

onMounted(() => window.addEventListener('keydown', revealSlideControls))
onUnmounted(() => window.removeEventListener('keydown', revealSlideControls))

function toggleReactions(event: MouseEvent) {
  // Pointer clicks should return arrow-key control to the presentation.
  if (event.detail > 0)
    (event.currentTarget as HTMLElement).blur()

  const passphrase = window.prompt('Enter the passphrase to toggle reactions:')
  if (passphrase === null)
    return
  if (passphrase !== reactionsPassphrase) {
    window.alert('Incorrect passphrase.')
    return
  }
  toggle()
}
</script>

<template>
  <div ref="controls" class="reaction-controls">
    <button
      type="button"
      :disabled="!host || !validRoom"
      :aria-pressed="enabled"
      :title="!host ? 'Configure the reaction service to enable live reactions' : !validRoom ? 'Invalid reaction room' : 'Toggle live reactions on the slides'"
      @click.stop="toggleReactions"
    ><span aria-hidden="true">👏</span> Reactions {{ enabled ? 'on' : 'off' }}</button>
    <a v-if="host && validRoom" :href="audienceUrl" target="_blank" rel="noopener noreferrer" title="Open audience reaction page">Audience ↗</a>
  </div>
</template>

<style>
/* Keep the slide toolbar hidden until keyboard focus reveals it. */
#slide-container > div:has(> nav .reaction-controls):not(:focus-within) {
  opacity: 0 !important;
  pointer-events: none;
}
</style>

<style scoped>
.reaction-controls { display: flex; align-items: center; gap: 10px; padding: 0 8px; font-size: 12px; white-space: nowrap; }
button { border: 1px solid currentColor; padding: 4px 8px; border-radius: 4px; }
button[aria-pressed="true"] { background: #ffe234; color: #16140f; }
button:disabled { opacity: .45; cursor: not-allowed; }
button:focus-visible, a:focus-visible { outline: 2px solid #e8392b; outline-offset: 3px; }
</style>
