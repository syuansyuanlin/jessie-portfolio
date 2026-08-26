<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppHeader from '@/components/AppHeader.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import PageLoader from '@/components/PageLoader.vue'

gsap.registerPlugin(ScrollTrigger)

let frameId = 0
let lenis: Lenis | undefined
let removeRouteGuard: (() => void) | undefined
const syncScrollTrigger = () => ScrollTrigger.update()
const appContent = ref<HTMLElement | null>(null)
const isLoading = ref(true)
const routerInstance = useRouter()
const brandAdvertisingCardSelector =
  '#experience .experience__works > figure.experience__work:nth-of-type(2)'

const openBrandAdvertising = (event: MouseEvent) => {
  const target = event.target
  if (!(target instanceof Element) || !target.closest(brandAdvertisingCardSelector)) return

  event.preventDefault()
  event.stopPropagation()
  routerInstance.push({ name: 'brand-advertising' })
}

onMounted(() => {
  document.addEventListener('click', openBrandAdvertising, true)

  removeRouteGuard = routerInstance.afterEach(async (to) => {
    await nextTick()

    if (to.hash) {
      let remainingAttempts = 30

      const scrollToHash = () => {
        if (routerInstance.currentRoute.value.fullPath !== to.fullPath) return

        const target = document.querySelector<HTMLElement>(to.hash)
        if (!target) {
          remainingAttempts -= 1
          if (remainingAttempts > 0) window.setTimeout(scrollToHash, 16)
          return
        }

        let stabilizationFrames = 3
        const stabilizePosition = () => {
          if (routerInstance.currentRoute.value.fullPath !== to.fullPath) return

          if (lenis) {
            lenis.resize()
            lenis.scrollTo(target, { immediate: true, force: true })
          } else {
            target.scrollIntoView({ behavior: 'auto', block: 'start' })
          }

          stabilizationFrames -= 1
          if (stabilizationFrames > 0) {
            window.setTimeout(stabilizePosition, 16)
          } else {
            ScrollTrigger.refresh()
          }
        }

        stabilizePosition()
      }

      scrollToHash()
      return
    }

    requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }

      requestAnimationFrame(() => ScrollTrigger.refresh())
    })
  })

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.1,
    easing: (value: number) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
  })
  lenis.on('scroll', syncScrollTrigger)

  const animate = (time: number) => {
    lenis?.raf(time)
    frameId = requestAnimationFrame(animate)
  }

  frameId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', openBrandAdvertising, true)
  removeRouteGuard?.()
  cancelAnimationFrame(frameId)
  lenis?.off('scroll', syncScrollTrigger)
  lenis?.destroy()
})

const completeLoading = () => {
  isLoading.value = false
  requestAnimationFrame(() => ScrollTrigger.refresh())
}
</script>

<template>
  <div ref="appContent" class="app__content" :class="{ 'app__content--loading': isLoading }">
    <AppHeader />
    <RouterView />
  </div>
  <CustomCursor />
  <PageLoader
    v-if="isLoading"
    :content-element="appContent"
    @complete="completeLoading"
  />
</template>

<style scoped>
.app__content--loading {
  opacity: 0;
  transform: translateY(1.875rem);
}

:global(#experience .experience__works > figure.experience__work:nth-of-type(2)),
:global(#experience .experience__works > figure.experience__work:nth-of-type(2) *) {
  cursor: pointer;
  pointer-events: auto !important;
}
</style>
