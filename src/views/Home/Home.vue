<!-- TODO 完成 -->
<template>
  <div class="wrap-container">
    <swipe  />
    <div class="black-content">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <p>重要通知：{{ homeInfo.ChimportantNotice }}</p>
        <p>重要なお知らせ：{{ homeInfo.JaimportantNotice }}</p>
        <p>地址：{{ homeInfo.Chaddress }}</p>
        <p>住所：{{ homeInfo.Jaaddress }}</p>
        <p>
          邮编：{{ homeInfo.Chpostcode }}
          电子邮箱：{{ homeInfo.Chemail }}
          电话：{{ homeInfo.Chphone }}
          传真：{{ homeInfo.Chfax }}
        </p>
        <p>
          郵便番号：{{ homeInfo.Japostcode }}
          Eメール：{{ homeInfo.Jaemail }}
          電話：{{ homeInfo.Japhone }}
          ファックス：{{ homeInfo.Jafax }}
        </p>
      </el-col>
    </div>
  </div>
</template>

<script>
import Swipe from '../../components/Swipe'
import { getHomeData } from '../../api/api'

export default {
  name: 'Home',
  components: {
    Swipe
  },
  data () {
    return {
      homeInfo: {}
    }
  },
  mounted () {
    getHomeData()
      .then(data => {
        this.homeInfo = data
        console.log(this.homeInfo)
      })
      .catch(err => { console.log(err) })
  }
}
</script>
