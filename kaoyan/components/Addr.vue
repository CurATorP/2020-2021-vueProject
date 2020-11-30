<template>
  <div class="addr-wrap">
    <h3>
      <i class="el-icon-location-outline"></i>
      {{ currentaddr }}
    </h3>
    <div class="other-addr">
      <ul>
        <li @click="handleChangeAddr(item)" v-for="item in addrlist" :key="item"><span :class="{'sel': item === currentaddr}">{{ item }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      currentaddr: '四川',
      addrlist: ['北京', '上海', '天津', '重庆', '河北', '山西', '河南', '辽宁', '吉林', '黑龙江', '内蒙古', '江苏', '山东', '安徽', '浙江', '福建', '湖北', '湖南', '广东', '广西', '江西', '四川', '海南', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '港澳', '台湾', '钓鱼岛', '海外']
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
    top: 10px;
    left: 0;
    // border: 1px solid #ccc;
    z-index: 999;
    background: transparent;
  }
  &:hover .other-addr {
    display: block;
    // opacity: 1;
    z-index: 998;
  }
  &:hover h3 {
    border-bottom: none;
  }
  .other-addr {
    display: none;
    // opacity: 0;
    position: absolute;
    top: 38px;
    left: 0;
    width: 400px;
    border: 1px solid #ccc;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, .1);
    background: #fff;
    font-size: 12px;
    transition: all .5s ease-in-out;
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
            color: #fff;
            cursor: pointer;
          }
        }
        margin: 6px 2px;
        color: #999;
        width: 60px;
      }
    }
  }
}
</style>
