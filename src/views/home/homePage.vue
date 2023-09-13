<template>
  <div id="homePage">
  </div>
</template>

<script>
import home from '@/components/home'
export default {
  name: 'homePage',
  components: {home},
  data () {
    return {
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {
    this.add()
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async add () {
      const res = await this.$axios.get('http://127.0.0.1:2112/data')
      console.log(res)
      console.log(222)
    }
  }
}
</script>

<style scoped>

</style>
