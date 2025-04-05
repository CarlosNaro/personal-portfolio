<script setup lang="ts">
import LayoutBase from '@components/globalComponents/layoutBase.vue';
import cvPdfUrl from '@assets/pdf/CV_ALONSO_NARO_2025.pdf';
import developerPng from '@assets/img/developer.png';
import eyeSolidSvg from '@assets/svg/eye-solid.svg';

const showModal = ref(false);
</script>

<template>
  <LayoutBase class="select-none">
    <div class="flex flex-col md:flex-row gap-2">
      <div class="mb-2 md:m-auto">
        <h1 class="text-2xl md:text-[2rem] font-semibold">¡Hola!</h1>
        <p class="text-justify mb-4 md:text-[2rem]">
          Me llamo <b>Alonso</b>, soy un desarrollador de software apasionado por crear soluciones tecnológicas
          eficientes y escalables.
        </p>
        <button class="button-default w-full md:w-3/5 lg:w-2/5" @click="showModal = true">
          <span class="ns-button__content"
            >Visualizar CV
            <img :src="eyeSolidSvg" alt="eyeSolidSvg" class="ml-2 w-5" />
          </span>
        </button>
      </div>

      <img
        :src="developerPng"
        alt="developerPng"
        class="m-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[270px] lg:h-[270px] xl:w-[300px] xl:h-[300px]"
        style="border-radius: 50%; background: linear-gradient(45deg, rgb(var(--ns-success)), rgb(var(--ns-primary)))"
      />
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
  /*background: linear-gradient(45deg, rgb(var(--ns-warn)), rgb(var(--ns-primary))) !important;*/

  /* un gradiente usando --ns-success */
  background: linear-gradient(45deg, rgb(var(--ns-success)), rgb(var(--ns-primary))) !important;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(var(--ns-warn), 1) !important;
  }
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
