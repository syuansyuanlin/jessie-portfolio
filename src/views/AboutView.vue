<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import aboutPhoto from '@/assets/images/S__190988291.jpg'
import azureAiCertificate from '@/assets/images/azureai.png'
import aiCertificate from '@/assets/images/ai.png'
import powerBiCertificate from '@/assets/images/powerbi.png'
import { useReveal } from '@/composables/useReveal'

const { scope } = useReveal()

const workExperiences = [
  {
    period: '2025 / 07 — Present',
    role: 'Web Developer',
    company: '旭海國際科技股份有限公司',
    industry: '旅遊服務業 · 30–100 人',
    location: '台北市中山區',
    summary: '負責旅宿業 WordPress 網站建置與維護，依需求調整版型、功能及互動，並進行外掛整合、效能優化、SEO 設定與客戶技術支援。',
  },
  {
    period: '2023 / 11 — 2025 / 06',
    role: 'Front-End Developer',
    company: '云碩科技股份有限公司',
    industry: '電腦系統整合服務業 · 1–30 人',
    location: '台北市中山區',
    summary: '使用 Microsoft Power Platform 開發企業內部系統與流程自動化，參與 React 前端專案，負責 UI 製作、功能開發及客戶需求訪談與系統導入。',
  },
]

const certificates = [
  { number: '01', title: 'Certificate title', detail: 'Issuing organisation · year' },
  { number: '02', title: 'Certificate title', detail: 'Issuing organisation · year' },
  { number: '03', title: 'Certificate title', detail: 'Issuing organisation · year' },
]

const certificateContent: Record<string, { image: string; title: string; detail: string }> = {
  '01': {
    image: azureAiCertificate,
    title: 'Azure AI Fundamentals',
    detail: 'Microsoft · 2024',
  },
  '02': {
    image: aiCertificate,
    title: 'Generative AI Certification',
    detail: 'Institute for Information Industry · 2025',
  },
  '03': {
    image: powerBiCertificate,
    title: 'Power BI Data Analysis',
    detail: 'BIPBD Power BI Desktop · 2024',
  },
}

type CertificateContent = (typeof certificateContent)[string]

const activeCertificate = ref<CertificateContent | null>(null)
const certificateCloseButton = ref<HTMLButtonElement | null>(null)
let previousBodyOverflow = ''
let previousFocus: HTMLElement | null = null

const openCertificate = async (certificate: CertificateContent) => {
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
  previousBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  activeCertificate.value = certificate

  await nextTick()
  certificateCloseButton.value?.focus()
}

const closeCertificate = async () => {
  if (!activeCertificate.value) return

  activeCertificate.value = null
  document.body.style.overflow = previousBodyOverflow

  await nextTick()
  previousFocus?.focus()
}

const handleCertificateKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeCertificate()
}

