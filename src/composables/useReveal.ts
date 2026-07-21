import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  const scope = ref<HTMLElement | null>(null)
  let context: gsap.Context | undefined

  onMounted(async () => {
    await nextTick()
    if (!scope.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    context = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>('[data-reveal]')

      elements.forEach((element) => {
        const delay = Number(element.dataset.revealDelay ?? 0)
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              invalidateOnRefresh: true,
              once: true,
            },
          },
        )
      })
    }, scope.value)
  })

  onBeforeUnmount(() => context?.revert())

  return { scope }
}
