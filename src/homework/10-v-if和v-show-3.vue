<template>
  <div>
    <h1 v-show="isOk">v-show的盒子</h1>
    <h1 v-if="!isOk">v-if的盒子</h1>
    <p v-if="age > 18">成年了</p>
    <p v-else-if="age == 18">刚成年</p>
    <p v-else>成年了</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      age: 18,
      isOk: true,
    }
  },
}
</script>

<style></style>
