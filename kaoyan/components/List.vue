<template>
  <div id="list">
    <div class="list_path">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考研信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list_contents">
      <ul>
        <div v-for="(item, index) in contents" :key="index"  class="list_col">
          <span>
            <router-link :to="item.url">
                <div class="list_title">{{ item.title }}</div>
                <div class="list_date">{{ item.date }}</div>
            </router-link>
          </span>
        </div>
      </ul>
    </div>
    <div class="list_page">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contents: [{
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }, {
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }, {
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }, {
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }, {
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }, {
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }, {
          title: 'Never gonna give you up',
          date: '2020-11-16',
          url: ''
        }]
      }
    }
  }

</script>

<style lang="scss">
  #list {
    width: 800px;
    position: relative;
    margin-left: 100px;
    margin-top: 100px;
    color:#606266;
    a:hover{
        color: #1787e0;
    }
    a{
        color: #606266;
    }
    .list_path {
      height: 20px;
    }
    .list_contents {
        margin-bottom: 50px;
    }

    .list_col {
      margin: 1px;
      padding-top: 3px;
      height: 40px;
      box-shadow: 0px 1px 0px 0px rgb(214, 213, 213);
      text-decoration: none;
      display: block;

      .list_title {
        float: left;
        height: 20px;
        margin-left: 10px;
        padding-top: 10px;
      }

      .list_date {
          float: right;
          padding-top: 10px;
          margin-right: 10px;
      }
    }
    .list_page {
        margin-top: 10px;
        margin-left: 20px;
    }
  }
</style>
