<script setup lang="ts">
import aboutPhoto from '@/assets/images/my-photo.jpg'
import { experiences, skills } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { scope } = useReveal()

const profileFacts = [
  ['Role', 'UI Designer / Front-end Developer'],
  ['Based in', 'Taipei, Taiwan'],
  ['Focus', 'Thoughtful interfaces & gentle interactions'],
]

const certificates = [
  { number: '01', title: 'Certificate title', detail: 'Issuing organisation · year' },
  { number: '02', title: 'Certificate title', detail: 'Issuing organisation · year' },
  { number: '03', title: 'Certificate title', detail: 'Issuing organisation · year' },
]
</script>

<template>
  <main ref="scope" class="about-page">
    <section class="about-page__hero section-shell" aria-labelledby="about-page-title">
      <p class="eyebrow about-page__eyebrow" data-reveal>About / 01</p>

      <div class="about-page__hero-layout">
        <figure class="about-page__hero-photo" data-reveal>
          <img :src="aboutPhoto" alt="Jessie Lin 的個人照片" />
          <figcaption>Jessie Lin / Portfolio</figcaption>
        </figure>

        <div class="about-page__hero-copy" data-reveal data-reveal-delay="0.1">
          <p class="about-page__kicker">UI Designer · Front-end Developer</p>
          <h1 id="about-page-title" class="display-title">
            A little more<br />
            <em>about me.</em>
          </h1>
          <p>
            從靜靜觀察開始，把想法整理成清楚、溫柔且容易使用的數位體驗。
          </p>
        </div>
      </div>

      <span class="about-page__hero-orb" aria-hidden="true" />
      <a class="about-page__scroll" href="#profile">Scroll to explore <span>↓</span></a>
    </section>

    <section id="profile" class="about-page__section about-page__profile section-shell" aria-labelledby="profile-title">
      <div class="about-page__section-label" data-reveal>
        <p class="eyebrow">01 / Profile</p>
        <span>個人簡介</span>
      </div>

      <div class="about-page__profile-content" data-reveal>
        <h2 id="profile-title">Designing with<br /><em>care & clarity.</em></h2>
        <div class="about-page__profile-copy">
          <p>
            我是 Jessie，一位專注於 UI 設計與前端開發的創作者。喜歡從使用者的感受出發，將複雜的需求轉譯成自然、可理解的畫面與互動。
          </p>
          <p>
            對我來說，好的設計不只好看，也應該在每一次操作裡讓人感到安心與自在。
          </p>
        </div>
      </div>

      <dl class="about-page__facts" data-reveal data-reveal-delay="0.1">
        <div v-for="([label, value], index) in profileFacts" :key="label">
          <dt>0{{ index + 1 }} / {{ label }}</dt>
          <dd>{{ value }}</dd>
        </div>
      </dl>
    </section>

    <section class="about-page__section about-page__skills section-shell" aria-labelledby="skills-title">
      <div class="about-page__section-label" data-reveal>
        <p class="eyebrow">02 / Capabilities</p>
        <span>技能</span>
      </div>

      <div class="about-page__section-heading" data-reveal>
        <h2 id="skills-title">A thoughtful<br /><em>set of tools.</em></h2>
        <p>在設計與開發之間切換，讓每個細節都能被好好實現。</p>
      </div>

      <div class="about-page__skill-grid">
        <article v-for="(group, index) in skills" :key="group.id" class="about-page__skill-card" data-reveal>
          <p>0{{ index + 1 }} / {{ group.label }}</p>
          <h3>{{ group.label }}</h3>
          <div>
            <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="about-page__section about-page__experience section-shell" aria-labelledby="experience-title">
      <div class="about-page__section-label" data-reveal>
        <p class="eyebrow">03 / Experience</p>
        <span>經歷</span>
      </div>

      <div class="about-page__section-heading" data-reveal>
        <h2 id="experience-title">Growing through<br /><em>every project.</em></h2>
      </div>

      <ol class="about-page__timeline">
        <li v-for="experience in experiences" :key="`${experience.period}-${experience.role}`" data-reveal>
          <p class="about-page__timeline-period">{{ experience.period }}</p>
          <div>
            <h3>{{ experience.role }}</h3>
            <p class="about-page__timeline-company">{{ experience.company }}</p>
          </div>
          <p class="about-page__timeline-description">{{ experience.description }}</p>
        </li>
      </ol>
    </section>

    <section class="about-page__section about-page__certificates section-shell" aria-labelledby="certificates-title">
      <div class="about-page__section-label" data-reveal>
        <p class="eyebrow">04 / Credentials</p>
        <span>相關證照</span>
      </div>

      <div class="about-page__section-heading" data-reveal>
        <h2 id="certificates-title">Learning, always<br /><em>in progress.</em></h2>
        <p>把你的證照名稱、發證單位與取得年份填入下方卡片即可。</p>
      </div>

      <div class="about-page__certificate-grid">
        <article v-for="certificate in certificates" :key="certificate.number" class="about-page__certificate" data-reveal>
          <span>{{ certificate.number }}</span>
          <h3>{{ certificate.title }}</h3>
          <p>{{ certificate.detail }}</p>
        </article>
      </div>
    </section>

    <footer class="about-page__footer section-shell">
      <RouterLink to="/" class="text-link">← Back to home</RouterLink>
      <span>Jessie Lin / About</span>
    </footer>
  </main>
