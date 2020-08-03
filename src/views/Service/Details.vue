<template>
  <div class="service-detail-container">
    <el-col :lg="16" :md="16" :sm="24">
      <el-tabs tab-position="left" v-model="activeName">
        <el-tab-pane
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :name="String(item.Id)"
        >
          <div slot="label" class="item">
            <span :class="String(item.Id) !== activeName ? 's-red-font' : 'bw-red-font'">{{ item.japaneseName }}</span>
            <span :class="String(item.Id) !== activeName ? 's-black-font' : 'bw-black-font'">{{ item.chineseName }}</span>
          </div>
            <div class="title">
              <div class="red-font">{{ item.japaneseName }}</div>
              <div class="black-font">{{ item.chineseName }}</div>
            </div>
            <div class="red-content left-font">
              <el-col :lg="24" :xm="24" :sm="24">
                <div v-for="(red, index) in item.getAreadetails" :key="index">
                  <div class="before-red-item">{{ red.japaneseDetails }}</div>
                </div>
              </el-col>
            </div>
            <div class="black-content left-font">
              <el-col :lg="24" :xm="24" :sm="24">
                <div v-for="(black, index) in item.getAreadetails" :key="index">
                  <div class="before-black-item">{{ black.chineseDetails }}</div>
                </div>
              </el-col>
            </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </div>
</template>

<script>
import { getServiceDetailData } from '../../api/api'

export default {
  name: 'Details',
  data () {
    return {
      activeName: '',
      list: []
    }
  },
  created () {
    console.log(typeof this.$route.query.activeName)
    this.activeName = this.$route.query.activeName
    console.log(typeof this.activeName)
    getServiceDetailData()
      .then(data => {
        this.list = data
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
  .el-tabs__item.is-active.item {
    color: #fff;
  }
.service-detail-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 10px;
  .item {
    display: flex;
    flex-direction: column;
    .s-red-font {
      font-size: 16px;
      color: #932026;
      font-weight: 400;
    }
    .s-black-font {
      color: #333;
      font-size: 12px;
      line-height: 24px;
      font-weight: 400;
    }
  }
  .before-red-item:before {
    content: '';
    display: inline-block;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    background-color: #932026;
  }
  .before-black-item:before {
    content: '';
    display: inline-block;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    background-color: #333;
  }
}
</style>
