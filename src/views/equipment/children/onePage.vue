<style lang="less">
  #onePage{
    .wrLeft{
      width: 800px;
      height: 445px;
      background-color: white;
      margin: 17px 17px 0 40px;
      .block{
        margin-top: 25px;
      }
      .has-gutter tr th,.el-table__body-wrapper tbody tr td {
        text-align: center;
      }
      .has-gutter tr th{
        background-color: #f4f8ff;
      }
    }
    .wrRight{
      width:660px;
      height:445px;
      margin-top: 17px;
      background-color: white;
      .wrRTop{
        .el-tabs__nav-scroll{
          background-color: #f4f8ff;
          height: 50px;
        }
        .el-tabs__item{
          height: 50px;
        }
        .tab-paneX{
          box-sizing: border-box;
          padding: 0 35px;
          .el-progress{
            // margin-top: 42px;
            width: 70%;
          }
          .erBox{
            .sanBox{
              .span1{
                font-size:14px ;
                color:#5b6388 ;
                font-weight: none;
                margin-right: 10px;
                width: 42px;
              }
              .span2{
                color:#989fbd ;
                font-size:11px ;
                font-weight: none;
                width: 80px;
              }
            }
            .minBox{
              button{
                color: #c6d6fd;
                background-color: white;
                border: 1px solid #c6d6fd;
                width: 77px;
                height: 31px;
                font-size: 12px;
                font-weight: none;
                border-radius: 15px;
                margin-left: 40px;
              }
              button:hover {
                background-color: #2876ff;
                color: #fff;
              }
            }
          }
        }
        .el-progress__text{
            font-size: 16px !important;
            color: #ff7606 !important;
            font-weight: bold;
          }
      }
    }
  }
</style>
<template>
    <div id='onePage' class="d-flex justify-content-between">
      <div class="wrLeft">
        <template>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="设备mac"
              width="200">
            </el-table-column>
            <el-table-column
              prop="name"
              label="设备状态"
              width="142">
            </el-table-column>
            <el-table-column
              prop="address"
              label="用户姓名"
              width="130">
            </el-table-column>
            <el-table-column
              prop="site"
              label="用户地址"
              width="220">
            </el-table-column>
          </el-table>
        </template>
        <div class="block d-flex justify-content-around">
          <!-- <span class="demonstration">完整功能</span> -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      <div class="wrRight">
        <div class="wrRTop">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="滤芯状态" name="first" class="tab-paneX">
                <div class="d-flex align-items-center erBox" v-for="(item, id) in prog" :key="id">
                  <div class="d-flex align-items-center sanBox" style="width: 70%; height: 62px;">
                    <span class="span1">{{item.element}}</span>
                    <el-progress :percentage="item.num" :format="format" color="#4ec33e"></el-progress>
                    <span class="span2">{{ item.time }}</span>
                  </div>
                  <div class="d-flex align-items-center minBox justify-content-around">
                    <button>复位</button>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="报警列表" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="保修列表" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="分享信息" name="fourth">定时任务补偿</el-tab-pane>
              <el-tab-pane label="租赁信息" name="selac">定时任务补偿</el-tab-pane>
            </el-tabs>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'onePage',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      activeName: 'first',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '董事长',
        site: '1325436'
      }],
      percentage: 20,
      prog: [
        {id: 1, element: '滤芯1', num: 40, time: '约1253小时'},
        {id: 2, element: '滤芯2', num: 80, time: '约1253小时'},
        {id: 3, element: '滤芯3', num: 15, time: '约1253小时'},
        {id: 4, element: '滤芯4', num: 85, time: '约1253小时'},
        {id: 5, element: '滤芯5', num: 56, time: '约1253小时'}
      ]
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
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
