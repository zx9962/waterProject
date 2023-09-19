<template>
  <div id='d2'>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'd2',
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
    pic () {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option
      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', '上周', '本周']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [100, 80, 150, 200, 170, 50, 130],
            type: 'bar'
          }
        ]
      }
      option && myChart.setOption(option)
    }
  },
  mounted () {
    this.pic()
  }
}
</script>
<style scoped>
  #main{
  width: 900px;
  height: 484px;
 }
</style>
