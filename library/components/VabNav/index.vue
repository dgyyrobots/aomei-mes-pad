<template>
  <div class="vab-nav">
    <!-- <div class="left-panel">
      <vab-fold fold="contract-left-line" unfold="contract-right-line" />
      <el-tabs
        v-if="layout === 'comprehensive'"
        v-model="tab.data"
        class="comprehensive-tabs"
        tab-position="top"
        @tab-click="handleTabClick"
      >
        <template v-for="(item, index) in routes" :key="index + item.name">
          <el-tab-pane :name="item.name">
            <template #label>
              <vab-icon v-if="item.meta.icon" :icon="item.meta.icon" :is-custom-svg="item.meta.isCustomSvg" />
              {{ translate(item.meta.title) }}
            </template>
          </el-tab-pane>
        </template>
      </el-tabs>
      <vab-breadcrumb v-else class="hidden-xs-only hidden-md-and-down" />
    </div> -->
    <div class="user-info">
      <img :src="user?.avatar" alt="" />
    </div>
    <el-menu mode="horizontal" :router="true" class="nav-menu">
      <el-menu-item index="/production">生产</el-menu-item>
      <el-menu-item index="/report">报工</el-menu-item>
      <el-menu-item index="/quality">质检</el-menu-item>
      <el-menu-item index="/equipment">设备</el-menu-item>
      <el-menu-item index="/quotationRecord" class="alarm-menu-item">
        <span class="menu-text">报警</span>
      </el-menu-item>
    </el-menu>
    <div class="right-panel">
      <Message></Message>
      <vab-right-tools />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@/layout/components//Message'
import { openFirstMenu } from "/@/config";
import { translate } from "/@/i18n";
import { useRoutesStore } from "/@/store/modules/routes";
import { getRedirect } from "/@/utils/routerHelper";
import { isExternal } from "/@/utils/validate";
// import { useSettingsStore } from '/@/store/modules/settings'
// const settingsStore = useSettingsStore()
// console.log(settingsStore)
// const { theme, logo, title } = storeToRefs(settingsStore)
import { CACHE_KEY, useCache } from "/@/hooks/web/useCache";
const { wsCache } = useCache();
const user = ref();
onMounted(() => {
  const data = wsCache.get(CACHE_KEY.USER);
  user.value = data.user;
});
defineOptions({
  name: "VabNav",
});

defineProps({
  layout: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const routesStore = useRoutesStore();
const {
  getTab: tab,
  getTabMenu: tabMenu,
  getRoutes: routes,
} = storeToRefs(routesStore);

const handleTabClick = () => {
  nextTick(() => {
    if (isExternal(tabMenu.value.path)) {
      window.open(tabMenu.value.path);
      router.push("/redirect");
    } else if (openFirstMenu)
      router.push(getRedirect(tabMenu.value.path, tabMenu.value.children));
  });
};
</script>

<style lang="scss" scoped>
.vab-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: var(--el-nav-height);
  padding: 0 var(--el-padding);
  background: var(--el-color-white);
  border-bottom: 1px solid var(--el-border-color);

  .user-info {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    white-space: nowrap;

    img {
      width: 46px;
      margin-right: 12px;
      border-radius: 50%;
    }
  }

  .nav-menu {
    border: none;
    background: transparent;
    flex: 1;
    display: flex;
    justify-content: center;
    
    :deep(.el-menu-item) {
      height: var(--el-nav-height);
      line-height: var(--el-nav-height);
      padding: 0 16px;
      margin-right: 4px;
      font-size: 18px;
      color: var(--el-text-color-primary);
       // 添加以下样式去除点击时的蓝色背景
      &:focus{
        background-color: transparent !important;
      }
      &.is-active {
        color: var(--el-color-primary) !important;
        border-bottom: 3px solid var(--el-color-primary);
        font-weight: bold;
        background: transparent!important;
      }
      
      // 平板适配样式
      @media screen and (max-width: 820px) {
        padding: 0 10px;
        font-size: 16px;
      }
    }
    
    // 报警菜单项特殊处理
    :deep(.alarm-menu-item) {
      min-width: auto;
      overflow: visible;
      white-space: nowrap;
      
      .menu-text {
        display: inline-block;
      }
    }
  }
  
  .right-panel {
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    z-index: 2; 

    :deep([class*="ri-"]) {
      font-size: 20px;
      color: var(--el-text-color-regular);
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: var(--el-color-primary);
      }
    }
    
    // 平板适配样式
    @media screen and (max-width: 820px) {
      gap: 8px;
    }
  }
}

// 添加全局媒体查询，处理平板尺寸
@media screen and (max-width: 820px) {
  .vab-nav {
    padding: 0 10px;
    
    .user-info img {
      width: 40px;
      margin-right: 8px;
    }
  }
}
</style>
