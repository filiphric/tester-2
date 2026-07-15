---
layout: statement
kicker: ▸ Verifying without tests
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Imagine a world with <span class="ds-mark">no test automation</span>.

<!--
- let's run a thought experiment
- delete every test in your repo, no playwright, no unit suite, nothing
- but you keep the AI agents
- the question becomes: what verification can we actually do?
- because if the only answer is "write the tests again", we learned nothing
-->

---
layout: default
kicker: ▸ Verifying without tests
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Turns out, we already have a lot

<div class="grid grid-cols-3 gap-3 mt-6 font-mono">

  <div v-click class="rounded-lg border-2 border-[#00B6B1] bg-[#00B6B1]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Type checking</div>
  <div v-click class="rounded-lg border-2 border-[#F48487] bg-[#F48487]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Linters</div>
  <div v-click class="rounded-lg border-2 border-[#FFE234] bg-[#FFE234]/15 text-xl text-center px-4 py-3 flex flex-col items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Code review<div class="text-sm opacity-60 mt-1">diff &amp; comments</div></div>

  <div v-click class="rounded-lg border-2 border-[#1C6FD6] bg-[#1C6FD6]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Build process</div>
  <div v-click class="rounded-lg border-2 border-[#F48487] bg-[#F48487]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Polyfills</div>
  <div v-click class="rounded-lg border-2 border-[#00B6B1] bg-[#00B6B1]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Commit history</div>
  <div v-click class="rounded-lg border-2 border-[#F48487] bg-[#F48487]/15 text-xl text-center px-4 py-3 flex flex-col items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">JIRA / Linear<div class="text-sm opacity-60 mt-1">tickets</div></div>

  <div v-click class="rounded-lg border-2 border-[#FFE234] bg-[#FFE234]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Documentation</div>
  <div v-click class="rounded-lg border-2 border-[#1C6FD6] bg-[#1C6FD6]/15 text-xl text-center px-4 py-3 flex flex-col items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Codebase<div class="text-sm opacity-60 mt-1">&amp; related repos</div></div>
  <div v-click class="rounded-lg border-2 border-[#00B6B1] bg-[#00B6B1]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Designs</div>
  <div v-click class="rounded-lg border-2 border-[#FFE234] bg-[#FFE234]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Rules</div>
  <div v-click class="rounded-lg border-2 border-[#1C6FD6] bg-[#1C6FD6]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Skills</div>

</div>

<!--
- none of this is test automation, and all of it is verification
- the raw material for verification was here the whole time, tests were just one expression of it
- if you were a good tester, the you were concerned with many of these things already
- and if you have good developers, they are concerned with this too
-->

---
layout: default
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

<div class="flex flex-col items-center gap-12 mt-12 font-mono">

  <div class="flex items-center gap-8">
    <div class="grid grid-cols-3 gap-2 w-[22rem]">
      <span class="h-10 rounded bg-[#00B6B1]"></span>
      <span class="h-10 rounded bg-[#F48487]"></span>
      <span class="h-10 rounded bg-[#FFE234]"></span>
      <span class="h-10 rounded bg-[#1C6FD6]"></span>
      <span class="h-10 rounded bg-[#F48487]"></span>
      <span class="h-10 rounded bg-[#00B6B1]"></span>
      <span class="h-10 rounded bg-[#F48487]"></span>
      <span class="h-10 rounded bg-[#FFE234]"></span>
      <span class="h-10 rounded bg-[#1C6FD6]"></span>
      <span class="h-10 rounded bg-[#00B6B1]"></span>
      <span class="h-10 rounded bg-[#FFE234]"></span>
      <span class="h-10 rounded bg-[#1C6FD6]"></span>
    </div>
    <div class="text-4xl opacity-40">→</div>
    <div class="text-3xl px-8 py-6 rounded-lg bg-[#00B6B1]/20 border-2 border-[#00B6B1] w-[16rem] text-center" style="font-family: var(--font-display)">Building</div>
  </div>

  <div v-click class="flex items-center gap-8">
    <div class="grid grid-cols-3 gap-2 w-[22rem]">
      <span class="h-10 rounded bg-[#00B6B1]"></span>
      <span class="h-10 rounded bg-[#F48487]"></span>
      <span class="h-10 rounded bg-[#FFE234]"></span>
      <span class="h-10 rounded bg-[#1C6FD6]"></span>
      <span class="h-10 rounded bg-[#F48487]"></span>
      <span class="h-10 rounded bg-[#00B6B1]"></span>
      <span class="h-10 rounded bg-[#F48487]"></span>
      <span class="h-10 rounded bg-[#FFE234]"></span>
      <span class="h-10 rounded bg-[#1C6FD6]"></span>
      <span class="h-10 rounded bg-[#00B6B1]"></span>
      <span class="h-10 rounded bg-[#FFE234]"></span>
      <span class="h-10 rounded bg-[#1C6FD6]"></span>
    </div>
    <div class="text-4xl opacity-40">→</div>
    <div class="text-3xl px-8 py-6 rounded-lg bg-[#F48487]/20 border-2 border-[#F48487] w-[16rem] text-center" style="font-family: var(--font-display)">Verifying</div>
  </div>

