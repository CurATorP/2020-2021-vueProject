<template>
  <div class="addr-wrap">
    <h3>
      <i class="el-icon-location-outline"></i>
      {{ currentaddr }}
    </h3>
    <div class="other-addr">
      <ul>
        <li @click="handleChangeAddr(item)" v-for="item in addrlist" :key="item">
          <span :class="{'sel':item === currentaddr}">{{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addrlist: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东',
        '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '香港', '澳门', '台湾', '钓鱼岛', '海外'],
      currentaddr: '四川'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleChangeAddr (item) {
      this.currentaddr = item
    }
  }
}
</script>

<style lang='scss'>
.addr-wrap {
  position: relative;
  line-height: 20px;
  h3 {
    padding: 2px 5px;
    position: absolute;
    line-height: 24px;
    top: 0;
    left: 0;
    margin-top: 10px;
    // border: 1px solid #cccccc;
    z-index: 999;
    background: transparent;
  }
  &:hover .other-addr {
    display: block;
    z-index: 998;
  }
  &:hover h3 {
    border-bottom: none;
  }
  .other-addr {
    display: none;
    position: absolute;
    top: 35px;
    left: 0;
    width: 400px;
    border: 1px solid #cccccc;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0);
    background: #ffffff;
    font-size: 12px;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      li {
        text-align: center;
        span {
          padding: 2px 5px;
          &:hover, &.sel {
            background: #1787e0;
            color: white;
            cursor: pointer;
          }
        }
        margin: 6px 2px;
        color: black;
        width: 50px;
      }
    }
  }
}
</style>
