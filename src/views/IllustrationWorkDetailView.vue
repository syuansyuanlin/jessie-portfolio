<script setup lang="ts">
import ipChristmas from "@/assets/images/S__193036298_0.jpg";
import ipPeach from "@/assets/images/S__193036299_0.jpg";
import ipNewYear from "@/assets/images/S__193036300_0.jpg";
import ipCandy from "@/assets/images/GuNEphFaYAA1JvO.jpg";
import ipTea from "@/assets/images/S__189390852_0.jpg";
import ipFloat from "@/assets/images/S__189390853_0.jpg";
import ipRibbon from "@/assets/images/S__189390854_0.jpg";
import portraitRibbon from "@/assets/images/S__149962756_0.jpg";
import portraitTulips from "@/assets/images/S__149962758_0.jpg";
import portraitBeret from "@/assets/images/S__149962759_0.jpg";
import portraitPuppy from "@/assets/images/S__193036295_0.jpg";
import portraitLove from "@/assets/images/S__193036296_0.jpg";
import portraitAngel from "@/assets/images/S__193036301_0.jpg";

const ipDesignWorks = [
  { image: ipChristmas, alt: "IP 角色聖誕節插畫" },
  { image: ipPeach, alt: "IP 角色與水蜜桃插畫" },
  { image: ipNewYear, alt: "IP 角色新年賀圖" },
  { image: ipCandy, alt: "糖果色角色插畫" },
  { image: ipTea, alt: "下午茶角色插畫" },
  { image: ipFloat, alt: "飲品角色插畫" },
  { image: ipRibbon, alt: "蝴蝶結角色插畫" },
];

const portraitIllustrations = [
  { image: portraitRibbon, alt: "蝴蝶結少女人物插畫" },
  { image: portraitTulips, alt: "鬱金香少女人物插畫" },
  { image: portraitBeret, alt: "貝雷帽少女人物插畫" },
  { image: portraitPuppy, alt: "少女與白色小狗人物插畫" },
  { image: portraitLove, alt: "粉色愛心手勢少女人物插畫" },
  { image: portraitAngel, alt: "天使造型人物插畫" },
];
</script>

<template>
  <main class="illustration-work-detail">
    <section class="illustration-work-detail__intro section-shell">
      <p class="illustration-work-detail__eyebrow" data-reveal>
        ILLUSTRATION WORKS
      </p>

      <div class="illustration-work-detail__heading" data-reveal>
        <h1>Illustration<br /><em>archive.</em></h1>
        <p>以柔軟的線條與溫暖色彩，記錄角色和人物之間的小小故事。</p>
      </div>
    </section>

    <section
      class="illustration-work-detail__category illustration-work-detail__category--ip section-shell"
      aria-label="IP 設計作品"
    >
      <div class="illustration-work-detail__category-heading" data-reveal>
        <p class="illustration-work-detail__eyebrow">01 / IP DESIGN</p>
      </div>

      <div
        class="illustration-work-detail__gallery illustration-work-detail__gallery--ip"
        data-reveal
      >
        <figure
          v-for="work in ipDesignWorks"
          :key="work.alt"
          class="illustration-work-detail__artwork"
        >
          <img :src="work.image" :alt="work.alt" />
        </figure>
      </div>
    </section>

    <section
      class="illustration-work-detail__category section-shell"
      aria-label="人物插畫作品"
    >
      <div class="illustration-work-detail__category-heading" data-reveal>
        <p class="illustration-work-detail__eyebrow">
          02 / PORTRAIT ILLUSTRATION
        </p>
      </div>

      <div
        class="illustration-work-detail__gallery illustration-work-detail__gallery--portrait"
        data-reveal
      >
        <figure
          v-for="work in portraitIllustrations"
          :key="work.alt"
          class="illustration-work-detail__artwork"
        >
          <img :src="work.image" :alt="work.alt" />
        </figure>
      </div>
    </section>

    <footer class="illustration-work-detail__footer section-shell">
      <RouterLink
        :to="{ name: 'home', hash: '#illustrations' }"
        class="illustration-work-detail__back"
      >
        ← Back to home
      </RouterLink>
      <span>JESSIE LIN / ILLUSTRATION WORKS</span>
    </footer>
  </main>
</template>

<style scoped>
.illustration-work-detail {
  min-height: 100vh;
  overflow: clip;
  background: var(--paper);
  color: var(--ink);
}

