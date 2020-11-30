<template>
  <el-card class="box-card poeple">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div class="content">
      <el-table class="content-item" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="80"></el-table-column>
        <el-table-column prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <div class="content-item">
        列表内容
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tableData: [{
        date: '2020年',
        name: '王小虎',
        address: '200'
      }, {
        date: '2019年',
        name: '王小虎',
        address: '180'
      }, {
        date: '2018年',
        name: '王小虎',
        address: '210'
      }, {
        date: '2017年',
        name: '王小虎',
        address: '178'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
  // @import url(); 引入公共css类
  .poeple {
    margin-bottom: 20px;
    .content {
      display: flex;
      .content-item:nth-child(1) {
        width: 30%;
        margin-right: 2%;
      }
      .content-item:nth-child(2) {
        width: 68%;
      }
    }
  }
</style>
