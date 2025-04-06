<script setup lang="ts">
import globalStore from '@components/global.store';
import Header_ from '@components/Header_.vue';
import Footer_ from '@components/Footer_.vue';
import Home from '@components/Home/index.vue';
import About from '@components/About/index.vue';
import Skills from '@components/Skills/index.vue';
import Portfolio from '@components/Portfolio/index.vue';
import Contact from '@components/Contact/index.vue';
import { onMounted, ref } from 'vue';
import WhatsAppButton from '@components/globalComponents/WhatsAppButton.vue';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
const activeComponent = ref('home');

const components = {
  home: Home,
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  contact: Contact,
} as any;

provide('activeSection', activeComponent); // Para compartir el estado activo con el header

const checkMobile = () => {
  globalStore.setIsMobile(window.innerWidth < 768);
};

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeComponent.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.5, // Ajusta este valor según necesites
    },
  );

  Object.keys(components).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      observer.observe(element);
    }
  });
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  // Observa cada sección
  observeSections();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div :class="isDarkMode ? 'classDark' : ''" class="flex flex-col h-screen">
    <Header_ />
    <main :class="isDarkMode ? 'classDark' : 'bg-gradient'" class="content flex-1 overflow-y-auto scrollbarClass">
      <div v-for="(component, key) in components" :key="key" :id="String(key)">
        <component :is="component" />
      </div>
      <whats-app-button />
    </main>
    <Footer_ class="select-none" />
  </div>
</template>
<style scoped>
.bg-gradient {
  background: linear-gradient(180deg, #e0f7fa 0%, #b2ebf2 100%);
}
</style>
