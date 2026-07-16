<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { navigation } from "@/data/portfolio";
import { useUiStore } from "@/stores/ui";

const ui = useUiStore();

function goTo(target: string) {
  ui.closeMenu();
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <header class="site-header" :class="{ 'menu-open': ui.isMenuOpen }">
    <a
      class="brand"
      href="#top"
      aria-label="回到首頁"
      @click.prevent="goTo('#top')"
    >
      <span class="brand__mark">JL</span>
      <span class="brand__name">Jessie Lin</span>
    </a>

    <nav class="desktop-nav" aria-label="主要導覽">
      <button
        v-for="item in navigation"
        :key="item.target"
        type="button"
        @click="goTo(item.target)"
      >
        {{ item.label }}
      </button>
    </nav>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="ui.isMenuOpen"
      aria-controls="mobile-navigation"
      @click="ui.toggleMenu"
    >
      <span>{{ ui.isMenuOpen ? "Close" : "Menu" }}</span>
      <Icon
        :icon="
          ui.isMenuOpen
            ? 'solar:close-circle-linear'
            : 'solar:hamburger-menu-linear'
        "
      />
    </button>

    <Transition name="menu-fade">
      <nav
        v-if="ui.isMenuOpen"
        id="mobile-navigation"
        class="mobile-nav"
        aria-label="行動版導覽"
      >
        <p class="eyebrow">Navigation</p>
        <button
          v-for="(item, index) in navigation"
          :key="item.target"
          type="button"
          @click="goTo(item.target)"
        >
          <span>0{{ index + 1 }}</span
          >{{ item.label }}
        </button>
        <a href="mailto:dasty854291@gmail.com">dasty854291@gmail.com</a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: fixed;
  z-index: 20;
  top: 0.65rem;
  left: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 1.3rem);
  height: 5.4rem;
  padding: 0 var(--gutter);
  mix-blend-mode: multiply;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
}

.brand__mark {
  display: grid;
  width: 1.85rem;
  height: 1.85rem;
  place-items: center;
  border: 1px solid var(--ink);
  border-radius: 50%;
  font-family: var(--font-serif);
  font-size: 0.78rem;
  letter-spacing: -0.06em;
}

.desktop-nav {
  display: flex;
  gap: clamp(1.25rem, 2.5vw, 2.8rem);

  button,
  .menu-toggle {
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }

  button {
    position: relative;
    font-size: 0.72rem;
    letter-spacing: 0.08em;

    &::after {
      position: absolute;
      right: 0;
      bottom: -0.35rem;
      left: 0;
      height: 1px;
      background: currentcolor;
      content: "";
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 350ms ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}

.menu-toggle {
  display: none;
  align-items: center;
  gap: 0.45rem;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 0.72rem;
  letter-spacing: 0.08em;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.mobile-nav {
  position: fixed;
  z-index: -1;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 8rem var(--gutter) 3rem;
  background: var(--canvas);

  .eyebrow {
    margin-bottom: clamp(2.5rem, 8vh, 5rem);
  }

  button {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    width: fit-content;
    padding: 0.2rem 0;
    border: 0;
    background: none;
    cursor: pointer;
    font-family: var(--font-serif);
    font-size: clamp(2.7rem, 12vw, 4.4rem);
    letter-spacing: -0.05em;
    line-height: 1.12;

    span {
      color: var(--sand-deep);
      font-family: var(--font-sans);
      font-size: 0.65rem;
      letter-spacing: 0.08em;
    }
  }

  a {
    margin-top: auto;
    padding-top: 2rem;
    border-top: 1px solid var(--line);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
  }
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 350ms ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

@media (max-width: 720px) {
  .site-header {
    height: 4.7rem;
    top: 0.4rem;
    left: 0.4rem;
    width: calc(100% - 0.8rem);
    mix-blend-mode: normal;
  }

  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .brand__name {
    display: none;
  }
}
</style>
