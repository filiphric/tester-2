<script setup lang="ts">
import { agenda } from '../shared/agenda'
import RevealList from './RevealList.vue'

defineProps<{ reveal: 1 | 2 | 3 }>()
</script>

<template>
  <RevealList class="things-to-abandon" :items="agenda.abandon.items" :reveal="reveal" />
</template>

<style scoped>
.reveal-list {
  margin-top: 20px;
  font-size: var(--reveal-list-font-size, 38px);
}
</style>