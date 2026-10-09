<script setup lang="ts">
import globalStore from '@components/global.store';

const activeSection = inject('activeSection', ref('home'));
const isMobile = computed(() => globalStore.getIsMobile());
const isActivatedMenu = ref(false);

const menuItems = [
  { id: 'home', name: 'Inicio' },
  { id: 'portfolio', name: 'Portafolio' },
  { id: 'skills', name: 'Habilidades' },
  { id: 'about', name: 'Sobre mí' },
  { id: 'contact', name: 'Contacto' },
];

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
  }
  isActivatedMenu.value = false;
}

function toggleMenu() {
  isActivatedMenu.value = !isActivatedMenu.value;
}

const closeMenu = (event: MouseEvent) => {
  const target = event.target as HTMLElement | null;
  if (!target?.closest('#menu-container')) {
    if (isActivatedMenu.value) isActivatedMenu.value = false;
  }
};

watch(isMobile, (isNowMobile) => {
  if (!isNowMobile) isActivatedMenu.value = false;
});

onMounted(() => {
  document.addEventListener('click', closeMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
});
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-dark">
    <div id="menu-container" class="content relative flex h-16 items-center justify-between">
      <img src="@assets/svg/logoN@r.svg" alt="Logo de Alonso Naro" width="32" height="32" class="h-8 w-8" />
      <button
        type="button"
        class="button-default-border md:hidden"
        aria-controls="main-menu"
        :aria-expanded="isActivatedMenu"
        @click="toggleMenu"
      >
        Menú
      </button>
      <nav
        id="main-menu"
        aria-label="Navegación principal"
        :class="isActivatedMenu ? 'flex' : 'hidden'"
        class="absolute inset-x-0 top-16 flex-col border-b border-line bg-dark px-4 py-2 md:static md:flex md:flex-row md:gap-8 md:border-0 md:p-0"
      >
        <button
          v-for="item in menuItems"
          :key="item.id"
          type="button"
          :aria-current="activeSection === item.id ? 'true' : undefined"
          :class="activeSection === item.id ? 'text-primarySoft' : 'text-muted hover:text-light'"
          class="min-h-11 text-left font-mono text-sm transition-colors duration-200"
          @click="scrollToSection(item.id)"
        >
          {{ item.name }}
        </button>
      </nav>
    </div>
  </header>
</template>
