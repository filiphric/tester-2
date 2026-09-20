<script setup lang="ts">
import { agenda, type AgendaSection } from '../shared/agenda'

defineProps<{
  revealed?: Partial<Record<AgendaSection, number[]>>
}>()
</script>

<template>
  <div class="agenda-columns">
    <section v-for="(column, id) in agenda" :key="id">
      <h2><Highlighter>{{ column.title }}</Highlighter></h2>
      <ol>
        <li
          v-for="(item, index) in column.items"
          :key="item"
          :class="{ covered: !revealed?.[id]?.includes(index + 1) }"
        >
          <span :aria-hidden="!revealed?.[id]?.includes(index + 1)">{{ item }}</span>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.agenda-columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-top: 24px;
}

.agenda-columns > section {
  position: relative;
}

.agenda-columns > section + section::before {
  content: '';
  position: absolute;
  top: 108px;
  bottom: 0;
  left: -15px;
  width: 2px;
  background: var(--rule-strong);
  opacity: 0.25;
}

.agenda-columns ol {
  list-style: decimal;
  font-size: 28px;
  gap: 24px;
}

.agenda-columns li {
  font-size: 28px;
  width: fit-content;
  max-width: 100%;
  padding-left: 0;
}

.agenda-columns li::marker {
  color: var(--signal);
  font-weight: 600;
}

.agenda-columns li.covered > span {
  color: transparent;
  background: var(--ink-2);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.agenda-columns h2 {
  font-size: 34px;
  line-height: 1.1;
  min-height: 76px;
  margin: 0 0 32px;
  text-align: center;
}
</style>
