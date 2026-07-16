<script setup lang="ts">
import { Icon } from "@iconify/vue";
import profilePhoto from "@/assets/images/GuNEphFaYAA1JvO.jpg";

function scrollToAbout() {
  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <svg class="hero__clip-defs" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="hero-portrait-scallop" clipPathUnits="objectBoundingBox">
          <circle cx="0.5" cy="0.5" r="0.43" />
          <circle cx="0.5" cy="0.095" r="0.085" />
          <circle cx="0.63" cy="0.116" r="0.085" />
          <circle cx="0.738" cy="0.172" r="0.085" />
          <circle cx="0.827" cy="0.262" r="0.085" />
          <circle cx="0.884" cy="0.37" r="0.085" />
          <circle cx="0.905" cy="0.5" r="0.085" />
          <circle cx="0.884" cy="0.63" r="0.085" />
          <circle cx="0.827" cy="0.738" r="0.085" />
          <circle cx="0.738" cy="0.828" r="0.085" />
          <circle cx="0.63" cy="0.884" r="0.085" />
          <circle cx="0.5" cy="0.905" r="0.085" />
          <circle cx="0.37" cy="0.884" r="0.085" />
          <circle cx="0.262" cy="0.828" r="0.085" />
          <circle cx="0.173" cy="0.738" r="0.085" />
          <circle cx="0.116" cy="0.63" r="0.085" />
          <circle cx="0.095" cy="0.5" r="0.085" />
          <circle cx="0.116" cy="0.37" r="0.085" />
          <circle cx="0.173" cy="0.262" r="0.085" />
          <circle cx="0.262" cy="0.172" r="0.085" />
          <circle cx="0.37" cy="0.116" r="0.085" />
        </clipPath>
      </defs>
    </svg>

    <div class="hero__bubbles" aria-hidden="true">
      <span class="hero__bubble hero__bubble--pink" />
      <span class="hero__bubble hero__bubble--blue" />
    </div>

    <div class="hero__topline" data-reveal>
      <p class="eyebrow">Portfolio / 2025</p>
      <p class="hero__location">Based in Taipei, Taiwan</p>
    </div>

    <div class="hero__composition section-shell">
      <div class="hero__copy" data-reveal data-reveal-delay="0.12">
        <p class="eyebrow">Frontend Developer · UI Designer</p>
        <h1 id="hero-title" class="display-title">
          Jessie's Portfolio<br /><em>made with care.</em>
        </h1>
        <p class="hero__intro">
          熱愛從創意發想到畫面實現的過程，希望透過每一次的作品帶給使用者更美好的體驗。
        </p>
      </div>

      <figure class="hero__portrait" data-reveal data-reveal-delay="0.25">
        <div class="hero__portrait-orb">
          <img :src="profilePhoto" alt="Jessie Lin 的個人形象照示意圖" />
        </div>
        <figcaption>Jessie Lin / 01</figcaption>
      </figure>

      <div class="hero__note" data-reveal data-reveal-delay="0.38">
        <span class="hero__note-line" />
        <p>Interface design<br />with a human touch.</p>
      </div>
    </div>

    <button
      class="scroll-cue"
      type="button"
      aria-label="捲動至關於我"
      @click="scrollToAbout"
    >
      <span>Scroll to explore</span>
      <Icon icon="solar:arrow-down-linear" />
    </button>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  display: flex;
  min-height: max(46rem, 100svh);
  overflow: hidden;
  background: var(--canvas);
}

.hero__clip-defs {
  position: absolute;
  width: 0;
  height: 0;
}

.hero__bubbles {
  position: absolute;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero__bubble {
  position: absolute;
  top: 125%;
  left: 0.625rem;
  width: 30rem;
  height: 30rem;
  transform: translateY(-50%);
  background: linear-gradient(
    135deg,
    rgba(190, 226, 240, 0.38),
    rgba(254, 223, 225, 0.24) 72%,
    rgba(255, 247, 243, 0.7)
  );
  opacity: 0.7;
  box-shadow:
    0 0 0.95rem rgba(255, 255, 255, 0.6),
    inset 0 0 1.25rem rgba(255, 255, 255, 0.8);
  transform-origin: center;
  animation:
    hero-bubble-morph 7s ease-in-out infinite alternate,
    hero-bubble-float 8s ease-in-out infinite;
}

.hero__bubble--pink {
  z-index: 1;
  top: 34%;
  left: 40%;
  width: 31.25rem;
  height: 31.25rem;
  background: linear-gradient(
    135deg,
    rgba(190, 226, 240, 0.3),
    rgba(254, 223, 225, 0.42) 70%,
    rgba(255, 247, 243, 0.72)
  );
  animation:
    hero-bubble-morph 9s ease-in-out infinite alternate,
    hero-bubble-float 10s ease-in-out infinite reverse;
}

.hero__bubble--blue {
  top: 62%;
  left: clamp(1.5rem, 5vw, 5rem);
  width: 25rem;
  height: 25rem;
}

@keyframes hero-bubble-morph {
  0% {
    border-radius: 60% 70% 57% 68% / 50% 65% 62% 68%;
    box-shadow:
      0 0 0.95rem rgba(255, 255, 255, 0.6),
      inset 0 0 1.25rem rgba(255, 255, 255, 0.8);
  }
  20% {
    border-radius: 50% 80% 67% 70% / 55% 58% 70% 56%;
    box-shadow:
      0 0 1.25rem rgba(255, 255, 255, 0.7),
      inset 0 0 1.55rem rgba(255, 255, 255, 0.85);
  }
  40% {
    border-radius: 72% 58% 73% 62% / 70% 68% 50% 60%;
    box-shadow:
      0 0 1.125rem rgba(255, 255, 255, 0.65),
      inset 0 0 1.375rem rgba(255, 255, 255, 0.75);
  }
  60% {
    border-radius: 48% 82% 65% 75% / 75% 55% 80% 54%;
    box-shadow:
      0 0 1.375rem rgba(255, 255, 255, 0.75),
      inset 0 0 1.75rem rgba(255, 255, 255, 0.9);
  }
  80% {
    border-radius: 72% 59% 80% 54% / 48% 77% 52%;
    box-shadow:
      0 0 1.0625rem rgba(255, 255, 255, 0.6),
      inset 0 0 1.3125rem rgba(255, 255, 255, 0.7);
  }
  100% {
    border-radius: 60% 70% 57% 68% / 50% 65% 62% 68%;
    box-shadow:
      0 0 0.95rem rgba(255, 255, 255, 0.6),
      inset 0 0 1.25rem rgba(255, 255, 255, 0.8);
  }
}

@keyframes hero-bubble-float {
  0% {
    transform: translateY(-50%) translate(0);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-48%) translate(0.95rem);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-52%) translate(0.3rem);
    opacity: 0.75;
  }
  75% {
    transform: translateY(-47%) translate(-0.625rem);
    opacity: 0.85;
  }
  100% {
    transform: translateY(-50%) translate(0);
    opacity: 0.7;
  }
}

