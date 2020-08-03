<template>
  <el-carousel v-if="imgList.length > 0" :interval="3000" arrow="never" class="swipe-container" height="706px">
    <el-carousel-item height="706px" v-for="(item, index) in imgList" :key="index">
      <el-row>
        <el-col
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24"
        >
          <img ref="imgHeight" :src="imgUrl + item"  class="banner_img" />
        </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getSwipeData } from '../api/api'

export default {
  name: 'Swipe',
  data () {
    return {
      imgHeight: '',
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      imgList: []
    }
  },
  mounted () {
    this.getData()
    /*    this.imgLoad()
    window.addEventListener('resize', () => {
      this.imgHeight = this.$refs.imgHeight[0].height
      this.imgLoad()
    }, false) */
  },
  methods: {
    getData () {
      getSwipeData()
        .then(data => {
          data.length > 0 ? this.imgList = data : this.imgList = []
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
    },
    imgLoad () {
      this.$nextTick(() => {
        this.imgHeight = this.$refs.imgHeight[0].height
      })
    }
  }
  /* mounted () {
      this.imgHeight = '705px'
      window.onresize = function temp () {
        // 通过点语法获取img的height属性值
      this.imgHeight = `${this.$refs.imgHeight['0'].height}px`
    }
  } */
}
</script>

<style scoped lang="less">
.swipe-container {
  width: 100%;
  margin-bottom: 85px;
  .banner_img {
    width: 100%;
    height: 706px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      //若图片不能全部显示,加上下面这条调节两个值可以设置要显示图片的哪个部分
      object-position: 5px 10%;
    }
  }
}
</style>
