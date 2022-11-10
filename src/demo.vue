<template>
  <div>
    <div class="content">
      <h4 class="title">品牌管理</h4>
      <table border="1px" class="product-list">
        <tr>
          <td>编号</td>
          <td>资产名称</td>
          <td>价格</td>
          <td>创建时间</td>
          <td>操作</td>
        </tr>
        <tr v-for="obj in list" :key="obj.id">
          <td>{{ obj.id }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.price }}</td>
          <td>{{ obj.time | formatDate }}</td>
          <td><a href="#" @click="delFn(obj.id)">删除</a></td>
        </tr>
        <tr v-if="list.length === 0">
          <td colspan="5" style="text-align: center">暂无数据</td>
        </tr>
        <tr v-if="list.length !== 0">
          <td>统计：</td>
          <td colspan="2">总价钱为：{{ totalPrice }}</td>
          <td colspan="2">平均价为：{{ avgPrice }}</td>
        </tr>
      </table>
      <input type="text" placeholder="资产名称" v-model="name" />
      <input type="text" placeholder="资产价格" v-model.number="price" />
      <div class="con-btn" @click="addFn">添加资产</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'App',
  data() {
    return {
      name: '',
      price: 0,
      list: [
        { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
        { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
        { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      ],
    }
  },
  methods: {
    addFn() {
      this.list.push({
        id: this.list[this.list.length - 1].id + 1,
        name: this.name,
        price: this.price,
        time: new Date(),
      })
    },
    delFn(id) {
      let index = this.list.findIndex((obj) => obj.id === id)
      this.list.splice(index, 1)
    },
  },
  filters: {
    formatDate(val) {
      return moment(val).format('YYYY-MM-DD')
    },
  },
  computed: {
    avgPrice() {
      return (this.totalPrice / this.list.length).toFixed(2)
    },
    totalPrice() {
      return this.list.reduce((sum, obj) => (sum += obj.price), 0)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 1010px;
  margin: 0 auto;
}

.title {
  color: #1c2126;
  line-height: 1;
  margin-bottom: 15px;
}

.product-list {
  width: 100%;
  border: 1px solid #dee2e6;
}

.product-list tr:first-child td {
  font-weight: bold;
  background-color: #fff;
}

.product-list tr:last-child {
  background-color: #d4dadf;
}

.product-list td {
  height: 30px;
  border: 1px solid #dee2e6;
  font-size: 12px;
  padding-left: 5px;
}

.product-list tr:hover {
  background-color: #d4dadf;
}

.content input {
  border: 1px solid #d4dadf;
  width: 100%;
  margin-top: 15px;
  height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
}

.content input:focus {
  box-shadow: 5px 5px 0 rgb(194, 219, 254), -5px -5px rgb(194, 219, 254);
}

.con-btn {
  cursor: pointer;
  font-size: 12px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #0d6efd;
  color: #fff;
  border-radius: 5px;
  margin-top: 15px;
}
</style>
