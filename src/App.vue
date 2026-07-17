<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Lenis from 'lenis'
import AppHeader from '@/components/AppHeader.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import PageLoader from '@/components/PageLoader.vue'

let frameId = 0
let lenis: Lenis | undefined
const appContent = ref<HTMLElement | null>(null)
const isLoading = ref(true)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.82,
    touchMultiplier: 1.1,
    easing: (value: number) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
  })

  const animate = (time: number) => {
    lenis?.raf(time)
    frameId = requestAnimationFrame(animate)
  }

  frameId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
  lenis?.destroy()
})
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
    @complete="isLoading = false"
  />
</template>

<style scoped>
.app__content--loading {
  opacity: 0;
  transform: translateY(1.875rem);
}
</style>
