<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import globalStore from '@components/global.store';
import { computed } from 'vue';

// defineProps<{
//   isNavigationEnabled: boolean;
// }>();

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
      :navigation="true"
      :modules="[EffectCoverflow, Navigation]"
      class="swiper-container"
      @slideChange="onSlideChange"
    >
      <slot></slot>
    </swiper>
  </div>
</template>

<style scoped>
/* Swiper container */
.swiper-container {
  width: 100%;
  /*padding: 50px 0;*/
}

/* Swiper slide */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.5s,
    opacity 0.5s;
}

/* Gradientes */
.gradient-bg-light {
  background: radial-gradient(circle, rgba(30, 30, 30, 0.6), rgba(0, 0, 50, 0.5), rgba(50, 0, 80, 0.4));
  /* background: radial-gradient(circle, rgba(44, 43, 43, 0.6), rgba(181, 181, 205, 0.5), rgba(150, 150, 255, 0.4));*/
}

.gradient-bg-dark {
  background: radial-gradient(circle, rgba(50, 50, 50, 0.6), rgba(30, 30, 80, 0.5), rgba(80, 30, 120, 0.4));
}

.gradient-text {
  background: linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* animate text  */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

/* animate img  */
@keyframes fadeIn-Img {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-img {
  animation: fadeIn-Img 0.8s ease-in-out;
}

/*overlay-text*/
.overlay-text {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(173, 216, 230, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
}

.text-container {
  background: white;
  border-radius: 8px;
  text-align: center;
  position: relative;
  padding: 0.5rem;
}
</style>
