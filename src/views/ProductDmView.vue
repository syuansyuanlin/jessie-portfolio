<script setup lang="ts">
import productDmPainPoints from '@/assets/images/2.png'
import productDmAudience from '@/assets/images/3.png'
import productDmBenefits from '@/assets/images/5.png'
import productDmWorkflow from '@/assets/images/6.png'

const productDmWorks = [
  {
    image: productDmWorkflow,
    alt: '產品導入流程與持續優化說明',
  },
  {
    image: productDmPainPoints,
    alt: '企業導入 AI 的三項常見痛點',
  },
  {
    image: productDmAudience,
    alt: '企業知識平台的組織與個人應用',
  },
  {
    image: productDmBenefits,
    alt: '企業知識管理平台的六項產品優勢',
  },
]
</script>

<template>
  <main class="product-dm">
    <section class="product-dm__intro section-shell">
      <p class="product-dm__eyebrow">GRAPHIC DESIGN / 04</p>

      <div class="product-dm__heading">
        <h1>Product<br /><em>DM.</em></h1>
        <p>產品 DM 設計</p>
      </div>
    </section>

    <section class="product-dm__visual section-shell" aria-label="產品 DM 作品">
      <figure v-for="work in productDmWorks" :key="work.alt">
        <img :src="work.image" :alt="work.alt" />
      </figure>
    </section>

    <section class="product-dm__overview section-shell">
      <p class="product-dm__eyebrow">PROJECT OVERVIEW</p>

      <div class="product-dm__overview-grid">
        <p>
          staffKM 的設計理念是『安全合規、零門檻與可信賴』透過無程式碼的直覺操作，將分散於企業各處的知識集中化，在保障資安的前提下，打造一個兼具『組織知識大腦』與『個人 AI 助理』的雙層級平臺。
          <br />
          <br />
          以代表企業 DNA 的熱情紅作為品牌標誌與關鍵視覺點綴，樹立強烈的品牌辨識度；搭配沉穩的科技藍作為主要視覺基調，傳達產品在 AI 領域的「高階專業」與「穩定信任感」。
        </p>

        <dl>
          <div>
            <dt>CATEGORY</dt>
            <dd>Product marketing DM</dd>
          </div>
          <div>
            <dt>SCOPE</dt>
            <dd>Visual design and information layout</dd>
          </div>
          <div>
            <dt>YEAR</dt>
            <dd>2025</dd>
          </div>
        </dl>
      </div>
    </section>

    <footer class="product-dm__footer section-shell">
      <RouterLink to="/" class="product-dm__back">← Back to home</RouterLink>
      <span>JESSIE LIN / GRAPHIC DESIGN</span>
    </footer>
  </main>
</template>

<style scoped>
.product-dm {
  min-height: 100vh;
  padding: clamp(4rem, 9vw, 8rem) 0 clamp(3rem, 6vw, 5rem);
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
}

.product-dm__intro {
  display: grid;
  grid-template-columns: minmax(11rem, 0.58fr) minmax(0, 1.42fr);
  gap: clamp(2rem, 5vw, 7rem);
  align-items: start;
  margin-bottom: clamp(3.5rem, 7vw, 6.75rem);
}

.product-dm__eyebrow,
.product-dm__footer {
  color: #888;
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
}

.product-dm__heading h1 {
  margin: 0;
  color: #444;
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(2rem, 6.3vw, 2rem);
  font-weight: 400;
  letter-spacing: 0.015em;
  line-height: 0.86;
}

.product-dm__heading h1 em {
  color: #d185a3;
  font-weight: 400;
}

.product-dm__heading p {
  margin: 1.75rem 0 0;
  color: #666;
  font-size: 0.94rem;
  letter-spacing: 0.06em;
}

.product-dm__visual {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  max-width: 70rem;
}

.product-dm__visual figure {
  margin: 0;
}

.product-dm__visual img {
  display: block;
  width: 100%;
  height: auto;
}

.product-dm__overview {
  margin-top: clamp(6rem, 13vw, 12rem);
}

.product-dm__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 12vw, 13rem);
  margin: clamp(2rem, 4vw, 3.5rem) 0 clamp(5rem, 10vw, 9rem);
  padding-left: min(17vw, 13rem);
}

.product-dm__overview-grid > p {
  max-width: 42rem;
  margin: 0;
  color: #444;
  font-size: clamp(0.95rem, 1.75vw, 1rem);
  line-height: 1.9;
}

.product-dm__overview dl {
  display: grid;
  gap: 2rem;
  margin: 0;
}

.product-dm__overview dt {
  color: #888;
  font-size: 0.66rem;
  letter-spacing: 0.15em;
}

.product-dm__overview dd {
  margin: 0.65rem 0 0;
  color: #444;
  font-family: 'Cormorant Garamond', 'Noto Serif TC', serif;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  line-height: 1.2;
}

.product-dm__footer {
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(68, 68, 68, 0.2);
}

.product-dm__back {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}

.product-dm__back::after {
  display: block;
  width: 8rem;
  margin-top: 0.7rem;
  border-bottom: 1px solid #444;
  content: '';
}

@media (max-width: 700px) {
  .product-dm {
    padding-top: 3rem;
  }

  .product-dm__intro {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3.25rem;
  }

  .product-dm__overview-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-top: 2rem;
    padding-left: 0;
  }

  .product-dm__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
  }

  .product-dm__visual {
    grid-template-columns: 1fr;
  }
}
</style>
