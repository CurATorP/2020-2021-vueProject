<template>
  <div class="container">
    <Model />
    <Address />
    <div class="clearfix"></div>
    <nuxt-link to="/datalist">List-router</nuxt-link>
    <nuxt-link to="/article">article-router</nuxt-link>
    <nuxt-link to="/dblist">dblist-router</nuxt-link>
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