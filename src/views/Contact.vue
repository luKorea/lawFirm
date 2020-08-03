<template>
    <div class="contact-container">
      <el-col :lg="22" :md="22" :xl="22" :sm="24">
        <div class="contact-content">
          <!--地图区域-->
            <div class="content-map" id="echarts"  ref="myEchart"></div>
          <div class="content-swipe">
            <el-carousel height="454px">
              <el-carousel-item height="454px" v-for="item in 4" :key="item">
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
</template>

<script>
import echarts from 'echarts'
import '../../node_modules/echarts/map/js/world.js'

import data from '../utils/echarts.json'
export default {
  name: 'Contact',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.$nextTick(() => this.initChart())
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.myEchart)
      window.onresize = echarts.init(this.$refs.myEchart).resize
      // 把配置和数据放这里
      this.chart.setOption({
        dataRange: {
          show: false,
          realtime: true,
          calculable: true,
          color: ['#6A1D21']
        },
        series: data
      })
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
</style>
