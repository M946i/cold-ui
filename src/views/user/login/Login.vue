<template>
  <div class="global-background">
    <div class="login-container">
      <h3>冷链物流监控数据管理系统</h3>
      <form @submit.prevent="login">
        <div class="form-group">
          <input v-model="username" type="text" placeholder="username"/>
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="password"/>
        </div>
        <button type="submit" :disabled="loading || !username || !password">{{ loading ? '正在登录...' : '登录' }}</button>
      </form>
    </div>
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
      password: '',
      loading: false // 加载状态
    };
  },
  methods: {
    async login() {
      // 检查用户名和密码是否为空
      if (!this.username || !this.password) {
        console.error('用户名和密码不能为空');
        return;
      }

      try {
        this.loading = true; // 设置加载状态为true
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
          // 获取到 token
          const token = response.data.token;

          // 将 token 存储到本地存储中，或者 Vuex 状态管理中，以便后续使用
          localStorage.setItem('token', token);

          // 设置全局请求头
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          // 登录成功后进行路由导航
          await this.$router.push('/system'); // 修正此处

          // 登录成功的处理逻辑.
          console.log('登录成功');
        } else {
          // 登录失败的处理逻辑
          console.error('登录失败');
        }
      } catch (error) {
        console.error('登录请求出错', error);
      } finally {
        this.loading = false; // 无论请求成功还是失败，都将加载状态重置为false
      }
    }
  }
};
</script>

<style scoped>
.global-background {
  margin: 0;
  background-image: url("http://127.0.0.1:8080/cold.png"); /* 设置全局背景颜色 */
  background-size: cover; /* 将背景图片全屏显示 */
  height: 100vh; /* 将高度设置为视窗高度 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.login-container {
  background-color: #fff; /* 登录容器背景颜色 */
  padding: 20px;
  border-radius: 10px;
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
  width: 100%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
