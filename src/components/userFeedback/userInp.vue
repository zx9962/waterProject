<template>
  <div class="userInp">
    <p class="u-name">
      <slot name="title"></slot>
    </p>
    <div class="group">
      <div class="inp-name d-flex align-items-center justify-content-between">
        <p><slot name="name"></slot></p>
        <p><slot name="name-actual"></slot></p>
      </div>
      <div class="inp-name d-flex align-items-center justify-content-between">
        <p><slot name="tel"></slot></p>
        <p><slot name="tel-actual"></slot></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInp',
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
.userInp{
  margin-bottom: 20px;
  .u-name{
    font-size:14px;
    color: #5b6388;
    font-weight: bold;
  }
  .group{
    margin-top: 20px;
    .inp-name{
      height: 40px;
      background-color: #f9fbff;
      border: 1px solid #eaeefd;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 12px;
      color: #545e75;
    }
  }
}
</style>