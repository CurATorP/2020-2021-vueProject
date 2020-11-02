<template>
  <div id="foorter">
    <div class="foot-left">
      <ul class="youqin">
        <li v-for="(item, index) in youqin" :key="index">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="copy">
        <p>主办单位<a :href="zhuban.url">{{ zhuban.name }}</a></p>
        <p>{{ copyright }}</p>
        
      </div>
      <div class="beian">
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
          url: ''
        },
        copyright: '@2020-2030 18求知班',
        beian: {
          name: '蜀ICP备12304913号',
          url: ''
        },
        contact: {
          name: '官方微信',
          path: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4135206150,3955481514&fm=26&gp=0.jpg'
        },
        kefu: '客服邮箱：18jiu@zhi.com.cn'
      }
    }
  }

</script>

<style lang='scss'>
  #foorter {
    height: 200px;
    background: #282828;
    color: #ababab;
    
    a {
      color: #ababab;
      padding: 0 5px;
      display: block;

      &:hover {
        text-decoration: underline;
      }
    }
  }
.youqin{
    height: 30px;
    width: 100%;
    margin-top: 30px;
    margin-left: 40px;
    font-size: 14px;
    justify-content: center;
  li{
      display:inline-flex;
  } 
}


  .foot-left {
    float: left;
  }

  .foot-right {
    float: right;

    img {
      height: 100px;
    }
  }

</style>
