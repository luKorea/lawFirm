<!-- TODO 完成 -->
<template>
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
</template>

<script>
import { getAboutData } from '../../api/api'

export default {
  name: 'About',
  data () {
    return {
      aboutInfo: {}
    }
  },
  mounted () {
    getAboutData()
      .then(data => {
        this.aboutInfo = data
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
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
