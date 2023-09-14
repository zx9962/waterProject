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
        router>
        <el-menu-item index="/generalize">
          <i class="el-icon-menu"></i>
          <span slot="title">概览</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>运营管理</span>
          </template>
          <el-menu-item index="1">用户管理</el-menu-item>
          <el-menu-item index="/equip">设备管理</el-menu-item>
          <el-menu-item index="2-3">滤芯寿命管理</el-menu-item>
          <el-menu-item index="2-4">故障监控</el-menu-item>
          <el-menu-item index="2-5">消息推送</el-menu-item>
          <el-menu-item index="/userFeedback">用户反馈</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>租赁管理</span>
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项1</el-menu-item>
          <el-menu-item index="3-3">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据中心</span>
          </template>
          <el-menu-item index="3-1">数据分析</el-menu-item>
          <el-menu-item index="3-2">水质分布</el-menu-item>
          <el-menu-item index="/portrayal">人群画像</el-menu-item>
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
                <i class="el-icon-user-solid"></i>
                <p>遥遥领先</p>
                <i class="el-icon-caret-bottom fw"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown" class="drop-down">
              <el-dropdown-item>账号设置</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
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
    async add () {
      const res = await this.$axios.get('http://127.0.0.1:2112/data')
      console.log(res)
      console.log(222)
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
