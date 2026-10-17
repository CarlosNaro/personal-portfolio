<script setup lang="ts">
import type { IProject } from '@components/Portfolio/Interface/IProject';
import FeaturedProject from '@components/Portfolio/components/FeaturedProject.vue';
import ProjectCard from '@components/Portfolio/components/ProjectCard.vue';
import laPositiva from '@assets/img/la-positiva.png';
import restaurant from '@assets/img/restaurant.png';
import siciApp from '@assets/img/sici_2.png';
import bipbip from '@assets/img/bipbip_app.jpeg';
import landingPage from '@assets/img/Landing_Page.png';
import panelBipBip from '@assets/img/panel_bip.png';

const featuredProject: IProject = {
  id: 1,
  title: 'BipBip',
  description:
    'Transporte en Perú, en tres partes: la app para viajar y seguir el vehículo en el mapa, el panel para gestionar conductores y pagos, y la web para preinscribirse.',
  technologies: ['Ionic', 'Vue 3', 'Nuxt 3', 'Firebase'],
  tone: 'cream',
  images: [
    { src: bipbip, alt: 'App de BipBip con el mapa de un viaje', width: 702, height: 1600 },
    { src: panelBipBip, alt: 'Panel de BipBip para registrar conductores', width: 337, height: 739 },
    { src: landingPage, alt: 'Web de BipBip con código QR de descarga', width: 341, height: 732 },
  ],
};

const projects: IProject[] = [
  {
    id: 2,
    title: 'Órdenes para restaurante',
    description: 'Los meseros mandan el pedido a cocina desde la mesa y ven cuándo está listo.',
    technologies: ['Vue 3', 'Django REST'],
    tone: 'aguaje',
    images: [{ src: restaurant, alt: 'Órdenes por mesa en el sistema de restaurante', width: 341, height: 732 }],
  },
  {
    id: 3,
    title: 'Control de asistencia',
    description: 'Entradas, salidas y horarios desde el celular, con reportes al momento.',
    technologies: ['Ionic', 'Supabase'],
    tone: 'leaf',
    images: [{ src: siciApp, alt: 'Inicio de la app de control de asistencia', width: 262, height: 565 }],
  },
  {
    id: 4,
    title: 'Reserva de auditorios',
    description: 'Las agencias de La Positiva Seguros reservan espacios sin choques de horario.',
    technologies: ['Vue 3', 'Django'],
    tone: 'cream',
    images: [{ src: laPositiva, alt: 'Bienvenida del sistema de reservas de auditorios', width: 340, height: 733 }],
  },
];
</script>

<template>
  <div class="mt-14 flex flex-col gap-8">
    <FeaturedProject :project="featuredProject" />
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>
