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

  if (!content || !curtain.value || reducedMotion) {
    if (content) gsap.set(content, { autoAlpha: 1, y: 0 })
    complete()
    return
  }

  gsap.set(content, { autoAlpha: 0, y: 30 })

  timeline = gsap
    .timeline({ onComplete: complete })
    .to(
      curtain.value,
      {
        yPercent: -100,
        duration: 1.45,
        ease: 'power4.inOut',
      },
      '+=0.45',
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

</style>
