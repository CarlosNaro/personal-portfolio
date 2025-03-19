<script setup lang="ts">
import globalStore from '@components/global.store';
import Header_ from '@components/Header_.vue';
import Footer_ from '@components/Footer_.vue';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
</script>

<template>
  <div :class="isDarkMode ? 'classDark' : ''" class="flex flex-col h-screen">
    <header_ />
    <main :class="isDarkMode ? 'classDark' : ' bg-gradient '" class="content flex-1">
      <home />
      <about />
      <skills />
      <portfolio />
    </main>
    <footer_ class="select-none" />
  </div>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(180deg, #e0f7fa 0%, #b2ebf2 100%);
}
</style>
