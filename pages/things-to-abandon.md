---
layout: default
---

<AgendaColumns :revealed="{ lies: [1, 2, 3] }" />

---
layout: default
clicks: 1
---

# <Highlighter>Things to abandon</Highlighter>

<ThingsToAbandon :reveal="1" />

<!--
- I firmly believe that in 2026 we need to completely abandon the debate of whether testers should or shouldn’t become technical - of course they should
- happy to see a lot of thumbs up, but I still encounter people in our field that are hesitant about understanding technical details of the software they test
- the common argument is that getting too deep in technical knowledge might create a tunnel vision, or that one might lose the the unique perspective on system under test
- it is fascinating to me how different QA is in software compared to other industries
-->

---
layout: default
---

# QA in other professions

<v-clicks class="qa-professions">

- **Formula 1** - aerodynamics, fuel, safety, electronics
- **Amusement parks** - material science, safety systems
- **Aviation** - welding, industrial knowledge
- **Space rocket engineering** - thermal cycling, radiation
- **Automotive** - manufacturing, measurement systems

</v-clicks>


<style>
.qa-professions {
  gap: 24px;
  margin-block: auto;
}

.qa-professions li {
  font-size: 40px;
  line-height: 1.3;
  padding-left: 1em;
}

.qa-professions li::before {
  content: '';
  font-size: inherit;
  width: 0.3em;
  height: 0.4em;
  top: 0.65em;
  transform: translateY(-50%);
  background: var(--signal);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}
</style>

<!--
- [click] I’m a big fan of F1 - they have QA engineers that need to have an excellent understanding of engines, aerodynamics, physics, safety mechanism, fuel, electronics
- we’re in disneyland - QA engineers for amusement parks need to have understanding of material science, safety systems, welding - they don’t get to "assess risk", they need to mathematically prove that the roller coaster doesn’t fail
- and there are other great examples, like aviaton, space rockets, automotive manufacturing
- there’s no debate on whether having a technical expertise would somehow create a tunnel vision or claims that it’s actually useful to treat is as a black box
- I think we need to take our profession seriously and treat it as a technically demanding role

