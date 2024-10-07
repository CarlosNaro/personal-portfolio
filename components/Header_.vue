<script setup lang="ts">
import { Icon } from '@iconify/vue';

import globalStore from '@components/global.store';

const isDarkMode = computed({
  get: () => globalStore.getIsDarkMode(),
  set: (value: boolean) => globalStore.setIsDarkMode(value),
});

const active = ref();
</script>

<template>
  <div
    :class="isDarkMode ? 'bg-Content' : 'bg-light'"
    class="header-navigation content flex items-center py-3 justify-between"
  >
    <div class="navigation-buttons flex gap-4">
      <button
        type="button"
        :class="[active === 0 ? 'button-default active' : 'button-default']"
        class="button-default"
        @click="active = 0"
      >
        <span class="ns-button__content">Active</span>
      </button>
      <button
        type="button"
        :class="active === 1 ? 'button-default active' : 'button-default'"
        class="button-default"
        @click="active = 1"
      >
        <span class="ns-button__content">Default</span>
      </button>
    </div>
    <div class="theme-toggle-container noSelect">
      <div
        v-if="!isDarkMode"
        class="dark-mode-button hover-effect flex items-center gap-1 p-1 cursor-pointer text-indigo-500"
        @click="isDarkMode = true"
      >
        <button
          type="button"
          class="inline-flex items-center rounded-full bg-white p-1 text-sm font-semibold text-indigo-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <!--          <Icon icon="solar:moon-fog-linear" height="25" :ssr="true" />-->
          <Icon icon="solar:moon-fog-linear" height="25" />
        </button>
        <span class="text-sm">Dark</span>
      </div>
      <div
        v-else
        class="light-mode-button hover-effect flex items-center gap-1 p-1 cursor-pointer"
        @click="isDarkMode = false"
      >
        <button
          type="button"
          class="inline-flex items-center rounded-full p-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50/25"
        >
          <Icon icon="solar:sun-fog-broken" height="25" :ssr="true" />
        </button>
        <span class="text-sm">Light</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-effect {
  transition: all 0.3s ease-in-out;
  transform: scale(1);
}

.hover-effect:hover {
  transform: scale(1.1);
}
</style>
