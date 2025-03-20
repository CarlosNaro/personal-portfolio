<script setup lang="ts">
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import eye from '@/assets/svg/eye-solid.svg';

import logo_sici from '@/assets/img/logo_sici.PNG';
import globalStore from '@components/global.store';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
const activeIndex = ref(0);

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};

const images = [
  {
    id: 1,
    src: logo_sici,
    alt: 'Imagen 1',
    title: 'Sistema para el control de orden (restaurant)',
    description: 'Descripción de la imagen 1',
  },
  {
    id: 2,
    src: logo_sici,
    alt: 'Imagen 2',
    title: 'Sistema para el control de orden (restaurant)',
    description: 'Descripción de la imagen 2',
  },
  {
    id: 3,
    src: logo_sici,
    alt: 'Imagen 3',
    title: 'Sistema para el control de orden (restaurant)',
    description: 'Descripción de la imagen 3',
  },
];
</script>

<template>
  <div class="text-center">
    <h1 class="uppercase text-left font-bold text-xl mb-6">Proyecto en colaboración</h1>

    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :loop="true"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }"
      :navigation="true"
      :modules="[EffectCoverflow, Navigation]"
      class="swiper-container"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in images" :key="item.id" class="swiper-slide">
        <div class="relative flex flex-col lg:flex-row items-center justify-center space-x-6">
          <!-- Texto a la izquierda -->
          <div :class="{ 'animate-fade-in': activeIndex === index }" class="lg:w-1/3 text-left">
            <p class="text-2xl font-bold gradient-text">{{ item.title }}</p>
            <p>{{ item.description }}</p>
          </div>

          <!-- Contenedor de la imagen con gradiente -->
          <div class="relative flex items-center justify-center">
            <!-- Gradiente detrás de la imagen -->
            <div
              :class="[
                isDarkMode ? 'gradient-bg-dark' : 'gradient-bg-light',
                activeIndex === index ? 'opacity-90' : 'opacity-0',
              ]"
              class="absolute w-80 h-80 rounded-full blur-3xl opacity-90 -z-10"
            ></div>

            <!-- Imagen sobre el gradiente -->
            <img
              :src="item.src"
              :alt="item.alt"
              :class="{ 'animate-fade-in-img': activeIndex === index }"
              class="relative rounded-md w-52 lg:w-64 z-20 select-none"
            />
            <div class="absolute z-20 top-0 right-0 rounded-full">
              <button class="button-light-icon">
                <img :src="eye" alt="Ver" class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
/* Swiper container */
.swiper-container {
  width: 100%;
  padding: 50px 0;
}

/* Swiper slide */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.5s,
    opacity 0.5s;
}

/* Gradientes */
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

/* animate text  */
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

/* animate img  */
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
</style>
