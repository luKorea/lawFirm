<template>
    <div class="logo-container">
      <el-row>
        <el-col :offset="4" :lg="16" :md="16" :xl="16" :sm="16">
          <div class="logo">
            <img src="../assets/image/logo/logo.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped lang="less">
  .logo-container {
    width: 100%;
    padding-top: 18px;
    padding-bottom: 20px;
    .logo {
      width: 182px;
      height: 108px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
