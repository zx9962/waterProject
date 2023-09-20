<template>
  <div id="MapContainer">
    <!-- <h2>你好</h2> -->
    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'MapContainer',
  components: {},
  data () {
    return {
      map: null
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {
    // DOM初始化完成进行地图初始化
    this.initMap()
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    initMap () {
      AMapLoader.load({
        key: '[5110ec1092900001296fb7dcecef92ae]', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map('container', { // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 5, // 初始化地图级别
          center: [105.602725, 37.076636] // 初始化地图中心点位置
        })
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
#container{
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 700px;
}
</style>
