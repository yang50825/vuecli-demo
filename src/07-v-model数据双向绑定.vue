<template>
  <div>
    <p>用户名：<input type="text" v-model="name" /></p>
    <p>密码：<input type="password" v-model="pwd" /></p>
    <p>
      <select v-model="address">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
        <option value="深圳">深圳</option>
      </select>
    </p>
    <p>
      爱好：
      <input type="checkbox" value="吃饭" v-model="hobby" /> 吃饭
      <input type="checkbox" value="睡觉" v-model="hobby" /> 睡觉
      <input type="checkbox" value="打豆豆" v-model="hobby" /> 打豆豆
    </p>
    <p>
      性别：
      <input type="radio" name="sex" value="男" v-model="sex" /> 男
      <input type="radio" name="sex" value="女" v-model="sex" /> 女
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张三',
      pwd: '',
      address: [],
      hobby: [],
      sex: '',
    }
  },
}
</script>

<style></style>
