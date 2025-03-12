<script setup lang="ts">
import globalStore from '@components/global.store';
//imagen___
import vuejsLogo from '@/assets/svg/vuejs.svg';
import TypeScript from '@/assets/svg/TypeScript.svg';
import JavaScript from '@/assets/svg/javascript.svg';
import html from '@/assets/svg/html.svg';
import CSS from '@/assets/svg/CSS.svg';
import Tailwind from '@/assets/svg/Tailwind.svg';
import github from '@/assets/svg/github.svg';
import git from '@/assets/svg/git.svg';
import django from '@/assets/svg/Django.svg';
import python from '@/assets/svg/python.svg';


const isDarkMode = computed(() => globalStore.getIsDarkMode());

const arrySkills = [
    {
        name: 'Vue.js',
        icon: vuejsLogo,
        description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can easily scale between a library and a full-featured framework.'
    },
    {
        name: 'TypeScript',
        icon: TypeScript,
        description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is designed to be a superset of JavaScript, and can be used to create large-scale applications.'
    },
    {
        name: 'JavaScript',
        icon: JavaScript,
        description: 'JavaScript is a high-level, interpreted programming language. It is designed to be easy to read and write, and can be used to create a wide variety of applications.'
    },
    {
        name: 'HTML',
        icon: html,
        description: 'HTML is a markup language used to create web pages. It is the standard markup language for creating web pages and web applications.'
    },
    {
        name: 'CSS',
        icon: CSS,
        description: 'CSS is a style sheet language used to describe the presentation of a document written in HTML or XML. It is the standard markup language for creating web pages and web applications.'
    },
    {
        name: 'Tailwind CSS',
        icon: Tailwind,
        description: 'Tailwind CSS is a utility-first CSS framework. It is designed to be easy to use, and can be used to create a wide variety of applications.',
    },
    {
        name: 'Python',
        icon: python,
        description: 'Python is a high-level, interpreted programming language. It is designed to be easy to read and write, and can be used to create a wide variety of applications.'
    },
    {
        name: 'Django',
        icon: django,
        description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It is designed to be easy to use, and can be used to create a wide variety of applications.'
    },
    {
        name: 'Git',
        icon: git,
        description: 'Git is a version control system. It is designed to be easy to use, and can be used to create a wide variety of applications.'
    },
    {
        name: 'GitHub',
        icon: github,
        description: 'GitHub is a web-based hosting service for version control using Git. It is designed to be easy to use, and can be used to create a wide variety of applications.'
    },
]

</script>

<template>
    <LayoutBase class="select-none">
        <div class="relative flex items-center justify-center mt-2 ">
            <div class=" absolute rounded-full border-8 border-l-lime-300 border-r-lime-300 w-14 h-14 opacity-75 ">
            </div>
            <h1 class="z-30 uppercase text-2xl font-extrabold underline text-center">habilidades</h1>
        </div>
        <div class="flex flex-wrap gap-5 mt-6 items-center justify-center ">
            <div :class="isDarkMode ? 'bg-Content' : 'bg-light'"
                class="card_img flex flex-col items-center rounded-md w-28 h-28  " v-for="(skill, index) in arrySkills"
                :key="index">
                <img :src="skill.icon" class="w-24 h-24" alt="">
                <span class="-mt-2 font-bold ">{{ skill.name }}</span>
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
    box-shadow: none
}
</style>