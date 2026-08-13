<script setup lang="ts">
import coverImage from '@/assets/images/DM.png'
</script>

<template>
  <main class="graphic-work-detail">
    <section class="graphic-work-detail__intro section-shell">
      <p class="eyebrow" data-reveal>GRAPHIC DESIGN / 04</p>

      <div class="graphic-work-detail__heading" data-reveal>
        <h1>Graphic design<br /><em>works.</em></h1>
        <p>平面設計作品集</p>
      </div>

      <figure class="graphic-work-detail__cover" data-reveal>
        <img :src="coverImage" alt="訂房系統 DM 設計" />
      </figure>
    </section>

    <section class="graphic-work-detail__overview section-shell" data-reveal>
      <p class="eyebrow">PROJECT OVERVIEW</p>

      <div class="graphic-work-detail__overview-grid">
        <div class="graphic-work-detail__summary">
          <h2>Booking system<br /><em>DM design.</em></h2>
          <p>
            This project translates a hotel booking system into an approachable visual guide. Clear
            information hierarchy, gentle colour and simple illustrations help users understand each
            service at a glance, while keeping the brand warm and human.
          </p>
        </div>

        <dl class="graphic-work-detail__meta">
          <div>
            <dt>Category</dt>
            <dd>Print and digital DM</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Visual design and information layout</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>2025</dd>
          </div>
        </dl>
      </div>
    </section>
  </main>
</template>

<style scoped>
.graphic-work-detail {
  min-height: 100vh;
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
}

.eyebrow {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.graphic-work-detail__intro {
  /* The site header is fixed, so reserve a clear title area beneath it. */
  padding-top: clamp(10rem, 14vw, 13rem);
  padding-bottom: clamp(5rem, 9vw, 8rem);
}

.graphic-work-detail__heading {
  width: min(100%, 43rem);
  margin: clamp(2.7rem, 5vw, 5rem) auto 0;
}

.graphic-work-detail__heading h1,
.graphic-work-detail__summary h2 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 0.88;
}

.graphic-work-detail__heading h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.66rem, 5.65vw, 5.2rem);
  letter-spacing: 0.03em;
}

.graphic-work-detail__heading em,
.graphic-work-detail__summary em {
  color: var(--sand-deep);
  font-style: italic;
}

.graphic-work-detail__heading > p {
  margin: 1.65rem 0 0;
  color: var(--ink-soft);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

.graphic-work-detail__cover {
  width: min(100%, 52rem);
  margin: clamp(3.8rem, 7vw, 7rem) auto 0;
}

.graphic-work-detail__cover img {
  display: block;
  width: 100%;
  height: auto;
}

.graphic-work-detail__overview {
  padding-top: clamp(5rem, 11vw, 11rem);
  padding-bottom: clamp(7rem, 13vw, 13rem);
}

.graphic-work-detail__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 11vw, 12rem);
  margin-top: clamp(3rem, 6vw, 6rem);
  margin-left: min(15vw, 12rem);
}

.graphic-work-detail__summary h2 {
  font-family: var(--font-heading);
  font-size: clamp(2.7rem, 4.7vw, 5rem);
  letter-spacing: 0.03em;
}

.graphic-work-detail__summary p {
  max-width: 44rem;
  margin: 2.15rem 0 0;
  font-size: clamp(1.12rem, 1.6vw, 1.45rem);
  line-height: 2;
}

.graphic-work-detail__meta {
  display: grid;
  align-content: start;
  gap: 2.45rem;
  margin: 0;
}

.graphic-work-detail__meta div {
  display: grid;
  gap: 0.55rem;
}

.graphic-work-detail__meta dt {
  color: var(--ink-soft);
  font-size: 0.64rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.graphic-work-detail__meta dd {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
  line-height: 1.35;
}

@media (max-width: 760px) {
  .graphic-work-detail__intro {
    padding-top: 9rem;
  }

  .graphic-work-detail__heading,
  .graphic-work-detail__cover {
    width: 100%;
  }

  .graphic-work-detail__overview-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    margin-left: 0;
  }

  .graphic-work-detail__meta {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.4rem;
  }
}

@media (max-width: 520px) {
  .graphic-work-detail__meta {
    grid-template-columns: 1fr;
  }
}
</style>
