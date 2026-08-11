<template>
  <footer class="footer">
    <div class="footer__inner section-shell">
      <p>© {{ new Date().getFullYear() }} Jessie Lin. All rights reserved.</p>
      <a href="#top">Back to top <span>↑</span></a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 1.25rem 0;
  background: var(--paper);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  padding-top: 1.3rem;
  border-top: 1px solid rgba(34, 34, 34, 0.18);
  color: var(--ink-faint);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
}

.footer p {
  margin: 0;
}

.footer a {
  transition: color 250ms ease;

  &:hover {
    color: var(--sand-deep);
  }

  span {
    margin-left: 0.25rem;
  }
}

@media (max-width: 520px) {
  .footer__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.55rem;
  }
}
</style>
