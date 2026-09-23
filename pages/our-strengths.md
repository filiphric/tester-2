---
layout: default
---

<AgendaColumns :revealed="{ lies: [1, 2, 3], abandon: [1, 2, 3] }" />

<!--
- so now that we have talked about three lies and things to abandon, let's now turn into our strengths
-->

---
layout: default
clicks: 1
---

# <Highlighter>Our strengths</Highlighter>

<OurStrengths :reveal="1" />

<!--
Quality-first approach to software delivery
- let’s talk about how we can apply it in practice
- we’re starting to see a lot more of overlapping of roles
- previously, it made sense when delivering a feature, you would assemble a team
you’d have one developer working on frontend, one working on the backend, hand it to a tester once it’s done
-->

---
layout: default
title: Forward deployed engineer
---

<h1 class="fde-heading"><Highlighter>Forward deployed engineer</Highlighter></h1>

<img class="team-vs-fde" :src="'/images/team-vs-fde.png'" alt="A team of separate frontend, backend, QA, designer, product owner, and DevOps roles compared with one forward deployed engineer covering all six disciplines." />

<style>
.fde-heading {
  position: relative;
  z-index: 1;
}

.team-vs-fde {
  margin-top: 40px;
  position: absolute;
  inset: 40px 0 0;
  width: 100%;
  height: calc(100% - 40px);
  object-fit: contain;
}
</style>

<!--
- nowadays we see more and more companies adopt this new role called "Forward deployed engineer" 
- it’s basically a solo engineer inside an enterprise
- they take a customer problem and they deliver the whole solution by themselves, fully responsible for quality
- and I would argue that with our quality-first mindset we have the edge when it comes to adopting to such a role
-->

---
layout: default
title: Eval engineer
---

<h1 class="eval-heading"><Highlighter>Eval engineer</Highlighter></h1>

<img class="eval-engineer" :src="'/images/eval-engineer.png'" alt="An eval engineer working with golden datasets, eval suites, LLM judges, regression runs, quality metrics, and failure triage." />

<style>
.eval-heading {
  position: relative;
  z-index: 1;
}

