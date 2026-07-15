<!-- Full-bleed chat/UI screenshot on a pure-black field — shows the image whole
     (object-fit: contain) so edge-anchored text is never cropped. -->
<template>
  <div class="filip-slide lyt-screenshot">
    <img v-if="image" :src="image" class="shot" :alt="caption || ''" />
    <p v-if="kicker" class="kick">{{ kicker }}</p>
    <FilipFoot :left="footerLeft" :right="footerRight" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: { type: String, default: '' },
  caption: { type: String, default: '' },
  kicker: { type: String, default: '' },
  footerLeft: { type: String, default: '' },
  footerRight: { type: String, default: '' },
})
</script>

<style>
.lyt-screenshot {
  /* base .filip-slide already sets position:absolute; inset:0 — keep it so the
     slide fills its parent; only override the look. */
  background: #000;
  color: var(--screen-ink);
  overflow: hidden;
}
.lyt-screenshot .shot {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.lyt-screenshot .kick {
  position: absolute; top: 40px; left: 48px; z-index: 3;
  font-family: var(--font-mono); font-size: 18px; font-weight: 600;
  letter-spacing: .1em; text-transform: uppercase; color: var(--crt-amber); margin: 0;
}
.lyt-screenshot .foot { color: var(--mac-platinum); border-top-color: rgba(244,240,228,.25); }
</style>