</template>

<style scoped lang="scss">
.about-page {
  overflow: hidden;
  background: var(--canvas);
}

.about-page__hero {
  position: relative;
  min-height: max(48rem, 100svh);
  padding-top: clamp(8rem, 14vw, 11rem);
  padding-bottom: 3.5rem;
}

.about-page__eyebrow {
  position: relative;
  z-index: 2;
}

.about-page__hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(16rem, 0.85fr) minmax(18rem, 1.15fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 9rem);
  width: min(100%, 71rem);
  margin: clamp(2.5rem, 7vw, 6rem) auto 0;
}

.about-page__hero-photo {
  position: relative;
  width: min(100%, 28rem);
  margin: 0;
  overflow: hidden;
  border-radius: 46% 54% 51% 49% / 39% 44% 56% 61%;
  box-shadow: 0 2rem 4rem rgba(97, 113, 122, 0.13);

  img {
    width: 100%;
    aspect-ratio: 0.84;
    object-fit: cover;
    object-position: center;
  }

  figcaption {
    position: absolute;
    right: 1.25rem;
    bottom: 1rem;
    color: #fff;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
}

.about-page__hero-copy {
  position: relative;
  z-index: 2;
  max-width: 34rem;
  padding-top: clamp(1rem, 5vw, 6rem);

  .about-page__kicker {
    margin: 0 0 1.2rem;
    color: var(--ink-faint);
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .display-title {
    font-size: clamp(3.3rem, 6.8vw, 7.4rem);
    line-height: 0.89;

    em {
      color: var(--sand-deep);
      font-weight: inherit;
    }
  }

  > p:last-child {
    max-width: 23rem;
    margin: 2rem 0 0;
    color: var(--ink-soft);
    font-size: 0.9rem;
    line-height: 2;
  }
}

.about-page__hero-orb {
  position: absolute;
  z-index: 0;
  top: clamp(4.5rem, 7vw, 7rem);
  right: -5vw;
  width: min(51vw, 46rem);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 53% 47% 58% 42% / 43% 50% 50% 57%;
  background:
    radial-gradient(circle at 32% 25%, rgba(255, 255, 255, 0.72), transparent 22%),
    linear-gradient(135deg, rgba(205, 231, 242, 0.38), rgba(246, 247, 249, 0.38) 49%, rgba(254, 223, 225, 0.32));
  box-shadow: 0 1.25rem 4rem rgba(152, 179, 192, 0.08), inset 0 0 1px rgba(255, 255, 255, 0.92);
}

.about-page__scroll {
  position: absolute;
  z-index: 2;
  bottom: 2.25rem;
  left: var(--gutter);
  color: var(--ink-faint);
  font-size: 0.67rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  span {
    display: inline-block;
    margin-left: 0.6rem;
    font-size: 1.3rem;
    vertical-align: -0.15em;
  }
}

.about-page__section {
  display: grid;
  grid-template-columns: minmax(8rem, 0.42fr) minmax(0, 1.58fr);
  column-gap: clamp(2rem, 8vw, 11rem);
  padding-top: clamp(7rem, 13vw, 12rem);
  padding-bottom: clamp(7rem, 13vw, 12rem);
  border-top: 1px solid var(--line);
}

.about-page__section-label {
  color: var(--ink-faint);
  font-family: var(--font-serif);
  font-size: 0.96rem;

  .eyebrow {
    margin-bottom: 0.7rem;
  }
}

.about-page__profile-content,
.about-page__section-heading {
  grid-column: 2;

  h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: clamp(2.8rem, 5.6vw, 6.2rem);
    font-weight: 400;
    letter-spacing: var(--heading-letter-spacing);
    line-height: 0.94;

    em {
      color: var(--sand-deep);
      font-weight: inherit;
    }
  }
}

.about-page__profile-content {
  display: grid;
  grid-template-columns: minmax(14rem, 1.05fr) minmax(14rem, 0.75fr);
  gap: clamp(2rem, 7vw, 9rem);
}

.about-page__profile-copy {
  color: var(--ink-soft);
  font-size: 0.9rem;
  line-height: 2;

  p {
    margin: 0 0 1.35rem;
  }
}

.about-page__facts {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  padding: 3rem 0 0;
  margin: 3rem 0 0;
  border-top: 1px solid var(--line);

  div { min-width: 0; }

  dt {
    margin-bottom: 0.65rem;
    color: var(--ink-faint);
    font-size: 0.64rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    font-family: var(--font-heading);
    font-size: clamp(1.15rem, 1.55vw, 1.55rem);
    line-height: 1.18;
  }
}

.about-page__skills {
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 15%;
    right: -10rem;
    width: 29rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(209, 233, 241, 0.2), rgba(254, 223, 225, 0.18));
    content: '';
  }
}

