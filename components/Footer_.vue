<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-line">
    <p class="content py-8 text-center text-sm text-muted md:text-left">
      &copy; {{ year }},
      <a
        href="https://github.com/CarlosNaro"
        target="_blank"
        rel="noopener noreferrer"
        class="text-light underline-offset-4 transition-colors duration-200 hover:text-primarySoft hover:underline"
        >Developer Naro</a
      >
    </p>
  </footer>
</template>
