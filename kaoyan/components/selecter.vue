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
        flKind: ['全部', '政治1', '政治2', '政治3', '政治4', '政治5', '政治6', '政治7'],
        flType: ['全部', '讲义/笔记1', '讲义/笔记2', '讲义/笔记3', '讲义/笔记4', '讲义/笔记5', ],
        flYear: ['全部', '2021年1', '2021年2', '2021年3', '2021年4', ],
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
    padding: 15px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 5px;
  }

  .fl_kind button:hover {
    background-color: #1787e0;
    color: white;
  }

  .fl_type button:hover {
    background-color: #1787e0;
    color: white;
  }

  .fl_year button:hover {
    background-color: #1787e0;
    color: white;
  }

</style>