.about-page__section-heading {
  position: relative;
  z-index: 1;

  > p {
    max-width: 23rem;
    margin: 1.5rem 0 0;
    color: var(--ink-soft);
    font-size: 0.88rem;
    line-height: 1.9;
  }
}

.about-page__skill-grid,
.about-page__certificate-grid {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.8rem);
  margin-top: clamp(3rem, 6vw, 5rem);
}

.about-page__skill-card,
.about-page__certificate {
  position: relative;
  z-index: 1;
  min-height: 16rem;
  padding: clamp(1.25rem, 2.5vw, 2rem);
  border: 1px solid var(--line);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.56);

  > p:first-child,
  > span {
    display: block;
    margin: 0 0 2.8rem;
    color: var(--sand-deep);
    font-size: 0.65rem;
    letter-spacing: 0.14em;
  }

  h3 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: clamp(1.65rem, 2.2vw, 2.25rem);
    font-weight: 400;
    line-height: 1.05;
  }
}

.about-page__skill-card div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.6rem;

  span {
    padding: 0.25rem 0.55rem;
    border: 1px solid rgba(68, 68, 68, 0.18);
    border-radius: 999px;
    font-size: 0.68rem;
  }
}

.about-page__experience { background: #f9f9f9; }

.about-page__timeline {
  grid-column: 2;
  margin: clamp(3rem, 6vw, 5rem) 0 0;
  padding: 0;
  list-style: none;

  li {
    display: grid;
    grid-template-columns: minmax(7rem, 0.32fr) minmax(12rem, 0.7fr) minmax(12rem, 0.85fr);
    gap: clamp(1.3rem, 3vw, 3rem);
    padding: 2.1rem 0;
    border-top: 1px solid var(--line);

    &:last-child { border-bottom: 1px solid var(--line); }
  }

  h3,
  p { margin: 0; }
}

.about-page__timeline-period {
  color: var(--ink-faint);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}

.about-page__timeline h3 {
  font-family: var(--font-heading);
  font-size: clamp(1.45rem, 2vw, 2rem);
  font-weight: 400;
  line-height: 1.1;
}

.about-page__timeline-company {
  margin-top: 0.45rem !important;
  color: var(--sand-deep);
  font-size: 0.78rem;
}

.about-page__timeline-description {
  color: var(--ink-soft);
  font-size: 0.8rem;
  line-height: 1.9;
}

.about-page__certificate {
  min-height: 13.5rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(254, 223, 225, 0.2));

  h3 { margin-bottom: 0.65rem; }

  > p:last-child {
    margin: 0;
    color: var(--ink-faint);
    font-size: 0.75rem;
  }
}

.about-page__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  border-top: 1px solid var(--line);
  color: var(--ink-faint);
  font-size: 0.68rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

@media (max-width: 850px) {
  .about-page__hero {
    min-height: auto;
    padding-bottom: 7rem;
  }

  .about-page__hero-layout,
  .about-page__profile-content { grid-template-columns: 1fr; }

  .about-page__hero-layout { max-width: 38rem; }
  .about-page__hero-photo { width: min(75%, 25rem); }
  .about-page__hero-copy { padding-top: 0; }
  .about-page__hero-orb { top: 13rem; width: 66vw; }

  .about-page__section {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }

  .about-page__profile-content,
  .about-page__section-heading,
  .about-page__facts,
  .about-page__skill-grid,
  .about-page__certificate-grid,
  .about-page__timeline { grid-column: 1; }

  .about-page__facts,
  .about-page__skill-grid,
  .about-page__certificate-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .about-page__skill-card:last-child,
  .about-page__certificate:last-child { grid-column: span 2; }
}

@media (max-width: 620px) {
  .about-page__hero { padding-top: 7.25rem; }
  .about-page__hero-photo { width: 86%; }
  .about-page__hero-copy .display-title { font-size: clamp(3.1rem, 15vw, 4.6rem); }
  .about-page__hero-orb { top: 12rem; right: -11rem; width: 31rem; }

  .about-page__facts,
  .about-page__skill-grid,
  .about-page__certificate-grid { grid-template-columns: 1fr; }

  .about-page__skill-card:last-child,
  .about-page__certificate:last-child { grid-column: auto; }

  .about-page__timeline li {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .about-page__timeline-description { margin-top: 0.75rem !important; }

  .about-page__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
