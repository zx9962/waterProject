<template>
  <div id='d3'>
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
          boundaryGap: false,
          data: ['29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '今天']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [300, 700, 400, 634, 1000, 1130, 900, 950, 1200, 770, 850, 875],
            type: 'line',
            areaStyle: {}
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
  width: 1223px;
  height: 484px;
 }
</style>
