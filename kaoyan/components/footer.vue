<template>
  <div id="foorter">
    <div class="foot-left">
      <ul class="youqin">
        <li v-for="(item, index) in youqin" :key="index">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="copy">
        <p>主办单位: <a :href="zhuban.url">{{ zhuban.name }}</a></p>
        <p>{{ copyright }}</p>
        <p><a :href="beian.url">{{ beian.name }}</a></p>
      </div>
    </div>
    <div class="foot-right">
      <div class="weixin">
        <img :src="contact.path" alt="">
        <p>{{ contact.name }}</p>
      </div>
      <p class="kefu">{{ kefu }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      youqin: [
        {
          name: '百度',
          url: ''
        },
        {
          name: 'ElmentUI',
          url: 'https://element.eleme.cn/#/zh-CN'
        },
        {
          name: 'NuxtJs',
          url: 'https://zh.nuxtjs.org/'
        }
      ],
      zhuban: {
        name: '18级求知工程项目实践班',
        url: ''
      },
      copyright: '@2020-2030 18求知班',
      beian: {
        name: '蜀ICP备12304913号',
        url: ''
      },
      contact: {
        name: '官方微信',
        path: '/images/nuxtjs.png'
      },
      kefu: '客服邮箱：18jiu@zhi.com.cn'
    }
  }
}
</script>

<style lang='scss'>
#foorter {
  height: 160px;
  background: #282828;
  color: #ababab;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 50px;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
  .foot-left {
    flex-grow: 6;
    margin-left: 100px;
    a {
      color: #ababab;
      &:hover {
        text-decoration: underline;
      }
    }
    .youqin {
      display: flex;
      margin-bottom: 15px;
      li {
        margin-right: 20px;
      }
    }
    .copy {
      p {
        margin-bottom: 15px;
      }
    }
  }
  .foot-right {
    flex-grow: 5;
    .weixin {
      img {
        width: 80px;
        height: 80px;
      }
      p {
        width: 80px;
        text-align: center;
      }
    }
    .kefu {
      margin-top: 10px;
    }
  }
}
</style>