.illustration-work-detail__intro {
  padding-top: clamp(10rem, 14vw, 13rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
}

.illustration-work-detail__eyebrow {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.illustration-work-detail__heading {
  width: min(100%, 43rem);
  margin: clamp(2.7rem, 5vw, 5rem) auto 0;
}

.illustration-work-detail__heading h1,
.illustration-work-detail__category-heading h2 {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.66rem, 4vw, 5.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.9;
}

.illustration-work-detail h1 em,
.illustration-work-detail h2 em {
  color: var(--sand-deep);
  font-weight: inherit;
}

.illustration-work-detail__heading > p {
  max-width: 27rem;
  margin: 1.75rem 0 0;
  color: var(--ink-soft);
  font-size: 0.94rem;
  letter-spacing: 0.04em;
  line-height: 1.8;
}

.illustration-work-detail__category {
  padding-top: clamp(4.5rem, 9vw, 8rem);
  padding-bottom: clamp(5rem, 10vw, 9rem);
  border-top: 1px solid rgba(68, 68, 68, 0.18);
}

.illustration-work-detail__category--ip {
  padding-top: 0;
  border-top: 0;
}

.illustration-work-detail__category-heading {
  display: grid;
  grid-template-columns: minmax(10rem, 0.45fr) 1fr;
  gap: clamp(2rem, 8vw, 10rem);
}

.illustration-work-detail__overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(14rem, 0.55fr);
  gap: clamp(3rem, 12vw, 13rem);
  margin: clamp(3rem, 6vw, 5rem) 0;
  padding-left: min(17vw, 13rem);
}

.illustration-work-detail__category-heading
  + .illustration-work-detail__gallery {
  margin-top: clamp(2.5rem, 5vw, 4rem);
}

.illustration-work-detail__overview-grid > p {
  max-width: 42rem;
  margin: 0;
  font-size: clamp(0.98rem, 1.4vw, 1.08rem);
  line-height: 1.95;
}

.illustration-work-detail__overview-grid dl {
  display: grid;
  align-content: start;
  gap: 2rem;
  margin: 0;
}

.illustration-work-detail__overview-grid dt {
  color: var(--ink-soft);
  font-size: 0.66rem;
  letter-spacing: 0.15em;
}

.illustration-work-detail__overview-grid dd {
  margin: 0.65rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.15rem, 1.9vw, 1.55rem);
  line-height: 1.2;
}

.illustration-work-detail__gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2.4vw, 2rem);
  align-items: start;
}

.illustration-work-detail__artwork {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  background: #f6f7f9;
}

.illustration-work-detail__gallery--ip .illustration-work-detail__artwork,
.illustration-work-detail__gallery--portrait .illustration-work-detail__artwork {
  aspect-ratio: 1;
}

.illustration-work-detail__gallery--ip .illustration-work-detail__artwork img,
.illustration-work-detail__gallery--portrait .illustration-work-detail__artwork img {
  height: 100%;
  object-fit: cover;
}

.illustration-work-detail__artwork img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.illustration-work-detail__artwork:hover img {
  transform: scale(1.025);
}

.illustration-work-detail__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1.4rem 2.2rem;
  border-top: 1px solid rgba(68, 68, 68, 0.18);
  color: var(--ink-soft);
  font-family: Inter, 'Noto Sans TC', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

.illustration-work-detail__back {
  display: inline-block;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid #444;
  color: #888;
  text-decoration: none;
}

@media (min-width: 761px) {
  .illustration-work-detail__heading {
    margin-top: -1.15rem;
  }
}

@media (max-width: 760px) {
  .illustration-work-detail__intro {
    padding-top: 9rem;
  }

  .illustration-work-detail__heading {
    width: 100%;
    margin-top: 2rem;
  }

  .illustration-work-detail__category-heading,
  .illustration-work-detail__overview-grid {
    grid-template-columns: 1fr;
  }

  .illustration-work-detail__category-heading {
    gap: 1.5rem;
  }

  .illustration-work-detail__overview-grid {
    gap: 2.5rem;
    margin-block: 2.5rem;
    padding-left: 0;
  }

  .illustration-work-detail__gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .illustration-work-detail__footer span {
    display: none;
  }
}

@media (max-width: 520px) {
  .illustration-work-detail__gallery {
    grid-template-columns: 1fr;
  }

}
</style>
