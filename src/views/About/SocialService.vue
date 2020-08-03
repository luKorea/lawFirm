<!--shehui-->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="mission-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="title">
          <div class="big-title">金鵬弁護士過去又は現在の社会職務</div>
          <div class="small-title">金鹏律师曾经和正在担任的社会职务</div>
        </div>
        <div class="item-flex">
          <div class="red-content left-font">
            <el-col :lg="24" :md="24" :xl="24" :sm="24">
              <template v-for="item in dataList">
                <div>- {{ item.jadutiesName }}</div>
              </template>
            </el-col>
          </div>
          <div class="black-content left-font">
            <el-col :lg="24" :md="24" :xl="24" :sm="24">
              <template v-for="item in dataList">
                <div>- {{ item.chdutiesName }}</div>
              </template>
            </el-col>
          </div>
        </div>
        <pagination
          :total="page.total"
          :offset="page.PageNumber"
          :pageSize="page.Display_Page_Number"
          @handleSizeChangeSub="handleSizeChange"
          @handleCurrentChangeSub="handleCurrentChange"
        ></pagination>
      </el-col>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
import { getBgData, getSocialServiceData } from '../../api/api'
export default {
  name: 'SocialService',
  components: {
    Pagination
  },
  data () {
    return {
      dataList: [],
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: require('../../assets/image/swipe/default.jpg'),
      page: {
        Display_Page_Number: 5,
        PageNumber: 1,
        total: 0
      }
    }
  },
  mounted () {
    this.getData()
    this.getBg()
  },
  methods: {
    getData () {
      getSocialServiceData(this.page)
        .then(data => {
          this.page.total = data.PageCount
          this.dataList = data.socialPosition
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleSizeChange (val) {
      this.page.Display_Page_Number = val
      this.getData()
    },
    handleCurrentChange (val) {
      this.page.PageNumber = val
      this.getData()
    },
    getBg () {
      getBgData()
        .then(data => {
          if (data.length > 0) {
            data.forEach(item => {
              if (item.path === '/socialService') {
                this.img = item.imgPath
                console.log(item.path)
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
    }
  }
}
</script>

<style scoped lang="less">
  .mission-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    .item-flex {
      display: flex;
      justify-content: center;
    }
  }
</style>
