<template>
  <div>
    <div v-text="str"></div>
    <div v-html="str"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '<a href="#">百度一下你就知道</a>',
    }
  },
}
</script>

<style></style>
