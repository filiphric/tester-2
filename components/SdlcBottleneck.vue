<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const hidden = { opacity: 0, x: -36, scale: 0.55 }
const gone = { opacity: 0, x: 28, scale: 0.55 }
function show(delay = 0) {
  return { opacity: 1, x: 0, scale: 1, transition: { type: 'tween', ease: 'easeOut', duration: 420, delay } }
}

const INK = '#16140F'
const PAPER = '#F4F0E4'
const CARD = '#FBF9F1'
const INK2 = '#45413A'
const INK3 = '#78736A'
const SIG = '#E8392B'
const RULE = '#CFC8B4'

const W = 1920
const GAP = 40
const BOX_Y = 330
const BOX_H = 176
const LINK_Y = BOX_Y + BOX_H / 2 - 1
const BASE = 812
const PX_PER_DAY = 15
const BAR_MIN = 26

const STAGES = [
  { i: '01', name: 'PLAN', d0: 2, d1: 2 },
  { i: '02', name: 'DEVELOP', d0: 14, d1: 3 },
  { i: '03', name: 'REVIEW', d0: 5, d1: 8 },
  { i: '04', name: 'TEST', d0: 4, d1: 7 },
  { i: '05', name: 'RELEASE', d0: 2, d1: 1 },
] as const

const { $clicks } = useSlideContext()
const scene = computed(() => Math.min(4, Math.max(0, $clicks.value ?? 0)))

const mix = computed(() => (scene.value >= 3 ? 1 : 0))
const layout = computed(() => {
  const days = STAGES.map(s => s.d0 + (s.d1 - s.d0) * mix.value)
  const widths = days.map(d => 150 + d * 26)
  const total = widths.reduce((a, b) => a + b, 0) + GAP * (STAGES.length - 1)
  let x = (W - total) / 2
  const boxes = widths.map((w, k) => {
    const b = { x, w, cx: x + w / 2, days: days[k] }
    x += w + GAP
    return b
  })
  return { boxes, days }
})

const qDev = computed(() => {
  if (scene.value === 1) return 4
  if (scene.value === 2) return 7
  return 0
})
const qRev = computed(() => {
  if (scene.value === 3) return 3
  if (scene.value === 4) return 6
  return 0
})
const qTest = computed(() => (scene.value === 4 ? 3 : 0))

const hot = computed(() => [
  0,
  scene.value === 1 || scene.value === 2 ? 1 : 0,
  scene.value === 4 ? 1 : 0,
  scene.value === 4 ? 1 : 0,
  0,
])
</script>

