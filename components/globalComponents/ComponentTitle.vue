<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="relative flex items-center justify-center mt-4">
    <div class="absolute rounded-full border-8 border-l-lime-300 border-r-lime-300 w-14 h-14 opacity-75"></div>
    <h2 class="z-30 uppercase text-2xl md:text-3xl font-extrabold tracking-wide text-center">{{ title }}</h2>
  </div>
</template>
