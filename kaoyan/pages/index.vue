<template>
  <div class="container">
    <Model />
  </div>
</template>

<script>
import Model from '@/components/Model'
export default {
  components: {
    Model
  },
  data () {
    return {}
  },
  mounted () {
    this.getTest()
  },
  methods: {
    async getTest() {
      let result =await this.$axios.$get('/api/test')
      console.log(result)
    }
  }
}
</script>

<style lang="scss">

</style>
