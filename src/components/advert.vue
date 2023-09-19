<template>
  <div id="advert">
    <div class="advert_box" @click="jump">
      <!-- <i class="el-icon-eleme"></i> -->
      <img src="../img/ic_horn.png" alt="">
      <span>【公告】热烈祝贺公司接入深智云净水平台</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advertComp',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    jump () {
      this.$router.push({
        path: '/affiche'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .advert_box{
    background: #f5faff;
    border-top: 1px solid #e6eef5;
    border-bottom: 1px solid #e6eef5;
    height: 40px;
    box-sizing: border-box;
    padding: 0 15px;
    text-indent: 10px;
    color: #000a2b;
    font-size: 13px;
    display: flex;
    align-items: center;
    // i{
    //   color: #f57c00;
    // }
    img{
    }
  }
</style>
