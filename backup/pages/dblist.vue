<template>
  <div class="container">

    <div class="path">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考研资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <Selecter />
    <div class="clearfix"></div>
    <DataList />
    <SidePart />
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import Selecter from '@/components/selecter'
  import DataList from '@/components/DataList'
  import SidePart from '@/components/sidePart'
  export default {
    components: {
      Selecter,
      DataList,
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
