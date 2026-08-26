<script setup lang="ts">
import portfolioPageOne from '@/assets/images/portfolio-1.png'
import portfolioPageTwo from '@/assets/images/portfolio-2.png'

const pages = [
  {
    image: portfolioPageOne,
    alt: 'Jessie 個人作品集首頁、About 與 Skills 頁面設計',
  },
  {
    image: portfolioPageTwo,
    alt: 'Jessie 個人作品集作品、插畫、平面設計與聯絡頁面設計',
  },
]
</script>

<template>
  <main class="portfolio-detail">
    <section class="portfolio-detail__intro section-shell">
      <p class="portfolio-detail__eyebrow">SELECTED WORKS</p>

      <div class="portfolio-detail__heading">
        <h1>Portfolio Website<br /><em>Design.</em></h1>
        <p>個人作品集網站設計</p>
      </div>

      <div class="portfolio-detail__gallery" aria-label="個人作品集網站頁面設計">
        <figure v-for="page in pages" :key="page.alt">
          <img :src="page.image" :alt="page.alt" />
        </figure>
      </div>
    </section>

    <section class="portfolio-detail__overview section-shell">
      <p class="portfolio-detail__eyebrow">PROJECT OVERVIEW</p>

      <div class="portfolio-detail__overview-grid">
        <p>
          個人網站以「輕盈空氣感」為核心，透過大面積留白與極簡的空間感，給瀏覽者舒適無壓力的視覺呼吸空間。
          <br />
          <br />
          設計上運用柔和的圓形泡泡與漸層光暈作為靈感意象，搭配溫潤的粉柔調性，在展現理性前端開發與 UI 邏輯的同時，也為數位體驗注入夢幻且充滿溫度的個人風格。
        </p>

        <dl>
          <div>
            <dt>CATEGORY</dt>
            <dd>Portfolio website</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>UI design and front-end development</dd>
          </div>
          <div>
            <dt>YEAR</dt>
            <dd>2026</dd>
          </div>
        </dl>
      </div>
    </section>

    <footer class="portfolio-detail__footer section-shell">
      <RouterLink :to="{ name: 'home', hash: '#works' }" class="portfolio-detail__back">
        ← Back to home
      </RouterLink>
      <span>JESSIE LIN / PORTFOLIO WEBSITE</span>
    </footer>
  </main>
</template>

<style scoped>
.portfolio-detail {
  min-height: 100vh;
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
}

.portfolio-detail__eyebrow,
.portfolio-detail__footer {
  color: var(--ink-soft);
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.portfolio-detail__eyebrow {
  margin: 0;
}

.portfolio-detail__intro {
  padding-top: clamp(10rem, 14vw, 13rem);
  padding-bottom: clamp(6rem, 10vw, 9rem);
}

.portfolio-detail__heading {
  width: min(100%, 43rem);
  margin: -1.15rem auto clamp(4rem, 7vw, 7rem);
}

.portfolio-detail__heading h1 {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-heading);
  font-size: clamp(2.66rem, 4vw, 5.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.88;
}

.portfolio-detail__heading h1 em {
  color: var(--sand-deep);
  font-weight: inherit;
}

.portfolio-detail__heading p {
  margin: 1.75rem 0 0;
  color: var(--ink-soft);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

.portfolio-detail__gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  align-items: start;
}

.portfolio-detail__gallery figure {
  margin: 0;
  overflow: hidden;
  background: var(--canvas);
}

.portfolio-detail__gallery img {
  display: block;
  width: 100%;
  height: auto;
}

.portfolio-detail__overview {
  padding-bottom: clamp(7rem, 13vw, 13rem);
}

.portfolio-detail__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 11vw, 12rem);
  margin: clamp(2rem, 4vw, 3.5rem) 0 0 min(15vw, 12rem);
}

.portfolio-detail__overview-grid > p {
  max-width: 44rem;
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 2;
}

.portfolio-detail__overview dl {
  display: grid;
  align-content: start;
  gap: 2.45rem;
  margin: 0;
}

.portfolio-detail__overview dt {
  color: var(--ink-soft);
  font-size: 0.64rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.portfolio-detail__overview dd {
  margin: 0.55rem 0 0;
  font-family: 'Cormorant Garamond', 'Noto Serif JP', serif;
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
  line-height: 1.35;
}

.portfolio-detail__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1.4rem 2.2rem;
  border-top: 1px solid rgba(68, 68, 68, 0.18);
}

.portfolio-detail__back {
  display: inline-block;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid #444;
  color: #888;
  text-decoration: none;
}

@media (max-width: 760px) {
  .portfolio-detail__intro {
    padding-top: 9rem;
  }

  .portfolio-detail__heading {
    width: 100%;
    margin: 2rem 0 4rem;
  }

  .portfolio-detail__gallery,
  .portfolio-detail__overview-grid {
    grid-template-columns: 1fr;
  }

  .portfolio-detail__gallery {
    gap: 1.5rem;
  }

  .portfolio-detail__overview-grid {
    gap: 3.5rem;
    margin-left: 0;
  }

  .portfolio-detail__footer span {
    display: none;
  }
}
</style>
