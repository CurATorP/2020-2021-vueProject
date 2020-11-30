<template>
  <div class="model-part">
    <div class="part-head">
      <h3 class="part-title"><i class="el-icon-edit"></i>{{ title }}</h3>
      <div class="part-right">
        <ul>
          <li v-for="item in partright" :key="item.name">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="part-content">
      <div class="content-item" v-loading="jyjl.loading">
        <div class="con-title">
          <h4>经验交流</h4>
          <a href="#" class="more" v-if="jyjl.total > 2">更多<i class="el-icon-plus"></i></a>
        </div>
        <ul class="con-list">
          <li v-for="item in jyjl.list" :key="item.id">
            <nuxt-link :to="'/post/' + item.type + '?id=' + item.id" target="_blank">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="content-item number" v-loading="fsbk.loading">
        <div class="con-title">
          <h4>复试备考</h4>
          <a href="#" class="more" v-if="fsbk.total > 2">更多<i class="el-icon-plus"></i></a>
        </div>
        <ul class="con-list">
          <li v-for="item in fsbk.list" :key="item.id">
            <nuxt-link :to="'/post/' + item.type + '?id=' + item.id" target="_blank">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="content-item cate" v-loading="tjzn.loading">
        <div class="con-title">
          <h4>调剂指南</h4>
          <a href="#" class="more" v-if="tjzn.total > 2">更多<i class="el-icon-plus"></i></a>
        </div>
        <ul class="con-list">
          <li v-for="item in tjzn.list" :key="item.id">
            <span class="cate-item">数学</span>
            <nuxt-link :to="'/post/' + item.type + '?id=' + item.id" target="_blank">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: '备考指南',
      partright: [
        {
          name: '政治',
          url: ''
        },
        {
          name: '英语',
          url: ''
        },
        {
          name: '数学',
          url: ''
        },
        {
          name: '专业课',
          url: ''
        }
      ],
      jyjl: {
        list: [],
        total: 0,
        loading: false
      },
      fsbk: {
        list: [],
        total: 0,
        loading: false
      },
      tjzn: {
        list: [],
        total: 0,
        loading: false
      }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getPost('jyjl')
    this.getPost('fsbk')
    this.getPost('tjzn')
  },
  mounted () {
    
  },
  methods: {
    async getPost (type){
      this[type].loading = true
      let { code, data , message } = await this.$axios.$get('/api/list',{
        params :{ type }
      })
      this[type].loading = false
      console.log(code,data,message)
      if(!code){
        this[type].list = data.list
        this[type].total = data.total
      }else{
        this[type].list = []
        this[type].total = 0
        this.$message({ type:'error',message})
      }
    }
  }
}
</script>

<style lang='scss'>
.model-part {
  .part-head {
    height: 60px;
    line-height: 60px;
    display: flex;
    border-bottom: 3px solid #1787e0;
    margin-bottom: 20px;
    .part-title {
      flex-grow: 5;
      font-size: 26px;
      i {
        margin-right: 15px;
      }
    }
    .part-right {
      flex-grow: 5;
      ul {
        display: flex;
        flex-direction: row-reverse;
        li {
          margin: 0 10px;
          &:hover a {
            color: #1787e0;
          }
        }
      }
    }
  }
}
.part-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content-item {
  width: 380px;
  margin-bottom: 10px;
  min-height: 240px;
  .con-title {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    h4 {
      font-size: 20px;
      border-bottom: 1px solid #1787e0;
      margin-bottom: -1px;
      padding: 0 5px;
    }
    .more {
      flex-direction: row-reverse;
      font-size: 14px;
    }
  }
  .con-list {
    margin-top: 20px;
    li {
      height: 16px;
      line-height: 16px;
      font-size: 16px;
      margin-bottom: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      a {
        color: #1b1a1a;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &.number {
    .con-list li {
      background-image: url('/images/num.png');
      background-position: 0 0;
      background-repeat: no-repeat;
      padding-left: 32px;
      &:nth-child(2) {
        background-position: 0 -30px;
      }
      &:nth-child(3) {
        background-position: 0 -60px;
      }
      &:nth-child(4) {
        background-position: 0 -90px;
      }
      &:nth-child(5) {
        background-position: 0 -120px;
      }
      &:nth-child(6) {
        background-position: 0 -150px;
      }
      &:nth-child(7) {
        background-position: 0 -180px;
      }
      &:nth-child(8) {
        background-position: 0 -210px;
      }
      &:nth-child(9) {
        background-position: 0 -240px;
      }
      &:nth-child(10) {
        background-position: 0 -270px;
      }
    }
  }
  &.cate {
    .con-list .cate-item {
      margin-right: 8px;
      background-color: #ee6464;
      color: #fff;
      padding: 2px 2px;
      font-size: 12px;
    }
  }
}
</style>
