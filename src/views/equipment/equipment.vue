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
      <input class="inp" type="text" placeholder="在次输入净水器mac地址">
    </div>
    <div class="classify d-flex justify-content-between align-items-center">
      <div class="ifyLeft d-flex justify-content-between align-items-center">
        <p v-for="(item, index) in tabs" :key="index"
          @click="activeTab = index"
          :class="{active: activeTab === index}">{{ item.title }}</p>
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
