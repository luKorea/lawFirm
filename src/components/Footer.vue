<template>
<div class="footer">
    <div class="footer-content">
      <el-col
        :lg="{span: 6}"
        :md="{span: 8, offset: 2}"
        :sm="{span: 8, offset: 2}"
        :xs="{span: 24, offset: 4}"
      >
        <div class="left-content">
          <p>{{ footerInfo.chineseName }}</p>
          <p>地址：{{ footerInfo.chineseAddress }}</p>
          <p>邮箱：{{ footerInfo.chinesePostbox }}</p>
          <p>联系电话：{{ footerInfo.chinesePhone }}</p>
        </div>
      </el-col>
      <el-col
        :lg="{span: 6}"
        :md="{span: 8, offset: 2}"
        :sm="{span: 8, offset: 2}"
        :xs="{span: 24, offset: 4}"
      >
        <div class="center-content">
          <p>{{ footerInfo.japaneseName }}</p>
          <p>所在地：{{ footerInfo.japaneseAddress }}</p>
          <p>メールアドレス：{{ footerInfo.japanesePostbox }}</p>
          <p>電話番号：{{ footerInfo.japanesePhone }}</p>
        </div>
      </el-col>
      <el-col
        :lg="4" :xl="4"
        :md="{span: 8}" :sm="{span: 6}"
      >
        <div class="qrCode">
          <img class="img-item" v-lazy="imgUrl + footerInfo.headquartersimgPath" alt=""/>
          <p>金鵬公式アカウントQRコード</p>
          <p>金鹏官方公众号二维码</p>
        </div>
      </el-col>
      <el-col
        :lg="4"  :xl="4"
        :md="{span: 8}" :sm="{span: 6}"
      >
        <div class="qrCode">
          <img class="img-item" v-lazy="imgUrl + footerInfo.branchimgPath" alt=""/>
          <p>金鵬日本オフィス公式アカウントQRコード</p>
          <p>金鹏日本办事处官方公众号二维码</p>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { getFooterData } from '../api/api'

export default {
  name: 'Footer',
  data () {
    return {
      footerInfo: {},
      imgUrl: process.env.VUE_APP_IMAGE_URL
    }
  },
  mounted () {
    getFooterData()
      .then(data => {
        this.footerInfo = data
        console.log(this.footerInfo)
      })
      .catch(err => { console.log(err) })
  }
}
</script>

<style scoped lang="less">
  .footer {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-top: 91px;
    padding: 58px 0 57px 0;
    color: #fff;
    background: #2b2b2b;
    .footer-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .left-content {
        text-align: left;
      }
      .center-content {
        text-align: left;
      }
      p {
        line-height: 30px;
        font-size:16px;
        color:rgba(255,255,255,1);
      }
      img {
        width: 220px;
        height: 220px;
      }
      .qrCode {
        .img-item {
          width: 120px;
          height: 120px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        p {
          font-size: 10px;
          line-height: 18px;
        }
      }
    }
  }
</style>
