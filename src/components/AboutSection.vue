<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import aboutPhoto from '@/assets/images/my-photo.jpg'

const aboutSection = ref<HTMLElement | null>(null)
const cursorBubble = ref<HTMLElement | null>(null)
let cleanup: (() => void) | undefined

onMounted(() => {
  const section = aboutSection.value
  const bubble = cursorBubble.value
  const supportsEffect = window.matchMedia(
    '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
  ).matches

  if (!section || !bubble || !supportsEffect) return

  gsap.set(bubble, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.72 })

  const xTo = gsap.quickTo(bubble, 'x', { duration: 0.8, ease: 'power3.out' })
  const yTo = gsap.quickTo(bubble, 'y', { duration: 0.8, ease: 'power3.out' })
  let isVisible = false
  let lastPointer: { x: number; y: number } | undefined

  const setVisibility = (shouldShow: boolean) => {
    if (isVisible === shouldShow) return

    isVisible = shouldShow
    gsap.to(bubble, {
      opacity: shouldShow ? 1 : 0,
      duration: shouldShow ? 0.45 : 0.36,
      ease: 'power2.out',
      overwrite: 'auto',
      scale: shouldShow ? 1 : 0.72,
    })
  }

  const updateBubble = () => {
    if (!lastPointer) return

    const bounds = section.getBoundingClientRect()
    const isInsideAbout =
      lastPointer.x >= bounds.left &&
      lastPointer.x <= bounds.right &&
      lastPointer.y >= bounds.top &&
      lastPointer.y <= bounds.bottom

    if (!isInsideAbout) {
      setVisibility(false)
      return
    }

    const x = lastPointer.x - bounds.left
    const y = lastPointer.y - bounds.top

    if (!isVisible) {
      gsap.set(bubble, { x, y })
      setVisibility(true)
      return
    }

    xTo(x)
    yTo(y)
    setVisibility(true)
  }

  const handleMouseMove = (event: MouseEvent) => {
    lastPointer = { x: event.clientX, y: event.clientY }
    updateBubble()
  }

  const handleWindowBlur = () => setVisibility(false)

  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('scroll', updateBubble, { passive: true })
  window.addEventListener('blur', handleWindowBlur)

  cleanup = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', updateBubble)
    window.removeEventListener('blur', handleWindowBlur)
  }
})

onBeforeUnmount(() => {
  cleanup?.()
  if (cursorBubble.value) gsap.killTweensOf(cursorBubble.value)
})
</script>

<template>
  <section
    ref="aboutSection"
    id="about"
    class="about section-shell"
    aria-labelledby="about-title"
  >
    <span ref="cursorBubble" class="about__cursor-bubble" aria-hidden="true" />
    <div class="about__label" data-reveal>
      <p class="eyebrow">01 / About me</p>
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
        <RouterLink class="about__more" to="/about">
          <span class="about__more-label">View More</span>
          <span class="about__more-circle" aria-hidden="true">→</span>
        </RouterLink>
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
  position: relative;
  display: grid;
  grid-template-columns: minmax(7rem, 0.35fr) minmax(0, 1.1fr) minmax(15rem, 0.72fr);
  column-gap: clamp(2rem, 8vw, 10rem);
  isolation: isolate;
  padding-top: clamp(8rem, 16vw, 15rem);
  padding-bottom: clamp(8rem, 15vw, 14rem);
}

.about__cursor-bubble {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: clamp(18rem, 29vw, 28rem);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.62);
  border-radius: 60% 70% 57% 68% / 50% 65% 62% 68%;
  background:
    radial-gradient(ellipse at 28% 22%, rgba(255, 255, 255, 0.68), transparent 28%),
    radial-gradient(ellipse at 76% 78%, rgba(254, 223, 225, 0.24), transparent 48%),
    linear-gradient(
      135deg,
      rgba(190, 222, 237, 0.38),
      rgba(246, 247, 249, 0.44) 48%,
      rgba(254, 223, 225, 0.3)
    );
  backdrop-filter: blur(4px) saturate(108%);
  -webkit-backdrop-filter: blur(4px) saturate(108%);
  box-shadow:
    0 1.1rem 2.4rem rgba(128, 157, 173, 0.1),
    inset 0 0.08rem 0.1rem rgba(255, 255, 255, 0.56),
    inset 0 -0.8rem 1.6rem rgba(160, 190, 204, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.18);
  opacity: 0;
  pointer-events: none;
  will-change: transform, opacity;
}

.about__cursor-bubble::before {
  position: absolute;
  top: 8%;
  left: 10%;
  width: 48%;
  height: 10%;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.48), rgba(255, 255, 255, 0));
  content: '';
  filter: blur(5px);
  transform: rotate(-15deg);
}

.about__label,
.about__main,
.about__image {
  position: relative;
  z-index: 1;
}

.about__label {
  color: var(--ink-faint);
  font-family: var(--font-sans);
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
  color: #444444;
}

.about__story {
  width: min(100%, 29rem);
  margin: clamp(1.75rem, 3vw, 3rem) 0 0;
  padding-top: 0;
  transform: translateX(clamp(1.25rem, 2.5vw, 2rem));
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
  z-index: 2;
  width: min(85%, 18rem);
  margin: 0;
  justify-self: start;
  transform: translateX(clamp(-8rem, -5vw, -2.5rem));

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
    transform: none;
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
