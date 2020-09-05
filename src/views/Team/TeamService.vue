<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="team-service-container">
      <el-col :lg="24" :md="24" :xl="24" :sm="24">
        <div class="title">
          <el-divider><span class="red-font">チーム業務分野</span></el-divider>
          <div class="black-font">团队服务领域</div>
        </div>
        <div class="content-one">
          <div v-for="(item, index) in serviceList" :key="index">
            <div class="content1">
              <div class="top-content">
                <div class="top">{{ item.japaneseName }}</div>
                <div class="bottom" style="font-size: 16px">{{ item.chineseName }}</div>
              </div>
              <div class="content1-item">
                <div class="red1-content">
                <template v-for="item in item.details">
                  <div style="height: 40px;margin-bottom: 5px; line-height: 18px">{{ item.jaContent }}</div>
                </template>
                </div>
                <div class="black1-content">
                <template v-for="item in item.details">
                  <div style="height: 40px;margin-bottom: 5px; line-height: 18px">{{ item.chContent }}</div>
                </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getBgData, getTeamServiceData } from '../../api/api'

export default {
  name: 'TeamService',
  data () {
    return {
      serviceList: [],
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: ''
    }
  },
  mounted () {
    this.getData()
    this.getBg()
  },
  methods: {
    getData () {
      getTeamServiceData()
        .then(data => {
          if (data.length > 0) {
            this.serviceList = data
          } else this.serviceList = []
        })
        .catch(err => { console.log(err) })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/teamService') {
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
.team-service-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  margin: 0 auto;
  .top-content {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    margin-top: 67px;
    margin-right: 20px;
    margin-bottom: 42px;
    .top {
      position: relative;
      right: -20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 225px;
      height: 55px;
      background-color: #932026;
      border-radius:5px;
      color: #fff;
    }
    .bottom {
      position: relative;
      top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -999;
      width:225px;
      height:55px;
      color: #6A1D21;
      background:rgba(255,255,255,1);
      border:1px solid rgba(106,29,33,1);
      border-radius:5px;
    }
  }
  .content-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    .red {
      color: #932026;
      font-size:18px;
      font-weight:400;
      color:rgba(106,29,33,1);
      line-height:35px;
    }
    .black {
      font-size:16px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:35px;
    }
  }
  .content-2 {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  .content1-item {
    display: flex;
    justify-content: center;
  }
  .content-two {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .red1-content {
    width: 350px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 35px;
    color: #932026;
    text-align: left;
    //text-indent: 2em;
    //word-break: keep-all;
    //white-space: nowrap;
  }
  .black1-content {
    width: 350px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 35px;
    color: #333;
    text-align: left;
    text-indent: 2em;
    word-break: keep-all;
    white-space: nowrap;
  }
  .content1-item {
    display: flex;
  }
}
</style>
