<template>
  <div id="post-info" class="container">
    <div class="nav-crummb">
      <i class="el-icon-d-arrow-left"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">经验心得</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title-wrap">
      <h1>{{ title }} -- {{ id }}</h1>
      <div class="news-info">
        <span class="date"><i class="el-icon-date"></i> {{ date }}</span>
        <span class="orgin"><i class="el-icon-edit-outline"></i> {{ orgin }}</span>
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
      title: '愿你经历考研，觉得人间值得',
      date: '2020年10月29日',
      orgin: '中国研究生招生信息网',
      content: `<p>宿舍里常常深夜卧谈的话题，从“我也想考研”到“我觉得我到时候也考不上”、“我考不上怎么办”... ...</p><p>从预报名开始，一批批的“考研焦虑症患者”随着考试临近，病情也加重了。有些同学在经历了前两阶段的复习后，发现学习效果并不理想，学习效率也很差。</p><p>我怎么办？我要去哪儿？我还要不要考研？每天灵魂三问。</p>`
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.id = this.$route.params.id
  },
  methods: {}
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
