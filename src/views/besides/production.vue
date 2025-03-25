<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable linebreak-style -->
<template>
  <div class="contnt" style="padding-bottom: 120px;">
    <ContentWrap class="left" v-loading="dataListLoading">
      <div class="numTitle">
        <div :class="flag == 3 ? 'active' : ''" @click="activeChange(3)">待领取0个</div>
        <div :class="flag == 0 ? 'active' : ''" @click="activeChange(0)">未完工{{ Ntotal }}个</div>
        <div :class="flag == 2 ? 'active' : ''" @click="activeChange(2)">已完工{{ total - Ntotal }}个</div>
        <div :class="flag == 1 ? 'active' : ''" @click="activeChange(1)">全部{{ total }}个</div>

      </div>
      <div style="display: flex;overflow-x: scroll;">
        <el-col :lg="6" :md="6" :sm="6" :xl="6" :xs="6" v-for="item in dataList" :key="item.id"
          @click="getDetail(item.id)">
          <vab-colorful-card :body-style="{ height: '100%' }" :style="item.id == detailId ? style1 : style2">
            <div :class="`parting-line ${false ? 'parting-line-danger' : 'parting-line-primary'}`"></div>
            <span :class="`pending-title ${false ? 'pending-title-danger' : 'pending-title-primary'}`">
              <!-- pending-title-danger -->
              产出物料：
              <span>{{ item.itemName }}-{{ item.itemCode }}</span>
            </span>
            <el-progress :percentage="50" style="red" />
            <div><span class="pending-tips">任务状态： <el-tag size="small">已领取</el-tag></span></div>
            <div> <span class="pending-tips">任务进度： <el-tag size="small">{{ getDictLabel('mes_pro_task_status',
              item.status) }}</el-tag></span></div>
            <div> <span class="pending-tips">生产进度：{{ item.quantityProduced }}/{{ item.quantity }}</span></div>
            <div> <span class="pending-tips">生产工单编号：{{ item.workorderCode }}</span></div>
            <div> <span class="pending-tips">需求日期：{{ formatDate(item.requestDate) }}</span></div>
          </vab-colorful-card>
        </el-col>
      </div>
      <!-- <div class="ec" v-for="item in dataList" :key="item.id" @click="getDetail(item.id)">
        <div>产出物料：<text>{{ item.itemName }}-{{ item.itemCode }}</text></div>
        <div>
          <div>
            <div class="loader"></div>
            <text>进行中{{ item.quantityProduced / item.quantity }}%</text>
          </div>
          <div>
            <div>任务状态：已领取</div>
            <div>任务进度：{{ getDictLabel('mes_pro_task_status', item.status) }}</div>
            <div>生产进度：{{ item.quantityProduced }}/{{ item.quantity }}</div>
            <div>生产工单编号：{{ item.workorderCode }}</div>
            <div>需求日期：{{ formatDate(item.requestDate) }}</div>
          </div>
        </div>
      </div> -->
      <el-empty v-if="!dataList.length" class="vab-data-empty" description="暂无数据" />
      <!-- <div class="ec v8189a8">        <div>产出物料：<text>钢丝10cm</text></div>
        <div>
          <div>
            <div class="loader"></div>
              <text>进行中80%</text>
          </div>
          <div>
            <div>任务进度：未完成<text style="font-size: 20px;">13</text>个，共<text style="font-size: 20px;">25</text>个</div>
            <div>生产进度：1000/5225</div>
            <div>订单号：xs202025311522</div>
            <div>订单发货日期：2020-60-20</div>
          </div>
        </div></div> -->
    </ContentWrap>
    <div class="right">
      <el-tabs v-model="tabs" type="border-card">
        <el-tab-pane label="任务详情" name="任务详情">
          <detail :form-data="formData" />
        </el-tab-pane>
        <el-tab-pane label="BOM明细" name="BOM明细">
          <bom :item-id="formData.itemId" />
        </el-tab-pane>
        <el-tab-pane label="SOP" name="SOP">
          <MdProductSopList :item-id="formData.itemId" />
        </el-tab-pane>
        <el-tab-pane label="SIP" name="SIP" style="height: max-content;"> <el-empty description="暂无数据" /></el-tab-pane>
        <el-tab-pane label="领料明细" name="领料明细">
          <IssueLineList :taskCode="formData.taskCode" />
        </el-tab-pane>
        <el-tab-pane label="投料明细" name="投料明细"><el-empty description="暂无数据" /></el-tab-pane>
        <el-tab-pane label="产出明细" name="产出明细">
          <ProductProduceLineList :taskCode="formData.taskCode" />
        </el-tab-pane>
        <el-tab-pane label="检验明细" name="检验明细">
          <LineList :taskCode="formData.taskCode" />
        </el-tab-pane>
        <el-tab-pane label="报工明细" name="报工明细">
          <FeedbackList :taskCode="formData.taskCode" />
        </el-tab-pane>
        <el-tab-pane label="操作日志" name="操作日志"><el-empty description="暂无数据" /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <div class="fixed">
    <!-- <div class="vd96d00" @click="but(4)">任务领取</div>
    <div class="v006dd9">来料检验</div>
    <div class="vff0000" @click="but(5)">上料扫码</div>
    <div class="v660066">投料记录</div>
    <div class="vff4d4d" @click="but(1)" v-if="formData?.status != 'STARTED'">{{ '开工' }}</div>
    <div class="vff4d4d" @click="but(3)" v-else>{{ '完工' }}</div>
    <div class="v2626ff">转移单</div>
    <div class="vd96d00" @click="but(6)">产出</div>
    <div class="vd90000" @click="but(7)">检验记录</div>
    <div class="v008c23" @click="but(2)">报工</div> -->
  </div>
  <action-buttons 
      :status="formData?.status"
      @action="but"
    />
  <Dialog v-if="bg.open" v-model="bg.open" width="80%" title="生产报工">
    <el-form ref="form" :model="bg.form" :rules="rules">
      <el-form-item prop="quantityFeedback" label="报工总数量">
        <el-input-number v-model="bg.form.quantityFeedback" :max="formData.quantity - formData.quantityProduced" :min="1" />
      </el-form-item>
      <el-form-item prop="nickName" label="报工人">
        <el-input v-model="bg.form.nickName" placeholder="请输入报工人姓名" disabled />
      </el-form-item>
      <!-- <el-form-item prop="reportFee" label="报工价格">
        <el-input v-model="bg.form.reportFee" placeholder="请输入报工价格" />
      </el-form-item> -->
      <el-form-item prop="quantityQualify" label="合格品数量">
        <el-input-number v-model="bg.form.quantityQualify"
          :max="bg.form.quantityFeedback - bg.form.quantityUnqualify" :min="0" />
      </el-form-item>
      <el-form-item prop="quantityUnqualify" label="不良品数量">
        <el-input-number v-model="bg.form.quantityUnqualify"
          :max="bg.form.quantityFeedback - bg.form.quantityQualify" :min="0" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div>
        <el-button type="primary" @click="submitForm">提交 </el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </template>
  </Dialog>
  <ProductProduceLineForm ref="formRef" @success="getDetail(detailId.value)" />
  <IpqcForm ref="formRefs" @success="getDetail" />
