---
layout: default
clicks: 1
---

# <Highlighter>Three lies</Highlighter>

<ThreeLies :reveal="1" style="--three-lies-font-size: 44px; transform: translateX(-64px);" />

<script setup>
import ThreeLies from '../components/ThreeLies.vue'
</script>

<!--
- golden age of testing is coming
- i heard this being said from a stage - this year
- logic is now that code has become cheap, with the amount of code being produced,  we will need more testing
- that means more testers will be hired, teams will get bigger, there will be more demand on the job market for QA specialists
- I am as guilty as everyone else of believing in them, so I’m not tryng to take the high ground here
- but I do actually think this is a lie that we sometimes tell ourselves in the testing community
- it’s actually easy to think this and in a way it makes sense
- more testing work does not automatically mean bigger QA teams
- there are some signals that the golden age might not be upon us
-->

---
layout: default
---

# <Highlighter>GitHub activity is accelerating</Highlighter>

<GithubQaTrend />

<script setup>
import GithubQaTrend from '../components/GithubQaTrend.vue'
</script>

<!--
- When we look at what’s happening on GitHub, we can see that since AI grew in popularity, there has beem this massive growth
- numbers of pull requests, commits and new repos has grown pretty much exponentially
- all of the metrics point to the fact that the amount of code being produced is skyrocketting
- but the golden age of testers does not seem to be happening, we’ve got some signals that seem to suggest this
-->

---
layout: default
---

# <Highlighter>Manual-only demand is shrinking</Highlighter>

<ManualQaDemand />

<script setup>
import ManualQaDemand from '../components/ManualQaDemand.vue'
</script>

<!--
- first, the demand for manual-only testing seems to be shrinking
- this is a data point from AccleroTech that estimates a drop of global manual tester listings at the end of 2026
-->

---
layout: default
---

# <Highlighter>Manual skills. Hybrid expectations.</Highlighter>

<ManualQaDemand hybrid />

<script setup>
import ManualQaDemand from '../components/ManualQaDemand.vue'
</script>

<!--
- The demand is still there - SoftwareTestPilot reports that roughly 38% of QA listings still hire manual testers, especially in banking, insurance, healthcare, e-commerce, and government.
- Those roles increasingly ask for API testing, SQL, and familiarity with Playwright or Selenium alongside manual testing skills.
-->

---
layout: center
---

<h1 style="max-width: none;"><Highlighter>More code ≠ more testing jobs</Highlighter></h1>

<!--
- so there doesn’t seem to be causality between the amount of code and number of testing jobs
- the hardest part of this golden age of testers lie, is that there is a grain of truth in it - that’s why it is so deceiving
- I wouldn’t say QAs are wrong to expect more quality problems and more things to validate
- after all it kinda makes sense that with more code we’d have need for more things to test
- but it looks like our employers are not too enthusiastic about doing all that labor the same way and with the same tools as 5 years ago
- which brings us to the second lie we like to tell ourselves
-->

---
layout: default
clicks: 1
---

# <Highlighter>Three lies</Highlighter>

<ThreeLies :reveal="2" />

<script setup>
import ThreeLies from '../components/ThreeLies.vue'
</script>

<!--
- this one is tricky - hurts my ego
- as someone who spent years in testing this is something I refused to let go for the longest time
- because of course things get worse if we don’t have testers on the team - who’s going to help find all the bugs?
- the main problem with this statement, is that while as testers we tend to test everything, including our teammates patience, we kinda took this assumption for granted and didn’t put it under test
- but there were some companies someone did, and I didn’t like the results
- because I thought if anyone tried this, it’s probably some small companies
-->

---
layout: center
title: Yahoo, Microsoft, Uber, Google, Spotify, NASA
---

<div class="company-logos">
  <img :src="'/images/companies/yahoo.svg'" alt="Yahoo" />
  <img :src="'/images/companies/microsoft.svg'" alt="Microsoft" />
  <img class="uber-logo" :src="'/images/companies/uber.svg'" alt="Uber" />
  <img :src="'/images/companies/google.svg'" alt="Google" />
  <img :src="'/images/companies/spotify.svg'" alt="Spotify" />
  <img class="nasa-logo" :src="'/images/companies/nasa.svg'" alt="NASA" />
