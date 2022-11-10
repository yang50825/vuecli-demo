<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="user.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      user: {
        name: '',
        age: 0,
      },
    }
  },
  // 侦听器基本写法
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    user: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>

<style></style>
