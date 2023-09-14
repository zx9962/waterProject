<template>
  <div id="oneMonth">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
// import homePage from '@/views/homePage/homePage'
export default {
  name: 'oneMonth',
  components: {},
  data () {
    return {
      msg: '一个月'
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {},
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    add () {
      console.log('111')
    }
  }
}
</script>

<style scoped>
</style>
