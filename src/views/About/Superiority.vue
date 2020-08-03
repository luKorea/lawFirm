<!-- TODO 完成 -->
<template>
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
</template>

<script>
import { getSuperiorityData } from '../../api/api'

export default {
  name: 'Superiority',
  data () {
    return {
      superiorityInfo: {}
    }
  },
  mounted () {
    getSuperiorityData()
      .then(data => {
        this.superiorityInfo = data
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
  .superiority-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
</style>
