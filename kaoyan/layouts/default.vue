<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <BackToTop />
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop/index'
export default {
  components: {
    Header,
    Footer,
    BackToTop
  }
}


</script>

<style>

</style>
