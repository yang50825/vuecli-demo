<template>
  <div>
    <a href="http://www.baidu.com" @click="fn">阻止去百度</a>
    <br />
    <a href="http://www.baidu.com" @click.prevent>阻止去百度2</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn(e) {
      e.preventDefault()
    },
    fn1() {
      console.log('阻止事件默认行为')
    },
  },
}
</script>

<style></style>
