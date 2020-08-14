<!-- TODO 团队成员完成响应式 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="team-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="title">
          <el-divider><span class="red-font">チームメンバー紹介</span></el-divider>
          <div class="black-font">团队成员介绍</div>
        </div>
        <div class="content" v-for="(item, index) in memberInfo" :key='index'>
          <div class="user-info">
            <div class="avatar-container">
              <!--左边头像-->
              <div class="avatar-content">
                <div class='avatar'>
                  <img v-lazy="imgUrl + item.imgPath" alt="">
                </div>
                <div class="avatar-red-title">{{ item.jateamName }}</div>
                <div class="avatar-black-title">{{ item.chteamName }} {{ item.jateamPost }}</div>
              </div>
              <!--右边列表-->
              <div class="avatar-list">
                <div v-for="(skip, index) in item.teammemberDetails" :key="index">
                  <div class="red">{{ skip.jaContent }}</div>
                  <div class="black">{{ skip.chContent }}</div>
                </div>
              </div>
            </div>
            <div class="red-content left-font m-bottom">
              <el-col :lg="24" :md="24" :xl="24" :sm="24">
                <div v-html="item.jateamValue"></div>
              </el-col>
            </div>
            <div class="black-content left-font">
              <el-col :lg="24" :md="24" :xl="24" :sm="24">
                <div v-html="item.chteamValue"></div>
              </el-col>
            </div>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import { getBgData, getTeamMemberData } from '../../api/api'

export default {
  name: 'TeamMember',
  data () {
    return {
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: '',
      memberInfo: []
    }
  },
  mounted () {
    this.getData()
    this.getBg()
  },
  methods: {
    getData () {
      getTeamMemberData()
        .then(data => {
          if (data.length > 0) {
            this.memberInfo = data
          } else this.memberInfo = []
        })
        .catch(err => { console.log(err) })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/teamMember') {
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
    .user-info {
      margin-bottom: 10px;
    }
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
          height: 190px;
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
  .content {
    border:1px solid rgba(221,221,221,1);
    border-radius:10px;
    padding: 5px;
    box-sizing: border-box;
    margin-bottom: 30px;
  }
</style>
