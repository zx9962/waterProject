<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

<style lang="less">
@import 'css/base.css';
@import 'css/reset.css';
</style>
