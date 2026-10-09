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
      <div class="mb-5 flex items-center border-b border-line pb-1">
        <h3 v-if="title" :class="nameResend ? 'text-center' : 'text-left'" class="flex-1 font-mono text-xl font-bold">
          {{ title }}
        </h3>
        <button
          v-if="!nameResend"
          type="button"
          aria-label="Cerrar"
          class="button-default-border"
          @click="emit('close')"
        >
          Cerrar
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
  background: rgba(var(--ns-dark), 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-content {
  padding: 20px;
  border: 1px solid rgb(var(--ns-line));
  max-height: 90%;
  display: flex;
  position: relative;
  flex-direction: column;
}
</style>
