<script setup lang="ts">
import eye from '@/assets/svg/eye-solid.svg';
import closeIcon from '@/assets/svg/close-solid.svg';

import globalStore from '@components/global.store';

defineProps<{
  item: {
    src: string;
    alt: string;
    title: string;
    description: string;
    technologies?: string[];
  };
  active?: boolean;
}>();

const isDarkMode = computed(() => globalStore.getIsDarkMode());

const isTextVisible = computed(() => globalStore.getIsTextVisible());

const isMobile = ref(false);

const isMounted = ref(false);

const toggleTextVisibility = () => {
  globalStore.setIsTextVisible(!isTextVisible.value);
};
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  isMounted.value = true;
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div v-if="isMounted" class="relative select-none flex items-center gap-3 lg:gap-0 2xl:gap-3 justify-center">
    <!-- Texto a la izquierda -->
    <div
      v-if="(isMobile ? isTextVisible : true) && active"
      :class="{ 'overlay-text': isMobile }"
      class="w-2/4 text-left"
    >
      <div :class="[isMobile ? 'text-container ' : 'max-h-[430px] overflow-auto scrollbarClass ']">
        <div :class="{ 'animate-fade-in ': active }">
          <div class="flex">
            <p class="flex-1 text-lg xl:text-2xl font-bold gradient-text">{{ item.title }}</p>
            <!--  button close-->
            <div v-if="isMobile" class="right-0 rounded-full">
              <button class="button-light-icon absolute -top-2 -right-2" @click="toggleTextVisibility">
                <img :src="closeIcon" alt="Ver" class="w-6 h-6" />
              </button>
            </div>
          </div>

          <p class="p-description">{{ item.description }}</p>

          <div v-if="item.technologies" class="flex gap-2">
            <p class="font-bold">Tecnologías:</p>
            <ul class="flex flex-wrap">
              <li
                v-for="(tech, index) in item.technologies"
                :key="index"
                :class="isDarkMode ? 'bg-Content shadow shadow-amber-50' : 'bg-[#f0f0f0]'"
                class="text-sm font-semibold custom-li-style"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenedor de la imagen con gradiente -->
    <div class="relative flex items-center justify-center">
      <!-- Gradiente detrás de la imagen -->
      <div
        :class="[isDarkMode ? 'gradient-bg-dark' : 'gradient-bg-light', active ? 'opacity-90' : 'opacity-0']"
        class="absolute w-80 h-80 rounded-full blur-3xl opacity-90 -z-10"
      ></div>

      <!-- Imagen sobre el gradiente -->
      <img
        :src="item.src"
        :alt="item.alt"
        :class="{ 'animate-fade-in-img': active }"
        class="relative rounded-md w-52 lg:w-56 2xl:w-64 z-20 select-none"
      />
      <!--  button view-->
      <div v-if="isMobile" class="absolute z-20 top-0 right-0 rounded-full">
        <button class="button-light-icon" @click="toggleTextVisibility">
          <img :src="eye" alt="Ver" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-li-style {
  /*background-color: #f0f0f0;*/ /* Fondo gris claro */
  padding: 5px 10px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  margin: 5px; /* Espaciado externo */
}

.gradient-bg-light {
  background: radial-gradient(circle, rgba(30, 30, 30, 0.6), rgba(0, 0, 50, 0.5), rgba(50, 0, 80, 0.4));
  /* background: radial-gradient(circle, rgba(44, 43, 43, 0.6), rgba(181, 181, 205, 0.5), rgba(150, 150, 255, 0.4));*/
}

.gradient-bg-dark {
  background: radial-gradient(circle, rgba(50, 50, 50, 0.6), rgba(30, 30, 80, 0.5), rgba(80, 30, 120, 0.4));
}

.gradient-text {
  background: linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn-Img {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-img {
  animation: fadeIn-Img 0.8s ease-in-out;
}

.overlay-text {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(173, 216, 230, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  z-index: 30;
}

.text-container {
  background: white;
  border-radius: 8px;
  position: relative;
  padding: 0.5rem;
  overflow: auto;
  height: max-content;
  max-height: 430px; /* Ajusta este valor según tus necesidades */

  .p-description {
    color: black; /* Negro por defecto */
  }
}
</style>
