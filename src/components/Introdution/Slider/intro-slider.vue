<template>
   <div class="intro-slider">
      <intro-slider-item v-for="item in slider_data"
      :key="item.id"
      :item_data="item" />
   </div>
</template>

<script>
import introSliderItem from '@/components/Introdution/Slider/intro-slider--item.vue'

export default {
  components: { 
     introSliderItem
    },
   name: 'IntroSlider',
   props: {
      slider_data: {
         type: Array,
         default: () => []
      }
   }
}
</script>