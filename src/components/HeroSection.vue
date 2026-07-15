<script setup lang="ts">
import { Icon } from '@iconify/vue'
import profilePhoto from '@/assets/images/my-photo.jpg'

function scrollToAbout() {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero__bubbles" aria-hidden="true">
      <span class="hero__bubble hero__bubble--1" />
      <span class="hero__bubble hero__bubble--2" />
      <span class="hero__bubble hero__bubble--3" />
      <span class="hero__bubble hero__bubble--4" />
      <span class="hero__bubble hero__bubble--5" />
      <span class="hero__bubble hero__bubble--6" />
    </div>

    <div class="hero__topline" data-reveal>
      <p class="eyebrow">Portfolio / 2025</p>
      <p class="hero__location">Based in Taipei, Taiwan</p>
    </div>

    <div class="hero__composition section-shell">
      <div class="hero__copy" data-reveal data-reveal-delay="0.12">
        <p class="eyebrow">Frontend Developer · UI Designer</p>
        <h1 id="hero-title" class="display-title">Jessie's Portfolio<br /><em>made with care.</em></h1>
        <p class="hero__intro">熱愛從創意發想到畫面實現的過程，希望透過每一次的作品帶給使用者更美好的體驗。</p>
      </div>

      <figure class="hero__portrait" data-reveal data-reveal-delay="0.25">
        <img
          :src="profilePhoto"
          alt="Jessie Lin 的個人形象照示意圖"
        />
        <figcaption>Jessie Lin / 01</figcaption>
      </figure>

      <div class="hero__note" data-reveal data-reveal-delay="0.38">
        <span class="hero__note-line" />
        <p>Interface design<br />with a human touch.</p>
      </div>
    </div>

    <button class="scroll-cue" type="button" aria-label="捲動至關於我" @click="scrollToAbout">
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

.hero__bubbles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero__bubble {
  position: absolute;
  display: block;
  width: var(--bubble-size);
  height: var(--bubble-size);
  border: 1px solid rgba(174, 205, 241, 0.42);
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.82) 0 6%, transparent 23%),
    linear-gradient(135deg, rgba(255, 194, 218, 0.38), rgba(184, 220, 255, 0.36) 58%, rgba(229, 207, 255, 0.28));
  box-shadow: inset 0 0 1.2rem rgba(255, 255, 255, 0.65), 0 0 2rem rgba(174, 205, 241, 0.16);
  opacity: 0.58;
  animation: bubble-float var(--bubble-duration) ease-in-out var(--bubble-delay) infinite alternate;
}

.hero__bubble--1 { --bubble-size: 8rem; --bubble-duration: 12s; --bubble-delay: -3s; top: 17%; left: 4%; }
.hero__bubble--2 { --bubble-size: 12rem; --bubble-duration: 16s; --bubble-delay: -6s; top: 62%; left: 40%; }
.hero__bubble--3 { --bubble-size: 5rem; --bubble-duration: 10s; --bubble-delay: -2s; top: 66%; right: 22%; }
.hero__bubble--4 { --bubble-size: 15rem; --bubble-duration: 18s; --bubble-delay: -5s; top: 8%; right: 5%; }
.hero__bubble--5 { --bubble-size: 4rem; --bubble-duration: 11s; --bubble-delay: -1s; bottom: 13%; left: 23%; }
.hero__bubble--6 { --bubble-size: 7rem; --bubble-duration: 15s; --bubble-delay: -7s; bottom: 4%; right: 3%; }

@keyframes bubble-float {
  from { transform: translate3d(0, 0, 0) scale(0.95); }
  to { transform: translate3d(0.8rem, -1.4rem, 0) scale(1.06); }
}

.hero::before {
  position: absolute;
  top: 22%;
  right: 0;
  width: min(44vw, 45rem);
  height: 57%;
  background: var(--canvas-deep);
  content: '';
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
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(15rem, 0.78fr) minmax(8rem, 0.34fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 6.5rem);
  padding-top: 9rem;
  padding-bottom: 5.2rem;
}

.hero__copy {
  align-self: center;
  padding-top: 4rem;

  .eyebrow {
    margin-bottom: 1.5rem;
  }
}

.display-title em {
  color: var(--sand-deep);
  font-weight: inherit;
}

.hero__copy .display-title {
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(2.66rem, 5.65vw, 5.2rem);
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
  align-self: end;
  width: min(100%, 27rem);
  margin: 0 0 1.5rem;
  justify-self: center;

  &::before {
    position: absolute;
    z-index: -1;
    top: -1.1rem;
    right: -1.1rem;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(184, 158, 136, 0.6);
    content: '';
  }

  img {
    width: 100%;
    aspect-ratio: 0.78;
    object-fit: cover;
    object-position: center;
  }

  figcaption {
    margin-top: 0.7rem;
    color: var(--ink-faint);
    font-size: 0.64rem;
    letter-spacing: 0.14em;
    text-align: right;
    text-transform: uppercase;
  }
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
  50% { transform: translateY(0.35rem); }
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

  .hero::before {
    top: auto;
    bottom: 8%;
    width: 75%;
    height: 42%;
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
