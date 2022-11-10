<template>
  <div>
    <p>原来的样子：{{ msg }}</p>
    <p>使用全局过滤器：{{ msg | reverse }}</p>
    <p>使用局部过滤器的样子：{{ msg | toUp }}</p>
    <p :title="msg | reverse('0') | toUp">鼠标常停</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world',
    }
  },
  filters: {
    toUp(val) {
      return val.toUpperCase(val)
    },
  },
}
</script>

<style></style>
