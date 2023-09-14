<template>
  <div id='home' class="d-flex">
    <span>用户登录</span>
    <input type="text" placeholder="请输入手机号码" v-model='mobile'>
    <input type="text" placeholder="请输入密码" v-model="pwd">
    <div class="keeppwd d-flex">
      <input type="checkbox" class="checkbox">
      <p>记住密码</p>
    </div>
    <button @click="login()">立即登录</button>
    <button class="try">申请试用</button>
    <p class="forgetpwd">忘记密码</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      mobile: '',
      pwd: ''
    }
  },
  // 方法集合
  methods: {
    login () {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
  #home{
    width: 351px;
    height: 445px;
    background: #fff;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    /* box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .checkbox{
    width: 15px;
    height: 15px;
    margin-right:10px;
  }
  .keeppwd{
    height: 16px;
    width: 231px;
    line-height: 16px;
    margin-top: 15px;
    margin-bottom:15px;
    color: #afb3c0;
  }
  span{
    margin-top: 120px;
    margin-bottom:28px;
  }
  input{
    height: 33px;
    width: 231px;
    border: 1px solid #afb3c0;
    padding-left:10px;
  }
  button{
    width: 231px;
    height: 40px;
    margin-bottom: 16px;
    background: #3b90fb;
    border: none;
    color: #fff;
    border-radius:2px;
  }
  .try{
    background-color: #fff;
    border: 1px solid #3b90fb;
    color: #3b90fb;
  }
  .forgetpwd{
    display: block;
    font-size:10px;
    margin-top: 17px;
  }
</style>
