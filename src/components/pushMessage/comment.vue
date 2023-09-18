<template>
  <div class="comment">
    <div class="c-name d-flex justify-content-between align-items-center">
      <p class="fw"><slot name="name"></slot></p>
      <p class="time"><slot name="time"></slot></p>
    </div>
    <div class="d-flex label align-items-center">
      <p>发送给</p>
      <span><slot name="label1"></slot></span>
      <span><slot name="label2"></slot></span>
      <span><slot name="label3"></slot></span>
      <span><slot name="label4"></slot></span>
    </div>
    <p class="c-text"><slot name="text"></slot></p>
  </div>
</template>

<script>
export default {
  name: 'comment',
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
.comment{
  padding: 10px 32px;
  height: 135px;
  box-sizing: border-box;
  border-top: 1px solid #d3d3d3;
  .c-name{
    font-size: 17px;
    .time{
      color: #989fbd;
      font-size: 10px;
    }
  }
  .label{
    font-size: 11px;
    color: #989fbd;
    height: 40px;
    span{
      padding: 3px 10px;
      background-color: #e9f1ff;
      color: black;
      font-size: 10px;
      margin-left: 10px;
      border-radius: 3px;
    }
  }
  .c-text{
    font-size: 11px;
    margin-top: 5px;
  }
}
</style>
