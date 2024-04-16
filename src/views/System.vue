<template>
  <div class="system-container">
    <LeftOptions/>
    <div class="content">
      <Userinfo/>
      <Logout/>
    </div>
  </div>
</template>

<script>
import Logout from "@/components/Logout.vue";
import Userinfo from "@/components/GetUserInfo.vue";
import Sidebar from "@/components/LeftOptions.vue";
import LeftOptions from "@/components/LeftOptions.vue";

export default {
  name: 'System',
  components: {
    LeftOptions,
    Userinfo,
    Logout,
    Sidebar
  }
};
</script>

<style scoped>
.system-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
}

.content {
  flex-grow: 1;
}

/* Styles for the rest of the components remain the same */
</style>
