<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import foto2 from '../../assets/img/foto_2.png';
</script>

<template>
  <LayoutBase class="mt-10">
    <component-title title="Sobre mi" />
    <div class="grid grid-cols-1 md:grid-cols-2 content-between mt-5">
      <div class="flex m-auto flex-col">
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
      <div class="flex w-full mt-2 md:m-auto items-center justify-center md:justify-end">
        <div
          id="circulo"
          class="relative mt-5 flex items-center justify-center bgColor rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[270px] lg:h-[270px] xl:w-[300px] xl:h-[300px] shadow-xl"
        >
          <img class="absolute -top-20 md:-top-32 mask-gradient-both mirror" :src="foto2" alt="foto2" />
        </div>
      </div>
    </div>
  </LayoutBase>
</template>

<style scoped lang="css">
.bgColor {
  background: linear-gradient(45deg, rgb(var(--ns-success)), rgb(var(--ns-primary)));
  /*background: linear-gradient(45deg, rgb(255, 186, 0), rgb(0, 0, 0))*/
}

.mask-gradient {
  -webkit-mask-image: -webkit-linear-gradient(to bottom right, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.mask-gradient-both {
  -webkit-mask-image:
    -webkit-linear-gradient(to right, black 50%, transparent 100%),
    -webkit-linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-composite: destination-in;
  mask-image: linear-gradient(to right, black 50%, transparent 100%),
    linear-gradient(to bottom, black 80%, transparent 100%);
  mask-composite: intersect;
}
</style>
