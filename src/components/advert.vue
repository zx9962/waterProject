<template>
  <div id="advert">
    <div class="advert_box">
      <i class="el-icon-eleme"></i>
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
    line-height: 40px;
    text-indent: 10px;
    color: #000a2b;
    font-size: 13px;
    i{
      color: #f57c00;
    }
  }
</style>
