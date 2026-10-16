<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import cvPdfUrl from '@assets/pdf/CV_ALONSO_NARO_2025.pdf';

const isModalVisible = ref(false);
</script>

<template>
  <LayoutBase>
    <p class="eyebrow enter-rise text-primarySoft">Desarrollador de software</p>
    <h1
      class="enter-mask font-mono text-4xl font-bold leading-tight tracking-tight text-light md:text-6xl xl:text-7xl mt-6 [--motion-order:1]"
    >
      Alonso Naro Saldaña
    </h1>
    <p class="enter-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl [--motion-order:3]">
      Soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes y escalables.
    </p>
    <div class="enter-rise mt-10 flex flex-col gap-4 sm:flex-row [--motion-order:4]">
      <a href="#portfolio" class="button-default">Ver proyectos</a>
      <button type="button" class="button-default-border" @click="isModalVisible = true">Visualizar CV</button>
    </div>
    <p class="enter-rise mt-12 font-mono text-sm text-muted [--motion-order:5]">
      Vue.js · Django · TypeScript · Tailwind CSS
    </p>

    <Teleport to="body">
      <div v-if="isModalVisible" class="modal-overlay" @click.self="isModalVisible = false">
        <div class="modal-panel">
          <div class="modal-header">
            <a
              :href="cvPdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-light underline-offset-4 transition-colors duration-200 hover:text-primarySoft hover:underline"
            >
              Abrir en una pestaña nueva
            </a>
            <button type="button" class="button-default-border" @click="isModalVisible = false">Cerrar</button>
          </div>
          <iframe :src="cvPdfUrl" title="Curriculum Vitae de Alonso Naro" class="pdf-viewer"></iframe>
        </div>
      </div>
    </Teleport>
  </LayoutBase>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--ns-dark), 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-panel {
  background: rgb(var(--ns-backgroundContent));
  border: 1px solid rgb(var(--ns-line));
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
}
</style>
