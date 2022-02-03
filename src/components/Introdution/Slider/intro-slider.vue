<template>
  <div
    class="intro-slider"
  >
    <introSliderItem
      :item_data="slider_data[countShowItem]"
    />
  </div>
</template>

<script>
import introSliderItem from "@/components/Introdution/Slider/intro-slider--item.vue";

export default {
  components: {
    introSliderItem,
  },
  name: "IntroSlider",
  props: {
    slider_data: {
      type: Array,
      default: () => [],
    },

    countShowItem: {
      type: Number,
      default: 0,
      required: true
    }
  },
};
</script>

<style scoped>
.intro-slider {
  display: flex;
  overflow: hidden;
}
</style>