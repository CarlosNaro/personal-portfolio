<script setup lang="ts">
import CollaborationProject from '@components/Portfolio/components/CollaborationProject.vue';
import LayoutBase from '@components/global components/layoutBase.vue';
import ComponentTitle from '@components/global components/ComponentTitle.vue';
</script>

<template>
  <layout-base>
    <component-title title="portafolio" />
    <div class="mt-4">
      <span
        >A lo largo de mi formación como desarrollador, he trabajado en diversos proyectos que me han permitido
        fortalecer mis habilidades y explorar nuevas tecnologías. He desarrollado aplicaciones full stack en proyectos
        académicos y colaborado en entornos reales como parte de un equipo de desarrollo, enfrentando desafíos que han
        impulsado mi crecimiento profesional.</span
      >
    </div>
    <collaboration-project />
  </layout-base>
</template>

<style scoped></style>
