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
  <div>
    <label :for="id" class="mb-2 block text-sm font-semibold text-dark">
      {{ label }}<span v-if="isRequired" aria-hidden="true"> *</span>
    </label>
    <textarea
      v-if="isMultiline"
      :id="id"
      :value="modelValue"
      :required="isRequired"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? id + '-error' : undefined"
      class="input-form min-h-36 aria-[invalid=true]:border-primary"
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
      class="input-form aria-[invalid=true]:border-primary"
      @input="onInput"
    />
    <p v-if="error" :id="id + '-error'" class="mt-2 text-sm font-semibold text-dark">{{ error }}</p>
  </div>
</template>
