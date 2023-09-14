<style scoped lang="less">
  #c2{
    width: 340px;
    height: 260px;
    box-sizing: border-box;
    border-radius: 8px;
    // position: relative;
    background-color: #fff;
    overflow: hidden;
  }
  .title{
    height: 40px;
    background-color: #ff8b2d;
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    padding-left: 20px;
    border-radius: 8px 8px 0 0;
  }
  #main2{
    // width: 360px;
    margin-left: 20px;
    height: 250px;
    margin-top: -20px;
  }
</style>
<template>
  <div id='c2'>
    <p class="title">用户周充值金额</p>
    <div id="main2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'c2',
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
      // this.option = {
      //   xAxis: {
      //     type: 'category',
      //     data: res.data.list1.time1
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     {
      //       data: res.data.list1.num1,
      //       type: 'line'
      //     }
      //   ]
      // }
    },
    // 渲染图表
    setTable () {
      var chartDom = document.getElementById('main2')
      this.myChart = echarts.init(chartDom)
      this.option = ({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      })
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
