<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { Itoken } from '@/api/types/token'
import { onMounted, ref } from 'vue'

const list = ref<Itoken['expires']>()

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res.expires)
    list.value = res.expires
  })
})
</script>

<style lang="scss" scoped></style>
