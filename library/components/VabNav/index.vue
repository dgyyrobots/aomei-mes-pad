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
    <el-col
      :span="3"
      style="
        font-size: 36px;
        font-weight: bold;
        display: flex;
        align-items: center;white-space: nowrap;
      "
    >
      <img :src="user?.avatar" style="width: 50px" alt="" />
      {{ user?.nickname }}
    </el-col>
    <el-col :span="18" class="left">
      <router-link to="/production">生产</router-link>
      <router-link to="/report">报工</router-link>
      <router-link to="/quality">质检</router-link>
      <router-link to="/equipment">设备</router-link>
      <router-link to="/quotationRecord">报警记录</router-link>
    </el-col>
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

<style lang="scss">
.vab-layout-comprehensive {
  .comprehensive-tabs {
    width: calc(100vw - var(--el-left-menu-width) - 675px) !important;
  }
}
</style>
<style lang="scss" scoped>
.left {
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  a {
    white-space: nowrap;
    padding: 0 20px;
    color: #000;
    margin-right: 50px;
    font-size: 18px;
  }
  .router-link-active {
    border-radius: 3px;
    // background-color: #3f91fd;
    color: #3f91fd !important;
    position: relative;
    display: block;
    &::before {
      content: "";
      width: 100%;
      display: block;
      border-bottom: 3px solid #409eff; /* 这里设置边框的样式，比如黑色实线，粗细为 1px */
      position: absolute;
      bottom: -90%;
      left: 0;
    }
  }

  font-size: 14px;
}
.vab-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: var(--el-nav-height);
  padding-right: var(--el-padding);
  padding-left: var(--el-padding);
  overflow: hidden;
  user-select: none;
  background: var(--el-color-white);
  border-bottom: 1px solid var(--el-border-color);

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: var(--el-nav-height);

    :deep() {
      .fold-unfold {
        margin-right: var(--el-margin);
      }

      .el-tabs {
        width: 100%;
        margin-left: 0;

        .el-tabs__header {
          margin: 0;

          > .el-tabs__nav-wrap {
            display: flex;
            align-items: center;

            .el-icon-arrow-left,
            .el-icon-arrow-right {
              font-weight: 600;
              color: var(--el-color-grey);
            }
          }
        }

        .el-tabs__item {
          > div {
            display: flex;
            align-items: center;

            i {
              margin-right: 3px;
            }
          }
        }
      }

      .el-tabs__nav-wrap::after {
        display: none;
      }
    }
  }

  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: var(--el-nav-height);
    transition: var(--el-transition);

    :deep() {
      [class*="ri-"] {
        margin-left: var(--el-margin);
        color: var(--el-color-grey);
        cursor: pointer;
      }

      button {
        [class*="ri-"] {
          margin-left: 0;
          color: var(--el-color-white);
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .right-panel {
      :deep() {
        .el-badge,
        .ri-refresh-line {
          display: none;
        }
      }
    }
  }
}
</style>
