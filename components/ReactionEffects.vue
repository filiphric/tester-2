<script setup lang="ts">
import type { FloatingReaction } from '../composables/useFloatingReactions'

defineProps<{ reactions: FloatingReaction[] }>()
</script>

<template>
  <div class="reaction-effects" aria-hidden="true">
    <span
      v-for="reaction in reactions"
      :key="reaction.id"
      class="floating-reaction"
      :style="{ left: `calc(${reaction.x / 100} * (100% - 1.2em))`, fontSize: `${reaction.size}px`, '--drift': `${reaction.drift}px` }"
    >{{ reaction.emoji }}</span>
  </div>
</template>

<style scoped>
.reaction-effects { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 60; }
.floating-reaction { position: absolute; bottom: 28px; width: 1.2em; text-align: center; line-height: 1.2; user-select: none; filter: drop-shadow(0 2px 2px #0003); animation: reaction-float 2.5s ease-out forwards; }
@keyframes reaction-float {
  0% { opacity: 0; transform: translate(0, 0) scale(.7); }
  12% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0; transform: translate(var(--drift), -420px) scale(1.15); }
}
@media (prefers-reduced-motion: reduce) {
  .floating-reaction { animation: reaction-fade 2.5s linear forwards; }
  @keyframes reaction-fade { 0%, 70% { opacity: 1; } 100% { opacity: 0; } }
}
@media print { .reaction-effects { display: none; } }
</style>
