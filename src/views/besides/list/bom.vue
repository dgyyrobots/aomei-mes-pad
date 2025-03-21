<template>


  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      :stripe="true"
      highlight-current-row
    >
      <el-table-column label="产品物料ID" align="center" prop="id" />
      <el-table-column label="物料编码" align="center" prop="bomItemCode" />
      <el-table-column label="物料名称" align="center" prop="bomItemName" />
      <el-table-column label="规格型号" align="center" prop="bomItemSpec" />
      <el-table-column label="单位" align="center" prop="unitOfMeasure" width="150" />

      <el-table-column label="产品物料标识-物料/产品" align="center" prop="itemOrProduct" />
      <!-- <el-table-column label="所属分类" align="center" prop="itemTypeName" /> -->
      <!-- <el-table-column label="最低库存量" align="center" prop="minStock" /> -->
      <!-- <el-table-column label="最大库存量" align="center" prop="maxStock" /> -->
      <el-table-column label="是否来料验证" align="center"  >
        <template #default="scope">
          否
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" >
        <template #default="scope">
          <div v-html="scope.row.remark"></div>
        </template>
      </el-table-column>
      <!-- <el-table-column label="仓库编码" align="center" prop="warehouseCode" /> -->
      <!-- <el-table-column label="仓库名称" align="center" prop="warehouseName" /> -->
      <!-- <el-table-column label="库区编码" align="center" prop="locationCode" /> -->
      <!-- <el-table-column label="库区名称" align="center" prop="locationName" /> -->
      <!-- <el-table-column label="库位编码" align="center" prop="areaCode" /> -->
      <!-- <el-table-column label="库位名称" align="center" prop="areaName" /> -->
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
    </el-table>
  </ContentWrap>
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import * as ProductionApi from '/@/api/production/index'
// import ItemForm from './ItemForm.vue'
// import MdProductSopList from './components/MdProductSopList.vue'
// import Tree from "./Tree.vue";
defineOptions({ name: 'MdItem' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(false) // 列表的加载中
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  itemTypeId: undefined,
  pageNo: 1,
  pageSize: 10,
  itemCode: undefined,
  itemName: undefined,
  itemTypeCode: undefined,
  enableFlag: undefined,
  warehouseCode: undefined,
  warehouseName: undefined,
  locationCode: undefined,
  locationName: undefined,
  areaCode: undefined,
  createTime: []
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await ProductionApi.getMdProductBomPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}









const props = defineProps<{
  itemId: undefined // 物料产品ID（主表的关联字段）
}>()
// 新增物料
//产品物料选择

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
/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}



/** 初始化 **/
onMounted(() => {
  // getList()
})
</script>
