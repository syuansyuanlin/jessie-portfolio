<script setup lang="ts">
import coverImage from '@/assets/images/DM.png'
</script>

<template>
  <main class="graphic-work-detail">
    <section class="graphic-work-detail__intro section-shell">
      <p class="eyebrow" data-reveal>GRAPHIC DESIGN</p>

      <div class="graphic-work-detail__heading" data-reveal>
        <h1>Graphic design</h1>
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
          <p>
            整體以循環式的無限符號作為主要視覺架構，將服務依照旅客歷程串聯，形成完整且不中斷的數位服務閉環，虛線箭頭與編號引導閱讀方向，讓各服務之間的關係與運作流程更加清楚。  
              <br/>
              <br/>
此流程並非單次、線性的服務，而是將每個接觸點所累積的旅客行為與會員資料持續回流，無限循環也象徵系統能持續運作、優化與創造營收，呼應品牌所強調的自動化獲利與極致服務。  
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
    <footer class="graphic-work-detail__footer section-shell">
      <RouterLink
        class="graphic-work-detail__back"
        :to="{ name: 'home', hash: '#experience' }"
      >
        ← Back to home
      </RouterLink>
      <span class="graphic-work-detail__footer-mark">Jessie Lin / Graphic design</span>
    </footer>
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
  padding-bottom: clamp(5rem, 9vw, 4rem);
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
  font-size: clamp(2.66rem, 4vw, 5.2rem);
  letter-spacing: 0.03em;
}

.graphic-work-detail__heading em,
.graphic-work-detail__summary em {
  color: var(--sand-deep);
  font-style: italic;
}

.graphic-work-detail__heading > p {

  color: var(--ink-soft);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

/* .graphic-work-detail__cover {
  width: min(100%, 52rem);
  margin: clamp(3.8rem, 7vw, 7rem) auto 0;
} */

.graphic-work-detail__cover img {
  display: block;
  width: 100%;
  height: auto;
}

.graphic-work-detail__overview {
  padding-bottom: clamp(7rem, 13vw, 13rem);
}

.graphic-work-detail__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 11vw, 12rem);
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

@media (min-width: 761px) {
  .graphic-work-detail__heading {
    margin-top: -1.15rem;
  }
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
/* Keep the artwork centred on narrow screens instead of inheriting the
   desktop visual offset. */
@media (max-width: 760px) {
  .graphic-work-detail__intro > figure,
  .graphic-work-detail__intro .graphic-work-detail__visual,
  .graphic-work-detail__intro .graphic-work-detail__image {
    width: min(100%, 42rem);
    max-width: 100%;
    margin-inline: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    justify-self: center !important;
  }

  .graphic-work-detail__intro > figure img,
  .graphic-work-detail__intro .graphic-work-detail__visual img,
  .graphic-work-detail__intro .graphic-work-detail__image img,
  .graphic-work-detail__intro > img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-inline: auto !important;
    object-position: center;
  }
}
  .graphic-work-detail__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-top: clamp(5rem, 10vw, 9rem);
    padding-block: 1.4rem 2.2rem;
    border-top: 1px solid rgba(68, 68, 68, 0.18);
  }

  .graphic-work-detail__back {
    display: inline-block;
    padding-bottom: 0.55rem;
    border-bottom: 1px solid #444444;
    color: #888888;
    font-family: Inter, "Noto Sans TC", sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    line-height: 1.4;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  .graphic-work-detail__back:hover {
    border-bottom-color: #888888;
    color: #444444;
  }

  .graphic-work-detail__footer-mark {
    color: #999999;
    font-family: Inter, "Noto Sans TC", sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    .graphic-work-detail__footer {
      margin-top: 4rem;
      padding-bottom: 1.5rem;
    }

    .graphic-work-detail__footer-mark {
      display: none;
    }
  }
.graphic-work-detail__meta dd {
  font-family: "Cormorant Garamond", "Noto Serif JP", serif;
}
.graphic-work-detail__intro .graphic-work-detail__heading {
  padding-bottom: clamp(2rem, 4vw, 4.5rem);
}

</style>