Sources from the research material:
- Aviation / aerospace qualifications: [Quality Engineer — IMI jobs listing](https://jobs.theimi.org.uk/mim-jobs/quality-engineer-25) (could not be independently retrieved).
- Automotive / manufacturing and measurement systems: [Quality Engineer Job Description — JobDescription.org](https://jobdescription.org/jobs/manufacturing/quality-engineer).
- Specialist engineering knowledge in hardware QA: [Hardware Quality Assurance Differs from Software — Kevin Thompson](https://www.linkedin.com/posts/kevinthompsonphd_lessonslearned-agilehardware-v6pdf-activity-7486111085314482176-zBRE).
- The supplied material has no direct citations for the Formula 1, amusement-park, or rocket-testing examples.
-->

---
layout: center
---

# <Highlighter>LLMs rewards expertise</Highlighter>

<!-- 
- we are nowadays witnessing one of the most incredible tech inventions of our lives, maybe even of all time
- and I feel like this is our time to shine
- the tech desperately needs people that have a good understanding of how these LLMs work
- we can point out million things that don’t work, but right now actually we need experts that can help us find ways that do work
- and I think testers are very well equipped for that
- exploratory testing techniques, experimenting, risk analysis and all of the instincts you have built over the years - put them together with deep technical understanding of how LLMs work, and companies will fight over for you
- and not just companies, in fact AI rewards expertise - when you interact with an LLM, the quality of the input wil determine the quality of the output
- watch a senior developer interact with AI and compare that to your casual vibe-coder, I think you will see the difference
-->


---
layout: default
clicks: 1
---

# <Highlighter>Things to abandon</Highlighter>

<ThingsToAbandon :reveal="2" />

<!--
- alright this one is going to be pretty spicy
- [click] calling critical thininking our only important tool
- it’s bit of a pet peeve of mine - I’ve been to many conferences and I’ve been repeatedly asking speakers, but also people in the hallways, what kind of tools are they using for their work - and it just annoyed the hell out of me when they said "my brain is the most important tool"
- like, I’m sure your brain is amazing, but can we stop for a second to think about how narcisistic that sounds? your colleagues have brain too (hopefully) - so what gives you the edge?
- and the usual answer to this is "well I have critical thinking" and they treat everything else like it’s not important
- I’ve put "critical thinking" into quotes here, because I think we have a bit of a definition problem in our industry
- we need to stop treating critical thinking as some sort of specialty of testers, there are many critical thinkers in your team I’m sure and I bet many of them are some your best developers
-->

---
layout: center
---

## <Highlighter>Critical thinking</Highlighter> is something you <span class="italic">build</span>, not something you <span class="italic">have</span>.

<!-- 
- but more importantly, I think it’s important to frame critical thinking as something you build, rather than something you have
- and this actually connects to my previous point about technical expertise
- it you want to build your critical thinking, the number one way of how you improve it is learning new things - gathering new perspectives, uncovering your own biases, uncovering your own blind spots
- that’s why I’m so firm on testers getting more technical
- If your critical thinking stops at the boundary of your own role, it's not really critical thinking, but self-preservation dressed up as a professional skill

-->

---
layout: default
clicks: 1
---

# <Highlighter>Things to abandon</Highlighter>

<ThingsToAbandon :reveal="3" />

<!--
- now to balance things out a little bit
- [click] treating test automation as the only important tool
- I think we are heading a path where test automation is going to change tremendously
- we have some critics that say it will completely die and take the test automation engineer profession with it
-->

---
layout: quote
author: Keith Klain
image: /images/keith.png
---

# Automation never delivered the promised <span class="ds-mark">cost savings</span> - and AI is driving the price of test-script production to <span class="ds-mark">zero</span>

<!--
- in the sources section for this presentation you’ll find a link to his presentation, which is mostly crazy rant listing all the things that test automation efforts failed at
- keith klain argues that automation never delivered the promised cost savings and because of AI, we are driving the price of test-script production to zero
- he argues that 40-70% of testing effort goes into maintenance
- he says that test engineering is now dead, which I don’t fully agree with, but I do find his take interesting, just as a thought experiment
-->

---
layout: center
---

# What if we <Highlighter>didn’t have</Highlighter> any automated tests at all?

<!-- 
- so let’s do a little though experiment
- let’s say we have zero automated tests, but we still get to keep the AI
- what would be our signals that would help us determine a release is safe?
- what could potentially our agents look at
-->

---
layout: default
---

# Quality signals

<div class="grid grid-cols-3 gap-3 mt-16 font-mono">

  <div class="rounded-lg border-2 border-[#00B6B1] bg-[#00B6B1]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Type checking</div>
  <div class="rounded-lg border-2 border-[#F48487] bg-[#F48487]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Linters</div>
  <div class="rounded-lg border-2 border-[#FFE234] bg-[#FFE234]/15 text-xl text-center px-4 py-3 flex flex-col items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Code review<div class="text-sm opacity-60 mt-1">diff &amp; comments</div></div>

  <div class="rounded-lg border-2 border-[#1C6FD6] bg-[#1C6FD6]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Build process</div>
  <div class="rounded-lg border-2 border-[#F48487] bg-[#F48487]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Compliance checks</div>
  <div class="rounded-lg border-2 border-[#00B6B1] bg-[#00B6B1]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Commit history</div>
  <div class="rounded-lg border-2 border-[#F48487] bg-[#F48487]/15 text-xl text-center px-4 py-3 flex flex-col items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Ticketing system<div class="text-sm opacity-60 mt-1"></div></div>

  <div class="rounded-lg border-2 border-[#FFE234] bg-[#FFE234]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Documentation</div>
  <div class="rounded-lg border-2 border-[#1C6FD6] bg-[#1C6FD6]/15 text-xl text-center px-4 py-3 flex flex-col items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Codebase<div class="text-sm opacity-60 mt-1">&amp; related repos</div></div>
  <div class="rounded-lg border-2 border-[#00B6B1] bg-[#00B6B1]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Designs</div>
  <div class="rounded-lg border-2 border-[#FFE234] bg-[#FFE234]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Rules</div>
  <div class="rounded-lg border-2 border-[#1C6FD6] bg-[#1C6FD6]/15 text-xl text-center px-4 py-3 flex items-center justify-center min-h-[4.5rem]" style="font-family: var(--font-display)">Skills</div>

</div>

<!--
- there’s actually a lot here, I’m naming just a few 
- I think, that even if you remove the test automation completely, you can still get a good overview
- after all, test automation promises a reduction of human effort, but what if there are other good ways to reduce human effort?
-->

---
layout: default
---

# Multi-agent systems

<v-clicks class="multi-agents-points">

- find bugs
- discover security issues
- flag broken cross-repo contracts
- reduce standards drifting
- point documentation rot
- find requirement gaps

</v-clicks>

<style>
.multi-agents-points {
  gap: 24px;
  margin-block: auto;
}

.multi-agents-points li {
  font-size: 40px;
  line-height: 1.3;
  padding-left: 1em;
}

.multi-agents-points li::before {
  content: '';
  font-size: inherit;
  width: 0.3em;
  height: 0.4em;
  top: 0.65em;
  transform: translateY(-50%);
  background: var(--signal);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}
</style>

<!-- 
- AI actually enabled this human effort reduction - we now have the ability to build agentic systems that take in all of these signals, and without ever running your code, 
- [click] flag issues, bugs
- [click] security holes
- [click] flag broken cross-repository contracts
- [click] your compliancem coding style, rules for your organization
- [click] missing, outdated or otherwise faulty documentation
- [click] when developing, pointing out missing features
-->

---
layout: default
---

# Qodo

<!-- 
- an example of this is company I work for, Qodo
- we’re building an AI code quality and governance platform
- we’ve got this thing called the context engine, and it is basically a robust multi agent system that take in all of the information I mentioned index it and then provide findings for each change you introduce to your codebase
- you can get these findings on your PR, but you can actually take a shift left approach and get these findings to your uncommited code, or even before any code is written, so it for example takes a look at your ticket and say - you know what, the plan to implement this feature is wrong, you’re reinventing a wheel and there’s already a service in your codebase that you should reuse
- so there are actually tools outside of test automation, that can be very helpful in delivering quality software
-->
