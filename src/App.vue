<template>
  <div id="app">
  <Home />
  <!-- <component :is="layout"> -->
    <!-- <router-view/> -->
  <!-- </component> -->
  </div>
</template>

<script>
// import MainLayout from "@/layouts/MainLayout"
// import EmptyLayout from '@/layouts/EmptyLayout'
import Home from "@/views/Home"

export default {
  computed: {
    // layout() {
    //   return (this.$route.meta.layout || 'empty') + '-layout'
    // }
  },
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import 'assets/index.css'
</style>
