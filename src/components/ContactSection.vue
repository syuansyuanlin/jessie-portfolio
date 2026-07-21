<script setup lang="ts">
import { Icon } from "@iconify/vue";

const contacts = [
  {
    label: "Email",
    value: "dasty854291@gmail.com",
    href: "mailto:dasty854291@gmail.com",
    icon: "solar:letter-linear",
  },
  {
    label: "GitHub",
    value: "@jessielin",
    href: "https://github.com",
    icon: "mdi:github",
  },
  {
    label: "LinkedIn",
    value: "Jessie Lin",
    href: "https://linkedin.com",
    icon: "mdi:linkedin",
  },
];
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact__shell section-shell">
      <p class="eyebrow" data-reveal>05 / Contact</p>
      <h2 id="contact-title" class="contact__title" data-reveal>
        Let’s make<br />something <em>meaningful.</em>
      </h2>
      <p class="contact__intro" data-reveal>
        歡迎隨時透過以下電子郵件地址與我聯絡
      </p>

      <div class="contact__links" data-reveal>
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          target="_blank"
          rel="noreferrer"
        >
          <span class="contact__icon"><Icon :icon="contact.icon" /></span>
          <span>
            <small>{{ contact.label }}</small>
            <strong>{{ contact.value }}</strong>
          </span>
          <Icon class="contact__arrow" icon="solar:arrow-up-right-linear" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding: clamp(8rem, 15vw, 14rem) 0 clamp(6rem, 10vw, 9rem);
  background: var(--paper);
}

.contact__shell {
  position: relative;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: clamp(4rem, 9vw, 8rem);

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.2rem 0;
    border-top: 1px solid rgba(34, 34, 34, 0.28);
    transition: color 300ms ease;

    &:hover {
      color: var(--sand-deep);
    }
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
