<template>
  <div id="userManage">
    <advert></advert>
    <div class="userMange_box">
      <div class="userState_box d-flex justify-content-between">
        <div class="userState_box_lef">
          <div class="userState_box_lef_title">
            <ul class=" d-flex align-items-center">
              <li class="active">用户充值情况</li>
              <li>基本特征</li>
            </ul>
          </div>
          <div class="userState_box_lef_main d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <p>
                <el-select v-model="value1" placeholder="请选择" size="mini">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p>
                <el-select popper-class="el_input" v-model="value2" placeholder="请选择" size="mini">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </p>
            </div>
            <div><el-button type="primary" size="mini">筛选</el-button></div>
          </div>
        </div>
        <div class="userState_box_rig">
          <div class="userState_box_rig_title">
            <p>搜索</p>
          </div>
          <div class="userState_box_rig_main">
            <el-input placeholder="在此输入净水器mae地址" v-model="input3" class="input-with-select" size="mini">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="userInfo_box d-flex justify-content-between">
      <div class="userInfo_box_lef">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          stripe
          highlight-current-row
          size="mini"
          max-height="400">
          <el-table-column
            prop="userName"
            label="用户姓名"
            label-class-name="aa"
            width="100">
          </el-table-column>
          <el-table-column
            prop="userAddress"
            label="用户地址"
            align="center"
            header-align="center">
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            :current-page.sync="currentPage3"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      <div class="userInfo_box_rig">
        <div class="userInfo_box_rig_top">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">基本信息</el-menu-item>
            <el-menu-item index="2">设备绑定</el-menu-item>
            <el-menu-item index="3">充值列表</el-menu-item>
          </el-menu>
        </div>
        <div class="userInfo_box_rig_bottom">
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li class="infinite-list-item">
              <el-card class="box-card" shadow="never">
                <div class="item">
                  <p>水机品牌：某某品牌</p>
                  <p>水机型号：某某型号</p>
                  <p>设备mac：KKD34J0385K3</p>
                  <p>安装地址：广东省甚至是南山区某某街道某某小区2栋29-2</p>
                </div>
              </el-card>
            </li>
            <li class="infinite-list-item">
              <el-card class="box-card" shadow="never">
                <div class="item">
                  <p>水机品牌：某某品牌</p>
                  <p>水机型号：某某型号</p>
                  <p>设备mac：KKD34J0385K3</p>
                  <p>安装地址：广东省甚至是南山区某某街道某某小区2栋29-2</p>
                </div>
              </el-card>
            </li>
            <li class="infinite-list-item">
              <el-card class="box-card" shadow="never">
                <div class="item">
                  <p>水机品牌：某某品牌</p>
                  <p>水机型号：某某型号</p>
                  <p>设备mac：KKD34J0385K3</p>
                  <p>安装地址：广东省甚至是南山区某某街道某某小区2栋29-2</p>
                </div>
              </el-card>
            </li>
            <li class="infinite-list-item">
              <el-card class="box-card" shadow="never">
                <div class="item">
                  <p>水机品牌：某某品牌</p>
                  <p>水机型号：某某型号</p>
                  <p>设备mac：KKD34J0385K3</p>
                  <p>安装地址：广东省甚至是南山区某某街道某某小区2栋29-2</p>
                </div>
              </el-card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userManage',
  data () {
    return {
      msg: '这是一个vue项目模板',
      options1: [
        {
          value: '选项1',
          label: '余额：1000以上'
        }, {
          value: '选项2',
          label: '余额：3000以上'
        }, {
          value: '选项3',
          label: '余额：5000以上'
        }, {
          value: '选项4',
          label: '余额：10000以上'
        }, {
          value: '选项5',
          label: '余额：100000以上'
        }
      ],
      value1: '',
      options2: [
        {
          value: '选项1',
          label: '充值金额：1W以上'
        }, {
          value: '选项2',
          label: '充值金额：3W以上'
        }, {
          value: '选项3',
          label: '充值金额：5W以上'
        }, {
          value: '选项4',
          label: '充值金额：10W以上'
        }, {
          value: '选项5',
          label: '充值金额：100W以上'
        }
      ],
      value2: '',
      input3: '',
      activeIndex: '2',
      currentPage3: 5,
      tableData: [
        {
          userName: '陈燕',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '李建',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '杨亦盛',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '李可',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        },
        {
          userName: '宋晖',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '徐洪芳',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        },
        {
          userName: '李荣',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '邱春',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '李金盛',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          userName: '陈晓场',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>

<style lang="less" scoped>
  #userManage{
    background: #f5f6fc;
    .userMange_box{
      padding: 15px 60px 0 30px;
      .userState_box{
        .userState_box_lef{
          width: 820px;
          height: 96px;
          background: #fff;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          .userState_box_lef_title{
            height: 40px;
            background: #f3f7ff;
            padding-left: 10px;
            ul{
              height: 40px;
              li{
                font-size: 12px;
                padding: 6px 22px;
                color: #373f6c;
                border-radius: 14px;
                font-weight: bold;
              }
              li.active{
                background: #3f74f9;
                color: #fff;
              }
            }
          }
          .userState_box_lef_main{
            height: 56px;
            line-height: 56px;
            padding: 0 40px 0 14px;
            p{
              width: 170px;
              margin-right: 20px;
            }
          }
        }
        .userState_box_rig{
          width: 390px;
          height: 96px;
          background: #fff;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          .userState_box_rig_title{
            height: 40px;
            line-height: 40px;
            background: #f3f7ff;
            padding-left: 24px;
            p{
              font-size: 12px;
              color: #373f6c;
              font-weight: bold;
            }
          }
          .userState_box_rig_main{
            padding: 15px 40px;
          }
        }
      }
    }
    .userInfo_box{
      padding: 15px 60px 0 30px;
      height: 480px;
      .userInfo_box_lef{
        background: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        height: 100%;
        width: 590px;
        .block{
          margin-top: 30px;
          text-align: center;
        }
      }
      .userInfo_box_rig{
        background: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 590px;
        .userInfo_box_rig_top{
          background: #f2f7ff;
          padding-left: 16px;
          height: 40px;
          .el-menu{
            border-bottom: 0;
            background: transparent;
            .el-menu-item{
              color: #2a3362;
              font-size: 12px;
              height: 40px;
              line-height: 40px;
              font-weight: bold;
              background: transparent;
            }
          }
        }
        .userInfo_box_rig_bottom{
          padding: 20px 20px 0 30px;
          .infinite-list{
            height: 400px;
            .item {
              line-height: 20px;
              font-size: 12px;
              color: #5c6071;
            }
            .box-card {
              width: 100%;
              background: #f9fbff;
              border: 1px solid #f0f3fe;
              margin-top: 15px;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
</style>
