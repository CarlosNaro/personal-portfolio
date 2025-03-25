<script setup lang="ts">
import Home from './Home/index.vue';
import About from './About/index.vue';
import Skills from './Skills/index.vue';

const activeComponent = ref('home');

const setActiveComponent = (component: string) => {
  activeComponent.value = component;
};
</script>

<template>
  <component :is="activeComponent" />
</template>

<style scoped></style>
