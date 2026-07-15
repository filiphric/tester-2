<!-- Editorial footer rule: left / right mono labels separated by a 2px ink rule. -->
<template>
  <div v-if="left || right" class="foot">
    <span>{{ left }}</span>
    <span>{{ right }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  left: { type: String, default: '' },
  right: { type: String, default: '' },
})
</script>
