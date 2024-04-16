<template>
  <div id="app">
    <router-view /> <!-- 这里是用于显示当前路由对应的组件的地方 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 设置所有元素的边距和内边距为零 */
* {
  margin: 0;
  padding: 0;
}
</style>
