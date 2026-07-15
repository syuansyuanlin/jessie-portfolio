<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { skills } from '@/data/portfolio'
</script>

<template>
  <section class="skills" aria-labelledby="skills-title">
    <div class="skills__shell section-shell">
      <div class="skills__heading" data-reveal>
        <p class="eyebrow">02 / Capabilities</p>
        <h2 id="skills-title">A thoughtful mix<br />of <em>design &amp; code.</em></h2>
      </div>

      <div class="skills__list">
        <article v-for="(group, index) in skills" :key="group.id" class="skill-group" data-reveal>
          <div class="skill-group__meta">
            <span>0{{ index + 1 }}</span>
            <Icon :icon="group.icon" />
          </div>
          <div>
            <h3>{{ group.label }}</h3>
            <p>{{ group.description }}</p>
          </div>
          <ul>
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills {
  padding: clamp(6rem, 12vw, 11rem) 0;
  background: var(--canvas-deep);
}

.skills__shell {
  display: grid;
  grid-template-columns: minmax(12rem, 0.7fr) minmax(0, 1.3fr);
  gap: clamp(3rem, 10vw, 12rem);
}

.skills__heading {
  h2 {
    margin: 1.25rem 0 0;
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4vw, 4.8rem);
    font-weight: 400;
    letter-spacing: -0.055em;
    line-height: 1.03;
  }

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }
}

.skills__list {
  border-top: 1px solid var(--line);
}

.skill-group {
  display: grid;
  grid-template-columns: 4rem minmax(9rem, 0.75fr) minmax(11rem, 0.8fr);
  gap: 1.5rem;
  padding: 2.25rem 0;
  border-bottom: 1px solid var(--line);
}

.skill-group__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  color: var(--sand-deep);
  font-size: 0.64rem;
  letter-spacing: 0.1em;

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
}

.skill-group h3 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 1.65rem;
  font-weight: 400;
  letter-spacing: -0.035em;
}

.skill-group p {
  margin: 0.45rem 0 0;
  color: var(--ink-soft);
  font-size: 0.75rem;
  line-height: 1.8;
}

.skill-group ul {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.55rem;
  margin: 0;
  padding: 0.2rem 0 0;
  list-style: none;
}

.skill-group li {
  padding: 0.34rem 0.65rem;
  border: 1px solid rgba(34, 34, 34, 0.2);
  border-radius: 3rem;
  color: var(--ink-soft);
  font-size: 0.66rem;
  letter-spacing: 0.03em;
}

@media (max-width: 850px) {
  .skills__shell {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 620px) {
  .skill-group {
    grid-template-columns: 2.3rem 1fr;
    gap: 1rem;
  }

  .skill-group ul {
    grid-column: 2;
    padding-top: 0;
  }
}
</style>
