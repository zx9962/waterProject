<style scoped lang="less">
  .cont{
    margin: 26px 0 0 0;
  }
</style>
<template>
  <div id='generalize'>
    <div class="cont">
      <c1></c1>
    </div>
  </div>
</template>

<script>
import c1 from '../../components/generalize/c1'
export default {
  name: 'generalize',
  // import引入组件才能使用
  components: {
    c1
  },
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
