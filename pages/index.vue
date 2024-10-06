<script setup lang="ts">
import globalStore from '@components/global.store';
import Header_ from '@components/Header_.vue';
import Footer_ from '@components/Footer_.vue';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <div :class="{ dark: isDarkMode }" class="flex flex-col h-screen">
    <header_ />
    <main class="content flex-1">
      <home />
    </main>
    <footer_ />
  </div>
</template>

<style scoped></style>
