<style lang="less">
  .main2{
    position: relative;
    .main2P{
      position: absolute;
      left: 18px;
      top: 11px;
      color: #5b6388;
      font-size:14px;
      font-weight: bold;
      z-index: 99;
    }
  }
</style>
<template>
    <div class='main2'>
      <p class="main2P">年龄段</p>
      <div id="main2"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'main2',
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
    var myChart2 = echarts.init(document.getElementById('main2'))
    myChart2.setOption({
      title: {
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['50后', '60后', '70后', '80后', '90后', '00后'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '15%',
          data: [10, 52, 200, 334, 390, 230]
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
