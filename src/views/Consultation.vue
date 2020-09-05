<!-- TODO 完成响应式，未完成表单 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="consultation-container">
      <div class="title">
        <div class="big-title">お問い合わせ</div>
        <div class="small-title">案件咨询</div>
      </div>
      <div class="form-container">
        <el-form class="form-content" ref="form" :model="formData">
          <div class="input-container">
            <div class="top-font">名前</div>
            <el-input v-model="formData.name" class='input-text' placeholder="姓名" />
          </div>
          <div class="input-container">
            <div class="top-font">電話番号</div>
            <el-input v-model="formData.phone" class='input-text' placeholder="联系方式" />
          </div>
          <div class="input-container">
            <div class="top-font">メールアドレス</div>
            <el-input v-model="formData.mailbox" class='input-text' placeholder="邮箱" />
          </div>
          <div class="input-container">
            <div class="top-font">事件概況</div>
            <el-input v-model="formData.summary" class='input-text' placeholder="案件概述" />
          </div>
          <el-input class="hidden-box" />
          <el-input class="hidden-box" />
          <el-button class="submit" type="primary" @click="onSubmit">送信 | 提交</el-button>
        </el-form>
      </div>
      <div class="contact-content">
        <span class="red-font" style="font-size: 18px">メールアドレス： {{ listInfo.jaMailbox }}</span>
        <span class="red-font" style="font-size: 18px">電話番号：{{ listInfo.jaPhone }}</span>
        <span class="black-font" style="font-size: 16px">邮箱：{{ listInfo.chMailbox }}</span>
        <span class="black-font" style="font-size: 16px">联系电话：{{ listInfo.chPhone }}</span>
      </div>
      <div class="qrCode-content">
        <el-col :xl='3' :lg="24" :md="24" :sm="24">
          <div class="qrCode-item">
            <img :src="imgUrl + listInfo.one.imgPathone" alt="">
            <p class="small-red-font">{{ listInfo.one.jaimgNameone }}</p>
            <p>{{ listInfo.one.chimgNameone }}</p>
          </div>
        </el-col>
        <el-col :xl='3' :lg="24" :md="24" :sm="24">
          <div class="qrCode-item">
            <img :src="imgUrl + listInfo.two.imgPathtwo" alt="">
            <p class="small-red-font">{{ listInfo.two.jaimgNametwo }}</p>
            <p>{{ listInfo.two.chimgNametwo }}</p>
          </div>
        </el-col>
        <el-col :xl='3' :lg="24" :md="24" :sm="24">
          <div class="qrCode-item">
            <img :src="imgUrl + listInfo.three.imgPaththree" alt="">
            <p class="small-red-font">{{ listInfo.three.jaimgNamethree }}</p>
            <p>{{ listInfo.three.chimgNamethree }}</p>
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import { getBgData, getConsultationData, postData } from '../api/api'

export default {
  name: 'Consultation',
  data () {
    return {
      listInfo: {},
      formData: {
        name: '',
        phone: '',
        mailbox: '',
        summary: ''
      },
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
      getConsultationData()
        .then(data => {
          this.listInfo = data
          console.log(data)
        })
        .catch(err => console.log(err))
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/consultation') {
                this.img = this.imgUrl + item.imgPath
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'error',
            message: '数据返回失败'
          })
        })
    },
    onSubmit () {
      if (this.formData.name && this.formData.mailbox &&
        this.formData.summary !== '' && this.formData.phone !== ''
      ) {
        postData(this.formData)
          .then(res => {
            if (res.sign === 200) {
              this.$message({
                type: 'success',
                message: res.msg
              })
            }
          }).catch(err => console.log(err))
      } else {
        this.$message({
          type: 'error',
          message: '请确保您输入的信息完整'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.consultation-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    margin: 0 10px;
    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 66px 0 80px 0;
      font-size: 18px;
      text-align: center;
      line-height: 35px;
      .form-content {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .input-container {
          height: 80px;
          border:1px solid rgba(153,153,153,1);
          text-align: left;
          margin-bottom: 16px;
          .top-font {
            padding: 0 11px;
            color: #932026;
          }
        }
        .el-input, .el-input__inner {
          border-radius: 0 !important;
        }
        .input-text {
          border: none !important;
        }
        .submit {
          width: 100%;
          height: 60px;
          background-color: #6A1D21;
          border: none;
        }
      }
    }
    .contact-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 95px 86px 69px 85px;
      text-align: center;
      line-height: 30px;
    }
    .qrCode-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .qrCode-item {
        p {
          font-size: 10px;
          line-height: 18px;
          text-align: center;
        }
        img {
          width: 220px;
          height: 220px;
        }
      }
    }
    .hidden-box {
      visibility:hidden !important;
      input {
        height: 0 !important;
      }
    }
  }
</style>
