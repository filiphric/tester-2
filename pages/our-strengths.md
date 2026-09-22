---
layout: default
---

<AgendaColumns :revealed="{ lies: [1, 2, 3], abandon: [1, 2, 3] }" />

<!--
- so now that we have talked about three lives and things to abandon, let's now turn into our strengths. Let's talk about the things that ma help us become indispensible
-->

---
layout: default
clicks: 1
---

# <Highlighter>Our strengths</Highlighter>

<OurStrengths :reveal="1" />

<!-- 
- we’re starting to see a lot more of overlapping of roles
- previously, it made sense when delivering a feature, to have one developer working on frontend, one working on the backend, hand it to a tester once it’s done
- nowadays we see more and more teams adopt a role of "Forward deployed engineers" - it’s basically a solo engineer inside an enterprise
- they take a customer problem and they deliver the whole solution by themselves, fully responsible for quality
- if this sounds like a developer job, remember that thanks to AI we now all have capacity to develop 
- and I would argue that with our quality-first mindset we have the edge
- because testing experience is engineering experience
-->

---
layout: default
---

# Testing experience is engineering experience

<v-clicks class="qa-engineers">

- Earlier defect detection
- Better testability instincts
- Stronger user-oriented reasoning
- More attention to maintainability and risk
- Greater comfort with automation
</v-clicks>

<style>
.qa-engineers {
  gap: 24px;
  margin-block: auto;
}

.qa-engineers li {
  font-size: 40px;
  line-height: 1.3;
  padding-left: 1em;
}

.qa-engineers li::before {
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
- there are various QA skills that you can apply as an engineer
- [click] Earlier defect detection - They often think in terms of failure modes, boundary conditions, invalid states, and regression risk.
- [click] Better testability instincts - They may design code with clearer interfaces, dependency boundaries, and observable behavior.
- [click] Stronger user-oriented reasoning - Testing frequently exposes misunderstandings between requirements and actual behavior.
- [click] More attention to maintainability and risk - QA work makes the long-term cost of defects visible.
- [click] Greater comfort with automation - Experience with test frameworks, CI, mocks, fixtures, and exploratory tooling can transfer directly to development.
- these are some of the things we’ve had a lot of experience with, it’s our expertise, we’re really good at it and we should show it to the world
-->


---
layout: default
clicks: 1
---

# <Highlighter>Our strengths</Highlighter>

<OurStrengths :reveal="2" />

<!-- 
- ability to govern software systems
- which is somethig that the industry is currently hungry for
-->

---
layout: quote
author: Kent Beck
image: /images/kent.png
---

# We're accumulating <span class="ds-mark">code</span> faster than we are accumulating <span class="ds-mark">trust</span>

<!-- 
- I love this quote by kent beck - we are accumulating code faster than we are accumulating trust
- we’ve become code-rich, but trust poor
- this is something that shows up in many organizations that adopted AI
- the promise of AI was to 10x the output, but just because we have a good ability to generate code, doesn’t mean we have a good ability to verify it
- so much of the code being generated is being stopped either at code review or at testing phase
- that’s because code verification is a much harder problem to solve than code generation
-->

---
layout: default
---

<!-- 
- but this is another area where as testers we can show our strength
- now that the code is being written by agents, we can use a lot of the same principles we’ve used to build quality culture in our companies
- but we’ll also use new methods when applying those principle
-->

---
layout: default
---

L1: verification
L2: shift left
L3: shift up

<!-- 
- what this means that at very least we need a verification process that is separate from verification process
- level 1: code generation -> code verification
    - before - small commits, regression testing
    - after - blast radius analysis - whether the change affects downstream services, affects other repos
- level 2: planning <- implementing <- verification
    - before: getting testing involved in planning, design, testability
    - after: having agent’s work reviewed at every step - review plan (docs, tickets), review impementation (standards, compliance, security)
- level 3: design the conditions under which a change earns our trust
    - before: creating docs, readmes, how-tos
    - after: codifying rules and standards for agents, updating them
- in the past we would cover a regression with an automated check - now we can cover agent’s mistake with a rule 
-->

---
layout: default
clicks: 1
---

# <Highlighter>Our strengths</Highlighter>

<OurStrengths :reveal="3" />

<!-- 
- so let’s reveal the final one - turning uncertainty into experiments
- the thing that made me fall in love with our profession was exactly this
- the freedom to not ask for permission and just do stuff
- try out things that no one tried
- challenge others, but most importantly challenge myself
- the question "how does it work?" was such a driver for me
- it’s a constant research
- some frame testing as constant skepticism, but I like to think of it as constant curiosity
- I can’t tell you exactly what our jobs will look like in five years. But the curiosity that brought me into this profession still gives me a reason to explore what comes next.
 -->
