<template>
  <div class="module-part">
    <div class="part-head">
      <h3 class="part-title">
        <i class="el-icon-edit"></i>
        {{ title }}
      </h3>
      <div class="part-right">
        <ul>
          <li v-for="item in partright" :key="item.name">
            <router-link :to="item.url">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="part-content">
      <div class="content-item">
        <div class="con-title">
          <h4>{{ content.title }}</h4>
          <a href="#" class="more" v-if="content.list.length > 10">更多
            <i class="el-icon-plus"> </i>
          </a>
        </div>
        <ul class="con-list">
          <li v-for="item in content.list" :key="item.id">
            <a :href="item.url" target="_blank">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="content-item number">
        <div class="con-title">
          <h4>{{ content.title }}</h4>
        </div>
        <ul class="con-list">
          <li v-for="item in content.list" :key="item.id">
            <a :href="item.url" target="_blank">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="content-item cate">
        <div class="con-title">
          <h4>{{ content.title }}</h4>
          <a href="#" class="more" v-if="content.list.length > 10">更多
            <i class="el-icon-plus"> </i>
          </a>
        </div>
        <ul class="con-list">
          <li v-for="item in content.list" :key="item.id">
            <span class="cate-item">数学</span>
            <a :href="item.url" target="_blank">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        title: '学习资料',
        partright: [{
            name: '专业课',
            url: ''
          },
          {
            name: '数学',
            url: ''
          },
          {
            name: '英语',
            url: ''
          },
          {
            name: '政治',
            url: ''
          }
        ],
        content: {
          title: '经验交流',
          list: [{
              id: '1231',
              name: 'xxxx',
              url: ''
            },
            {
              id: '12311',
              name: 'xxxx',
              url: ''
            },
            {
              id: '123111',
              name: 'xxxx',
              url: ''
            },
            {
              id: '1231111',
              name: 'xxxx',
              url: ''
            },
            {
              id: '123111111',
              name: 'xxxx',
              url: ''
            },
            {
              id: '1231111111',
              name: 'xxxx',
              url: ''
            }
          ]
        }
      }
    },
    computed: {},
    watch: {},
    created() {},
    methods: {}
  }

</script>

<style lang='scss'>
    
  .module-part {
      position: relative;
    .part-head {
      height: 60px;
      line-height: 60px;
      display: flex;
      left: 100px;
      border-bottom: 3px solid #1787e0;
      margin-bottom: 20px;

      .part-title {
        flex-grow: 5;
        font-size: 26px;
        left: 100px;
        i {
          margin-right: 15px;
        }
      }

      .part-right {
        position: relative;
        right: 100px;
        width: 810px;
        float: right;

        height: 56px;
        // flex-grow: 5;
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
    position: relative;
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
        font-size: 14px;
        margin-bottom: 20px;
      }
    }

    &.number {
      .con-list li {
        background-image: url("/images/num.png");
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
