

import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from "@/pages/IndexPage.vue";
import PersonalPage from "@/pages/PersonalPage.vue";


const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/PersonalPage',
    component: PersonalPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
