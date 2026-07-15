---
layout: default
kicker: ▸ Building vs. verifying
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Building, verification & learning

<div class="flex items-center justify-center gap-6 mt-30 font-mono">
  <div class="text-3xl px-8 py-6 rounded-lg bg-[#00B6B1]/20 border-2 border-[#00B6B1]">Building</div>
  <div class="flex items-center justify-center text-4xl opacity-40 leading-none">→</div>
  <div class="text-3xl px-8 py-6 rounded-lg bg-[#F48487]/20 border-2 border-[#F48487]">Verification</div>
  <div class="flex items-center justify-center text-4xl opacity-40 leading-none">→</div>
  <div class="text-3xl px-8 py-6 rounded-lg bg-[#FFE234]/20 border-2 border-[#FFE234]">Learning</div>
</div>

<!--
- seems like we are building waterfall
- but the best thing about agile is that we learned if we built the right thing
- building + verification + learning
- lots of what LLMs do good is building, there's a lot of building (a good thing), but the ideas around verification are a bit more hazy
- but verification was part of the process, in fact, it is THE process for QA
- some interpret this as "more job for testers" - doubt it
- in fact, I see even less jobs for some of the disciplines - test automation - which was my main thing for years
-->

---
layout: quote
author: Keith Klain
image: /images/keith.png
---

# Automation never delivered the promised <span class="ds-mark">cost savings</span> — and AI is driving the price of test-script production to <span class="ds-mark">zero</span>

<!--
- keith klain argues that automation never delivered the promised cost savings and because of AI, we are driving the price of test-script production to zero
- 40-70% of testing effort goes into maintenance
- he argues that test automation should have reduced the effort and failed to fulfill that promise
- the economic value of writing tests falls to zero
- if you think about it, developers can just write tests, the same way we did
-->

---
layout: statement
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# What goal does <span class="ds-mark">test automation</span> fulfill?

<!-- 
- avoid regressions
- save time on test cases
- provide a proof that system works as intended
- checks that changes introduced to the system did not break the system
- fast feedback, bigger scale and coverage
- living documentation
-->

---
layout: default
---

# Problems with tests

<div class="grid grid-cols-4 gap-4 mt-10 font-mono h-[65vh]">

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#F48487]">
    <div class="flex-1 flex items-center justify-center text-center text-3xl px-6 py-4 bg-[#F48487]/20" style="font-family: var(--font-display)">Tests are slow</div>
    <div class="text-base px-6 py-3 opacity-70 border-t border-[#F48487]/40">patched with → parallelization</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#FFE234]">
    <div class="flex-1 flex items-center justify-center text-center text-3xl px-6 py-4 bg-[#FFE234]/20" style="font-family: var(--font-display)">Tests are flaky</div>
    <div class="text-base px-6 py-3 opacity-70 border-t border-[#FFE234]/40">patched with → muting & retries</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#00B6B1]">
    <div class="flex-1 flex items-center justify-center text-center text-3xl px-6 py-4 bg-[#00B6B1]/20" style="font-family: var(--font-display)">Too many tests</div>
    <div class="text-base px-6 py-3 opacity-70 border-t border-[#00B6B1]/40">patched with → smoke sets</div>
  </div>

  <div v-click class="flex flex-col rounded-lg overflow-hidden border-2 border-[#1C6FD6]">
    <div class="flex-1 flex items-center justify-center text-center text-3xl px-6 py-4 bg-[#1C6FD6]/20" style="font-family: var(--font-display)">Tests are irrelevant</div>
    <div class="text-base px-6 py-3 opacity-70 border-t border-[#1C6FD6]/40">patched with → test impact analysis</div>
  </div>

</div>

<!-- 

- during my career I realized that there are many things broken with how we do testing
- and we kept on patching them
- slow - every commit or every push goes through test run, we patched it by parallel
- flaky - alert fatigue, false alarms - we patch it by muting them
- we test too many things - we patch it by smoke sets
- we test everything - we dream of experimental setups that will have the decision making for which tests to run

-->

---
layout: statement
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Tests are <span class="ds-mark">broken</span>

<!-- 
- all of these problems got worse with AI - rapidly worse
- we got more code to ship, more commits, more frequent pipeline runs
- what is it that we are even doing now? - devs can do this, and to those who think they can’t - they absolutely can
- how long is it before someone realizes that they have a whole department that is a cost center?
- developer budgets have gone up, everyone is tokenmaxxing, but every CEO knows that some sort of balance is to be regained - cost cutting coming (many companies already do this)
- but not to be all doom and gloom, the hype over power of the tools like claude code or cursor is slowing down
-->

---
layout: quote
author: Kent Beck
image: /images/kent.png
---

# We're accumulating <span class="ds-mark">code</span> faster than we are accumulating <span class="ds-mark">trust</span>

<!-- 
- trust is the real bottleneck right now
- many companies have realized that the speed of generating code has skyrocketed and they feel super productive, but the speed of actually shipping stuff did not improve
-->

---
layout: default
kicker: ▸ Building vs. verifying
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Building, verification & learning

<div class="grid mt-30 font-mono mx-auto w-fit gap-x-6 gap-y-16" style="grid-template-columns: auto auto auto auto auto;">
  <div class="text-3xl px-8 py-6 rounded-lg bg-[#00B6B1]/20 border-2 border-[#00B6B1] justify-self-center">Building</div>
  <div class="flex items-center justify-center text-4xl opacity-40 leading-none">→</div>
  <div class="text-3xl px-8 py-6 rounded-lg bg-[#F48487]/20 border-2 border-[#F48487]">Verification</div>
  <div class="flex items-center justify-center text-4xl opacity-40 leading-none">→</div>
  <div class="text-3xl px-8 py-6 rounded-lg bg-[#FFE234]/20 border-2 border-[#FFE234]">Learning</div>

  <div class="flex items-center justify-center gap-10 col-start-1 row-start-2">
    <Cursor />
    <Claude />
    <Codex />
    <Copilot />
  </div>
</div>

<!-- 
- while we have these amazing tools on the dev side, there’s not too much on the verification side of things
- the attempts that I see is basically just AI-fication of things we did previously
- playwrigth - let’s add playwright MCP and playwright CLI
- vibium, aluminium
- autonomous testing tools
- but they are built on the same broken pattern, that was broken before AI and is broken now
- more importantly I don’t think they can solve the trust problem
-->
