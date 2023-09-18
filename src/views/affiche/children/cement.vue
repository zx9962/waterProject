
<style lang="less">
  #cement{
    .cemBox{
      width: 1226px;
      height: 538px;
      background-color: #fff;
      margin: 0 auto;
      border: 1PX solid #fff;
      .cemLeft{
        width: 887px;
        height: 468px;
        margin: 19px auto 0;
        ul{
          margin-top:12px;
          li{
            width: 100%;
            margin-top: 10px;
            box-sizing: border-box;
            padding: 15px 30px;
            border: 1px solid #e7eef4;
            display: flex;
            justify-content: space-between;
            p{
              font-weight: bold;
              color:#5d6589 ;
              font-size: 12px;
            }
            span{
              color: #5b6388;
              font-size: 11px;
            }
            h5{
              width: 94%;
              font-weight: none;
              color: #535a68;
              font-size: 12px;
              margin-top: 10px;
            }
            .xiao{
              width: 90%;
            }
          }
        }
      }
    }
  }
</style>
<template>
    <div id='cement'>
      <div class="cemBox">
        <div class="cemLeft">
          <ul>
            <li>
              <p>热烈祝贺***公司接入深智云净平台</p>
              <span>6月13日</span>
            </li>
            <li>
              <p>热烈祝贺***公司接入深智云净平台</p>
              <span>6月13日</span>
            </li>
            <li>
              <div class="xiao">
                <p>热烈祝贺***公司接入深智云净平台</p>
                <h5>非常感谢购买本公司的产品，凭借国际化研发技术平台,不断提升产品品质，开发出世界- -流的净水产品， 为用户带来了前所未有的健康、放心的品质好水，为反馈用户的支持，凡是公司的老顾客，双12期间再次购买全部3折~预购从速! ! !</h5>
              </div>
              <span>6月13日</span>
            </li>
            <li>
              <p>热烈祝贺***公司接入深智云净平台</p>
              <span>6月13日</span>
            </li>
            <li>
              <p>热烈祝贺***公司接入深智云净平台</p>
              <span>6月13日</span>
            </li>
            <li>
              <p>热烈祝贺***公司接入深智云净平台</p>
              <span>6月13日</span>
            </li>
            <li>
              <p>热烈祝贺***公司接入深智云净平台</p>
              <span>6月13日</span>
            </li>
          </ul>
        </div>
        <div class="page d-flex justify-content-around">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cement',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {

    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {

  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期：创建之前
  beforeMount () { }, // 生命周期：挂载之前
  beforeUpdate () { }, // 生命周期：更新之前
  updated () { }, // 生命周期：更新之后
  beforeDestroy () { }, // 生命周期：销毁之前
  destroyed () { }, // 生命周期：销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发执行
}
</script>
