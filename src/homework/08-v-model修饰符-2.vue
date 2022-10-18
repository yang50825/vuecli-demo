<template>
  <div>
    姓名：
    <input type="text" v-model.trim="name" />
    <br />
    年龄：
    <input type="text" v-model.number.lazy="age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
    }
  },
}
</script>

<style></style>
