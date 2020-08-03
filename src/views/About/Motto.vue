<!-- TODO 完成 -->
<template>
  <div class="motto-container">
    <el-col :lg="12" :md="12" :xl="12" :sm="24">
      <div class="title">
        <div class="big-title">{{ mottoInfo.japaneseHeadline }}</div>
        <div class="small-title">{{ mottoInfo.chineseHeadline }}</div>
      </div>
      <div class="red-content left-font">
        <el-col :lg="24" :md="24" :xl="24" :sm="24">
          <div>{{ mottoInfo.japaneseContent }}</div>
        </el-col>
      </div>
      <div class="black-content left-font">
        <el-col :lg="24" :md="24" :xl="24" :sm="24">
          <div>{{ mottoInfo.chineseContent }}</div>
        </el-col>
      </div>
    </el-col>
  </div>
</template>

<script>
import { getMottoData } from '../../api/api'

export default {
  name: 'Motto',
  data () {
    return {
      mottoInfo: {}
    }
  },
  mounted () {
    getMottoData()
      .then(data => {
        this.mottoInfo = data
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
  .motto-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
</style>
