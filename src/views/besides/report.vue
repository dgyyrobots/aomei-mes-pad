<template>
  <div class="report-container">
    <!-- 顶部菜单 -->
    <el-menu default-active="fq"  mode="horizontal" class="menu-list">
        <el-menu-item index="fq">
          <el-icon><Document /></el-icon>
          <span>统一报工</span>
        </el-menu-item>
      </el-menu>
    
    <!-- 内容区 -->
    <div class="content-area">
      <!-- 查询表单 -->
      <div class="query-form-wrapper">
        <vab-query-form class="query-form">
          <vab-query-form-left-panel>
            <el-button :icon="Plus" type="primary" plain>新增</el-button>
          </vab-query-form-left-panel>
          <vab-query-form-right-panel>
            <el-form inline :model="queryForm" @submit.prevent class="form-inline">
              <el-form-item label="工单标题">
                <el-input v-model="queryForm.title" clearable placeholder="请输入工单标题" />
              </el-form-item>
              <el-form-item>
                <el-button :icon="Search" :loading="listLoading" native-type="submit" type="primary" @click="queryData" plain>查询</el-button>
              </el-form-item>
            </el-form>
          </vab-query-form-right-panel>
        </vab-query-form>
      </div>

      <!-- 表格区域 -->
    
        <el-table 
          ref="tableRef" 
          v-loading="listLoading" 
          border 
          :data="list" 
          @selection-change='selectionChange'
          class="data-table"
          :max-height="tableHeight"
        >
          <el-table-column type="selection" width="38" />
          <el-table-column align="center" label="序号" width="65">
            <template #default="{ $index }">
              {{ $index + 1 }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="工单号" min-width="120" prop="workorderCode" show-overflow-tooltip />
          <el-table-column align="center" label="标题" min-width="120" prop="workorderName" show-overflow-tooltip />
          <el-table-column align="center" label="产品名称" min-width="120" prop="productName" show-overflow-tooltip />
          <el-table-column align="center" label="工单状态" min-width="90">
            <template #default="scope">
              <dict-tag :type="'mes_order_status'" :value="scope.row.status" />
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="80" fixed="right">
            <template #default="{ row }">
              <el-button text type="danger" @click="handleDelete(row)">删除</el-button>
            </template>
          </el-table-column>
          <template #empty>
            <el-empty class="vab-data-empty" description="暂无数据" />
          </template>
        </el-table>

      
      <!-- 分页区域 -->
      <div class="pagination-wrapper">
        <vab-pagination
          :current-page="queryForm.pageNo"
          :page-size="queryForm.pageSize"
          :total="total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DICT_TYPE } from '/@/utils/dict'
import { Delete, Search, Plus, Document } from '@element-plus/icons-vue'
import type { TableInstance } from 'element-plus'
import { deleteWorkorder, getWorkorderPage } from '/@/api/workOrder'
import { computed, ref, reactive, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useMessage } from '/@/hooks/web/useMessage'
defineOptions({
  name: 'WorkOrder',
})

// 响应式布局相关
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const isMenuCollapsed = ref(windowWidth.value <= 820)
const tableHeight = computed(() => windowHeight.value - 380)
const { success } = useMessage()
// 监听窗口大小变化
const handleResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  isMenuCollapsed.value = windowWidth.value <= 820
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 切换菜单展开/收起
const toggleMenu = () => {
  isMenuCollapsed.value = !isMenuCollapsed.value
}

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
  try {
    const data = await getWorkorderPage(queryForm)
    list.value = data.list
    total.value = data.total
  } catch (error) {
    console.error('获取数据失败', error)
  } finally {
    listLoading.value = false
  }
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
    success(msg)
  } 
}

onBeforeMount(() => {
  fetchData()
})

const selectionChange=(v:any)=>{
  console.log(v)
}
</script>

<style lang="scss" scoped>
.report-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  }

  .menu-list {
    width: 100%;
  }
  
  .content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;
    background-color: #f5f7fa;
    
    .query-form-wrapper {
      margin-bottom: 16px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
      
      .query-form {
        padding: 16px;
      }
      
      .form-inline {
        display: flex;
        flex-wrap: wrap;
        
        :deep(.el-form-item) {
          margin-bottom: 0;
        }
      }
    }
    

    
    .pagination-wrapper {
      padding: 8px 0;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
      padding-bottom: 16px;
    }
  }


// 平板适配样式
@media screen and (max-width: 820px) {
  .report-container {
    .content-area {
      padding: 8px;
      
      .query-form-wrapper {
        .query-form {
          padding: 12px;
        }
        
        .form-inline {
          :deep(.el-form-item) {
            margin-right: 8px;
          }
          
          :deep(.el-input) {
            width: 140px;
          }
        }
      }
      
      .table-wrapper {
        .data-table {
          :deep(.el-table__header) th {
            padding: 8px 0;
            font-size: 14px;
          }
          
          :deep(.el-table__body) td {
            padding: 8px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>