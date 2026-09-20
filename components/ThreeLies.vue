<script setup lang="ts">
import { agenda } from '../shared/agenda'
import RevealList from './RevealList.vue'

defineProps<{ reveal: 1 | 2 | 3 }>()
</script>

<template>
  <RevealList class="three-lies" :items="agenda.lies.items" :reveal="reveal" />
</template>

<style scoped>
.three-lies {
  --reveal-list-font-size: var(--three-lies-font-size, 44px);
}
</style>
