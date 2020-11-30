<template>
  <div id="post-info">
    <div class="nav-crummb">
      <i class="el-icon-d-arrow-left"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">经验心得</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-info',
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped></style>
