<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { EffectCoverflow, Navigation, Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';

interface Props {
  isNavigationEnabled: boolean;
}

defineProps<Props>();
const emit = defineEmits<{ slideChange: [index: number] }>();

const onSlideChange = (swiper: SwiperClass) => {
  emit('slideChange', swiper.realIndex);
};
</script>

<template>
  <div>
    <Swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :loop="true"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }"
      :navigation="isNavigationEnabled"
      :scrollbar="isNavigationEnabled ? false : { draggable: true }"
      :modules="[EffectCoverflow, Navigation, Scrollbar]"
      class="swiper-container"
      @slideChange="onSlideChange"
    >
      <slot></slot>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  border-radius: 10px;
}
</style>
