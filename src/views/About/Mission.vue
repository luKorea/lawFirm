<!-- TODO 完成 -->
<template>
  <div class="mission-container">
    <el-col :lg="12" :md="12" :xl="12" :sm="24">
      <div class="title">
        <div class="big-title">{{ missionInfo.japaneseHeadline }}</div>
        <div class="small-title">{{ missionInfo.chineseHeadline }}</div>
      </div>
      <div class="red-content left-font">
        <el-col :lg="24" :md="24" :xl="24" :sm="24">
          <div>{{ missionInfo.japaneseContent }}</div>
        </el-col>
      </div>
      <div class="black-content left-font">
        <el-col :lg="24" :md="24" :xl="24" :sm="24">
          <div>{{ missionInfo.chineseContent }}</div>
        </el-col>
      </div>
    </el-col>
  </div>
</template>

<script>
import { getMissionData } from '../../api/api'

export default {
  name: 'Mission',
  data () {
    return {
      missionInfo: {}
    }
  },
  mounted () {
    getMissionData()
      .then(data => {
        this.missionInfo = data
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
  .mission-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
</style>
