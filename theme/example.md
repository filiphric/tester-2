---
theme: ./
title: FILIP — Editorial-Motion Theme
info: |
  A Slidev theme ported from the FILIP editorial-motion design system.
  Vox-style editorial motion meets a retro-computing-museum aesthetic.
themeConfig:
  brand: FILIP
layout: cover
kicker: ▸ Explainer · No. 41 · 14:02
footerLeft: ▸ FILIP · The Crash Series
footerRight: '2026'
---

# The machines that <Highlighter>made us</Highlighter>

Editorial motion graphics about the technology we forgot we ever depended on.

---
layout: intro
kicker: ▸ Series introduction
meta:
  - { k: Host, v: Filip }
  - { k: Season, v: 'No. 04' }
  - { k: Runtime, v: '~14 min' }
---

# A field guide to dead technology

Each film takes one obsolete machine apart — on camera — to explain why it mattered and what it cost.

---
layout: section
kicker: 02 / SECTION
footerRight: Part Two
transition: vox-left | vox-right
---

# Too many games<span class="cursor" style="color:var(--crt-green)"></span>

---
layout: default
kicker: ▸ Source / IDC, 1984
footerLeft: ▸ FILIP · Atari · 1983
footerRight: No. 41 / 07
---

# Why the market collapsed

In eighteen months the North American game market lost <Highlighter :at="1">97% of its value</Highlighter>. It was not bad luck — it was arithmetic.

<v-clicks>

- Shovelware flooded the shelves
- Retailers slashed prices to clear stock
- Buyers stopped believing the box
- Publishers folded in a chain

</v-clicks>

---
layout: fact
kicker: ▸ The number
value: '97'
unit: '%'
source: Source / IDC · 1982–1984
---

of the North American game market's value — gone in eighteen months.

---
layout: chart
kicker: ▸ Fig. 1 · Console game revenue, $bn
take: Peak to floor in two years — a 97% collapse, normalized to 1983 dollars.
data:
  - { label: '1980', value: 1.8 }
  - { label: '1981', value: 2.5 }
  - { label: '1982', value: 3.2, color: 'var(--signal)' }
  - { label: '1983', value: 2.9 }
  - { label: '1984', value: 0.1, color: 'var(--ink-3)' }
---

# The market did not shrink. It evaporated.

---
layout: statement
---

# Every machine here <span class="ds-mark">died of success</span>.

---
layout: quote
author: Filip · The Crash Series, ep. 41
---

# The console didn't fail because the games were hard. It failed because the games were bad — and everyone knew.

---
layout: two-cols
kicker: ▸ Compare
title: Two machines, two fates
footerRight: No. 41 / 09
---

### Atari 2600

Open platform, no gatekeeping. It drowned in its own catalogue.

::right::

### Nintendo NES

Locked the cartridge, curated the shelf, rebuilt the trust.

---
layout: two-cols-header
kicker: ▸ Anatomy of a crash
title: A header, then two columns
footerRight: No. 41 / 10
---

The header spans the full width; the body splits beneath it — best when both columns share one premise.

::left::

### Causes

- Unchecked third-party output
- No quality seal on the box
- Price wars at retail

::right::

### Consequences

- Shelves cleared at a loss
- Studios folded in months
- The word "video game" went toxic

---
layout: image-left
kicker: ▸ Hardware
placeholder: sega
---

# The beige box that started it

Image holds the left half; the argument runs down the right.

- Full-height visual anchor
- Copy stays in a tight measure

---
layout: image-right
kicker: ▸ Teardown
image: /sample-still.avif
caption: Atari 2600, 1977
---

# Six chips and a dream

Drop a real still in via `image:`, or omit it for the retro placeholder field.

- Reads left-to-right naturally
- Still gets the same weight

---
layout: image
kicker: ▸ On location
placeholder: rust
caption: IMAGE — full-bleed background still
transition: vox-cut
---

# The image carries the slide

---
layout: iframe-right
kicker: ▸ Interactive
url: https://sli.dev
---

# Let them poke at it

Pass a `url:` to embed a live page, demo, or map — otherwise a CRT placeholder shows.

---
layout: full
kicker: ▸ No padding · edge to edge
---

# Full-bleed canvas

The content area fills the entire frame — ideal for a diagram, map, or one dominant graphic.

---
layout: center
kicker: ▸ One idea per screen
---

# Everything in the middle

Centered both ways — reach for it when a single thought deserves the whole frame.

---
layout: end
signoff: youtube.com/filip · ▸ subscribe
---

# Fin<span class="cursor" style="color:var(--crt-green)"></span>

Thanks for watching. A new machine, taken apart, every other Sunday.
