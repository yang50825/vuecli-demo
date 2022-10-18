<template>
  <div>
    <ul>
      <li v-for="val in arr" :key="val.id">
        {{ val.id }} --- {{ val.name }}
        <input type="text" />
      </li>
    </ul>
    <button @click.once="add">让下标一的位置插入新来的</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { id: '001', name: '老大' },
        { id: '002', name: '老二' },
        { id: '003', name: '老仨' },
      ],
    }
  },
  methods: {
    add() {
      this.arr.splice(1, 0, { id: '004', name: '新来的' })
    },
  },
}
</script>

<style></style>
