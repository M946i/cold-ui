<template>
  <div class="userinfo-container">
    <div v-if="userInfo" class="user-info">
      <p>上次登录时间:{{ userInfo['上次登录时间']}}<br>登录ip:{{ userInfo['上次登录'+'ip']}}</p>
    </div>
    <div v-else>
      <p>Loading user info...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import api from "@/api";

export default {
  name: 'Userinfo',
  data() {
    return {
      userInfo: null
    };
  },
  async mounted() {
    try {
      const token = localStorage.getItem('token');
      const userInfoResponse = await axios.get(await api.getUserInfo(), {
        headers: {'token': token} // 添加token到请求头
      });
      this.userInfo = userInfoResponse.data;
    } catch (error) {
      console.error('Failed to fetch user info', error);
    }
  }
};
</script>

<style scoped>
.userinfo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.user-info {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
}

.user-info p {
  margin-bottom: 10px;
}

.loading-text {
  font-style: italic;
  color: #888;
}
</style>
