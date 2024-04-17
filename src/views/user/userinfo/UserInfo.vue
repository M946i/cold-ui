<template>
  <div class="userinfo-container">
    <div v-if="userInfo" class="user-info">
      <p>上次登录时间：{{ formatTime(userInfo['上次登录时间']) }}&nbsp;&nbsp;&nbsp;&nbsp;登录ip：{{ userInfo['上次登录ip'] }}</p>
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
  },
  methods: {
    formatTime(time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
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
  margin-bottom: 0;
}

</style>
