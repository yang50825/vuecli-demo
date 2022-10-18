<template>
  <div>
    <div @click="fatherFn">
      <button @click.stop="btn">stop阻止事件冒泡</button>
      <a @click.prevent.stop="btn" href="http://www.baidu.com"
        >prenvent阻止事件默认行为</a
      >
      <button @click.once="btn">once 只触发一次</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fatherFn() {
      console.log('父级事件触发了')
    },
    btn() {
      console.log('btn点击事件')
    },
  },
}
</script>

<style></style>
