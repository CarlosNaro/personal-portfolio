<script setup lang="ts">
import globalStore from '@/components/global.store';
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import cvPdfUrl from '@assets/pdf/CV_ALONSO_NARO.pdf';

const isDarkMode = computed(() => globalStore.getIsDarkMode());
const showModal = ref(false);
</script>

<template>
  <LayoutBase class="select-none flex">
    <div class="flex-1 flex-col">
      <h1 class="text-2xl md:text-[2rem] font-semibold">¡Hola!</h1>
      <p class="text-justify md:text-[2rem]">
        Me llamo <b>Alonso</b>, soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes
        y escalables.
      </p>
      <button class="button-default" @click="showModal = true">
        <span class="ns-button__content">Ver CV</span>
      </button>
    </div>
    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click.self="">
        <div class="modal-content">
          <button class="close-btn" @click="showModal = false">X</button>
          <iframe :src="cvPdfUrl" class="pdf-viewer"></iframe>
        </div>
      </div>
    </Teleport>
  </LayoutBase>
</template>

<style scoped>
.button-default {
  margin: 0 !important;
  background: linear-gradient(45deg, rgb(var(--ns-warn)), rgb(var(--ns-primary))) !important;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(var(--ns-warn), 1) !important;
  }
}

.fade-out-top {
  mask-image: linear-gradient(to top, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, black 50%, transparent 100%);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 25px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.pdf-viewer {
  width: 80vw;
  height: 80vh;
  border: none;
}
</style>
