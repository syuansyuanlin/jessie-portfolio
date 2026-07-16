<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import Lenis from 'lenis'
import AppHeader from '@/components/AppHeader.vue'
import CustomCursor from '@/components/CustomCursor.vue'

let frameId = 0
let lenis: Lenis | undefined

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
  <AppHeader />
  <RouterView />
  <CustomCursor />
</template>
