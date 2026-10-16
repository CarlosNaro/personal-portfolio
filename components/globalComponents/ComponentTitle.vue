<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <h2 class="font-mono text-2xl font-bold tracking-tight text-light md:text-3xl" data-reveal="mask">{{ title }}</h2>
</template>
