<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import logoSici from '@/assets/img/logo_sici.png';
import CarouselSlider from '@components/global components/CarouselSlider.vue';
import CarouselItem_project from '@components/global components/CarouselItem_project.vue';

const activeIndex = ref(0);
const isMobile = ref(false);

const navigationEnabled = computed(() => {
  // return !(isMobile.value && isTextVisible.value);
  return !isMobile.value;
});

const images = [
  {
    id: 1,
    src: logoSici,
    alt: 'Imagen 1',
    title: 'Sistema para el control de orden (restaurant)',
    description: 'Descripción de la imagen 1',
  },
  {
    id: 2,
    src: logoSici,
    alt: 'Imagen 2',
    title: 'Sistema para el control de orden (restaurant)',
    description: 'Descripción de la imagen 2',
  },
  {
    id: 3,
    src: logoSici,
    alt: 'Imagen 3',
    title: 'Sistema para el control de orden (restaurant)',
    description: 'Descripción de la imagen 3',
  },
];

const onSlideChange = (swiper: number) => {
  activeIndex.value = swiper;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div>
    <h1 class="uppercase text-left font-bold md:text-xl my-2"># Proyecto en colaboración</h1>
    <carousel-slider :is-navigation-enabled="navigationEnabled" @slide-change="(e) => onSlideChange(e)">
      <swiper-slide v-for="(item, index) in images" :key="index">
        <carousel-item_project :item="item" :active="activeIndex === index" />
      </swiper-slide>
    </carousel-slider>
  </div>
</template>

<style scoped>
/* Swiper slide :::: */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.5s,
    opacity 0.5s;
}
</style>
