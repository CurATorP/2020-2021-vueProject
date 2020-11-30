<template>
  <div id="dblist">
    <div class="dblist_contents">
      <ul>
        <div v-for="(item, index) in contents" :key="index" class="dblist_col">
          <span>
            <router-link :to="item.url">
              <i class="el-icon-document"></i>
              <div class="dblist_title">{{ item.title }}</div>
              <div class="dblist_date">{{ item.date }}</div>
            </router-link>
          </span>
        </div>
      </ul>
    </div>
    <div class="dblist_page">
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
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }, {
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }, {
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }, {
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }, {
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }, {
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }, {
          title: 'Wonderful Tonight',
          date: '2020-11-16',
          url: '/article'
        }]
      }
    }
  }

</script>

<style lang="scss">
  #dblist {
    float: left;
    width: 780px;
    margin-left: 100px;
    margin-top: 50px;
    color: #606266;

    a:hover {
      color: #1787e0;
    }

    a {
      color: #606266;
    }

    .dblist_contents {
      margin-bottom: 50px;
    }

    .el-icon-document {
        position: absolute;
        left: 100px;
        clear: both;
     
    }

    .dblist_col {
      margin: 1px;
      padding-top: 40px;
      height: 60px;
      box-shadow: 0px 1px 0px 0px rgb(214, 213, 213);
      text-decoration: none;
      display: block;
      font-size: 40px;

      .dblist_title {
        
        position: absolute;
        left: 160px;
        overflow: hidden;
        font-size: 20px;
        height: 40px;
      }

      .dblist_date {
        position: absolute;
        font-size: 10px;
        left: 160px;
        margin-top: 25px;
      }
    }

    .dblist_page {
      margin-top: 10px;
      margin-left: 20px;
    }
  }

</style>
