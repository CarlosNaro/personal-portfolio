<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-Content">
    <p class="content flex flex-col gap-2 py-8 text-muted sm:flex-row sm:justify-between">
      <span>&copy; {{ year }} Alonso Naro Saldaña</span>
      <a
        href="https://github.com/CarlosNaro"
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold text-light underline-offset-4 hover:text-primarySoft hover:underline"
        >GitHub</a
      >
    </p>
  </footer>
</template>
