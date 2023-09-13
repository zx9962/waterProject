<style lang="less">
  #portrayal{
    .wrap{
      width: 1500px;
      height: 100vh;
      // background-color: pink;
      box-sizing: border-box;
      padding: 40px;
      #main,#main2,#main3,#main4,#main5{background-color: #fff;margin: 8.6px;}
        #main,#main2{
          width: 669px;
          height: 296px;
          // background-color: red;
        }
        #main3{
          width: 406px;
          height: 296px;
          // background-color: aqua;
        }
        #main4{
          width: 508px;
          height: 296px;
          // background-color: yellow;
        }
        #main5{
          width: 406px;
          height: 296px;
        }
    }
  }
</style>
<template>
    <div id='portrayal'>
      <div class="wrap d-flex flex-wrap">
          <mainPage></mainPage>
          <mainPage2></mainPage2>
          <mainPage3></mainPage3>
          <mainPage4></mainPage4>
          <mainPage5></mainPage5>
      </div>
    </div>
</template>

<script>
import mainPage from '@/components/farme/main'
import mainPage2 from '@/components/farme/main2'
import mainPage3 from '@/components/farme/main3'
import mainPage4 from '@/components/farme/main4'
import mainPage5 from '@/components/farme/main5'
export default {
  name: 'portrayal',
  // import引入组件才能使用
  components: {
    mainPage,
    mainPage2,
    mainPage3,
    mainPage4,
    mainPage5
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
