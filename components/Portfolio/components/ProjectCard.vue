<script setup lang="ts">
import type { IProject } from '../Interface/IProject';

interface Props {
  project: IProject;
}

defineProps<Props>();
</script>

<template>
  <article
    class="hover-rule flex flex-col gap-6 border border-line bg-Content p-6 transition-colors duration-200 hover:border-lineStrong sm:flex-row"
    data-reveal
  >
    <div class="flex shrink-0 justify-center border border-line bg-dark p-3 sm:w-40 sm:self-start">
      <img
        :src="project.src"
        :alt="project.title"
        :width="project.width"
        :height="project.height"
        loading="lazy"
        decoding="async"
        class="h-56 w-auto sm:h-auto sm:w-full"
      />
    </div>
    <div>
      <h4 class="font-mono text-lg font-bold text-light">{{ project.title }}</h4>
      <p class="mt-3 text-sm leading-relaxed text-muted">{{ project.description }}</p>
      <ul class="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
        <li
          v-for="tech in project.technologies"
          :key="tech"
          class="border border-line px-2 py-1 font-mono text-xs text-muted"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </article>
</template>
