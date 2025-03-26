<script setup lang="ts">
import LayoutBase from '@components/global components/layoutBase.vue';
import ComponentTitle from '@components/global components/ComponentTitle.vue';
import foto2 from '../../assets/img/foto_2.png';
</script>

<template>
  <LayoutBase>
    <component-title title="Sobre mi" />
    <div class="flex">
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
      <div class="relative flex items-center justify-center bgColor rounded-full w-full h-72 px-6 shadow-xl">
        <img class="absolute -top-24 fade-out rounded-br-[145px] mirror" :src="foto2" alt="foto2" />
      </div>
    </div>
  </LayoutBase>
</template>

<style scoped>
.bgColor {
  /*--ns-warn: 255, 186, 0;*/
  /*background: linear-gradient(45deg, rgb(255, 186, 0), rgb(0, 0, 0));*/
  background: rgb(var(--ns-warn));
}

.fade-out {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.mirror {
  transform: scaleX(-1);
}
</style>
