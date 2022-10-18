<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>

    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} --- {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['唐僧', '孙悟空', '猪八戒', '沙僧'],
      list: [
        { id: '001', name: '张三', age: 18 },
        { id: '002', name: '李四', age: 19 },
        { id: '003', name: '王五', age: 20 },
      ],
    }
  },
}
</script>

<style></style>
