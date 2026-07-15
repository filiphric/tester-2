---
layout: default
kicker: ▸ From verification to governance
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# <span class="ds-mark">Blast radius</span>

<div class="grid grid-cols-2 gap-8 mt-6 font-mono h-[64vh]">

  <div class="flex flex-col rounded-lg border-2 border-[#F48487] overflow-hidden">
    <div class="text-2xl text-center px-4 py-4 bg-[#F48487]/20" style="font-family: var(--font-display)">Test automation</div>
    <div class="flex-1 flex flex-col items-center justify-center gap-5 px-6">
      <div class="rounded-full border-2 border-[#F48487] bg-[#F48487]/15 w-44 h-44 flex items-center justify-center text-center text-lg leading-snug">regressions on<br>scripted paths</div>
      <div class="text-sm opacity-60 text-center">one concern, one repo, the cases you remembered</div>
    </div>
    <div class="text-sm px-6 py-3 opacity-70 border-t border-[#F48487]/40">blind to anything you didn't write a test for</div>
  </div>

  <div class="flex flex-col rounded-lg border-2 border-[#00B6B1] overflow-hidden">
    <div class="text-2xl text-center px-4 py-4 bg-[#00B6B1]/20" style="font-family: var(--font-display)">Multi-agentic governance</div>
    <div class="flex-1 grid grid-cols-2 gap-2.5 content-center px-6">
      <div class="rounded border border-[#00B6B1]/60 bg-[#00B6B1]/10 text-center px-2 py-2.5 text-base">Correctness</div>
      <div class="rounded border border-[#00B6B1]/60 bg-[#00B6B1]/10 text-center px-2 py-2.5 text-base">Security</div>
      <div class="rounded border border-[#00B6B1]/60 bg-[#00B6B1]/10 text-center px-2 py-2.5 text-base">Downstream services</div>
      <div class="rounded border border-[#00B6B1]/60 bg-[#00B6B1]/10 text-center px-2 py-2.5 text-base">Ticket compliance</div>
      <div class="rounded border border-[#00B6B1]/60 bg-[#00B6B1]/10 text-center px-2 py-2.5 text-base">Cross-repo impact</div>
      <div class="rounded border border-[#00B6B1]/60 bg-[#00B6B1]/10 text-center px-2 py-2.5 text-base">Rules &amp; standards</div>
    </div>
    <div class="text-sm px-6 py-3 opacity-70 border-t border-[#00B6B1]/40">every concern, every repo, every change — by default</div>
  </div>

</div>

<!--
- test automation has a tiny blast radius - it only ever covers the paths someone scripted, one concern, one repo, the cases you thought of in advance
- everything outside that is invisible to it
- a multi-agent governance platform has a blast radius the size of the whole change: correctness, security, downstream, ticket compliance, cross-repo, rules - on every change, without anyone writing a case for it
- same effort, completely different reach
-->

---
layout: default
kicker: ▸ From verification to governance
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Shift left → <span class="ds-mark">shift up</span>

<div class="grid grid-cols-2 gap-10 mt-8 font-mono h-[62vh]">

  <div class="flex flex-col rounded-lg border-2 border-[#1C6FD6] overflow-hidden">
    <div class="text-2xl text-center px-4 py-4 bg-[#1C6FD6]/20" style="font-family: var(--font-display)">Shift left</div>
    <div class="flex-1 flex flex-col items-center justify-center gap-4 px-8">
      <div class="flex items-center gap-2 text-base">
        <span class="px-3 py-2 rounded bg-[#1C6FD6]/15 border border-[#1C6FD6]/60">Req</span>
        <span class="opacity-40">→</span>
        <span class="px-3 py-2 rounded bg-[#1C6FD6]/15 border border-[#1C6FD6]/60">Design</span>
        <span class="opacity-40">→</span>
        <span class="px-3 py-2 rounded bg-[#1C6FD6]/15 border border-[#1C6FD6]/60">Code</span>
        <span class="opacity-40">→</span>
        <span class="px-3 py-2 rounded bg-[#1C6FD6]/15 border border-[#1C6FD6]/60">CI</span>
      </div>
      <div class="text-2xl opacity-40">⟵ move the checks earlier</div>
    </div>
    <div class="text-sm px-6 py-3 opacity-70 border-t border-[#1C6FD6]/40">same checks, just sooner in time</div>
  </div>

  <div class="flex flex-col rounded-lg border-2 border-[#00B6B1] overflow-hidden">
    <div class="text-2xl text-center px-4 py-4 bg-[#00B6B1]/20" style="font-family: var(--font-display)">Shift up</div>
    <div class="flex-1 flex flex-col items-center justify-center gap-2 px-8">
      <div class="w-full text-center px-4 py-3 rounded bg-[#00B6B1]/25 border-2 border-[#00B6B1] text-lg">Governance</div>
      <div class="text-xl opacity-40">↑</div>
      <div class="w-full text-center px-4 py-3 rounded bg-[#F48487]/15 border border-[#F48487]/60">Verification</div>
      <div class="text-xl opacity-40">↑</div>
      <div class="w-full text-center px-4 py-3 rounded bg-[#FFE234]/15 border border-[#FFE234]/60">A single change</div>
    </div>
    <div class="text-sm px-6 py-3 opacity-70 border-t border-[#00B6B1]/40">from checking changes to governing how they're made</div>
  </div>

</div>

<!--
- for years the ambition was "shift left" - take the same checks and run them earlier, closer to the developer
- useful, but it's still the same verification, just at a different point in time
- the next move isn't left, it's up - shift up
- you stop reasoning about one change at a time and start governing how every change gets made: the rules, the standards, the policies that apply across the org
- verification answers "is this change ok?" - governance answers "how do we make sure every change is ok, without a human gating each one?"
-->

---
layout: default
---

# Where this is <span class="ds-mark">going</span>

<div class="flex flex-col gap-3 mt-8 font-mono">

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">writing scripts</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">codifying rules &amp; standards</div>
  </div>

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">individual knowledge</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">team &amp; org sharing</div>
  </div>

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">writing test cases</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">building systems</div>
  </div>

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">catching regressions</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">preventing whole classes of defects</div>
  </div>

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">gatekeeping at the end</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">guidance during the work</div>
  </div>

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">"did it pass?"</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">"should it ship?"</div>
  </div>

  <div v-click class="flex items-center gap-4">
    <div class="flex-1 text-right text-lg px-5 py-2.5 rounded-lg bg-[#F48487]/12 border border-[#F48487]/60">tester as a role</div>
    <div class="text-2xl opacity-40">→</div>
    <div class="flex-1 text-lg px-5 py-2.5 rounded-lg bg-[#00B6B1]/12 border border-[#00B6B1]/60">verification as a platform</div>
  </div>

</div>

<!--
- so where is this all heading
- from writing scripts to codifying rules and standards - the artifact stops being a test file and becomes the policy itself
- from individual knowledge locked in one tester's head to something the whole team and org shares
- from writing test cases to building systems that verify
- a few more that follow from that:
- from catching regressions after the fact to preventing entire classes of defects up front
- from gatekeeping at the very end to giving guidance while the work is happening
- the question shifts from "did it pass" to "should this actually ship"
- and the role shifts - verification stops being a person you hire and becomes a platform the org runs
-->
