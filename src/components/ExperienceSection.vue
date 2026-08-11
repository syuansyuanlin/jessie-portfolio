<script setup lang="ts">
import graphicLogo from '@/assets/images/1-1.png'
import graphicBusinessCard from '@/assets/images/1-2.png'
import graphicLeaflet from '@/assets/images/1-3.png'

const graphicWorks = [
  {
    image: graphicLogo,
    label: '# logo',
    alt: 'Logo design work',
  },
  {
    image: graphicBusinessCard,
    label: '# business card',
    alt: 'Business card design work',
  },
  {
    image: graphicLeaflet,
    label: '# leaflet',
    alt: 'Leaflet design work',
  },
]
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="graphic-works-title">
    <div class="experience__shell section-shell">
      <div class="experience__heading" data-reveal>
        <p class="eyebrow">04 / Graphic design</p>
        <h2 id="graphic-works-title" class="sr-only">Graphic design works</h2>
      </div>

      <div class="experience__works" role="list">
        <figure
          v-for="work in graphicWorks"
          :key="work.label"
          class="experience__work"
          role="listitem"
          data-reveal
        >
          <div class="experience__image-wrap">
            <img :src="work.image" :alt="work.alt" />
          </div>
          <figcaption>{{ work.label }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.experience {
  padding: clamp(6.5rem, 12vw, 11rem) 0;
  background: var(--paper);
}

.experience .experience__shell {
  display: block;
}

.experience__heading {
  margin-bottom: clamp(2.25rem, 4vw, 3.5rem);

  .eyebrow {
    margin: 0;
  }
}

.experience__works {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 3vw, 2.35rem);
}

.experience__work {
  min-width: 0;
  margin: 0;
}

.experience__image-wrap {
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--canvas);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease;
  }
}

.experience__work:hover img {
  transform: scale(1.025);
}

.experience__work figcaption {
  margin-top: 0.9rem;
  color: var(--ink-soft);
  font-size: 0.78rem;
  letter-spacing: 0.01em;
  line-height: 1.4;
}

@media (max-width: 720px) {
  .experience__works {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .experience__works {
    grid-template-columns: 1fr;
  }
}
</style>