</template>
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable prettier/prettier -->
<script lang="ts" setup>
import ProductProduceLineList from './list/ProductProduceLineList.vue'
import LineList from './list/LineList.vue'
import detail from './list/detail.vue'
import FeedbackList from './list/FeedbackList.vue'
import IssueLineList from './list/IssueLineList.vue'
import MdProductSopList from './list/MdProductSopList.vue'
import IpqcForm from './ipqc/IpqcForm.vue'
import bom from './list/bom.vue'
import { Search } from '@element-plus/icons-vue'
import * as ProductionApi from '/@/api/production/index'
import { DICT_TYPE, getDictLabel, getDictObj, getStrDictOptions } from '/@/utils/dict'
import { formatDate } from '/@/utils/formatTime'
import ProductProduceLineForm from './list/ProductProduceLineForm.vue'
import ActionButtons from './components/ActionButtons.vue'
// 模拟数据
const formData = ref({
  id: undefined,
  taskCode: undefined,
  taskName: undefined,
  workorderId: undefined,
  workorderCode: undefined,
  workorderName: undefined,
  workstationId: undefined,
  workstationCode: undefined,
  workstationName: undefined,
  processId: undefined,
  processCode: undefined,
  processName: undefined,
  itemId: undefined,
  itemCode: undefined,
  itemName: undefined,
  specification: undefined,
  unitOfMeasure: undefined,
  quantity: 1,
  quantityProduced: undefined,
  quantityQuanlify: undefined,
  quantityUnquanlify: undefined,
  quantityChanged: undefined,
  clientId: undefined,
  clientCode: undefined,
  clientName: undefined,
  clientNick: undefined,
  startTime: undefined,
  duration: 1,
  endTime: undefined,
  colorCode: undefined,
  requestDate: undefined,
  status: undefined,
  remark: undefined
})
// 左边生产任务
const dataList: any = ref([])
const total = ref(0)
const Ntotal = ref(0)
const flag = ref(1)
onMounted(async () => {
  getList()
})
const dataListLoading = ref(false)
// 获取列表
const getList = async () => {
  dataListLoading.value = true
  try {
    let data = await ProductionApi.getTaskPage({ pageSize: 100 })
    total.value = data.total
    let count = 0;
    let arr = []
    let arr2 = []
    for (const item of data.list) {
      if (item.status !== 'FINISHED') {
        arr.push(item)
        count++;
      } else {
        arr2.push(item)
      }
    }
    Ntotal.value = count
    if (flag.value == 0) {
      dataList.value = arr
    } else if (flag.value == 1) {
      dataList.value = data.list
    } else if (flag.value == 2) {
      dataList.value = arr2
    } else {
      dataList.value = []
    }
  } finally {
    dataListLoading.value = false
  }
}
// 列表内容切换
const activeChange = (v: any) => {
  flag.value = v
  getList()
}
// 获取详情内容
const detailLoading = ref(false)
const detailId = ref()
const getDetail = async (v: any) => {
  detailId.value = v
  detailLoading.value = true
  try {
    let data = await ProductionApi.getTask(v)
    // // 强刷数据
    // formData.value = {}
    // await nextTick(() => { })
    formData.value = data
  } finally {
    detailLoading.value = false
  }

}
import { translate } from '/@/i18n'
import { useUserStore } from '/@/store/modules/user'
const userStore = useUserStore()
const { username } = storeToRefs(userStore)
const message = useMessage() // 国际化
// 报工数据--------------------------------------
const form = ref()
const bg = reactive({
  open: false,
  form: {
    quantityUnqualify: 0,
    quantityQualify: 1,
    reportFee: undefined,
    nickName: username,
    quantityFeedback: 1
  },
  row: undefined
})
/** 表单重置 */
const reset = () => {
  bg.form = {
    quantityUnqualify: 0,
    quantityQualify: 1,
    reportFee: undefined,
    nickName: username,
    quantityFeedback: 1
  }
  form.value?.resetFields()
}
/** 取消按钮 */
const cancel = () => {
  bg.open = false
  reset()
}

