<template>
  <div class="filip-slide lyt-intro">
    <FilipMark :pos="mark" :brand="brand" v-if="mark !== 'none'" />
    <div class="pad mid" :style="{ gap: '24px' }">
      <p v-if="kicker" class="kick">{{ kicker }}</p>
      <slot />
      <div v-if="meta && meta.length" class="meta" :style="{ marginTop: '16px' }">
        <div v-for="(m, i) in meta" :key="i">
          <div class="k">{{ m.k }}</div>
          <div class="v">{{ m.v }}</div>
        </div>
      </div>
    </div>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  kicker: { type: String, default: '▸ Series introduction' },
  footerLeft: { type: String, default: '▸ FILIP' },
  footerRight: { type: String, default: 'Introduction' },
  mark: { type: String, default: 'tr' },
  brand: { type: String, default: 'FILIP HRIC' },
  /** mono meta row: [{ k, v }, ...] */
  meta: { type: Array as () => { k: string; v: string }[], default: () => [] },
})
</script>
