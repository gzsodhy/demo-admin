<template>
  <h1>Hello World</h1>
  <abc />
  <foo msg="hello" />
</template>

<script lang="tsx" setup>
import Foo from './foo'
const abc = <h1>abc</h1>

</script>

<style lang="scss" scoped></style>
