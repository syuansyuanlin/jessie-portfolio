<script setup lang="ts">
import { RouterLink } from 'vue-router'
import graphicLogo from '@/assets/images/1-1.png'
import graphicBusinessCard from '@/assets/images/1-2.png'
import graphicLeaflet from '@/assets/images/1-3.png'

const graphicWorks = [
  {
    image: graphicLogo,
    to: '/graphic-design/booking-system-dm',
    label: '# 訂房系統DM設計',
    alt: '訂房系統 DM 設計',
  },
  {
    image: graphicBusinessCard,
    label: '# 品牌廣告圖',
    alt: '品牌廣告圖設計',
  },
  {
    image: graphicLeaflet,
    to: '/graphic-design/product-dm',
    label: '＃ 產品DM',
    alt: '產品 DM 設計',
  },
]
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="graphic-works-title">
    <div class="experience__shell section-shell">
      <div class="experience__heading" data-reveal>
        <p class="eyebrow">05 / Graphic design</p>
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
          <component
            :is="work.to ? RouterLink : 'div'"
            :to="work.to"
            class="experience__card hover-target"
          >
            <div class="experience__image-wrap">
              <img :src="work.image" :alt="work.alt" />
            </div>
            <figcaption>{{ work.label }}</figcaption>
          </component>
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

.experience__card {
  display: block;
  color: inherit;
  text-decoration: none;
}

.experience__card:focus-visible {
  outline: 2px solid var(--sand-deep);
  outline-offset: 0.45rem;
}

.experience__image-wrap {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--canvas);

  &::after {
    position: absolute;
    inset: 0;
    background: rgba(68, 68, 68, 0.32);
    content: '';
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease;
  }
}

.experience__card:hover img,
.experience__card:focus-visible img {
  transform: scale(1.025);
}

.experience__card:hover .experience__image-wrap::after,
.experience__card:focus-visible .experience__image-wrap::after {
  opacity: 1;
}

.experience__card figcaption {
  margin-top: 0.9rem;
  color: var(--ink-soft);
  font-size: 14px;
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
