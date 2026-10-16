<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import vuejsLogo from '@assets/svg/vuejs.svg';
import elementPlus from '@assets/svg/element-plus-logo.svg';
import ionic from '@assets/svg/ionic.svg';
import typeScript from '@assets/svg/TypeScript.svg';
import javaScript from '@assets/svg/javascript.svg';
import html from '@assets/svg/html.svg';
import css from '@assets/svg/css.svg';
import tailwind from '@assets/svg/Tailwind.svg';
import python from '@assets/svg/python.svg';
import django from '@assets/svg/django.svg';
import postgresql from '@assets/svg/postgresql.svg';
import firebase from '@assets/svg/firebase.svg';
import supabase from '@assets/svg/supabase.svg';
import git from '@assets/svg/git.svg';
import github from '@assets/svg/github.svg';

const skillGroups = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', icon: vuejsLogo },
      { name: 'Element-plus', icon: elementPlus },
      { name: 'Ionic', icon: ionic },
      { name: 'TypeScript', icon: typeScript },
      { name: 'JavaScript', icon: javaScript },
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Tailwind CSS', icon: tailwind },
    ],
  },
  {
    id: 'backend',
    name: 'Backend y datos',
    skills: [
      { name: 'Python', icon: python },
      { name: 'Django', icon: django },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'Firebase', icon: firebase },
      { name: 'Supabase', icon: supabase },
    ],
  },
  {
    id: 'tools',
    name: 'Herramientas',
    skills: [
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
    ],
  },
];
</script>

<template>
  <LayoutBase>
    <ComponentTitle title="Habilidades" />
    <div class="mt-10">
      <div v-for="group in skillGroups" :key="group.id">
        <div aria-hidden="true" class="rule" data-reveal="rule"></div>
        <div class="grid grid-cols-1 gap-4 py-6 md:grid-cols-12" data-reveal>
          <h3 class="eyebrow text-muted md:col-span-3">{{ group.name }}</h3>
          <ul class="flex flex-wrap gap-3 md:col-span-9">
            <li
              v-for="skill in group.skills"
              :key="skill.name"
              class="hover-rule flex items-center gap-3 border border-line bg-Content px-3 py-2 transition-colors duration-200 hover:border-lineStrong"
            >
              <span class="flex h-7 w-7 items-center justify-center bg-light">
                <img :src="skill.icon" alt="" width="20" height="20" class="h-5 w-5" />
              </span>
              <span class="text-sm text-light">{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </LayoutBase>
</template>
