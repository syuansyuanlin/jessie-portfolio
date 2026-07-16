<script setup lang="ts">
import aboutPhoto from '@/assets/images/my-photo.jpg'
</script>

<template>
  <section id="about" class="about section-shell" aria-labelledby="about-title">
    <div class="about__label" data-reveal>
      <p class="eyebrow">01 / About me</p>
      <span>私について</span>
    </div>

    <div class="about__main">
      <h2 id="about-title" class="about__title" data-reveal>
        I believe a good digit<span class="about__title-light">al</span><br />experience feels <em>effortless.</em>
      </h2>

      <div class="about__story" data-reveal>
        <p>
          嗨！我是一名具備 UI 設計、前端開發與企業應用系統開發經驗的工程師。
        </p>
        <p>
          透過自學與實務專案累積設計與開發能力，致力於將設計理念轉化為實際可使用的產品與系統。
        </p>
        <a class="about__more" href="#contact">
          <span class="about__more-label">View More</span>
          <span class="about__more-circle" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <figure class="about__image" data-reveal>
      <img
        :src="aboutPhoto"
        alt="溫暖日光照進室內的生活場景"
      />
      <figcaption>Quiet details, considered carefully.</figcaption>
    </figure>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: minmax(7rem, 0.35fr) minmax(0, 1.1fr) minmax(15rem, 0.72fr);
  column-gap: clamp(2rem, 8vw, 10rem);
  padding-top: clamp(8rem, 16vw, 15rem);
  padding-bottom: clamp(8rem, 15vw, 14rem);
}

.about__label {
  color: var(--ink-faint);
  font-family: var(--font-serif);
  font-size: 0.9rem;

  .eyebrow {
    margin-bottom: 0.8rem;
  }
}

.about__main {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.about__title {
  position: relative;
  z-index: 1;
  transform: translateX(clamp(1.25rem, 2.5vw, 2rem));
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 3.53vw, 4.3rem);
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
  line-height: 1.05;

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }
}

.about__title-light {
  color: #fff;
}

.about__story {
  width: min(100%, 29rem);
  margin: clamp(1.75rem, 3vw, 3rem) 0 0;
  padding-top: 0;
  color: var(--ink-soft);
  font-size: 0.86rem;
  line-height: 2.05;

  p {
    margin: 0 0 1.25rem;
  }

}

.about__more {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.8rem;
  color: var(--ink);
}

.about__more-label {
  font-family: var(--font-heading);
  font-size: 18px;
  letter-spacing: -0.025em;
}

.about__more-circle {
  display: grid;
  width: clamp(4.5rem, 6vw, 5.75rem);
  height: clamp(4.5rem, 6vw, 5.75rem);
  place-items: center;
  border: 1px solid currentcolor;
  border-radius: 50%;
  font-size: 1.45rem;
  line-height: 1;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms ease, color 350ms ease;
}

.about__more:hover .about__more-circle {
  background: var(--ink);
  color: var(--paper);
  transform: scale(1.16);
}

.about__more:focus-visible {
  outline: 2px solid var(--sand-deep);
  outline-offset: 0.4rem;
}

.about__image {
  grid-column: 3;
  grid-row: 1;
  align-self: start;
  position: relative;
  z-index: 0;
  width: min(85%, 18rem);
  margin: 0;
  justify-self: start;
  transform: translateX(clamp(-13rem, -11vw, -7rem));

  img {
    width: 100%;
    height: auto;
  }

  figcaption {
    margin-top: 0.6rem;
    color: var(--ink-faint);
    font-family: var(--font-serif);
    font-size: 0.82rem;
    font-style: italic;
    text-align: right;
  }
}

@media (max-width: 850px) {
  .about {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__main,
  .about__image {
    grid-column: 1;
    grid-row: auto;
  }

  .about__image { order: 2; }

  .about__image {
    width: min(76%, 48rem);
    margin: 0 0 0 auto;
    justify-self: auto;
    transform: none;
  }

  .about__title {
    transform: none;
  }

  .about__story {
    margin: 2rem 0 0 auto;
  }
}

@media (max-width: 620px) {
  .about__story {
    max-width: 30rem;
    width: 100%;
    margin-top: 0;
    padding-top: 0;
    font-size: 0.8rem;
  }

  .about__image {
    width: 92%;
    margin-top: 3.5rem;
  }
}
</style>
