<template>
  <div style="display: flex">
    <div style="width: 300px; border: 1px solid #ebeef5" class="left">
      <!-- :default-active="$route.meta.type || $route.name"
        @select="handleSelect"
        router -->
      <el-menu default-active="fq">
        <el-menu-item index="fq">
          <img src="" alt="" style="width: 20px; height: 20px; margin-left: 12px; margin-right: 12px" />
          <span>统一报工</span>
        </el-menu-item>
        <!-- <el-menu-item index="fqlist" :route="{ name: 'fqlist', query: { type: '课程管理' } }">
          <img src="" alt="" style="width: 20px; height: 20px; margin-left: 12px; margin-right: 12px" />
          <span>单独报工</span>
        </el-menu-item>
        <el-menu-item index="jslist" :route="{ name: 'jslist', query: { type: '课程管理' } }">
          <img src="" alt="" style="width: 20px; height: 20px; margin-left: 12px; margin-right: 12px" />
          <span>班组名单</span>
        </el-menu-item>
        <el-menu-item index="jy">
          <img src="" alt="" style="width: 20px; height: 20px; margin-left: 12px; margin-right: 12px" />
          <span>报工记录</span>
        </el-menu-item> -->
      </el-menu>
    </div>
    <div class="work-order-container auto-height-container">
      <vab-query-form>
        <vab-query-form-left-panel>
          <!-- <el-button :icon="Delete" type="danger" @click="handleDelete"
          >删除</el-button
        > -->
          <el-button :icon="Plus" type="primary" plain>新增</el-button>
        </vab-query-form-left-panel>
        <vab-query-form-right-panel>
          <el-form inline :model="queryForm" @submit.prevent>
            <el-form-item label="工单标题">
              <el-input v-model="queryForm.title" clearable placeholder="请输入工单标题" />
            </el-form-item>
            <el-form-item>
              <el-button :icon="Search" :loading="listLoading" native-type="submit" type="primary" @click="queryData" plain>查询</el-button>
            </el-form-item>
          </el-form>
        </vab-query-form-right-panel>
      </vab-query-form>

      <!-- @selection-change="setSelectRows" -->
      <el-table ref="tableRef" v-loading="listLoading" border :data="list" @selection-change='selectionChange' >
        <el-table-column type="selection" width="38" />
        <el-table-column align="center" label="序号" width="55">
          <template #default="{ $index }">
            {{ $index + 1 }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="工单号" min-width="200" prop="workorderCode" show-overflow-tooltip />
        <el-table-column align="center" label="标题" min-width="200" prop="workorderName" show-overflow-tooltip />
        <el-table-column align="center" label="产品名称" min-width="200" prop="productName" show-overflow-tooltip />
        <!-- <el-table-column align="center" label="进度" min-width="180">
        <template #default="{ row }">
          <el-progress
            :percentage="parseInt(row.progress)"
            :status="row.progress == '100' ? 'success' : ''"
          />
        </template>
      </el-table-column> -->
        <!-- <el-table-column align="center" label="提交者" prop="submit" /> -->
        <!-- <el-table-column
        align="center"
        label="受理人员"
        min-width="90"
        prop="accept"
        show-overflow-tooltip
      /> -->
        <el-table-column align="center" label="工单状态" min-width="90">
          <template #default="scope">
            <dict-tag :type="'mes_order_status'" :value="scope.row.status" />
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="80">
          <template #default="{ row }">
            <el-button text type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty class="vab-data-empty" description="暂无数据" />
        </template>
      </el-table>
      <vab-pagination
        :current-page="queryForm.pageNo"
        :page-size="queryForm.pageSize"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DICT_TYPE } from '/@/utils/dict'
import { Delete, Search, Plus } from '@element-plus/icons-vue'
import type { TableInstance } from 'element-plus'
import { deleteWorkorder, getWorkorderPage } from '/@/api/workOrder'

defineOptions({
  name: 'WorkOrder',
})

const tableRef = ref<TableInstance>()
const list = ref<any>([])
const listLoading = ref<boolean>(true)
const total = ref<number>(0)
const selectRows = ref<any>([])
const queryForm = reactive<any>({
  pageNo: 1,
  pageSize: 20,
})

onActivated(() => {
  tableRef.value?.doLayout()
})

const fetchData = async () => {
  listLoading.value = true
  const data = await getWorkorderPage(queryForm)
  console.log(data)
  list.value = data.list
  total.value = data.total
  listLoading.value = false
}

const handleSizeChange = (value: number) => {
  queryForm.pageNo = 1
  queryForm.pageSize = value
  fetchData()
}

const handleCurrentChange = (value: number) => {
  queryForm.pageNo = value
  fetchData()
}

const queryData = () => {
  queryForm.pageNo = 1
  fetchData()
}

const setSelectRows = (value: string) => {
  selectRows.value = value
}
import { ElMessageBox } from 'element-plus'
const handleDelete = async (row: any) => {
  if (row.id) {
    await ElMessageBox.confirm('您确定要删除当前项吗？', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
    const { msg }: any = await deleteWorkorder(row.id)
    await fetchData()
    $baseMessage(msg, 'success', 'hey')
  } 
}

onBeforeMount(() => {
  fetchData()
})
const selectionChange=(v:any)=>{
  console.log(v)
}
</script>
<style scoped>
.work-order-container {
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  padding: 50px;
  /* margin-left: 400px; */
  background-color: #fff;
}
.left {
  box-shadow: 0px 2px 8px 0px #0000001a;
  :deep(.is-active) {
    background-color: #f5f9fe;
    color: #8ab3ff !important;
  }
  :deep(.is-active::after) {
    content: '';
    display: block;
    width: 4px;
    height: 100%;
    background-color: red;
    position: absolute;
    left: 0;
    background-color: #3f91fd;
  }
  :deep(.el-menu-item) {
    height: 66px;
    font-family: PingFang SC;
    font-size: 20px;
    font-weight: 400;
    color: #000;
  }
  :deep(.el-menu) {
    border-right: none;
    text-align: center;
  }
}
</style>