<template>
  <div class="sdlc">
    <div class="sdlc-stage">
      <div class="grid" />

      <template v-for="(b, k) in layout.boxes" :key="'row-' + k">
        <div
          v-if="k < 4"
          class="link"
          :class="{ in: scene >= 0 }"
          :style="{
            left: `${b.x + b.w + 8}px`,
            top: `${LINK_Y}px`,
            width: `${GAP - 12}px`,
            animationDelay: `${0.35 + (k + 0.5) * 0.52}s`,
          }"
        >
          <div class="link-line" />
          <div class="link-head" />
        </div>

        <div
          class="box"
          :class="{ hot: hot[k] }"
          :style="{
            left: `${b.x}px`,
            top: `${BOX_Y}px`,
            width: `${b.w}px`,
            height: `${BOX_H}px`,
            animationDelay: `${0.35 + k * 0.52}s`,
          }"
        >
          <div class="box-spine" />
          <div class="box-copy">
            <div class="idx">{{ STAGES[k].i }}</div>
            <div class="name">{{ STAGES[k].name }}</div>
            <div class="sub">{{ Math.round(b.days) }} {{ Math.round(b.days) === 1 ? 'DAY' : 'DAYS' }}</div>
          </div>
        </div>

        <div
          class="bar"
          :class="{ hot: hot[k] }"
          :style="{
            left: `${b.cx - 29}px`,
            top: `${BASE - (BAR_MIN + b.days * PX_PER_DAY)}px`,
            width: '58px',
            animationDelay: `${0.35 + (k + 0.9) * 0.52}s`,
          }"
        >
          <div class="bar-fill" :style="{ height: `${BAR_MIN + b.days * PX_PER_DAY}px` }" />
          <div class="bar-val">{{ Math.round(b.days) }} d</div>
          <div class="bar-lab">TIME IN STAGE</div>
        </div>
      </template>

      <div
        class="pile"
        :style="{ left: `${layout.boxes[1].x + layout.boxes[1].w - 18}px`, top: `${LINK_Y - 12}px` }"
      >
        <div
          v-for="i in 7"
          :key="'qd-' + i"
          v-motion
          class="token"
          :style="{
            left: `${-((i - 1) % 3 + 1) * 32}px`,
            top: `${Math.floor((i - 1) / 3) * 32}px`,
          }"
          :initial="hidden"
          :enter="hidden"
          :click-1="i <= 4 ? show((i - 1) * 90) : hidden"
          :click-2="show(i <= 4 ? 0 : (i - 5) * 90)"
          :click-3="{ ...gone, transition: { type: 'tween', ease: 'easeIn', duration: 320, delay: (7 - i) * 55 } }"
          :click-4="gone"
        />
      </div>
      <div
        class="q-lab"
        :style="{
          left: `${layout.boxes[1].x + layout.boxes[1].w - 168}px`,
          top: `${LINK_Y - 44}px`,
          opacity: qDev > 0 ? 1 : 0,
        }"
      >
        QUEUE · {{ qDev }} WAITING
      </div>

      <div
        class="pile"
        :style="{ left: `${layout.boxes[2].x + layout.boxes[2].w - 18}px`, top: `${LINK_Y - 12}px` }"
      >
        <div
          v-for="i in 6"
          :key="'qr-' + i"
          v-motion
          class="token"
          :style="{
            left: `${-((i - 1) % 3 + 1) * 32}px`,
            top: `${Math.floor((i - 1) / 3) * 32}px`,
          }"
          :initial="hidden"
          :enter="hidden"
          :click-3="i <= 3 ? show(220 + (i - 1) * 90) : hidden"
          :click-4="show(i <= 3 ? 0 : (i - 4) * 90)"
        />
      </div>

      <div
        class="pile"
        :style="{ left: `${layout.boxes[3].x + layout.boxes[3].w - 18}px`, top: `${LINK_Y - 12}px` }"
      >
        <div
          v-for="i in 3"
          :key="'qt-' + i"
          v-motion
          class="token"
          :style="{
            left: `${-((i - 1) % 3 + 1) * 32}px`,
            top: `${Math.floor((i - 1) / 3) * 32}px`,
          }"
          :initial="hidden"
          :enter="hidden"
          :click-4="show(180 + (i - 1) * 90)"
        />
      </div>

      <div
        class="callout"
        :style="{
          left: `${layout.boxes[1].cx}px`,
          top: `${BOX_Y - 16}px`,
          opacity: scene === 2 ? 1 : 0,
        }"
      >
        <div class="stem" />
        <div class="tag">
          <div class="tag-t">BOTTLENECK</div>
          <div class="tag-n">14 D · 52% OF CYCLE TIME</div>
        </div>
      </div>

      <div
        class="bracket"
        :style="{
          left: `${layout.boxes[2].x}px`,
          top: `${BOX_Y - 40}px`,
          width: `${layout.boxes[3].x + layout.boxes[3].w - layout.boxes[2].x}px`,
          opacity: scene === 4 ? 1 : 0,
        }"
      >
        <div class="br-line" />
        <div class="br-l" />
        <div class="br-r" />
      </div>

      <div
        class="callout after"
        :style="{
          left: `${(layout.boxes[2].cx + layout.boxes[3].cx) / 2}px`,
          top: `${BOX_Y - 40}px`,
          opacity: scene === 4 ? 1 : 0,
        }"
      >
        <div class="stem short" />
        <div class="tag">
          <div class="tag-t">NEW CONSTRAINT</div>
          <div class="tag-n">REVIEW + TEST · 15 OF 21 DAYS</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sdlc {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: v-bind(PAPER);
}
.sdlc-stage {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1920px;
  height: 1080px;
  margin-left: -960px;
  margin-top: -540px;
  transform: scale(0.66667);
  transform-origin: center center;
}
.grid {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(v-bind(RULE) 1.3px, transparent 1.4px),
    linear-gradient(v-bind(RULE) 1px, transparent 1px),
    linear-gradient(90deg, v-bind(RULE) 1px, transparent 1px);
  background-size: 40px 40px, 200px 200px, 200px 200px;
  opacity: 0.55;
}

.box,
.link,
.bar {
  position: absolute;
  animation: draw 0.7s cubic-bezier(0.65, 0, 0.35, 1) both;
}
.box {
  background: v-bind(CARD);
  border: 2px solid v-bind(INK);
  box-shadow: 6px 6px 0 v-bind(INK);
  transform-origin: left center;
  transition:
    left 0.72s cubic-bezier(0.65, 0, 0.35, 1),
    width 0.72s cubic-bezier(0.65, 0, 0.35, 1),
    box-shadow 0.36s cubic-bezier(0.16, 1, 0.3, 1);
}
.box.hot { box-shadow: 10px 10px 0 v-bind(SIG); }
.box-spine {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 8px;
  background: v-bind(INK);
  transition: width 0.36s cubic-bezier(0.16, 1, 0.3, 1), background 0.36s cubic-bezier(0.16, 1, 0.3, 1);
}
.box.hot .box-spine { width: 22px; background: v-bind(SIG); }
.box-copy {
  position: absolute;
  inset: 0;
  padding: 16px 16px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: padding 0.36s cubic-bezier(0.16, 1, 0.3, 1);
}
.box.hot .box-copy { padding-left: 38px; }
.idx {
  font: 400 13px/1 "IBM Plex Mono", ui-monospace, monospace;
  letter-spacing: 0.16em;
  color: v-bind(INK3);
}
.name {
  font: 900 28px/0.95 "Archivo", system-ui, sans-serif;
  letter-spacing: -0.02em;
  color: v-bind(INK);
  white-space: nowrap;
}
.sub {
  font: 600 17px/1 "IBM Plex Mono", ui-monospace, monospace;
  letter-spacing: 0.06em;
  color: v-bind(INK2);
  white-space: nowrap;
}

