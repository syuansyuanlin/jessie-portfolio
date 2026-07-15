<script setup lang="ts">
import { experiences } from '@/data/portfolio'
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="experience-title">
    <div class="experience__shell section-shell">
      <div class="experience__heading" data-reveal>
        <p class="eyebrow">04 / Experience</p>
        <h2 id="experience-title">A path shaped by<br /><em>curiosity.</em></h2>
      </div>

      <ol class="experience__timeline">
        <li v-for="experience in experiences" :key="experience.period" data-reveal>
          <p class="experience__period">{{ experience.period }}</p>
          <div class="experience__role">
            <h3>{{ experience.role }}</h3>
            <p>{{ experience.company }}</p>
          </div>
          <p class="experience__description">{{ experience.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience {
  padding: clamp(6.5rem, 12vw, 11rem) 0;
  background: var(--paper);
}

.experience__shell {
  display: grid;
  grid-template-columns: minmax(13rem, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(3rem, 10vw, 12rem);
}

.experience__heading h2 {
  margin: 1.25rem 0 0;
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 4vw, 4.8rem);
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 1.03;

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }
}

.experience__timeline {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);

  li {
    display: grid;
    grid-template-columns: minmax(6rem, 0.48fr) minmax(12rem, 0.95fr) minmax(12rem, 0.85fr);
    gap: 1.5rem;
    padding: 2rem 0 2.1rem;
    border-bottom: 1px solid var(--line);
  }
}

.experience__period {
  margin: 0;
  color: var(--sand-deep);
  font-size: 0.64rem;
  letter-spacing: 0.06em;
}

.experience__role h3 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.15;
}

.experience__role p,
.experience__description {
  margin: 0.4rem 0 0;
  color: var(--ink-faint);
  font-size: 0.7rem;
  line-height: 1.75;
}

.experience__description {
  margin: 0;
  color: var(--ink-soft);
}

@media (max-width: 850px) {
  .experience__shell {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 620px) {
  .experience__timeline li {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.65rem 0;
  }

  .experience__description {
    max-width: 28rem;
  }
}
</style>
