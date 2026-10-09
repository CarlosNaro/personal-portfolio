<script setup lang="ts">
import type { Component } from 'vue';
import globalStore from '@components/global.store';
import Header_ from '@components/Header_.vue';
import Footer_ from '@components/Footer_.vue';
import Home from '@components/Home/index.vue';
import Portfolio from '@components/Portfolio/index.vue';
import Skills from '@components/Skills/index.vue';
import About from '@components/About/index.vue';
import Contact from '@components/Contact/index.vue';
import WhatsAppButton from '@components/globalComponents/WhatsAppButton.vue';

const MOBILE_BREAKPOINT = 768;

const activeComponent = ref('home');
let sectionObserver: IntersectionObserver | undefined;

const components: Record<string, Component> = {
  home: Home,
  portfolio: Portfolio,
  skills: Skills,
  about: About,
  contact: Contact,
};

provide('activeSection', activeComponent); // Para compartir el estado activo con el header

const checkMobile = () => {
  globalStore.setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
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
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    },
  );

  Object.keys(components).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      observer.observe(element);
    }
  });

  sectionObserver = observer;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  observeSections();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
  sectionObserver?.disconnect();
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header_ />
    <main class="flex-1">
      <section
        v-for="(component, key) in components"
        :key="key"
        :id="key"
        class="scroll-mt-16 border-t border-line first:border-t-0"
      >
        <component :is="component" />
      </section>
      <WhatsAppButton />
    </main>
    <Footer_ />
  </div>
</template>
