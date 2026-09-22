---
layout: default
---

<AgendaColumns :revealed="{ lies: [1, 2, 3] }" />

<!--
- alright, now that we have covered the three lies that we like to test ourselves, let's talk about things that I believe we need to abandon if we want to get ready for the future.
-->

---
layout: default
clicks: 1
---

# <Highlighter>Things to abandon</Highlighter>

<ThingsToAbandon :reveal="1" />

<!--
- I firmly believe that in 2026 we need to completely abandon the debate of whether testers should or shouldn’t become technical - of course they should
- happy to see a lot of thumbs up, but I still encounter people in our field that are hesitant about understanding technical details of the software they test
- the common argument is that getting too deep in technical knowledge might create a tunnel vision
- or that one might lose the the unique perspective on system under test
- or that understanding all the details might turn them into developer
- I wholeheartedly disagree - I think that we’ve made a mistake by not demanding deep technical expertise from QAs
- QA in software is one of the few professions where technical expertise is optional
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
- I sometimes like to take a look at QA in other professions - How does that look? What do you need to know?
- [click] I’m a big fan of F1 - they have QA engineers that need to have an excellent understanding of engines, aerodynamics, physics, safety mechanism, fuel, electronics
- [click] we’re in disneyland - QA engineers for amusement parks need to have understanding of material science, safety systems, welding - they don’t get to "assess risk", they need to mathematically prove that the roller coaster doesn’t fail
- [click] [click] [click] and there are other great examples, like aviaton, space rockets, automotive manufacturing
- there’s no debate on whether having a technical expertise would somehow create a tunnel vision or claims that it’s actually useful to treat is as a black box
- I think we need to take our profession seriously and treat it as a technically demanding role
-->

---
layout: center
clicks: 1
---

# <Highlighter>We need experts</Highlighter>

<!--
- and this is not just something that’s going to help you now, it’s something that will help us all in the future
- job tiles change - remember scrum masters?
- but even with AI, even with all the changes that we face, one thing I believe is not going away
- and that is a need for expertise
- and it’s not just companies that seek expretise, in fact LLMs reward expertise - when you interact with an LLM, the quality of the input wil determine the quality of the output
- watch a senior developer interact with AI and compare that to your casual vibe-coder, I think you will see the difference
- [click] so become an expert - And if I may offer a word of advice, become an expert in AI
- the tech desperately needs people that have a good understanding of how agentic systems work - how to make them safe, how to build them with high quality
- every company under the sun want to become AI first company, jump head-on into tokenmaxxing and then meet on post-mortem every tuesday because Claude Code ignored half of the requirements in the JIRA ticket
- And that mostly happens because we deploy AI to teams that lack knowledge of how to properly verify its work
- and I feel like this is our time to shine
- but not just by pointing out things that don’t work, but right now actually we need experts that can help us find ways that do work
- and I think testers are very well equipped for that, especially if they’re able to get deep technical knowledge of AI agents, agentic systems AI evaluations, harnesses, and so on
- i think that if you can demonstrate good knowledge of agentic systems companies will fight over you
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
- that’s why I’m so firm on testers getting more technical, broadening your horizons will help you build your critical thinking
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
- name things
- these are all the things that we can look into and get some sort of quality signal - they may uncover regressions, requirement gaps, problems in code styling, UX issues and so on
- previously, we could look at all of these manually and get some sense of whether a change in code is safe to release
- nowadays, we can have agents look at all these quality signals and without ever running a single-end to-end test, give us back valuable pieces of information on quality
-->

---
layout: default
title: Generation and verification
clicks: 4
---

<GenerationVerification />

<!--
- so the way I currently have things set up
- is that I loosely split my flow into generation vs. verification
- so my coding agent will take all these kinds of contexts in and create a feature
- but because coding agents make mistakes, they have limited context windows, they don't always stick to the instructions and rules, sometimes ignore things that are written in the ticket, I need to verify them
- the easiest way to verify it without running tests is to have a code review agent
- and it's a separate agent, different model, and it's going to take a look at whether:
- Rules were not being ignored
- Ticket was fully implemented
- Skills were used
- Whether there were no bugs or security issues
- and it also looks at the blas radius of the change, so e.g. whether the change in this repository is not breaking something in another repository

-->

---
layout: default
title: Review at every step
clicks: 4
---

<ReviewAtEveryStep />

<!--
- and if we look at the two steps, generation and verification, if we do the verification just on the code review, the feedback loop is pretty wide
- So it's much better to tighten it and to actually shift left and bring it to earlier stages of development
- so instead of running that check on pull request, the same set of agents can be run locally before the code is committed
  - and it can actually go even further
  - the agent also review the plan generated by the agent, assessing if it’s solid and actually aligns with the current state of the codebase.
  - and why stop at the plan, the same agent system can be applied to reviewing the ticket where requirements are defined and I can see how it holds up against the rest of the codebase.
- so this is all without running a single test, taking in all of the signals and making an assessment on whether the change that’s being introduced actually holds
-->

---
layout: default
---

<!--
- and doing all this, I’m getting a much quicker feedback, and when eventually tests get ran, the change already went through multiple agentic checks
- sorry to bring up the testing pyramid again, but I've seen many companies where currently the pyramid looks more like a mushroom because we have all of these amazing tools that help us write end-to-end tests, and we've overdone it
- we now have way too many tests, it takes too long to run them and something needs to change
-->
