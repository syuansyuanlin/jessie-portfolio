<template>
  <section id="about" class="about section-shell" aria-labelledby="about-title">
    <div class="about__label" data-reveal>
      <p class="eyebrow">01 / About me</p>
      <span>私について</span>
    </div>

    <div class="about__main">
      <h2 id="about-title" class="about__title" data-reveal>
        I believe a good digital<br />experience feels <em>effortless.</em>
      </h2>

      <div class="about__story" data-reveal>
        <p>
          嗨！我是一名具備 UI 設計、前端開發與企業應用系統開發經驗的工程師。
        </p>
        <p>
          透過自學與實務專案累積設計與開發能力，致力於將設計理念轉化為實際可使用的產品與系統。
        </p>
        <a class="text-link" href="#contact">More about me <span>→</span></a>
      </div>
    </div>

    <figure class="about__image" data-reveal>
      <img
        src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1500&q=90"
        alt="溫暖日光照進室內的生活場景"
      />
      <figcaption>Quiet details, considered carefully.</figcaption>
    </figure>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: minmax(8rem, 0.45fr) minmax(0, 1.5fr);
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
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(15rem, 0.72fr);
  gap: clamp(2.5rem, 8vw, 8rem);
}

.about__title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4.6vw, 5.2rem);
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
  line-height: 1.05;

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }
}

.about__story {
  padding-top: clamp(1.3rem, 4vw, 5rem);
  color: var(--ink-soft);
  font-size: 0.86rem;
  line-height: 2.05;

  p {
    margin: 0 0 1.25rem;
  }

  .text-link {
    margin-top: 1.2rem;
    color: var(--ink);
  }
}

.about__image {
  grid-column: 2;
  width: min(76%, 48rem);
  margin: clamp(4rem, 9vw, 9rem) 0 0 auto;

  img {
    width: 100%;
    aspect-ratio: 1.65;
    object-fit: cover;
    filter: saturate(0.66) sepia(0.11);
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
  }

  .about__image {
    margin-top: 5rem;
  }
}

@media (max-width: 620px) {
  .about__main {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .about__story {
    max-width: 30rem;
    padding-top: 0;
    font-size: 0.8rem;
  }

  .about__image {
    width: 92%;
    margin-top: 3.5rem;
  }
}
</style>