</div>

<!--
- AI agents are getting increasingly better and putting in thes concerns into the context and getting good output
- things become interesting when you decide to use that context for verification
- it is a very different task from building, requires different muscle
- of course we all know this, because it has been our job
- building consumes these signals to produce a change, verifying consumes them to judge one
-->

---
layout: default
kicker: ▸ Verifying without tests
---

# Verification isn't one check

<div class="grid grid-cols-3 gap-4 mt-6 font-mono h-[60vh]">

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#00B6B1]">
    <div class="flex-1 flex items-center justify-center text-center text-2xl px-4 py-4 bg-[#00B6B1]/20" style="font-family: var(--font-display)">Correctness</div>
    <div class="text-sm px-4 py-3 opacity-70 border-t border-[#00B6B1]/40">does it do the thing?</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#F48487]">
    <div class="flex-1 flex items-center justify-center text-center text-2xl px-4 py-4 bg-[#F48487]/20" style="font-family: var(--font-display)">Security</div>
    <div class="text-sm px-4 py-3 opacity-70 border-t border-[#F48487]/40">what did it expose?</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#FFE234]">
    <div class="flex-1 flex items-center justify-center text-center text-2xl px-4 py-4 bg-[#FFE234]/20" style="font-family: var(--font-display)">Downstream services</div>
    <div class="text-sm px-4 py-3 opacity-70 border-t border-[#FFE234]/40">what did it break?</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#1C6FD6]">
    <div class="flex-1 flex items-center justify-center text-center text-2xl px-4 py-4 bg-[#1C6FD6]/20" style="font-family: var(--font-display)">Ticket compliance</div>
    <div class="text-sm px-4 py-3 opacity-70 border-t border-[#1C6FD6]/40">is it what was asked?</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#00B6B1]">
    <div class="flex-1 flex items-center justify-center text-center text-2xl px-4 py-4 bg-[#00B6B1]/20" style="font-family: var(--font-display)">Cross-repo impact</div>
    <div class="text-sm px-4 py-3 opacity-70 border-t border-[#00B6B1]/40">who else is affected?</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#F48487]">
    <div class="flex-1 flex items-center justify-center text-center text-2xl px-4 py-4 bg-[#F48487]/20" style="font-family: var(--font-display)">Rules &amp; standards</div>
    <div class="text-sm px-4 py-3 opacity-70 border-t border-[#F48487]/40">does it fit the codebase?</div>
  </div>

</div>

<!--
- and verification isn't a single pass/fail gate, it's a set of separate concerns
- correctness - does the change actually do the thing
- security - what did it just expose
- downstream services - what did it break that isn't in this repo
- ticket compliance - is this even what was asked for, not just something that runs
- cross-repo issues - who else depends on this
- rules and standards - does it match the conventions this codebase agreed on
- i didn’t even name all of the concerns, and it’s already too much for one person
- so the question is how do you scale this? do we really hire more testers?
- not really, because if you take a good hard look at this, you’l realize this is a multi-agent system

-->
