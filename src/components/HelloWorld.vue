<template>
  <h1>Hello WOrld</h1>
  <p>{{ props.msg }}</p>
  <p>{{ count }}</p>
  <button
    type="button"
    @click="increment"
  >
    Increment
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['increment'])

const count = ref(100)
const increment = () => {
  count.value++
  emit('increment')
}

</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
