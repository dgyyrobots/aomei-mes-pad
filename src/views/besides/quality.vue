<template>
    <div style="display: flex">
      <div style="width: 300px; border: 1px solid #ebeef5" class="left">
        <!-- :default-active="$route.meta.type || $route.name"
          @select="handleSelect"
          router -->
        <el-menu :default-active="route.name" router>
          <el-menu-item index="iqc">
            <img src="" alt="" style="width: 20px; height: 20px; margin-left: 12px; margin-right: 12px" />
            <span>来料检验</span>
          </el-menu-item>
          <el-menu-item index="oqc">
            <img src="" alt="" style="width: 20px; height: 20px; margin-left: 12px; margin-right: 12px" />
            <span>出库检验</span>
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
        <!-- <iqc></iqc> -->
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import iqc from './quality/iqc/index.vue'
  import { DICT_TYPE } from '/@/utils/dict'
  import { Delete, Search, Plus } from '@element-plus/icons-vue'
  import type { TableInstance } from 'element-plus'
  import { deleteWorkorder, getWorkorderPage } from '/@/api/workOrder'
  const route = useRoute()
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
  



  
  onBeforeMount(() => {
    fetchData()
  })
  </script>
  <style scoped>
  .work-order-container {
    width: calc(100% - 300px);
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
  