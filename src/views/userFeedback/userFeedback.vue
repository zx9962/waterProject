<template>
  <div id="userFeedback">
    <div class="u-cont">
      <div class="u-box d-flex justify-content-between">
        <div class="comment">
          <div class="title d-flex align-items-center">
            <router-link to="/userFeedback/week">一周内</router-link>
            <router-link to="/userFeedback/oneMonth">一月内</router-link>
            <router-link to="/userFeedback/threeMonth">三个月内</router-link>
            <router-link to="/userFeedback/year">半年内</router-link>
          </div>
          <div class="specific">
            <router-view/>
          </div>
        </div>
        <div class="info">
          <userInp>
            <template #title>用户信息</template>
            <template #name>姓名</template>
            <template #name-actual>唐小林</template>
            <template #tel>电话</template>
            <template #tel-actual>15539927692</template>
          </userInp>
          <userInp>
            <template #title>设备信息</template>
            <template #name>品牌</template>
            <template #name-actual>水博士</template>
            <template #tel>型号</template>
            <template #tel-actual>HDR-100</template>
          </userInp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userInp from '@/components/userFeedback/userInp'
export default {
  name: 'userFeedback',
  components: {userInp},
  data () {
    return {
      msg: '用户反馈'
    }
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
.u-cont{
  padding:16px 65px 0 32px;
  box-sizing: border-box;
  .u-box{
    height: 567px;
    .comment{
      width: 690px;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      .title{
        height: 39px;
        background: #e5eff9;
        padding: 0 10px;
        box-sizing: border-box;
        a{
          height: 24px;
          line-height: 24px;
          padding: 0 20px;
          font-size: 11px;
          box-sizing: border-box;
          margin-left: 10px;
          border-radius: 20px;
        }
      }
      .specific{
        padding: 13px;
        box-sizing: border-box;
        height: 528px;
        overflow: auto;
      }
    }
    .info{
      width: 520px;
      border-radius: 8px;
      background-color: #ffffff;
      padding: 14px 33px;
      box-sizing: border-box;
    }
  }
}
.router-link-active{
  background-color: #4174f7;
  color: #fff;
}
</style>
