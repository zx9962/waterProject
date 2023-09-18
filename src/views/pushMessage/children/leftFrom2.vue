<template>
  <div id="leftFrom2">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'leftFrom2',
  props: {},
  data () {
    return {
      msg: 'leftFrom2'
    }
  },
  methods: {
    add () {
      console.log('111')
    }
  }
}
</script>

<style scoped>
</style>
