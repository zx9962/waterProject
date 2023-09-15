<template>
  <div id='login'>
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
  background-size:100% 800px;
  position: relative;
 }
 #home{
  position: absolute;
  margin: auto;
  top:15%;
  left:0;
  right:0;
  border-radius: 10px;
 }
</style>
