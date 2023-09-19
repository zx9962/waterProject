<style scoped lang="less">
  #b1{
    width: 340px;
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
      padding: 15px;
      box-sizing: border-box;
      .g-item:nth-child(2){
        border-bottom: none;
      }
      .g-item{
        margin-bottom: 24px;
        border-bottom: 1px solid #d5e1f1;
        .g-group{
          .g-ctext{
            width: 200px;
            padding-right: 45px;
            box-sizing: border-box;
            .g-name{
              font-size: 15px;
              color: #5b6388;
            }
            .g-text{
              font-size: 11px;
              color: #989fbd;
              margin-top: 5px;
            }
          }
          .number{
            color: #989fbd;
            font-size: 11px;
            span{
              font-size: 20px;
              color: #5b6388;
              margin-right: 5px;
            }
          }
        }
        .remind{
          font-size: 15px;
          color: #3f74f9;
          height: 48px;
          line-height: 48px;
          text-align: right;
        }
      }
    }
  }
</style>
<template>
  <div id='b1'>
    <p class="title d-flex justify-content-between align-items-center">
      <span>滤芯更换提醒</span>
      <span>需更换900个</span>
    </p>
    <div class="g-cont">
      <div class="g-item">
        <div class="g-group d-flex justify-content-between align-items-center">
          <i class="el-icon-edit"></i>
          <div class="g-ctext">
            <p class="g-name fw">未提醒</p>
            <p class="g-text">用户有可能太忙忽路了滤芯方而的更换，投醒他一下吧~</p>
          </div>
          <div class="number"><span class="fw">560</span>个</div>
        </div>
        <p class="remind fw">立即提醒<i class="el-icon-edit"></i></p>
      </div>
      <div class="g-item">
        <div class="g-group d-flex justify-content-between align-items-center">
          <i class="el-icon-edit"></i>
          <div class="g-ctext">
            <p class="g-name fw">已提醒</p>
            <p class="g-text">设备有自己的寿命。即时的更能更好的发挥产品的忧势！</p>
          </div>
          <div class="number"><span class="fw">560</span>个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'b1',
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
