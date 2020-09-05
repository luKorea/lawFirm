<!-- TODO 完成 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="team-container">
      <div class="team-wrap">
        <div class="title">
         <span class="red-font">{{ teamDescInfo.japaneseHeadline }}</span>
          <div class="black-font">{{ teamDescInfo.chineseHeadline }}</div>
        </div>
        <div class="red-content left-font m-bottom">
          <div v-html="teamDescInfo.japaneseContent"></div>
        </div>
        <div class="black-content left-font">
          <div v-html="teamDescInfo.chineseContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getBgData, getTeamData } from '../../api/api'

export default {
  name: 'TeamDesc',
  data () {
    return {
      teamDescInfo: {},
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
      getTeamData()
        .then(data => {
          this.teamDescInfo = data
        })
        .catch(err => { console.log(err) })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/teamDesc') {
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
    width: 60%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    .ftitle {
      margin-top: 61px;
      line-height: 35px;
    }
    .m-bottom {
      margin-top: 35px;
      margin-bottom: 44px;
    }
  }
</style>
