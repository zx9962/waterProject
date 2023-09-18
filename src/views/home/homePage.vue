<template>
  <div id="homePage">
    <div class="h-left">
      <div class="l-title">saas</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#1a1c28"
        text-color="#dce8ff"
        active-text-color="#4174f7"
        :unique-opened="fold"
        router>
        <el-menu-item index="/generalize">
          <i class="el-icon-menu"></i>
          <span slot="title">概览</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-yunyingguanli"></i>
            <span>运营管理</span>
          </template>
          <el-menu-item index="/userManage">用户管理</el-menu-item>
          <el-menu-item index="/equip">设备管理</el-menu-item>
<<<<<<< HEAD
          <el-menu-item index="/file">滤芯寿命管理</el-menu-item>
          <el-menu-item index="2-4">故障监控</el-menu-item>
          <el-menu-item index="2-5">消息推送</el-menu-item>
=======
          <el-menu-item index="2-3">滤芯寿命管理</el-menu-item>
          <el-menu-item index="/push">消息推送</el-menu-item>
>>>>>>> 534f06012f3e3ba08b69694080487f48be899669
          <el-menu-item index="/userFeedback">用户反馈</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="iconfont icon-shujuzhongxin"></i>
            <span>数据中心</span>
          </template>
          <el-menu-item index="3-1">数据分析</el-menu-item>
          <el-menu-item index="/portrayal">人群画像</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="iconfont icon-shujuzhongxin"></i>
            <span>产品配置</span>
          </template>
          <el-menu-item index="/modelS">型号设置</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>账号管理</span>
          </template>
          <el-menu-item index="5-1">代理商管理</el-menu-item>
          <el-menu-item index="/ledGer">后台账号管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="h-right">
      <div class="r-title d-flex justify-content-between align-items-center">
        <div class="t-left"></div>
        <div class="t-center fw">净水产品运营平台</div>
        <div class="t-right">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              <div class="user-head d-flex align-items-center justify-content-between">
                <i class="iconfont icon-zhanghaoguanli"></i>
                <p>遥遥领先</p>
                <i class="el-icon-caret-bottom fw"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown" class="drop-down">
              <el-dropdown-item>账号设置</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided><p @click="backChange()">退出登录</p></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="t-cont">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import home from '@/components/home'
export default {
  name: 'homePage',
  components: {home},
  data () {
    return {
      fold: true
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {
    // this.add()
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    backChange () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
#homePage{
  display: flex;
  background-color: #f4f5fb;
  .h-left{
    width: 200px;
    height: 100vh;
    background-color: #1a1c28;
    .el-submenu ul .is-active{
        border-right:5px solid #4077ff
      }
    .l-title{
      height: 64px;
      text-align: center;
      line-height: 64px;
      font-size: 30px;
      color: #fff;
      font-weight: bold;
      font-style: italic;
      background-color: #4174f7;
      margin-bottom: 47px;
    }
    .el-menu{
      border: none;
    }
  }
  .h-right{
    flex: 1;
    .r-title{
      height: 64px;
      background-color: #fff;
      padding: 0 50px;
      box-sizing: border-box;
      .t-left{
        width: 100px;
      }
      .t-center {
        font-size: 15px;
        color: #7994c2;
      }
      .t-right{
        width: 100px;
        .user-head{
          width: 90px;
          p{
           color: #545e75;
           font-size: 13px;
          }
          i{
            color: #3f74f9 !important;
          }
        }
        .drop-down{
          background-color: #1a1c28 !important;
        }
        .el-dropdown-link {
          cursor: pointer;
          color: #409EFF;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
