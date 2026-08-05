<script setup lang="ts">
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section id="works" class="projects" aria-labelledby="projects-title">
    <div class="projects__marquee" aria-label="Jessie Design">
      <div class="projects__marquee-track" aria-hidden="true">
        <svg
          v-for="index in 8"
          :key="index"
          class="projects__marquee-word"
          viewBox="0 0 850 110"
          focusable="false"
        >
          <text class="projects__marquee-text" x="5" y="84">Jessie♡Design．</text>
        </svg>
      </div>
    </div>

    <div class="projects__shell section-shell">
      <div class="projects__heading">
        <p class="eyebrow" data-reveal>03 / Selected works</p>
        <div data-reveal>
          <h2 id="projects-title" class="display-title">Works with<br /><em>meaning.</em></h2>
          <p>從問題出發，把複雜留在背後。</p>
        </div>
      </div>

      <div class="projects__list">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :reversed="index % 2 === 1"
          class="projects__item"
          data-reveal
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  position: relative;
  z-index: 1;
  min-height: 100svh;
  width: 100%;
  isolation: isolate;
  background: #f9f9f9;
  box-shadow: 0 -1.4rem 2.8rem rgba(71, 62, 58, 0.035);
}

.projects__shell {
  padding-top: clamp(8rem, 15vw, 14rem);
  padding-bottom: clamp(8rem, 17vw, 16rem);
}

.projects__marquee {
  overflow: hidden;
  padding: 0.75rem 0 0.9rem;
  white-space: nowrap;
}

.projects__marquee-track {
  display: flex;
  width: max-content;
  animation: projects-marquee 48s linear infinite;
  will-change: transform;

  > .projects__marquee-word {
    display: block;
    flex: 0 0 auto;
    width: clamp(22rem, 30vw, 25rem);
    height: clamp(3.1rem, 4.8vw, 5.3rem);
    margin-right: clamp(0.75rem, 1vw, 1.25rem);
  }

  .projects__marquee-text {
    fill: none;
    font-family: var(--font-heading);
    font-size: 84px;
    font-weight: 400;
    letter-spacing: 3px;
    stroke: #d2d2d2;
    stroke-width: 1.6px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}

@keyframes projects-marquee {
  to {
    transform: translateX(-50%);
  }
}

.projects__heading {
  display: grid;
  grid-template-columns: minmax(8rem, 0.45fr) 1fr;
  gap: clamp(2rem, 8vw, 10rem);

  .display-title {
    font-size: clamp(2.4rem, 4.213vw, 4.75rem);
  }

  .display-title em {
    color: var(--sand-deep);
    font-weight: inherit;
  }

  div > p {
    max-width: 17rem;
    margin: 1.6rem 0 0 0.3rem;
    color: var(--ink-faint);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }
}

.projects__list {
  display: flex;
  flex-direction: column;
  width: min(100%, 67.5rem);
  gap: clamp(2.5rem, 4vw, 4rem);
  margin: clamp(5.5rem, 12vw, 11rem) auto 0;
}

.projects__item {
  position: relative;
}

@media (max-width: 850px) {
  .projects__heading {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

}

@media (prefers-reduced-motion: reduce) {
  .projects__marquee-track {
    animation-play-state: paused;
  }
}

</style>
