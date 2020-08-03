<!-- TODO 完成 -->
<template>
  <div class="wrap-container">
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
import { getHeadquartersData } from '../../api/api'

export default {
  name: 'headquarters',
  data () {
    return {
      headquartersInfo: {}
    }
  },
  mounted () {
    getHeadquartersData()
      .then(data => {
        this.headquartersInfo = data
        console.log(this.headquartersInfo)
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
