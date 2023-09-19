<style lang="less">
  #rost{
    .botBox{
      width:1226px ;
      height:425px ;
      margin: 6px 0 0 28px;
      background-color: #fff;
      .leftBox{
        width:447px ;
        height: 425px;
        // background-color: pink;
        box-sizing: border-box;
        padding: 0 0 0 77px;
        .el-input--suffix .el-input__inner{padding-right: 0;}
        .el-select{
          .el-input--suffix{
            width: 290px;
            height: 40px;
          }
        }
        .el-form-item{
          margin-bottom: 10px;
        }
        .el-form-item__label{
          text-align: left;
        }
      }
      .rightBox{
        width: 574px;
        height: 425px;
        // background-color: aqua;
        .assign{
          width: 100%;
          height: 50px;
          border-bottom:1px solid #e1e1e1;
          span{
            color:#565e85 ;
            font-size:12px ;
          }
        }
        .overview{
          width: 100%;
          height: 48px;
          line-height: 48px;
          box-sizing: border-box;
          border-bottom: 2px solid #e1e1e1;
        }
        .el-checkbox__label{
          font-size: 12px;
          }
        .erCeng{
          width: 100%;
          height: 80px;
          border-bottom: 1px solid #e1e1e1;
          .er_left{
            width: 163px;
            height: inherit;
            box-sizing: border-box;
            padding: 12px 0 0 0;
          }
          .er_right{
            // background-color: yellow;
            .el-checkbox{
              margin: 12px 10px 0px 0;
            }
          }
        }
        .sanCeng,.siCeng,.wuCeng,.liuCeng{
          height: 52px;
          width: 100%;
          line-height: 52px;
          border-bottom: 1px solid #e1e1e1;
        }
        .san_left,.si_left,.wu_left,.liu_left{
          width: 163px;
        }
      }
    }
  }
</style>
<template>
    <div id='rost'>
      <div class="botBox d-flex justify-content-between">
          <div class="leftBox">
      <div style="margin: 0px;"></div>
          <el-form :label-position="labelPosition" :rules="backstage.rules" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号" prop="name">
              <el-input v-model="backstage.formLabelAlign.name" placeholder="请填写用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="backstage.formLabelAlign.region" show-password placeholder="请填写密码"></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="backstage.formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="backstage.formLabelAlign.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="backstage.formLabelAlign.mailbox"></el-input>
            </el-form-item>
            <el-form-item label="公司职务">
              <el-input v-model="backstage.formLabelAlign.duty" placeholder="此处填写公司职务"></el-input>
            </el-form-item>
            <el-form-item label="联系地址">
              <el-input v-model="backstage.formLabelAlign.site"></el-input>
            </el-form-item>
            <el-form-item label="角色类型">
              <el-select v-model="backstage.value" placeholder="请选择">
                <el-option
                  v-for="item in backstage.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="rightBox">
          <div class="assign">
            <span>分配权限</span>
          </div>
          <div class="overview">
            <el-checkbox v-model="checked">概览</el-checkbox>
          </div>
          <div class="erCeng d-flex">
            <div class="er_left">
              <el-checkbox v-model="checked">运营管理</el-checkbox>
            </div>
            <div class="er_right flex-1">
              <el-checkbox-group v-model="backstage.checkList">
                <el-checkbox label="用户管理"></el-checkbox>
                <el-checkbox label="设备管理"></el-checkbox>
                <el-checkbox label="滤芯防伪管理"></el-checkbox>
                <el-checkbox label="滤芯寿命管理"></el-checkbox>
                <el-checkbox label="故障监控"></el-checkbox>
                <el-checkbox label="消息推送"></el-checkbox>
                <el-checkbox label="用户反馈"></el-checkbox>
                <!-- <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox> -->
              </el-checkbox-group>
            </div>
          </div>
          <!-- 三层 -->
          <div class="sanCeng d-flex">
            <div class="san_left">
              <el-checkbox v-model="checked">租赁管理</el-checkbox>
            </div>
            <div class="san_right flex-1">
              <el-checkbox-group v-model="backstage.checkList3">
                <el-checkbox label="故障监控"></el-checkbox>
                <el-checkbox label="消息推送"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <!-- 四层 -->
          <div class="siCeng d-flex">
            <div class="si_left">
              <el-checkbox v-model="checked">数据中心</el-checkbox>
            </div>
            <div class="si_right flex-1">
              <el-checkbox-group v-model="backstage.checkList4">
                <el-checkbox label="故障监控"></el-checkbox>
                <el-checkbox label="消息推送"></el-checkbox>
                <el-checkbox label="用户反馈"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <!-- 五层 -->
          <div class="wuCeng d-flex">
            <div class="wu_left">
              <el-checkbox v-model="checked">产品配置</el-checkbox>
            </div>
            <div class="wu_right flex-1">
              <el-checkbox-group v-model="backstage.checkList5">
                <el-checkbox label="故障监控"></el-checkbox>
                <el-checkbox label="消息推送"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <!-- 六层 -->
          <div class="liuCeng d-flex">
            <div class="liu_left">
              <el-checkbox v-model="checked">账号管理</el-checkbox>
            </div>
            <div class="liu_right flex-1">
              <el-checkbox-group v-model="backstage.checkList6">
                <el-checkbox label="故障监控"></el-checkbox>
                <el-checkbox label="消息推送"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rost',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      labelPosition: 'right',
      backstage: {
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          phone: '',
          mailbox: '',
          duty: '',
          site: ''
        },
        options: [{
          value: '选项1',
          label: '管理员'
        }, {
          value: '选项2',
          label: '用户'
        }, {
          value: '选项3',
          label: '员工'
        }, {
          value: '选项4',
          label: '组长'
        }, {
          value: '选项5',
          label: '马克思'
        }],
        value: '',
        checkList: ['选中且禁用', '复选框 A'],
        checkList3: [],
        checkList4: [],
        checkList5: [],
        checkList6: []
        // checked: true
        // rules: {
        //   name: [
        //     { required: true, message: '请输入您的账号', trigger: 'blur' }
        //   ]
        // }
      }
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {
  },
  // 方法集合
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // }
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
