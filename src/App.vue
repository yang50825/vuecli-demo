<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['唐僧', '孙悟空', '猪八戒', '沙僧'],
    }
  },
}
</script>

<style></style>
