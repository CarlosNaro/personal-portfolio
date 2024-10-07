<script setup lang="ts">
import profilePng from '@/assets/img/profile.png';
import globalStore from '@/components/global.store';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <div class="noSelect flex md:p-2 gap-2 md:gap-28 lg:gap-2 lg:mx-32 2xl:mx-48">
    <div class="flex-1 flex-col">
      <h1 class="text-2xl md:text-[2rem] font-semibold">¡Hola!</h1>
      <p class="text-justify md:text-[2rem]">
        Me llamo <b>Alonso</b>, soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes
        y escalables.
      </p>
      <button class="button-default"><span class="ns-button__content">Download CV</span></button>
    </div>
    <div class="flex justify-center items-center rounded-b-full">
      <img
        :class="isDarkMode ? 'bg-Content' : 'bg-light'"
        class="card rounded-b-full w-40 md:w-52"
        :src="profilePng"
        alt=""
      />
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

.noSelect {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.description {
  /*padding: 1rem;*/
  /* font-size: 2rem;*/
}
</style>
