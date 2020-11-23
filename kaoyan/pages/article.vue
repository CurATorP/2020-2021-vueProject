<template>
  <div class="container">

    <div class="path">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考研资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

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
.clearfix {
    clear: both;
  }

  .container {
    min-height: 700px;
  }

  .path {
    margin-top: 40px;
    margin-left: 100px;
    line-height: 40px;
  }
</style>