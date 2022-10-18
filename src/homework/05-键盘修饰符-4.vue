<template>
  <div>
    <input type="text" @keyup.enter="enterFn" />
  </div>
</template>

<script>
export default {
  methods: {
    enterFn() {
      console.log('用户按下了回车键')
    },
  },
}
</script>

<style></style>
