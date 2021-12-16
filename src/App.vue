<template>
  <div id="app">
  <Home />
  <component :is="layout">
    <router-view/>
  </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout"
import Home from "@/views/Home"
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    MainLayout, Home, EmptyLayout
  }
}
</script>

<style lang="scss">
@import 'assets/index.css'
</style>
