<template>
  <div class="resume">
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
          title: '学校领导',
          content: '现任校领导'
        },
        {
          id: '2',
          title: '学校简介',
          content: '岷峨挺秀，锦水含章。巍巍学府，德渥群芳。四川大学是教育部直属全国重点大学，是国家布局在中国西部的重点建设的高水平研究型综合大学。四川大学地处中国历史文化名城——“天府之国”的成都，有望江、华西和江安三个校区，占地面积7050亩，校舍建筑面积256.3万平方米。校园环境幽雅、花木繁茂、碧草如茵、景色宜人，是读书治学的理想园地。四川大学由原四川大学、原成都科技大学、原华西医科大学三所全国重点大学经过两次合并而成。原四川大学起始于1896年四川总督鹿传霖奉光绪特旨创办的四川中西学堂，是西南地区最早的近代高等学校；原成都科技大学是新中国院系调整时组建的第一批多科型工科院校；原华西医科大学源于1910年由西方基督教会组织在成都创办的华西协合大学，是西南地区最早的西式大学和国内最早培养研究生的大学之一。1994年，原四川大学和原成都科技大学合并为四川联合大学，1998年更名为四川大学，江泽民、李鹏等党和国家领导人就两校合并为学校题词并寄予深切厚望。2000年，四川大学与原华西医科大学合并，组建了新的四川大学。李岚清同志在考察新四川大学时说：“四川大学是我们改革最早的大学，对我国高校的改革做出了历史性的贡献，可以说是高校体制改革的先锋。”在2008年“5·12”汶川特大地震抗震救灾期间，吴邦国、温家宝等党和国家领导人先后到四川大学视察慰问。2016年，李克强总理来校视察，勉励川大要为全国“双创”带头，多出世界一流学科。'
        },
        {
          id: '3',
          title: '周边环境',
          content: '四川大学地处中国历史文化名城—“天府之国”的成都市区。学校设望江、华西校区和江安新校区，占地面积7050亩，校舍建筑面积246万余平方米。校园环境幽雅、花木繁茂、碧草如茵、景色宜人，是读书治学的理想园地。'
        }
      ]
    }
  },
  computed: {},
  watch: {
    code () {
      this.getResume()
    }
  },
  created () {},
  mounted () {
    this.getResume()
  },
  methods: {
    async getResume () {
      let { code, data, message } = await this.$axios.$get('/api/school/resume', {
        params: {
          code: this.code
          // code: 10610
        }
      })
      if (!code) {
        this.info[0].content = data.leader
        this.info[1].content = data.resume
        this.info[2].content = data.surround
        // this.$loading = true
      } else {
        this.$message({ type: 'error', message })
      }
    }
  }
}
</script>

<style lang='scss'></style>
