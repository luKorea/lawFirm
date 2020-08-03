<!-- TODO 完成 -->
<template>
  <div class="wrap-container">
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="title">
      <div class="big-title">{{ headquartersInfo.japaneseHeadline }}</div>
      <div class="small-title">{{ headquartersInfo.chineseHeadline }}</div>
    </div>
    <div class="red-content left-font">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div>{{ headquartersInfo.japaneseContent }}</div>
      </el-col>
    </div>
    <div class="black-content left-font">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div>{{ headquartersInfo.chineseContent }}</div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getBgData, getHeadquartersData } from '../../api/api'

export default {
  name: 'headquarters',
  data () {
    return {
      headquartersInfo: {},
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
      getHeadquartersData()
        .then(data => {
          this.headquartersInfo = data
          console.log(this.headquartersInfo)
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
              if (item.path === '/headquarters') {
                this.img = item.imgPath
                console.log(item.path)
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'error',
            message: '数据返回失败'
          })
        })
    }
  }
}
</script>

<style scoped lang="less">

</style>
