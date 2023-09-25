<style lang="less">
  #filter{
    #wrap{
      width: 1234px;
      // box-sizing: border-box;
      // padding: 0 40px;
      margin: 0 auto;
      #bigLeft{
        width: 800px;
        height: 445px;
        text-align: center;
        line-height: 445px;
        background-color: white;
        margin: 0 17px 0 0px;
      }
      .minRight{
        width: 410px;
        .minTop{
          height: 229px;
          background-color: white;
          box-sizing: border-box;
          padding: 10px;
          p{
            font-size: 12px;
            color:#2a3465 ;
            font-weight: bold;
          }
          ul{
            li{
              font-size: 11px;
              color:#737b8e ;
              box-sizing:border-box ;
              padding:6px 7px ;
              border: 1px solid #f1f5fe;
              margin-top: 3px;
            }
          }
        }
        .minBottom{
          height: 209px;
          margin-top: 10px;
          background-color: white;
          box-sizing: border-box;
          padding: 10px 18px;
          p{
            font-size: 12px;
            color:#2a3465 ;
            font-weight: bold;
          }
          .el-progress-bar{
            margin: 0;
            padding: 0;
            width: 130px;
          }
          .erBox{
            width: 100%;
            .sanBox{
              .span1{
                font-size:14px ;
                color:#5b6388 ;
                font-weight: none;
                margin-right: 10px;
                width: 50px;
              }
            }
            .span2{
                color:#989fbd ;
                font-size:11px ;
                font-weight: none;
                width: 80px;
              }
          }
        }
      }
    }
  }
</style>
<template>
    <div id='filter'>
      <div class="wrapA d-flex">
        <!-- <div id="bigLeft">
          <mapCom></mapCom>
        </div> -->
      <div id="wrap" class=" d-flex justify-content-between">
        <div id="bigLeft"><h1>我是地图</h1></div>
        <div class="minRight">
          <div class="minTop">
            <p>净水器属性</p>
            <ul>
              <li class="d-flex justify-content-between align-items-center" v-for="(item, id) in clear" :key="id">
                <span>{{ item.name }}</span>
                <span>{{ item.typ }}</span>
              </li>
            </ul>
          </div>
          <div class="minBottom">
            <p>净水器状态</p>
            <div class="d-flex align-items-center justify-content-between erBox" v-for="(item, id) in state" :key="id">
              <div class="d-flex align-items-center sanBox" style="width: 70%; height: 33px;">
                <span class="span1">{{item.element}}</span>
                <el-progress :percentage="item.num" :format="format" color="#4ec33e"></el-progress>
              </div>
              <span class="span2">{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
// import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
// import mapCom from '@/components/MapContainer/MapContainer'
export default {
  name: 'filterPage',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      clear: [
        {id: 1, name: 'mac地址', typ: '1098DAEO-18724CDA'},
        {id: 1, name: '型号', typ: ''},
        {id: 1, name: '联网时间', typ: '2016-11-02 19:34:12'},
        {id: 1, name: '类别', typ: '商用-公司租赁-水量充值'},
        {id: 1, name: '当前余额', typ: '196.11元'},
        {id: 1, name: '累计经水量', typ: '105.5m³'}
      ],
      state: [
        {id: 1, element: '滤芯1', num: 40, time: '约30天'},
        {id: 2, element: '滤芯2', num: 80, time: '约60天'},
        {id: 3, element: '滤芯3', num: 15, time: '约13天'},
        {id: 4, element: '滤芯4', num: 85, time: '约70天'},
        {id: 5, element: '滤芯5', num: 56, time: '约56天'}
      ]
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {

  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {
    // var myChart = echarts.init(document.getElementById('bigLeft'))
    // var ROOT_PATH = 'https://echarts.apache.org/examples'
    // var option
    // $.get(ROOT_PATH + '/data/asset/data/hangzhou-tracks.json', function (data) {
    //   const lines = data.map(function (track) {
    //     return {
    //       coords: track.map(function (seg, idx) {
    //         return seg.coord
    //       })
    //     }
    //   })
    //   myChart.setOption(
    //     (option = {
    //       bmap: {
    //         center: [120.13066322374, 30.240018034923],
    //         zoom: 14,
    //         roam: true,
    //         mapStyle: {
    //           styleJson: [
    //             {
    //               featureType: 'water',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#d1d1d1'
    //               }
    //             },
    //             {
    //               featureType: 'land',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#f3f3f3'
    //               }
    //             },
    //             {
    //               featureType: 'railway',
    //               elementType: 'all',
    //               stylers: {
    //                 visibility: 'off'
    //               }
    //             },
    //             {
    //               featureType: 'highway',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#fdfdfd'
    //               }
    //             },
    //             {
    //               featureType: 'highway',
    //               elementType: 'labels',
    //               stylers: {
    //                 visibility: 'off'
    //               }
    //             },
    //             {
    //               featureType: 'arterial',
    //               elementType: 'geometry',
    //               stylers: {
    //                 color: '#fefefe'
    //               }
    //             },
    //             {
    //               featureType: 'arterial',
    //               elementType: 'geometry.fill',
    //               stylers: {
    //                 color: '#fefefe'
    //               }
    //             },
    //             {
    //               featureType: 'poi',
    //               elementType: 'all',
    //               stylers: {
    //                 visibility: 'off'
    //               }
    //             },
    //             {
    //               featureType: 'green',
    //               elementType: 'all',
    //               stylers: {
    //                 visibility: 'off'
    //               }
    //             },
    //             {
    //               featureType: 'subway',
    //               elementType: 'all',
    //               stylers: {
    //                 visibility: 'off'
    //               }
    //             },
    //             {
    //               featureType: 'manmade',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#d1d1d1'
    //               }
    //             },
    //             {
    //               featureType: 'local',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#d1d1d1'
    //               }
    //             },
    //             {
    //               featureType: 'arterial',
    //               elementType: 'labels',
    //               stylers: {
    //                 visibility: 'off'
    //               }
    //             },
    //             {
    //               featureType: 'boundary',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#fefefe'
    //               }
    //             },
    //             {
    //               featureType: 'building',
    //               elementType: 'all',
    //               stylers: {
    //                 color: '#d1d1d1'
    //               }
    //             },
    //             {
    //               featureType: 'label',
    //               elementType: 'labels.text.fill',
    //               stylers: {
    //                 color: '#999999'
    //               }
    //             }
    //           ]
    //         }
    //       },
    //       series: [
    //         {
    //           type: 'lines',
    //           coordinateSystem: 'bmap',
    //           data: lines,
    //           polyline: true,
    //           lineStyle: {
    //             color: 'purple',
    //             opacity: 0.6,
    //             width: 1
    //           }
    //         }
    //       ]
    //     })
    //   )
    // })
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
