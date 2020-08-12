<template>
  <div class="pagination-content">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :current-page="offset"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Pagination',
  props: {
    total: { // 总条目数
      type: Number,
      default: 1 // 默认值
    },
    pageSize: { // 每页显示条目个数
      type: Number,
      default: 1
    },
    offset: { // 当前页数
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSizeChange (val) { // pageSize 改变时会触发
      this.$emit('handleSizeChangeSub', val)
    },
    handleCurrentChange (val) { // currentPage 改变时会触发
      this.$emit('handleCurrentChangeSub', val)
    }
  }

}
</script>
<style scoped lang="less">
  .pagination-content {
    margin-top: 40px;
    margin-left: 10px;
  }
</style>
