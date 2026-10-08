<script setup lang="ts">
interface Props {
  title?: string;
  nameResend?: string;
  bgColor?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  nameResend: '',
  bgColor: 'bg-Content',
});

const emit = defineEmits<{ close: [] }>();
</script>

<template>
  <div class="modal-overlay p-5">
    <div :class="bgColor" class="modal-content w-full md:max-w-md" role="alert">
      <div class="flex items-center mb-5 border-b pb-1 border-gray-700">
        <h3 v-if="title" :class="nameResend ? 'text-center' : 'text-left'" class="flex-1 text-2xl">
          {{ title }}
        </h3>
        <button
          v-if="!nameResend"
          type="button"
          aria-label="Cerrar"
          class="button-default-transparent close-button shadow shadow-gray-700"
          @click="emit('close')"
        >
          X
        </button>
      </div>

      <p v-if="nameResend" class="text-center font-bold text-lg">{{ nameResend }}</p>
      <div class="text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  z-index: 50;
  backdrop-filter: blur(5px);
}

.modal-content {
  padding: 20px;
  border-radius: 10px;
  max-height: 90%;
  display: flex;
  position: relative;
  flex-direction: column;
}

.close-button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