onMounted(() => window.addEventListener('keydown', handleCertificateKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleCertificateKeydown)
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <main ref="scope" class="about-page">
    <section class="about-page__hero section-shell" aria-labelledby="about-page-title">
      <p class="eyebrow about-page__eyebrow" data-reveal>About / 01</p>

      <div class="about-page__hero-layout">
        <span class="about-page__hero-bubble about-page__hero-bubble--top" aria-hidden="true" />
        <span class="about-page__hero-bubble about-page__hero-bubble--bottom" aria-hidden="true" />

        <h1 id="about-page-title" class="about-page__hero-title display-title" data-reveal>
          A little more<br />
          <em>about me.</em>
        </h1>

        <figure class="about-page__hero-photo" data-reveal>
          <img :src="aboutPhoto" alt="Jessie Lin 的個人照片" />
          <figcaption>Jessie Lin / Portfolio</figcaption>
        </figure>

        <div class="about-page__hero-copy" data-reveal data-reveal-delay="0.1">
          <p class="about-page__kicker">UI Designer · Front-end Developer</p>
          <div class="about-page__hero-intro">
            <p>
              曾於系統整合公司任職，負責企業系統介面設計與開發，運用 Microsoft Power Platform 工具協助企業完成流程數位化，並參與 AI 應用平台前端開發，累積企業系統規劃、流程自動化與跨團隊協作經驗。
            </p>
            <p>
              目前負責旅宿業網站建置與維護，已參與多家飯店及旅宿品牌官網建置，依客戶需求進行網站客製化、功能調整與效能優化，協助企業建立品牌形象並提升網站維運效率，同時提供後台操作教學與技術支援。
            </p>
            <p>
              未來希望結合設計思維與開發能力，持續打造兼具美感、易用性與實際價值的數位產品。
            </p>
          </div>
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
        <p class="eyebrow">Experience / 02</p>
        <span>工作經歷</span>
      </div>

      <div class="about-page__career-content">
        <h2 id="profile-title" class="sr-only">Experience</h2>
        <ol class="about-page__career-list">
          <li v-for="experience in workExperiences" :key="experience.period" data-reveal>
            <div class="about-page__career-period">
              <p>{{ experience.period }}</p>
            </div>

            <div class="about-page__career-detail">
              <h3>{{ experience.role }}</h3>
              <p class="about-page__career-company">{{ experience.company }}</p>
            </div>

            <p class="about-page__career-summary">{{ experience.summary }}</p>
          </li>
        </ol>
      </div>
    </section>

    <div class="about-page__skills-marquee" aria-label="Jessie Design">
      <div class="about-page__skills-marquee-track" aria-hidden="true">
        <svg
          v-for="index in 8"
          :key="index"
          class="about-page__skills-marquee-word"
          viewBox="0 0 850 110"
          focusable="false"
        >
          <text x="5" y="84">Jessie♡Design．</text>
        </svg>
      </div>
    </div>

    <section class="about-page__section about-page__certificates section-shell" aria-label="Credentials">
      <div class="about-page__section-label" data-reveal>
        <p class="eyebrow">Certificates / 03</p>
        <span>相關證照</span>
      </div>

      <div class="about-page__certificate-grid">
        <button
          v-for="certificate in certificates"
          :key="certificate.number"
          type="button"
          class="about-page__certificate"
          :aria-label="`放大查看 ${certificateContent[certificate.number].title} 證照`"
          data-reveal
          @click="openCertificate(certificateContent[certificate.number])"
        >
          <img :src="certificateContent[certificate.number].image" :alt="certificateContent[certificate.number].title" />
          <p class="about-page__certificate-meta">{{ certificateContent[certificate.number].detail }}</p>
          <h3>{{ certificateContent[certificate.number].title }}</h3>
        </button>
      </div>
    </section>

    <footer class="about-page__footer section-shell">
      <RouterLink to="/" class="text-link">← Back to home</RouterLink>
      <span>Jessie Lin / About</span>
    </footer>

    <Teleport to="body">
      <Transition name="certificate-modal">
        <div
          v-if="activeCertificate"
          class="about-page__certificate-modal"
          role="dialog"
          aria-modal="true"
          :aria-label="`${activeCertificate.title} 證照預覽`"
          @click.self="closeCertificate"
        >
          <div class="about-page__certificate-dialog">
            <button
              ref="certificateCloseButton"
              type="button"
              class="about-page__certificate-close"
              aria-label="關閉證照預覽"
              @click="closeCertificate"
            >
              ×
            </button>

            <img :src="activeCertificate.image" :alt="activeCertificate.title" />

            <div class="about-page__certificate-caption">
              <p>{{ activeCertificate.detail }}</p>
              <h2>{{ activeCertificate.title }}</h2>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<style scoped lang="scss">
.about-page {
  overflow: hidden;
  background: var(--canvas);
}

.about-page__hero {
  position: relative;
  min-height: max(47rem, 100svh);
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
  grid-template-columns: minmax(0, 31rem) clamp(13.75rem, 23vw, 18.5rem);
  justify-content: center;
  align-items: start;
  row-gap: clamp(2.75rem, 5vw, 4.5rem);
  column-gap: clamp(2rem, 4vw, 3.5rem);
  width: min(100%, 67rem);
  margin: clamp(1.25rem, 2vw, 2rem) auto 0;
}

.about-page__hero-title {
  position: relative;
  z-index: 1;
  grid-column: 1 / -1;
  grid-row: 1;
  justify-self: center;
  margin: 0;
  color: var(--ink);
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
  line-height: 0.9;

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }
}

.about-page__hero-bubble {
  position: absolute;
  z-index: 0;
  aspect-ratio: 1.22;
  border: 1px solid rgba(255, 255, 255, 0.62);
  border-radius: 52% 48% 55% 45% / 45% 52% 48% 55%;
  background:
    radial-gradient(ellipse at 28% 22%, rgba(255, 255, 255, 0.62), transparent 28%),
    radial-gradient(ellipse at 76% 78%, rgba(254, 223, 225, 0.16), transparent 48%),
    linear-gradient(135deg, rgba(190, 222, 237, 0.25), rgba(246, 247, 249, 0.3) 48%, rgba(254, 223, 225, 0.2));
  box-shadow:
    0 1.1rem 2.4rem rgba(128, 157, 173, 0.08),
    inset 0 0.08rem 0.1rem rgba(255, 255, 255, 0.5),
    inset 0 -0.8rem 1.6rem rgba(160, 190, 204, 0.045);
  animation: about-page-bubble-drift 10s ease-in-out infinite alternate;
  backdrop-filter: blur(4px) saturate(108%);
  -webkit-backdrop-filter: blur(4px) saturate(108%);
  pointer-events: none;
}

