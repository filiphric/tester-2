<script setup lang="ts">
import { useReactions } from '../composables/useReactions'
import { useFloatingReactions } from '../composables/useFloatingReactions'
import ReactionEffects from './ReactionEffects.vue'

const props = defineProps<{ host: string, room: string }>()
const { reactions, add } = useFloatingReactions()
const { status } = useReactions({ host: props.host, room: () => props.room, enabled: true, onReaction: add })
</script>

<template>
  <ReactionEffects :reactions="reactions" />
  <span v-if="status !== 'connected'" class="reaction-connection" role="status">Reactions {{ status === 'reconnecting' ? 'reconnecting…' : 'connecting…' }}</span>
</template>

<style scoped>
.reaction-connection { position: absolute; right: 24px; bottom: 10px; font: 12px var(--font-mono, monospace); color: var(--ink); background: var(--paper); padding: 3px 8px; pointer-events: none; z-index: 61; }
</style>
