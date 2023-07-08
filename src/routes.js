import PageHome from './components/PageHome.vue';
import PageAbout from './components/PageAbout.vue';
import PageNews from './components/PageNews.vue';
import WorkExperience from './components/PageAbout/WorkExperience.vue';
import EducationExperience from './components/PageAbout/EducationExperience.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: PageHome,
  },
  {
    path: '/about',
    component: PageAbout,
    children: [
      {
        path: 'work',
        component: WorkExperience,
        meta: { transition: 'fadeAndMove' },
      },
      {
        path: 'education',
        component: EducationExperience,
        meta: { transition: 'fadeAndMove' },
      },
    ],
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
