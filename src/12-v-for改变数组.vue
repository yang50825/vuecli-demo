<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">{{ val }}</li>
    </ul>
    <button @click="revBtn">数组反转</button>
    <button @click="sliceBtn">截取前三个</button>
    <button @click="updateBtn">替换第一个为1000</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    revBtn() {
      // 1.改变原数组：直接写
      this.arr.reverse()
    },
    sliceBtn() {
      // 2.返回新数组，重新赋值
      this.arr = this.arr.slice(0, 3)
    },
    updateBtn() {
      // 替换值 $set
      this.$set(this.arr, 0, 1000)
    },
  },
}
</script>

<style></style>
