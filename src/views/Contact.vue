<template>
  <div>
    <div class="bg-container contact" :style="{background: 'url( '+ img +')'}"></div>
    <div class="contact-container">
      <el-col :lg="22" :md="22" :xl="22" :sm="24">
        <div class="contact-content">
          <!--地图区域-->
          <div class="content-map" id="echarts"  ref="myEchart"></div>
          <!--TODO 轮播图区域-->
          <div class="content-swipe">
            <el-carousel
              :autoplay="false" trigger="click"
              arrow="never" height="454px"
              @change="lightMap"
            >
              <el-carousel-item  height="454px" v-for="item in 4" :key="item">
                <div class="move-font">
                  <span class="move-title">国内分所</span>
                  <div class="move-content">
                    <div>中山分所 Zhongshan Office</div>
                    <div>中山オフィス</div>
                    <div>地址：中国中山市东区中山五路2号紫马奔腾广场3座17层</div>
                    <div>电话：0760-87807999</div>
                    <div>Address：1701, 3 Zima Pentium Square, No. 2 Zhongshan Wulu, Zhongshan East District, Zhongshan, China</div>
                    <div>Tel: +86 760-87807999</div>
                    <div>所在地：中山市東区中山五路2号紫馬奔騰広場3座17階電話番号：+86 760-87807999</div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getBgData } from '../api/api'
import echarts from 'echarts'
import world from 'echarts/map/json/world.json'

export default {
  name: 'Contact',
  data () {
    return {
      chart: null,
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: '',
      symbolSize: 8,
      data: [ // 散点数据  value:[纬度，经度，数据]
        { name: '浙江省', value: [122.6953, 30.8936, 100], index: 0 },
        { name: '江苏省', value: [117.5977, 34.4531, 100], index: 1 },
        { name: '宁夏', value: [106.9629, 38.9795, 100], index: 2 },
        { name: '天津', value: [117.334, 40.1221, 100], index: 3 }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => this.createMap())
    this.getBg()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    // TODO 点击每一项的时候，将地图对应的点高亮
    lightMap (index) {
      console.log(index)
    },
    // 初始化数据
    getOptions () {
      return {
        color: ['#008c8c'],
        // 要显示散点图，必须填写这个配置
        geo: {
          show: true, // 是否显示地理坐标系组件
          roam: false, // 是否允许鼠标滚动放大，缩小
          map: 'world',
          emphasis: { // 高亮状态下的多边形和标签样式。
            itemStyle: { // 区域
              areaColor: '#ccc'
            }
          },
          center: [100.4, 35.9], // 视图中心，展示在中国
          zoom: 1 // 起始缩放比例
        },
        // 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 10,
            mapType: 'world',
            data: this.data,
            hoverAnimation: false // 鼠标移入放大圆
          }
        ]
      }
    },
    createMap (initOption) {
      const dom = document.getElementById('echarts')
      const mapChart = echarts.init(dom)
      this.chart = echarts.init(dom)
      echarts.registerMap('world', world)/* 注册world地图 */
      const options = initOption || this.getOptions()
      mapChart.setOption(options)
      return mapChart
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/contact') {
                this.img = item.imgPath
                console.log(item.path)
              }
            })
          }
        })
        .catch(err => { console.log(err) })
    }
  }
}
</script>

<style scoped lang="less">
.contact-container {
  display: flex;
  justify-content: space-evenly;
  .contact-content {
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    .content-map {
      width: 1160px;
      height: 500px;
    }
    .content-swipe {
      background-color: #6A1D21;
      border-radius: 10px;
      width: 311px;
      height: 454px;
      color: #fff;
      margin-top: 60px;
      .move-font {
        margin: 20px;
        text-align: center;
        .move-title {
          font-size: 20px;
          line-height: 35px;
        }
        .move-content {
          margin-top: 41px;
          font-size: 12px;
          text-align: left;
          font-weight: 400;
          color: rgba(255,255,255,1);
          line-height: 24px;
        }
      }
    }
  }
}
.el-carousel__button {
  width:34px;
  height:10px;
  background: #ccc !important;
  border-radius:5px;
}
.contact {
  margin-bottom: 20px !important;
}
</style>
