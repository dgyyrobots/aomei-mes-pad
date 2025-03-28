<template>
    <div class="app-container">
      <!-- 搜索工作栏 -->
      <el-form :model="queryParams" ref="queryFormRef" :size="currentSize" :inline="true" v-show="showSearch">
        <el-form-item label="调拨单号" prop="allocatedCode">
          <el-input v-model="queryParams.allocatedCode" placeholder="请输入调拨单编号" clearable @keyup.enter="handleQuery"/>
        </el-form-item>
        <el-form-item label="调拨单名称" prop="allocatedName">
          <el-input v-model="queryParams.allocatedName" placeholder="请输入调拨单名称" clearable @keyup.enter="handleQuery"/>
        </el-form-item>
        <el-form-item label="工单编码" prop="workorderCode">
          <el-input v-model="queryParams.workorderCode" placeholder="请输入生产工单编码" clearable @keyup.enter="handleQuery"/>
        </el-form-item>
  
        <el-form-item label="仓库名称" prop="warehouseName">
          <el-input v-model="queryParams.warehouseName" placeholder="请输入仓库名称" clearable @keyup.enter="handleQuery"/>
        </el-form-item>
  
        <el-form-item label="调拨日期" prop="allocatedDate">
          <el-date-picker v-model="queryParams.allocatedDate" style="width: 240px" value-format="yyyy-MM-dd HH:mm:ss" type="daterange"
                          range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']"/>
        </el-form-item>
  
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleQuery">搜索</el-button>
          <el-button :icon="Refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
  
      <!-- 操作工具栏 -->
      <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
          <el-button type="primary" plain :icon="Plus" :size="currentSize" @click="handleAdd"
                     v-hasPermi="['wms:allocated-header:create']">新增
          </el-button>
        </el-col>
  
        <el-col :span="1.5">
          <el-button type="warning" plain :icon="Download" :size="currentSize" @click="handleExport" :loading="exportLoading"
                     v-hasPermi="['wms:allocated-header:export']">导出
          </el-button>
        </el-col>
  
        <el-col :span="1.5">
          <el-button type="success" plain :icon="Edit" :size="currentSize" @click="handleFinsh" :disabled="single"
                     v-hasPermi="['wms:allocated-header:finsh']">完成
          </el-button>
        </el-col>
  
        <el-col :span="1.5">
          <el-button plain :icon="Edit" :size="currentSize" @click="handleIssue" :disabled="single"
                     v-hasPermi="['wms:allocated-header:createIssue']">生成领料单
          </el-button>
        </el-col>
      </el-row>
  
      <!-- 列表 -->
      <el-table :size="currentSize"  v-loading="loading" :data="list" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"/>
        <el-table-column label="调拨单编号" align="center" prop="allocatedCode"/>
        <el-table-column label="调拨单名称" align="center" prop="allocatedName"/>
        <el-table-column label="生产工单" align="center" prop="workorderCode"/>
        <el-table-column label="调拨日期" align="center" prop="allocatedDate" width="180">
          <template #default="scope">
            <span>{{ formatDate(scope.row.allocatedDate,'YYYY-MM-DD') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="单据状态" align="center" prop="status">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.MES_ALLOCATED_STATUS" :value="scope.row.status"/>
          </template>
        </el-table-column>
  
        <el-table-column label="操作" width="210" fixed="right" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-button :size="currentSize" type="text" :icon="Delete" v-if="scope.row.status != 'FINISHED'" @click="handleExecute(scope.row)" v-hasPermi="['wms:allocated-header:allocated']">执行领出</el-button>
            <el-button :size="currentSize" type="text" :icon="Edit" @click="handleUpdate(scope.row)"
                       v-hasPermi="['wms:allocated-header:update']">修改
            </el-button>
            <el-button :size="currentSize" type="text" :icon="Delete" @click="handleDelete(scope.row)"
                       v-hasPermi="['wms:allocated-header:delete']">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNo" v-model:limit="queryParams.pageSize"
        @pagination="getList"/>
  
      <!-- 对话框(添加 / 修改) -->
      <el-dialog :title="title" v-model="open" width="90%" v-dialogDrag append-to-body>
        <el-form ref="formRef" :model="form" :rules="rules" :size="currentSize" >
          <el-row>
            <el-col :span="8">
              <el-form-item label="调拨单编号" prop="allocatedCode">
                <el-input :disabled="isEdit" v-model="form.allocatedCode" placeholder="请输入调拨单编号"/>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item>
                <el-switch v-model="autoGenFlag" active-color="#13ce66" active-text="自动生成" @change="handleAutoGenChange" v-if="optType != 'view' && form.status == 'PREPARE'"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="调拨单名称" prop="allocatedName">
                <el-input disabled v-model="form.allocatedName" placeholder="请输入调拨单名称"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="调拨日期" prop="allocatedDate">
                <el-date-picker clearable v-model="form.allocatedDate" type="date" value-format="timestamp" placeholder="选择调拨日期"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领料仓库">
                <el-cascader
                  v-model="warehouseInfo"
                  :options="warehouseOptions"
                  :props="warehouseProps"
                  placeholder="请选择"
                  @change="handleWarehouseChanged"
                ></el-cascader>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单据状态" prop="status">
                <el-select v-model="form.status" disabled>
                  <el-option v-for="dict in DICT_TYPE.MES_ALLOCATED_STATUS" :key="dict.value" :label="dict.label" :value="dict.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
  
          <el-row>
            <el-col :span="2"></el-col>
            <el-col :span="6">
              <el-form-item>
                <el-switch style="margin-left: 10%;" v-model="form.bindWorkorder" active-color="#13ce66" inactive-text="绑定工单" @change="handleBindWorkorderChange" v-if="optType != 'view' && form.status == 'PREPARE'"></el-switch>
              </el-form-item>
            </el-col>
  
            <el-col :span="8" v-if="form.bindWorkorder">
              <el-form-item label="生产工单" prop="workorderCode">
                <el-input v-model="form.workorderCode" placeholder="请选择生产工单">
                  <template #append>
                    <el-button :icon="Search" @click="handleWorkorderSelect"></el-button>
                  </template>
                </el-input>
              </el-form-item>
              <WorkorderSelect ref="woSelectRef" @onSelected="onWorkorderSelected"></WorkorderSelect>
            </el-col>
  
            <el-col :span="8" v-if="form.bindWorkorder">
              <el-form-item label="生产任务" prop="taskCode">
                <el-input v-model="form.taskCode" placeholder="请选择生产任务">
                  <template #append>
                    <el-button :icon="Search" @click="handleTaskSelect"></el-button>
                  </template>
                </el-input>
              </el-form-item>
              <ProtaskSelect ref="taskSelectRef" :workorderId="form.workorderId" @onSelected="onTaskSelected"></ProtaskSelect>
            </el-col>
          </el-row>
  
          <el-row>
            <el-col :span="24">
              <el-form-item label="备注" prop="remark">
                <el-input v-model="form.remark" placeholder="请输入内容"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div v-if="form.bindWorkorder">
          <el-divider content-position="center">物料信息</el-divider>
          <el-card shadow="always" class="box-card">
            <el-table v-loading="bomLoadding" max-height="250" :data="bomList" @selection-change="handleBomSelectionChange">
              <el-table-column type="selection" width="55" align="center"/>
              <el-table-column width="210" label="物料编码" align="center" prop="itemCode"/>
              <el-table-column width="210" label="物料名称" :show-overflow-tooltip="true" align="center" prop="itemName"/>
              <el-table-column width="210" label="需求数量" align="center" prop="quantityAllocated"/>
              <el-table-column width="190" label="单位" align="center" prop="unitOfMeasure"/>
            </el-table>
          </el-card>
  
          <el-divider content-position="center">调拨信息</el-divider>
          <el-card shadow="always" class="box-card">
            <el-table v-loading="bomLoadding" max-height="250" :size="currentSize"  :data="allocatedList" row-key="itemCode">
              <el-table-column width="220" label="物料编码" align="center" prop="itemCode"/>
              <el-table-column width="220" label="物料名称" :show-overflow-tooltip="true" align="center" prop="itemName"/>
              <el-table-column width="220" label="调拨数量" align="center" prop="quantityAllocated">
                <template #default="scope">
                  <el-input
                    v-model="scope.row.quantityAllocated"
                    type="number"
                    placeholder="请输入数量"
                    @blur="handleQuantityChange(scope.row)"
                  />
                </template>
              </el-table-column>
              <el-table-column width="210" label="单位" align="center" prop="unitOfMeasure"/>
            </el-table>
          </el-card>
        </div>
  
        <template #footer>
          <div class="dialog-footer">
            <el-button :size="currentSize"  type="primary" @click="submitForm">确 定</el-button>
            <el-button  :size="currentSize" @click="cancel">取 消</el-button>
          </div>
        </template>
      </el-dialog>
  
      <!--执行出库-->
      <el-dialog :title="'执行出库'" v-model="executeDialogVisible" width="960px" v-dialogDrag append-to-body>
        <el-form ref="executeFormRef" :model="executeForm" :size="currentSize" >
          <el-row>
            <el-col :span="8">
              <el-form-item label="调拨单编号" prop="allocatedCode">
                <el-input v-model="executeForm.allocatedCode" disabled placeholder="请输入调拨单编号"/>
              </el-form-item>
            </el-col>
  
            <el-col :span="12">
              <el-form-item label="调拨单名称" prop="allocatedName">
                <el-input v-model="executeForm.allocatedName" disabled placeholder="请输入调拨单名称"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="调拨日期" prop="allocatedDate">
                <el-date-picker clearable v-model="executeForm.allocatedDate" disabled type="date" value-format="timestamp" placeholder="选择调拨日期"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领料仓库">
                <el-cascader disabled v-model="warehouseInfo" :options="warehouseOptions" :props="warehouseProps" @change="handleWarehouseChanged"></el-cascader>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单据状态" prop="status">
                <el-select v-model="executeForm.status" disabled>
                  <el-option v-for="dict in DICT_TYPE.MES_ALLOCATED_STATUS" :key="dict.value" :label="dict.label" :value="dict.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
  
          <el-row v-if="executeForm.bindWorkorder">
            <el-col :span="8">
              <el-form-item label="生产工单" prop="workorderCode">
                <el-input disabled v-model="executeForm.workorderCode" placeholder="请选择生产工单">
                  <template #append>
                    <el-button disabled :icon="Search" @click="handleWorkorderSelect"></el-button>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
  
            <el-col :span="8">
              <el-form-item label="生产任务" prop="taskCode">
                <el-input disabled v-model="executeForm.taskCode" placeholder="请选择生产任务">
                  <template #append>
                    <el-button disabled :icon="Search" @click="handleTaskSelect"></el-button>
                  </template>
                </el-input>
              </el-form-item>
              <ProtaskSelect ref="taskSelectRef" :workorderId="executeForm.workorderId" @onSelected="onExecuteTaskSelected"></ProtaskSelect>
            </el-col>
  
            <el-col :span="8">
              <el-form-item label="客户编号">
                <el-input disabled v-model="executeForm.clientCode" placeholder="请选择生产工单"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="备注" prop="remark">
                <el-input disabled v-model="executeForm.remark" placeholder="请输入内容"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider v-if="executeForm.bindWorkorder" content-position="center">BOM信息</el-divider>
          <el-table v-if="executeForm.bindWorkorder" v-loading="bomLoadding" max-height="200" :data="bomList" style="width: 100%">
            <el-table-column width="220" label="物料编码" align="center" prop="itemCode"/>
            <el-table-column width="220" label="物料名称" :show-overflow-tooltip="true" align="center" prop="itemName"/>
            <el-table-column width="220" label="需求数量" align="center" prop="quantityAllocated"/>
            <el-table-column width="210" label="单位" align="center" prop="unitOfMeasure"/>
          </el-table>
  
          <el-divider content-position="center">调拨信息</el-divider>
          <el-row :gutter="10" class="mb8">
            <el-col :span="8">
              <el-form-item label="单据信息" prop="purchaseId">
                <el-input v-model="purchaseId" placeholder="请输入"/>
              </el-form-item>
            </el-col>
  
            <el-col :span="4">
              <el-button type="primary" round @click="">摄像头</el-button>
            </el-col>
            <el-col :span="1.5">
              <el-button type="primary" plain :icon="Plus" :size="currentSize" @click="allocatedHandleAdd">新增</el-button>
            </el-col>
  
            <el-col :span="1.5">
              <el-button type="primary" plain :icon="Plus" :size="currentSize" v-hasPermi="['wms:allocated-header:batchAdd']" @click="allocatedHandleBatchAdd">批量新增</el-button>
            </el-col>
            <StockSelect ref="stockSelectRef" @onSelected="onStockSelected"></StockSelect>
  
            <el-col :span="1.5">
              <el-button type="danger" plain :icon="Delete" :size="currentSize" :disabled="allocatedSingle" @click="allocatedHandleDelete">删除</el-button>
            </el-col>
          </el-row>
          <el-table v-loading="loading" :data="allocatedList" @selection-change="allocatedHandleSelectionChange">
            <el-table-column type="selection" width="55" align="center"/>
            <el-table-column label="序号" width="50" align="center">
              <template #default="scope">
                {{ scope.$index + 1 }}
              </template>
            </el-table-column>
            <el-table-column width="150" label="物料编码" align="center" prop="itemCode"/>
            <el-table-column width="150" label="物料名称" :show-overflow-tooltip="true" align="center" prop="itemName"/>
            <el-table-column width="100" label="调拨数量" align="center" prop="quantityAllocated"/>
            <el-table-column width="100" label="单位" align="center" prop="unitOfMeasure"/>
            <el-table-column width="100" label="批次号" align="center" prop="batchCode"/>
            <el-table-column width="100" label="调拨标识" align="center" prop="allocatedFlag"/>
            <el-table-column width="100" label="仓库名称" align="center" prop="warehouseName"/>
            <el-table-column width="130" label="库区名称" align="center" prop="locationName"/>
            <el-table-column width="100" label="库位名称" align="center" prop="areaName"/>
          </el-table>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button :size="currentSize"  @click="cancel">取 消</el-button>
            <el-button :size="currentSize"  type="primary" @click="executeAllocated">确 定</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </template>
  <script setup>
  import { ref, reactive, computed, onMounted, nextTick } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { Search, Refresh, Plus, Edit, Delete, Download } from '@element-plus/icons-vue'


  import {createAllocatedHeader, updateAllocatedHeader, deleteAllocatedHeader, getAllocatedHeader, getAllocatedHeaderPage,initBomInfo, exportAllocatedHeaderExcel, finshAllocatedHeader , updateAllocatedLine, createIssue} from "@/api/wms/allocatedHeader";
  import { getTreeList } from '@/api/wms/warehouse'
  import WorkorderSelect from '@/components/WorkorderSelect/single.vue'
  import ProtaskSelect from '@/components/TaskSelect/taskSelectSingle.vue';
  import StockSelect from '@/components/stockSelect/multi.vue';
  import Pagination from '@/components/Pagination/index.vue'
  import { formatDate } from '/@/utils/formatTime'
  import { DICT_TYPE } from '@/utils/dict'
  import { useAppStore } from '@/store/modules/app'
 
  const appStore = useAppStore()
  const currentSize = computed(() => appStore.currentSize==='mini'?  'small' : appStore.currentSize)
  
  // 遮罩层
  const loading = ref(false)
  // 选中数组
  const ids = ref([])
  const list= ref([])
  // 非单个禁用
  const single = ref(true)
  // 非多个禁用
  const multiple = ref(true)
  // 显示搜索条件
  const showSearch = ref(true)
  // 总条数
  const total = ref(0)
  // 弹出层标题
  const title = ref('')
  // 是否显示弹出层
  const open = ref(false)
  // 是否显示执行弹出层
  const executeDialogVisible = ref(false)
  // 日期范围
  const dateRange = ref([])
  // 表单参数
  const form = reactive({})
  // 执行表单参数
  const executeForm = reactive({})
  // 表单校验
  const rules = reactive({
    allocatedCode: [
      { required: true, message: '调拨单编号不能为空', trigger: 'blur' }
    ],
    allocatedName: [
      { required: true, message: '调拨单名称不能为空', trigger: 'blur' }
    ],
    allocatedDate: [
      { required: true, message: '调拨日期不能为空', trigger: 'blur' }
    ],
    status: [
      { required: true, message: '单据状态不能为空', trigger: 'change' }
    ]
  })
  
  // 查询参数
  const queryParams = reactive({
    pageNo: 1,
    pageSize: 10,
    allocatedCode: null,
    allocatedName: null,
    workorderCode: null,
    warehouseName: null,
    allocatedDate: null
  })
  
  // 仓库信息
  const warehouseInfo = ref([])
  const warehouseOptions = ref([])
  const warehouseProps = {
    value: 'id',
    label: 'name',
    children: 'children'
  }
  
  // 工单信息
  const workorderInfo = ref(null)
  const woSelectRef = ref(null)
  
  // 任务信息
  const taskInfo = ref(null)
  const taskSelectRef = ref(null)
  
  // 库存信息
  const stockInfo = ref(null)
  const stockSelectRef = ref(null)
  
  // 物料信息
  const bomList = ref([])
  const bomLoadding = ref(false)
  
  // 调拨信息
  const allocatedList = ref([])
  const allocatedIds = ref([])
  const allocatedSingle = ref(true)
  const allocatedMultiple = ref(true)
  
  // 自动生成标识
  const autoGenFlag = ref(false)
  
  // 采购单号
  const purchaseId = ref('')
  
  // 操作类型
  const optType = ref('add')
  
  // 表单ref
  const formRef = ref(null)
  const queryFormRef = ref(null)
  const executeFormRef = ref(null)
  
  /** 查询调拨单列表 */
  function getList() {
    loading.value = true
    getAllocatedHeaderPage(queryParams).then(response => {
      console.log(response,'responsessssss')
      list.value = response.list
      total.value = response.total
      loading.value = false
    })
  }
  
  /** 取消按钮 */
  function cancel() {
    open.value = false
    reset()
  }
  
  /** 表单重置 */
  function reset() {
    form.id = null
    form.allocatedCode = null
    form.allocatedName = null
    form.allocatedDate = null
    form.status = null
    form.remark = null
    form.workorderCode = null
    form.taskCode = null
    form.bindWorkorder = false
    formRef.value?.resetFields()
  }
  
  /** 搜索按钮操作 */
  function handleQuery() {
    queryParams.pageNo = 1
    getList()
  }
  
  /** 重置按钮操作 */
  function resetQuery() {
    dateRange.value = []
    queryFormRef.value?.resetFields()
    handleQuery()
  }
  
  /** 多选框选中数据 */
  function handleSelectionChange(selection) {
    ids.value = selection.map(item => item.id)
    single.value = selection.length !== 1
    multiple.value = !selection.length
  }
  
  /** 新增按钮操作 */
  function handleAdd() {
    reset()
    open.value = true
    title.value = '添加调拨单'
    optType.value = 'add'
  }
  
  /** 修改按钮操作 */
  function handleUpdate(row) {
    reset()
    const id = row.id || ids.value[0]
    getAllocatedHeader(id).then(response => {
      Object.assign(form, response)
      open.value = true
      title.value = '修改调拨单'
      optType.value = 'edit'
    })
  }
  
  /** 提交按钮 */
  function submitForm() {
    formRef.value?.validate(valid => {
      if (valid) {
        if (form.id != null) {
          updateAllocatedHeader(form).then(response => {
            ElMessage.success('修改成功')
            open.value = false
            getList()
          })
        } else {
          createAllocatedHeader(form).then(response => {
            ElMessage.success('新增成功')
            open.value = false
            getList()
          })
        }
      }
    })
  }
  
  /** 删除按钮操作 */
  function handleDelete(row) {
    const ids = row.id || ids.value
    ElMessageBox.confirm('是否确认删除调拨单编号为"' + ids + '"的数据项?', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(function() {
      return deleteAllocatedHeader(ids)
    }).then(() => {
      getList()
      ElMessage.success('删除成功')
    })
  }
  
  /** 完成按钮操作 */
  function handleFinsh() {
    const id = ids.value[0]
    ElMessageBox.confirm('是否确认完成调拨单编号为"' + id + '"的数据项?', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(function() {
      return finshAllocatedHeader(id)
    }).then(() => {
      getList()
      ElMessage.success('完成成功')
    })
  }
  
  /** 生成领料单按钮操作 */
  function handleIssue() {
    const id = ids.value[0]
    ElMessageBox.confirm('是否确认生成领料单编号为"' + id + '"的数据项?', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(function() {
      return createIssue(id)
    }).then(() => {
      getList()
      ElMessage.success('生成领料单成功')
    })
  }
  
  /** 执行领出按钮操作 */
  function handleExecute(row) {
    reset()
    const id = row.id || ids.value[0]
    getAllocatedHeader(id).then(response => {
      Object.assign(executeForm, response)
      executeDialogVisible.value = true
    })
  }
  
  /** 执行出库按钮操作 */
  async function executeAllocated() {
    if (allocatedList.value.length === 0) {
      ElMessage.warning('请选择调拨信息')
      return
    }
    if (allocatedList.value.some(item => !item.allocatedFlag)) {
      ElMessage.warning('存在未调拨的物料')
      return
    }
    try {
      await allocatedAllocatedHeader(executeForm.id, allocatedList.value)
      ElMessage.success('执行成功')
      executeDialogVisible.value = false
      getList()
    } catch (error) {
      console.error('执行失败:', error)
    }
  }
  
  /** 自动生成标识操作 */
  function handleAutoGenChange(val) {
    if (val) {
      form.allocatedCode = 'AUTO' + new Date().getTime()
    } else {
      form.allocatedCode = null
    }
  }
  
  /** 绑定工单标识操作 */
  function handleBindWorkorderChange(val) {
    if (!val) {
      form.workorderCode = null
      form.taskCode = null
      form.workorderId = null
      form.taskId = null
      form.clientCode = null
      bomList.value = []
      allocatedList.value = []
    }
  }
  
  /** 工单选择按钮操作 */
  function handleWorkorderSelect() {
    woSelectRef.value?.show()
  }
  
  /** 工单选择回调 */
  function onWorkorderSelected(selected) {
    workorderInfo.value = selected
    form.workorderCode = selected.workorderCode
    form.workorderId = selected.id
    form.clientCode = selected.clientCode
    getBomList(selected.id)
  }
  
  /** 任务选择按钮操作 */
  function handleTaskSelect() {
    taskSelectRef.value?.show()
  }
  
  /** 任务选择回调 */
  function onTaskSelected(selected) {
    taskInfo.value = selected
    form.taskCode = selected.taskCode
    form.taskId = selected.id
  }
  
  /** 执行任务选择回调 */
  function onExecuteTaskSelected(selected) {
    taskInfo.value = selected
    executeForm.taskCode = selected.taskCode
    executeForm.taskId = selected.id
  }
  
  /** 获取BOM列表 */
  function getBomList(workorderId) {
    bomLoadding.value = true
    initBomInfo({ workorderId }).then(response => {
      bomList.value = response
      allocatedList.value = response.map(item => ({
        itemCode: item.itemCode,
        itemName: item.itemName,
        quantityAllocated: item.quantityAllocated,
        unitOfMeasure: item.unitOfMeasure
      }))
      bomLoadding.value = false
    })
  }
  
  /** 物料数量变更 */
  function handleQuantityChange(row) {
    const bomItem = bomList.value.find(item => item.itemCode === row.itemCode)
    if (bomItem && row.quantityAllocated > bomItem.quantityAllocated) {
      ElMessage.warning('调拨数量不能大于需求数量')
      row.quantityAllocated = bomItem.quantityAllocated
    }
  }
  
  /** 物料选择回调 */
  function onStockSelected(selected) {
    stockInfo.value = selected
    allocatedList.value.push({
      itemCode: selected.itemCode,
      itemName: selected.itemName,
      quantityAllocated: selected.quantityOnhand,
      unitOfMeasure: selected.unitOfMeasure,
      batchCode: selected.batchCode,
      allocatedFlag: false,
      warehouseName: selected.warehouseName,
      locationName: selected.locationName,
      areaName: selected.areaName
    })
  }
  
  /** 调拨信息多选框选中数据 */
  function allocatedHandleSelectionChange(selection) {
    allocatedIds.value = selection.map(item => item.itemCode)
    allocatedSingle.value = selection.length !== 1
    allocatedMultiple.value = !selection.length
  }
  
  /** 调拨信息新增按钮操作 */
  function allocatedHandleAdd() {
    stockSelectRef.value?.show()
  }
  
  /** 调拨信息批量新增按钮操作 */
  function allocatedHandleBatchAdd() {
    // TODO: 实现批量新增功能
  }
  
  /** 调拨信息删除按钮操作 */
  function allocatedHandleDelete() {
    const itemCodes = allocatedIds.value
    ElMessageBox.confirm('是否确认删除选中的数据项?', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      allocatedList.value = allocatedList.value.filter(item => !itemCodes.includes(item.itemCode))
      allocatedHandleSelectionChange([])
    })
  }
  
  /** 导出按钮操作 */
  function handleExport() {
    // TODO: 实现导出功能
  }
  
  /** 仓库选择回调 */
  function handleWarehouseChanged(value) {
    if (value && value.length > 0) {
      form.warehouseId = value[value.length - 1]
    }
  }
  
  /** 获取仓库列表 */
  function getWarehouseList() {
    getTreeList().then(response => {
      warehouseOptions.value = response
    })
  }
  
  onMounted(() => {
    getList()
    getWarehouseList()
  })
  </script>
<!-- <style lang="scss" scoped>
  .app-container {
    padding: 20px;
  }
  
  .mb8 {
    margin-bottom: 8px;
  }
  
  .box-card {
    margin-bottom: 20px;
  }
  
  .dialog-footer {
    text-align: right;
  }
  
  :deep(.el-form-item__label) {
    font-weight: bold;
  }
  
  :deep(.el-table) {
    margin-top: 15px;
  }
  
  :deep(.el-pagination) {
    margin-top: 20px;
    text-align: right;
  }
  
  :deep(.el-dialog__body) {
    padding: 20px 40px;
  }
  
  :deep(.el-dialog__footer) {
    padding: 20px 40px;
    border-top: 1px solid #dcdfe6;
  }
  
  :deep(.el-divider__text) {
    font-size: 16px;
    font-weight: bold;
    color: #303133;
  }
  
  :deep(.el-cascader) {
    width: 100%;
  }
  
  :deep(.el-input-number) {
    width: 100%;
  }
  
  :deep(.el-date-editor) {
    width: 100%;
  }
  
  :deep(.el-select) {
    width: 100%;
  }
  
  :deep(.el-switch) {
    margin-left: 10px;
  }
  
  :deep(.el-button--text) {
    padding: 0;
    margin: 0 5px;
  }
  
  :deep(.el-table .cell) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  :deep(.el-table th) {
    background-color: #f5f7fa;
    color: #606266;
    font-weight: bold;
  }
  
  :deep(.el-table td) {
    padding: 8px 0;
  }
  
  :deep(.el-form-item) {
    margin-bottom: 18px;
  }
  
  :deep(.el-input__wrapper) {
    box-shadow: 0 0 0 1px #dcdfe6 inset;
  }
  
  :deep(.el-input__wrapper:hover) {
    box-shadow: 0 0 0 1px #409eff inset;
  }
  
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #409eff inset;
  }
  
  :deep(.el-button--primary) {
    background-color: #409eff;
    border-color: #409eff;
  }
  
  :deep(.el-button--primary:hover) {
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
  
  :deep(.el-button--danger) {
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  
  :deep(.el-button--danger:hover) {
    background-color: #f78989;
    border-color: #f78989;
  }
  
  :deep(.el-message) {
    min-width: 300px;
  }
  
  :deep(.el-message--success) {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
  }
  
  :deep(.el-message--warning) {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
  }
  
  :deep(.el-message--error) {
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
  }
  
  :deep(.el-message--info) {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }
  </style> -->