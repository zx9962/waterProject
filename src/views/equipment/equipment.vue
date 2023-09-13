<template>
  <div id="equipment">
    <advert></advert>
    <div class="situation">
      <div class="sta_top d-flex align-items-center justify-content-between">
        <ul class="sta_top_ul  d-flex align-items-center">
          <li class="active">在线情况</li>
          <li>故障情况</li>
          <li>滤芯情况</li>
        </ul>
        <input type="text" class="sta_mac_inp" placeholder="在此输入净水器mac地址">
      </div>
      <div class="sta_bottom d-flex align-items-center justify-content-between">
        <ul class="sta_bottom_ul d-flex align-items-center">
          <li class="active">所有</li>
          <li>在线</li>
          <li>离线</li>
        </ul>
        <p class="d-flex align-items-center">
          <i class="el-icon-map-location"></i>
          <span>地图</span>
        </p>
      </div>
    </div>
    <div class="device_info d-flex justify-content-between">
      <div class="device_lef">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          stripe
          highlight-current-row
          size="mini"
          max-height="400">
          <el-table-column
            prop="equip"
            label="设备mac"
            label-class-name="aa"
            width="200">
          </el-table-column>
          <el-table-column
            prop="equipStatic"
            label="设备状态"
            align="center"
            header-align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="用户姓名"
            align="center"
            header-align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="userAddress"
            align="center"
            header-align="center"
            width="289"
            label="用户地址">
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
      <div class="device_rig">
        <div class="device_rig_top">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">滤芯状态</el-menu-item>
            <el-menu-item index="2">报警列表</el-menu-item>
            <el-menu-item index="3">保修列表</el-menu-item>
            <el-menu-item index="4">分享信息</el-menu-item>
            <el-menu-item index="5">租赁信息</el-menu-item>
          </el-menu>
        </div>
        <div class="device_rig_bottom">
          <ul>
            <li class="d-flex align-items-center justify-content-between">
              <span>滤芯1</span>
              <el-progress :percentage="percentage" :color="customColorMethod" class="progress"></el-progress>
              <span>约1235小时</span>
              <el-button size="mini" round class="reset" @click="reset">复位</el-button>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span>滤芯2</span>
              <el-progress :percentage="percentage" :color="customColorMethod" class="progress"></el-progress>
              <span>约1235小时</span>
              <el-button size="mini" round class="reset" @click="reset">复位</el-button>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span>滤芯3</span>
              <el-progress :percentage="percentage" :color="customColorMethod" class="progress"></el-progress>
              <span>约1235小时</span>
              <el-button size="mini" round class="reset" @click="reset">复位</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equipment',
  components: {
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      percentage: 40,
      customColor: '#409eff',
      currentPage3: 5,
      activeIndex: '1',
      activeIndex2: '1',
      tableData: [
        {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        },
        {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        },
        {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }, {
          equip: '93KDNGDKAK3K',
          equipStatic: '正常',
          userName: '王小虎',
          userAddress: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    customColorMethod (percentage) {
      if (percentage < 30) {
        return '#ff6363'
      } else {
        return '#38bb26'
      }
    },
    reset () {
      this.percentage = 0
    }
  }
}
</script>

<style lang="less" scoped>
  #equipment{
    background: #f5f6fc;
    .situation{
      width: 1225px;
      height: 94px;
      background: #fff;
      margin: 0 auto;
      margin-top: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .sta_top{
        height: 40px;
        padding: 0 20px 0 8px;
        background: #f3f8ff;
        li{
          width: 88px;
          height: 24px;
          border-radius: 12px;
          font-size: 12px;
          text-align: center;
          line-height: 24px;
          color: #646c8f;
        }
        li.active{
          color: #fff;
          background: #3f74f9;
        }
        .sta_mac_inp{
          width: 310px;
          height: 24px;
          border: 1px solid #eef3f7;
          border-radius: 3px;
          font-size: 12px;
          text-indent: 1em;
        }
      }
      .sta_bottom{
        height: 54px;
        padding: 0 20px 0 8px;
        li{
          width: 72px;
          height: 26px;
          border: 1px solid #e7eef4;
          text-align: center;
          line-height: 26px;
          font-size: 12px;
          border-radius: 13px;
          margin-right: 20px;
        }
        li.active{
          color: #2f69f9;
          border-color: #2f69f9;
        }
        p{
          color: #ff5400;
          font-size: 12px;
          span{
            margin-left: 4px;
          }
        }
      }
    }
    .device_info{
      width: 1225px;
      margin: 0 auto;
      margin-top: 15px;
      border-radius: 5px;
      .device_lef{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 690px;
        height: 510px;
        background: #ffffff;
        .block{
          margin-top: 50px;
          text-align: center;
        }
      }
      .device_rig{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background: #ffffff;
        width: 520px;
        .device_rig_top{
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
        .device_rig_bottom{
          padding: 30px 25px;
          font-size: 10px;
          li{
            margin-top: 30px;
            .progress{
              flex: 1;
              margin: 0 0 0 10px;
            }
            .reset{
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
</style>
