<script setup lang="ts">
import globalStore from '@components/global.store';
import dark from '../assets/img/nublada.gif';
import sol from '../assets/svg/sol.svg';
import { inject } from 'vue';
import type { Ref } from 'vue';

const isDarkMode = computed({
  get: () => globalStore.getIsDarkMode(),
  set: (value: boolean) => globalStore.setIsDarkMode(value),
});

// const activeSection = inject('activeSection', ref('home'));
const activeSection = inject<Ref<string>>('activeSection', ref('home'));

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function activeDark() {
  isDarkMode.value = true;
}
</script>

<template>
  <div
    :class="isDarkMode ? 'bg-Content' : 'bg-light'"
    class="relative header-navigation content flex items-center py-3 justify-between sticky top-0 z-50"
  >
    <div>logo</div>
    <div class="flex-1 theme-toggle-container select-none">
      <div class="flex items-center justify-end space-x-4">
        <div class="nav flex gap-3 font-bold">
          <a
            @click="scrollToSection('home')"
            :class="{
              'text-blue-500 underline': activeSection === 'home',
              'hover:text-blue-500': activeSection !== 'home',
            }"
            >Inicio</a
          >
          <a
            @click="scrollToSection('about')"
            :class="{
              'text-blue-500 underline ': activeSection === 'about',
              'hover:text-blue-500': activeSection !== 'about',
            }"
            >Sobre mi</a
          >
          <a
            @click="scrollToSection('skills')"
            :class="{
              'text-blue-500 underline ': activeSection === 'skills',
              'hover:text-blue-500': activeSection !== 'skills',
            }"
            >Habilidades</a
          >
          <a
            @click="scrollToSection('portfolio')"
            :class="{
              'text-blue-500 underline': activeSection === 'portfolio',
              'hover:text-blue-500': activeSection !== 'portfolio',
            }"
            >Portafolio</a
          >
        </div>

        <!-- Resto de tu código del toggle dark/light -->

        <div
          v-if="!isDarkMode"
          class="dark-mode-button hover-effect flex items-center gap-1 p-1 cursor-pointer"
          @click="activeDark"
        >
          <button
            type="button"
            class="inline-flex items-center rounded-full bg-white p-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <img :src="dark" alt="" class="rounded-md w-6" />
          </button>
          <span class="text-sm">Dark</span>
        </div>
        <div
          v-else
          class="light-mode-button hover-effect flex items-center gap-1 p-1 cursor-pointer"
          @click="isDarkMode = false"
        >
          <button
            type="button"
            class="inline-flex items-center rounded-full p-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50/25"
          >
            <img :src="sol" alt="" class="rounded-md w-6 text-white animate-pulse" />
          </button>
          <span class="text-sm">Light</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-effect {
  transition: all 0.3s ease-in-out;
  transform: scale(1);
}

.hover-effect:hover {
  transform: scale(1.1);
}

.nav {
  a {
    cursor: pointer;
  }
}
</style>
