<template>
  <div>
    <div class="content">
      <h4 class="title">品牌管理</h4>
      <table border="1px" class="product-list">
        <tr>
          <td>
            <input type="checkbox" v-model="isAll" />
          </td>
          <td>编号</td>
          <td>资产名称</td>
          <td>价格</td>
          <td>创建时间</td>
          <td>操作</td>
        </tr>
        <tr v-for="obj in list" :key="obj.id">
          <td>
            <input type="checkbox" v-model="obj.c" />
          </td>
          <td>{{ obj.id }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.price }}</td>
          <td>{{ obj.time | formatDate }}</td>
          <td>
            <div class="con-btn danger" @click="delFn(obj.id)">删除</div>
          </td>
        </tr>
        <tr v-if="list.length === 0">
          <td colspan="5" style="text-align: center">暂无数据</td>
        </tr>
        <tr v-if="list.length !== 0">
          <td>统计：</td>
          <td colspan="3">总价钱为：{{ totalPrice }}</td>
          <td colspan="2">平均价为：{{ avgPrice }}</td>
        </tr>
      </table>
      <form action="#">
        <input type="text" placeholder="资产名称" v-model="name" />
        <input type="text" placeholder="资产价格" v-model.number="price" />
      </form>
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
      list: JSON.parse(localStorage.getItem('productList')) || [],
    }
  },
  methods: {
    addFn() {
      if (this.name === '' || this.price <= 0) {
        alert('不能为空')
        return
      }
      this.list.push({
        id:
          this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1,
        name: this.name,
        price: this.price,
        time: new Date(),
        c: false,
      })
      this.name = ''
      this.price = 0
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
    isAll: {
      get() {
        if (this.list.length == 0) {
          return false
        }
        return this.list.every((obj) => obj.c === true)
      },
      set(value) {
        this.list.forEach((obj) => {
          obj.c = value
        })
      },
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newValue, oldValue) {
        localStorage.setItem('productList', JSON.stringify(this.list))
      },
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

form input {
  border: 1px solid #d4dadf;
  width: 100%;
  margin-top: 15px;
  height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
}

form input:focus {
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

.con-btn.danger {
  margin: 0;
  background-color: red;
}
.con-btn.danger:hover {
  background-color: rgb(155, 7, 7);
}

tr td:first-child {
  text-align: center;
}
</style>
