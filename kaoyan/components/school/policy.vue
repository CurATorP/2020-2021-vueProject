<template>
  <div class="policy">
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
          title: '调剂政策',
          content: '<p>电子科技大学2020年硕士研究生招生调剂接收相关政策</p><p>&nbsp; &nbsp; &nbsp; &nbsp;1. 考生调剂基本条件：<br>&nbsp; &nbsp; &nbsp;（1）调入专业与第一志愿报考专业相同或相近；符合调入专业的报考条件。<br>&nbsp; &nbsp; &nbsp;（2）考生初试成绩达到第一志愿报考专业对应国家一区复试分数线，并且达到申请调入专业对应的学院复试分数线。<br>&nbsp; &nbsp; &nbsp;（3）初试科目与调入专业初试科目相同或相近，其中统考科目原则上应当相同。统考科目专业可申请调剂对应自命题科目专业；统考数学一专业可申请调剂统考数学二、统考数学三等（理学自命题数学可视为统考数学一），以此类推，反之不能申请调剂。<br>&nbsp; &nbsp; &nbsp;（4）符合调入学院提出的其他相关要求。<br>&nbsp; &nbsp; &nbsp; &nbsp;2. 我校2020年硕士研究生一志愿上线生源总体充足，生源饱和的专业不接收调剂。少数生源不饱和的专业可接收调剂，接收调剂生源的学院按照有关要求制定调剂工作办法，并通过学院官方网站和我校研究生招生网等渠道公布，请考生关注有关通知。强军计划、少数民族高层次骨干人才计划、退役大学生士兵计划不接收调剂。<br>&nbsp; &nbsp; &nbsp; &nbsp;3. 复试合格且已经拟录取的考生原则上不能再调剂到其他院校。考生复试成绩原则上校内学院可以互认，学院另有要求的按学院要求执行。<br>&nbsp; &nbsp; &nbsp; &nbsp;4. 调剂申请需通过 “全国硕士研究生招生调剂服务系统”（ yz.chsi.com.cn/yztj） 和“电子科技大学研究生招生管理信息系统”完成，不接受电话、邮件、来人来函等其他方式申请。考生调剂录取后需通过“全国硕士生招生调剂服务系统”最终确认录取到我校。<br>&nbsp; &nbsp; &nbsp; &nbsp;5. 以上要求以教育部最终公布文件为准，如调剂不符合教育部文件要求，则复试成绩无效。</p>'
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
