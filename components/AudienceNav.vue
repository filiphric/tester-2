<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAudienceLinks } from '../composables/useAudienceLinks'

const { liveRoute, sourcesRoute } = useAudienceLinks()
</script>

<template>
  <nav class="audience-nav" aria-label="Audience pages">
    <RouterLink :to="liveRoute">Live reactions</RouterLink>
    <RouterLink :to="sourcesRoute">Sources</RouterLink>
  </nav>
</template>

<style scoped>
.audience-nav { display: flex; gap: 24px; padding-top: 22px; font: 600 14px var(--font-body, sans-serif); }
a { padding: 6px 0; color: var(--ink-2); text-decoration: none; border-bottom: 3px solid transparent; }
a[aria-current="page"] { color: var(--ink); border-color: var(--signal); }
a:hover { color: var(--signal-deep); }
a:focus-visible { outline: 3px solid var(--signal); outline-offset: 5px; }
</style>
