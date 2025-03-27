<script setup lang="ts">
import globalStore from '@components/global.store';
import Header_ from '@components/Header_.vue';
import Footer_ from '@components/Footer_.vue';
import Home from '@components/Home/index.vue';
import About from '@components/About/index.vue';
import Skills from '@components/Skills/index.vue';
import Portfolio from '@components/Portfolio/index.vue';
import { onMounted, ref } from 'vue';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
const activeComponent = ref('home');

const components = {
  home: Home,
  about: About,
  skills: Skills,
  // portfolio: Portfolio,
} as any;

provide('activeSection', activeComponent); // Para compartir el estado activo con el header

const checkMobile = () => {
  globalStore.setIsMobile(window.innerWidth < 768);
};

onMounted(() => {
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

  // Observa cada sección
  Object.keys(components).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      observer.observe(element);
    }
  });

  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div :class="isDarkMode ? 'classDark' : ''" class="flex flex-col h-screen">
    <!--    <div>hola</div>-->
    <Header_ />
    <main :class="isDarkMode ? 'classDark' : 'bg-gradient'" class="content flex-1 overflow-y-auto scrollbarClass">
      <div v-for="(component, key) in components" :key="key" :id="key">
        <component :is="component" />
      </div>
    </main>
    <Footer_ class="select-none" />
  </div>
</template>
<style scoped>
.bg-gradient {
  background: linear-gradient(180deg, #e0f7fa 0%, #b2ebf2 100%);
}
</style>
