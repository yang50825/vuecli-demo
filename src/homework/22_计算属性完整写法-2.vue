<template>
  <div>
    <p>姓名：<input type="text" v-model="full" /></p>
  </div>
</template>

<script>
export default {
  computed: {
    full: {
      set(val) {
        console.log(val)
      },
      get() {
        return '无名氏'
      },
    },
  },
}
</script>

<style></style>
