<template>

  <div class="content">
    <div class="top">
      <el-button  @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 刷新</el-button>
    </div>
    <!-- 列表 -->
  
      <el-table v-loading="loading" :data="list">
        <el-table-column label="编号" align="center" prop="id" />
        <el-table-column label="用户类型" align="center" prop="userType">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.USER_TYPE" :value="scope.row.userType" />
          </template>
        </el-table-column>
        <el-table-column label="用户编号" align="center" prop="userId" width="80" />
        <el-table-column label="模板编码" align="center" prop="templateCode" width="80" />
        <el-table-column label="发送人名称" align="center" prop="templateNickname" width="180" />
        <el-table-column
          label="模版内容"
          align="center"
          prop="templateContent"
          width="200"
          show-overflow-tooltip
        />
        <el-table-column
          label="模版参数"
          align="center"
          prop="templateParams"
          width="180"
          show-overflow-tooltip
        >
          <template #default="scope"> {{ scope.row.templateParams }}</template>
        </el-table-column>
        <el-table-column label="模版类型" align="center" prop="templateType" width="120">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.SYSTEM_NOTIFY_TEMPLATE_TYPE" :value="scope.row.templateType" />
          </template>
        </el-table-column>
        <el-table-column label="是否已读" align="center" prop="readStatus" width="100">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.INFRA_BOOLEAN_STRING" :value="scope.row.readStatus" />
          </template>
        </el-table-column>
        <el-table-column
          label="阅读时间"
          align="center"
          prop="readTime"
          width="180"
          :formatter="dateFormatter"
        />
        <el-table-column
          label="创建时间"
          align="center"
          prop="createTime"
          width="180"
          :formatter="dateFormatter"
        />
        <el-table-column label="操作" align="center" fixed="right">
          <template #default="scope">
            <el-button
              link
              type="primary"
              @click="openDetail(scope.row)"
              v-hasPermi="['system:notify-message:query']"
            >
              详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <Pagination
        :total="total"
        v-model:page="queryParams.pageNo"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
      />
 
  
    <!-- 表单弹窗：详情 -->
    <NotifyMessageDetail ref="detailRef" />
  </div>  

  </template>
  <script lang="ts" setup>
  import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
  import { dateFormatter } from '@/utils/formatTime'
  import * as NotifyMessageApi from '@/api/system/notify/message'
  import NotifyMessageDetail from './NotifyMessageDetail.vue'
  
  defineOptions({ name: 'SystemNotifyMessage' })
  
  const loading = ref(true) // 列表的加载中
  const total = ref(0) // 列表的总页数
  const list = ref([]) // 列表的数据
  const queryParams = reactive({
    pageNo: 1,
    pageSize: 20,
    userType: undefined,
    userId: undefined,
    templateCode: undefined,
    templateType: undefined,
    createTime: []
  })
  const queryFormRef = ref() // 搜索的表单
  
  /** 查询列表 */
  const getList = async () => {
    loading.value = true
    try {
      const data = await NotifyMessageApi.getNotifyMessagePage(queryParams)
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
  
  /** 重置按钮操作 */
  const resetQuery = () => {
    // console.log(6666)
    // queryFormRef.value.resetFields()
    handleQuery()
  }
  
  /** 详情操作 */
  const detailRef = ref()
  const openDetail = (data: NotifyMessageApi.NotifyMessageVO) => {
    detailRef.value.open(data)
  }
  
  /** 初始化 **/
  onMounted(() => {
    getList()
  })
  </script>
  <style lang="scss" scoped>
  .content {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .top {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 14px;
    }
  }
</style>