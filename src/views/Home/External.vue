<!-- TODO 完成 -->
<template>
  <div class="wrap-container">
    <div class="title">
      <div class="big-title">{{ externalInfo.japaneseHeadline }}</div>
      <div class="small-title">{{ externalInfo.chineseHeadline }}</div>
    </div>
    <div class="red-content left-font">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div>{{ externalInfo.japaneseContent }}</div>
      </el-col>
    </div>
    <div class="black-content left-font">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div>{{ externalInfo.chineseContent }}</div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getExternalsData } from '../../api/api'

export default {
  name: 'External',
  data () {
    return {
      externalInfo: {}
    }
  },
  mounted () {
    getExternalsData()
      .then(data => {
        this.externalInfo = data
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

<style scoped>

</style>
