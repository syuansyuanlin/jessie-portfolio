<script setup lang="ts">
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section id="works" class="projects section-shell" aria-labelledby="projects-title">
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
        class="projects__item"
        :class="`projects__item--${index + 1}`"
        data-reveal
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  padding-top: clamp(8rem, 15vw, 14rem);
  padding-bottom: clamp(8rem, 17vw, 16rem);
}

.projects__heading {
  display: grid;
  grid-template-columns: minmax(8rem, 0.45fr) 1fr;
  gap: clamp(2rem, 8vw, 10rem);

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
  gap: clamp(5.5rem, 12vw, 11rem);
  margin-top: clamp(5rem, 12vw, 11rem);
}

.projects__item--1 {
  margin-left: clamp(0rem, 9vw, 10rem);
}

.projects__item--2 {
  margin-left: auto;
  margin-right: clamp(0rem, 5vw, 6rem);
}

.projects__item--3 {
  width: min(80%, 52rem);
  margin-left: clamp(0rem, 3vw, 4rem);
}

@media (max-width: 850px) {
  .projects__heading {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .projects__item--1,
  .projects__item--2,
  .projects__item--3 {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
