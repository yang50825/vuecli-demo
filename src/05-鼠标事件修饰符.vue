<template>
  <div>
    <input type="text" @keyup.enter="fn" />
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log('按下了enter键盘')
    },
  },
}
</script>

<style></style>
