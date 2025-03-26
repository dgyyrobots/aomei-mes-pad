<template>
   
    <el-dropdown trigger="click" @command="handleSetSize">
      <div class="size-select-icon">
        <!-- <svg-icon class-name="size-icon" icon-class="size" /> -->
        <vab-icon  icon="fontsize"  is-custom-svg size="16" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item 
            v-for="item of sizeOptions" 
            :key="item.value" 
            :disabled="size === item.value" 
            :command="item.value"
          >
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>
  
  <script setup lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { ElMessage } from 'element-plus'
  // import SvgIcon from '/@/components/SvgIcon/index.vue' // 确保引入SvgIcon组件
  import { useAppStore } from '/@/store/modules/app'
  import { useTagsViewStore } from '/@/store/modules/tagsView'
  import { ElementPlusSize } from '/@/types/elementPlus'
  // 定义尺寸选项类型
  interface SizeOption {
    label: string
    value: string
  }
  
  // 尺寸选项
  const sizeOptions: SizeOption[] = [
  { label: '大', value: 'large' },
  { label: '默认', value: 'default' },
  { label: '小', value: 'small' },
  { label: '迷你', value: 'mini' },
]
  
  // 获取store和router
  const appStore = useAppStore()

  
  // 计算当前尺寸
  const size = computed(() => appStore.size || 'default') // 添加默认值防止undefined
  
  // 处理尺寸变更
  const handleSetSize = (sizeVal: string) => {
  // 设置Element Plus全局尺寸变量
  const root = document.documentElement

  
  // 新增字体相关变量设置
  const fontSizeMap = {
  'large': { base: '16px', medium: '18px' },
  'default': { base: '14px', medium: '16px' },
  'small': { base: '12px', medium: '14px' },
  'mini': { base: '10px', medium: '12px' }
}

  const sizeConfig = fontSizeMap[sizeVal] || fontSizeMap.default
  root.style.setProperty('--el-font-size-base', sizeConfig.base)
  root.style.setProperty('--el-font-size-medium', sizeConfig.medium)
  
  // 更新store中的尺寸设置
  appStore.setCurrentSize(sizeVal as ElementPlusSize)

}
  

  </script>
  
  <style scoped>
  .size-select-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    padding: 0 8px;
  }
  
  .size-icon {
    font-size: 18px;
  }
  </style>