<template>
  <div id="modelSetting">
    <advert></advert>
    <div class="m-main">
      <div class="parameter">
        <div class="d-flex justify-content-between align-items-center">
          <p class="parameter-title fw">产品基本参数</p>
          <el-button type="primary" class="add-btn" @click="addproduct()">添加产品系列</el-button>
        </div>
        <template>
          <el-table
            :data="tableData"
            height="200"
            border
            class="tab-top"
            style="width: 100%">
            <el-table-column
              prop="brand"
              label="品牌"
              width="180">
            </el-table-column>
            <el-table-column
              prop="type"
              label="型号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="num"
              label="滤芯数量">
            </el-table-column>
            <el-table-column
              prop="frequency"
              label="心跳包发送频率">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column
              prop="id"
              label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  class="edit-btn"
                  @click="redactBtn(scope.row.id)">编辑</el-button>
                  <el-dialog title="" :visible.sync="dialogFormVisible">
                    <div class="model-from">
                      <el-form :model="form">
                        <el-form-item label="品牌" :label-width="formLabelWidth">
                          <el-input v-model="form.brand" autocomplete="off" placeholder="请输入品牌"></el-input>
                        </el-form-item>
                        <el-form-item label="型号" :label-width="formLabelWidth">
                          <el-input v-model="form.type" autocomplete="off" placeholder="请输入型号"></el-input>
                        </el-form-item>
                        <el-form-item label="滤芯数量" :label-width="formLabelWidth">
                          <el-select v-model="form.num" placeholder="请选择滤芯数量" style="width: 100%;">
                            <el-option label="1个" value="1个"></el-option>
                            <el-option label="2个" value="2个"></el-option>
                            <el-option label="3个" value="3个"></el-option>
                            <el-option label="4个" value="4个"></el-option>
                            <el-option label="5个" value="5个"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="通讯方式" :label-width="formLabelWidth">
                          <el-select v-model="form.message" placeholder="请选择通讯方式" style="width: 100%;">
                            <el-option label="Wi-Fi" value="Wi-Fi"></el-option>
                            <el-option label="3G" value="3G"></el-option>
                            <el-option label="4G" value="4G"></el-option>
                            <el-option label="5G" value="5G"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="心跳包发送频率" :label-width="formLabelWidth">
                          <el-select v-model="form.frequency" placeholder="请选择心跳包发送频率" style="width: 100%;">
                            <el-option label="3分钟1次" value="3分钟1次"></el-option>
                            <el-option label="5分钟1次" value="5分钟1次"></el-option>
                            <el-option label="8分钟1次" value="8分钟1次"></el-option>
                            <el-option label="10分钟1次" value="10分钟1次"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="备注" :label-width="formLabelWidth">
                          <el-input v-model="form.remark" autocomplete="off" placeholder="此处填写备注信息"></el-input>
                        </el-form-item>
                      </el-form>
                    </div>
                    <div slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="confirm()" class="save-btn">保存</el-button>
                      <el-button @click="dialogFormVisible = false">取消</el-button>
                    </div>
                  </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="standard">
        <p class="fw">滤芯寿命与水质标准</p>
        <div class="bottom-table">
          <div class="title d-flex align-items-center">
            <p>滤芯寿命标准</p>
            <p>TDS超标标注</p>
          </div>
          <el-table
            :data="tableDataBottom"
            :span-method="objectSpanMethod"
            size="mini"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
              prop="id"
              label="省"
              width="80">
            </el-table-column>
            <el-table-column
              prop="name"
              width="80"
              label="市">
            </el-table-column>
            <el-table-column
              prop="amount1"
              label="滤芯1寿命">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="滤芯2寿命">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="滤芯3寿命">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="滤芯4寿命">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="滤芯5寿命">
            </el-table-column>
          </el-table>
          <div class="paging">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              background
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modelSetting',
  components: {},
  data () {
    return {
      msg: 'modelSetting',
      tableData: [],
      dialogFormVisible: false,
      form: {
        brand: '',
        type: '',
        num: '',
        message: '',
        frequency: '',
        remark: '',
        id: ''
      },
      formLabelWidth: '120px',
      fromState: true,
      tableDataBottom: [{
        id: '广东',
        name: '深圳'
      }, {
        id: '12987123',
        name: '广州'
      }, {
        id: '广西',
        name: '北海'
      }, {
        name: '贵阳'
      }],
      currentPage3: 1
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {
    this.totalData()
    // this.redactBtn()
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    confirm () {
      if (this.form.brand === '' || this.form.type === '' || this.form.message === '' || this.form.frequency === '' || this.form.num === '' || this.form.remark === '') {
        this.$message({
          message: '请填写完整的信息在进行提交',
          type: 'warning'
        })
      } else {
        this.dialogFormVisible = false
        if (this.fromState) {
          // fromState为true当前表单为修改功能
          this.request()
        } else {
          // fromState为false当前表单为添加功能
          this.addDate()
        }
        // 添加完成之后清除input框的数据
        this.form = {
          brand: '',
          type: '',
          num: '',
          message: '',
          frequency: '',
          remark: ''
        }
      }
    },
    redactBtn (d) {
      this.dialogFormVisible = true
      this.fromState = true
      this.form.id = d
    },
    addproduct () {
      this.dialogFormVisible = true
      this.fromState = false
    },
    async totalData () {
      const res = await this.$axios.get('http://127.0.0.1:2112/data')
      if (res.status === 200) {
        this.tableData = res.data
      }
    },
    async request () {
      const res = await this.$axios.get('http://127.0.0.1:2112/upData', {
        params: this.form
      })
      if (res.status === 200) {
        this.totalData()
      }
    },
    async addDate () {
      const res = await this.$axios.get('http://127.0.0.1:2112/addData', {
        params: this.form
      })
      if (res.status === 200) {
        this.totalData()
      }
    },
    // 表格
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    // 分页器
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang="less">
.m-main{
  margin: 10px 0 0 30px;
  width: 1224px;
  .parameter{
    .parameter-title{
      font-size: 13px;
      color: #5b6388;
    }
    .add-btn{
      background-color: #4174f7;
    }
    .tab-top{
      margin-top: 10px;
      .edit-btn{
        border-color: #3670ee;
        color: #3670ee;
      }
      .model-from{
        padding: 0 80px;
        box-sizing: border-box;
      }
      .save-btn{
        background-color: #3f74f9;
      }
    }
  }
  .standard{
    font-size: 13px;
    color: #5b6388;
    margin-top: 20px;
    .bottom-table{
      height: 300px;
      background-color: #fff;
      margin-top: 10px;
      .title{
        background-color: #f6faff;
        height: 40px;
        padding-left: 20px;
        box-sizing: border-box;
        p{
          font-size: 12px;
          color: #5b6388;
          font-weight: bold;
          margin-right: 10px;
          border-radius: 20px;
          padding: 3px 20px;
        }
        p:nth-child(1){
          background-color: #3670ee;
          color: #fff;
        }
      }
      .paging{
        width: 540px;
        margin: 15px auto;
      }
    }
  }
}
</style>
