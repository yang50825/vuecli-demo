<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ obj.name }}</p>
    <p>{{ obj.age >= 18 ? '成年' : '未成年' }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'hello, vue',
      obj: {
        name: '张三',
        age: 8,
      },
    }
  },
}
</script>

<style></style>
