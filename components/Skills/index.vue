<script setup lang="ts">
import globalStore from '@components/global.store';
//imagen___
import vuejsLogo from '@/public/svg/vuejs.svg';
import TypeScript from '@/public/svg/TypeScript.svg';
import JavaScript from '@/public/svg/javascript.svg';
import html from '@/public/svg/html.svg';
import CSS from '@/public/svg/CSS.svg';
import tailwind from '@/public/svg/Tailwind.svg';
import github from '@/public/svg/github.svg';
import git from '@/public/svg/git.svg';
import django from '@/public/svg/Django.svg';
import python from '@/public/svg/python.svg';
import firebase from '@/public/svg/firebase.svg';
import supabase from '@/public/svg/supabase.svg';
import postgresql from '@/public/svg/postgresql.svg';
import ionic from '@/public/svg/ionic.svg';

const isDarkMode = computed(() => globalStore.getIsDarkMode());

const arraySkills = [
  {
    name: 'Vue.js',
    icon: vuejsLogo,
  },
  {
    name: 'Ionic',
    icon: ionic,
  },
  {
    name: 'TypeScript',
    icon: TypeScript,
  },
  {
    name: 'JavaScript',
    icon: JavaScript,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: CSS,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'GitHub',
    icon: github,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Supabase',
    icon: supabase,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
];
</script>

<template>
  <LayoutBase class="select-none">
    <div class="relative flex items-center justify-center mt-2">
      <div class="absolute rounded-full border-8 border-l-lime-300 border-r-lime-300 w-14 h-14 opacity-75"></div>
      <h1 class="z-30 uppercase text-2xl font-extrabold underline text-center">habilidades</h1>
    </div>
    <div class="flex flex-wrap gap-5 mt-6 items-center justify-center">
      <div
        :class="isDarkMode ? 'bg-Content' : 'bg-light'"
        class="card_img flex flex-col items-center rounded-md w-28 h-28"
        v-for="(skill, index) in arraySkills"
        :key="index"
      >
        <img :src="skill.icon" class="w-24 h-24" alt="" />
        <span class="-mt-2 font-bold">{{ skill.name }}</span>
      </div>
    </div>
  </LayoutBase>
</template>

<style scoped>
.card_img {
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(179, 178, 178, 0.75);
}

.card_img:hover {
  transform: scale(0.97);
  box-shadow: none;
}
</style>
