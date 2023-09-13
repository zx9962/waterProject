<template>
  <div class="message">
    <div class="m-title d-flex align-items-center justify-content-between">
      <div class="user-group d-flex">
        <i class="el-icon-user user-img"></i>
        <p class="user-name">林小宣</p>
      </div>
      <div class="time">2016-12-11</div>
    </div>
    <div class="text-group">
      <p>非常感谢你们公司的产品，确实凭借国际化研发技术平台，不断提升产品品质，开发出了世界一流的净水产品，为我们带来了前
所未有的健康、放心的品质好水，这次的体验很棒，为你们点赞！！！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: {},
  data () {
    return {
      msg: '你好'
    }
  },
  methods: {
    add () {
      console.log('111')
    }
  }
}
</script>

<style scoped lang="less">
.message{
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  // border-radius: 5px;
  // background-color: #4174f7;
  .m-title{
    height: 30px;
    .user-group{
      .user-img{
        margin-right: 7px;
      }
      .user-name{
        font-weight: bold;
        font-size: 13px;
      }
    }
    .time{
      font-size: 10px;
      color: #989fbd;
    }
  }
  .text-group{
    border-bottom: #dadada solid 1px;
    margin-top: 5px;
    font-size: 13px;
    padding-bottom: 25px;
    line-height: 19px;
    p{
      color: #535a68;
    }
  }
}
</style>