/** 提交按钮 */
const submitForm = async () => {
  bg.form.feedbackType = 'SELF'
  if (bg.form.reportFee) bg.form.reportFee = bg.form.reportFee * 1
  delete bg.row.id
  await ProductionApi.createFeedback(Object.assign(bg.form, bg.row))
  bg.open = false
  message.success('上报成功')
  getList()
  getDetail(detailId.value)
}

const tabs = ref('任务详情')

const formRef = ref()

// 下面操作按钮逻辑----------------------------------------
const formRefs = ref()
const but = async (v: any) => {
  if (!detailId.value || !formData.value) return message.error('请先选择一个任务');
  if (v == 1) {
    if (formData.value.status != 'NORMAL') return message.error('当前状态不可开工')
    // 开工逻辑
    await message.confirm('确认开工？')
    await ProductionApi.updateTask({ id: detailId.value, status: 'STARTED' })
    message.success('开工成功')
    getList()
    getDetail(detailId.value)
  }
  if (v == 2) {
    if (formData.value.status == 'STARTED' || formData.value.status == 'FINISHED') {
      //报工逻辑
      bg.row = formData.value
      reset()
      bg.open = true
    } else {
      return message.error('当前状态不可报工')
    }
  }
  if (v == 3) {
    if (formData.value.status != 'STARTED') return message.error('当前状态不可完工')
    await message.confirm('确认完工？')
    await ProductionApi.updateTask({ id: detailId.value, status: 'FINISHED' })
    message.success('完工成功')
    getList()
    getDetail(detailId.value)
  }
  if (v == 4) {
    await message.confirm(`确认领取${formData.value.taskName}？`)
  }
  if (v == 5) {
    tabs.value = 'BOM明细'
  }
  if (v == 6) {
    if (formData.value.status != 'STARTED') return message.error('当前状态不可产出')
    let data = await ProductionApi.getProductProducePage({ taskCode: formData.value.taskCode })
    if (data.list && data.list.length) {
      formRef.value.open('create', null, data.list[0].id)
    } else {
      message.error('没有对应的产出记录无法新增产出明细')
    }
  }
  if (v == 7) {
    /** 添加/修改操作 */
    if (formData.value.status != 'STARTED') return message.error('当前状态不可新增过程检验')
    formRefs.value.open('create', null, formData.value)
  }
}
const colorFrom2 = ref<string>('var(--el-color-primary-light-9)')
const colorTo2 = ref<string>('var(--el-color-white)')
const colorFrom1 = ref<string>('rgba(240,2,20,0.098)')
const colorTo1 = ref<string>('var(--el-color-white)')
const style2 = {
  background: `linear-gradient(to right,${colorFrom2.value}, ${colorTo2.value}) no-repeat`,
  border: 0,
  height: '220.19px',
}
const style1 = {
  background: `linear-gradient(to right,${colorFrom1.value}, ${colorTo1.value}) no-repeat`,
  border: 0,
  height: '220.19px',
}
</script>
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
.fixed {
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  >div {
    cursor: pointer;
    width: 100px;
    height: 50px;
    background-color: red;
    font-size: 20px;
    margin: 10px;
    text-align: center;
    color: #fff;
    line-height: 50px;
    border-radius: 10px;
  }

  >div.vd96d00 {
    background-color: #d96d00;
  }

  >div.v006dd9 {
    background-color: #006dd9;
  }

  >div.vff0000 {
    background-color: #ff0000;
  }

  >div.v660066 {
    background-color: #660066;
  }

  >div.vff4d4d {
    height: 80px;
    line-height: 80px;
    width: 80px;
    background-color: #ff4d4d;
  }

  >div.v2626ff {
    background-color: #2626ff;
  }

  >div.vd90000 {
    background-color: #d90000;
  }

  >div.v008c23 {
    background-color: #008c23;
  }
}

