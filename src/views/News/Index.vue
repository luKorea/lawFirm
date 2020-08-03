<template>
  <div class="wrap-container">
    <div id="worksHome">
        <div class="titleBtn">
          <el-row :gutter="4">
            <el-col :lg="10" :md="10" :xl="10" :sm="24">
          <div :class="{ btn: true, chooseBtn: activeIndex === 1 }" @click="activeIndex=1">
                <div class="btnBg">
                  <span>ニュース</span>
                  <span>新闻资讯</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-col :lg="10" :md="10" :xl="10" :sm="24">
          <div :class="{ btn: true, chooseBtn: activeIndex === 2 }" @click="activeIndex=2">
            <div class="btnBg">
              <span>法律法規</span>
              <span>法律法规</span>
            </div>
          </div>
          </el-col>
        </div>
<!--新闻资讯-->
      <div  v-if="rematchList.length!==0" v-show="activeIndex === 1" class="worksList">
        <div v-for="(item,i) in rematchList" :key="i" class="works animated fadeIn delay-0.2s" @click="toDetails(item.id)">
            <div class="worksBg" v-if="i % 2 === 0">
              <el-col :xl='5' :lg="24" :md="24" :sm="24">
                  <div class="left-img">
                    <img :src="item.img" alt />
                  </div>
              </el-col>
              <el-col :xl='12' :lg="24" :md="24" :sm="24">
                <div class="right-content" style="margin-left: 43px;">
                  <div class="red">
                    <div class="content-red-title left-font">{{ item.jTitle }}</div>
                    <div class="content-red-text left-font">{{ item.jContent }}</div>
                  </div>
                  <div class="black">
                    <div class="content-black-title left-font">{{ item.cTitle }}</div>
                    <div class="content-black-text left-font">{{ item.cContent }}</div>
                  </div>
                </div>
                </el-col>
            </div>
          <div class="worksBg" v-else>
            <el-col :xl='12' :lg="24" :md="24" :sm="24">
              <div class="right-content" style="margin-right: 43px;">
                <div class="red">
                  <div class="content-red-title left-font">{{ item.jTitle }}</div>
                  <div class="content-red-text left-font">{{ item.jContent }}</div>
                </div>
                <div class="black">
                  <div class="content-black-title left-font">{{ item.cTitle }}</div>
                  <div class="content-black-text left-font">{{ item.cContent }}</div>
                </div>
              </div>
            </el-col>
            <el-col :xl='5' :lg="24" :md="24" :sm="24">
              <div class="left-img">
                <img :src="item.img" alt />
              </div>
            </el-col>
          </div>
        </div>
      </div>
<!-- 法律法规 -->
      <div v-if="awardList.length!==0" v-show="activeIndex === 2" class="worksList">
        <div v-for="(item,i) in awardList" :key="i" class="works animated fadeIn delay-0.2s" @click="toDetails(item.id)">
          <div class="worksBg">
            <el-col :xl='5' :lg="24" :md="24" :sm="24">
              <div class="left-img">
                <img :src="item.img" />
              </div>
            </el-col>
            <el-col :xl='12' :lg="24" :md="24" :sm="24">
              <div class="right-content" style="margin-left: 43px">
                <div class="red">
                  <div class="content-red-title left-font">{{ item.jTitle }}</div>
                  <div class="content-red-text left-font">{{ item.jContent }}</div>
                </div>
                <div class="black">
                  <div class="content-black-title left-font">{{ item.cTitle }}</div>
                  <div class="content-black-text left-font">{{ item.cContent }}</div>
                </div>
              </div>
            </el-col>
          </div>
        </div>
      </div>
<!-- 分页器 -->
        <pagination
          v-if="awardList.length > 0"
          v-show="activeIndex === 2"
          :total-page="rematchTotal"
        />
        <pagination
          v-if="rematchList.length > 0"
          v-show="activeIndex === 1"
          :total-page="awardTotal"
        />
<!--优化显示，如果内容为空时显示暂无数据-->
      <div v-if="awardList.length===0" v-show="activeIndex === 2" style="font-size:40px;margin-top:100px;color:#6A1D21;">暂无新闻，敬请期待！</div>
      <div v-if="rematchList.length===0" v-show="activeIndex === 1" style="font-size:40px;margin-top:100px;color:#6A1D21;">暂无新闻，敬请期待！</div>
    </div>
  </div>
</template>

<script>
// import api from '@/api'
import Pagination from '../../components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      activeIndex: 1,
      // imageUrl: process.env.VUE_APP_IMAGE_URL,
      rematchList: [
        {
          id: 1,
          img: require('../../assets/image/swipe/swipe_1.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 2,
          img: require('../../assets/image/swipe/swipe_6.jpg'),
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
          img: require('../../assets/image/swipe/swipe_6.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        },
        {
          id: 3,
          img: require('../../assets/image/swipe/swipe_4.jpg'),
          jTitle: '広州第一の市は共同で法律事務所をつくります。',
          jContent: '1993年1月29日に設立された広州金鵬法律事務所（以下は「金鵬」という）は、広州で最初に設立されたパートナーシップ法律事務所であり、全国優秀法律事務所、広東省文明法律事務所など50以上の栄誉称号を獲得した。',
          cTitle: '广州第一家市属合伙制律师事务所',
          cContent: '广州金鹏律师事务所成立于1993年1月29日，是广州第一家市属合伙制律师事务所，曾获全国优秀律师事务所、司法部律师行业创先争优活动示范点、广东省文明律师事务所、广州市十佳律师事务所等50多项荣誉称号，是司法部熊选国副部长在广东省唯一的律所基层联系点。'
        }
      ], // 法律法规
      rematchTotal: 20,
      awardTotal: 20
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
      // data数据操作
    }
  },
  methods: {
    /** 跳转到详情 */
    toDetails (id) {
      this.$router.push({ path: '/news/details', query: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
