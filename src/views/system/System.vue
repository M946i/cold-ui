<template>
  <div class="system-container">
    <div class="content">
      <Userinfo/>
      <Logout/>
      <AllCompany/>
      <AllWareHouse/>

    </div>
  </div>
</template>

<script>
import Logout from "@/views/user/logout/Logout.vue";
import Userinfo from "@/views/user/userinfo/UserInfo.vue";
import AllCompany from "@/views/admin/company/AllCompany.vue";
import AllWareHouse from "@/views/admin/warehouse/AllWareHouse.vue";



export default {
  name: 'System',
  components: {
    AllWareHouse,
    Userinfo,
    Logout,
    AllCompany
  },
};
</script>

<style scoped>
.system-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.system-container {
  background-image: url("http://127.0.0.1:8080/cold.png");
  background-size: cover;
}



/* Styles for the rest of the components remain the same */
</style>
