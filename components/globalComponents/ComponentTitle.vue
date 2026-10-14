<script setup lang="ts">
interface Props {
  title: string;
  index?: string;
}

withDefaults(defineProps<Props>(), {
  index: '',
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <span v-if="index" class="eyebrow text-primarySoft" data-reveal>{{ index }}</span>
    <h2 class="font-mono text-2xl font-bold tracking-tight text-light md:text-3xl" data-reveal="mask">{{ title }}</h2>
  </div>
</template>
