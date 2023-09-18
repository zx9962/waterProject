<style lang="less">
  .main4{
    position: relative;
    .main4P{
      position: absolute;
      left: 14px;
      top: 11px;
      color: #5b6388;
      font-size:14px;
      font-weight: bold;
      z-index: 99;
    }
    #main4{
      box-sizing: border-box;
      padding: 0 14px;
    }
  }
</style>
<template>
    <div class='main4'>
      <p class="main4P">账户余额</p>
      <div id="main4"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'main4',
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
    var myChart4 = echarts.init(document.getElementById('main4'))
    myChart4.setOption({
      title: {
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '1%',
        right: '4%',
        bottom: '1%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['0-100', '100-500', '500-1000', '1000以上'],
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
          data: [1000, 1600, 750, 500]
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
