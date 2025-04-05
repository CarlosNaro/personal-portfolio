<script setup lang="ts">
import globalStore from '@components/global.store';
//imagen___
import vuejsLogo from '../assets/svg/vuejs.svg';
import TypeScript from '../assets/svg/TypeScript.svg';
import JavaScript from '../assets/svg/javascript.svg';
import html from '../assets/svg/html.svg';
import CSS from '../assets/svg/css.svg';
import tailwind from '../assets/svg/Tailwind.svg';
import github from '../assets/svg/github.svg';
import git from '../assets/svg/git.svg';
import django from '../assets/svg/django.svg';
import python from '../assets/svg/python.svg';
import firebase from '../assets/svg/firebase.svg';
import supabase from '../assets/svg/supabase.svg';
import postgresql from '../assets/svg/postgresql.svg';
import ionic from '../assets/svg/ionic.svg';
import elementPlus from '@/assets/svg/element-plus-logo.svg';
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';

const isDarkMode = computed(() => globalStore.getIsDarkMode());

const arraySkills = [
  {
    name: 'Vue.js',
    icon: vuejsLogo,
  },
  {
    name: 'Element-plus',
    icon: elementPlus,
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
  <LayoutBase class="select-none mt-10">
    <component-title title="Habilidades" />
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
  box-shadow: 0 0 10px 0 rgba(179, 178, 178, 0.75);
}

.card_img:hover {
  transform: scale(0.97);
  box-shadow: none;
}
</style>
