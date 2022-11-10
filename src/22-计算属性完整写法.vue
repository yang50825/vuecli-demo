<template>
  <div>
    <p>姓名：<input type="text" v-model="full" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    full: {
      get() {
        return '无名氏'
      },
      set(val) {
        this.name = val
      },
    },
  },
}
</script>

<style></style>
