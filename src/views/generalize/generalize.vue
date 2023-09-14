<style scoped lang="less">
  .cont{
    width: 1220px;
    margin: 26px 0 0 30px;
    .top{
      margin-bottom: 27px;
    }
  }
</style>
<template>
  <div id='generalize'>
    <advert></advert>
    <div class="cont">
      <div class="top d-flex justify-content-between">
        <c1></c1>
        <c2></c2>
        <c3></c3>
      </div>
      <div class="top d-flex justify-content-between">
        <b1></b1>
        <b2></b2>
        <b3></b3>
      </div>
    </div>
  </div>
</template>

<script>
import c1 from '../../components/generalize/c1'
import c2 from '../../components/generalize/c2'
import c3 from '../../components/generalize/c3'
import b1 from '../../components/generalize/b1'
import b2 from '../../components/generalize/b2'
import b3 from '../../components/generalize/b3'
import advert from '../../components/advert'
export default {
  name: 'generalize',
  // import引入组件才能使用
  components: {
    c1,
    c2,
    c3,
    b1,
    b2,
    b3,
    advert
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
