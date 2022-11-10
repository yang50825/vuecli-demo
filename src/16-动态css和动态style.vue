<template>
  <div>
    <!-- 动态css 语法 :class="{类名:布尔值}", 布尔值成立加类名,布尔值不成立不加类名 -->
    <p :class="{ red: flag }">动态css</p>
    <!-- 动态style :style="{css属性名:值}" -->
    <p :style="{ backgroundColor: colorStr }">动态style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      colorStr: 'red',
    }
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
