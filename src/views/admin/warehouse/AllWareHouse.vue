<template>
  <div class="warehouse-list">
    <div v-for="warehouse in warehouseList" :key="warehouse.id" class="warehouse-info">
      <div class="info-item">
        ID：{{warehouse.id}}
        企业编号：{{warehouse.company_number}}
        库房名称：{{warehouse.warehouse_name}}
        库房编号：{{warehouse.warehouse_number}}
        负责人姓名：{{warehouse.warehouse_manager_name}}
        负责人电话：{{warehouse.warehouse_manager_phone}}
        库房面积：{{warehouse.warehouse_size}}
        库房地址：{{warehouse.warehouse_address}}
        库房类型：{{warehouse.warehouse_type}}
        库房状态：{{warehouse.warehouse_status}}
        经度：{{warehouse.latitude}}
        纬度：{{warehouse.longitude}}
        创建时间：{{formatTime(warehouse.create_time)}}
        更新时间：{{formatTime(warehouse.update_time)}}
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import api from "@/api";

const warehouseList = ref([])
onMounted(async()=>{
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(await api.getAllWarehouse(), {
      headers: {
        'token': token
      }
    })
    warehouseList.value = response.data
  } catch (error) {
    console.log(error)
  }
})
const formatTime = (time) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
}
</script>

<style scoped>
.warehouse-list {
  display: flex;
  flex-wrap: wrap;
}

.warehouse-info {
  flex: 0 0 100%;
  padding: 10px;
}

.info-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
</style>