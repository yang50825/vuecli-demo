<template>
  <div>
    <p>用户名：<input type="text" v-model="name" /></p>
    <p>密码：<input type="password" v-model="pwd" /></p>
    <p>
      来自于：
      <select v-model="address">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
      </select>
    </p>
    <p>
      爱好：
      <input type="checkbox" v-model="hobby" value="吃饭" /> 吃饭
      <input type="checkbox" v-model="hobby" value="睡觉" /> 睡觉
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
      name: '',
      pwd: '',
      address: '',
      hobby: [],
      sex: '',
    }
  },
}
</script>

<style></style>
