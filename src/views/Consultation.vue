<!-- TODO 完成响应式，未完成表单 -->
<template>
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
            <el-input v-model="formData.email" class='input-text' placeholder="邮箱" />
          </div>
          <div class="input-container">
            <div class="top-font">事件概況</div>
            <el-input v-model="formData.desc" class='input-text' placeholder="案件概述" />
          </div>
          <el-input class="hidden-box" />
          <el-input class="hidden-box" />
          <el-button class="submit" type="primary" @click="onSubmit">送信 | 提交</el-button>
        </el-form>
      </div>
      <div class="contact-content">
        <span class="red-font">メールアドレス：Japan@kingpound.com</span>
        <span class="red-font">電話番号：+86 20 38390333</span>
        <span class="black-font">邮箱：Japan@kingpound.com</span>
        <span class="black-font">联系电话：+86 20 38390333</span>
      </div>
        <div class="qrCode-content">
          <el-col :xl='3' :lg="24" :md="24" :sm="24">
            <div class="qrCode-item">
              <img src="../assets/image/qrcode/qrcode_one.png" alt="">
              <p class="small-red-font">金鵬公式アカウントQRコード</p>
              <p>金鹏官方公众号二维码</p>
            </div>
          </el-col>
          <el-col :xl='3' :lg="24" :md="24" :sm="24">
          <div class="qrCode-item">
            <img src="../assets/image/qrcode/qrcode_two.png" alt="">
            <p class="small-red-font">金鵬日本オフィス公式アカウントQRコード</p>
            <p>金鹏日本办事处官方公众号二维码</p>
          </div>
          </el-col>
          <el-col :xl='3' :lg="24" :md="24" :sm="24">
          <div class="qrCode-item">
            <img src="../assets/image/qrcode/qrcode_three.png" alt="">
            <p class="small-red-font">金鵬日本オフィス公式ツイッターQRコード</p>
            <p>金鹏官方推特二维码</p>
          </div>
          </el-col>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Consultation',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.formData.name && this.formData.email && this.formData.desc !== '') {
        this.$message({
          type: 'success',
          message: '提交成功'
        })
        console.log(this.formData)
        // this.formData = {}
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
