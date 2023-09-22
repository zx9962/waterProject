<template>
  <div id='login' class="">
    <!-- 登录功能的组件 -->
    <div id='home' class="d-flex justify-content-around align-items-center flex-wrap">
     <div class="home">
        <router-view/>
      </div>
      <div class="bot_P d-flex justify-content-around">
        <p>Copyright © YourCompany.All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
// import home from '@/components/home'
export default {
  name: 'home',
  // import引入组件才能使用
  components: {},
  data () {
    return {
    }
  },
  created () {
  },
  // 方法集合
  methods: {
  }
}
</script>
<style lang="less">
#login{
  width: 100vw;
  height: 100vh;
  background-image:url('../../assets/img/bg.jpg');
  background-color: skyblue;
  background-size:100% 800px;
  position: relative;
}
#home {
  .home{
    width: 349px;
    height: 446px;
    background: #fff;
    font-size: 15px;
    border-radius: 10px;
    margin-top: 120px;
    /* box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .user{
      width: 100%;
      height: 140px;
      font-size: 13px;
      line-height: 200px;
      color: #484848;
    }
    .bot{
      width: 230px;
      height: 230px;
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
        margin-bottom: 10px;
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
      height:50px ;
      line-height:50px ;
      text-align: center;
      a,p{
        font-size: 12px;
        color: #a8acb9;
      }
    }
  }
  .bot_P{
    width: 100%;
    height: 130px;
    line-height: 163px;
    color: #fff;
    font-size: 12px;
  }
  input.yzm{
    width: 130px !important;
    margin-bottom: 0px !important;
  }
  .houtaima{
    width: 80px;
    height: 29px;
    border: 1px solid #3b90fb;
    box-sizing: border-box;
    text-align: center;
    line-height: 29px;
  }
  .ty{
    background-color: #3b90fb;
    color: #fff;
    margin-top: 20px !important;
  }
}
</style>
