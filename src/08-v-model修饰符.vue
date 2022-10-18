<template>
  <div>年龄：<input type="text" v-model.number.lazy.trim="age" /></div>
</template>

<script>
export default {
  data() {
    return {
      age: 10,
    }
  },
}
</script>

<style></style>
