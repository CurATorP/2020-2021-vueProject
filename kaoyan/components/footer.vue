<template>
  <div id="foorter">
    <div class="footer-left">

      <ul class="youqin">
        <li v-for="(item, index) in youqin" :key="index">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>

      <div class="copy">
        <p>主办单位：<a :href="zhuban.url">{{ zhuban.name }}</a></p>
        <p>{{ copyright }}</p>
      </div>
      <div class="beian">
        <p><a :href="beian.url">{{ beian.name }}</a></p>
      </div>

    </div>
    <div class="footer-right">
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
    data() {
      return {
        youqin: [{
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
          url: 'http://www.bing.com/'
        },
        copyright: '@2020-2030 18求知班',
        beian: {
          name: '蜀ICP备12304913号',
          url: 'http://www.bing.com/'
        },
        contact: {
          name: '官方微信',
          path: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4135206150,3955481514&fm=26&gp=0.jpg'
        },
        kefu: '客服邮箱：954279410@qq.com'
      }
    }
  }

</script>

<style lang='scss'>
  #foorter {
    display: flex;
    background: #282828;
    color: #ababab;
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    font-size: 14px;
    height: 198px;
    bottom: 0;
    left: 0;
    right: 0;

    .footer-left {
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

    .footer-right {
      flex-grow: 5;
      
      .weixin {
        position: fixed;
        right: 120px;
        img {
          height: 80px;
          width: 80px;
        }

        p {
          width: 80px;
          text-align: center;
        }
      }

      .kefu {
        margin-top: 10px;
        position: fixed;
        right: 120px;
        bottom: 55px;
      }
    }
  }

</style>
