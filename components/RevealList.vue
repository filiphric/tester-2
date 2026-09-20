<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const props = defineProps<{
  items: readonly string[]
  reveal: 1 | 2 | 3
}>()

const { $clicks } = useSlideContext()

function isCovered(index: number) {
  return index + 1 > props.reveal || (index + 1 === props.reveal && $clicks.value < 1)
}
</script>

<template>
  <ol class="reveal-list">
    <li v-for="(item, index) in items" :key="item">
      <span
        class="reveal-list-text slidev-vclick-target"
        :class="{ 'slidev-vclick-hidden': isCovered(index) }"
        :aria-hidden="isCovered(index)"
      >{{ item }}</span>
      <span v-if="isCovered(index)" class="reveal-list-cover" aria-hidden="true">
        <span>{{ item }}</span>
      </span>
    </li>
  </ol>
</template>

<style scoped>
.reveal-list {
  list-style: decimal;
  font-size: var(--reveal-list-font-size, 44px);
  align-self: center;
  width: 100%;
  max-width: 760px;
  margin-top: 40px;
  gap: 32px;
}

.reveal-list > li {
  position: relative;
  font-size: inherit;
  line-height: 1.6;
  width: fit-content;
  max-width: 100%;
  padding-left: 0;
}

.reveal-list > li::marker {
  color: var(--signal);
  font-weight: 600;
}

.reveal-list-text {
  display: block;
}

.reveal-list-cover {
  position: absolute;
  inset: 0;
}

.reveal-list-cover > span {
  color: transparent;
  background: var(--ink-2);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
