<template>
  <div id="list-page" class="container">
    <div class="nav-crummb">
      <i class="el-icon-d-arrow-left"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">经验心得</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="wrap-con">
      <div class="wrap-list">
        <ul class="list-con" v-loading="loading">
          <li v-for="item in list" :key="item.id">
            <nuxt-link :to="'/post/' + $route.query.type + '?id=' + item.id" target="_blank">{{ item.title }}</nuxt-link>
            <span class="date">{{ item.date }}</span>
          </li>
        </ul>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="page.page" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total"></el-pagination>
      </div>
      <div class="side-con">
        <News title="考研新闻" />
        <News title="国家政策" />
        <News title="国家政策" />
        <News title="国家政策" />
      </div>
    </section>
  </div>
</template>

<script>
import News from '@/components/Box/news'
export default {
  components: {
    News
  },
  data () {
    return {
      page: {
        size: 1,
        page: 1,
        total: 0
      },
      list: []
      // loading: false
    }
  },
  mounted () {
    this.handleCurrentChange()
    this.getPost()
  },
  methods: {
    handleCurrentChange (page) {
      console.log(page)
      this.getPost()
    },
    async getPost () {
      this.loading = true
      let { code, data, message } = await this.$axios.$get('/api/list', {
        params: {
          type: this.$route.query.type,
          page: this.page.page,
          limit: this.page.size,
          total: this.page.total
        }
      })
      this.loading = false
      // console.log(code, data, message)
      if (!code) {
        this.list = data.list
        this.page.total = data.total
      } else {
        this.list = []
        this.page.total = 0
        this.$message({ type: 'error', message })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  #list-page {
    .wrap-con {
      display: flex;
      .wrap-list {
        width: 68%;
        box-sizing: border-box;
        padding: 0 25px;
      }
      .side-con {
        width: 32%;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
  }
</style>
