<script setup lang="ts">
import { agenda } from '../shared/agenda'
import RevealList from './RevealList.vue'

defineProps<{ reveal: 1 | 2 | 3 }>()
</script>

<template>
  <RevealList class="our-strengths" :items="agenda.strengths.items" :reveal="reveal" />
</template>
