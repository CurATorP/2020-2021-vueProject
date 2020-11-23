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
        artiTitle: 'Never gonna give you up',
        artiDate: '2020/11/23',
        artiFrom: 'Bing',
        artiContent: 'Were no strangers to love,You know the rules and so do i,A full commitments what Im thinking of,You wouldnt get this from any other guy,I just wanna tell you how Im feeling,Gotta make you understand, never gonna give you up,Never gonna let you down,Never gonna run around and desert you,Never gonna make you cry,Never gonna say goodbye,Never gonna tell a lie and hurt you'
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