.contnt {
  display: flex;
  flex-direction: column;

  .left {
    max-height: calc(100vh);
    overflow-y: scroll;
    padding-top: 20px;
    // width: 500px;
    min-width: 500px;
    margin-right: 20px;

    * {
      color: var(--el-text-color-regular);
    }

    .numTitle {
      display: flex;
      justify-content: center;
      margin-bottom: var(--el-margin);

      >div {
        cursor: pointer;
        padding: 10px 20px;
        font-weight: 600;
      }

      >div:first-child {
        // margin-right: 30px;
      }

      >div.active {
        background-color: val(--el-color-primary-light-9);
        // #eff3ff
        box-sizing: border-box;
        border-left: 3px solid #1d62e0;
      }
    }

    .ec {
      cursor: pointer;
      width: 100%;
      height: 190px;
      background-color: #5d6584;
      margin-top: 30px;
      padding: 30px;
      box-sizing: border-box;

      >div {
        color: #fff;
      }

      >div:nth-child(2) {
        display: flex;
        margin-top: 10px;

        >div:first-child {
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;

          >text {
            margin-top: 10px;
          }

          .loader {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 10px solid #f3f3f3;
            border-top: 10px solid #3498db;
            animation: spin 2s linear infinite;
            margin-top: 10px;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }

        }

        >div:last-child {
          >div {
            margin: 8px;
          }
        }
      }
    }
  }

  .right {
    flex: 1;

    .title {
      font-size: 20px;
    }

    .border {
      width: 100%;
      height: 1px;
      background-color: #f4f4f4;
      margin: 30px 0;
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      >div {
        flex: 1;
        height: 300px;
      }

      >div:nth-child(2) {
        margin: 0 100px;
        background-color: #101731;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #fff;

        text {
          font-size: 20px;
        }
      }

      >div:nth-child(1) {
        background-color: #1e2f71;
      }

      >div:nth-child(3) {
        background-color: #101731;
        margin: 0 100px;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #fff;

        text {
          font-size: 20px;
        }
      }

      >div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        box-sizing: border-box;

        >div {
          // height: 40%;
          width: 100%;
          background-color: #01104a;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          color: #fff;
          flex-direction: column;
          padding: 20px;

          >div:nth-child(2) {
            background-color: #10327a;
            border: 3px solid #3388de;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
          }
        }
      }
    }
  }
}

.v8189a8 {
  background-color: #8189a8;
}


.pending-count {
  --el-badge-size: 16px;
  margin-left: 3px;
}

:deep() {
  sup {
    top: -1px;
  }

  .el-tag {
    margin-right: 5px;
  }

  .el-card__body {
    padding-bottom: 0;
  }

  .parting-line {
    float: left;
    width: 10px;
    height: calc(100% - 40px);
    margin-top: 15px;
    margin-right: 20px;
    border-radius: 10px;

    &-danger {
      background: var(--el-color-danger);
    }

    &-primary {
      background: var(--el-color-primary);
    }
  }

  .pending-title {
    display: block;
    margin-top: 12px;
    font-size: var(--el-font-size-medium);
    font-weight: bold;
    line-height: 38px;
    color: var(--el-color-primary);

    span {
      font-size: var(--el-font-size-extra-small);
      font-weight: normal;
      color: var(--el-color-primary);
    }

    &-danger {
      color: var(--el-color-danger);
    }

    &-primary {
      color: var(--el-color-primary);
    }
  }

  .pending-tips {
    font-size: var(--el-font-size-extra-small);
    color: var(--el-text-color-regular);
    margin: 4px;
    display: block;
    font-size: 14px;
  }

  .el-tag__content {
    color: var(--el-color-primary);
  }
}
</style>
