<!-- TODO 团队负责人完成响应式 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="team-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="title">
          <el-divider><span class="red-font">チーム担当者紹介</span></el-divider>
          <div class="black-font">团队负责人介绍</div>
        </div>
        <el-divider />
        <div class="avatar-container">
          <!--左边头像-->
          <div class="avatar-content">
            <div class='avatar'>
              <img v-lazy="imgUrl + leaderData.imgPath" alt="">
            </div>
            <div class="avatar-red-title">{{ leaderData.jateamName }}</div>
            <div class="avatar-black-title">{{ leaderData.chteamName }} {{ leaderData.jateamPost }}</div>
          </div>
          <!--右边列表-->
          <div class="avatar-list">
            <div v-for="(item, index) in leaderData.teamleadDetails" :key="index">
              <div class="red">{{ item.jaContent }}</div>
              <div class="black">{{ item.chContent }}</div>
            </div>
          </div>
        </div>
        <div class="red-content left-font m-bottom">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">{{ leaderData.jateamValue }}</el-col>
        </div>
        <div class="black-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">{{ leaderData.chteamValue }}</el-col>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import { getBgData, getTeamLeaderData } from '../../api/api'

export default {
  name: 'TeamLeader',
  data () {
    return {
      leaderData: {},
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: require('../../assets/image/swipe/default.jpg')
    }
  },
  mounted () {
    this.getData()
    this.getBg()
  },
  methods: {
    getData () {
      getTeamLeaderData()
        .then(data => {
          this.leaderData = data
        })
        .catch(err => { console.log(err) })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/teamLeader') {
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
  .team-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .avatar-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .avatar-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        .avatar {
          width: 146px;
          height: 143px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            object-fit: cover;
          }
        }
        .avatar-red-title {
          font-size: 20px;
          line-height: 35px;
          color: #6A1D21;
        }
      }
      .avatar-list {
        text-align: left;
        line-height: 35px;
        margin: 10px;
        box-sizing: border-box;
        li:before {
          content: '';
          color: #ddd;
        }
      }
    }
    .m-bottom {
      margin-top: 35px;
      margin-bottom: 44px;
    }
    .red {font-size: 18px; color: #932026}
    .red:before {
      content: '';
      display: inline-block;
      margin-right: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ccc;
    }
    .black {font-size: 16px; color: #333}
    .black:before {
      content: '';
      display: inline-block;
      margin-right: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ccc;
    }
  }
</style>
