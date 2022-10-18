<template>
  <div>
    <p>你要买的商品数量为：{{ count }}</p>
    <button @click="count++">数量+1</button>
    <button @click="fn">数量+3</button>
    <button @click="fn1(5)">数量+5</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    fn() {
      this.count += 3
    },
    fn1(n) {
      this.count += n
    },
  },
}
</script>

<style></style>
