<!-- TODO 重要客户完成响应式 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="customer-container">
        <div class="center-title">
          <el-divider><span class="red-font">クライアント</span></el-divider>
          <div class="black-font">重要客户</div>
        </div>
        <div class="customer-content">
          <div class="content-item" v-for="(item, index) in customerData.customerName" :key="index">
            <div>
              <p class="customer-red-font">{{ item.jaCustomer }}</p>
              <p class="customer-black-font left-font">{{ item.chCustomer }}</p>
            </div>
          </div>
        </div>
        <div class="customer-img">
          <div class="customer-img-item" v-for="(item, index) in customerData.customerLogo" :key="index">
            <img v-lazy="imgUrl + item.imgPath" alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getBgData, getCustomerData } from '../api/api'

export default {
  name: 'Customer',
  data () {
    return {
      customerData: {},
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
      getCustomerData()
        .then(data => {
          this.customerData = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/customer') {
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
  .customer-container {
    display: flex;
    flex-direction: column;
    width: 1600px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    box-sizing: border-box;
    .customer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      margin: 66px 0 80px 0;
      font-size: 18px;
      text-align: left;
      line-height: 35px;
      .content-item {
        display: flex;
        width: 465px;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 20px;
        line-height: 30px;
        p {
          margin: 0;
        }
        .left-block {
          width:20px;
          height:20px;
          background:rgba(180,108,112,1);
          box-sizing: border-box;
          margin-top: 6px;
          margin-right: 8px;
        }
        .customer-red-font {
          color: #932026;
          font-size: 20px;
        }
        .customer-red-font:before {
          content: '';
          display: inline-block;
          margin-right: 5px;
          width: 20px;
          height: 20px;
          background-color: #6a1d21;
        }

        .customer-black-font {
          color: #333333;
          font-size: 18px;
        }
      }
    }
    .customer-img {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 1200px;
      .customer-img-item {
        width:238px;
        height:90px;
        border:1px solid rgba(153,153,153,1);
        border-radius:10px;
        margin: 20px 30px;
        padding: 5px 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
</style>
