<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Project } from '@/types/portfolio'

defineProps<{
  project: Project
  reversed?: boolean
}>()
</script>

<template>
  <article class="project-card" :class="{ 'project-card--reversed': reversed }">
    <div class="project-card__image-wrap">
      <img class="project-card__image" :src="project.image" :alt="project.imageAlt" loading="lazy" />
      <p class="project-card__number">{{ project.number }}</p>
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
      <div class="project-card__actions">
        <a :href="project.demoUrl" target="_blank" rel="noreferrer">
          View project <Icon icon="solar:arrow-up-right-linear" />
        </a>
        <a :href="project.githubUrl" target="_blank" rel="noreferrer">
          GitHub <Icon icon="solar:arrow-up-right-linear" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(17rem, 0.72fr);
  align-items: center;
  gap: clamp(2.75rem, 8vw, 9rem);
  width: 100%;
}

.project-card--reversed {
  grid-template-columns: minmax(17rem, 0.72fr) minmax(0, 1.12fr);

  .project-card__image-wrap {
    grid-row: 1;
    grid-column: 2;
  }

  .project-card__detail {
    grid-row: 1;
    grid-column: 1;
  }
}

.project-card__image-wrap {
  position: relative;
  overflow: hidden;
  background: var(--canvas-deep);
  box-shadow: 0 1.1rem 2.8rem rgba(34, 34, 34, 0.07);
}

.project-card__image {
  width: 100%;
  aspect-ratio: 1.46;
  object-fit: cover;
  filter: saturate(0.72) sepia(0.08);
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), filter 800ms ease;
}

.project-card__number {
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  margin: 0;
  padding: 0.24rem 0.45rem;
  background: rgba(255, 255, 255, 0.86);
  color: var(--ink-soft);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
}

.project-card__detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-card__detail > div > p,
.project-card__description {
  margin: 0;
  color: var(--ink-faint);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}

.project-card h3 {
  margin: 0.28rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 3.35rem);
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
  line-height: 1.05;
}

.project-card__description {
  max-width: 25rem;
  margin-top: 1.5rem;
  color: var(--ink-soft);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  line-height: 2;
}

.project-card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.6rem 0 0;
  padding: 0;
  list-style: none;
}

.project-card li {
  color: var(--ink-faint);
  font-size: 0.6rem;
  letter-spacing: 0.08em;

  &:not(:last-child)::after {
    margin-left: 0.45rem;
    color: var(--sand-deep);
    content: '·';
  }
}

.project-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  margin-top: 2.2rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.42rem;
    padding-bottom: 0.32rem;
    border-bottom: 1px solid var(--ink);
    color: var(--ink);
    font-size: 0.64rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: color 300ms ease, gap 300ms ease;

    &:hover {
      gap: 0.7rem;
      color: var(--sand-deep);
    }
  }

  svg {
    width: 0.85rem;
    height: 0.85rem;
  }
}

.project-card:hover {
  .project-card__image {
    filter: saturate(0.84) sepia(0.03);
    transform: scale(1.025);
  }
}

@media (max-width: 850px) {
  .project-card,
  .project-card--reversed {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card--reversed {
    .project-card__image-wrap,
    .project-card__detail {
      grid-row: auto;
      grid-column: auto;
    }
  }

  .project-card__detail {
    max-width: 32rem;
  }

  .project-card__description {
    max-width: 29rem;
  }
}

@media (max-width: 460px) {
  .project-card h3 {
    font-size: 2.2rem;
  }

  .project-card__actions {
    margin-top: 1.8rem;
  }
}
</style>
