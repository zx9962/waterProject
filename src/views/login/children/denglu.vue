<template>
  <div id="denglu">
    <div class="user d-flex justify-content-around">
      <h2>用户登录</h2>
    </div>
    <div class="bot d-flex flex-direction-column" @keyup.enter="login()">
    <input type="text" placeholder="请输入用户名或手机号码" v-model.trim='mobile'>
    <input type="text" placeholder="请输入密码" v-model.trim="pwd">
    <div class="keeppwd">
      <el-checkbox v-model="checked"><span class="remember">记住密码</span></el-checkbox>
    </div>
    <button  class="submit" @click="login()">立即登录</button>
    <router-link to="/login/zhuce">
      <button class="try">申请试用</button>
    </router-link>
    </div>
    <div class="bottom_mi">
      <p>忘记密码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'denglu',
  data () {
    return {
      mobile: '',
      pwd: '',
      aaa: 1,
      checked: false
    }
  },
  created () {
    this.intValue()
  },
  methods: {
    intValue () {
      let start = JSON.parse(localStorage.getItem('rePwd'))
      if (start.checked) {
        this.mobile = start.mobile
        this.pwd = start.pwd
      }
      console.log(start)
    },
    create () {
      this.aaa = 2
      this.houtaima()
    },
    async login () {
      // 将是否记住密码存到本地存储里边
      localStorage.setItem('rePwd', JSON.stringify({
        checked: this.checked,
        mobile: this.mobile,
        pwd: this.pwd
      }))
      if (this.mobile === '' || this.pwd === '') {
        this.$message.error('账号或密码不能为空！')
      } else {
        const userInfo = await this.$axios.get('http://127.0.0.1:2112/userinfo', {
          params: {
            username: this.mobile,
            pwd: this.pwd
          }
        })
        console.log(userInfo)
        if (userInfo.status === 200) {
          if (userInfo.data.length !== 0) {
            this.$message({
              message: '恭喜您登录成功',
              type: 'success'
            })
            this.$router.push({
              path: '/generalize',
              query: {
                username: this.mobile,
                img: '1.jpg'
              }
            })
          } else {
            this.$message.error('账号或密码错误！')
          }
        }
      }
    }
  }
}
</script>

<style lang="less">
.user{
  width: 100%;
  height: 162px;
  font-size: 13px;
  line-height: 200px;
}
.remember{
  position: relative;
  top: -5x;
  font-size: 12px;
  // margin-top: -15px;
}
</style>
