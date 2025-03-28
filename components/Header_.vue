<script setup lang="ts">
import globalStore from '@components/global.store';
import dark from '../assets/img/nublada.gif';
import sol from '../assets/svg/sol.svg';

const isDarkMode = computed({
  get: () => globalStore.getIsDarkMode(),
  set: (value: boolean) => globalStore.setIsDarkMode(value),
});

const activeSection = ref('home');
// const activeSection = inject<Ref<string>>('activeSection', ref('home'));
const isMobile = computed(() => globalStore.getIsMobile());
const isActivatedMenu = ref(false);
const isMounted = ref(false);

const menuItems = [
  { id: 'home', name: 'Inicio' },
  { id: 'about', name: 'Sobre mi' },
  { id: 'skills', name: 'Habilidades' },
  { id: 'portfolio', name: 'Portafolio' },
];

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  if (isMobile.value) toggleMenu();
}

function activeDark() {
  isDarkMode.value = true;
}

function toggleMenu() {
  isActivatedMenu.value = !isActivatedMenu.value;
}

const closeMenu = (event: any) => {
  if (!event.target.closest('#menu-container')) {
    if (isActivatedMenu.value) isActivatedMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeMenu);
  isMounted.value = true;
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
});
</script>

<template>
  <div
    :class="isDarkMode ? 'bg-Content' : 'bg-light'"
    class="content flex items-center py-3 justify-between top-0 z-50"
  >
    <div v-if="!isMobile" class="absolute">
      <img src="@/assets/svg/logoN@r.svg" alt="n@r" class="h-[60px]" />
    </div>
    <div class="flex-1 theme-toggle-container select-none">
      <div class="flex items-center justify-end space-x-4 relative">
        <div
          id="menu-container"
          v-if="isMounted"
          class="nav flex gap-3 font-bold"
          :class="[
            isDarkMode ? 'bg-Content' : 'bg-light',
            isMobile ? 'flex-col absolute p-3 left-0 top-0 rounded-lg' : '',
          ]"
        >
          <div v-if="isMobile" class="w-6 hover-effect" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>

          <div v-if="isMobile ? isActivatedMenu : true" class="flex flex-col md:flex-row gap-3 ml-8 animate-fade-in">
            <a
              v-for="item in menuItems"
              :key="item.id"
              @click="scrollToSection(item.id)"
              :class="{
                'hover:text-blue-500 hover-effect': activeSection !== item.id,
              }"
              >{{ item.name }}</a
            >
          </div>
        </div>
        
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
