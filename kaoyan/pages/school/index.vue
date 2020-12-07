<template>
  <div class="sch-list-page container">
    <div class="sch-wrap">
      <ul class="schlist">
        <li @click="handleSelSch(item)" :class="{'sel': currentsch === item.school}" v-for="item in school" :key="item.id"><i class="el-icon-s-home" v-if="currentsch === item.school"></i>{{ item.school }}</li>
      </ul>
    </div>
    <div class="sch-resume">
      <p class="title"><span>院校概况</span></p>
      <div class="resume-item">
        <a :class="{ 'sel': item.code === currentModel }" v-for="item in infolist" :key="item.id" @click="currentModel = item.code" href="javascript:void(0);">{{ item.name }}</a>
      </div>
    </div>
    <div v-if="school.length" class="resume-content">
      <component :is="currentModel" :code="school.filter(item => item.school === currentsch)[0]['code']"></component>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import resume from '@/components/school/resume'
import faculty from '@/components/school/faculty'
import professional from '@/components/school/professional'
import rule from '@/components/school/rule'
import policy from '@/components/school/policy'

export default {
  async asyncData () {
    let result = await axios.get('http://127.0.0.1:3000/api/school/list')
    console.log(result.data)
    if (!result.data.code) {
      return { school: result.data.data }
    } else {
      return { school: [] }
    }
  },
  components: {
    resume, faculty, professional, rule, policy
  },
  data () {
    return {
      currentsch: '四川大学',
      school: [
        {
          id: '10610',
          name: '四川大学',
          url: ''
        }, {
          id: '12a3',
          name: '西南交通大学',
          url: ''
        }, {
          id: '12qwe3',
          name: '电子科技大学',
          url: ''
        }, {
          id: '123g',
          name: '西南石油大学',
          url: ''
        }, {
          id: '12a3g',
          name: '成都理工大学',
          url: ''
        }, {
          id: '12k3g',
          name: '西南科技大学',
          url: ''
        }, {
          id: '12kad3g',
          name: '成都信息工程大学',
          url: ''
        }, {
          id: '12k3hjg',
          name: '四川轻化工大学',
          url: ''
        }
      ],
      infolist: [
        {
          id: '1',
          name: '院校介绍',
          code: 'resume'
        },
        {
          id: '2',
          name: '院系设置',
          code: 'faculty'
        },
        {
          id: '3',
          name: '专业介绍',
          code: 'professional'
        },
        {
          id: '4',
          name: '录取规则',
          code: 'rule'
        },
        {
          id: '5',
          name: '调剂政策',
          code: 'policy'
        }
      ],
      currentModel: 'resume'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleSelSch (item) {
      this.currentsch = item.school
    }
  }
}
</script>

<style lang='scss'>
  .sch-list-page {
    .sch-wrap {
      margin: 40px 0 50px;
      .schlist {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        li {
          margin: 5px 10px;
          color: #757474;
          &.sel {
            color: #1787e0;
            padding: 5px 10px;
            background: #fff;
            font-size: 20px;
            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
    .sch-resume {
      margin-bottom: 50px;
      .title {
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
        span {
          border-bottom: 3px solid #1787e0;
          padding-bottom: 12px;
          font-size: 24px;
        }
      }
      .resume-item {
        display: flex;
        justify-content: space-around;
        margin: 30px 0;
        a {
          padding: 5px 60px;
          border: 1px solid #1787e0;
          color: #1787e0;
          &:hover, &.sel {
            background-color: #e7f3fc;
          }
        }
      }
    }
  }
</style>
