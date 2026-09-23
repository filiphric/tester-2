---
layout: image
image: /images/17th_century.png
kicker: ''
mark: none
raw: true
---

<LiveJoin />

<!--
- we’ll move to 17th century Europe 
- it’s the dawn of technology, companies are being formed, forming global trade, we see commerce taking off
- it’s also a world that’s reshaping - empires expanding, new scientific ideas challenging inherited knowledge
- now I want you to imagine, that we enter this era and we pull a person from this era into today’s time 
- we want to show them the world of today, let them see the difference between the world back then and how the world is today
- what would you decide to show this person? what do you think would fascinate them? would it be our computers? your iPhones? or would it be our ways of transport? what do you think would fascinate them the most? would you show them AI?
- of course, there are probably many good answers to this questions, but I’m going to tell you my favourite
- this would be something that would definitely make them stop immediately and make them truly impressed
-->

---
layout: image
image: /images/supermarket-spice-aisle-editorial-collage.png
kicker: ''
mark: none
raw: true
---

<LiveJoin />

<!--
- it’s your average supermarket spices aisle
- seeing this would be absolutely jaw dropping
- why?
- because back in 17th century the price of average spices like nutmeg, cinnamon, Pepper, cloves and other spices would be higher than gold
- seeing an aisle full of them, available to common people - the person we just took away from that era might think we live in an unprecedented luxury
- the cost of import was so high, that spices were only available to a few
-->

---
layout: center
---

# <Highlighter>Changes.</Highlighter>

<!--
- 17th century person’s lens
- but by the end of 17th century everything changed
- technological advance drove the price down, and spice has become widely available
- so why am I talking about all this? 
- because I think that these days, we are witnessing that something that was incredibly expensive, has become now incredibly abundant
-->

---
layout: center
---

# <Highlighter>Code.</Highlighter>

<!--
- I’m of course talking about code 
- just a few months ago, we witnessed a rise of technology that seemingly overnight made code much cheaper than we ever hoped it would be
- you can try taking someone from just 10 or 5 years ago, tell them code has become cheap and they will call you crazy
- but today we know that we can produce as much of code as we want
- probably even more than we should if you ask me
-->

---
layout: center
---

# <Highlighter>Our lens.</Highlighter>

<!--
- which is the main reason why today I want to talk about our lens - our view of the world
- I don't want us as testers, fall into the same biases that the 17th century person may have
- just because we can have a lot of something, it’s easily available and super cheap, doesn’t meant that we have become code rich
- today, I want to talk about our perspectives as testers, quality engineers
- my hope you to be leaving this keynote with your lens adjusted
-->

---
layout: none
clicks: 1
---

<div class="maslow-reveal">
  <h2 v-click="1"><Highlighter>Maslow’s hierarchy of needs</Highlighter></h2>
  <svg viewBox="0 0 1000 480" role="img" :aria-label="$clicks > 0 ? 'Maslow’s hierarchy of needs: physiological needs at the base, followed by safety, love and belonging, esteem, and self-actualization at the top.' : 'Triangle illustration'">
    <polygon v-click.hide="1" points="290,20 540,460 40,460" fill="var(--highlighter-soft)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round" />
    <g v-click="1">
      <g stroke="var(--ink)" stroke-width="3" stroke-linejoin="round">
        <polygon points="290,20 340,108 240,108" fill="var(--highlighter)" />
        <polygon points="240,108 340,108 390,196 190,196" fill="var(--crt-amber)" />
        <polygon points="190,196 390,196 440,284 140,284" fill="var(--decor-pink)" />
        <polygon points="140,284 440,284 490,372 90,372" fill="var(--decor-teal)" />
        <polygon points="90,372 490,372 540,460 40,460" fill="var(--c64-blue)" />
      </g>
      <g stroke="var(--ink-3)" stroke-width="1.5">
        <line x1="315" y1="64" x2="590" y2="64" />
        <line x1="365" y1="152" x2="590" y2="152" />
        <line x1="415" y1="240" x2="590" y2="240" />
        <line x1="465" y1="328" x2="590" y2="328" />
        <line x1="515" y1="416" x2="590" y2="416" />
      </g>
      <g fill="var(--ink)" style="font-size: 28px; font-weight: 700;" dominant-baseline="middle">
        <text x="620" y="64">Self-actualization</text>
        <text x="620" y="152">Esteem</text>
        <text x="620" y="240">Love and belonging</text>
        <text x="620" y="328">Safety</text>
        <text x="620" y="416">Physiological needs</text>
      </g>
    </g>
  </svg>
</div>

<style>
.maslow-reveal {
  position: absolute;
  inset: 0;
  padding: 64px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.maslow-reveal h2 {
  font-size: 48px;
  line-height: 1.1;
  margin: 0;
  text-align: center;
}

.maslow-reveal svg {
  width: 100%;
  flex: 1;
  min-height: 0;
  font-family: var(--font-body);
}
</style>

<!--
- uh-oh, he wrote a triangle on a testing conference - not again
- don’t worry, this is a different one, even more famous than the one you might have though of
- do you know which one I’m talking about?
- [click] Maslow’s hierarchy of needs 
- besides being great with triangles he’s an author of a very famous quote
-->

---
layout: quote
author: Abraham Maslow
clicks: 1
---

# It is tempting, *if the only tool you have is a hammer*, to treat everything as if it were a nail.

<!--
- If all you have is a hammer, everything looks like a nail
- he criticized his fellow academics that had the tendency to look at all of the problems of the world through their academic lens.
- in other words
- if all you have is 17th century perspective, spices In The supermarket aisle look like riches
- and I think that as testers we sometimes fall into similar biases
- Every tech problem looks like a testing problem
- and I don't want us to fall into these biases
- I truly care about our testing community
- [click] I spent a lot of time over the past 3 years talking to fellow testers, discussing the changes that AI brought us, how it’s going to change our profession
- I’ve see a lot of hope, I’ve seen a lot of cope, I’ve seen a lot of hammer and nail thinking but I’ve also seen a lot of innovatiom in the quality landscape, not just evolutions, but revolution
- so I want to share some of my observations and learnings about all of this
- I’ll share some hot takes, 
- maybe some things that will make you uncomfortable
- maybe some stuff we may not agree on but I hope we can start having a debate about
-->

---
layout: center
disabled: true
---

# <Highlighter>Tester 2.0</Highlighter>

<!--
- And this is what I want to talk about today
- i gave my talk this lofty title - tester 2.0
- sounds like big update, but we need to sure to not indroduce any breaking changes
-->

---
layout: center
disabled: true
---

# <Highlighter>Disclaimer.</Highlighter>
### You might be leaving with more questions than answers

<!-- 
- before we jump in I have disclaimer
- you might leave this presentation with more questions than answers
- this is not about me being the smartest person in the room, providing some amazing wisdom to you all
- in fact, I think most of the time the smartes people in the room are in the audience
- the goal for me today is to leave you with some questions, so that eventually as a community we can come up with some good anwers to them, together
- because I truly believe that the true magic of this conference happens in the hallways - in discussions with fellow professionals
-->

---
layout: default
title: Three lies, things to abandon, our strengths
---

<AgendaColumns />

<!--
- so I split my observations and convictions into these three categories
- I’ll talk about
  - three lies that we as testers like to tell ourselves
  - things, convictions and ideas that we need to abandon
  - what our strenths that have the potential to make us indispensible, if we lean into them
-->
