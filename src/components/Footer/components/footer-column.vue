<template>
  <div class="footer-column">
     <h3 class="footer-column__title title">{{title}}</h3>
     <div class="footer-column__list list">
        <div class="list__item text" :key="key" v-for="(i, key) in items">
           <router-link :to="i">{{key}}</router-link>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    default: [],
  },
};
</script>

<style scoped>
  .footer-column__title{
    padding-top: 80px;
  }
  .footer-column__list{
    padding-top: 15px;
  }
  .list__item{
    padding-top: 20px;
  }
</style>