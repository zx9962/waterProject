<template>
  <div id='login' class="d-flex justify-content-around align-items-center">
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
  width: 1519px;
  height: 710px;
  background-image:url('../../assets/img/bg.jpg');
  background-size:100% 800px;
  position: relative;
}
</style>
