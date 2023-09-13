<style scoped lang="less">
  #c1{
    width: 340px;
    height: 260px;
    box-sizing: border-box;
    border: 2px solid red;
    border-radius: 8px;
    position: relative;
  }
  .title{
    height: 40px;
    background-color: #3f74f9;
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    padding-left: 20px;
    border-radius: 8px 8px 0 0;
  }
  #main{
    width: 360px;
    height: 280px;
    position: absolute;
    top: 10px;
    left: 3px;
  }
</style>
<template>
  <div id='c1'>
    <p class="title">每日新增设备</p>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'c1',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      time1: [],
      num1: []
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 向图标插入值
    async getdate () {
      var res = await this.$axios.get('https://www.fastmock.site/mock/a1aadac316486d9974fb0ce587f48347/demo/generalize')
      console.log(res)
      // if (res.data.code === 200) {
      //   this.time1 = res.data.list1.time1
      //   this.num1 = res.data.list1.num1
      // }
      console.log(this.option)
      console.log(this.time1, this.num1)
      this.option = {
        xAxis: {
          type: 'category',
          data: res.data.list1.time1
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: res.data.list1.num1,
            type: 'line'
          }
        ]
      }
      console.log(this.option)
    },
    // 渲染图表
    setTable () {
      var chartDom = document.getElementById('main')
      this.myChart = echarts.init(chartDom)
      // this.option

      this.option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [], // [1500, 2300, 2240, 2180, 1350, 1470, 2600],
            type: 'line'
          }
        ]
      }

      this.option && this.myChart.setOption(this.option)
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {
    this.getdate()
  },
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {
    // 生成图表
    this.setTable()
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
