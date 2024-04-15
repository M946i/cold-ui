<template>
  <div class="login-container">
    <h3>冷链物流监控数据管理系统</h3>
    <form @submit.prevent="login">
      <div class="form-group">
        <input v-model="username" type="text"  placeholder="用户名"/>
      </div>
      <div class="form-group">
        <input v-model="password" type="password" placeholder="密码"/>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import api from "@/api";

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const loginUrl = await api.getLogin(); // 等待获取登录路径
        const response = await axios.post(loginUrl, {
          username: this.username,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json' // 设置请求头为 application/json
          }
        });
        if (response.data.status === 'ok') {
          // 登录成功的处理逻辑
          console.log('登录成功');
        } else {
          // 登录失败的处理逻辑
          console.error('登录失败');
        }
      } catch (error) {
        console.error('登录请求出错', error);
      }
    }
  }
};
</script>


<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"],
input[type="password"] {
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #0056b3;
}
</style>
