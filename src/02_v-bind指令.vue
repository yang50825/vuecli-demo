<template>
  <div>
    <a :href="url">百度</a>
    <img v-bind:src="imgSrc" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      url: 'http://www.baidu.com/',
      imgSrc:
        'https://img0.baidu.com/it/u=3156137851,1307209439&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666198800&t=66987b2f9f9d9b11ae6737a0d5323aab',
    }
  },
}
</script>

<style></style>
