<template>
  <div id='dataAnalysis'>
    <advert></advert>
    <div class="unit">
      <p>增长数</p>
      <span>台</span>
    </div>
    <div class="d-flex jump">
      <router-link to="/dataAnalysis/d1" class="pic">用户日活跃度</router-link>
      <router-link to="/dataAnalysis/d2" class="pic">设备日净水量</router-link>
      <router-link to="/dataAnalysis/d3" class="pic">设备日增长</router-link>
      <router-link to="/dataAnalysis/d4" class="pic">设备周增长</router-link>
    </div>
    <router-view class="show"/>
    </div>
</template>

<script>
import advert from '@/components/advert.vue'
export default {
  name: 'dataAnalysis',
  // import引入组件才能使用
  components: {advert},
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

  }
}
</script>
<style scoped>
  #dataAnalysis{
    background: #f5f6fc;
    position: relative;
  }
  .show{
    width: 1223px;
    height: 484px;
    position: absolute;
    top: 120px;
    left:28px;
    background: #fff;
    border-radius: 8px;
  }
  .pic{
    display: block;
    width: 120px;
    height: 24px;
    font-size: 10px;
    text-align: center;
    line-height: 24px;
    margin-left: 30px;
  }
  a.router-link-active{
    color: #fff;
    background: #3f74f9;
    border-radius: 15px;
  }
  .jump{
    width: 1223px;
    height: 40px;
    position: absolute;
    top:50px;
    left:28px;
    background: #f5faff;
    margin-top: 15px;
    align-items: center;
  }
  .unit{
    width: 97px;
    height: 30px;
    border-radius:15px;
    background: #e6f0ff;
    font-size: 10px;
    position: absolute;
    top: 130px;
    left: 120px;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .unit span{
    color: #3f74f9;
  }
</style>
