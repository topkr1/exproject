<template>
  <div class="container">
    <!-- 로고 -->
    <nav class="sidebar">
      <header class="logo">LOGO</header>

      <!-- 문항 목록 -->
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @mouseover="hoverItem = index"
          @mouseleave="hoverItem = null"
          @click="navigate(item.route)"
          :class="{ active: activeItem === index, hover: hoverItem === index }"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>

    <!-- 페이지 내용 -->
    <main class="content">
      <slot /> <!-- 페이지별 내용 삽입 -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "내 정보 관리", route: "/my-information" },
        { name: "계정 보안 설정", route: "/account-security" },
        { name: "나의 활동 현황", route: "/activity-log" },
        { name: "나무 커스터마이징", route: "/customization" },
        { name: "고객 지원 및 문의", route: "/support" }
      ],
      activeItem: null,
      hoverItem: null,
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>

.container {
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.sidebar {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #ddd;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.sidebar li.hover {
  background-color: #f0f0f0;
}
.sidebar li.active {
  background-color: #e0e0e0;
  font-weight: bold;
}
.sidebar ul {
  margin-top: 20px;
}
.content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
}
</style>