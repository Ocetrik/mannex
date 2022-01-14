<template>
   <div class="main-layout">
      <Header />
      
      <Footer />
   </div>
</template>

<script>
import Footer from '@/components/app/Footer'
import Header from '../components/Header/Header.vue'

export default {
   name: "main-layout",
   components: {
      Footer,
      Header
      }
}
</script>