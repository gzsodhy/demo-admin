<template>
  <div class="hover-tigger">
    <el-icon
      color="#222"
      :size="24"
      class="cursor-pointer"
    >
      <component
        :is="iconName"
        @click="handleCollapse"
      />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'
const store = useStore()

const iconName = computed(() => {
  return store.state.isCollapse ? 'Expand' : 'Fold'
})

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
<style lang="scss" scoped>
.hover-tigger {
  float: left;
    display: flex;
    height: 100%;
    width: 25px;
    padding: 1px 10px 0;
    cursor: pointer;
    align-items: center;
    transition: background(.2s);
}
.hover-tigger:hover {
    background-color:#f6f6f6;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
