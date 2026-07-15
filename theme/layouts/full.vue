<template>
  <div class="filip-slide lyt-full">
    <div class="ground" />
    <div class="content">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '' },
})
</script>
