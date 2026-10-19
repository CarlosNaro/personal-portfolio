<script setup lang="ts">
const skillGroups = [
  {
    id: 'backend',
    name: 'Backend',
    tone: 'tone-camu',
    skills: ['.NET', 'Python', 'Django', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    id: 'frontend',
    name: 'Frontend y móvil',
    tone: 'tone-aguaje',
    skills: ['Vue', 'Nuxt', 'TypeScript', 'Ionic', 'Tailwind CSS', 'Element Plus'],
  },
  {
    id: 'tools',
    name: 'Herramientas',
    tone: 'tone-leaf',
    skills: ['Git', 'GitHub', 'Vercel'],
  },
];
</script>

<template>
  <div class="content pb-24 md:pb-28">
    <h2 class="section-title" data-reveal>Con qué trabajo</h2>
    <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        v-for="group in skillGroups"
        :key="group.id"
        :class="group.tone"
        class="rounded-[32px] border-2 p-7"
        data-reveal
      >
        <h3 class="group-name font-display text-2xl font-extrabold">{{ group.name }}</h3>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li v-for="skill in group.skills" :key="skill" class="chip">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tone-camu {
  border-color: rgb(var(--ns-primary));
}

.tone-camu .group-name {
  color: rgb(var(--ns-primary));
}

.tone-aguaje {
  border-color: rgb(var(--ns-primary-soft));
}

.tone-aguaje .group-name {
  color: rgb(var(--ns-primary-soft));
}

.tone-leaf {
  border-color: rgb(var(--ns-leaf));
}

.tone-leaf .group-name {
  color: rgb(var(--ns-leaf));
}
</style>
