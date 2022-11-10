<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <td>{{ obj.time | formatDate }}</td>
            <td><a href="#" @click="delFn(obj.id)">删除</a></td>
          </tr>
        </tbody>

        <tfoot>
          <tr v-if="list.length === 0">
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice }}</td>
            <td colspan="2">平均价: {{ svgPrice }}</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              v-model="name"
              class="form-control"
              placeholder="资产名称"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              v-model.number="price"
              class="form-control"
              placeholder="价格"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
//  1、准备静态页面，下载bootstrap, main.js引入bootstrap.css
//  2、使用v-for循环铺设数据
//  3、处理价格 动态class
//  4、新增
// 5、删除
import moment from "moment";
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
    };
  },
  methods: {
    addFn() {
      if (this.name.trim().length === 0 || this.price === 0) {
        alert("不能为空");
        return;
      }
      this.list.push({
        // 获取list数组的最后一个对象的id
        id: this.list[this.list.length - 1].id + 1,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
    },
    delFn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
  },
  //定义过滤器
  filters: {
    formatDate(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  computed:{
    // 求总价
    allPrice(){
      return this.list.reduce((sum,obj)=> sum += obj.price ,0)
    },
    // 均价
    svgPrice(){
      return (this.allPrice/this.list.length).toFixed(2)
    }
  }
};
</script>

<style >
.red {
  color: red;
}
</style>
</style>