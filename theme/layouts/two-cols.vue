<template>
  <div class="filip-slide lyt-two-cols">
    <div class="pad">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <h1 v-if="title" :style="{ margin: '14px 0 20px' }">{{ title }}</h1>
      <hr v-if="title" class="rule" />
      <div class="filip-cols-box">
        <div class="c"><slot /></div>
        <div class="c"><slot name="right" /></div>
      </div>
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  footerLeft: { type: String, default: '' },
  footerRight: { type: String, default: '' },
  mark: { type: String, default: 'tr' },
  brand: { type: String, default: 'FILIP HRIC' },
})
</script>
