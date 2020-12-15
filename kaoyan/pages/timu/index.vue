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
              <router-link :to="'/post/'+item.id+'?&type=timu&id='+ item.id">{{ item.title }} <br /><span class="date">{{ item.date }}</span></router-link>
            </div>
            <p class="op">
              <el-tooltip v-if="isopen(item.url)" class="item" effect="dark" content="外链连接，点击跳转其他网站" placement="top">
                <i class="el-icon-warning-outline" title=""></i>
              </el-tooltip>
              <i class="el-icon-reading" v-else></i>
            </p>
          </li>
        </ul>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="page.page" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total"></el-pagination>
      </div>
      <div class="right">
        <!-- <News title="热门资料"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import News from '@/components/Box/news'
import axios from 'axios'
export default {
  components: { News },
  data () {
    return {
      catelist: [
        {
          id: '1',
          name: '全部',
          code: ''
        },
        {
          id: '2',
          name: '政治',
          code: '政治'
        },
        {
          id: '3',
          name: '英语',
          code: '英语'
        },
        {
          id: '4',
          name: '数学',
          code: '数学'
        },
        {
          id: '5',
          name: '专业课',
          code: '专业课'
        },
        {
          id: '6',
          name: '专业硕士',
          code: '专业硕士'
        },
        {
          id: '7',
          name: '外语类/小语种',
          code: '外语类/小语种'
        },
        {
          id: '8',
          name: '复试/面试',
          code: '复试/面试'
        },
        {
          id: '9',
          name: '四/六级',
          code: '四/六级'
        }
      ],
      typelist: [
        {
          id: '0',
          name: '全部',
          code: ''
        },
        {
          id: '1',
          name: '讲义/笔记',
          code: '讲义/笔记'
        },
        {
          id: '2',
          name: '专业课真题',
          code: '专业课真题'
        },
        {
          id: '3',
          name: '试题/习题',
          code: '试题/习题'
        },
        {
          id: '4',
          name: '复习备考',
          code: '复习备考'
        },
        {
          id: '5',
          name: '考研大纲',
          code: '考研大纲'
        },
        {
          id: '6',
          name: '招生报考',
          code: '招生报考'
        },
        {
          id: '7',
          name: '统考真题',
          code: '统考真题'
        },
        {
          id: '8',
          name: '独家资料',
          code: '独家资料'
        },
        {
          id: '9',
          name: '其它资料',
          code: '其它资料'
        }
      ],
      datelist: [
        {
          id: '0',
          name: '全部',
          code: ''
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
        }
        
      ],
      selcate: '',
      seltype: '',
      seldate: '',
      page: {
        page: 1,
        total: 100,
        size: 5
      },
      list: []
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.getList()
  },
  methods: {
    isopen (val) {
      return val ? val.startsWith('http') : false
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
      this.getList()
    },
    handleCurrentChange (page) {
      console.log(page)
      this.getList()
    },
    async getList(){
      let { code, data, message } = await this.$axios.$get('/api/material/list',{
        params : {
          subject : this.selcate,
          type : this.seltype,
          year : this.seldate,
          page : this.page.page,
          limit : this.page.size
        }
      })
      console.log( code, data, message )
      if(!code){
        this.list = data.list
        this.page.total = data.total
      }else{
        this.list = []
        this.page.total = 0
        this.$message({type: 'error',message})
      }
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
