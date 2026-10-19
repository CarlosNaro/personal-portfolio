<script setup lang="ts">
import cvPdfUrl from '@assets/pdf/CV_ALONSO_NARO_2025.pdf';
import profilePhoto from '@assets/img/foto_perfil_vuejs.webp';

const isModalVisible = ref(false);
</script>

<template>
  <div>
    <div class="content flex flex-col gap-10 pt-8 md:flex-row md:items-end md:gap-12 md:pt-16">
      <div class="min-w-0 flex-1">
        <h1
          class="enter-rise font-display text-6xl font-extrabold leading-[0.9] tracking-tighter text-light md:text-8xl lg:text-[7rem]"
        >
          Alonso<br />Naro Saldaña
        </h1>
        <p class="enter-rise mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl [--motion-order:1]">
          Desarrollador de software en Iquitos. Conecto sistemas con SUNAT en .NET y construyo apps en Vue que la gente
          usa todos los días.
        </p>
        <div class="enter-rise mt-9 flex flex-col gap-3 sm:flex-row [--motion-order:2]">
          <a href="#portfolio" class="button-default">Ver proyectos</a>
          <button type="button" class="button-default-border" @click="isModalVisible = true">Ver CV</button>
        </div>
      </div>
      <div class="enter-rise order-first w-52 shrink-0 md:order-last md:w-80 [--motion-order:3]">
        <div class="relative aspect-[4/5]">
          <div class="absolute inset-x-0 bottom-0 h-[84%] rounded-[180px_180px_32px_180px] bg-primarySoft"></div>
          <img
            :src="profilePhoto"
            alt="Alonso Naro con una polera de Vue.js, de brazos cruzados"
            width="413"
            height="605"
            class="relative mx-auto block h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </div>

    <svg aria-hidden="true" viewBox="0 0 1440 160" preserveAspectRatio="none" class="mt-16 block h-24 w-full md:h-40">
      <path
        d="M0 90 C 180 20, 360 150, 560 90 S 940 20, 1120 80 S 1360 140, 1440 70 L1440 160 L0 160 Z"
        class="fill-Content"
      />
      <path
        d="M0 96 C 180 26, 360 156, 560 96 S 940 26, 1120 86 S 1360 146, 1440 76"
        fill="none"
        stroke-width="3"
        class="stroke-primarySoft"
      />
    </svg>

    <Teleport to="body">
      <div v-if="isModalVisible" class="modal-overlay" @click.self="isModalVisible = false">
        <div class="modal-panel">
          <div class="modal-header">
            <a
              :href="cvPdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-light underline-offset-4 hover:text-primarySoft hover:underline"
            >
              Abrir en una pestaña nueva
            </a>
            <button type="button" class="button-default-border" @click="isModalVisible = false">Cerrar</button>
          </div>
          <iframe :src="cvPdfUrl" title="Curriculum Vitae de Alonso Naro" class="pdf-viewer"></iframe>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(var(--ns-dark), 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-panel {
  background: rgb(var(--ns-backgroundContent));
  border-radius: 24px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.pdf-viewer {
  width: 80vw;
  height: 80vh;
  border: none;
  border-radius: 12px;
}
</style>
