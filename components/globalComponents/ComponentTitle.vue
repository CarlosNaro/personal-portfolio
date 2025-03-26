<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="relative flex items-center justify-center mt-4">
    <div class="absolute rounded-full border-8 border-l-lime-300 border-r-lime-300 w-14 h-14 opacity-75"></div>
    <h1 class="z-30 uppercase text-2xl font-extrabold underline text-center">{{ props.title }}</h1>
  </div>
</template>

<style scoped></style>
