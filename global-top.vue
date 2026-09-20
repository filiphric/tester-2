<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useNav } from '@slidev/client'
import { useReactionSession } from './composables/useReactionSession'
import { useReactionVisibility } from './composables/useReactionVisibility'

const ReactionOverlay = defineAsyncComponent(() => import('./components/ReactionOverlay.vue'))
const route = useRoute()
const { isPrintMode } = useNav()
const { host, room, validRoom } = useReactionSession()
const { enabled } = useReactionVisibility(host, room)
const active = computed(() => enabled.value && host && validRoom.value && !isPrintMode.value && ['play', 'presenter'].includes(String(route.name)))
</script>

<template>
  <ReactionOverlay v-if="active" :key="room" :host="host" :room="room" />
</template>
