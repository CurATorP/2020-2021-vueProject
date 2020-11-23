<template>
  <div class="container">
    <Model />
    <Address />
    <nuxt-link to="/datalist">Test-router</nuxt-link>
  </div>
</template>

<script>
import Model from '@/components/model'
import Address from '@/components/Address'
import List from '@/components/List'
export default {
  components: {
    Model,
    Address,
    List
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">

</style>