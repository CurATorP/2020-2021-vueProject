<template>
  <div id="header">
    <Addr />
    <ul>
      <li v-for="(item, index) in navlist" :key="index">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Addr from '@/components/Addr'
export default {
  components: {
    Addr
  },
  data () {
    return {
      navlist: [
        {
          name: '首页',
          url: '/'
        },
        {
          name: '考研资料',
          url: '/timu'
        },
        {
          name: '院校分析',
          url: '/school'
        },
        {
          name: '成都学院',
          url: '/cduestc'
        },
        {
          name: '考研圈',
          url: '/bbs'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
#header {
  height: 50px;
  line-height: 50px;
  background: #1787e0;
  color: #fff;
  ul {
    display: flex;
    width: 100%;
    font-size: 14px;
    justify-content: center;
    a {
      color: #fff;
      padding: 0 15px;
      display: block;
      &:hover {
        background: #1271BC;
      }
    }
  }
}
</style>
