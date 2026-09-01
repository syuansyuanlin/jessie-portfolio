<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { Icon } from "@iconify/vue";

const contactSection = ref<HTMLElement | null>(null)
const cursorBubble = ref<HTMLElement | null>(null)
let cleanupCursorBubble: (() => void) | undefined

onMounted(() => {
  const section = contactSection.value
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
    document.documentElement.classList.toggle(
      'contact-cursor-bubble-active',
      shouldShow,
    )
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
    const bubbleRadius = bubble.offsetWidth / 2
    const verticalSafeInset = bubbleRadius + 12
    const isInsideContact =
      lastPointer.x >= bounds.left &&
      lastPointer.x <= bounds.right &&
      lastPointer.y >= bounds.top + verticalSafeInset &&
      lastPointer.y <= bounds.bottom - verticalSafeInset

    if (!isInsideContact) {
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

  cleanupCursorBubble = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', updateBubble)
    window.removeEventListener('blur', handleWindowBlur)
    document.documentElement.classList.remove('contact-cursor-bubble-active')
  }
})

onBeforeUnmount(() => {
  cleanupCursorBubble?.()
  document.documentElement.classList.remove('contact-cursor-bubble-active')
  if (cursorBubble.value) gsap.killTweensOf(cursorBubble.value)
})

const contacts = [
  {
    label: "Email",
    value: "dasty854291@gmail.com",
    href: "mailto:dasty854291@gmail.com",
    icon: "solar:letter-linear",
  },
  {
    label: "104 Resume",
    value: "104 個人履歷",
    href: "",
    icon: "solar:document-text-linear",
  },
];
</script>

<template>
  <section
    ref="contactSection"
    id="contact"
    class="contact"
    aria-labelledby="contact-title"
  >
    <span ref="cursorBubble" class="contact__cursor-bubble" aria-hidden="true" />
    <div class="contact__shell section-shell">
      <p class="eyebrow" data-reveal>06 / Contact</p>
      <h2 id="contact-title" class="contact__title" data-reveal>
        Let’s make<br />something <em>meaningful.</em>
      </h2>
      <p class="contact__intro" data-reveal>
        歡迎隨時透過以下電子郵件地址與我聯絡
      </p>

      <div class="contact__links" data-reveal>
        <component
          v-for="contact in contacts"
          :key="contact.label"
          :is="contact.href ? 'a' : 'div'"
          class="contact__link"
          :class="{ 'contact__link--disabled': !contact.href }"
          :href="contact.href || undefined"
          :target="contact.href ? '_blank' : undefined"
          :rel="contact.href ? 'noreferrer' : undefined"
        >
          <span class="contact__icon"><Icon :icon="contact.icon" /></span>
          <span>
            <small>{{ contact.label }}</small>
            <strong>{{ contact.value }}</strong>
          </span>
          <Icon
            v-if="contact.href"
            class="contact__arrow"
            icon="solar:arrow-up-right-linear"
          />
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  position: relative;
  isolation: isolate;
  padding: clamp(8rem, 15vw, 14rem) 0 clamp(6rem, 10vw, 9rem);
  overflow: hidden;
  background: var(--paper);
}

.contact__shell {
  position: relative;
  z-index: 1;
}

.contact__cursor-bubble {
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

.contact__cursor-bubble::before {
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

.contact__title {
  max-width: 60rem;
  margin: clamp(2rem, 5vw, 4.5rem) 0 0;
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4.267vw, 6rem);
  font-weight: 400;
  letter-spacing: var(--heading-letter-spacing);
  line-height: 0.88;

  em {
    color: var(--sand-deep);
    font-weight: inherit;
  }
}

.contact__intro {
  margin: clamp(2rem, 5vw, 4rem) 0 0 clamp(0rem, 24vw, 20rem);
  color: var(--ink-soft);
  font-size: 0.84rem;
  letter-spacing: 0.06em;
  line-height: 2;
}

.contact__links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: clamp(4rem, 9vw, 8rem);

  .contact__link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.2rem 0;
    border-top: 1px solid rgba(34, 34, 34, 0.28);
    transition: color 300ms ease;

    &:not(.contact__link--disabled):hover {
      color: var(--sand-deep);
    }
  }

  .contact__link--disabled {
    cursor: default;
  }

  span:not(.contact__icon) {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
  }

  small {
    color: var(--ink-faint);
    font-size: 0.59rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.035em;
  }
}

.contact__icon {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border: 1px solid currentcolor;
  border-radius: 50%;

  svg {
    width: 1rem;
    height: 1rem;
  }
}

.contact__arrow {
  width: 1rem;
  height: 1rem;
  margin-left: auto;
}

@media (max-width: 720px) {
  .contact__intro {
    margin-left: 0;
  }

  .contact__links {
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 4rem;
  }
}
</style>