.about-page__hero-bubble--top {
  top: clamp(2.5rem, 5vw, 5rem);
  left: clamp(-5rem, -4vw, -1.5rem);
  width: clamp(20rem, 34vw, 30rem);
}

.about-page__hero-bubble--bottom {
  right: clamp(-10rem, -7vw, -5.5rem);
  bottom: clamp(-4rem, -3vw, -1.5rem);
  width: clamp(18rem, 28vw, 28rem);
  aspect-ratio: 1;
  animation-delay: -4.5s;
  animation-direction: alternate-reverse;
}

@keyframes about-page-bubble-drift {
  from {
    transform: translate3d(-1.5rem, -1rem, 0);
  }
  to {
    transform: translate3d(1.8rem, 1.35rem, 0);
  }
}

.about-page__hero-photo {
  position: relative;
  z-index: 1;
  grid-column: 2;
  grid-row: 2;
  justify-self: end;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1.5rem 3rem rgba(97, 113, 122, 0.12);
  transform: translateX(clamp(1.25rem, 2.5vw, 2.5rem));

  img {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    object-position: center 30%;
  }

  figcaption {
    display: none;
  }
}

.about-page__hero-copy {
  position: relative;
  z-index: 2;
  grid-column: 1;
  grid-row: 2;
  max-width: 35rem;
  padding-top: 0;

  .about-page__kicker {
    margin: 0 0 1.2rem;
    color: var(--ink-faint);
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  > p:last-child {
    display: none;
  }
}

.about-page__hero-copy .about-page__kicker,
.about-page__hero-copy .display-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.about-page__hero-intro {
  color: var(--ink-soft);
  font-size: clamp(0.88rem, 1vw, 1rem);
  line-height: 1.95;
  text-align: justify;
  text-justify: inter-ideograph;

  p {
    max-width: 31rem;
    margin: 0;
  }

  p + p {
    margin-top: 1.7rem;
  }
}

.about-page__hero-orb {
  display: none;
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

.about-page__skills {
  border-top: 0;

  .about-page__section-heading h2 {
    font-size: clamp(2.25rem, 3.7vw, 2.8125rem);
  }
}

.about-page__certificates {
  border-top: 0;
}

.about-page__skills-marquee {
  overflow: hidden;
  padding: 0.75rem 0 0.9rem;
  white-space: nowrap;
}

.about-page__skills-marquee-track {
  display: flex;
  width: max-content;
  animation: about-page-skills-marquee 48s linear infinite;
  will-change: transform;
}

.about-page__skills-marquee-word {
  display: block;
  flex: 0 0 auto;
  width: clamp(22rem, 30vw, 25rem);
  height: clamp(3.1rem, 4.8vw, 5.3rem);
  margin-right: clamp(0.75rem, 1vw, 1.25rem);

  text {
    fill: none;
    font-family: var(--font-heading);
    font-size: 84px;
    font-weight: 400;
    letter-spacing: 3px;
    stroke: #d2d2d2;
    stroke-width: 1.6px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}

@keyframes about-page-skills-marquee {
  to {
    transform: translateX(-50%);
  }
}

.about-page__section-label {
  color: var(--ink-faint);
  font-family: var(--font-sans);

  .eyebrow {
    margin: 0;
  }

  > span {
    display: none;
  }
}

.about-page__profile-content,
.about-page__section-heading,
.about-page__career-content {
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

.about-page__career-content {
  grid-column: 2;
  display: block;
}

.about-page__profile {
  border-top: 0;
  row-gap: clamp(2rem, 5vw, 4rem);
}

.about-page__career-list {
  padding: 0;
  margin: 0;
  list-style: none;

  > li {
    display: grid;
    grid-template-columns: minmax(6.75rem, 0.48fr) minmax(11.5rem, 0.97fr) minmax(13rem, 1.15fr);
    gap: clamp(1.25rem, 2.5vw, 2.5rem);
    padding: clamp(2rem, 3.5vw, 3rem) 0;
    border-bottom: 1px solid var(--line);
  }
}

.about-page__career-period {
  color: var(--sand-deep);
  font-size: 0.68rem;
  letter-spacing: 0.11em;
  line-height: 1.65;
  text-transform: uppercase;

  p,
  span {
    display: block;
    margin: 0;
  }

  span {
    margin-top: 0.5rem;
    color: var(--sand-deep);
  }
}

.about-page__career-detail {
  h3 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: clamp(1.65rem, 2.25vw, 2.35rem);
    font-weight: 400;
    line-height: 1.05;
  }

  p { margin: 0; }

}

.about-page__career-company {
  margin-top: 0.8rem !important;
  color: #888888;
  font-size: 0.92rem;
  font-weight: 500;
}

.about-page__career-meta {
  margin-top: 0.4rem !important;
  color: var(--ink-faint);
  font-size: 0.73rem;
  letter-spacing: 0.04em;
}

.about-page__career-summary {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.88rem;
  line-height: 1.9;
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

.about-page__certificates .about-page__certificate-grid {
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
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

.about-page__certificate {
  display: block;
  width: 100%;
  min-height: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;

  &:focus-visible {
    outline: 2px solid var(--sand-deep);
    outline-offset: 0.55rem;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    margin: 0;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    margin: 0.35rem 0 0;
    font-family: var(--font-heading);
    font-size: clamp(1.15rem, 1.55vw, 1.65rem);
    font-weight: 500;
    line-height: 1.35;
  }
}

.about-page__certificate-meta {
  margin: 0.65rem 0 0;
  color: var(--ink-faint);
  font-size: 0.78rem;
  line-height: 1.4;
}

.about-page__certificate-modal {
  position: fixed;
  z-index: 12000;
  inset: 0;
  display: grid;
  padding: clamp(1rem, 4vw, 3rem);
  place-items: center;
  background: rgba(35, 37, 40, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.about-page__certificate-dialog {
  position: relative;
  width: min(100%, 68rem);
  max-height: calc(100svh - clamp(2rem, 8vw, 6rem));
  overflow: auto;
  padding: clamp(1rem, 2vw, 1.5rem);
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: var(--paper);
  box-shadow: 0 2rem 5rem rgba(18, 22, 28, 0.28);

  > img {
    display: block;
    width: 100%;
    max-height: calc(100svh - 12rem);
    object-fit: contain;
    background: #ffffff;
  }
}

.about-page__certificate-close {
  position: absolute;
  z-index: 1;
  top: 0.75rem;
  right: 0.75rem;
  display: grid;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0 0 0.18rem;
  place-items: center;
  border: 1px solid rgba(68, 68, 68, 0.28);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 1.65rem;
  line-height: 1;
}

.about-page__certificate-caption {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem 0.25rem 0.1rem;

  p,
  h2 {
    margin: 0;
  }

  p {
    color: var(--ink-faint);
    font-size: 0.74rem;
  }

  h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 2vw, 1.8rem);
    font-weight: 500;
  }
}

.certificate-modal-enter-active,
.certificate-modal-leave-active {
  transition: opacity 220ms ease;

  .about-page__certificate-dialog {
    transition: opacity 220ms ease, transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.certificate-modal-enter-from,
.certificate-modal-leave-to {
  opacity: 0;

  .about-page__certificate-dialog {
    opacity: 0;
    transform: translateY(1rem) scale(0.97);
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

@media (prefers-reduced-motion: reduce) {
  .about-page__hero-bubble,
  .about-page__skills-marquee-track {
    animation: none;
  }
}

@media (max-width: 850px) {
  .about-page__hero {
    min-height: auto;
    padding-bottom: 7rem;
  }

  .about-page__hero-layout,
  .about-page__profile-content,
  .about-page__career-content { grid-template-columns: 1fr; }

  .about-page__hero-layout { max-width: 38rem; }
  .about-page__hero-photo {
    grid-column: 1;
    grid-row: 3;
    width: min(100%, 19rem);
    margin-top: 1rem;
    transform: none;
  }
  .about-page__hero-copy {
    grid-column: 1;
    grid-row: 2;
    padding-top: 0;
  }
  .about-page__hero-title {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
  }

  .about-page__section {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }

  .about-page__profile-content,
  .about-page__career-content,
  .about-page__section-heading,
  .about-page__facts,
  .about-page__skill-grid,
  .about-page__certificate-grid { grid-column: 1; }

  .about-page__facts,
  .about-page__skill-grid,
  .about-page__certificate-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .about-page__career-list > li {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .about-page__career-list { grid-column: 1; }

  .about-page__skill-card:last-child,
  .about-page__certificate:last-child { grid-column: span 2; }
}

@media (max-width: 620px) {
  .about-page__hero { padding-top: 7.25rem; }
  .about-page__hero-photo { width: min(100%, 17rem); }

  .about-page__facts,
  .about-page__skill-grid,
  .about-page__certificate-grid { grid-template-columns: 1fr; }

  .about-page__skill-card:last-child,
  .about-page__certificate:last-child { grid-column: auto; }

  .about-page__certificate-modal {
    padding: 0.75rem;
  }

  .about-page__certificate-dialog {
    padding: 0.75rem;
  }

  .about-page__certificate-caption {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 0.35rem;
  }

  .about-page__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
