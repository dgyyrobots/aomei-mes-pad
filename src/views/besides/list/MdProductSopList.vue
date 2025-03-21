<template>
  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true">
      <el-table-column label="标题" align="center" prop="sopTitle" />
      <el-table-column label="排列顺序" align="center" prop="orderNum" />
      <el-table-column label="工序编号" align="center" prop="processCode" />
      <el-table-column label="工序名称" align="center" prop="processName" />
      <el-table-column label="详细描述" align="center" prop="sopDescription" >
        <template #default="scope">
          <div v-html="scope.row.sopDescription"></div>
        </template>
      </el-table-column>
      <el-table-column label="图片地址" align="center" prop="sopUrl" width="120">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.sopUrl"  />
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

</template>
<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import * as ProductionApi from '/@/api/production/index'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const props = defineProps<{
  itemId: undefined // 物料产品ID（主表的关联字段）
}>()
const loading = ref(false) // 列表的加载中
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  itemId: undefined
})

/** 监听主表的关联字段的变化，加载对应的子表数据 */
watch(
  () => props.itemId,
  (val) => {
    if (!val) return
    queryParams.itemId = val
    nextTick(() => {
      handleQuery()
    })
  },
  { immediate: true }
)

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await ProductionApi.getMdProductSopPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}


</script>
