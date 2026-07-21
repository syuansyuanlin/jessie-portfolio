<script setup lang="ts">
import { skills } from '@/data/portfolio'
</script>

<template>
  <section class="skills" aria-labelledby="skills-title">
    <div class="skills__shell section-shell">
      <p class="eyebrow" data-reveal>02 / Capabilities</p>

      <div class="skills__scene">
        <div class="skills__heading">
          <div class="skills__heading-content" data-reveal>
            <h2 id="skills-title">A thoughtful mix<br />of <em>design &amp; code.</em></h2>
          </div>
        </div>

        <div class="skills__list">
          <article
            v-for="(group, index) in skills"
            :key="group.id"
            class="skill-group"
            :class="`skill-group--${index + 1}`"
            data-reveal
          >
            <div class="skill-group__float">
              <div class="skill-group__meta">
                <span>0{{ index + 1 }}</span>
              </div>
              <div>
                <h3>{{ group.label }}</h3>
                <p>{{ group.description }}</p>
              </div>
              <ul>
                <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills {
  position: sticky;
  z-index: 0;
  top: 0;
  min-height: 100svh;
  padding: clamp(6rem, 12vw, 11rem) 0;
  overflow: hidden;
  background: var(--canvas-deep);
}

.skills__shell {
  position: relative;

  > .eyebrow {
    position: relative;
    z-index: 2;
  }
}

.skills__scene {
  position: relative;
  min-height: clamp(35rem, 52vw, 44rem);
}

.skills__heading {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(100%, 21rem);
  transform: translate(-50%, -50%);
}

.skills__heading-content {
  text-align: left;
}

.skills__heading h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4.25vw, 5rem);
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
  line-height: 1.03;
}

.skills__heading em {
  color: var(--sand-deep);
  font-weight: inherit;
}

.skills__list {
  position: absolute;
  z-index: 1;
  inset: 0;
}

.skill-group {
  position: absolute;
}

.skill-group--1 {
  top: 4%;
  left: 9%;
  width: clamp(15rem, 24vw, 21rem);
  aspect-ratio: 1.25;
}

.skill-group--2 {
  top: 27%;
  right: clamp(0rem, 10vw, 8rem);
  width: clamp(14.5rem, 22vw, 19rem);
  aspect-ratio: 1;
}

.skill-group--3 {
  bottom: 4%;
  left: 14%;
  width: clamp(15.5rem, 25vw, 22rem);
  aspect-ratio: 1.35;
}

.skill-group__float {
  display: flex;
  position: relative;
  z-index: 0;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: clamp(0.6rem, 1vw, 0.9rem);
  padding: clamp(1.25rem, 2.2vw, 2rem);
  isolation: isolate;
  will-change: transform;
}

.skill-group__float::before {
  position: absolute;
  z-index: -1;
  inset: -2.35rem;
  background:
    radial-gradient(ellipse at 28% 22%, rgba(255, 255, 255, 0.58), transparent 28%),
    radial-gradient(ellipse at 76% 78%, rgba(254, 223, 225, 0.14), transparent 48%),
    linear-gradient(
      135deg,
      rgba(190, 222, 237, 0.21),
      rgba(246, 247, 249, 0.3) 48%,
      rgba(254, 223, 225, 0.18)
    );
  backdrop-filter: blur(4px) saturate(108%);
  -webkit-backdrop-filter: blur(4px) saturate(108%);
  border: 1px solid rgba(255, 255, 255, 0.62);
  box-shadow:
    0 1.1rem 2.4rem rgba(128, 157, 173, 0.08),
    inset 0 0.08rem 0.1rem rgba(255, 255, 255, 0.5),
    inset 0 -0.8rem 1.6rem rgba(160, 190, 204, 0.045),
    inset 0 0 0 1px rgba(255, 255, 255, 0.16);
  content: '';
}

.skill-group__float::after {
  position: absolute;
  z-index: 0;
  top: -1.15rem;
  left: 0.25rem;
  width: 48%;
  height: 1.5rem;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0));
  filter: blur(4px);
  opacity: 0.5;
  pointer-events: none;
  transform: rotate(-14deg);
}

.skill-group__float > * {
  position: relative;
  z-index: 1;
}

.skill-group--1 .skill-group__float {
  animation: skills-card-drift 8s ease-in-out infinite alternate;
}

.skill-group--1 .skill-group__float::before {
  border-radius: 53% 47% 49% 51% / 56% 45% 55% 44%;
}

.skill-group--2 .skill-group__float {
  animation: skills-card-drift 10s ease-in-out -2.5s infinite alternate-reverse;
}

.skill-group--2 .skill-group__float::before {
  border-radius: 48% 52% 56% 44% / 45% 54% 46% 55%;
}

.skill-group--3 .skill-group__float {
  animation: skills-card-drift 9s ease-in-out -4s infinite alternate;
}

.skill-group--3 .skill-group__float::before {
  border-radius: 49% 51% 45% 55% / 55% 47% 53% 45%;
}

@keyframes skills-card-drift {
  from {
    transform: translate3d(-0.5rem, 0, 0);
  }
  to {
    transform: translate3d(0.5rem, 0, 0);
  }
}

.skill-group__meta {
  display: flex;
  align-items: flex-start;
  color: var(--sand-deep);
  font-size: 0.64rem;
  letter-spacing: 0.1em;
}

.skill-group__meta span {
  color: #fffdfb;
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 3.6vw, 3.35rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1;
  -webkit-text-stroke: 0.65px rgba(74, 61, 63, 0.72);
  paint-order: stroke fill;
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.95),
    0 2px 0 rgba(227, 166, 182, 0.72),
    0 3px 0 rgba(227, 166, 182, 0.46),
    0 6px 10px rgba(152, 102, 117, 0.14);
}

.skill-group h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.65rem;
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
}

.skill-group p {
  margin: 0.35rem 0 0;
  color: var(--ink-soft);
  font-size: 0.7rem;
  line-height: 1.7;
}

.skill-group ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-group li {
  padding: 0.28rem 0.5rem;
  border: 1px solid rgba(68, 68, 68, 0.2);
  border-radius: 3rem;
  color: var(--ink-soft);
  font-size: 0.66rem;
  letter-spacing: 0.03em;
}

@media (max-width: 850px) {
  .skills {
    position: relative;
    top: auto;
    min-height: 0;
  }

  .skills__scene {
    display: grid;
    gap: 2rem;
    min-height: 0;
    margin-top: 3rem;
  }

  .skills__heading,
  .skills__list {
    position: static;
    width: auto;
    transform: none;
  }

  .skills__heading-content {
    max-width: 21rem;
    margin: 0 auto;
  }

  .skills__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: 1rem;
  }

  .skill-group {
    position: static;
    width: auto;
    aspect-ratio: auto;
  }

  .skill-group__float {
    min-height: 15rem;
  }
}

@media (max-height: 70rem) and (min-width: 851px) {
  .skills {
    position: relative;
    top: auto;
    min-height: 0;
  }
}

@media (max-width: 620px) {
  .skills__heading h2 {
    font-size: clamp(2.5rem, 13vw, 4rem);
  }

  .skills__list {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .skill-group__float {
    min-height: 13.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-group__float {
    animation: none;
  }
}
</style>
