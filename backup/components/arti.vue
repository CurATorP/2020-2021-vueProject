<template>
  <div id="article">
    <!-- <div class="arti_path">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <div class="arti_title">
      <h1>{{ artiTitle }}</h1>
      <span class="arti_date">
        {{ artiDate }}
      </span>
      <span class="arti_from">
        {{ artiFrom }}
      </span>
    </div>
    <div class="arti_content">
      <p>{{ artiContent }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        artiTitle: 'Wonderful Tonight',
        artiDate: '2020/11/23',
        artiFrom: 'Eric Clapton',
        artiContent: 'It s late in the evening.She s wondering what clothes to wear.She puts on her make up,and brushes her long blond hair.And then she asks me:"Do I look allright?"And I say:"Yes, you look wonderful tonight."We go to a party,and everyone turns to see.This beautiful ladyis walking around with me.And then she asks me:"Do you feel allright?"And I say:"Yes, I feel wonderful tonight."'

      }
    }
  }

</script>

<style lang="scss">
  #article {
    float: left;
    width: 780px;
    margin-left: 100px;
    margin-top: 50px;
    color: #606266;
    min-height: 700px;
  }

  .arti_title {
    color: black;
    padding-bottom: 10px;
    
    border-bottom: 1px solid #ddd;
  }
  .arti_title h1 {
    margin-bottom: 20px;
  }

  .arti_date,
  .arti_from {
    margin-right: 10px;
    margin-left: 20px;
    color: #999;
  }

  .arti_content {
    text-indent: 2em;
    margin-top: 20px;
    text-align: left;
  }

</style>
