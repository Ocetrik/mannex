<template>
  <div id="app">
  <!-- <Home />
  <Basket /> -->
    <router-view/>

  </div>
</template>

<script>
// import MainLayout from "@/layouts/MainLayout"
// import EmptyLayout from '@/layouts/EmptyLayout'
import Home from "@/views/Home"
import Basket from '@/views/Basket.vue'

export default {
  computed: {
    // layout() {
    //   return (this.$route.meta.layout || 'empty') + '-layout'
    // }
  },
  components: {
    // Home,
    // Basket
  }
}
</script>

<style lang="scss">
@import 'assets/index.css'
</style>
