<template>
  <div id="from">
    <h2>{{msg}}</h2>
    <input type="text" :value="value" @input="inp($event)">
    <input type="checkbox" :checked="attr" @change="check($event)">
  </div>
</template>

<script>
export default {
  name: 'from',
  props: {
    value: String,
    attr: Boolean
  },
  data () {
    return {
      msg: '这是组件'
    }
  },
  methods: {
    inp (e) {
      this.$emit('input', e.target.value)
    },
    check (e) {
      console.log(e.target.checked)
      this.$emit('update:attr', e.target.checked)
    }
  }
}
</script>

<style scoped>
</style>
