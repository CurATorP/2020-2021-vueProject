<template>
  <div class="container">
    <Model />
    
    <div class="clearfix"></div>

    <button><nuxt-link to="/datalist">toList</nuxt-link> </button>
    <button><nuxt-link to="/article">toarticle</nuxt-link></button>
    <button><nuxt-link to="/dblist">toDatalist</nuxt-link></button>
    
    
  </div>
</template>

<script>
import Model from '@/components/model'
import Address from '@/components/Address'
export default {
  components: {
    Model,
    Address,
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.clearfix{
  clear: both;
}
</style>