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
        <ul class="list-con">
          <li v-for="item in list" :key="item.id">
            <router-link :to="item.url">{{ item.name }}</router-link>
            <span class="date">{{ item.date }}</span>
          </li>
        </ul>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="page.page" :page-size="20" layout="prev, pager, next, jumper" :total="page.total"></el-pagination>
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
        page: 1,
        total: 100
      },
      list: [
        {
          id: '1231',
          name: '愿你经历考研，觉得人间值得',
          url: '',
          date: '2020-10-29'
        }, {
          id: '1212a31',
          name: '送你一张时间表，为暑假考研助力！',
          url: '',
          date: '2020-10-29'
        }, {
          id: '1231231',
          name: '考研是场马拉松，抓住复习“黄金期”',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312asd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312aasd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312asdfsfsd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '123dfsd12asd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312as474d31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312sdasd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312asxbd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312azxsd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312a123sd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312a123000sd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312a18823sd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }, {
          id: '12312a177723sd31',
          name: '考研碰上疫情，复试怎么办',
          url: '',
          date: '2020-10-29'
        }
      ]
    }
  },
  mounted () {},
  methods: {
    handleCurrentChange (page) {
      console.log(page)
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
