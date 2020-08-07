<!-- TODO 完成 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="superiority-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="title">
          <div class="big-title">{{ superiorityInfo.japaneseHeadline }}</div>
          <div class="small-title">{{ superiorityInfo.chineseHeadline }}</div>
        </div>
        <div class="red-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <div>{{ superiorityInfo.japaneseContent }}</div>
          </el-col>
        </div>
        <div class="black-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <div>{{ superiorityInfo.chineseContent }}</div>
          </el-col>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import { getBgData, getSuperiorityData } from '../../api/api'

export default {
  name: 'Superiority',
  data () {
    return {
      superiorityInfo: {},
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
      getSuperiorityData()
        .then(data => {
          this.superiorityInfo = data
        })
        .catch(err => { console.log(err) })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/superiority') {
                this.img = this.imgUrl + item.imgPath
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
  .superiority-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
</style>
