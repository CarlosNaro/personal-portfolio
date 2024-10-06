<script setup lang="ts">
import globalStore from '@components/global.store';

const year = new Date().getFullYear();
const isDark = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <footer :class="isDark ? 'bg-Content' : 'bg-light'" class="footer content">
    <div class="footer-content">
      <b>&copy;{{ year }}, <a href="https://github.com/CarlosNaro" target="_blank">Developer Naro</a></b>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer-content {
  @apply text-center text-xs md:text-base md:text-left;
}

a:hover {
  background: linear-gradient(90deg, #ff00cc, rgb(var(--ns-primary)));
  background-clip: text;
  color: transparent;
}
</style>
