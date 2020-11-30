<template>
  <div class="box-card">
    <h3 class="title">{{ title }}</h3>
    <ul class="list-item">
      <li @mousemove="handleMousemove($event)" v-for="item in list" :key="item.id">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
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
        }
      ]
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    handleMousemove (e) {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      e.target.style.setProperty('--x', `${x}px`)
      e.target.style.setProperty('--y', `${y}px`)
    }
  }
}
</script>

<style lang='scss'>
  .box-card {
    margin-bottom: 20px;
    .list-item {
      border: 1px solid #f0f0f0;
      padding: 10px;
      font-size: 14px;
      li {
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        overflow: hidden;
        appearance: none;
        a {
          display: block;
          position: relative;
          padding: 0 10px;
          &:before {
            content: '';
            position: absolute;
            left: var(--x);
            top: var(--y);
            width: var(--size);
            height: var(--size);
            background: radial-gradient(circle closest-side, #1787e0, transparent);
            transform: translate(-50%, -50%);
            transition: width .2s ease, height .2s ease;
            z-index: -1;
          }
          &:hover {
            color: #fff;
          }
          &:hover:before {
            --size: 300px;
          }
        }
      }
    }
    .title {
      box-sizing: border-box;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      padding-left: 10px;
      background-color: #f0f0f0;
      border-left: 5px solid #1787e0;
    }
  }
</style>
