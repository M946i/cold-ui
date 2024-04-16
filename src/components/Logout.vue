<template>
  <button class="logout-button" @click="logout">退出登录</button>
</template>

<script>
import axios from 'axios';
import api from "@/api";

export default {
  name: 'Logout',
  methods: {
    async logout() {
      const token = localStorage.getItem('token'); // 获取 token
      axios.post(await api.getLogout(), null, {headers: {'token': token}})// 发送 POST 请求到后端的 /logout 路径，并携带 token
          .then(() => {
            // 处理成功响应
            console.log('登出成功');
            // 清除本地存储中的 token
            localStorage.removeItem('token');
            // 跳转到登录页面或其他页面
            this.$router.push('/login');
          })
          .catch(error => {
            // 处理错误响应
            console.error('登出失败', error);
            // 可以根据实际需求进行错误处理
            alert('登出失败，请稍后重试');
          });
    }
  }
};
</script>

<style scoped>
.logout-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.logout-button:hover {
  background-color: #0056b3;
}
</style>
