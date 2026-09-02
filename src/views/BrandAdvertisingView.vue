<script setup lang="ts">
import brandAdOne from '@/assets/images/1-21.png'
import brandAdTwo from '@/assets/images/1-22.png'

const works = [
  {
    image: brandAdOne,
    alt: '品牌廣告圖作品一',
  },
  {
    image: brandAdTwo,
    alt: '品牌廣告圖作品二',
  },
]
</script>

<template>
  <main class="brand-advertising">
    <section class="brand-advertising__intro section-shell">
      <p class="brand-advertising__eyebrow">GRAPHIC DESIGN</p>

      <div class="brand-advertising__heading">
        <h1>Brand advertising<br /><em>graphics.</em></h1>
        <p>品牌廣告圖作品</p>
      </div>
    </section>

    <section class="brand-advertising__gallery section-shell" aria-label="品牌廣告圖作品">
      <figure v-for="work in works" :key="work.alt" class="brand-advertising__work">
        <div class="brand-advertising__image">
          <img v-if="work.image" :src="work.image" :alt="work.alt" />
          <div v-else class="brand-advertising__fallback">圖片載入中</div>
        </div>
      </figure>
    </section>

    <section class="brand-advertising__overview section-shell">
      <p class="brand-advertising__eyebrow">PROJECT OVERVIEW</p>
      <div class="brand-advertising__overview-grid">
        <p>
          以整體以公司的企業識別色橘色與綠色為主軸，使用圓弧的元素跟公司LOGO去做呼應，橘色傳達活力、創新與行動力，綠色象徵成長、效率與穩定，搭配明亮色系與大面積留白，營造清新、親和且具專業感的品牌形象。
          <br/>
          <br/>背景加入漸層、網點及半透明圖形，強化數位科技與資料流動的意象，同時增加畫面的層次與節奏。
            版面採用模組化資訊編排及清楚的色彩分區，引導閱讀動線，使產品特色、核心優勢與聯絡資訊能被快速掌握，呈現明亮、高效、可靠且具有創新精神的企業形象。
        </p>
        <dl>
          <div>
            <dt>CATEGORY</dt>
            <dd>Brand advertising graphics</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>Visual design and information layout</dd>
          </div>
          <div>
            <dt>YEAR</dt>
            <dd>2026</dd>
          </div>
        </dl>
      </div>
    </section>

    <footer class="brand-advertising__footer section-shell">
      <RouterLink
        :to="{ name: 'home', hash: '#experience' }"
        class="brand-advertising__back"
      >
        ← Back to home
      </RouterLink>
      <span>JESSIE LIN / GRAPHIC DESIGN</span>
    </footer>
  </main>
</template>

<style scoped>
.brand-advertising {
  padding: 0 0 clamp(3rem, 6vw, 5rem);
}

.brand-advertising__intro {
  padding-top: clamp(10rem, 14vw, 13rem);
  margin-bottom: clamp(3.5rem, 7vw, 6.75rem);
}

.brand-advertising__eyebrow,
.brand-advertising__footer {
  color: #888;
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.brand-advertising__eyebrow {
  margin: 0;
}

.brand-advertising__heading {
  width: min(100%, 43rem);
  margin: -1.15rem auto 0;
}

.brand-advertising__heading h1 {
  margin: 0;
  color: #444;
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(2.66rem, 4vw, 5.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.88;
}

.brand-advertising__heading h1 em {
  color: #d185a3;
  font-weight: 400;
}

.brand-advertising__heading p {
  margin: 1.75rem 0 0;
  color: #666;
  font-size: 0.94rem;
  letter-spacing: 0.06em;
}

.brand-advertising__gallery {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(1.5rem, 3vw, 2rem);
  align-items: start;
  max-width: 70rem;
  margin-inline: auto;
}

.brand-advertising__work {
  margin: 0;
}

.brand-advertising__image {
  overflow: hidden;
  background: #f6f7f9;
}

.brand-advertising__image img {
  display: block;
  width: 100%;
  height: auto;
}

.brand-advertising__fallback {
  display: grid;
  min-height: clamp(14rem, 30vw, 28rem);
  place-items: center;
  color: #888;
  font-size: 0.82rem;
}

.brand-advertising__overview {
  margin-top: clamp(6rem, 13vw, 12rem);
}

.brand-advertising__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 12vw, 13rem);
  margin: clamp(2rem, 4vw, 3.5rem) 0 clamp(5rem, 10vw, 9rem);
  padding-left: min(17vw, 13rem);
}

.brand-advertising__overview-grid > p {
  max-width: 42rem;
  margin: 0;
  color: #444;
  font-size: clamp(1.05rem, 1.75vw, 1rem);
  line-height: 1.9;
}

.brand-advertising__overview dl {
  display: grid;
  gap: 2rem;
  margin: 0;
}

.brand-advertising__overview dt {
  color: #888;
  font-size: 0.66rem;
  letter-spacing: 0.15em;
}

.brand-advertising__overview dd {
  margin: 0.65rem 0 0;
  color: #444;
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  line-height: 1.2;
}

.brand-advertising__footer {
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(68, 68, 68, 0.2);
}

.brand-advertising__back {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}

.brand-advertising__back::after {
  display: block;
  width: 8rem;
  margin-top: 0.7rem;
  border-bottom: 1px solid #444;
  content: '';
}

@media (max-width: 700px) {
  .brand-advertising__intro {
    padding-top: 9rem;
    margin-bottom: 3.25rem;
  }

  .brand-advertising__heading {
    width: 100%;
    margin: 2rem 0 0;
  }

  .brand-advertising__overview-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-top: 2rem;
    padding-left: 0;
  }

  .brand-advertising__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
