<script setup lang="ts">
import CollaborationProject from '@components/Portfolio/components/CollaborationProject.vue';
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
</script>

<template>
  <LayoutBase>
    <ComponentTitle title="Portafolio" />
    <p class="mt-10 max-w-3xl text-base leading-relaxed text-muted" data-reveal>
      A lo largo de mi formación como desarrollador, he trabajado en diversos proyectos que me han permitido fortalecer
      mis habilidades y explorar nuevas tecnologías. He desarrollado aplicaciones full stack en proyectos académicos y
      colaborado en entornos reales como parte de un equipo de desarrollo, enfrentando desafíos que han impulsado mi
      crecimiento profesional.
    </p>
    <CollaborationProject />
  </LayoutBase>
</template>