.hero__topline {
  position: absolute;
  z-index: 1;
  top: 7.8rem;
  right: var(--gutter);
  left: var(--gutter);
  display: flex;
  justify-content: space-between;
}

.hero__location {
  margin: 0;
  color: var(--ink-faint);
  font-size: 0.68rem;
  letter-spacing: 0.07em;
}

.hero__composition {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(15rem, 0.78fr) minmax(
      8rem,
      0.34fr
    );
  align-items: center;
  gap: clamp(2rem, 5vw, 6.5rem);
  padding-top: 9rem;
  padding-bottom: 5.2rem;
}

.hero__copy {
  position: relative;
  z-index: 2;
  align-self: center;
  padding-top: 4rem;
  transform: translateX(clamp(3rem, 10vw, 8rem));

  .eyebrow {
    margin-bottom: 1.5rem;
  }
}

.display-title em {
  color: #fffdfb;
  font-size: 0.773em;
  font-weight: inherit;
}

.hero__copy .display-title,
.hero__copy .display-title em {
  font-family: var(--font-heading);
  color: #fffdfb;
  -webkit-text-stroke: 1px rgba(74, 61, 63, 0.72);
  paint-order: stroke fill;
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.95),
    0 2px 0 rgba(227, 166, 182, 0.75),
    0 3px 0 rgba(227, 166, 182, 0.52),
    0 5px 0 rgba(204, 134, 155, 0.24),
    0 9px 14px rgba(152, 102, 117, 0.18);
}

.hero__copy .display-title {
  font-size: clamp(2.66rem, 5.65vw, 5.2rem);
  letter-spacing: 0.03em;
}

.hero__intro {
  max-width: 25rem;
  margin: 2rem 0 0;
  color: var(--ink-soft);
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  line-height: 2;
}

.hero__portrait {
  position: relative;
  z-index: 1;
  align-self: end;
  width: clamp(17rem, 34vw, 31rem);
  max-width: none;
  margin: 0 0 1.5rem;
  justify-self: center;
}

.hero__portrait-orb {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  filter: drop-shadow(0 1.3rem 1.8rem rgba(114, 148, 162, 0.12));

  img {
    width: 100%;
    height: 100%;
    display: block;
    clip-path: url(#hero-portrait-scallop);
    object-fit: cover;
    object-position: center 32%;
  }
}

.hero__portrait figcaption {
  margin-top: 0.7rem;
  color: var(--ink-faint);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-align: right;
  text-transform: uppercase;
}

.hero__note {
  align-self: end;
  margin-bottom: 5.8rem;
  color: var(--ink-soft);
  font-size: 0.7rem;
  letter-spacing: 0.07em;
  line-height: 1.8;

  p {
    margin: 0;
  }
}

.hero__note-line {
  display: block;
  width: 1.8rem;
  height: 1px;
  margin-bottom: 1rem;
  background: var(--sand-deep);
}

.scroll-cue {
  position: absolute;
  z-index: 1;
  bottom: 2.4rem;
  left: var(--gutter);
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0;
  border: 0;
  background: none;
  color: var(--ink-faint);
  cursor: pointer;
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  svg {
    width: 1.1rem;
    height: 1.1rem;
    animation: cue 2.2s ease-in-out infinite;
  }
}

@keyframes cue {
  50% {
    transform: translateY(0.35rem);
  }
}

@media (max-width: 900px) {
  .hero__composition {
    grid-template-columns: 1fr 0.72fr;
    gap: 2rem;
  }

  .hero__note {
    display: none;
  }
}

@media (max-width: 620px) {
  .hero {
    min-height: 48rem;
  }

  .hero__topline {
    top: 6.6rem;
  }

  .hero__location {
    display: none;
  }

  .hero__composition {
    grid-template-columns: 1fr;
    align-content: center;
    gap: 2.2rem;
    padding-top: 8rem;
    padding-bottom: 5rem;
  }

  .hero__copy {
    padding-top: 0;
    transform: none;
  }

  .hero__intro {
    max-width: 20rem;
    margin-top: 1.4rem;
    font-size: 0.78rem;
  }

  .hero__portrait {
    width: min(62vw, 17rem);
    margin: 0 10% 0 auto;
  }

  .scroll-cue {
    bottom: 1.5rem;
  }
}
</style>
