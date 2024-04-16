<template>
  <div class="sidebar">
    <div class="title">冷链物流监控系统</div>
    <div class="options">
      <div class="option" @click="toggleSubOptions('monitor')">监控记录</div>
      <div class="sub-options" :class="{ 'show': showSubOptions === 'monitor' }">
        <div class="sub-option">主机监控记录</div>
        <div class="sub-option">仪表监控记录</div>
      </div>
      <div class="option">统计报表</div>
      <div class="option" @click="toggleSubOptions('management')">系统管理</div>
      <div class="sub-options" :class="{ 'show': showSubOptions === 'management' }">
        <div class="sub-option">企业管理</div>
        <div class="sub-option">库房管理</div>
        <div class="sub-option">主机管理</div>
        <div class="sub-option">仪表管理</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftOptions',
  data() {
    return {
      showSubOptions: null
    };
  },
  methods: {
    toggleSubOptions(option) {
      this.showSubOptions = this.showSubOptions === option ? null : option;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.title {
  font-size: 20px;
  margin-bottom: 20px;
}

.options {
  display: flex;
  flex-direction: column;
}

.option {
  padding: 10px 0;
  cursor: pointer;
}

.sub-options {
  display: none;
  padding-left: 20px;
}

.sub-option {
  padding: 5px 0;
}

.show {
  display: block;
}
</style>
