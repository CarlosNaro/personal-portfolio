<script setup lang="ts">
import type { IProject } from '../Interface/IProject';
import ProjectCard from './ProjectCard.vue';
import laPositiva from '@assets/img/la-positiva.png';
import restaurant from '@assets/img/restaurant.png';
import siciApp from '@assets/img/sici_2.png';
import bipbip from '@assets/img/bipbip_app.jpeg';
import landingPage from '@assets/img/Landing_Page.png';
import panelBipBip from '@assets/img/panel_bip.png';

const projects: IProject[] = [
  {
    id: 1,
    src: restaurant,
    title: 'Sistema para el control de orden (restaurant)',
    description:
      'Permite a los meseros registrar y enviar órdenes en tiempo real a la cocina, agilizando el servicio y reduciendo errores. Incluye funcionalidades como gestión de mesas, seguimiento de estados de pedidos, garantizando una experiencia fluida para el personal.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
    width: 341,
    height: 732,
  },
  {
    id: 2,
    src: siciApp,
    title: 'Sistema de Control de Asistencia - app móvil',
    description:
      'Permite llevar un control preciso de entradas, salidas y horarios, facilitando la supervisión y generación de reportes en tiempo real. Incluye funciones como autenticación por credenciales, notificaciones automáticas, entre otros.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    width: 262,
    height: 565,
  },
  {
    id: 3,
    src: bipbip,
    title: 'Sistema de Transporte (BipBip – Perú)',
    description:
      'Permite el monitoreo en tiempo real de vehículos, planificación de rutas eficientes, control de horarios y gestión de conductores. Además, incluye funciones como seguimiento GPS, notificaciones de llegada, entre otros. Su implementación mejora la eficiencia operativa, reduce costos logísticos y garantiza un servicio más seguro y organizado.',
    technologies: ['Ionic framework', 'capacitorjs', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    width: 702,
    height: 1600,
  },
  {
    id: 4,
    src: landingPage,
    title: 'Landing Page del Sistema de Transporte - BipBip',
    description:
      'Página web que presenta los servicios y ventajas del sistema de transporte, permitiendo a los usuarios conocer más sobre la empresa y solicitar información adicional. Incluye secciones como contacto, formulario de preinscripción, entre otros.',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
    width: 341,
    height: 732,
  },
  {
    id: 5,
    src: laPositiva,
    title: 'Sistema de Reserva - Web',
    description:
      'Plataforma web que permite la gestión y reserva de auditorios en las agencias de la empresa "La Positiva Seguro". Facilita a los usuarios la programación de eventos, evita conflictos de horarios y optimiza el uso de los espacios disponibles.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'DjangoRestFramework'],
    width: 340,
    height: 733,
  },
  {
    id: 6,
    src: panelBipBip,
    title: 'Módulo Administrativo - BipBip',
    description:
      'Panel de administración que permite gestionar el registro de conductores, sus pagos, las validaciones de documentos y su billetera digital.',
    technologies: ['Vue.js 3', 'Element-plus', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    width: 337,
    height: 739,
  },
];

const formatIndex = (position: number): string => String(position + 1).padStart(2, '0');
</script>

<template>
  <div>
    <h3 class="eyebrow mt-10 text-muted">Proyectos en colaboración</h3>
    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="formatIndex(index)"
      />
    </div>
  </div>
</template>
