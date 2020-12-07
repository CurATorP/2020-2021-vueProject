<template>
  <div class="box-card">
    <h3 class="title">{{ title }}</h3>
    <ul class="list-item">
      <li @mousemove="handleMousemove($event)" v-for="item in list" :key="item.id">
        <router-link :to="'/post/'+item.type+'?id='+item.id" target="_blank">{{ item.title }}</router-link>
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
    },
    type: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
      list: []
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.getPost()
  },
  methods: {
    handleMousemove (e) {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      e.target.style.setProperty('--x', `${x}px`)
      e.target.style.setProperty('--y', `${y}px`)
    },
    async getPost () {
      this.loading = true
      let { code, data, message } = await this.$axios.$get('/api/list', {
        params: {
          type: this.type,
          page: 1,
          limit: 5
        }
      })
      this.loading = false
      if (!code) {
        this.list = data.list
      } else {
        this.list = []
        this.$message({ type: 'error', message })
      }
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
