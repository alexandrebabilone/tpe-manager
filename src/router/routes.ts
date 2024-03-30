import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'user',
        name: 'user-post',
        component: () => import('pages/user/UserForm.vue'),
      },
      {
        path: 'user/:id',
        name: 'user-get',
        component: () => import('pages/user/UserForm.vue'),
      },
      {
        path: 'users',
        name: 'user-list',
        component: () => import('pages/user/UserList.vue'),
      },
      // CITY
      {
        path: 'cities',
        name: 'city-list',
        component: () => import('pages/user/CityList.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
