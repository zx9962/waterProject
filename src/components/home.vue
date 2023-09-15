<style lang="less">
 #home {
  .home{
    width: 349px;
    height: 446px;
    background: #fff;
    font-size: 15px;
    border-radius: 10px;
    /* box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .user{
      width: 100%;
      height: 162px;
      font-size: 13px;
      line-height: 200px;
    }
    .bot{
      width: 230px;
      height: 203px;
      margin: 0 auto;
      input{
        width: 100%;
        height: 29px;
        font-size: 12px;
        color: #9da2b2;
        box-sizing: border-box;
        padding-left: 12px;
        font-weight: 500;
        border: none;
        outline: 1px solid #e7eef5;
      }
      .keeppwd{
        margin-top: 12px;
      }
      button{
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 6px;
        margin-top: 12px;
        font-size: 13px;
      }
      .submit{
        background-color: #3b90fb;
        color: #fff;
      }
      .try{
        border: 1px solid #3b90fb;
        color: #3b90fb;
      }
    }
    .bottom_mi{
      width: 100%;
      height:80px ;
      line-height:80px ;
      text-align: center;
      p{
        font-size: 12px;
        color: #a8acb9;
      }
    }
    .bot_P{
      width: 100%;
      height: 150px;
      line-height: 163px;
      color: #fff;
      font-size: 12px;
    }
  }
 }
</style>
<template>
  <div id='home' class="d-flex justify-content-around align-items-center">
   <div class="home">
    <div class="user d-flex justify-content-around">
      <h5>用户登录</h5>
    </div>
    <div class="bot d-flex flex-direction-column">
        <input type="text" placeholder="请输入手机号码" v-model='mobile'>
        <input type="text" placeholder="请输入密码" v-model="pwd">
      <div class="keeppwd">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </div>
        <button  class="submit" @click="login()">立即登录</button>
        <button class="try">申请试用</button>
    </div>
    <div class="bottom_mi">
      <p>忘记密码</p>
    </div>
    <div class="bot_P d-flex justify-content-around">
      <p>Copyright © YourCompany.All rights reserved.</p>
    </div>
  </div>
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
      pwd: '',
      checked: true
    }
  },
  // 方法集合
  methods: {
    login () {
      if (this.mobile === '' || this.mobile === '') {
        this.$message.error('请输入正确的账号和密码！')
      } else {
        this.$message({
          message: '恭喜您登录成功',
          type: 'success'
        })
        this.$router.push('/generalize')
      }
    }
  }
}
</script>
