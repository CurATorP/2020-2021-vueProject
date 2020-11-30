<template>
  <div class="faculty">
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
          title: '院系设置',
          content: '请查点击链接（四川大学研究生招生单位及联系方式）看详细情况'
        },
        {
          id: '2',
          title: '重点实验室',
          content: '.'
        },
        {
          id: '3',
          title: '重点学科',
          content: ''
        },
        {
          id: '4',
          title: '可授予的学位',
          content: ''
        },
        {
          id: '5',
          title: '师资力量',
          content: ''
        },
        {
          id: '6',
          title: '学生人数',
          content: ''
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
  // @import url(); 引入公共css类
</style>
