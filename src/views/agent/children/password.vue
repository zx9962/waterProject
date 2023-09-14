<style scoped>
  .box-p{
    font-size: 10px;
    color: #9fa7ad;
    margin: 0 0 8px 3px;
  }
  .box-h2{
    margin: 3px 0 32px 0;
    font-size: 18px;
  }
  .box-i{
    margin-bottom: 14px;
    font-size: 12px;
    width: 532px;
    height: 36px;
    border-radius: 3px;
    text-indent: 10px;
    border: 3px solid #ebf1f6;
    background-color: #fafbfc;
  }
  .box-button{
    margin-top: 16px;
  }
  .btn{
    width: 82px;
    height: 33px;
    box-sizing: border-box;
    font-size: 12px;
    border: 0;
    border-radius: 3px;
  }
  .save{
    background-color: #3f74f9;
    color: #fff;
  }
  .cancel{
    background-color: #fff;
    color: #646d81;
  }
</style>
<template>
  <div id='password'>
    <div class="box">
      <div>
        <p class="box-p">代理商账号</p>
        <h2 class="box-h2">13871117222</h2>
      </div>
      <div>
        <p class="box-p">旧密码</p>
        <input class="box-i" type="password" name="" placeholder="请输入旧密码">
      </div>
      <div>
        <p class="box-p">新密码</p>
        <input class="box-i" type="password" name="" placeholder="请输入新密码">
      </div>
      <div>
        <p class="box-p">确认密码</p>
        <input class="box-i" type="password" name="" placeholder="请再次输入新密码">
      </div>
      <div class="box-button">
        <button class="save btn">保存</button>
        <button class="cancel btn">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'password',
  // import引入组件才能使用
  components: {},
  props: {},
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
