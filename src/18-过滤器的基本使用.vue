<template>
  <div>
    <p>原来的样子：{{ msg }}</p>
    <p>使用过滤器处理后：{{ msg | reverse('111') }}</p>
    <p>使用局部过滤器处理后：{{ msg | toUpCases }}</p>
    <p :title="msg | reverse | toUpCases">鼠标长停</p>
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
    toUpCases(val) {
      return val.toUpperCase()
    },
  },
}
</script>

<style></style>
