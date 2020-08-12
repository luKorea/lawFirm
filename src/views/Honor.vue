<!-- 金鹏荣誉 -->
<template>
  <div>
    <div class="bg-container" :style="{background: 'url( '+ img +')'}"></div>
    <div class="honor-container">
      <el-col :lg="12" :md="12" :xl="12" :sm="24">
        <div class="honor-title">
          <el-divider><span class="red-font">金鵬栄誉</span></el-divider>
          <div class="black-font">金鹏荣誉</div>
        </div>
        <div class="honor-content" v-for="(item, index) in list" :key="index">
          <span class="content-date">{{ item.year }}</span>
          <div v-for="(info, index) in item.honorValue" :key="index">
            <span class="content-j-name">- {{ info.jaHonor }}</span>
            <span class="content-c-name">- {{ item.cnHonor }}</span>
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
import Pagination from '../components/Pagination'
import { getBgData, getHonorData } from '../api/api'
export default {
  name: 'Horror',
  components: {
    Pagination
  },
  data () {
    return {
      list: [],
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      img: '',
      page: {
        Display_Page_Number: 20,
        PageNumber: 1
      }
    }
  },
  mounted () {
    this.getData()
    this.getBg()
  },
  methods: {
    getData () {
      getHonorData(this.page)
        .then(data => {
          this.page.total = data.PageCount
          this.list = data.honor
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
              if (item.path === '/honor') {
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
.honor-container {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size:18px;
  color:rgba(106,29,33,1);
  line-height:35px;
  .honor-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 10px;
  }
}
</style>
