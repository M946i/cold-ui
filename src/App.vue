<template>
  <h3>模板语法</h3>
  <p>{{msg}}</p>
  <p>{{hello.split(" ").reverse().join(" ")}}</p>
  <p v-html="rawHtml"></p>
  <div v-bind:class="act">测试</div>
</template>

<script>
 export default{
  data() {
    return {
      msg:"神奇的语法",
      hello:"Hello World",
      rawHtml:"<a href='https://itbaizhan.com'>百战程序员</a>",
      act:"active"
    }
  },
 }
</script>