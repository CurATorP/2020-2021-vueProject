<template>
  <div id="sidePart">
    <div class="partTitle">
      <p>{{ title }}</p>
    </div>
    <div class="partCon">
      <div class="conList">
        <ul v-for="(item, index) in sideContent" :key="index" class="list_col">
          <li>
            <span>
              <router-link :to="item.url">
                <p>{{ item.data }}</p>
              </router-link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        title: 'never gonna give you up',
        sideContent: [{
            data: 'never gonna give you up',
            url: ''
          },
          {
            data: 'never gonna give you up',
            url: ''
          },
          {
            data: 'never gonna give you up',
            url: ''
          },
          {
            data: 'never gonna give you up',
            url: ''
          },
        ]
      }
    }
  }

</script>

<style Lang="scss">
  #sidePart {
    position: relative;
    float: right;
    width: 350px;
    margin-top: 100px;
    margin-right: 100px;
  }

  .partTitle {
    border-left: 5px solid #1787e0;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #333;
    background: #f0f0f0;
  }

  .partCon {
    border: 1px solid #f0f0f0;
    border-top-color: rgb(240, 240, 240);
    border-top-style: solid;
    border-top-width: 1px;
    border-top: 0;
    padding: 12px 16px;
  }

  .list_col {
    padding-left: 15px;
    height: 28px;
    line-height: 28px;
    color: #333;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: tahoma, arial, 'Microsoft YaHei', '微软雅黑', '宋体', SimSun, sans-serif;
  }

</style>
