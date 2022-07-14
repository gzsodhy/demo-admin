<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header><toggle-sidebar /> <Breadcrumb /></el-header>
      <el-scrollbar>
        <el-main>
          <RouterView />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
import ToggleSidebar from './header/ToggleSidebar.vue'
import Breadcrumb from './header/Breadcrumb.vue'
</script>

<style lang="scss" scoped>
.el-header{
  background-color: rgb(255, 255, 255);
  padding: 0;
  // background-color: rgb(0, 39, 68);
}
.el-aside{
  width: auto;
  background-color: rgb(0, 49, 80);
}
.el-main{
  background-color: rgb(247, 247, 247);
}
.el-container{
  height: 100vh;
}
</style>
