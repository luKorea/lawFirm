<!-- TODO 完成新闻详情页 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="detail-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="title">
          <div class="big-title">{{ dataList.jTitle }} {{ dataList.id }}</div>
          <div class="small-title">{{ dataList.cTitle }}</div>
        </div>
        <div class="red-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24"><span>{{ dataList.jContent }}</span></el-col>
        </div>
        <div class="black-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24"><span>{{ dataList.cContent }}</span></el-col>
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
      img: require('../../assets/image/swipe/default.jpg'),
      id: 0,
      type: '',
      rematchList: [
        {
          id: 1,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 2,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 3,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 4,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 5,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 6,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        }
      ], // 新闻资讯
      awardList: [
        {
          id: 1,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 2,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 3,
          img: require('../../assets/image/swipe/swipe_2.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        }
      ], // 法律法规
      dataList: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    this.type = this.$route.query.type
    this.getData(this.id)
    this.getBg()
  },
  methods: {
    getData (id) {
      console.log(this.type)
      this.rematchList.forEach(item => {
        if (id === item.id) {
          this.dataList = item
          console.log(this.dataList)
        }
      })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/news') {
                this.img = item.imgPath
                console.log(item.path)
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
