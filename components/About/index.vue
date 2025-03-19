<script setup lang="ts">
import LayoutBase from '@components/global components/layoutBase.vue';
import ComponentTitle from '@components/global components/ComponentTitle.vue';
</script>

<template>
  <LayoutBase>
    <component-title title="Sobre mi" />
    <div class="flex flex-col mt-4">
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
