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
    description:
      'Permite a los meseros registrar y enviar órdenes en tiempo real a la cocina, agilizando el servicio y reduciendo errores. Incluye funcionalidades como gestión de mesas, seguimiento de estados de pedidos, garantizando una experiencia fluida para el personal.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
  },
  {
    id: 2,
    src: logoSici,
    alt: 'Imagen 2',
    title: 'Sistema de Control de Asistencia',
    description:
      'Permite llevar un control preciso de entradas, salidas y horarios, facilitando la supervisión y generación de reportes en tiempo real. Incluye funciones como autenticación por credenciales, notificaciones automáticas, entre otros.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 3,
    src: logoSici,
    alt: 'Imagen 3',
    title: 'Sistema de Transporte ( BipBip – Perú )',
    description:
      'Permite el monitoreo en tiempo real de vehículos, planificación de rutas eficientes, control de horarios y gestión de conductores. Además, incluye funciones como seguimiento GPS, notificaciones de llegada, entre otros. Su implementación mejora la eficiencia operativa, reduce costos logísticos y garantiza un servicio más seguro y organizado.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
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
