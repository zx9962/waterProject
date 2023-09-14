<style scoped lang="less">
  .box{
    width: 1226px;
    height: 608px;
    border: 1px solid cyan;
    margin: 40px 0 0 30px;
    background-color: #fff;
    border-radius: 5px;
    .title{
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      color: #424a75;
      background-color: #f4f8ff;
      padding-left: 30px;
    }
    .tabbar{
      height: 50px;
      line-height: 50px;
      .list{
        padding-bottom: 8px;
      }
      .list_a{
        margin-left: 468px;
        margin-right: 18px;
      }
    }
    .list.router-link-active{
      border-bottom: 3px solid #225ff8;
    }
    #password,#data{
      margin: 22px 0 0 108px;
    }
  }
</style>
<template>
  <div id='agent'>
    <div class="box">
      <h2 class='title'>代理商管理</h2>
      <div class="tabbar">
        <router-link class="list list_a" to="/data">
          <span>资料</span>
        </router-link>
        <router-link class="list list_b" to="/password">
          <span>账号密码</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agent',
  // import引入组件才能使用
  components: {},
  data () {
    return {

    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {

  },
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {

  },
  // 生命周期：创建之前
  beforeCreate () {},
  // 生命周期：挂载之前
  beforeMount () {},
  // 生命周期：更新之前
  beforeUpdate () {},
  // 生命周期：更新之后
  updated () {},
  // 生命周期：销毁之前
  beforeDestroy () {},
  // 生命周期：销毁完成
  destroyed () {},
  // 如果页面有keep-alive缓存功能,这个函数会触发执行
  activated () {}
}
</script>
