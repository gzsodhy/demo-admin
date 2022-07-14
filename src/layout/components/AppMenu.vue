<template>
  <el-scrollbar>
    <el-menu
      active-text-color="#002744"
      background-color="#003150"
      class="el-menu-vertical-demo"
      default-active="/a"
      text-color="#fff"
      :collapse="store.state.isCollapse"
      router
    >
      <el-sub-menu index="/">
        <template #title>
          <el-icon><location /></el-icon>
          <span>首页</span>
        </template>
        <el-menu-item index="1-5">
          工作台
        </el-menu-item>
        <el-menu-item index="1-1">
          分析页
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/h">
        <template #title>
          <el-icon><location /></el-icon>
          <span>运单</span>
        </template>
        <el-sub-menu index="1-4">
          <template #title>
            item four
          </template>
          <el-menu-item index="1-4-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-4-2">
            item one1
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="1-5">
          item 1111
        </el-menu-item>
        <el-menu-item index="1-1">
          item 333
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/a">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>设置</span>
        </template>
        <el-sub-menu index="8-1">
          <template #title>
            管理员
          </template>
          <el-menu-item index="1-4-1">
            会员列表
          </el-menu-item>
          <el-menu-item index="/permission/admin">
            管理列表
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/permission/role">
          权限列表
        </el-menu-item>
        <el-menu-item index="/permission/rule">
          角色列表
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/b">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { useStore } from '@/store'
const store = useStore()
</script>

<style lang="scss" scoped>
.el-menu{
  border-right: none;
}
// .el-sub-menu .el-menu-item:not(.is-active) {
//     background-color: #f60 !important;
// }
.el-menu-item.is-active {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(0, 150, 136) !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
