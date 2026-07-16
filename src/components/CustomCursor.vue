<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const cursor = ref<HTMLElement | null>(null)
const halo = ref<HTMLElement | null>(null)
let cleanup: (() => void) | undefined

onMounted(() => {
  const cursorElement = cursor.value
  const haloElement = halo.value
  const supportsCustomCursor = window.matchMedia(
    '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
  ).matches

  if (!cursorElement || !haloElement || !supportsCustomCursor) return

  gsap.set([cursorElement, haloElement], {
    xPercent: -50,
    yPercent: -50,
    autoAlpha: 0,
  })
  gsap.set(haloElement, { scale: 0.4, opacity: 0 })

  const xTo = gsap.quickTo(cursorElement, 'x', {
    duration: 0.68,
    ease: 'power3.out',
  })
  const yTo = gsap.quickTo(cursorElement, 'y', {
    duration: 0.68,
    ease: 'power3.out',
  })
  const haloXTo = gsap.quickTo(haloElement, 'x', {
    duration: 0.76,
    ease: 'power3.out',
  })
  const haloYTo = gsap.quickTo(haloElement, 'y', {
    duration: 0.76,
    ease: 'power3.out',
  })
  const scaleTo = gsap.quickTo(cursorElement, 'scale', {
    duration: 0.32,
    ease: 'power3.out',
  })
  const opacityTo = gsap.quickTo(cursorElement, 'opacity', {
    duration: 0.24,
    ease: 'power2.out',
  })
  const haloScaleTo = gsap.quickTo(haloElement, 'scale', {
    duration: 0.48,
    ease: 'power3.out',
  })
  const haloOpacityTo = gsap.quickTo(haloElement, 'opacity', {
    duration: 0.36,
    ease: 'power2.out',
  })

  let isVisible = false
  let hoveredTarget: Element | null = null

  const updateHoverState = (target: EventTarget | null) => {
    const nextTarget = target instanceof Element
      ? target.closest('.hover-target, a, button')
      : null

    if (nextTarget === hoveredTarget) return

    hoveredTarget = nextTarget
    scaleTo(nextTarget ? 4 : 1)
    opacityTo(nextTarget ? 0.32 : 1)
    haloScaleTo(nextTarget ? 1.4 : 0.4)
    haloOpacityTo(nextTarget ? 0.95 : 0)
  }

  const showCursor = () => {
    if (isVisible) return

    isVisible = true
    gsap.set(cursorElement, { autoAlpha: 1 })
    gsap.set(haloElement, { visibility: 'visible' })
    opacityTo(hoveredTarget ? 0.32 : 1)
  }

  const hideCursor = () => {
    isVisible = false
    hoveredTarget = null
    scaleTo(1)
    opacityTo(0)
    haloScaleTo(0.4)
    haloOpacityTo(0)
  }

  const handlePointerMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return

    showCursor()
    xTo(event.clientX)
    yTo(event.clientY)
    haloXTo(event.clientX)
    haloYTo(event.clientY)
    updateHoverState(event.target)
  }

  document.addEventListener('pointermove', handlePointerMove, { passive: true })
  document.documentElement.addEventListener('mouseleave', hideCursor)
  window.addEventListener('blur', hideCursor)

  cleanup = () => {
    document.removeEventListener('pointermove', handlePointerMove)
    document.documentElement.removeEventListener('mouseleave', hideCursor)
    window.removeEventListener('blur', hideCursor)
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <span ref="halo" class="custom-cursor__halo" aria-hidden="true" />
  <span ref="cursor" class="custom-cursor" aria-hidden="true" />
</template>

<style scoped lang="scss">
.custom-cursor {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: #fedfe1;
  pointer-events: none;
  will-change: transform, opacity;
}

.custom-cursor__halo {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(254, 223, 225, 0.72) 0%,
    rgba(254, 223, 225, 0.4) 38%,
    rgba(254, 223, 225, 0) 74%
  );
  filter: blur(8px);
  pointer-events: none;
  will-change: transform, opacity;
}

</style>
