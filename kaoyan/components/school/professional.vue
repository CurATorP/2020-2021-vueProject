<template>
  <div class="professional">
    <div v-for="item in info" :key="item.id" class="show-item">
      <h4 class="title">{{ item.title }}</h4>
      <div class="content">
        <p class="cate-ti">
          <span @click="item.current = obj.name" :class="{ 'sel': obj.name === item.current }" v-for="obj in item.content" :key="obj.id + obj.name">{{ obj.name }}</span>
        </p>
        <ul class="cate-con-list">
          <li v-for="m in currentlist(item)" :key="m">{{ m }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: [String],
      required: true
    }
  },
  components: {},
  data () {
    return {
      info: [
        {
          id: '1',
          title: '硕士专业',
          content: [
            {
              id: '123',
              name: '农学',
              list: ['农药学[090403]', '园林植物与观赏园艺[090706]', '水土保持与荒漠化防治[090707]', '粮食、油脂及植物蛋白工程[097202]', '农产品加工及贮藏工程[097203]', '水产品加工及贮藏工程[097204]']
            },
            {
              id: '1234',
              name: '教育学',
              list: ['高等教育学[040106]', '应用心理学[040203]', '体育人文社会学[040301]', '运动人体科学[040302]', '体育教育训练学[040303]', '民族传统体育学[040304]']
            },
            {
              id: '12345',
              name: '文学',
              list: ['文艺学[050101]', '语言学及应用语言学[050102]', '汉语言文字学[050103]', '中国古典文献学[050104]', '中国古代文学[050105]', '中国现当代文学[050106]', '中国少数民族语言文学[050107]', '比较文学与世界文学[050108]', '文艺与传媒[050120]']
            }
          ],
          current: '农学'
        },
        {
          id: '2',
          title: '博士专业',
          content: [
            {
              id: '123',
              name: '农学',
              list: ['植物病理学[090401]', '农业昆虫与害虫防治[090402]', '农药学[090403]']
            },
            {
              id: '1234',
              name: '艺术学',
              list: ['艺术学理论[130100]', '美术学[130400]', '设计学[130500]']
            }
          ],
          current: '艺术学'
        }
      ]
    }
  },
  watch: {
    code: {
      handler (newVal, oldVal) {
        this.getInfo()
      },
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    currentlist (item) {
      const arr = item.content.filter(n => n.name === item.current)
      return (arr.length && arr[0].list) ? arr[0].list : []
    },
    async getInfo () {
      // this.loading = true
      let { code, data, message } = await this.$axios.$get('/api/faculty/info', {
        params: {
          code: this.code
        }
      })
      if (!code) {
        let boshiStr = data.filter(item => item.protype === 1).map(item => {
          return {
            id: Math.floor(Math.random() * 1000 + 1000),
            name: item.fenyuan,
            list: item.professional.split(',')
          }
        })
        let shuoshiStr = data.filter(item => item.protype === 0).map(item => {
          return {
            id: Math.floor(Math.random() * 1000 + 1000),
            name: item.fenyuan,
            list: item.professional.split(',')
          }
        })
        // console.log(str)
        this.info[0].content = shuoshiStr
        this.info[1].content = boshiStr
        this.info[1].current = boshiStr.length ? boshiStr[0].name : ''
        this.info[0].current = shuoshiStr.length ? shuoshiStr[0].name : ''
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
  .professional {
    .content {
      text-indent: 0;
      .cate-ti {
        padding: 5px;
        height: 40px;
        line-height: 40px;
        span {
          margin: 0 5px;
          padding: 5px 10px;
          &.sel {
            border-bottom: 2px solid #1787e0;
            color: #1787e0;
          }
        }
      }
      .cate-con-list {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        background-color: #f7f9fa;
        border-radius: 4px;
        margin-top: 20px;
        li {
          width: 24%;
          padding: 5px 0;
          font-size: 14px;
        }
      }
    }
  }
</style>
