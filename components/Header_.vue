<script setup lang="ts">
import globalStore from '@components/global.store';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
const activeSection = inject('activeSection', ref('home'));
const isMobile = computed(() => globalStore.getIsMobile());
const isActivatedMenu = ref(false);
const isMounted = ref(false);

const menuItems = [
  { id: 'home', name: 'Inicio' },
  { id: 'about', name: 'Sobre mi' },
  { id: 'skills', name: 'Habilidades' },
  { id: 'portfolio', name: 'Portafolio' },
  { id: 'contact', name: 'Contacto' },
];

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
  if (isMobile.value) toggleMenu();
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

onMounted(() => {
  document.addEventListener('click', closeMenu);
  isMounted.value = true;
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
});
</script>

<template>
  <header :class="isDarkMode ? 'bg-dark' : 'bg-light'" class="content flex items-center justify-between top-0 z-50">
    <div v-if="!isMobile && isMounted" class="my-1">
      <img src="@/assets/svg/logoN@r.svg" alt="Logo de Alonso Naro" class="h-[60px] animate-logoPersonal" />
    </div>
    <div class="flex-1 theme-toggle-container select-none">
      <div class="flex items-center md:justify-end space-x-4 relative">
        <nav
          id="menu-container"
          v-if="isMounted"
          aria-label="Navegación principal"
          class="nav flex gap-3 font-bold"
          :class="[isDarkMode ? 'bg-Content' : 'bg-light', isMobile ? 'flex-col p-3 left-0 top-0 rounded-lg' : '']"
        >
          <button
            v-if="isMobile"
            type="button"
            class="w-6 hover-effect"
            aria-label="Abrir menú"
            :aria-expanded="isActivatedMenu"
            @click="toggleMenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </button>

          <div
            v-if="isMobile ? isActivatedMenu : true"
            class="flex gap-3"
            :class="
              isMobile && isActivatedMenu
                ? ' animateMovilMenu flex-col absolute bg-Content w-full p-4  top-12 rounded-bl-full items-end '
                : '  flex-row  animate-fade-in'
            "
          >
            <img
              v-if="isMobile"
              src="@/assets/svg/logoN@r.svg"
              alt="Logo de Alonso Naro"
              class="absolute left-16 top-12 h-[80px] animate-logoPersonal"
            />
            <button
              v-for="item in menuItems"
              :key="item.id"
              type="button"
              :aria-current="activeSection === item.id ? 'true' : undefined"
              :class="activeSection === item.id ? 'text-primary' : 'hover:text-primary hover-effect'"
              @click="scrollToSection(item.id)"
            >
              {{ item.name }}
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hover-effect {
  transition: transform 0.3s ease-in-out; /* antes: all */
  transform: scale(1);
}

.hover-effect:hover {
  transform: scale(1.1);
}

.nav button {
  background: transparent;
  border: 0;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animateMovilMenu {
  animation: fadeIn 0.5s ease-in-out;
}
</style>
