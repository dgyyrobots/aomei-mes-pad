<template>
        <!-- fixed: fixedHeader, -->
  <div
    class="vab-layout-column"
    :class="{

      'no-tabs-bar': !showTabs,
    }"
  >
  <!-- 隐藏左边路由 -->
    <!-- <vab-column-bar /> -->
    <div
      class="vab-main"
      :class="{
        ['vab-main-' + theme.columnStyle]: true,
        'is-collapse-main': collapse,
        'is-no-tabs': !showTabs,
      }"
    >
      <div
        class="vab-layout-header"
        :class="{
          'fixed-header': fixedHeader,
          'is-no-tabs': !showTabs,
        }"
      >
        <vab-nav />
        <!-- <vab-tabs v-show="showTabs" /> -->
      </div>
      <vab-app-main />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '/@/store/modules/settings'

defineOptions({
  name: 'VabLayoutColumn',
})

defineProps({
  collapse: {
    type: Boolean,
    default() {
      return false
    },
  },
  fixedHeader: {
    type: Boolean,
    default() {
      return true
    },
  },
  showTabs: {
    type: Boolean,
    default() {
      return true
    },
  },
})

const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)
</script>

<style lang="scss" scoped>
.vab-layout-column {
  .vab-main {
    &.is-collapse-main {
      &.vab-main-horizontal,
      &.vab-main-semicircle {
        // margin-left: calc(var(--el-left-menu-width-min) * 1.4);

        :deep() {
          .fixed-header {
            width: calc(100% - var(--el-left-menu-width-min) * 1.4);
          }
        }
      }
    }
  }
}
</style>
