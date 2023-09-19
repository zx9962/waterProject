<template>
  <div id="file">
    <advert></advert>
    <div class="file_box d-flex justify-content-between">
      <div class="allDevice_box">
        <div class="allDevice_box_title">
          <ul class=" d-flex align-items-center">
            <li>未通知设备</li>
            <li>已通知设备</li>
            <li class="active">全部设备</li>
          </ul>
        </div>
        <div class="allDevice_box_main">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            stripe
            highlight-current-row
            size="mini"
            max-height="400">
            <el-table-column
              width="50"
              align="center">
              <template slot="header" slot-scope="scope">
                <input type="checkbox">
              </template>
              <template slot-scope="scope">
                <input type="checkbox" :checked="scope.row.isChange">
              </template>
            </el-table-column>
            <el-table-column
              label="设备型号"
              width="100"
              align="center"
              prop="type">
            </el-table-column>
            <el-table-column
              width="409"
              align="center">
              <template slot="header" slot-scope="scope">
                <div class="d-flex table_head">
                  <p>滤芯状态</p>
                  <el-checkbox size="mini" v-model="disChecked1" disabled>正常状态</el-checkbox>
                  <el-checkbox size="mini" v-model="disChecked2" disabled>需要更换</el-checkbox>
                </div>
              </template>
              <template slot-scope="scope">
                <ul class="d-flex">
                  <li v-for="(item, i) in scope.row.filter" :key="i" class="scope_filter">
                    <el-badge :is-dot="item.fitHot" class="item">
                      <el-checkbox v-model="item.fitIsChange" size="mini" :label="item.fitName" border></el-checkbox>
                    </el-badge>
                  </li>
                </ul>
              </template>
            </el-table-column>
            <el-table-column
              label="最近通知"
              align="center"
              width="120"
              prop="notice">
            </el-table-column>
            <el-table-column
              label="用户信息"
              width="120"
              align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <p class="prompt">据示:调勾选设备后在右侧的辑消息并发送</p>
          <div class="block">
            <el-pagination
              :current-page.sync="currentPage3"
              :page-size="10"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="file_main_box">
        <div class="remind_box">
          <div class="remind_box_title d-flex justify-content-between">
            <span>滤芯更换提醒</span>
            <span>需更换900个</span>
          </div>
          <div class="remind_box_main">
            <p class="d-flex justify-content-between">
              <input class="remind_first" type="checkbox" checked disabled>
              <span>未提醒</span>
              <span class="flex-1"></span>
              <span>560</span>
              <span>个</span>
            </p>
            <div>
              <el-divider></el-divider>
            </div>
            <p class="d-flex justify-content-between align-items-center">
              <span class="remind_first">
                <el-badge is-dot class="item"></el-badge>
              </span>
              <span>已提醒</span>
              <span class="flex-1"></span>
              <span>340</span>
              <span>个</span>
            </p>
          </div>
        </div>
        <div class="send_age_box">
          <div class="send_age_box_title">
            <span>发送消息</span>
          </div>
          <div class="send_age_main">
            <div class="textarea_inp">
              <p>用户您好！您的净水器的<a href="">滤芯1、滤芯2</a>即将到期，请及时更换，或点击下面链接购买，维修人员将在三日内上门协助安装！</p>
              <p>http://tmall.comjingshuiqi</p>
              <p>使用水之宝，生活更美好</p>
            </div>
            <div class="inp_btn">
              <el-button type="primary" size="small">发送消息</el-button>
            </div>
            <p>
              提醒消息将发送至左侧选中用户的手机号
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'file',
  data () {
    return {
      msg: '这是一个vue项目模板',
      tableData: [
        {
          isChange: true,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: true,
              fitHot: true
            },
            {
              fitName: '滤芯2',
              fitIsChange: true,
              fitHot: false
            },
            {
              fitName: '滤芯3',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯4',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: true,
              fitHot: false
            }
          ]
        }, {
          isChange: false,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯2',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯3',
              fitIsChange: true,
              fitHot: false
            },
            {
              fitName: '滤芯4',
              fitIsChange: true,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: true,
              fitHot: false
            }
          ]
        }, {
          isChange: true,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: true,
              fitHot: true
            },
            {
              fitName: '滤芯2',
              fitIsChange: true,
              fitHot: true
            },
            {
              fitName: '滤芯3',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯4',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: false,
              fitHot: false
            }
          ]
        }, {
          isChange: false,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯2',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯3',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯4',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: false,
              fitHot: false
            }
          ]
        }, {
          isChange: false,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯2',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯3',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯4',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: false,
              fitHot: false
            }
          ]
        }, {
          isChange: true,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: true,
              fitHot: true
            },
            {
              fitName: '滤芯2',
              fitIsChange: true,
              fitHot: true
            },
            {
              fitName: '滤芯3',
              fitIsChange: true,
              fitHot: true
            },
            {
              fitName: '滤芯4',
              fitIsChange: true,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: false,
              fitHot: false
            }
          ]
        }, {
          isChange: true,
          name: '王小虎',
          notice: '2023.09.15',
          type: '水博士',
          filter: [
            {
              fitName: '滤芯1',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯2',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯3',
              fitIsChange: false,
              fitHot: false
            },
            {
              fitName: '滤芯4',
              fitIsChange: true,
              fitHot: false
            },
            {
              fitName: '滤芯5',
              fitIsChange: true,
              fitHot: true
            }
          ]
        }
      ],
      disChecked1: false,
      disChecked2: true,
      currentPage3: 5
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  #file{
    .file_box{
      height: 540px;
      padding: 15px 60px 0 30px;
      .allDevice_box{
        width: 800px;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .allDevice_box_title{
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
        .allDevice_box_main{
          .table_head{
            justify-content: flex-end;
            p{
              margin-right: 20px;
            }
            .el-checkbox{
              margin-right: 10px;
            }
          }
          .scope_filter{
            margin-right: 10px;
            padding: 5px 0;
            font-size: 10px;
            .el-checkbox{
              padding: 3px 5px;
            }
          }
          .prompt{
            font-size: 10px;
            color: #abb1c9;
            padding-left: 20px;
            line-height: 26px;
          }
          .block{
            margin-top: 20px;
            text-align: center;
          }
        }
      }
      .file_main_box{
        width: 430px;
        border-radius: 5px;
        .remind_box{
          height: 180px;
          background: #fff;
          border-radius: 5px;
          overflow: hidden;
          .remind_box_title{
            height: 40px;
            background: #f3f7ff;
            padding: 0 20px 0 15px;
            line-height: 40px;
            font-size: 12px;
            color: #8890ab;
            span:first-child{
              color: #000;
              font-weight: bold;
            }
          }
          .remind_box_main{
            padding: 0 20px 0 15px;
            p{
              height: 70px;
              line-height: 70px;
              font-size: 14px;
              span:last-child{
                font-size: 10px;
                color: #aab1c9;
                margin-left: 13px;
              }
              .remind_first{
                margin-right: 15px;
              }
            }
            div{
              height: 1px;
              margin: 0;
              padding: 0 15px;
              box-sizing: border-box;
            }
            .item {
              line-height: 0;
              height: 10px;
              padding: 0;
            }
          }
        }
        .send_age_box{
          margin-top: 15px;
          background: #fff;
          border-radius: 5px;
          overflow: hidden;
          height: 345px;
          .send_age_box_title{
            height: 40px;
            background: #f3f7ff;
            padding: 0 20px 0 15px;
            line-height: 40px;
            font-size: 12px;
            color: #000;
            font-weight: bold;
          }
          .send_age_main{
            padding: 15px 15px 0;
            .textarea_inp{
              width: 100%;
              height: 190px;
              border: 1px solid #f2f6f9;
              border-radius: 5px;
              padding: 15px;
              box-sizing: border-box;
              background: #fafbfc;
              p{
                line-height: 18px;
                font-size: 12px;
                color: #7b82a0;
                a{
                  color: #2f68f9;
                }
              }
              p:nth-child(2){
                color: #2f68f9;
                text-decoration: underline;
                line-height: 25px;
              }
              p:last-child{
                color: #9aa0bf;
              }
            }
            .inp_btn{
              margin: 15px 0;
            }
            p{
              color: #d2d6e3;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
</style>
