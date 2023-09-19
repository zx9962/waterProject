<template>
  <div id='login' class="">
    <!-- 登录功能的组件 -->
    <home></home>
  </div>
</template>

<script>
import home from '@/components/home'
export default {
  name: 'login',
  components: {home},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
#login{
  width: 100vw;
  height: 100vh;
  background-image:url('../../assets/img/bg.jpg');
  background-color: skyblue;
  background-size:100% 800px;
  position: relative;
}
</style>
