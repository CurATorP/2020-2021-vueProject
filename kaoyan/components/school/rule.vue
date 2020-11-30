<template>
  <div class="rule">
    <div v-for="item in info" :key="item.id" class="show-item">
      <h4 class="title">{{ item.title }}</h4>
      <div class="content" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
      info: [
        {
          id: '1',
          title: '录取政策',
          content: '详见电子科技大学研招网http://yz.uestc.edu.cn'
        },
        {
          id: '2',
          title: '跨专业实施办法',
          content: ''
        },
        {
          id: '3',
          title: '其它',
          content: ''
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
  // @import url(); 引入公共css类
</style>
