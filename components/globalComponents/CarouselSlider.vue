<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { EffectCoverflow, Navigation, Scrollbar } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

defineProps<{
  isNavigationEnabled: boolean;
}>();

const emit = defineEmits(['slideChange']);

const onSlideChange = (swiper: any) => {
  emit('slideChange', swiper.realIndex);
};
</script>

<template>
  <div>
    <swiper
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
    </swiper>
  </div>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  /*padding: 50px 0;*/
  border-radius: 10px;
}
</style>
