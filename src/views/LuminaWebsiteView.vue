<script setup lang="ts">
import luminaPageOne from '@/assets/images/lumina-1.png'
import luminaPageTwo from '@/assets/images/lumina-2.png'

const pages = [
  {
    image: luminaPageOne,
    alt: 'Lumina Hotel 首頁、最新消息、品牌介紹與房型頁面設計',
  },
  {
    image: luminaPageTwo,
    alt: 'Lumina Hotel 設施、周邊景點、交通與聯絡頁面設計',
  },
]
</script>

<template>
  <main class="lumina-detail">
    <section class="lumina-detail__intro section-shell">
      <p class="lumina-detail__eyebrow">SELECTED WORKS</p>

      <div class="lumina-detail__heading">
        <h1>Website <em>Design.</em></h1>
        <p>旅宿形象網站設計</p>
      </div>

      <div class="lumina-detail__gallery" aria-label="Lumina Hotel 網站頁面設計">
        <figure v-for="page in pages" :key="page.alt">
          <img :src="page.image" :alt="page.alt" />
        </figure>
      </div>
    </section>

    <section class="lumina-detail__overview section-shell">
      <p class="lumina-detail__eyebrow">PROJECT OVERVIEW</p>

      <div class="lumina-detail__overview-grid">
        <p>
          以溫潤的米白、淺灰、奶茶色及淺木色為底色，搭配黑灰色系文字與線條，營造出寧靜、沉穩且放鬆的氛圍。
          搭配雜誌風的錯位排版，打破傳統飯店網站死板的圖文網格，提升品牌的溢價感。
        </p>

        <dl>
          <div>
            <dt>CATEGORY</dt>
            <dd>Hospitality website</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>UI design and WordPress development</dd>
          </div>
          <div>
            <dt>YEAR</dt>
            <dd>2026</dd>
          </div>
        </dl>
      </div>
    </section>

    <footer class="lumina-detail__footer section-shell">
      <RouterLink :to="{ name: 'home', hash: '#works' }" class="lumina-detail__back">
        ← Back to home
      </RouterLink>
      <span>JESSIE LIN / LUMINA WEBSITE</span>
    </footer>
  </main>
</template>

<style scoped>
.lumina-detail {
  min-height: 100vh;
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
}

.lumina-detail__eyebrow,
.lumina-detail__footer {
  color: var(--ink-soft);
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.lumina-detail__eyebrow {
  margin: 0;
}

.lumina-detail__intro {
  padding-top: clamp(10rem, 14vw, 13rem);
  padding-bottom: clamp(6rem, 10vw, 9rem);
}

.lumina-detail__heading {
  width: min(100%, 43rem);
  margin: -1.15rem auto clamp(4rem, 7vw, 7rem);
}

.lumina-detail__heading h1 {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-heading);
  font-size: clamp(2.66rem, 4vw, 5.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.88;
}

.lumina-detail__heading h1 em {
  color: var(--sand-deep);
  font-weight: inherit;
}

.lumina-detail__heading p {
  margin: 1.75rem 0 0;
  color: var(--ink-soft);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

.lumina-detail__gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  align-items: start;
}

.lumina-detail__gallery figure {
  margin: 0;
  overflow: hidden;
  background: var(--canvas);
}

.lumina-detail__gallery img {
  display: block;
  width: 100%;
  height: auto;
}

.lumina-detail__overview {
  padding-bottom: clamp(7rem, 13vw, 13rem);
}

.lumina-detail__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 11vw, 12rem);
  margin: clamp(2rem, 4vw, 3.5rem) 0 0 min(15vw, 12rem);
}

.lumina-detail__overview-grid > p {
  max-width: 44rem;
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 2;
}

.lumina-detail__overview dl {
  display: grid;
  align-content: start;
  gap: 2.45rem;
  margin: 0;
}

.lumina-detail__overview dt {
  color: var(--ink-soft);
  font-size: 0.64rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.lumina-detail__overview dd {
  margin: 0.55rem 0 0;
  font-family: 'Cormorant Garamond', 'Noto Serif JP', serif;
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
  line-height: 1.35;
}

.lumina-detail__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1.4rem 2.2rem;
  border-top: 1px solid rgba(68, 68, 68, 0.18);
}

.lumina-detail__back {
  display: inline-block;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid #444;
  color: #888;
  text-decoration: none;
}

@media (max-width: 760px) {
  .lumina-detail__intro {
    padding-top: 9rem;
  }

  .lumina-detail__heading {
    width: 100%;
    margin: 2rem 0 4rem;
  }

  .lumina-detail__gallery,
  .lumina-detail__overview-grid {
    grid-template-columns: 1fr;
  }

  .lumina-detail__gallery {
    gap: 1.5rem;
  }

  .lumina-detail__overview-grid {
    gap: 3.5rem;
    margin-left: 0;
  }

  .lumina-detail__footer span {
    display: none;
  }
}
</style>
