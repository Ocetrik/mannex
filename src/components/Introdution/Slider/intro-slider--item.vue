<template>
  <div class="intro-slider--item">
    <img :src="item_data.img" alt="" />
  </div>
</template>

<script>
export default {
  name: "intro-slider--item",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
</style>