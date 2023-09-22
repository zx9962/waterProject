<template>
  <div id="pushMessage">
    <advert></advert>
    <div class="main d-flex justify-content-between">
      <div class="m-left">
        <div class="title">
          <p class="fw">历史推送</p>
        </div>
        <div style="overflow:auto;height: 520px;" class="">
          <comment v-for="item in pushData" :key="item.id">
            <template #name>{{item.title}}</template>
            <!-- <template #time>{{item.time}}</template> -->
            <template #time>{{timeChange(item.time)}}</template>
            <template #label1>{{item.pingtai}}</template>
            <template #label2>{{item.mubiao}}</template>
            <template #label3>{{item.age}}</template>
            <template #label4>{{item.qian}}</template>
            <template #text>{{item.context}}</template>
          </comment>
        </div>
      </div>
      <div class="m-right">
        <div class="m-r-title d-flex align-items-center">
          <router-link to="/push/leftFrom1">推送筛选</router-link>
          <router-link to="/push/leftFrom2">精确推送</router-link>
        </div>
        <div class="m-contFrom">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import advert from '@/components/advert'
import comment from '@/components/pushMessage/comment'
import bus from '@/utils/eventBus'
export default {
  name: 'pushMessage',
  components: {advert, comment},
  data () {
    return {
      pushData: []
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {
    this.addData()
    bus.$on('sendMessage', (msg) => {
      if (msg) {
        this.addData()
      }
    })
  },
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {},
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    addBtnSync (e) {
      this.addData(e)
    },
    // 查询
    async addData () {
      const res = await this.$axios.get('http://127.0.0.1:2112/inquire')
      if (res.status === 200) {
        this.pushData = res.data
      }
      console.log(res)
    },
    // 将时间戳转化为时间
    timeChange (date) {
      let d = new Date(date)
      console.log(d)
      let n = d.getFullYear()
      let y = d.getMonth() + 1
      let r = d.getDate()
      return `${n}-${y}-${r}`
    }
  }
}
</script>

<style scoped lang="less">
.main{
  margin: 17px 0 0 30px;
  width: 1224px;
  height: 566px;
  .m-left{
    width: 690px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    .title{
      height: 40px;
      line-height: 40px;
      background-color: #f5faff;
      padding-left: 30px;
      box-sizing: border-box;
      color: #5b6388;
      p{
        font-size: 12px;
      }
    }
  }
  .m-right{
    width: 519px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    .m-r-title{
      height: 40px;
      padding-left: 15px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 16px 4px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
      a{
        padding: 4px 20px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 12px;
      }
    }
  }
  .m-contFrom{
    padding: 14px 28px;
    box-sizing: border-box;
  }
}
.router-link-active{
  background-color: #4174f7;
  color: #fff;
}
</style>
