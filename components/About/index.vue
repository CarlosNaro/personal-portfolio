<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import ComponentTitle from '@components/globalComponents/ComponentTitle.vue';
import profilePhoto from '@assets/img/foto_2.png';
</script>

<template>
  <LayoutBase>
    <ComponentTitle index="03" title="Sobre mí" />
    <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
      <div class="md:col-span-7">
        <p class="text-base leading-relaxed text-muted" data-reveal>
          Mi nombre es Alonso Naro Saldaña. Soy ingeniero de sistemas e informática, graduado de la Universidad Nacional
          de la Amazonía Peruana. Soy de nacionalidad peruana y natural de la ciudad de Iquitos, en la región de Loreto.
        </p>
        <p class="mt-4 text-base leading-relaxed text-muted" data-reveal>
          Soy un desarrollador de software apasionado por crear soluciones innovadoras y eficientes. Con experiencia en
          tecnologías de Vue.js, Django, TypeScript y Tailwind CSS, he trabajado en proyectos que combinan diseño
          intuitivo y funcionalidades robustas.
        </p>
        <div aria-hidden="true" class="rule mt-8" data-reveal="rule"></div>
        <dl class="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-3" data-reveal>
          <div>
            <dt class="eyebrow text-muted">Título</dt>
            <dd class="mt-2 text-sm text-light">Ingeniero de sistemas e informática</dd>
          </div>
          <div>
            <dt class="eyebrow text-muted">Universidad</dt>
            <dd class="mt-2 text-sm text-light">Universidad Nacional de la Amazonía Peruana</dd>
          </div>
          <div>
            <dt class="eyebrow text-muted">Ciudad</dt>
            <dd class="mt-2 text-sm text-light">Iquitos, Loreto, Perú</dd>
          </div>
        </dl>
      </div>
      <div class="md:col-span-5">
        <div class="flex items-end justify-center border border-line bg-Content" data-reveal>
          <img
            :src="profilePhoto"
            alt="Foto de Alonso Naro"
            width="430"
            height="580"
            loading="lazy"
            decoding="async"
            class="h-auto w-full max-w-xs grayscale"
          />
        </div>
      </div>
    </div>
  </LayoutBase>
</template>
