<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import illustrationRibbon from "@/assets/images/S__189390854_0.jpg";
import illustrationFloat from "@/assets/images/S__189390853_0.jpg";
import illustrationTea from "@/assets/images/S__189390852_0.jpg";
import illustrationPortrait from "@/assets/images/S__149962756_0.jpg";
import dogjuice from "@/assets/images/dogjuice.png";

interface SwiperInstance {
  destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
}

interface SwiperConstructor {
  new (element: HTMLElement, options: Record<string, unknown>): SwiperInstance;
}

declare global {
  interface Window {
    Swiper?: SwiperConstructor;
  }
}

const illustrations = [
  {
    image: illustrationRibbon,
    title: "Ribbon day",
    category: "Character study",
  },
  { image: illustrationFloat, title: "Sweet float", category: "Summer sketch" },
  { image: illustrationTea, title: "Tea time", category: "Small story" },
  {
    image: illustrationPortrait,
    title: "Soft portrait",
    category: "Character study",
  },
];
const carouselIllustrations = [
  ...illustrations,
  ...illustrations,
  ...illustrations,
];

const carousel = ref<HTMLElement | null>(null);
let swiper: SwiperInstance | undefined;

onMounted(async () => {
  await nextTick();
  if (!carousel.value || !window.Swiper) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  swiper = new window.Swiper(carousel.value, {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    loopAdditionalSlides: 4,
    speed: 10000,
    grabCursor: true,
    allowTouchMove: true,
    autoplay: reduceMotion
      ? false
      : {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
  });
});

onBeforeUnmount(() => swiper?.destroy(true, true));
</script>

<template>
  <section
    id="illustrations"
    class="illustrations"
    aria-labelledby="illustrations-title"
  >
    <div class="illustrations__intro section-shell" data-reveal>
      <p class="eyebrow">04 / Illustration archive</p>
      <div>
        <h2 id="illustrations-title" class="display-title">
          Drawn with<br /><em>feeling.</em>
        </h2>
        <p>把日常裡的小小想像，畫成柔軟的角色。</p>
      </div>
    </div>

    <div class="illustrations__carousel-actions section-shell" data-reveal>
      <RouterLink class="illustrations__more" :to="{ name: 'illustration-works' }">
        <span class="illustrations__more-label">View More</span>
        <span class="illustrations__more-circle" aria-hidden="true">→</span>
      </RouterLink>
    </div>

    <div
      ref="carousel"
      class="illustrations__carousel swiper"
      aria-label="插畫作品輪播"
      data-reveal
    >
      <div class="swiper-wrapper">
        <article
          v-for="(illustration, index) in carouselIllustrations"
          :key="`${illustration.title}-${index}`"
          class="illustration-card swiper-slide"
        >
          <img :src="illustration.image" :alt="illustration.title" />
          <p class="sr-only">
            {{ String(index + 1).padStart(2, "0") }} /
            {{ illustration.category }} — {{ illustration.title }}
          </p>
        </article>
      </div>
    </div>

    <div class="illustrations__dogjuice" aria-hidden="true">
      <img :src="dogjuice" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.illustrations {
  position: relative;
  z-index: 2;
  isolation: isolate;
  overflow: visible;
  padding: clamp(7rem, 14vw, 13rem) 0 clamp(7rem, 12vw, 11rem);
  background: #ffffff;
}

.illustrations::before {
  position: absolute;
  z-index: 0;
  top: clamp(-12rem, -14vw, -7rem);
  right: 0;
  left: 0;
  height: clamp(7rem, 14vw, 12rem);
  background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #ffffff 100%);
  content: "";
  pointer-events: none;
}

.illustrations > * {
  position: relative;
  z-index: 1;
}

.illustrations__intro {
  display: grid;
  grid-template-columns: minmax(8rem, 0.45fr) 1fr;
  gap: clamp(2rem, 8vw, 10rem);

  .display-title {
    font-size: clamp(2.4rem, 4.186vw, 4.75rem);
  }

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }

  div > p {
    max-width: 18rem;
    margin: 1.5rem 0 0 0.25rem;
    color: var(--ink-faint);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }
}

.illustrations__carousel {
  width: 100%;
  margin-top: clamp(2rem, 4vw, 3.25rem);
  overflow: hidden;
  border-top: 1px solid rgba(209, 133, 163, 0.74);
  border-bottom: 1px solid rgba(209, 133, 163, 0.74);

  :deep(.swiper-wrapper) {
    align-items: stretch;
    transition-timing-function: linear !important;
  }
}

.illustrations__carousel-actions {
  display: flex;
  justify-content: flex-end;
}

.illustrations__dogjuice {
  position: absolute;
  z-index: 2;
  bottom: clamp(3rem, 5vw, 5.5rem);
  left: clamp(1.5rem, 11vw, 10rem);
  width: clamp(7.5rem, 12vw, 10.5rem);
  pointer-events: none;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.illustrations__more {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  color: var(--ink);

  &:focus-visible {
    outline: 2px solid var(--sand-deep);
    outline-offset: 0.4rem;
  }

  &:hover .illustrations__more-circle {
    background: var(--ink);
    color: var(--paper);
    transform: scale(1.16);
  }
}

.illustrations__more-label {
  font-family: var(--font-heading);
  font-size: 18px;
  letter-spacing: -0.025em;
}

.illustrations__more-circle {
  display: grid;
  width: clamp(4.5rem, 6vw, 5.75rem);
  height: clamp(4.5rem, 6vw, 5.75rem);
  place-items: center;
  border: 1px solid currentcolor;
  border-radius: 50%;
  font-size: 1.45rem;
  line-height: 1;
  transition:
    transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 350ms ease,
    color 350ms ease;
}

.illustration-card {
  position: relative;
  width: clamp(16rem, 28vw, 30rem);
  aspect-ratio: 1;
  overflow: hidden;
  background: #f7eff0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.92) sepia(0.03);
  }
}

@media (max-width: 850px) {
  .illustrations__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 639px) {
  .illustrations__dogjuice {
    bottom: 2rem;
    left: 1rem;
  }

  .illustration-card {
    width: clamp(14rem, 72vw, 19rem);
  }
}
</style>
