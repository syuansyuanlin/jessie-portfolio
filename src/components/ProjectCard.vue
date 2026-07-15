<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Project } from '@/types/portfolio'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__image-wrap">
      <img class="project-card__image" :src="project.image" :alt="project.imageAlt" loading="lazy" />
      <p class="project-card__number">{{ project.number }}</p>
      <div class="project-card__links">
        <a :href="project.demoUrl" target="_blank" rel="noreferrer">Demo <Icon icon="solar:arrow-up-right-linear" /></a>
        <a :href="project.githubUrl" target="_blank" rel="noreferrer">GitHub <Icon icon="solar:arrow-up-right-linear" /></a>
      </div>
    </div>

    <div class="project-card__detail">
      <div>
        <p>{{ project.category }}</p>
        <h3>{{ project.title }}</h3>
      </div>
      <p class="project-card__description">{{ project.description }}</p>
      <ul aria-label="使用技術">
        <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
      </ul>
    </div>
  </article>
</template>

<style scoped lang="scss">
.project-card {
  width: min(100%, 63rem);
}

.project-card__image-wrap {
  position: relative;
  overflow: hidden;
  background: var(--canvas-deep);
}

.project-card__image {
  width: 100%;
  aspect-ratio: 1.45;
  object-fit: cover;
  filter: saturate(0.65) sepia(0.1);
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), filter 800ms ease;
}

.project-card__number {
  position: absolute;
  top: 1.4rem;
  left: 1.4rem;
  margin: 0;
  color: var(--paper);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.12);
}

.project-card__links {
  position: absolute;
  right: 1.4rem;
  bottom: 1.3rem;
  display: flex;
  gap: 0.65rem;
  opacity: 0;
  transform: translateY(0.6rem);
  transition: opacity 400ms ease, transform 400ms ease;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem 0.7rem;
    background: rgba(255, 255, 255, 0.9);
    color: var(--ink);
    font-size: 0.66rem;
    letter-spacing: 0.06em;
    transition: background 300ms ease;

    &:hover {
      background: var(--paper);
    }
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
}

.project-card__detail {
  display: grid;
  grid-template-columns: minmax(12rem, 0.8fr) minmax(12rem, 0.8fr) auto;
  align-items: end;
  gap: 1.25rem;
  padding: 1.3rem 0 0;
}

.project-card__detail > div > p,
.project-card__description {
  margin: 0;
  color: var(--ink-faint);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
}

.project-card h3 {
  margin: 0.28rem 0 0;
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 1;
}

.project-card__description {
  max-width: 17rem;
  line-height: 1.75;
}

.project-card ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-card li {
  color: var(--ink-faint);
  font-size: 0.6rem;
  letter-spacing: 0.04em;

  &:not(:last-child)::after {
    margin-left: 0.45rem;
    color: var(--sand-deep);
    content: '·';
  }
}

.project-card:hover {
  .project-card__image {
    filter: saturate(0.85) sepia(0.03);
    transform: scale(1.04);
  }

  .project-card__links {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 720px) {
  .project-card__detail {
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }

  .project-card__description {
    grid-row: 2;
    grid-column: 1 / -1;
    max-width: 25rem;
  }

  .project-card ul {
    justify-content: flex-end;
  }

  .project-card__links {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 460px) {
  .project-card__detail {
    grid-template-columns: 1fr;
  }

  .project-card ul {
    justify-content: flex-start;
  }
}
</style>
