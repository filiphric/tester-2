<script setup lang="ts">
import { useReactionSession } from './composables/useReactionSession'
import { useReactionVisibility } from './composables/useReactionVisibility'

const { host, room, validRoom, audienceUrl } = useReactionSession()
const { enabled, toggle } = useReactionVisibility(host, room)

function toggleReactions(event: MouseEvent) {
  toggle()
  // Pointer clicks should return arrow-key control to the presentation.
  if (event.detail > 0)
    (event.currentTarget as HTMLElement).blur()
}
</script>

<template>
  <div class="reaction-controls">
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

<style scoped>
.reaction-controls { display: flex; align-items: center; gap: 10px; padding: 0 8px; font-size: 12px; white-space: nowrap; }
button { border: 1px solid currentColor; padding: 4px 8px; border-radius: 4px; }
button[aria-pressed="true"] { background: #ffe234; color: #16140f; }
button:disabled { opacity: .45; cursor: not-allowed; }
button:focus-visible, a:focus-visible { outline: 2px solid #e8392b; outline-offset: 3px; }
</style>
