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
          data: ['11/5-11/13', '11/5-11/13', '11/14-11/20', '11/21-12/4', '12/5-12/11', '上周', '本周']
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
  width: 1223px;
  height: 484px;
 }
</style>
