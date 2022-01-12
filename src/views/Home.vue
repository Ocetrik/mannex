<template>
  <div class="home">
    <Header />
    <Introdution />
    <company-info />
    <Catalog />
    <Footer />
  </div>
</template>

<script>
import Catalog from '@/components/Catalog/Catalog.vue'
import CompanyInfo from '@/components/company-info/company-info.vue'
import Introdution from '@/components/Introdution/Introdution.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/app/Footer.vue'


export default {
  name: 'Home',
  components: {
    Catalog,
    CompanyInfo,
    Introdution,
    Header,
    Footer,
  }
}
</script>
