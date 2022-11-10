<template>
  <div>
    <p><input type="text" v-model="name" /></p>
    <p><input type="text" v-model="user.name" /></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      user: {
        name: '',
        age: 0,
      },
    }
  },
  watch: {
    name(newValue, oldValue) {
      console.log(newValue + '===' + oldValue)
    },
    user: {
      deep: true,
      handler(newValue, oldValue) {
        console.log(newValue + '===' + oldValue)
      },
    },
  },
}
</script>

<style></style>
