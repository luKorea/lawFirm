<!-- TODO 完成 -->
<template>
  <div class="team-container">
    <el-col :lg="12" :md="12" :xl="12" :sm="24">
      <div class="title">
        <el-divider><span class="red-font">{{ teamDescInfo.japaneseHeadline }}</span></el-divider>
        <div class="black-font">{{ teamDescInfo.chineseHeadline }}</div>
      </div>
      <div class="ftitle">
        <div class="red-font">{{ teamDescInfo.japaneseHeadline }}</div>
        <div class="black-font">{{ teamDescInfo.chineseHeadline }}</div>
      </div>
      <div class="red-content left-font m-bottom">
        <el-col :lg="24" :md="24" :xl="24" :sm="24">
          <div>{{ teamDescInfo.japaneseContent }}</div>
        </el-col>
      </div>
      <div class="black-content left-font">
        <el-col :lg="24" :md="24" :xl="24" :sm="24">
          <div>{{ teamDescInfo.chineseContent }}</div>
        </el-col>
      </div>
    </el-col>
  </div>
</template>

<script>
import { getTeamData } from '../../api/api'

export default {
  name: 'TeamDesc',
  data () {
    return {
      teamDescInfo: {}
    }
  },
  mounted () {
    getTeamData()
      .then(data => {
        this.teamDescInfo = data
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
  .team-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    .ftitle {
      margin-top: 61px;
      line-height: 35px;
    }
    .m-bottom {
      margin-top: 35px;
      margin-bottom: 44px;
    }
  }
</style>
