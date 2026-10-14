<script setup lang="ts">
interface Props {
  id: string;
  label: string;
  modelValue: string;
  type?: 'text' | 'email' | 'tel';
  isRequired?: boolean;
  isMultiline?: boolean;
  error?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  isRequired: false,
  isMultiline: false,
  error: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement | null;
  if (target) {
    emit('update:modelValue', target.value);
  }
}
</script>

<template>
  <div class="group">
    <label
      :for="id"
      class="eyebrow mb-2 block text-muted transition-colors duration-200 group-focus-within:text-primarySoft"
    >
      {{ label }}<span v-if="isRequired" aria-hidden="true"> *</span>
    </label>
    <textarea
      v-if="isMultiline"
      :id="id"
      :value="modelValue"
      :required="isRequired"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? id + '-error' : undefined"
      class="input-form min-h-36"
      @input="onInput"
    ></textarea>
    <input
      v-else
      :id="id"
      :type="type"
      :value="modelValue"
      :required="isRequired"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? id + '-error' : undefined"
      class="input-form"
      @input="onInput"
    />
    <p v-if="error" :id="id + '-error'" class="mt-2 text-sm text-danger">{{ error }}</p>
  </div>
</template>
