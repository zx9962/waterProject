<style lang="less">
  #equipment{
    width: 1226px;
    .wrap{
        width: 1226px;
        height: 37px;
        background-color: #edf4fc;
        margin: 7px auto;
        box-sizing: border-box;
        padding: 0 20px;
        .inp{
          width: 306px;
          height: 24px;
          background-color: #fff;
          outline: none;
          box-sizing: border-box;
          padding-left: 9px;
          border: none;
          border-radius: 9px;
          font-size: 12px;
        }
    .situation{
      a{
        font-size: 11px;
        color: #26305f;
        font-weight: bold;
        margin-right: 26px;
        width:87px ;
        height: 23px;
        border-radius: 12px;
        display: block;
        line-height: 23px;
      }
      a.router-active{
        background-color: #3f74f9;
        color: #fff;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .classify{
      width: 100%;
      height: 55px;
      background-color: white;
      border-bottom: 1px solid #eaebf7;
      box-sizing: border-box;
      padding: 0 20px;
    p{
      width:73px ;
      height: 24px;
      font-size: 11px;
      text-align: center;
      line-height: 24px;
      border: 1px solid #b3c8fc;
      margin-right: 18px;
      border-radius: 12px;
      color: #747b9a;
    }
    p.active{
      color: #628efb;
      background-color:#f5faff ;
      font-weight: 600;
    }
    #map{
      color: #f5a623;
      font-weight: none;
      font-size: 13px;
    }
  }
  .wr{
    .wrLeft{
      width: 800px;
      height: 445px;
      background-color: white;
      margin: 17px 17px 0 40px;
    }
  }
}
</style>
<template>
  <div id="equipment">
    <advert></advert>
    <div class="wrap d-flex justify-content-between align-items-center">
      <div class="situation d-flex align-items-center">
      <router-link to="/equip/oneP">在线情况</router-link>
      <router-link to="/equip/fault">故障情况</router-link>
      <router-link to="/equip/filter">滤芯情况</router-link>
    </div>
<<<<<<< HEAD
      <input class="inp" type="text" placeholder="在次输入净水器mac地址">
    </div>
    <div class="classify d-flex justify-content-between align-items-center">
      <div class="ifyLeft d-flex justify-content-between align-items-center">
        <p v-for="(item, index) in tabs" :key="index"
          @click="activeTab = index"
          :class="{active: activeTab === index}">{{ item.title }}</p>
=======
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
            background
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
        <div class="device_rig_bottom d-flex justify-content-between">
          <ul>
            <li class="d-flex align-items-center justify-content-between">
              <span>滤芯1</span>
              <el-progress :percentage="percentage" :color="customColorMethod" class="progress"></el-progress>
              <span>约1235小时</span>
              <el-button size="mini" round class="reset" @click="reset" :disabled="percentage<20?true:false">复位</el-button>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span>滤芯2</span>
              <el-progress :percentage="percentage" :color="customColorMethod" class="progress"></el-progress>
              <span>约1235小时</span>
              <el-button size="mini" round class="reset" @click="reset" :disabled="percentage<20?true:false">复位</el-button>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <span>滤芯3</span>
              <el-progress :percentage="percentage" :color="customColorMethod" class="progress"></el-progress>
              <span>约1235小时</span>
              <el-button size="mini" round class="reset" @click="reset" :disabled="percentage<20?true:false">复位</el-button>
            </li>
          </ul>
          <p>滤芯状态低于20%才能复位</p>
        </div>
>>>>>>> c5b70788b7a02c8f9c4e41ff609df257907cf09f
      </div>
      <span id="map">地图</span>
    </div>
    <div class="wr">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import advert from '../../components/advert.vue'
export default {
  name: 'equipment',
  components: {
    advert
  },
  data () {
    return {
      activeTab: 0,
      tabs: [
        {title: '所有'},
        {title: '需更换'},
        {title: '正常'}
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        site: '1325436'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        site: '1325436'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        site: '1325436'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<<<<<<< HEAD
=======

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
          height: 26px;
          border: 1px solid #eef3f7;
          border-radius: 3px;
          font-size: 10px;
          text-indent: 1em;
          outline: none;
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
      height: 480px;
      .device_lef{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 690px;
        background: #ffffff;
        .block{
          margin-top: 30px;
          text-align: center;
        }
      }
      .device_rig{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background: #ffffff;
        width: 520px;
        display: flex;
        flex-direction: column;
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
          flex-direction: column;
          flex: 1;
          ul{
            flex: 1;
            li{
              margin-top: 30px;
              color: #828baf;
              .progress{
                flex: 1;
                margin: 0 0 0 10px;
              }
              .reset{
                margin-left: 10px;
              }
            }
          }
          p{
            text-align: right;
            font-size: 10px;
            color: #d4d8e4;
          }
        }
      }
    }
  }
</style>
>>>>>>> c5b70788b7a02c8f9c4e41ff609df257907cf09f
