<style lang="less">
  .main3{
    position: relative;
    .main3P{
      position: absolute;
      left: 24px;
      top: 18px;
      color: #5b6388;
      font-size:14px;
      font-weight: bold;
      z-index: 99;
    }
  }
</style>
<template>
    <div class='main3'>
      <p class="main3P">Android/iOS</p>
      <div id="main3"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'main3',
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
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {

  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {
    var myChart3 = echarts.init(document.getElementById('main3'))
    myChart3.setOption({
      title: {
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        right: '2%'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 8500, name: 'ios' },
            { value: 4500, name: 'Android' }
          ]
        }
      ]
    })
  },
  beforeCreate () { }, // 生命周期：创建之前
  beforeMount () { }, // 生命周期：挂载之前
  beforeUpdate () { }, // 生命周期：更新之前
  updated () { }, // 生命周期：更新之后
  beforeDestroy () { }, // 生命周期：销毁之前
  destroyed () { }, // 生命周期：销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发执行
}
</script>
