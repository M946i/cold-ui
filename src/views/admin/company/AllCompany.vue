<template>
  <div class="company-list">
    <div v-for="company in companyList" :key="company.id" class="company-info">
      <!-- 显示公司信息 -->
      <div class="info-item">
        ID：{{ company.id }}
        企业名称：{{ company.company_name }}
        企业编号：{{ company.company_number }}
        负责人姓名：{{ company.company_manager_name }}
        负责人电话：{{ company.company_manager_phone }}
        企业地址：{{ company.company_address }}
        企业类型：{{ company.company_type }}
        创建时间：{{ formatTime(company.create_time) }}
        更新时间：{{ formatTime(company.update_time) }}
        <!-- 其他公司信息展示 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // 导入 ref 和 onMounted 函数
import api from "@/api";
import axios from "axios";

// 使用 ref 创建响应式数据
const companyList = ref([]);

// 使用 onMounted 定义 mounted 生命周期钩子
onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    // 获取所有公司信息
    const response = await axios.get(await api.getAllCompany(), {
      headers: { 'token': token } // 添加token到请求头
    });
    // 更新公司列表
    companyList.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

// 定义格式化时间函数
const formatTime = (time) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
};
</script>

<style scoped>
.company-list {
  display: flex;
  flex-wrap: wrap; /* 换行 */
}

.company-info {
  flex: 0 0 100%; /* 每个公司信息占据一半宽度 */
  padding: 10px;
}

.info-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
</style>
