<template>
  <div id="pushMessage">
    <advert></advert>
    <div class="main d-flex justify-content-between">
      <div class="m-left">
        <div class="title">
          <p class="fw">历史推送</p>
        </div>
        <comment>
          <template #name>非常感谢购买公司的产品</template>
          <template #time>2016-12-11</template>
          <template #label1>ios</template>
          <template #label2>所有人</template>
          <template #label3>90后</template>
          <template #label4>500-1000</template>
          <template #text>非常感谢购买本公司的产品，凭借国际化研发技术平台，不断提升产品品质，开发出世界一流的净水产品，为用户带来了前所未
有的健康、放心的品质好水，为反馈用户的支持，凡是公司的老顾客，双12期间再次购买全部3折-预购从速！！！</template>
        </comment>
        <comment>
          <template #name>非常感谢购买公司的产品</template>
          <template #time>2016-12-11</template>
          <template #label1>ios</template>
          <template #label2>所有人</template>
          <template #label3>90后</template>
          <template #label4>500-1000</template>
          <template #text>非常感谢购买本公司的产品，凭借国际化研发技术平台，不断提升产品品质，开发出世界一流的净水产品，为用户带来了前所未
有的健康、放心的品质好水，为反馈用户的支持，凡是公司的老顾客，双12期间再次购买全部3折-预购从速！！！</template>
        </comment>
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
export default {
  name: 'pushMessage',
  components: {advert, comment},
  data () {
    return {}
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
