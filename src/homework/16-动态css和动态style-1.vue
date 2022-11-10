<template>
  <div>
    <p :class="{ red: flag }">动态css</p>
    <p :style="{ backgroundColor: colorStr }">动态css</p>
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
