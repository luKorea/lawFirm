<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="wrap-container">
      <div id="worksHome">
        <div class="titleBtn">
          <el-row>
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
            <div v-for="(item,i) in rematchList" :key="i" class="works animated fadeIn delay-0.2s" @click="toDetails(item, 'news')">
              <div class="worksBg" v-if="i % 2 === 0">
                <el-col :xl='5' :lg="6" :md="24">
                  <div class="left-img">
                    <img v-lazy="imgUrl + item.imgPath" alt />
                  </div>
                </el-col>
                <el-col :xl='12' :lg="12" :md="24">
                  <div class="right-content" style="margin-left: 43px;">
                    <div class="red">
                      <div class="content-red-title left-font">{{ item.jaTitle }}</div>
                      <div class="content-red-text left-font">{{ item.jaDetails }}</div>
                    </div>
                    <div class="black">
                      <div class="content-black-title left-font">{{ item.chTitle }}</div>
                      <div class="content-black-text left-font">{{ item.chDetails }}</div>
                    </div>
                  </div>
                </el-col>
              </div>
              <div class="worksBg" v-else>
                <el-col :xl='12' :lg="12" :md="24">
                  <div class="right-content" style="margin-right: 43px;">
                    <div class="red">
                      <div class="content-red-title left-font">{{ item.jaTitle }}</div>
                      <div class="content-red-text left-font">{{ item.jaDetails }}</div>
                    </div>
                    <div class="black">
                      <div class="content-black-title left-font">{{ item.chTitle }}</div>
                      <div class="content-black-text left-font">{{ item.chDetails }}</div>
                    </div>
                  </div>
                </el-col>
                <el-col :xl='5' :lg="6" :md="5">
                  <div class="left-img">
                    <img v-lazy="imgUrl + item.imgPath" alt />
                  </div>
                </el-col>
              </div>
            </div>
          </div>
        <!-- 法律法规 -->
        <div v-if="awardList.length!==0" v-show="activeIndex === 2" class="worksList">
          <div v-for="(item, i) in awardList" :key="i" class="works animated fadeIn delay-0.2s" @click="toDetails(item, 're')">
            <div class="worksBg">
              <el-col :xl='5' :lg="6" :md="24">
                <div class="left-img">
                  <img v-lazy="imgUrl + item.imgPath" />
                </div>
              </el-col>
              <el-col :xl='12' :lg="12" :md="24">
                <div class="right-content" style="margin-left: 43px">
                  <div class="red">
                    <div class="content-red-title left-font">{{ item.jaTitle }}</div>
                    <div class="content-red-text left-font">{{ item.jaContent }}</div>
                  </div>
                  <div class="black">
                    <div class="content-black-title left-font">{{ item.chTitle }}</div>
                    <div class="content-black-text left-font">{{ item.chContent }}</div>
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
          :offset="page1.PageNumber"
          :pageSize="page1.Display_Page_Number"
          @handleSizeChangeSub="handleSizeChange1"
          @handleCurrentChangeSub="handleCurrentChange1"
        />
        <pagination
          v-if="rematchList.length > 0"
          v-show="activeIndex === 1"
          :offset="page.PageNumber"
          :pageSize="page.Display_Page_Number"
          @handleSizeChangeSub="handleSizeChange"
          @handleCurrentChangeSub="handleCurrentChange"
        />
        <!--优化显示，如果内容为空时显示暂无数据-->
        <div v-if="awardList.length===0" v-show="activeIndex === 2" style="font-size:40px;margin-top:100px;color:#6A1D21;">暂无新闻，敬请期待！</div>
        <div v-if="rematchList.length===0" v-show="activeIndex === 1" style="font-size:40px;margin-top:100px;color:#6A1D21;">暂无新闻，敬请期待！</div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
import {
  getBgData,
  getNewsInformationData,
  getNewsRegulationsData
} from '../../api/api'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: '',
      page: {
        Display_Page_Number: 5,
        PageNumber: 1
      },
      page1: {
        Display_Page_Number: 5,
        PageNumber: 1
      },
      activeIndex: 1,
      rematchList: [], // 新闻资讯
      awardList: [] // 法律法规
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
      // data数据操作
    }
  },
  methods: {
    // 获取新闻资讯
    getNewsData () {
      getNewsInformationData(this.page)
        .then(data => {
          this.rematchList = data.newsInformation
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取法律法规
    getReData () {
      getNewsRegulationsData(this.page1)
        .then(data => {
          this.awardList = data.newsInformation
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleSizeChange (val) {
      this.page.Display_Page_Number = val
      this.getNewsData()
    },
    handleCurrentChange (val) {
      this.page.PageNumber = val
      this.getNewsData()
    },
    handleSizeChange1 (val) {
      this.page1.Display_Page_Number = val
      this.getReData()
    },
    handleCurrentChange1 (val) {
      this.page1.PageNumber = val
      this.getReData()
    },
    /** 跳转到详情 */
    toDetails (item, type) {
      this.$router.push({
        name: 'NewsDetail',
        params: {
          item, type
        }
      })
    },
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
  },
  mounted () {
    this.getNewsData()
    this.getReData()
    this.getBg()
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
