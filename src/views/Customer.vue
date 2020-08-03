<!-- TODO 重要客户完成响应式 -->
<template>
  <div class="customer-container">
    <el-col
      :xl="14"
      :lg="24"
      :md="24"
      :sm="24"
      :xs="24"
    >
      <div class="center-title">
        <el-divider><span class="red-font">クライアント</span></el-divider>
        <div class="black-font">重要客户</div>
      </div>
      <div class="customer-content">
        <div class="content-item" v-for="(item, index) in customerData.customerName" :key="index">
          <span class="left-block"></span>
          <div>
            <p class="customer-red-font">{{ item.jaCustomer }}</p>
            <p class="customer-black-font left-font">{{ item.chCustomer }}</p>
          </div>
        </div>
      </div>
      <div class="customer-img">
        <div class="customer-img-item" v-for="(item, index) in customerData.customerLogo" :key="index">
          <img :src="imgUrl + item.imgPath" alt="">
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { getCustomerData } from '../api/api'

export default {
  name: 'Customer',
  data () {
    return {
      customerData: {},
      imgUrl: process.env.VUE_APP_IMAGE_URL
    }
  },
  mounted () {
    getCustomerData()
      .then(data => {
        this.customerData = data
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
  }
}
</script>

<style scoped lang="less">
  .customer-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    .customer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 66px 0 80px 0;
      font-size: 18px;
      text-align: center;
      line-height: 35px;
      .content-item {
        display: flex;
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
        .customer-black-font {
          color: #333333;
          font-size: 18px;
        }
      }
    }
    .customer-img {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin: 10px;
      .customer-img-item {
        width:238px;
        height:90px;
        border:1px solid rgba(153,153,153,1);
        border-radius:10px;
        margin: 10px;
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
