<script setup lang="ts">
import { computed, ref } from 'vue'
import { reactionOptions, type Reaction } from '../shared/reactions'
import { useReactionSession } from '../composables/useReactionSession'
import { useReactions } from '../composables/useReactions'
import { useFloatingReactions } from '../composables/useFloatingReactions'
import ReactionEffects from '../components/ReactionEffects.vue'
import AudienceNav from '../components/AudienceNav.vue'

const { host, room, validRoom } = useReactionSession()
const { status, send } = useReactions({ host, room, enabled: validRoom })
const { reactions, add } = useFloatingReactions()
const feedback = ref('Tap a reaction.')
const connected = computed(() => validRoom.value && status.value === 'connected')
const connectionLabel = computed(() => !validRoom.value ? 'Invalid session link'
  : status.value === 'unconfigured' ? 'Reactions aren’t available yet'
    : connected.value ? 'Connected to the talk'
      : status.value === 'reconnecting' ? 'Connection lost. Reconnecting…' : 'Connecting to the talk…')

function react(emoji: Reaction) {
  if (send(emoji)) {
    add(emoji)
    feedback.value = `${emoji} Reaction sent!`
  }
  else {
    feedback.value = connected.value ? 'Give it a moment, then react again.' : 'Reconnecting. Try again in a moment.'
  }
}
</script>

<template>
  <main class="live-page">
    <div class="live-shell">
      <header class="live-header">
        <span class="live-brand">▸ FILIP HRIC</span>
        <span class="live-tag">LIVE / TESTER 2.0</span>
      </header>
      <AudienceNav />
      <section aria-labelledby="live-title">
        <h1 id="live-title">What are you<br><span class="ds-mark">thinking?</span></h1>
        <div class="reaction-grid">
          <button
            v-for="option in reactionOptions"
            :key="option.emoji"
            type="button"
            :disabled="!connected"
            :aria-label="`Send ${option.label} reaction`"
            @click="react(option.emoji)"
          >
            <span class="reaction-emoji" aria-hidden="true">{{ option.emoji }}</span>
            <span class="reaction-label">{{ option.label }}</span>
          </button>
        </div>
        <div class="live-status-row">
          <p class="live-feedback" aria-live="polite" aria-atomic="true">{{ feedback }}</p>
          <div class="live-connection" :data-connected="connected" role="status">
            <span class="connection-dot" aria-hidden="true" />{{ connectionLabel }}
          </div>
        </div>
      </section>
      <footer class="live-footer"><span>TESTER 2.0</span><span>Session / {{ room }}</span></footer>
    </div>
    <div class="live-effects"><ReactionEffects :reactions="reactions" /></div>
  </main>
</template>

<style scoped>
.live-page { position: fixed; inset: 0; overflow-y: auto; background: var(--paper, #f4f0e4); color: var(--ink, #16140f); font-family: var(--font-body, sans-serif); }
.live-shell { width: min(100%, 660px); min-height: 100%; margin: auto; padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom)); display: flex; flex-direction: column; }
.live-header, .live-footer { display: flex; justify-content: space-between; gap: 16px; font-family: var(--font-mono, monospace); }
.live-header { align-items: center; border-bottom: 2px solid var(--ink); padding-bottom: 20px; }
.live-brand { font-weight: 800; font-size: 15px; }
.live-tag { font-size: 10px; letter-spacing: .05em; text-align: right; }
h1 { font-size: clamp(44px, 9vw, 72px); font-weight: 900; line-height: 1.03; letter-spacing: -.045em; margin: 36px 0 28px; }
.live-status-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; padding-top: 24px; min-height: 64px; align-items: start; }
.live-connection { display: flex; align-items: center; justify-content: flex-end; gap: 8px; font: 11px/1.5 var(--font-mono, monospace); min-height: 18px; text-align: right; }
.connection-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--signal); flex-shrink: 0; }
[data-connected="true"] .connection-dot { background: var(--braun-green); }
.reaction-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.reaction-grid button { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; min-height: 112px; padding: 16px 4px; border: 2px solid var(--ink); background: var(--card); box-shadow: 3px 3px 0 var(--ink); touch-action: manipulation; user-select: none; -webkit-tap-highlight-color: transparent; cursor: pointer; }
.reaction-grid button:enabled:hover { background: var(--highlighter); }
.reaction-grid button:enabled:active { transform: translate(3px, 3px); box-shadow: none; }
.reaction-grid button:focus-visible { outline: 3px solid var(--signal); outline-offset: 5px; }
.reaction-grid button:disabled { opacity: .45; cursor: not-allowed; }
.reaction-emoji { font-size: 38px; line-height: 1.2; }
.reaction-label { font: 10px var(--font-mono, monospace); font-weight: 600; }
.live-feedback { margin: 0; font: 12px/1.5 var(--font-mono, monospace); color: var(--ink-2); }
.live-footer { flex-wrap: wrap; margin-top: auto; padding-top: 24px; padding-bottom: 4px; font-size: 9px; line-height: 1.5; color: var(--ink-2); overflow-wrap: anywhere; }
.live-effects { position: fixed; inset: 0; pointer-events: none; }
@media (max-width: 360px) { .live-shell { padding-inline: 16px; } .reaction-grid { gap: 10px; } .live-tag { max-width: 95px; } }
</style>
