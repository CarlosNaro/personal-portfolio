<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
//#imagen
import laPositiva from '../../../assets/img/la-positiva.png';
import restaurant from '../../../assets/img/restaurant.png';
import sici_2 from '../../../assets/img/sici_2.png';
import bipbip from '../../../assets/img/bipbip_app.jpeg';
import landingPage from '../../../assets/img/Landing_Page.png';
import adminBipBip from '../../../assets/img/admin_bipbip.png';

import CarouselSlider from '@components/globalComponents/CarouselSlider.vue';
import CarouselItem_project from '@components/globalComponents/CarouselItem_project.vue';

const activeIndex = ref(0);
const isMobile = ref(false);

const navigationEnabled = computed(() => !isMobile.value);

const images = [
  {
    id: 1,
    src: restaurant,
    alt: 'Imagen 1',
    title: 'Sistema para el control de orden (restaurant)',
    description:
      'Permite a los meseros registrar y enviar órdenes en tiempo real a la cocina, agilizando el servicio y reduciendo errores. Incluye funcionalidades como gestión de mesas, seguimiento de estados de pedidos, garantizando una experiencia fluida para el personal.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
  },
  {
    id: 2,
    src: sici_2,
    alt: 'Imagen 2',
    title: 'Sistema de Control de Asistencia - app móvil',
    description:
      'Permite llevar un control preciso de entradas, salidas y horarios, facilitando la supervisión y generación de reportes en tiempo real. Incluye funciones como autenticación por credenciales, notificaciones automáticas, entre otros.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 3,
    src: bipbip,
    alt: 'Imagen 3',
    title: 'Sistema de Transporte ( BipBip – Perú )',
    description:
      'Permite el monitoreo en tiempo real de vehículos, planificación de rutas eficientes, control de horarios y gestión de conductores. Además, incluye funciones como seguimiento GPS, notificaciones de llegada, entre otros. Su implementación mejora la eficiencia operativa, reduce costos logísticos y garantiza un servicio más seguro y organizado.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
  //Landing Page del Sistema de Transporte
  {
    id: 4,
    src: landingPage,
    alt: 'Imagen 4',
    title: 'Landing Page del Sistema de Transporte - BipBip',
    description:
      'Página web que presenta los servicios y ventajas del sistema de transporte, permitiendo a los usuarios conocer más sobre la empresa y solicitar información adicional. Incluye secciones como contacto, formulario de Pre inscripción, entre otros.',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 5,
    src: laPositiva,
    alt: 'Imagen 5',
    title: 'Sistema de Reserva - Web',
    description:
      'Plataforma web que permite la gestión y reserva de auditorios en las agencias de la empresa "La Positiva Seguro". Facilita a los usuarios la programación de eventos, evita conflictos de horarios y optimiza el uso de los espacios disponibles.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
  },
  {
    id: 6,
    src: adminBipBip,
    alt: 'Imagen 6',
    title: 'Sistema de Administrador - BipBip',
    description:
      'Panel de administración que permite gestionar y monitorear la flota de vehículos, conductores y rutas. Incluye funciones como seguimiento en tiempo real, generación de reportes, notificaciones automáticas, entre otros.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Firebase'],
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
  <div v-if="images.length">
    <h1 class="uppercase text-left font-bold md:text-xl my-2"># Proyecto en colaboración</h1>
    <carousel-slider :is-navigation-enabled="navigationEnabled" @slide-change="(e) => onSlideChange(e)">
      <swiper-slide v-for="(item, index) in images" :key="index" class="m-auto">
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
