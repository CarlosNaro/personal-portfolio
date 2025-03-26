<script setup lang="ts">
import profilePng from '@/assets/img/profile.png';
import globalStore from '@/components/global.store';
import LayoutBase from '@components/global components/layoutBase.vue';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <LayoutBase class="select-none flex">
    <div class="flex-1 flex-col">
      <h1 class="text-2xl md:text-[2rem] font-semibold">¡Hola!</h1>
      <p class="text-justify md:text-[2rem]">
        Me llamo <b>Alonso</b>, soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes
        y escalables.
      </p>
      <button class="button-default"><span class="ns-button__content">Download CV</span></button>
    </div>
    <div class="flex justify-center items-center rounded-b-full fade-out-top">
      <img
        :class="isDarkMode ? 'bg-Content' : 'bg-light'"
        class="card rounded-b-full w-40 md:w-52"
        src="@/assets/img/new_foto.png"
        alt="profilePng"
      />
    </div>
  </LayoutBase>
</template>

<style scoped>
.button-default {
  margin: 0 !important;
  background: linear-gradient(45deg, rgb(var(--ns-warn)), rgb(var(--ns-primary))) !important;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(var(--ns-warn), 1) !important;
  }
}

.fade-out-top {
  mask-image: linear-gradient(to top, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, black 50%, transparent 100%);
}
</style>
