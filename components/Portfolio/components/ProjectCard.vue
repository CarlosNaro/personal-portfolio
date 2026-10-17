<script setup lang="ts">
import type { IProject } from '@components/Portfolio/Interface/IProject';

interface Props {
  project: IProject;
}

defineProps<Props>();
</script>

<template>
  <article :class="`tone-${project.tone}`" class="flex flex-col gap-5 rounded-[40px] p-6 text-dark md:p-8" data-reveal>
    <div class="flex h-72 items-center justify-center rounded-[28px] bg-dark">
      <img
        v-for="image in project.images"
        :key="image.src"
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        loading="lazy"
        decoding="async"
        class="h-60 w-auto -rotate-2"
      />
    </div>
    <h3 class="font-display text-3xl font-extrabold leading-tight tracking-tight">{{ project.title }}</h3>
    <p class="text-lg leading-relaxed">{{ project.description }}</p>
    <p class="mt-auto font-semibold">{{ project.technologies.join(', ') }}</p>
  </article>
</template>

<style scoped>
.tone-aguaje {
  background: rgb(var(--ns-primary-soft));
}

.tone-leaf {
  background: rgb(var(--ns-leaf));
}

.tone-cream {
  background: rgb(var(--ns-light));
}
</style>
