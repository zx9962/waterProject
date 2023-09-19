<style lang="less">
  #ledger{
    width: 1321px;
    height: 640px;
    .parcel{
      width: 1321px;
      height: 640px;
      box-sizing: border-box;
      .title{
        width: 1321px;
        height: 38px;
        line-height: 38px;
        box-sizing: border-box;
        border-top:1px solid #e2ebf4 ;
        border-bottom:1px solid #e2ebf4 ;
        span{
          font-size:12px;
        }
      }
      .rost{
        padding: 20px 0 0px 35px;
        h5{
          font-size:13px ;
          color:#3c4571 ;
          font-weight: bold;
        }
      }
      .btn{
        width:1226px ;
        height: 50px;
        background-color: #fff;
        border-radius: 10px;
        margin: 18px 0 0 28px;
        box-sizing: border-box;
        padding:0 25px ;
        span{
          font-size: 12px;
          color: #969db7;
        }
        button{
          width: 65px;
          height: 26px;
          border: none;
          color: #fff;
          font-size: 12px;
          border-radius: 3px;
          background-color: #3f74f9 ;
        }
      }
      .new{
        width: 1226px;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding-left:31px ;
        margin:7px 0 4px 28px ;
        background-color: #fff;
        border-radius: 3px;
        h4{
          font-size: 12px;
          font-weight: blod;
          color: #202b5d;
        }
      }
    }
  }
</style>
<template>
    <div id='ledger'>
      <div class="parcel">
          <div class="title">
            <advert></advert>
          </div>
          <div class="rost">
            <h5>后台账号管理</h5>
          </div>
          <div class="btn d-flex justify-content-between align-items-center">
            <span>返回</span>
            <button>保存</button>
          </div>
          <div class="new"><h4>新增账号</h4></div>
      <Rost></Rost>
      </div>
    </div>
</template>

<script>
import advert from '../../components/advert.vue'
import Rost from './children/rost.vue'
export default {
  name: 'ledger',
  // import引入组件才能使用
  components: {
    Rost,
    advert
  },
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
