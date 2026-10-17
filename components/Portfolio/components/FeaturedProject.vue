<script setup lang="ts">
import type { IProject } from '@components/Portfolio/Interface/IProject';

interface Props {
  project: IProject;
}

defineProps<Props>();

const IMAGE_TILTS = ['-rotate-3', 'rotate-0', 'rotate-3'];
</script>

<template>
  <article
    class="flex flex-col gap-8 rounded-[40px] bg-primary p-6 text-dark md:p-10 lg:flex-row lg:items-center"
    data-reveal
  >
    <div class="min-w-0 flex-1">
      <h3 class="font-display text-4xl font-extrabold leading-none tracking-tight md:text-5xl">{{ project.title }}</h3>
      <p class="mt-4 max-w-xl text-lg leading-relaxed">{{ project.description }}</p>
      <p class="mt-5 font-semibold">{{ project.technologies.join(', ') }}</p>
    </div>
    <div class="flex flex-1 items-end justify-center gap-3 md:gap-4">
      <img
        v-for="(image, position) in project.images"
        :key="image.src"
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        loading="lazy"
        decoding="async"
        :class="IMAGE_TILTS[position]"
        class="h-48 w-auto rounded-2xl md:h-72"
      />
    </div>
  </article>
</template>
