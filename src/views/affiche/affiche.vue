<style lang="less">
  #affiche{
    .gao{
      width: 1229px;
      height: 41px;
      font-size: 13px;
      margin:13px auto 0;
      span{
        color: #485179;
        font-weight: bold;
      }
      button{
        width: 58px;
        height: 24px;
        border: 1px solid #e5e9ef;
        border-radius: 12px;
        font-size: 11px;
        color: #f39903;
        font-weight: bold;
      }
    }
  }
</style>
<template>
    <div id='affiche'>
      <advert></advert>
      <div class="gao d-flex justify-content-between align-items-center">
        <span @click="toggle">公告历史</span>
        <button> ‹ &nbsp; 返回</button>
      </div>
      <div v-show="showComponent">
        <cementVue></cementVue>
      </div>
    </div>
</template>

<script>
import advert from '../../components/advert.vue'
import cementVue from './children/cement.vue'
export default {
  name: 'affiche',
  // import引入组件才能使用
  components: {
    advert,
    cementVue
  },
  props: {},
  data () {
    return {
      showComponent: true
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    toggle () {
      this.showComponent = !this.showComponent
    }
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
