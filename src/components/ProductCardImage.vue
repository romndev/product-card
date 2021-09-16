<template lang="pug">
.product-card-image
  swiper(
    :slides-per-view="1"
    :centeredSlides="true"
    :pagination="pagination"
    @swiper="onSwiper"
  )
    swiper-slide(v-for="image in imageList")
      img(:src="image")
    .swiper-overlay
      .swiper-overlay-el(v-for="(image, index) in imageList" @mouseover="onMouseOver(index)")

</template>

<script>
import SwiperCore, {
  Pagination
} from 'swiper';
SwiperCore.use([Pagination]);

import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, computed } from 'vue';

import 'swiper/swiper-bundle.min.css'

export default {
  name: 'ProductCardImage',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: [Array, String],
      default: './assets/noimage.jpg',
    }
  },
  setup(props){
    const imageList = computed(() => {
      return [...props.images]
    })
    const pagination = {
      clickable: true,
    }
    const swiperRef = ref(null);
    function onSwiper(swiper){
      swiperRef.value = swiper;
    }
    function onMouseOver(index){
      swiperRef.value.slideTo(index);
    }
    return {
      imageList,
      pagination,
      onSwiper,
      onMouseOver,
      swiperRef,
    };
  }
}
</script>

<style lang="scss" scoped>
$imageWidth: 300px;
$imageHeight: 300px;

.product-card-image{
  width:$imageWidth;
  height:$imageHeight;

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    height: $imageHeight;
    width: auto;
  }

  .swiper-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    align-items: flex-start;
    z-index: 1;

    &-el{
      flex: 1;
      height:100%;
      align-self: flex-start;
    }
  }
}
</style>
