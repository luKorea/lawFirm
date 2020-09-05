<template>
  <div>
    <div class="bg-container contact" :style="{background: 'url( '+ img +')'}"></div>
    <div class="contact-container">
      <el-col :lg="24" :md="24" :xl="24" :sm="24">
        <div class="contact-content">
          <!--地图区域-->
          <div class="content-map" id="echarts"  ref="myEchart"></div>
          <!--TODO 轮播图区域-->
          <div class="content-swipe">
            <el-carousel
              :autoplay="false" trigger="click"
              arrow="never" height="454px"
              @change="lightMap"
              ref="carousel"
            >
              <el-carousel-item
                height="454px"
                v-for="(item, index) in listData"
                :key="index"
                :name="String(index)"
              >
                <div class="move-font">
                  <span class="move-title">
                    {{ item.type === 1 ? '国内分所' : '国外分所' }}
                  </span>
                  <div class="move-content">
                    <div>[ {{ item.chshallName || '' }} ]</div>
                    <div>{{ item.enshallName || '' }}</div>
                    <div>{{ item.jashallName || '' }}</div>
                    <div v-if="item.jaAddress">地址：{{ item.jaAddress }}</div>
                    <div v-if="item.chPhone">联系方式：{{ item.chPhone }}</div>
                    <div v-if="item.enAddress">Address：{{ item.enAddress }}</div>
                    <div v-if="item.enPhone">Contact: {{ item.enPhone }}</div>
                    <div v-if="item.chAddress">所在地：{{ item.chAddress }}</div>
                    <div v-if="item.jaPhone">連絡先：{{ item.jaPhone }}</div>
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
import { getBgData, getMapData } from '../api/api'
import echarts from 'echarts'
import world from 'echarts/map/json/world.json'

export default {
  name: 'Contact',
  data () {
    return {
      mapChart: '',
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      path: 'path://M661.333333 320c0-83.2-66.133333-149.333333-149.333333-149.333333s-149.333333 66.133333-149.333333 149.333333 66.133333 149.333333 149.333333 149.333333 149.333333-66.133333 149.333333-149.333333z m-256 0c0-59.733333 46.933333-106.666667 106.666667-106.666667s106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666667-106.666667-46.933333-106.666667-106.666667z',
      img: '',
      data: [],
      listData: [],
      options: {}
    }
  },
  watch: {
    // 观察option的变化
    options: {
      'handler' (newVal, oldVal) {
        if (this.mapChart) {
          if (newVal) {
            this.mapChart.setOption(newVal)
          } else {
            this.mapChart.setOption(oldVal)
          }
        } else {
          this.createMap()
        }
      },
      deep: true // 对象内部属性的监听，关键。
    }
  },
  mounted () {
    this.getBg()
    this.getData()
    this.createMap()
  },
  beforeDestroy () {
    if (!this.mapChart) {
      return
    }
    this.mapChart.dispose()
    this.mapChart = null
  },
  methods: {
    getData () {
      getMapData()
        .then(data => {
          this.listData = data.listData
          this.options.series[0].data = data.data
          this.options.series[1].data = data.data
          // this.data = data.data
        }).catch(err => console.log(err))
    },
    // TODO 点击每一项的时候，将地图对应的点高亮
    lightMap (index) {
      this.options.series[0].data.forEach((item, i) => {
        if (i === index) {
          this.options.series[0].data[i].value[2] = 150
        } else {
          this.options.series[0].data[i].value[2] = 100
        }
      })
      this.mapChart.setOption(this.options)
    },
    createMap () {
      const dom = document.getElementById('echarts')
      this.mapChart = echarts.init(dom)
      echarts.registerMap('world', world)/* 注册world地图 */
      this.options = {
        // 要显示散点图，必须填写这个配置
        geo: {
          show: true, // 是否显示地理坐标系组件
          roam: false, // 是否允许鼠标滚动放大，缩小
          map: 'world',
          itemStyle: {
            normal: {
              areaColor: '#6A1D21',
              borderColor: '#6A1D21',
              borderWidth: 0
            },
            emphasis: {
              areaColor: '#6A1D21',
              borderColor: '#6A1D21',
              borderWidth: 0
            }
          },
          zoom: 1 // 起始缩放比例
        },
        // 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        series: [
          // 散点数据
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            color: ['#ccc'],
            symbolSize: val => {
              return val[2] / 5
            },
            mapType: 'world',
            data: this.data,
            animationDuration: 0,
            symbol: 'path://M569.6 838.4c89.6-128 256-396.8 256-524.8 0-166.4-134.4-307.2-307.2-307.2S211.2 147.2 211.2 313.6c0 121.6 166.4 390.4 256 524.8C492.8 870.4 544 870.4 569.6 838.4zM326.4 313.6c0-102.4 83.2-192 192-192 102.4 0 192 83.2 192 192s-83.2 192-192 192C416 499.2 326.4 416 326.4 313.6zM633.6 313.6c0-64-51.2-115.2-115.2-115.2S403.2 249.6 403.2 313.6c0 64 51.2 115.2 115.2 115.2S633.6 377.6 633.6 313.6zM672 723.2c-12.8 19.2-25.6 38.4-38.4 57.6 102.4 19.2 153.6 51.2 153.6 70.4 0 25.6-96 83.2-275.2 83.2s-275.2-57.6-275.2-83.2c0-19.2 51.2-57.6 153.6-70.4-12.8-19.2-25.6-38.4-38.4-57.6-102.4 19.2-179.2 64-179.2 128 0 96 166.4 140.8 332.8 140.8s332.8-51.2 332.8-140.8C851.2 787.2 774.4 742.4 672 723.2z',
            symbolKeepAspect: true,
            hoverAnimation: false // 鼠标移入放大圆
          },
          // 线数据
          {
            type: 'lines', // 线数据
            zlevel: 1,
            lineStyle: {
              normal: {
                width: 1, // 尾迹线条宽度
                color: '#ccc', // 线颜色
                opacity: 0.6, // 尾迹线条透明度
                curveness: 0.2 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。
              }
            },
            data: this.data
          }
        ]
      }
      this.mapChart.on('click', params => {
        this.listData.forEach((item, index) => {
          if (params.dataIndex === index) {
            this.setActiveItem(index)
          }
        })
      })
      this.mapChart.setOption(this.options)
    },
    setActiveItem (index) {
      this.$refs.carousel.setActiveItem(index)
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/contact') {
                this.img = this.imgUrl + item.imgPath
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
      margin-top: 40px;
      padding: 10px;
      .move-font {
        margin: 20px;
        text-align: center;
        .move-title {
          font-size: 20px;
          line-height: 35px;
        }
        .move-content {
          font-size: 12px;
          text-align: left;
          font-weight: 400;
          color: rgba(255,255,255,1);
          line-height: 24px;
          div {
            margin-bottom: 4px;
          }
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
