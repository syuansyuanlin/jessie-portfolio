<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  contentElement: HTMLElement | null
}>()

const emit = defineEmits<{
  complete: []
}>()

const curtain = ref<HTMLElement | null>(null)
const logo = ref<HTMLElement | null>(null)

let timeline: gsap.core.Timeline | undefined
let previousBodyOverflow = ''
let previousHtmlOverflow = ''

function lockScroll() {
  previousBodyOverflow = document.body.style.overflow
  previousHtmlOverflow = document.documentElement.style.overflow
  document.documentElement.classList.add('is-page-loading')
  document.body.classList.add('is-page-loading')
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.documentElement.classList.remove('is-page-loading')
  document.body.classList.remove('is-page-loading')
  document.documentElement.style.overflow = previousHtmlOverflow
  document.body.style.overflow = previousBodyOverflow
}

function complete() {
  unlockScroll()
  emit('complete')
}

onMounted(async () => {
  lockScroll()
  await nextTick()

  const content = props.contentElement ?? document.querySelector<HTMLElement>('.app__content')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!content || !curtain.value || !logo.value || reducedMotion) {
    if (content) gsap.set(content, { autoAlpha: 1, y: 0 })
    complete()
    return
  }

  gsap.set(content, { autoAlpha: 0, y: 30 })

  timeline = gsap
    .timeline({ onComplete: complete })
    .set(logo.value, { autoAlpha: 0, y: 16 })
    .to(logo.value, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: 'power2.out',
    })
    .to(
      logo.value,
      {
        autoAlpha: 0,
        y: -10,
        duration: 0.6,
        ease: 'power2.in',
      },
      '+=0.55',
    )
    .to(
      curtain.value,
      {
        yPercent: -100,
        duration: 1.45,
        ease: 'power4.inOut',
      },
      '+=0.1',
    )
    .to(
      content,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.15,
        ease: 'power3.out',
      },
      '<+0.72',
    )
})

onBeforeUnmount(() => {
  timeline?.kill()
  unlockScroll()
})
</script>

<template>
  <div ref="curtain" class="page-loader" role="status" aria-live="polite">
    <div ref="logo" class="page-loader__logo" aria-hidden="true">
      <span class="page-loader__monogram">JL</span>
      <span class="page-loader__line" />
      <span class="page-loader__name">Jessie Lin</span>
    </div>
    <span class="sr-only">Loading portfolio</span>
  </div>
</template>

<style scoped lang="scss">
.page-loader {
  position: fixed;
  z-index: 10000;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #f6f7f9;
  color: #2d2d2d;
  will-change: transform;
}

.page-loader__logo {
  display: grid;
  justify-items: center;
  gap: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  will-change: transform, opacity;
}

.page-loader__monogram {
  display: grid;
  width: 4.6rem;
  height: 4.6rem;
  place-items: center;
  border: 1px solid currentcolor;
  border-radius: 50%;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  letter-spacing: 0.05em;
}

.page-loader__line {
  width: 2.8rem;
  height: 1px;
  background: currentcolor;
  opacity: 0.5;
}

.page-loader__name {
  font-size: 0.62rem;
}

@media (max-width: 620px) {
  .page-loader__monogram {
    width: 4rem;
    height: 4rem;
    font-size: 1.3rem;
  }
}
</style>
