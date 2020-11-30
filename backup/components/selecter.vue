<template>
  <div id="fliter">
    <div class="fl_kind">
      <ul v-for="(item, index) in flKind" :key="index" class="kindOP">
        <li> 
          <button  v-if="currentKind === item" style="background-color:#1787e0;color:white;"> {{ item }}</button>
          <button  v-else @click="currentKind=item"> {{ item }}</button>
        </li>
      </ul>
    </div>
    <div class="fl_type">
      <ul v-for="(item, index) in flType" :key="index" class="kindOP">
        <li> 
          <button  v-if="currentType === item" style="background-color:#1787e0;color:white;"> {{ item }}</button>
          <button  v-else @click="currentType=item"> {{ item }}</button>
        </li>
      </ul>
    </div>
    <div class="fl_year">
      <ul v-for="(item, index) in flYear" :key="index" class="kindOP">
        <li> 
          <button  v-if="currentYear === item" style="background-color:#1787e0;color:white;"> {{ item }}</button>
          <button  v-else @click="currentYear=item"> {{ item }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flKind: ['全部', '政治','英语', '数学', '专业课', '专业硕士', '外语类/小语种', '复试/面试', '四六级'],
        flType: ['全部', '讲义/笔记', '专业课真题', '试题/习题', '复习备考', '考研大纲', ],
        flYear: ['全部', '2021年', '2020年', '2019年', '其他', ],
        currentKind: '全部',
        currentType: '全部',
        currentYear: '全部'
      }
    }
  }

</script>

<style lang="scss">
  #fliter {
    width: 1200px;
    height: 230px;
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    padding: 0 15px;
    border: 1px solid #e5e5e5;
  }

  .fl_kind,
  .fl_year,
  .fl_type {
    height: 50px;
    padding-top: 20px;
  }

  .fl_kind ul,
  .fl_year ul,
  .fl_type ul {
    list-style: none;
    margin-left: 50px;
  }

  .fl_kind li,
  .fl_year li,
  .fl_type li {
    display: block;
    float: left;
  }

  .fl_kind button,
  .fl_year button,
  .fl_type button {
    color: black;
    border: none;
    background-color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 5px;
  }

  .fl_kind button:hover {
    background-color: #1787e0;
    color: white;
    cursor: pointer;
  }

  .fl_type button:hover {
    background-color: #1787e0;
    color: white;
    cursor: pointer;
  }

  .fl_year button:hover {
    background-color: #1787e0;
    color: white;
    cursor: pointer;
  }

</style>
