<template>
  <div id="homePage">
    
  </div>
</template>

<script>
import from from '@/components/from'
export default {
  name: 'homePage',
  components: {from},
  data () {
    return {
      msg: '这是home页面',
      val: '',
      check: true
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {
    // this.add()
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    async add () {
      const res = await this.$axios.get('http://127.0.0.1:2112/data')
      console.log(res)
      console.log(222)
    }
  }
}
</script>

<style scoped lang="less">
#homePage{
  display: flex;
  .h-left{
    width: 200px;
    height: 100vh;
    background-color: #1a1c28;
    .l-title{
      height: 64px;
      background-color: #4174f7;
    }
  }
  .h-right{
    flex: 1;
    .r-title{
      height: 64px;
      background-color: #fff;
    }
  }
}
</style>
