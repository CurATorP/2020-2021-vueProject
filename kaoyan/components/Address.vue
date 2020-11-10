<template>
  <div id="change">
    <div class="currentAdd">
      <p>{{ currentAddress }}</p>
    </div>
    <div class="allAddress">
      <ul>
        <div v-for="(item, index) in Addresslist" :key="index" class="test">
          <li v-if="currentAddress === item" style="background-color: #1787e0;">
            {{ item }}
          </li>
          <li v-else class="newAdd" @click="currentAddress=item">
            {{ item }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Addresslist: ['北京', '上海', '天津', '重庆', '河北', '山西',
        '河南', '辽宁', '吉林', '黑龙江', '内蒙古', '江苏',
        '山东', '安徽', '浙江', '福建', '湖北', '湖南',
        '广东', '广西', '江西', '四川', '海南', '贵州',
        '云南', '西藏', '陕西', '甘肃', '青海', '宁夏',
        '新疆', '港澳', '台湾', '钓鱼岛', '海外'],
      currentAddress: '四川'
    }
  }
}
</script>

<style lang="scss">
#change {
  width: 600px;
  height: 500px;
}
.currentAdd {
  width: 50px;
  height: 25px;
  margin-left: 50px;
  color:  #1787e0;
  text-align: center;
}
.allAddress {
  & {
    width: 380px;
    height: 230px;
    display: inline-flex;
    margin-left: 50px;
    border-top: 1px #ababab solid;
    .test {
      width: 60px;
      height: 18px;
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      & li {
      color: #ababab;
      text-align: center;
      &:hover {
        cursor:pointer;
      }
    }
      .newAdd:hover {
        color: #1787e0;
        background: rgba($color: #ababab9c, $alpha: 3.0);
      }
    }
  }
}
</style>
