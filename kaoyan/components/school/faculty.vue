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
    code: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    // loading: false
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
  watch: {
    code: {
      handler (newVal, oldVal) {
        this.getInfo()
      },
      immediate: true
    }
  },
  created () {},
  methods: {
    async getInfo () {
      // this.loading = true
      let { code, data, message } = await this.$axios.$get('/api/faculty/info', {
        params: {
          code: this.code
        }
      })
      if (!code) {
        this.info[0].content = data.map(item => item.fenyuan).join(',')
        this.info[1].content = data.map(item => item.laboratory).join(',')
        this.info[2].content = data.map(item => item.discipline).join(',')
        this.info[3].content = data.map(item => item.degree).join(',')
        // this.info[4].content = data.map(item => item.fenyuan).join(',') //师资力量
        // this.info[5].content = data.map(item => item.fenyuan).join(',')//学生人数
        // this.info[1].content = data.laboratory
        // this.info[2].content = data.surround
      } else {
        this.$message({ type: 'error', message })
      }
      // this.loading = false
    }
  }
}
</script>

<style lang='scss' scoped>
  // @import url(); 引入公共css类
</style>
