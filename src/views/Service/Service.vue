<!-- TODO 完成响应式 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="service-container">
      <el-col
        :xl="14"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <div class="center-title">
          <el-divider><span class="red-font">業務分野</span></el-divider>
          <div class="black-font">服务领域</div>
        </div>
        <div class="service-content">
          <div class="content-item" v-for="(item, index) in listData" :key="index">
            <span class="left-block"></span>
            <div class="to-detail" @click="toDetail(item.Id)">
              <p class="service-red-font">{{ item.japaneseName }}</p>
              <p class="service-black-font">{{ item.chineseName }}</p>
            </div>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getBgData, getServiceData } from '../../api/api'

export default {
  name: 'Service',
  data () {
    return {
      listData: [],
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
      getServiceData()
        .then(data => {
          this.listData = data
        })
        .catch(err => { console.log(err) })
    },
    toDetail (id) {
      this.$router.push({
        path: '/service/details',
        query: {
          activeName: String(id)
        }
      })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/service') {
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
.service-container {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  .service-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 66px 0 80px 0;
    font-size: 18px;
    text-align: left;
    box-sizing: border-box;
    line-height: 35px;
    .content-item {
      display: flex;
      flex-direction: row;
      margin: 20px;
      line-height: 30px;
      p {
        margin: 0;
        //overflow: hidden;
        //text-overflow: ellipsis;
        //white-space: nowrap;
      }
      .left-block {
        width:20px;
        height:20px;
        background:rgba(180,108,112,1);
        box-sizing: border-box;
        margin-top: 6px;
        margin-right: 8px;
      }
      .service-red-font {
        color: #932026;
        font-size: 18px;
      }
      .service-black-font {
        color: #333333;
        font-size: 16px;
      }
    }
  }
  .to-detail {
    cursor: pointer;
    width: 300px;
  }
}
</style>
