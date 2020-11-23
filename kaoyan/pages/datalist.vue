<template>
  <div class="container">
   
    <List />
    <nuxt-link to="/">Test-router</nuxt-link>
  </div>
</template>

<script>
import List from '@/components/List'
export default {
  components: {
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