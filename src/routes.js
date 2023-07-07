import PageHome from './components/PageHome.vue';
import PageAbout from './components/PageAbout.vue';
import PageNews from './components/PageNews.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: PageHome,
  },
  {
    path: '/about',
    component: PageAbout,
  },
  {
    path: '/news',
    component: PageNews,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