.eval-engineer {
  margin-top: 40px;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

<!-- 
- Another role where I think testers and QA engineers have an edge over everyone else is a job called eval engineer
- An eval engineer designs tests that measure how well an AI system works, where it fails, and whether changes in the system make it better, or worse
- in simple terms, eval engineers are like a teacher for AI: they create exercises, decide what counts as a good answer, and check its work — including whether it actually did what it claimed to do.
- which sound a lot like something we already do with applications today
- If you came to my tutorial on Monday, you could have seen this in action:
  - We took a skill file and ran an evaluation to see whether our agent actually performs better with the skill or without it.
  - We looked at how many tokens we use with and without the skill.
  - We measured how long the response takes in each scenario. 
 -->


---
layout: default
clicks: 6
---

# Testing experience is engineering experience

<v-clicks class="qa-engineers">

- Understanding the customer's problem
- Defining what success looks like
- Exploring edge cases and failure modes
- Checking what the system actually did
- Measuring whether a change made it better
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
- when you look at those two roles, there’s a lot of work that should feel familiar to us
- [click] Understanding the customer's problem - As testers, we already investigate how people use a product and where it lets them down - as we’ve seen with Forward Deployed Engineer, this is part of their job
- [click] we also have experience with **Defining what success looks like** - This is a core task of an eval engineer - the need to carefuly define criteria for what is a good answer or a completed task in agentic systems
- [click] Exploring edge cases and failure modes - this is what we already do for our applications. We can keep on doing exactly that for AI systems. Things like missing information, unexpected inputs, retries, things going wrong. These can be turned into repeatable tests or eval cases.
- [click] Checking what the system actually did - If an AI assistant says it booked a meeting, does the event exist, at the right time, with the right people? And would our evaluator catch it if it didn't? 
- [click] Measuring whether a change made it better - everyone likes to update to the latest and the greates model, but who’s going to test, if the upgrade made an improvement or if it only added to company costs
- don’t get me wrong - these roles require new things to learn
- but I think our testing experience gives us a solid foundation to build on 
- [click] and there are many other roles that I haven’t even mentioned - some require being comfrotable with automation, some require understanding complex systems
- so get comfortable looking into other job titles that require the same talents you have.
- because I'm meeting a lot of testers that were laid off from their job, they struggle to finde new role and they feel like they have nothing to offer, and that's just not true.
-->

---
layout: default
clicks: 1
---

# <Highlighter>Our strengths</Highlighter>

<OurStrengths :reveal="2" />

<!--
- which brings me to another strength that I see a lot of in our community
- [click] being a generalist
-->

---
layout: quote
---

# Jack of all trades, master of none<v-click>, but oftentimes better than a master of one.</v-click>

<!--
- do you know the expression "Jack of all trades, master of none"? 
- it's actually saying that continues
- [click] but oftentimes better than a master of one.
- and I believe that in the age of AI, it is truly the case, that generalists have an advantage
-->

---
layout: center
---

# We connect code, <Highlighter>customer needs</Highlighter>, and business goals.

<!--
- and there's many generalists among us.
- As testers, we are required to have broad knowledge
- We need to understand business. We need to understand our clients, their needs. 
- We often dive into user experience. We study metrics, user behavior
- look into performance, understand accessibility, understand code
- threre’s a whole list of things we do and I know I haven’t scratched the surface
-->

---
layout: center
---

## Just because you *can* <Highlighter>build something</Highlighter> doesn't mean you *should*

<!--
- I think now it's a good time to lean into this generalist mindset
- and why is that?
- a year ago, I was working for a company that produced a solution for vibe coders
- if you know products like lovable, replit, bolt, you know what kind of product I’m talking about
- we had a talented team of developers, and our product was able to spin up an application that would work as described and all of the tests would pass.
- and yet, no one would ever use it
- why? well because having a working technical solution doesn't necessarily mean we built something that customer wants, likes, needs or buys
- just because you can build something doesn't mean you should
- Someone also has to understand the user, choose the right problem, manage tradeoffs, and figure out whether the result helped.
- having that generalist mindset, being able to look at a problem from different perspectives is a quality that we can definitely build on
-->

---
layout: default
clicks: 1
---

# <Highlighter>Our strengths</Highlighter>

<OurStrengths :reveal="3" />

<!--
- so let’s reveal the final one 
- [click] turning uncertainty into experiments
- I think this aspect of work was what made me fall in love with our profession
- And I think that this aspect is becoming increasingly important
- Because with AI we now face more uncertainty than ever
-->

---
layout: center
---

# <Highlighter>How are we dealing with it?</Highlighter>

<!--
- and how are we dealing with it?
- those three lies that I've mentioned earlier - are a way for us to feel certain in uncetrain world, but they’re still lies
- and I think we’ve been trying to stick to things that keep us in a comfort zone for way too long
- I mentioned testing pyramid today, it has become a meme at this point
- and that’s because we’ve been looking at it for almost 20 years
- the fact that some of us believe that nothing is going to change in upcoming years is a testament to how little things have changed so far
- I think we can do better, I think we NEED to do better
- and the industry is screaming at us at the moment, it is inviting us to think outside the box
-->

---
layout: center
---

## <Highlighter>We have the capacity to innovate</Highlighter>
<!-- 
- we do have the capacity to innovate
- we have capacity to run experiments and turn the uncertain times into knowledge
- knowledge that will help build our critical thinking
- that will turn us into experts
- some frame testing as constant skepticism, but I like to think of it as constant curiosity
- I think our curiosity and willingness to experiment is a strength we are not tapping into enough
- but now it’s our time
-->

---
layout: center
title: QA engineers building with agents
---

<div class="qa-agent-post">
  <img :src="'/images/qa-engineer-building-with-agents.png'" alt="Post by R 'Nearest' Nabors (@rachelnabors) recommending QA engineers who like building systems with agents." />
</div>

<style>
.qa-agent-post {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  box-sizing: border-box;
  border: 3px solid var(--ink);
  box-shadow: var(--shadow-3);
  background: #000;
}

.qa-agent-post img {
  display: block;
  width: 100%;
  height: auto;
}
</style>

<!-- 
- So if there's anything you would take from this talk, I would love to invite you to get your hands dirty
- build an agent, try something new, create something for yourself or for someone else
- tap into this amazing strength you have
- and do that ESPECIALLY if you don’t know where to start
- this is my homework for you - deal?
-->
