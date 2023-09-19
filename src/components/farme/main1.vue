<style lang="less">
.main1{
  position: relative;
  #main1{
    box-sizing: border-box;
    padding: 0 20px;
  }
  .mainP{
      position: absolute;
      left: 24px;
      top: 11px;
      color: #5b6388;
      font-size:14px;
      font-weight: bold;
      z-index: 99;
      span{
        color:#9ca2c0 ;
        font-size:9px;
        margin-left: 6px;
      }
    }
}
</style>
<template>
    <div class='main1'>
      <p class="mainP">使用频率<span>次/每月</span></p>
      <div id="main1"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'main1',
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
    var myChart = echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title: {
        // text: '使用频率 次/每月',
        subtext: ''
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
          data: ['0-10次', '11-20次', '21-30次', '30次以上'],
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
          data: [300, 1235, 900, 320]
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
