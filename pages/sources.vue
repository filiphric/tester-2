<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AudienceNav from '../components/AudienceNav.vue'
import { useAudienceLinks } from '../composables/useAudienceLinks'
import { sourceGroups } from '../shared/sources'

const { liveRoute } = useAudienceLinks()
</script>

<template>
  <main class="sources-page">
    <div class="sources-shell">
      <header class="sources-header">
        <span class="sources-brand">▸ FILIP HRIC</span>
        <span class="sources-tag">TESTER 2.0</span>
      </header>
      <AudienceNav />
      <div class="sources-intro">
        <h1 class="ds-mark inline">Sources</h1>
      </div>

      <section v-for="group in sourceGroups" :key="group.id" :aria-labelledby="group.id" class="source-group">
        <p class="source-slides">{{ group.slides }}</p>
        <h2 :id="group.id">{{ group.title }}</h2>
        <p class="source-summary">{{ group.summary }}</p>
        <p class="source-period">{{ group.period }}</p>
        <p class="source-note">{{ group.note }}</p>
        <ul class="source-list">
          <li v-for="link in group.links" :key="link.url">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              <span class="source-title">{{ link.title }} <span aria-hidden="true">↗</span></span>
              <span class="source-publisher">{{ link.publisher }}</span>
            </a>
          </li>
        </ul>
      </section>

      <footer class="sources-footer">
        <RouterLink :to="liveRoute" class="back-to-live">← Back to live reactions</RouterLink>
        <span>Sources retrieved 17–20 September 2026</span>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.sources-page { position: fixed; inset: 0; overflow-y: auto; background: var(--paper, #f4f0e4); color: var(--ink, #16140f); font-family: var(--font-body, sans-serif); }
.sources-shell { width: min(100%, 760px); margin: auto; padding: max(24px, env(safe-area-inset-top)) 24px max(32px, env(safe-area-inset-bottom)); }
.sources-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 2px solid var(--ink); padding-bottom: 20px; font-family: var(--font-mono, monospace); }
.sources-brand { font-weight: 800; font-size: 15px; }
.sources-tag { font-size: 10px; letter-spacing: .05em; }
.sources-kicker, .source-slides { font: 700 10px/1.5 var(--font-mono, monospace); letter-spacing: .1em; color: var(--signal-deep); }
.sources-kicker { margin: 36px 0 18px; }
h1 { font-size: clamp(52px, 9vw, 76px); font-weight: 900; line-height: 1.03; letter-spacing: -.045em; margin: 0; }
mark { background: var(--highlighter); color: inherit; padding: 0 6px 2px; margin-left: -6px; }
.sources-description { max-width: 48ch; margin: 24px 0 38px; font-size: 17px; line-height: 1.55; color: var(--ink-2); }
.source-group { border-top: 2px solid var(--ink); padding-top: 24px; margin-top: 32px; }
.source-slides { margin: 0 0 10px; }
h2 { font-size: 30px; line-height: 1.15; font-weight: 800; letter-spacing: -.025em; margin: 0 0 16px; }
.source-summary { font-size: 20px; font-weight: 700; line-height: 1.4; margin: 0 0 4px; }
.source-period { font: 12px/1.6 var(--font-mono, monospace); margin: 0 0 18px; }
.source-note { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin: 0 0 20px; }
.source-list { list-style: none; margin: 0; padding: 0; }
.source-list li { border-top: 1px solid var(--rule); }
.source-list a { display: flex; flex-direction: column; gap: 7px; padding: 18px 0; text-decoration: none; color: var(--ink); }
.source-title { font-size: 18px; font-weight: 700; line-height: 1.4; }
.source-title span { color: var(--signal-deep); }
.source-publisher { font-size: 12px; line-height: 1.5; color: var(--ink-2); }
.source-list a:hover .source-title { text-decoration: underline; text-underline-offset: 4px; }
a:focus-visible { outline: 3px solid var(--signal); outline-offset: 5px; }
.comparison-note { margin-top: 36px; padding: 4px 0 4px 20px; border-left: 4px solid var(--signal); }
.comparison-note h2 { font-size: 23px; }
.comparison-note p { font-size: 15px; line-height: 1.65; color: var(--ink-2); margin: 14px 0 0; }
.sources-footer { display: flex; flex-direction: column; gap: 26px; border-top: 2px solid var(--ink); margin-top: 40px; padding-top: 26px; }
.back-to-live { align-self: flex-start; color: var(--ink); font-size: 16px; font-weight: 700; text-decoration: underline; text-underline-offset: 5px; }
.sources-footer > span { font: 10px/1.5 var(--font-mono, monospace); color: var(--ink-2); }
@media (max-width: 360px) { .sources-shell { padding-inline: 16px; } .source-title { font-size: 17px; } }
</style>