.link { height: 2px; }
.link-line {
  position: absolute;
  left: 0; top: 0;
  height: 2px;
  width: calc(100% - 14px);
  background: v-bind(INK);
}
.link-head {
  position: absolute;
  right: 0; top: -7px;
  width: 0; height: 0;
  border-left: 16px solid v-bind(INK);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.bar {
  transition: left 0.72s cubic-bezier(0.65, 0, 0.35, 1), top 0.72s cubic-bezier(0.65, 0, 0.35, 1);
}
.bar-fill {
  background: v-bind(INK);
  border: 2px solid v-bind(INK);
  box-sizing: border-box;
  background-image: repeating-linear-gradient(45deg, rgba(244, 240, 228, 0.22) 0 3px, transparent 3px 7px);
  transition: height 0.72s cubic-bezier(0.65, 0, 0.35, 1), background 0.36s;
}
.bar.hot .bar-fill { background: v-bind(SIG); background-image: none; }
.bar-val {
  margin-top: 10px;
  text-align: center;
  font: 600 20px/1 "IBM Plex Mono", ui-monospace, monospace;
  color: v-bind(INK);
  transition: color 0.36s;
}
.bar.hot .bar-val { color: v-bind(SIG); }
.bar-lab {
  margin-top: 6px;
  text-align: center;
  font: 400 12px/1 "IBM Plex Mono", ui-monospace, monospace;
  letter-spacing: 0.12em;
  color: v-bind(INK3);
}

.pile {
  position: absolute;
  transition: left 0.72s cubic-bezier(0.65, 0, 0.35, 1);
}
.token {
  position: absolute;
  width: 26px;
  height: 26px;
  background: v-bind(SIG);
  border: 2px solid v-bind(INK);
  box-shadow: 3px 3px 0 v-bind(INK);
  will-change: transform, opacity;
}
.q-lab {
  position: absolute;
  width: 150px;
  font: 600 15px/1 "IBM Plex Mono", ui-monospace, monospace;
  letter-spacing: 0.08em;
  color: v-bind(SIG);
  text-align: right;
  transition: opacity 0.28s, left 0.72s cubic-bezier(0.65, 0, 0.35, 1);
}

.callout {
  position: absolute;
  transition: opacity 0.36s cubic-bezier(0.16, 1, 0.3, 1), left 0.72s cubic-bezier(0.65, 0, 0.35, 1);
  pointer-events: none;
}
.stem {
  position: absolute;
  left: 0;
  top: -96px;
  width: 3px;
  height: 96px;
  background: v-bind(SIG);
}
.stem.short { top: -84px; height: 84px; }
.tag {
  position: absolute;
  left: -2px;
  top: -158px;
  background: v-bind(SIG);
  border: 2px solid v-bind(INK);
  box-shadow: 4px 4px 0 v-bind(INK);
  padding: 9px 16px;
  white-space: nowrap;
}
.callout.after .tag { top: -146px; }
.tag-t {
  font: 400 20px/1 "Silkscreen", ui-monospace, monospace;
  letter-spacing: 0.04em;
  color: v-bind(PAPER);
}
.tag-n {
  margin-top: 8px;
  font: 400 14px/1 "IBM Plex Mono", ui-monospace, monospace;
  letter-spacing: 0.06em;
  color: rgba(244, 240, 228, 0.8);
}

.bracket {
  position: absolute;
  height: 20px;
  transition: opacity 0.36s, left 0.72s cubic-bezier(0.65, 0, 0.35, 1), width 0.72s cubic-bezier(0.65, 0, 0.35, 1);
}
.br-line { position: absolute; left: 0; right: 0; top: 0; border-top: 3px solid v-bind(SIG); }
.br-l, .br-r { position: absolute; top: 0; width: 3px; height: 20px; background: v-bind(SIG); }
.br-l { left: 0; }
.br-r { right: 0; }

@keyframes draw {
  from { transform: scaleX(0); opacity: 0; }
  to { transform: scaleX(1); opacity: 1; }
}
</style>
