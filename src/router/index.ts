import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import('../views/ColorsView.vue'),
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('../views/IconsView.vue'),
    },
    {
      path: '/typography',
      name: 'typography',
      component: () => import('../views/TypographyView.vue'),
    },
    {
      path: '/ilustrations',
      name: 'ilustrations',
      component: () => import('../views/IlustrationsView.vue'),
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/PhotosView.vue'),
    },
    {
      path: '/backgrounds',
      name: 'backgrounds',
      component: () => import('../views/BackgroundsView.vue'),
    },
    {
      path: '/animations',
      name: 'animations',
      component: () => import('../views/AnimationsView.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/VideosView.vue'),
    },
    {
      path: '/sfx',
      name: 'sfx',
      component: () => import('../views/SfxView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/MusicView.vue'),
    },
    {
      path: '/3d',
      name: '3d',
      component: () => import('../views/3dView.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsView.vue'),
    },
    {
      path: '/libraries',
      name: 'libraries',
      component: () => import('../views/LibrariesView.vue'),
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/ToolsView.vue'),
    },
    {
      path: '/ai',
      name: 'ai',
      component: () => import('../views/AiView.vue'),
    },
    {
      path: '/inspirations',
      name: 'inspirations',
      component: () => import('../views/InspirationsView.vue'),
    },
  ],
});

export default router;
