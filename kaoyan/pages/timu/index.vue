<template>
  <div id="timu-page" class="container">
    <div class="nav-crummb">
      <i class="el-icon-d-arrow-left"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">考研资料</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="cate-wrap">
      <ul class="cate">
        <li @click="handleSelect('cate', item)" v-for="item in catelist" :class="{ 'sel': item.code === selcate }" :key="item.id">{{ item.name }}</li>
      </ul>
      <ul class="type">
        <li @click="handleSelect('type', item)" v-for="item in typelist" :class="{ 'sel': item.code === seltype }" :key="item.id">{{ item.name }}</li>
      </ul>
      <ul class="date">
        <li @click="handleSelect('date', item)" v-for="item in datelist" :class="{ 'sel': item.code === seldate }" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="content">
      <div class="left">
        <ul class="list-con">
          <li v-for="item in list" :key="item.id">
            <div>
              <i class="el-icon-document"></i>
              <router-link :to="item.url">{{ item.name }} <br /><span class="date">{{ item.date }}</span></router-link>
            </div>
            <p class="op">
              <el-tooltip v-if="isopen(item.url)" class="item" effect="dark" content="外链连接，点击跳转其他网站" placement="top">
                <i class="el-icon-warning-outline" title=""></i>
              </el-tooltip>
              <i class="el-icon-reading" v-else></i>
            </p>
          </li>
        </ul>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="page.page" :page-size="20" layout="prev, pager, next, jumper" :total="page.total"></el-pagination>
      </div>
      <div class="right">
        <News title="热门资料" />
      </div>
    </div>
  </div>
</template>

<script>
import News from '@/components/Box/news'
export default {
  components: { News },
  data () {
    return {
      catelist: [
        {
          id: '1',
          name: '全部',
          code: 'all'
        },
        {
          id: '2',
          name: '政治',
          code: 'zhengzhi'
        },
        {
          id: '3',
          name: '英语',
          code: 'yingyu'
        },
        {
          id: '4',
          name: '数学',
          code: 'shuxue'
        },
        {
          id: '5',
          name: '专业课',
          code: 'zhuanye'
        },
        {
          id: '6',
          name: '专业硕士',
          code: 'shuoshi'
        },
        {
          id: '7',
          name: '外语类/小语种',
          code: 'yuzhong'
        },
        {
          id: '8',
          name: '复试/面试',
          code: 'mianshi'
        },
        {
          id: '9',
          name: '四/六级',
          code: 'tec'
        }
      ],
      typelist: [
        {
          id: '0',
          name: '全部',
          code: 'all'
        },
        {
          id: '1',
          name: '讲义/笔记',
          code: 'jiangyi'
        },
        {
          id: '2',
          name: '专业课真题',
          code: 'zhuanyezhengti'
        },
        {
          id: '3',
          name: '试题/习题',
          code: 'shiti'
        },
        {
          id: '4',
          name: '复习备考',
          code: 'fuxi'
        },
        {
          id: '5',
          name: '考研大纲',
          code: 'dagang'
        },
        {
          id: '6',
          name: '招生报考',
          code: 'zhaosheng'
        },
        {
          id: '7',
          name: '统考真题',
          code: 'tongkao'
        },
        {
          id: '8',
          name: '独家资料',
          code: 'dujia'
        },
        {
          id: '9',
          name: '其它资料',
          code: 'qita'
        }
      ],
      datelist: [
        {
          id: '0',
          name: '全部',
          code: 'all'
        },
        {
          id: '1',
          name: '2021年',
          code: '2021'
        },
        {
          id: '2',
          name: '2020年',
          code: '2020'
        },
        {
          id: '3',
          name: '2019年',
          code: '2019'
        },
        {
          id: '4',
          name: '其他',
          code: '0'
        }
      ],
      selcate: 'all',
      seltype: 'all',
      seldate: 'all',
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
  computed: {},
  created () {},
  mounted () {},
  methods: {
    isopen (val) {
      return val.startsWith('http')
    },
    handleSelect (type, item) {
      switch (type) {
        case 'cate' : {
          this.selcate = item.code
          break
        }
        case 'type' : {
          this.seltype = item.code
          break
        }
        case 'date' : {
          this.seldate = item.code
          break
        }
        default : {
          break
        }
      }
    },
    handleCurrentChange (page) {
      console.log(page)
    }
  }
}
</script>

<style lang='scss'>
#timu-page {
  .cate-wrap {
    border: 1px solid rgb(199, 198, 198);
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    ul {
      margin: 20px 0;
      display: flex;
      border-left: 4px solid red;
      li {
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
        &.sel {
          background-color: #1787e0;
          color: #fff;
          border-radius: 2px;
        }
      }
    }
  }
  .content {
    display: flex;
    margin-top: 50px;
    .left {
      width: 68%;
      box-sizing: border-box;
      padding: 0 25px;
      li {
        line-height: 20px;
        height: 70px;
        align-items: center;
        div {
          display: flex;
          align-items: center;
        }
        a {
          margin-left: 10px;
          .date {
            font-size: 12px;
            color: rgb(192, 193, 194);
          }
        }
        .el-icon-document {
          font-size: 34px;
        }
      }
    }
    .right {
      width: 32%;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
}

</style>
