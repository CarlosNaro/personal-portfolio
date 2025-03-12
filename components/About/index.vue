<script setup lang="ts">
import globalStore from '@components/global.store';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <LayoutBase>
    <div class="relative flex items-center justify-center">
      <div class=" absolute rounded-full border-8 border-l-lime-300 border-r-lime-300 w-14 h-14 opacity-75 "></div>
      <h1 class="z-30 uppercase text-2xl font-extrabold underline text-center">Sobre mi</h1>
    </div>
    <div class="flex flex-col mt-4 ">
      <span class="mb-2">
        Mi nombre es Alonso Naro Saldaña. Soy ingeniero de sistemas e informática, graduado de la Universidad Nacional
        de la Amazonía Peruana. Soy de nacionalidad peruana y natural de la ciudad de Iquitos, en la región de Loreto.
      </span>

      <span>
        Soy un desarrollador de software apasionado por crear soluciones innovadoras y eficientes. Con experiencia en
        tecnologías de Vue.js, Django, TypeScript y Tailwind CSS, he trabajado en proyectos que combinan diseño
        intuitivo y funcionalidades robustas.
      </span>

    </div>
  </LayoutBase>
</template>

<style scoped></style>
