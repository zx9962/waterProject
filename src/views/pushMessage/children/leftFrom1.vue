<template>
  <div id="leftFrom1">
    <div class="l-group">
      <p class="l-tname">推送对象</p>
      <div class="l-from">
        <div class="f-item d-flex justify-content-between align-items-center">
          <p>平台选择</p>
          <div>
            <el-radio-group v-model="ruleForm.platform">
              <el-radio label="Andriod"></el-radio>
              <el-radio label="ios"></el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="f-item d-flex justify-content-between align-items-center">
          <p>目标人群</p>
          <div>
            <el-radio-group v-model="ruleForm.people">
              <el-radio label="全部"></el-radio>
              <el-radio label="男性"></el-radio>
              <el-radio label="女性"></el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="f-item d-flex justify-content-between align-items-center">
          <p>年龄范围</p>
          <div class="select">
            <el-select v-model="ruleForm.year" placeholder="90后" size="mini">
              <el-option label="80后" value="80"></el-option>
              <el-option label="90后" value="90"></el-option>
              <el-option label="00后" value="00"></el-option>
            </el-select>
          </div>
        </div>
        <div class="f-item d-flex justify-content-between align-items-center">
          <p>账户余额</p>
          <div class="select">
            <el-select v-model="ruleForm.balance" placeholder="500-1000" size="mini">
              <el-option label="500-1000" value="500-1000"></el-option>
              <el-option label="1000-1500" value="1000-1500"></el-option>
              <el-option label="5000以下" value="5000以下"></el-option>
              <el-option label="5000以上" value="5000以上"></el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="l-group">
      <p class="l-tname">标题</p>
      <el-input v-model="ruleForm.user" placeholder="不填则默认应用名称" class="l-inp-name"></el-input>
    </div>
    <div class="l-group">
      <p class="l-tname">内容</p>
      <el-input type="textarea" v-model="ruleForm.desc" placeholder="通知正文" class="l-inp-name"></el-input>
    </div>
    <el-button type="primary" class="l-btn" @click="addData()">立即发送</el-button>
  </div>
</template>

<script>
import bus from '@/utils/eventBus'
export default {
  name: 'leftFrom1',
  props: {},
  data () {
    return {
      ruleForm: {
        platform: [],
        people: [],
        year: '',
        balance: '',
        user: '',
        desc: '',
        time: new Date()
      }
    }
  },
  methods: {
    async addData () {
      const res = await this.$axios.get('http://127.0.0.1:2112/pushPort', {
        params: this.ruleForm
      })
      bus.$emit('sendMessage', true)
      this.ruleForm = {
        platform: [],
        people: [],
        year: '',
        balance: '',
        user: '',
        desc: ''
      }
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.l-group{
  margin-bottom: 17px;
  .l-tname{
    font-size: 13px;
    font-weight: bold;
    color: #989fbd;
  }
  .l-inp-name{
    margin-top: 8px;
  }
  .l-from{
    border: 1px solid #c0d2e2;
    height: 204px;
    margin-top: 8px;
    padding: 0 11px;
    box-sizing: border-box;
    border-radius: 5px;
    .f-item{
      height: 50px;
      border-bottom: 1px solid #c0d2e2;
      p{
        color: #989fbd;
        font-size: 11px;
      }
      .select{
        width: 110px;
        input{
          height: 20px !important;
        }
      }
    }
  }
}
.l-btn{
  background-color: #4174f7;
}
</style>
