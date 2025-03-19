<script setup lang="ts">
import foto from '@/assets/img/foto.png';
import logo_sici from 'assets/img/logo_sici.PNG';
import globalStore from '@components/global.store';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
const images = [
  {
    id: 1,
    src: logo_sici,
    alt: 'foto',
    descripcion: 'Descripción de la imagen 1',
  },
  {
    id: 2,
    src: foto,
    alt: 'foto',
    descripcion: 'Descripción de la imagen 2',
  },
  {
    id: 3,
    src: logo_sici,
    alt: 'foto',
    descripcion: 'Descripción de la imagen 3',
  },
];
</script>

<template>
  <div>
    <h1 class="uppercase font-bold">proyecto en colaboración</h1>
    <div class="slider relative flex items-center justify-center gap-4">
      <div v-for="(item, index) in images" class="flex justify-center space-x-12 w-full">
        <div>
          <p>{{ item.descripcion }}</p>
        </div>

        <div class="relative flex items-center justify-center">
          <div
            :class="isDarkMode ? 'gradient-bg-dark' : 'gradient-bg-light'"
            class="absolute w-96 h-96 rounded-full blur-3xl opacity-90"
          ></div>

          <div class="relative">
            <img :src="item.src" :alt="item.alt" class="rounded-md w-72" />
          </div>
        </div>
      </div>

      <!--      Botones de navegación-->
      <div class="absolute rounded-md left-0 bottom-0">
        <button type="button" class="button-light-icon">
          <span class="absolute left-1 -top-3.5 font-light" style="font-size: 2.5rem">&lt;</span>
        </button>
      </div>
      <div class="absolute rounded-md right-0 bottom-0">
        <button type="button" class="button-light-icon">
          <span class="absolute right-1 -top-3.5 font-light" style="font-size: 2.5rem">&gt;</span>
        </button>
      </div>
      <!--      Botones de navegación fin-->
    </div>
  </div>
</template>

<style scoped>
.gradient-bg-light {
  background: radial-gradient(circle, rgba(30, 30, 30, 0.8), rgba(0, 0, 50, 0.7), rgba(50, 0, 80, 0.6));
}

.gradient-bg-dark {
  background: radial-gradient(circle, rgba(50, 50, 50, 0.8), rgba(30, 30, 80, 0.7), rgba(80, 30, 120, 0.6));
}
</style>
