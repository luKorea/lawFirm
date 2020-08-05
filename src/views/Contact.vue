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
                  <span class="move-title">国内分所</span>
                  <div class="move-content">
                    <div>{{ item.a }}</div>
                    <div>{{ item.b }}</div>
                    <div>地址：{{ item.c }}</div>
                    <div>电话：{{ item.d }}</div>
                    <div>Address：{{ item.e }}</div>
                    <div>Tel: {{ item.f }}</div>
                    <div>所在地：{{ item.g }}</div>
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
      mapChart: '',
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: '',
      data: [
        {
          name: '南京', // 城市name
          value: [118.796252, 32.0739, 150], // 城市坐标 前两个经纬度 第三个value值
          coords: [
            [107.88, 22.863], // 起点城市坐标
            [118.796252, 32.0739] // 终点城市坐标
          ]
        },
        {
          name: '西藏',
          value: [91.11, 29.97, 100],
          coords: [
            [118.796252, 32.0739],
            [91.11, 29.97]
          ]
        },
        {
          name: '广西',
          value: [107.88, 22.863, 100],
          coords: [
            [118.796252, 32.0739],
            [-93.310319, 36.908779]
          ]
        },
        {
          name: '美国',
          value: [-93.310319, 36.908779, 100],
          coords: [
            [118.796252, 32.0739],
            [-93.310319, 36.908779]
          ]
        }
      ],
      listData: [
        {
          a: '中山分所 Zhongshan Office',
          b: '中山オフィス',
          c: '中国中山市东区中山五路2号紫马奔腾广场3座17层',
          d: '0760-87807999',
          e: '1701, 3 Zima Pentium Square, No. 2 Zhongshan Wulu, Zhongshan East District, Zhongshan, China',
          f: '+86 760-87807999',
          g: '中山市東区中山五路2号紫馬奔騰広場3座17階電話番号：+86 760-87807999'
        },
        {
          a: '中山分所 Zhongshan Office',
          b: '中山オフィス',
          c: '中国中山市东区中山五路2号紫马奔腾广场3座17层',
          d: '0760-87807999',
          e: '1701, 3 Zima Pentium Square, No. 2 Zhongshan Wulu, Zhongshan East District, Zhongshan, China',
          f: '+86 760-87807999',
          g: '中山市東区中山五路2号紫馬奔騰広場3座17階電話番号：+86 760-87807999'
        },
        {
          a: '中山分所 Zhongshan Office',
          b: '中山オフィス',
          c: '中国中山市东区中山五路2号紫马奔腾广场3座17层',
          d: '0760-87807999',
          e: '1701, 3 Zima Pentium Square, No. 2 Zhongshan Wulu, Zhongshan East District, Zhongshan, China',
          f: '+86 760-87807999',
          g: '中山市東区中山五路2号紫馬奔騰広場3座17階電話番号：+86 760-87807999'
        },
        {
          a: '中山分所 Zhongshan Office',
          b: '中山オフィス',
          c: '中国中山市东区中山五路2号紫马奔腾广场3座17层',
          d: '0760-87807999',
          e: '1701, 3 Zima Pentium Square, No. 2 Zhongshan Wulu, Zhongshan East District, Zhongshan, China',
          f: '+86 760-87807999',
          g: '中山市東区中山五路2号紫馬奔騰広場3座17階電話番号：+86 760-87807999'
        }
      ],
      options: {}
    }
  },
  watch: {
    // 观察option的变化
    options: {
      handler (newVal, oldVal) {
        if (this.mapChart) {
          if (newVal) {
            console.log(newVal)
            this.mapChart.setOption(newVal)
          } else {
            console.log(oldVal)
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
    this.$nextTick(() => this.createMap())
    this.getBg()
  },
  beforeDestroy () {
    if (!this.mapChart) {
      return
    }
    this.mapChart.dispose()
    this.mapChart = null
  },
  methods: {
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
        color: ['#b5b3b3'],
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
            symbolSize: val => {
              return val[2] / 10
            },
            mapType: 'world',
            data: this.data,
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
        console.log(params)
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
      margin-top: 40px;
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
