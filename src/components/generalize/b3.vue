<style scoped lang="less">
  #b3{
    width: 513px;
    height: 277px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
    .title{
      height: 40px;
      background-color: #f7fbff;
      color: #fff;
      font-size: 12px;
      line-height: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      border-radius: 8px 8px 0 0;
      span:nth-child(1){
        font-weight: bold;
        font-size: 13px;
        color: #5b6388;
      }
      span:nth-child(2){
        font-weight: bold;
        font-size: 11px;
        color: #989fbd;
      }
    }
    .g-cont{
      padding: 0 15px;
      box-sizing: border-box;
      .btn-more{
        height: 28px;
        color: #3f74f9;
        padding: 0;
        line-height: 28px;
        width: 88px;
        text-align: center;
        font-size: 13px;
        display: block;
        border-color: #3f74f9;
        margin: 12px auto;
      }
    }
  }
</style>
<template>
  <div id='b3'>
    <p class="title d-flex justify-content-between align-items-center">
      <span>用户反馈</span>
      <span></span>
    </p>
    <div class="g-cont">
      <template>
        <el-table
          :data="tableData"
          class="tab"
          stripe
          size='mini'
          style="width: 100%">
          <el-table-column
            prop="date"
            label="故障时间"
            width="110">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="110">
          </el-table-column>
          <el-table-column
            prop="address"
            label="内容概要">
          </el-table-column>
        </el-table>
      </template>
      <el-button round class="btn-more">圆角按钮</el-button>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'b3',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      time1: [],
      num1: [],
      tableData: [{
        date: '2016-05-02',
        name: '陈紫梅',
        address: '请问如何用手机给净水器充值？'
      }, {
        date: '2016-05-04',
        name: '李永博',
        address: '净水器配合APP非常好用，赞赞赞！！'
      }, {
        date: '2016-05-01',
        name: '赵刚',
        address: '推送提醒的滤芯更换提醒功能太棒了'
      }, {
        date: '2016-05-01',
        name: '何玉瑞',
        address: '同事想要购买，能便宜点吗?'
      }]
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
      // var res = await this.$axios.get('https://www.fastmock.site/mock/a1aadac316486d9974fb0ce587f48347/demo/generalize')
    },
    // 渲染图表
    setTable () {
      var chartDom = document.getElementById('main3')
      this.myChart = echarts.init(chartDom)
      this.option = {
        xAxis: {
          type: 'category',
          data: ['11.13', '11.20', '11.27', '12.4', '12.11', '上周', '本周']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
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
