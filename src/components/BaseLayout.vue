<template>
  <div class="container">
    <!-- 상단바 -->
    <header class="header">
      <div class="logo">
        <button @click="goToPage('main')">LOGO</button>
      </div>
      <nav class="nav">
        <button @click="goToPage('/my-information')">마이페이지</button>
        <button @click="goToPage('qa')">문답</button>
        <button @click="goToPage('memories')">주마등</button>
        <button @click="goToPage('friends')">친구페이지</button>
      </nav>
      <div class="signup">
        <button @click="goToPage('signup')">회원가입</button>
      </div>
    </header>

    <div class="main-layout">
      <!-- 사이드바 -->
      <nav class="sidebar">
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
    goToPage(route) {
      if (route === "main"){
        window.location.href = "http://localhost:8080";
      }else{
      this.$router.push(route);
      }
    }
  }
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.logo button {
  all: unset;
}

.nav button,
.signup button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}

.nav button:hover,
.signup button:hover {
  background-color: #eee;
}

.main-layout {
  display: flex;
  flex: 1;
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
