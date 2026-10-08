<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
//#imagen
import laPositiva from '@assets/img/la-positiva.png';
import restaurant from '@assets/img/restaurant.png';
import siciApp from '@assets/img/sici_2.png';
import bipbip from '@assets/img/bipbip_app.jpeg';
import landingPage from '@assets/img/Landing_Page.png';
import panelBipBip from '@assets/img/panel_bip.png';

import CarouselSlider from '@components/globalComponents/CarouselSlider.vue';
import CarouselItemProject from '@components/globalComponents/CarouselItem_project.vue';
import globalStore from '@components/global.store';

const activeIndex = ref(0);
const isNavigationEnabled = computed(() => !globalStore.getIsMobile());

const images = [
  {
    id: 1,
    src: restaurant,
    title: 'Sistema para el control de orden (restaurant)',
    description:
      'Permite a los meseros registrar y enviar órdenes en tiempo real a la cocina, agilizando el servicio y reduciendo errores. Incluye funcionalidades como gestión de mesas, seguimiento de estados de pedidos, garantizando una experiencia fluida para el personal.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
  },
  {
    id: 2,
    src: siciApp,
    title: 'Sistema de Control de Asistencia - app móvil',
    description:
      'Permite llevar un control preciso de entradas, salidas y horarios, facilitando la supervisión y generación de reportes en tiempo real. Incluye funciones como autenticación por credenciales, notificaciones automáticas, entre otros.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 3,
    src: bipbip,
    title: 'Sistema de Transporte ( BipBip – Perú )',
    description:
      'Permite el monitoreo en tiempo real de vehículos, planificación de rutas eficientes, control de horarios y gestión de conductores. Además, incluye funciones como seguimiento GPS, notificaciones de llegada, entre otros. Su implementación mejora la eficiencia operativa, reduce costos logísticos y garantiza un servicio más seguro y organizado.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },

  {
    id: 4,
    src: landingPage,
    title: 'Landing Page del Sistema de Transporte - BipBip',
    description:
      'Página web que presenta los servicios y ventajas del sistema de transporte, permitiendo a los usuarios conocer más sobre la empresa y solicitar información adicional. Incluye secciones como contacto, formulario de Pre inscripción, entre otros.',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 5,
    src: laPositiva,
    title: 'Sistema de Reserva - Web',
    description:
      'Plataforma web que permite la gestión y reserva de auditorios en las agencias de la empresa "La Positiva Seguro". Facilita a los usuarios la programación de eventos, evita conflictos de horarios y optimiza el uso de los espacios disponibles.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
  },
  {
    id: 6,
    src: panelBipBip,
    title: 'Módulo Administrativo - BipBip',
    description:
      'Panel de administración que permite gestionar el registro de conductores, sus pagos, las validaciones de documentos y su billetera digital.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
];

const onSlideChange = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div>
    <h3 class="uppercase text-left font-bold md:text-xl my-2"># Proyecto en colaboración</h3>
    <CarouselSlider :is-navigation-enabled="isNavigationEnabled" @slide-change="onSlideChange">
      <SwiperSlide v-for="(item, index) in images" :key="item.id" class="m-auto">
        <CarouselItemProject :item="item" :active="activeIndex === index" />
      </SwiperSlide>
    </CarouselSlider>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.5s,
    opacity 0.5s;
}
</style>
