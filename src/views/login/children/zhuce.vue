<template>
  <div id="zhuce">
    <div class="user d-flex justify-content-around">
      <h2>用户注册</h2>
    </div>
    <div class="bot d-flex flex-direction-column">
        <input type="text" placeholder="请输入用户名（4-20位数字或字母组合）" v-model='newMobile'>
        <input type="text" placeholder="输入密码（至少6位）" v-model="newPwd">
        <input type="text" placeholder="再次输入密码" v-model="renewPwd">
        <div class="yzm-box d-flex align-items-center justify-content-between">
          <input type="text" placeholder="验证码" class="yzm" v-model="yzm">
          <div class="houtaima" @click="houtaima">{{ houtaidema }}</div>
        </div>
        <div>
          <button @click="signBtn" class="ty">同意并注册</button>
        </div>
    </div>
    <div class="bottom_mi">
      <router-link to="/login/denglu">已有账号？直接登录>></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhuce',
  data () {
    return {
      newMobile: '',
      newPwd: '',
      renewPwd: '',
      yzm: '',
      houtaidema: '',
      userInfo: '1111'
    }
  },
  created () {
    this.houtaima()
  },
  methods: {
    regUser () {
      if (!this.newMobile) {
        this.$message.error('用户名不能为空！')
        return true
      }
      if (!this.newPwd) {
        this.$message.error('密码不能为空！')
        return true
      }
      if (!this.renewPwd) {
        this.$message.error('重复密码不能为空！')
        return true
      }
      if (this.newPwd !== this.renewPwd) {
        this.$message.error('重复密码错误！')
        return true
      }
      if (!this.yzm) {
        this.$message.error('验证码不能为空！')
        return true
      }
      // if (this.yzm !== this.houtaidema) {
      //   this.$message.error('验证码错误！')
      //   return true
      // }
      return false
    },
    async signBtn () {
      if (!this.regUser()) {
        const userInfo = await this.$axios.get('http://127.0.0.1:2112/userinfoZC', {
          params: {
            username: this.newMobile
          }
        })
        if (userInfo.status === 200) {
          if (userInfo.data.length === 0) {
            this.$message({
              message: '恭喜您注册成功',
              type: 'success'
            })
            this.$router.push({
              path: '/generalize',
              query: {
                username: this.newMobile,
                img: '1.jpg'
              }
            })
          } else {
            this.$message.error('该用户已存在！')
          }
        }
      }
    },
    async houtaima () {
      const res = await this.$axios.get('https://mock.apifox.cn/m1/1654199-0-default/ks/get_code')
      // console.log(res)
      if (res.data.code === '200') {
        this.houtaidema = res.data.img
        // console.log(this.houtaidema)
      }
    },
    async zc () {
      let pid = +new Date()
      let a = await this.$axios.get('http://127.0.0.1:2112/setInfo', {
        params: {
          id: pid,
          username: this.newMobile,
          pwd: this.newPwd,
          img: '1.jpg'
        }
      })
      console.log(a)
    }
  }
}
</script>

<style lang="less">
</style>
