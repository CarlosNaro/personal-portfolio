<script setup lang="ts">
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    required: false,
    default: '',
  },

  nameResend: {
    type: String,
    required: false,
    default: '',
  },
  bgColor: {
    type: String,
    required: false,
    default: 'bg-Content',
  },
});

const name = ref(props.nameResend);
</script>

<template>
  <div class="modal-overlay p-5">
    <div :class="bgColor" class="modal-content w-full md:max-w-md">
      <div class="flex items-center mb-5 border-b pb-1 border-gray-700">
        <h1 v-if="props.title" :class="props.nameResend ? 'text-center' : 'text-left'" class="flex-1 text-2xl">
          {{ props.title }}
        </h1>
        <!--        <button v-if="!props.nameResend" class="button-light-icon" @click="$emit('close')">-->
        <!--          <span class="text-black">X</span>-->
        <!--        </button>-->
        <button
          v-if="!props.nameResend"
          style="border-radius: 50%; margin: 5px; width: 40px; height: 40px"
          class="button-default-transparent shadow shadow-gray-700"
          @click="$emit('close')"
        >
          X
        </button>
      </div>

      <h2 v-if="props.nameResend" class="text-center font-bold text-lg">{{ name }}</h2>
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
</style>
