---
layout: section
kicker: ▸ AI
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# How do LLMs work?

<!--
- let's start off by answering a question - how do LLMs work
- get a good mental model
- the thing about AI is that it has this mythical property to it, we give it human like properties - intelligence, creativity, reasoning, problem solving, etc.
- I think this really muddies the waters, and I believe it's important to get a proper understanding what AI is, and where it's true power lies
- a large language model (LLM) is a model trained to predict and generate text by learning patterns from massive datasets
- textbook definition, not really helpful for getting a good mental model
- let's do something better - explain it like to my mom
-->

---
layout: default
title: sequence (numbers)
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

## finish the sequence

<div class="text-6xl block mt-12">
1, 3, 5, 7, 9, 11, 13, <span v-click=[0,1] class="inline-block">...</span><span v-click at="[1,1]" class="-ml-12 inline-block">15</span>
</div>

---
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

<div class="text-6xl">
output = <span v-mark="{ color: '#F48487', type: 'circle' }">2n - 1</span>
</div>

<div v-click class="mt-20">
  <div class="text-2xl opacity-70 mb-8">Text works the same way — words are split into <strong>tokens</strong>, and each token is just a number:</div>
  <div class="flex gap-4 justify-center items-start font-mono">
    <div class="flex flex-col items-center gap-3">
      <div class="text-4xl px-5 py-3 rounded-lg bg-[#F48487]/20 border-2 border-[#F48487]">Play</div>
      <div class="text-2xl opacity-60">11002</div>
    </div>
    <div class="flex flex-col items-center gap-3">
      <div class="text-4xl px-5 py-3 rounded-lg bg-[#00B6B1]/20 border-2 border-[#00B6B1]">wright</div>
      <div class="text-2xl opacity-60">29427</div>
    </div>
  </div>
</div>

<!-- 
- If we were to represent our sequence with a formula it could have two parameters
- when we want to represent something much more complicated, like a sentence we need much more parameters
- the key difference between a formula like this and an LLM: parameters are just numbers, not concepts. The model doesn't understand what it's doing - it doesn't understand the concept of odd numbers — it has found numerical values that happen to produce the right answers.
- [click] now connect it to language: the model never sees letters or words — text is first broken into tokens, often sub-word chunks like "Play" + "wright"
- each token maps to a number (its ID in the vocabulary), and the model only ever works with these numbers
- so just like our 2n - 1 formula turns numbers into numbers, the LLM turns token-numbers into token-numbers — there's no "understanding of words" underneath, just math over numeric IDs
- let's take this mental model and translate it to something more complicated
-->

---
title: sequence (colors)
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

## finish the sequence
<div class="text-6xl block mt-12 leading-tight">
red, orange, yellow, green, blue, <span v-click=[0,1] class="inline-block">...</span><span v-click at="[1,1]" class="-ml-7 inline-block">indigo, violet</span>
</div>

<!-- 
- indigo, violet — these are colors of the rainbow
- our previous formula is not going to work, we cannot express it in the same way
- instead, we now need to add more parameters, so that we are able to finish the sequence properly and not say "blue sky"
- this requires training data, and much more parameters, but if we were scale that up to let's say
  - 1.5 billion parameters → can write basic text just as GPT-2 can
  - Claude/GPT-4 class: hundreds of billions of parameters → can reason, code, translate, etc.
- Each parameter on its own is just a number. But billions of them working together across layers of a neural network produce what looks like understanding.
-->

---
layout: default
title: meaning space (embeddings)
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

# Meaning space

<div class="relative h-80 mt-2 border-2 border-gray-300/40 rounded-lg">
  <span class="absolute text-2xl" style="left: 8%; top: 20%; color: #F48487">red</span>
  <span class="absolute text-2xl" style="left: 16%; top: 38%; color: #F48487">orange</span>
  <span class="absolute text-2xl" style="left: 6%; top: 56%; color: #F48487">crimson</span>
  <span class="absolute text-2xl" style="left: 70%; top: 24%; color: #00B6B1">blue</span>
  <span class="absolute text-2xl" style="left: 80%; top: 42%; color: #00B6B1">teal</span>
  <span class="absolute text-2xl" style="left: 66%; top: 60%; color: #00B6B1">navy</span>
  <span class="absolute text-2xl opacity-50" style="left: 40%; top: 78%">banana</span>
</div>

<!-- 
- so how does the model "know" red and orange belong together? every token isn't just one number — it's a long list of numbers, a position in a high-dimensional space we call an embedding
- the key intuition: words that mean similar things end up close together in that space. reds cluster over here, blues cluster over there
- "banana" is way off on its own — different meaning, distant position
- this is learned, not programmed — from billions of examples the model places every word so that distance ≈ difference in meaning
- (real embeddings have hundreds or thousands of dimensions — this is a flattened 2D picture of the same idea)
-->

---
layout: default
title: sequence (conversation)
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---

<div class="grid grid-cols-1">
  <div class="text-4xl block">Q: What's the Capital of Slovakia?</div>
  <div class="text-4xl block" v-click="[0,1]">A: ...</div>
  <div class="text-4xl block -mt-7" v-click="1">A: Bratislava</div>
  <div class="h-8"></div>
  <div class="text-4xl block" v-click="2">Q: What to look for in life partner?</div>
  <div class="text-4xl block" v-click="[2,3]">A: ...</div>
  <div class="text-4xl block -mt-7" v-click="3">A: Low expectations</div>
