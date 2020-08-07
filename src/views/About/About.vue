<!-- TODO 完成 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="about-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <el-divider><span class="red-font">{{ aboutInfo.japaneseHeadline }}</span></el-divider>
        <div class="black-font">{{ aboutInfo.chineseHeadline }}</div>
        <div class="red-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <div>{{ aboutInfo.japaneseContent }}</div>
          </el-col>
        </div>
        <div class="black-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <div>{{ aboutInfo.chineseContent }}</div>
          </el-col>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getAboutData, getBgData } from '../../api/api'

export default {
  name: 'About',
  data () {
    return {
      aboutInfo: {},
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: ''
    }
  },
  mounted () {
    this.getData()
    this.getBg()
  },
  methods: {
    getData () {
      getAboutData()
        .then(data => {
          this.aboutInfo = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/about') {
                this.img = this.imgUrl + item.imgPath
                console.log(item.path)
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
  .about-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
</style>
