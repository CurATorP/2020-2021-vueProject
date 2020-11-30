<template>
  <div class="container">

    <div class="path">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考研资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <List />
    <SidePart />
    <div class="clearfix"></div>

  </div>
</template>

<script>
  import List from '@/components/List'
  import SidePart from '@/components/sidePart'
  export default {
    components: {
      List,
      SidePart
    },
    data() {
      return {}
    },
    methods: {}
  }

</script>

<style lang="scss">
  .clearfix {
    clear: both;
  }

  .container {
    min-height: 700px;
  }

  .path {
    margin-top: 20px;
    margin-left: 100px;
    line-height: 40px;
  }

</style>
