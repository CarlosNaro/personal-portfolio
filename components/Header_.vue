<script setup lang="ts">
import globalStore from '@components/global.store';

const activeSection = inject('activeSection', ref('home'));
const isMobile = computed(() => globalStore.getIsMobile());
const isActivatedMenu = ref(false);

const menuItems = [
  { id: 'portfolio', name: 'Proyectos' },
  { id: 'about', name: 'Sobre mí' },
  { id: 'skills', name: 'Habilidades' },
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
  <header class="sticky top-0 z-40 bg-dark">
    <div id="menu-container" class="content relative flex h-20 items-center justify-between">
      <button
        type="button"
        class="font-display text-2xl font-extrabold tracking-tight text-light"
        @click="scrollToSection('home')"
      >
        alonso naro
      </button>
      <button
        type="button"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-light text-dark md:hidden"
        aria-controls="main-menu"
        :aria-expanded="isActivatedMenu"
        aria-label="Abrir menú"
        @click="toggleMenu"
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <path d="M4 8h16M4 16h16" />
        </svg>
      </button>
      <nav
        id="main-menu"
        aria-label="Navegación principal"
        :class="isActivatedMenu ? 'flex' : 'hidden'"
        class="absolute inset-x-4 top-20 flex-col gap-1 rounded-3xl bg-Content p-3 md:static md:flex md:flex-row md:gap-1 md:bg-transparent md:p-0"
      >
        <button
          v-for="item in menuItems"
          :key="item.id"
          type="button"
          :aria-current="activeSection === item.id ? 'true' : undefined"
          :class="activeSection === item.id ? 'bg-light text-dark' : 'text-light hover:bg-Content'"
          class="min-h-11 rounded-full px-5 text-left font-medium transition-colors duration-200"
          @click="scrollToSection(item.id)"
        >
          {{ item.name }}
        </button>
      </nav>
    </div>
  </header>
</template>
