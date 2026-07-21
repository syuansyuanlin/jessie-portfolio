<script setup lang="ts">
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section id="works" class="projects" aria-labelledby="projects-title">
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
</style>
