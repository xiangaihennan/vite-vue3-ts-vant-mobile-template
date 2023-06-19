import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/base/collect' },
    {
      path: '/base',
      component: () => import('@layout/BaseLayout.vue'),
      redirect: '/base/collect',
      children: [
        {
          path: '/base/collect',
          component: () => import('@views/CollectInfo/Index.vue'),
        },
      ],
    },
    // ... 其他路由
  ],
});