</div>

<style>
.company-logos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 112px 64px;
  width: 100%;
}

.company-logos img {
  width: 100%;
  max-width: 240px;
  height: 100px;
  object-fit: contain;
}

.company-logos .uber-logo {
  max-width: 180px;
  height: 180px;
}

.company-logos .nasa-logo {
  max-width: 164px;
  height: 164px;
}
</style>

<!--
- so these are some of the small companies that tried to experiment with downsizing or even dissolving their dedicated QA - and these are just examples of some of the bigger companies
- you know what happened in these companies?
- I’m going to disappoint you, the answer is not AI, it’s something that has been talked about much longer than AI
-->

---
layout: default
---

# <span class="ds-mark">Shift left</span>

<v-clicks class="shift-left-points">

- cultural and architectural transformation
- shifting responsibility to developers
- automation and observability
- central governance & decentralized execution
- metrics driven validation

</v-clicks>

<style>
.shift-left-points {
  gap: 24px;
  margin-block: auto;
}

.shift-left-points li {
  font-size: 40px;
  line-height: 1.3;
  padding-left: 1em;
}

.shift-left-points li::before {
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
- [click] when shift-left is treated as a cultural and architectural transformation, it works really well - I’ve seen shift left being discussed in QA conferences as this sort of higher involvement of testers in earlier stages of development, but if it really works, it manifests
- [click] systematic shift of responsiblity to developers
- [click] we see manual gates being replaced by automation and observability systems
- [click] at enterprise scale we see a combination of central governancee with decentralized execution - this sort of “you build it, you run it” culture
- [click] and then metrics make their way into the system too - tracking defect escape rates, MTTD, and change failure rates
- many of these teams work faster, ship less bugs, spend less time on code review and reduced their costs - and they have done it while cutting down QA teams
-->


---
layout: default
---

<!-- 
- I told you I was going to make you uncomfortable
- look - when times get uncertain, I think it feels reassuring to say "oh they’ll find out how much they needed use and they will come back crawling"
-->


---
layout: quote
---

# We can’t build the future of testing on the hope that teams will fail without us.

<v-click>
– me, just now
</v-click>

<!--
- But it leaves our future dependent on somebody else failing.
- We can’t build the future of testing on the hope that teams will fail without us.
- [click] if you’re wondering who said that, it was me, just now
- I truly believe that we have have to make a better case for ourselves
-->

---
layout: default
clicks: 1
---

# <Highlighter>Three lies</Highlighter>

<ThreeLies :reveal="3" />

<script setup>
import ThreeLies from '../components/ThreeLies.vue'
</script>

<!--
- this lie that some people tell themselves is oftentimes anchored in life experience
- people will say things like - the changes that AI brought are no different than when automation came
- but I honestly find this stance the weirdest one of all
- tech has been full of changes, paradigm shifts - it’s constantly on the move, I honestly don’t see how the changes would suddenly stop
-->

---
layout: quote
---

# ...but they said the same about automation

<!-- 
- and I understand the skepticism - they said automation would replace testers, and we’re still here
- but while that’s true, I think this counter-argument is a bit shallow
- yes, test automation did not replace testers, but saying that nothing changed is ignoring what happened to the industry
- the challenges we face, the tools we use, the approaches we take - that has changed tremendously
- the mere fact that a profession survives a technological change does not capture the full reality of what happens inside that profession
- also - as testers we don’t work in isolation - if the daily job of everyone around you changes, can you really expect that none of that affects you?
 -->

---
layout: center
---

# Beware of <span class="ds-mark">predictions</span>

<!-- 
- and lastly - “Things will stay the same” is a prediction.
- It deserves the same scrutiny we’d give any other assumption
- as professional skeptics, we should probably beware of such claims
- it is soothing to believe that things will not change, but just because it is soothing, it doesn’t mean it’s true
- in fact, it may just be a way to cope with our fears
-->