</div>

<!-- 
- so for example you can teach the model how a conversation looks like
- example:
  - if you ask it for a factual information, it will be able to answer correctly
  - and if you start to have more complex conversations, it will be able to give you the right answer
- of course, there are many other important concepts that go into creating something like chatgpt, but I don't want to spend too much time on this
- the important part, is that this is how barebones LLM looks like
- the mental model is, that you start a sequence, and the LLM is able to finish it
-->

---
layout: two-cols
---
# Prompt engineering

- A set of linguistic patterns to get the right answer from an LLM
- Popular techniques: role prompting, chain-of-thought, style prompting...
- The famous **"Act as a..."**

::right::

<img :src="'/images/PromptTaxonomy.png'" alt="Prompt Taxonomy" />

<!--
- There's an idea called prompt engineering — the idea that if you use the right words, you unlock better answers
- There's a whole taxonomy of techniques: role-based prompts, emotion prompting, chain-of-thought, and many others
- One of the most popular is role-based prompting — the famous "Act as a senior engineer..."
- I want to be upfront: I'm not a huge fan of prompt engineering as a discipline
- Of course, giving clear instructions matters. But searching for magic patterns that unlock hidden potential? That doesn't really hold up
- Sander Schulhoff — the author of one of the most prompt engineering papers — found something interesting: when he compared "act as a Harvard-educated professor" vs "act as a complete idiot who can't do basic math", the idiot outperformed the professor
- Just because you tell an LLM it's a genius doesn't make it one
- Where prompt engineering IS genuinely interesting: AI security and prompt injection — that's a real field with real published research worth following
-->

---
layout: default
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---
# Prompt engineering vs. Context engineering

- They are **not comparable** and not an evolution of one another
- Prompt engineering: *what words you use*
- Context engineering: *what information you put in front of the model*
- A better mental model for working effectively with AI agents

<!--
- Just because I'm mentioning these back to back doesn't mean context engineering is the next generation of prompt engineering — they're different things
- What I'm trying to give you is a mental model that helps you make better decisions when working with AI day to day
- Prompt engineering is about phrasing. Context engineering is about information architecture — what the model knows when it starts working
-->

---
layout: two-cols
---
# The context window

- Everything the LLM can "see" at once
- Think of it like **RAM** — there's a hard limit
- Contains: your messages, the agent's responses, files, tools, memory

::right::

<img :src="'/images/ContextWindowV2.png'" alt="Context Window" />

<!--
- When you interact with an LLM, everything it can work with lives in the context window
- Think of it like your computer's RAM — there's a physical limit on how much can be active at once
- The context window holds your messages, the model's responses, any files or tools it's been given, and any injected memory
- This limit has real consequences, as we'll see
-->

---
layout: default
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---
# LLMs are stateless

- Every message you send includes the **full conversation history**
- The model doesn't "remember" — it re-reads everything every time
- Longer conversation = more tokens = more cost

<!--
- Here's something people often don't realise: LLMs have no memory between turns
- Every time you send a message, your client sends the entire conversation history along with it
- The model isn't remembering — it's re-reading the whole thread and completing the next part, just like we were finishing sequences earlier
- So as your conversation grows, the amount of data being sent and processed grows with it
-->

---
layout: two-cols
---
# The long context problem

- Context windows can be 1M+ tokens — but bigger isn't automatically better
- "Needle in a haystack" benchmarks show performance drops at scale
- More context = more noise the model has to work through

::right::

<img :src="'/images/LongContext.png'" alt="Long Context" />

<!--
- Some LLMs advertise context windows of 1 million tokens or more, and I'm genuinely skeptical of what that means in practice
- The size of the window doesn't tell you how well the model operates within it
- There are benchmarks like "needle in a haystack" — you hide a specific piece of information deep in a long document and ask the model to find it
- When Anthropic and OpenAI extend their context windows, they use these benchmarks to show improvements
- But critics point out: a model that scores well on the benchmark might just be operating on a bigger haystack — not actually getting better at finding the needle
- The graph tells the story — at some point, you see a drop-off in performance as context grows
-->

---
layout: two-cols
---
# The smart zone

- Short context → better connections, fewer mistakes, clearer intent
- Long context → drift, confusion, missed details
- **Goal: keep your agent in the smart zone**

::right::

<img :src="'/images/ContextWindowV3.png'" alt="Smart Zone" />

<!--
- If you want to get the most out of your AI agent, you need to keep it in what I call the smart zone
- This is the region where the conversation is short enough that the model can hold everything in mind, make good connections, understand the task, and stay on track
- When you start interacting with Cursor, Claude Code, or ChatGPT, keep a mental eye on how long the conversation has been running
- Shorter conversations = fewer errors, better output quality
-->

---
layout: default
footerLeft: "[pro:]TEST!"
footerRight: '2026'
---
# Staying in the smart zone

- **Start a new chat** when a task is done
- **Launch sub-agents** for parallel or isolated work
- **Split work** into smaller tasks with separate context windows
- Use **spec-driven development** — each spec lives in its own context ⚠️

<!--
- There are concrete tactics for this
- Finish a task, open a new chat — don't drag yesterday's debugging session into today's feature work
- Sub-agents are great for parallelism and isolation — they each get a clean context to work in
- Spec-driven development is a natural fit here: you define a spec, hand it to the agent, it works in its own window, done
- but spec driven development also feels like an attempt to revive waterfall
-->
