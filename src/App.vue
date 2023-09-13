<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import 'css/base.css';
@import 'css/reset.css';
#app {
  background-color: #f4f5fb;
}
</style>
