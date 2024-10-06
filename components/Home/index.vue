<script setup lang="ts">
import profilePng from '@/assets/img/profile.png';
import globalStore from '@/components/global.store';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <div class="flex gap-2">
    <div class="flex-1 flex-col">
      <h1 class="text-2xl font-semibold">¡Hola!</h1>
      <p class="text-justify">
        Me llamo <b>Alonso</b>, soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes
        y escalables.
      </p>
      <button class="button-default"><span class="ns-button__content">Download CV</span></button>
    </div>
    <div class="card flex justify-center items-center rounded-b-full w-44">
      <img :class="isDarkMode ? 'bg-Content' : 'bg-light'" class="rounded-b-full" :src="profilePng" alt="" />
    </div>
  </div>
</template>

<style scoped>
.button-default {
  margin: 0 !important;
  background: linear-gradient(45deg, rgb(var(--ns-warn)), rgb(var(--ns-primary))) !important;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(var(--ns-warn), 1) !important;
  }
}
</style>
