<template>
  <div id="post-info" class="container">
    <div class="nav-crummb">
      <i class="el-icon-d-arrow-left"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">经验心得</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title-wrap" v-loading="loading">
      <h1>{{ title }}</h1>
      <div class="news-info">
        <span class="date"><i class="el-icon-date"></i> {{ date }}</span>
        <span class="orgin"><i class="el-icon-edit-outline"></i> {{ origin }}</span>
      </div>
    </div>
    <div class="content-wrap">
      <section id="content" v-html="content"></section>
      <div class="side-con">
        <News title="考研新闻" />
      </div>
    </div>
  </div>
</template>

<script>
import News from '@/components/Box/news'
export default {
  validate ({ params }) {
    // 检查不能为空，否则跳转404页面
    return params.id
  },
  asyncData ({ params }) {
    // TODO 网络请求
  },
  components: {
    News
  },
  data () {
    return {
      id: '',
      title: '',
      date: '',
      origin: '',
      content: ``,
      loading : false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.id = this.$route.params.id
    this.getDetail()
  },
  methods: {
    async getDetail(){
      this.loading = true
      let {code , data,message} = await this.$axios.$get('/api/detail',{
        params: {
          id: this.$route.query.id
        }
      })
      this.loading = false
      if(!code) {
        this.id = data.id
        this.title = data.title
        this.date = data.date
        this.origin = data.origin
        this.content = data.content
      }else{
        this.$message({
            type: 'error',
            message
        })
      }
    }
  }
}
</script>

<style lang='scss'>
  .content-wrap {
    display: flex;
    #content {
      width: 68%;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .side-con {
      width: 32%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
  .news-info {
    border-bottom: 1px solid #ddd;
    margin: 30px 0;
    padding-bottom: 10px;
    span {
      margin-right: 10px;
      line-height: 30px;
      color: #999;
    }
  }
</style>
