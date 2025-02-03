import { createRouter, createWebHistory } from "vue-router";
import MyInformation from "@/views/MyInformation.vue";
import RealSecurity from "@/views/RealSecurity.vue";

const routes = [
  {
    path: "/",
    redirect: "/my-information",
  },
  {
    path: "/my-information", // "내 정보 관리" 페이지 경로
    component: MyInformation,
  },
  {
    path: "/account-security", // "계정 보안 설정" 경로
    component: RealSecurity,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
