<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in arr2" :key="index">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <div v-for="obj in data" :key="obj.id">
      <span>{{ obj.id }}</span>
      <span>{{ obj.name }}</span>
      <span>{{ obj.tel }}</span>
      <span>{{ obj.time }}</span>
      <span>{{ obj.tag }}</span>
      <span>{{ obj.age }}</span>
    </div>
    <button @click="revArr">数组翻转</button><br />
    <button @click="sliceArr">截取前三个</button><br />
    <button @click="updateArr">替换第一个值为1000</button><br />
    <button @click="pushArr">在末尾添加一个值</button><br />
    <button @click="popArr">在末尾移除一个值</button><br />
    <button @click="shiftArr">移除第一个元素的值</button><br />
    <button @click="unshiftArr">在开头添加一个或更多元素</button><br />
    <!-- splice(index,len,[item])
     它也可以用来替换/删除/添加数组内某一个或者几个值
     该方法会改变原始数组 -->
    <button @click="spliceArr">替换/删除/添加</button><br />
    <button @click="sortArr">排序</button><br />
    <button @click="filterArr">筛选数组中满足某条件的集合</button><br />
    <button @click="filterArr2">去重</button><br />
    <button @click="concatArr">拼接</button><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      arr2: [12, 32, 22, 1, 3, 34, 11],
      data: [
        {
          id: 1,
          name: '小馨',
          tel: '136****123',
          time: '2022-04-12',
          tag: '0',
          age: '20',
        },
        {
          id: 2,
          name: '小航',
          tel: '136****456',
          time: '2022-04-14',
          tag: '1',
          age: '21',
        },
        {
          id: 3,
          name: '大航',
          tel: '152****789',
          time: '2022-04-16',
          tag: '1',
          age: '22',
        },
        {
          id: 4,
          name: '小艺',
          tel: '158****987',
          time: '2022-04-14',
          tag: '0',
          age: '21',
        },
      ],
      list: ['小馨', '小白', '小张', '小航', '小馨', '小航'],
    }
  },
  methods: {
    revArr() {
      this.arr.reverse()
    },
    sliceArr() {
      let newArr = this.arr.slice(0, 3)
      this.arr = newArr
    },
    updateArr() {
      //替换 $set(当前数组，要改变的参数下表，要改变的值)
      this.$set(this.arr, 0, 1000)
    },
    pushArr() {
      this.arr.push(6)
    },
    popArr() {
      this.arr.pop()
    },
    shiftArr() {
      this.arr.shift()
    },
    unshiftArr() {
      this.arr.unshift(1, 2)
    },
    // index:数组开始下标
    // len: 替换/删除的长度
    // item:替换的值，删除操作的话 item为空
    spliceArr() {
      //替换
      // this.arr.splice(1,2,6)
      //删除
      // this.arr.splice(2,3)
      //添加(在下标为1处添加)
      this.arr.splice(1, 0, 99)
    },
    sortArr() {
      this.arr2.sort()
    },
    filterArr() {
      //已审核数组okList
      this.okList = this.data.filter((obj) => obj.tag === '1')
      console.log(this.okList)
      /**
      [{ id:2, name:'小航', tel:'136****456', time:'2022-04-14', tag:'1',age:'21' },
      { id:3, name:'大航', tel:'152****456', time:'2022-04-16', tag:'1',age:'22' }]
      */
      //新数组newList
      // this.newList= this.data.filter(obj =>{
      //     return obj.tag === '0' && obj.age < '21'
      // })
      // console.log(this.newList)
      //	[{ id:1, name:'小馨', tel:'136****123', time:'2022-04-12', tag:'0',age:'20' }]
    },
    filterArr2() {
      this.newData = this.list.filter(
        (item, index, self) => self.indexOf(item) === index
      )
      console.log(this.newData)
      // 控制台输出
      // ['小馨', '小白', '小张', '小航']
    },
    concatArr() {
      this.arr3 = this.arr2.concat(this.arr)
      console.log(this.arr3)
    },
  },
}
</script>

<style></style>
