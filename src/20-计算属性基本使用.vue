<template>
  <div>
    <p>计算属性的值：{{ num }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ getReverseMsg() }}</p>
    <p>{{ getReverseMsg() }}</p>
    <p>{{ getReverseMsg() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
      msg: 'hello, world',
    }
  },
  computed: {
    // 计算属性：
    // 使用场景：一个变量的值，需要另外的变量计算而得来
    // 计算属性和data属性都是变量，因此不能重名
    // 函数内变量变化会自动重新计算结果并返回

    // 计算属性的优势：带缓存
    // 计算属性对应函数执行后，会把return值缓存起来
    // 依赖项不变，多次调用后都是从缓存中取值
    // 依赖项改变，重新计算
    num() {
      return this.a + this.b
    },
    reverseMsg() {
      console.log('计算属性执行了')
      return this.msg.split('').reverse().join('')
    },
  },
  methods: {
    getReverseMsg() {
      console.log('函数执行了')
      return this.msg.split('').reverse().join('')
    },
  },
}
</script>

<style></style>
