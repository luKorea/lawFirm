<!-- TODO 完成新闻详情页 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="detail-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="title">
          <div class="big-title">{{ detailInfo.jaTitle }}</div>
          <div class="small-title">{{ detailInfo.chTitle }}</div>
        </div>
        <div class="red-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <span v-if="type === 'news'">{{ detailInfo.jaDetails }}</span>
            <span v-else>{{ detailInfo.jaContent }}</span>
          </el-col>
        </div>
        <div class="black-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <span v-if="type === 'news'">{{ detailInfo.chDetails }}</span>
            <span v-else>{{ detailInfo.chContent }}</span>
          </el-col>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getBgData } from '../../api/api'

export default {
  name: 'Details',
  data () {
    return {
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: '',
      detailInfo: {},
      type: ''
    }
  },
  created () {
    this.detailInfo = this.$route.params.item
    this.type = this.$route.params.type
    this.getBg()
  },
  methods: {
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/news') {
                this.img = this.imgUrl + item.imgPath
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
  .detail-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
</style>
