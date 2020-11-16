<template>
  <div id="header">
    <ul>
      <li v-for="(item, index) in navlist" :key="index">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Address from '@/components/Address'
export default {
  components: {
    Address
  },
  data () {
    return {
      navlist: [
        {
          name: '考研资料',
          url: 'https://www.baidu.com'
        },
        {
          name: '院校分析',
          url: ''
        },
        {
          name: '成都学院',
          url: 'http://www.cduestc.cn/'
        },
        {
          name: '考研圈',
          url: ''
        },
        {
            name: 'ceshi',
            url: 'http://www.bing.com/'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
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
    li {
      width: 100px;
      text-align: center;
    }
    a {
      color: #fff;
      padding: 0 5px;
      display: block;
      &:hover {
        background: #1271BC;
      }
    }
  }
}
</style>