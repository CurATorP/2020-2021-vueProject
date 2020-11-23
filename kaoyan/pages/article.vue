<template>
  <div class="container">
   
    <Arti />
    <SidePart />
    <div class="clearfix"></div>
    
  </div>
</template>

<script>
import Arti from '@/components/Arti'
import SidePart from '@/components/sidePart'
export default {
  components: {
    Arti,
    SidePart
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
.clearfix{
  clear: both;
}
</style>