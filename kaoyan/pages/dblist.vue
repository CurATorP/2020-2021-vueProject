<template>
  <div class="container">
    <Selecter />
    <div class="clearfix"></div>
    
  </div>
</template>

<script>
import Selecter from '@/components/selecter'

export default {
  components: {
    Selecter,
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