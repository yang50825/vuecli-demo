<template>
  <div>
    <p>你要购买的商品数量为：{{ count }}</p>
    <button v-on:click="count++">点击+1</button>
    <button @click="fn">点击+2</button>
    <button @click="fn1(5)">点击+5</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    fn() {
      this.count += 2
    },
    fn1(num) {
      this.count += num
    },
  },
}
</script>

<style></style>
